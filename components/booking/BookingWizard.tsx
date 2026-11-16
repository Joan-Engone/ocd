"use client";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import StepHeader from "@/components/booking/StepHeader";
import ModeStep from "@/components/booking/ModeStep";
import PackageStep from "@/components/booking/PackageStep";
import DetailsStep, { type ContactFields } from "@/components/booking/DetailsStep";
import BookingFaq from "@/components/booking/BookingFaq";
import { modes, packs, type CategoryId, type ModeId, type PackId, type SlotId } from "@/lib/booking-data";

/** Next free weekday at least 3 days from now, used as the default date. */
function defaultDate() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 3);
  while (d.getDay() === 0 || d.getDay() === 6) d.setDate(d.getDate() + 1);
  return d;
}

export default function BookingWizard() {
  const [mode, setMode] = useState<ModeId>("cloud");
  const [pack, setPack] = useState<PackId>("growth");
  const [date, setDate] = useState<Date | null>(() => defaultDate());
  const [slot, setSlot] = useState<SlotId>("prime");
  const [category, setCategory] = useState<CategoryId>("beaute");
  const [sent, setSent] = useState(false);
  const [reference, setReference] = useState("");

  const summary = `${packs.find((p) => p.id === pack)?.label} · ${modes.find((m) => m.id === mode)?.label}`;

  const handleSubmit = (contact: ContactFields) => {
    const payload = {
      mode,
      pack,
      date: date?.toISOString() ?? null,
      slot,
      category,
      ...contact,
    };

    // TODO: send `payload` to your backend (API route, server action or email service).
    if (process.env.NODE_ENV === "development") console.info("Booking request", payload);

    setReference(`SLP-${new Date().getFullYear()}-LIVE-${Math.floor(100 + Math.random() * 900)}`);
    setSent(true);
  };

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-12">
      <div className="flex flex-col gap-16">
        <Reveal>
          <div id="step-mode" className="flex flex-col gap-6">
            <StepHeader step={1} title="Mode de tournage & Production" />
            <ModeStep value={mode} onChange={setMode} />
          </div>
        </Reveal>

        <Reveal>
          <div id="step-package" className="flex flex-col gap-6">
            <StepHeader step={2} title="Formule & Ambition commerciale" />
            <PackageStep value={pack} onChange={setPack} />
          </div>
        </Reveal>

        <Reveal>
          <div id="step-details" className="flex flex-col gap-6">
            <StepHeader step={3} title="Créneau prévisionnel & Coordonnées" />
            <DetailsStep
              date={date}
              onDate={setDate}
              slot={slot}
              onSlot={setSlot}
              category={category}
              onCategory={setCategory}
              summary={summary}
              sent={sent}
              reference={reference}
              onSubmit={handleSubmit}
            />
          </div>
        </Reveal>

        <Reveal>
          <BookingFaq />
        </Reveal>
      </div>
    </section>
  );
}