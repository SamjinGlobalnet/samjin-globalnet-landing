import { validateEmail } from "@/utils/validator";
import axios from "axios";

export async function POST(request: Request) {
  const { email } = (await request.json()) as { email: string };

  if (!email.trim()) return Response.json({ ok: false });
  if (!validateEmail(email.trim())) return Response.json({ ok: false });

  try {
    await axios.post(
      "https://api.stibee.com/v1/lists/368226/subscribers",
      {
        eventOccuredBy: "SUBSCRIBER",
        confirmEmailYN: "N",
        subscribers: [
          {
            email,
            name: email.split("@")[0],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          AccessToken: process.env.STIBEE_API_KEY,
        },
      }
    );
  } catch (error) {
    console.error(error);
    return Response.json({ ok: false });
  }

  return Response.json({ ok: true });
}
