import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const to = import.meta.env.CONTACT_EMAIL ?? 'jamiemccallum0@gmail.com';

export interface ContactPayload {
  name: string;
  business: string;
  email: string;
  phone?: string;
  message: string;
}

export async function sendContactEmail(data: ContactPayload) {
  return resend.emails.send({
    from: 'BaldyBuilds <hello@baldybuilds.co.uk>',
    to,
    replyTo: data.email,
    subject: `New enquiry from ${data.name} (${data.business})`,
    html: `
      <h2>New website enquiry</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Business:</strong> ${data.business}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
      <hr />
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
    `,
  });
}
