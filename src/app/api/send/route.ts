import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Fehlende Felder '}, { status: 400 });
        }

        const { data, error } = await resend.emails.send({
            from: 'CMD STUDIOS <noreply@alkosbarber.at>',
            to: ['sopa.fabian@gmx.net'],
            subject: `Neue Kontaktanfrage von ${name}`,
            html: `
                <div>
                    <h2>Neue Anfrage von der Website</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>E-Mail:</strong> ${email}</p>
                    <hr />
                    <p><strong>Nachricht:</strong></p>
                    <p>${message.replace(/\n/g, '<br>')}</p>
                </div>
            `,
        });

        if (error) {
            console.error('Resend-Fehler:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ message: 'Erfolg', data });
    } catch (error) {
        console.error('Server-Fehler:', error);
        return NextResponse.json({ error: 'Interner Serverfehler' }, { status: 500 });
    }
}