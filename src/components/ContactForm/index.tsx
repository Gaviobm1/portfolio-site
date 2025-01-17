import React from "react";
import Form from "../Form/Form";
import Input from "../Input/Input";
import TypeArea from "../TypeArea/TypeArea";
import Button from "../Button/Button";
import sendEmail from "../../../helpers";
import useOpenContext from "../../hooks/useOpenContext";

export default function ContactForm() {
  const { setOpen, setToast } = useOpenContext();
  return (
    <Form
      onSubmit={async (e) => {
        const success = await sendEmail(e);
        setOpen(false);
        success ? setToast("success") : setToast("error");
      }}
    >
      <Input
        id="subject"
        label="Subject"
        placeholder="Possible collaboration"
      />
      <Input id="user_name" label="Name" placeholder="Juan Sánchez" />
      <Input
        id="user_email"
        label="Your Email"
        placeholder="juan@awesome.net"
        type="email"
      />
      <TypeArea
        id="message"
        label="Message"
        placeholder="Hi! I'm getting in touch because..."
      />
      <Button type="submit">Send</Button>
    </Form>
  );
}
