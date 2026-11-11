"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

type LonLat = [number, number];

/* Simplified outline of continental Africa (lon, lat), clockwise from Tangier. */
const AFRICA: LonLat[] = [
  [-5.9, 35.8], [-2.0, 35.1], [1.0, 36.5], [3.1, 36.8], [6.5, 37.1], [9.8, 37.3], [11.1, 37.0],
  [10.4, 36.0], [10.8, 34.7], [10.2, 33.9], [11.6, 33.1], [13.2, 32.9], [15.2, 32.4], [16.6, 31.2],
  [18.5, 30.5], [19.5, 30.3], [20.1, 32.1], [21.7, 32.9], [23.1, 32.6], [24.9, 31.9], [27.0, 31.4],
  [29.0, 30.9], [29.9, 31.2], [31.0, 31.6], [32.3, 31.3], [34.2, 31.3], [34.9, 29.5], [34.3, 27.8],
  [32.7, 29.9], [33.8, 27.2], [35.5, 24.0], [36.9, 22.0], [37.2, 20.0], [37.5, 18.5], [38.6, 18.0],
  [39.5, 15.5], [41.0, 14.2], [42.6, 13.2], [43.3, 11.8], [44.9, 10.4], [47.0, 11.2], [49.2, 11.3],
  [51.3, 11.8], [50.8, 9.5], [49.8, 7.5], [48.5, 5.4], [47.0, 3.2], [45.3, 2.0], [43.5, 0.5],
  [42.0, -1.0], [41.0, -1.9], [40.1, -2.8], [39.6, -4.2], [39.2, -6.0], [39.3, -7.0], [39.6, -8.9],
  [40.4, -10.4], [40.5, -12.2], [40.7, -14.6], [40.2, -16.2], [38.3, -17.4], [36.6, -18.7],
  [34.9, -19.8], [35.5, -22.5], [35.4, -24.0], [33.0, -25.3], [32.5, -26.5], [31.9, -28.9],
  [30.5, -30.8], [28.9, -32.3], [27.0, -33.5], [25.6, -34.0], [23.0, -34.1], [20.0, -34.8],
  [18.5, -34.1], [18.3, -32.8], [17.9, -31.0], [16.9, -29.0], [15.2, -27.0], [14.5, -22.9],
  [13.5, -20.0], [11.8, -17.3], [12.0, -15.0], [13.0, -12.8], [13.2, -9.0], [12.4, -6.1],
  [12.0, -5.0], [10.7, -3.4], [9.0, -1.0], [8.8, -0.6], [9.4, 0.4], [9.7, 1.1], [9.8, 2.2],
  [9.7, 3.7], [8.7, 4.3], [7.0, 4.4], [5.7, 4.3], [4.4, 5.9], [3.4, 6.4], [1.2, 6.1], [-0.2, 5.5],
  [-2.1, 4.75], [-4.0, 5.3], [-6.6, 4.7], [-7.7, 4.4], [-10.8, 6.3], [-13.2, 8.5], [-13.7, 9.5],
  [-15.6, 11.8], [-16.7, 12.5], [-17.5, 14.7], [-16.5, 16.0], [-16.0, 18.1], [-17.0, 20.9],
  [-16.0, 23.7], [-14.5, 26.0], [-13.2, 27.2], [-11.1, 28.5], [-9.6, 30.4], [-7.6, 33.6], [-6.8, 34.0],
];

const MADAGASCAR: LonLat[] = [
  [49.3, -12.0], [50.4, -15.5], [49.4, -18.0], [48.3, -21.5], [47.1, -25.0], [45.1, -25.6],
  [43.7, -23.5], [43.3, -21.0], [44.4, -16.2], [46.9, -15.4], [48.0, -13.5],
];

const HUB = { name: "Libreville", lon: 9.45, lat: 0.39 };
const CITIES = [
  { name: "Kigali", lon: 30.06, lat: -1.95 },
  { name: "Abidjan", lon: -4.02, lat: 5.36 },
  { name: "Dakar", lon: -17.47, lat: 14.69 },
  { name: "Lagos", lon: 3.38, lat: 6.52 },
  { name: "Nairobi", lon: 36.82, lat: -1.29 },
  { name: "Casablanca", lon: -7.59, lat: 33.57 },
  { name: "Cairo", lon: 31.24, lat: 30.04 },
  { name: "Johannesburg", lon: 28.05, lat: -26.2 },
];

const K = 0.115; // degrees -> scene units
const LON0 = 17;
const LAT0 = 2;
const project = (lon: number, lat: number) => new THREE.Vector3((lon - LON0) * K, (lat - LAT0) * K, 0);

function inside(p: LonLat, poly: LonLat[]) {
  let c = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    if (yi > p[1] !== yj > p[1] && p[0] < ((xj - xi) * (p[1] - yi)) / (yj - yi) + xi) c = !c;
  }
  return c;
}

const VERT = /* glsl */ `
  uniform float uTime; uniform float uSize; uniform float uPR;
  attribute float aSeed; varying float vA;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    float w = 0.5 + 0.5 * sin(uTime * 1.1 - position.x * 0.9 + position.y * 0.4 + aSeed * 2.0);
    vA = 0.35 + 0.65 * w;
    gl_PointSize = uSize * uPR * (1.0 + 0.5 * w) * (10.0 / -mv.z);
  }`;
const FRAG = /* glsl */ `
  uniform vec3 uColor; varying float vA;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    gl_FragColor = vec4(uColor, smoothstep(0.5, 0.1, d) * vA);
  }`;

