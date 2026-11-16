/**
 * Placeholder authentication client.
 * It only simulates a network call so the interface can be built and tested.
 *
 * TODO: replace the body of signIn / signUp with your real authentication
 * (Auth.js, Firebase Auth, Supabase, your own API route...). Keep the same return shape
 * and the form will keep working: { ok: true } or { ok: false, error: "message" }.
 */

export type AuthResult = { ok: true } | { ok: false; error: string };

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function signIn(input: { email: string; password: string }): Promise<AuthResult> {
  await wait(700);
  void input;
  return { ok: true };
}

export async function signUp(input: {
  name: string;
  brand: string;
  email: string;
  password: string;
}): Promise<AuthResult> {
  await wait(900);
  void input;
  return { ok: true };
}