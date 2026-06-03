import { NextRequest, NextResponse } from 'next/server';
import { mkdir, readFile, writeFile } from 'fs/promises';
import path from 'path';

type NotifyPayload = {
  email?: string;
};

const notifyStorePath = path.join(process.cwd(), 'data', 'notify-signups.json');

async function saveSignupLocally(email: string) {
  await mkdir(path.dirname(notifyStorePath), { recursive: true });

  let existing: Array<{ email: string; createdAt: string }> = [];
  try {
    const raw = await readFile(notifyStorePath, 'utf8');
    existing = JSON.parse(raw) as Array<{ email: string; createdAt: string }>;
  } catch {
    existing = [];
  }

  if (!existing.some((entry) => entry.email.toLowerCase() === email.toLowerCase())) {
    existing.push({ email, createdAt: new Date().toISOString() });
    await writeFile(notifyStorePath, JSON.stringify(existing, null, 2), 'utf8');
  }
}

function buildThankYouHtml(email: string) {
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;background:#020617;padding:32px;color:#e2e8f0">
      <div style="max-width:640px;margin:0 auto;background:#0f172a;border:1px solid rgba(148,163,184,.2);border-radius:24px;padding:32px">
        <p style="letter-spacing:.2em;text-transform:uppercase;color:#7dd3fc;font-size:12px;margin:0 0 16px">EchoHorn</p>
        <h1 style="margin:0 0 16px;font-size:32px;color:#f8fafc">Thanks for choosing EchoHorn</h1>
        <p style="line-height:1.7;color:#cbd5e1;margin:0 0 12px">
          We received your request from <strong>${email}</strong>.
        </p>
        <p style="line-height:1.7;color:#cbd5e1;margin:0 0 12px">
          You will be kept up to date with launch news, product updates, and platform improvements.
        </p>
        <p style="line-height:1.7;color:#cbd5e1;margin:0">
          Thank you for choosing EchoHorn.
        </p>
      </div>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as NotifyPayload;
  const email = body.email?.trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL || 'EchoHorn <onboarding@resend.dev>';

  if (!apiKey) {
    await saveSignupLocally(email);

    return NextResponse.json({
      ok: true,
      queued: true,
      message: 'Thanks for choosing EchoHorn. Your email was saved locally. Add a real RESEND_API_KEY in .env.local to send automatic emails.',
    });
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [email],
      subject: 'Thanks for choosing EchoHorn',
      html: buildThankYouHtml(email),
    }),
  });

  if (!response.ok) {
    await saveSignupLocally(email);
    return NextResponse.json({
      ok: true,
      queued: true,
      message: 'Thanks for choosing EchoHorn. We saved your email and will keep you up to date once email delivery is configured correctly.',
    });
  }

  return NextResponse.json({ ok: true });
}