/** Dotted map of Africa with a Libreville hub streaming to key cities. */
export default function HeroScene() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    const group = new THREE.Group();
    group.rotation.x = -0.55;
    scene.add(group);

    /* Dots: hex-ish grid kept only where inside the polygons */
    const STEP = 1.1;
    const pos: number[] = [];
    const seed: number[] = [];
    let row = 0;
    for (let lat = -35.5; lat <= 37.8; lat += STEP * 0.88, row++) {
      const off = row % 2 ? STEP / 2 : 0;
      for (let lon = -18; lon <= 52; lon += STEP) {
        const p: LonLat = [lon + off, lat];
        if (inside(p, AFRICA) || inside(p, MADAGASCAR)) {
          const v = project(p[0], p[1]);
          pos.push(v.x, v.y, 0);
          seed.push(Math.random());
        }
      }
    }
    const dotGeo = new THREE.BufferGeometry();
    dotGeo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    dotGeo.setAttribute("aSeed", new THREE.Float32BufferAttribute(seed, 1));
    const dotMat = new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uSize: { value: 0.55 },
        uPR: { value: renderer.getPixelRatio() },
        uColor: { value: new THREE.Color(0xf07800) },
      },
    });
    group.add(new THREE.Points(dotGeo, dotMat));

    /* Faint coastline */
    const lineMat = new THREE.LineBasicMaterial({ color: 0xf07800, transparent: true, opacity: 0.3 });
    [AFRICA, MADAGASCAR].forEach((poly) => {
      const g = new THREE.BufferGeometry().setFromPoints(poly.map(([lo, la]) => project(lo, la)));
      group.add(new THREE.LineLoop(g, lineMat));
    });

    /* City markers + pulsing rings */
    const hubPos = project(HUB.lon, HUB.lat);
    const all = [{ ...HUB, hub: true }, ...CITIES.map((c) => ({ ...c, hub: false }))];
    const rings: { mesh: THREE.Mesh; phase: number }[] = [];
    const ringGeo = new THREE.RingGeometry(0.08, 0.1, 40);
    const coreGeoHub = new THREE.SphereGeometry(0.1, 16, 16);
    const coreGeo = new THREE.SphereGeometry(0.06, 16, 16);
    const hubMat = new THREE.MeshBasicMaterial({ color: 0xf07800 });
    const cityMat = new THREE.MeshBasicMaterial({ color: 0xfe761a });
    all.forEach((c, i) => {
      const p = project(c.lon, c.lat);
      const core = new THREE.Mesh(c.hub ? coreGeoHub : coreGeo, c.hub ? hubMat : cityMat);
      core.position.copy(p);
      group.add(core);
      const ring = new THREE.Mesh(
        ringGeo,
        new THREE.MeshBasicMaterial({ color: 0xf07800, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide })
      );
      ring.position.copy(p);
      group.add(ring);
      rings.push({ mesh: ring, phase: (i * 0.17) % 1 });
    });

    /* Arcs from the Libreville hub + travelling pulses */
    const arcMat = new THREE.LineBasicMaterial({ color: 0xf07800, transparent: true, opacity: 0.35 });
    const pulseGeo = new THREE.SphereGeometry(0.045, 12, 12);
    const pulseMat = new THREE.MeshBasicMaterial({ color: 0xffb787 });
    const pulses: { mesh: THREE.Mesh; curve: THREE.QuadraticBezierCurve3; offset: number; speed: number }[] = [];
    CITIES.forEach((c, i) => {
      const b = project(c.lon, c.lat);
      const mid = hubPos.clone().add(b).multiplyScalar(0.5);
      mid.z += hubPos.distanceTo(b) * 0.35;
      const curve = new THREE.QuadraticBezierCurve3(hubPos, mid, b);
      group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(48)), arcMat));
      const mesh = new THREE.Mesh(pulseGeo, pulseMat);
      group.add(mesh);
      pulses.push({ mesh, curve, offset: i * 0.13, speed: 0.18 + (i % 3) * 0.04 });
    });

    /* Layout + animation */
    const mouse = { x: 0, y: 0 };
    const onMove = (e: PointerEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove);

    const frame = (t: number) => {
      dotMat.uniforms.uTime.value = t;
      group.rotation.y += (Math.sin(t * 0.2) * 0.22 + mouse.x * 0.2 - group.rotation.y) * 0.05;
      group.rotation.x += (-0.55 + mouse.y * 0.1 - group.rotation.x) * 0.05;
      rings.forEach((r) => {
        const p = (t * 0.45 + r.phase) % 1;
        r.mesh.scale.setScalar(1 + p * 3.5);
        (r.mesh.material as THREE.MeshBasicMaterial).opacity = (1 - p) * 0.6;
      });
      pulses.forEach((p) => p.mesh.position.copy(p.curve.getPoint((t * p.speed + p.offset) % 1)));
      renderer.render(scene, camera);
    };

    const clock = new THREE.Clock();
    const resize = () => {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.position.z = Math.max(11.5, 9.6 / (0.828 * camera.aspect));
      camera.updateProjectionMatrix();
      frame(clock.elapsedTime);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    let raf = 0;
    const tick = () => {
      frame(clock.getElapsedTime());
      raf = requestAnimationFrame(tick);
    };
    if (!reduce) tick();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      scene.traverse((o) => {
        const m = o as THREE.Mesh;
        m.geometry?.dispose?.();
        const mat = m.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach((x) => x.dispose());
        else mat?.dispose?.();
      });
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 -z-10 h-[620px] w-full opacity-90"
    />
  );
}