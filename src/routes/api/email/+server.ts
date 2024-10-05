import nodemailer from 'nodemailer';
import { json } from '@sveltejs/kit';
import { snedEmailInfoes } from '$src/portfolio.config.js';




export async function POST({ request }) {
    const { email, subject, message } = await request.json();

    const transporter = nodemailer.createTransport({
        host: 'smtp-relay.sendinblue.com',
        secure: false,
        port: 587,
        auth: {
            user: snedEmailInfoes.authEmail,
            pass: snedEmailInfoes.authEmailPassword,
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false,
        },
    });
    const options = {
        from: email,
        to: snedEmailInfoes.receiverEmail,
        subject: subject,
        html: `<p>${message}</p>`
    };

    const result = await transporter.sendMail(options);
    if (!result.messageId) return json({ success: false }, { status: 400 })

    return json({ success: true }, { status: 201 });
}
