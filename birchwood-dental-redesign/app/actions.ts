'use server';

import nodemailer from 'nodemailer';

type ActionState = {
    success: boolean;
    message: string;
};

export async function sendEmail(prevState: ActionState, formData: FormData): Promise<ActionState> {
    try {
        const name = formData.get('name') as string;
        const phone = formData.get('phone') as string;
        const email = formData.get('email') as string;
        const treatment = formData.get('treatment') as string;
        const message = formData.get('message') as string;

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_FROM || '"Birchwood Dental" <no-reply@birchwooddental.co.uk>',
            to: 'reception@birchwooddental.co.uk',
            cc: 'david@digitalico.com',
            bcc: 'javierrevueltag@gmail.com',
            replyTo: email,
            subject: `New Consultation Request from ${name}`,
            text: `
        New Contact Form Submission

        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Treatment of Interest: ${treatment}
        
        Message:
        ${message || 'No additional message provided.'}
      `,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Treatment of Interest:</strong> ${treatment}</p>
        <br>
        <p><strong>Message:</strong><br>${message ? message.replace(/\n/g, '<br>') : 'No additional message provided.'}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return { success: true, message: 'Email sent successfully' };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, message: 'Failed to send email' };
    }
}
