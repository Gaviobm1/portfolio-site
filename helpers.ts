export default async function sendEmail(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);

  const params = {
    subject: formData.get("subject"),
    user_name: formData.get("user_name"),
    user_email: formData.get("user_email"),
    message: formData.get("message"),
  };

  try {
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    const data = await response.json();

    if (response.ok) {
      return true;
    } else {
      console.error("Failed to send email", data.error);
      return false;
    }
  } catch (error) {
    console.error("Error sending email", error);
  }
}
