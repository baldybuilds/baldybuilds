import type { APIRoute } from 'astro';
import { sendContactEmail, type ContactPayload } from '@/lib/resend';

export const prerender = false;

const MAX_LENGTH = 2000;

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, string>;

  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid request.' }, 400);
  }

  // Honeypot check
  if (body._honey) {
    return json({ success: true }, 200);
  }

  const { name, business, email, phone, message } = body;

  if (!name?.trim() || !business?.trim() || !email?.trim() || !message?.trim()) {
    return json({ error: 'Please fill in all required fields.' }, 422);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: 'Please enter a valid email address.' }, 422);
  }

  if (message.length > MAX_LENGTH) {
    return json({ error: `Message must be under ${MAX_LENGTH} characters.` }, 422);
  }

  const payload: ContactPayload = {
    name: name.trim(),
    business: business.trim(),
    email: email.trim(),
    phone: phone?.trim(),
    message: message.trim(),
  };

  try {
    await sendContactEmail(payload);
    return json({ success: true }, 200);
  } catch (err) {
    console.error('Resend error:', err);
    return json({ error: 'Failed to send message. Please try again.' }, 500);
  }
};

function json(data: unknown, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
