import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { fullName, company, country, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.mailplug.co.kr",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL,
      subject: "New Contact Form Submission",
      text: `
          Full Name: ${fullName}
          Company: ${company}
          Country: ${country}
          Email: ${email}
          Message: ${message}
        `,
      html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
    });

    return Response.json(
      { ok: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send email:", error);
    return Response.json(
      { ok: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
