import React from "react";
import ContactForm from "component/ContactForm";
import StickyButton from "component/StickyButton";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
  triggerText,
  trigger,
  overlay,
  content,
  close,
} from "./ContactModal.module.css";
import { Mail, X } from "react-feather";
import useOpenContext from "../../hooks/useOpenContext";

export default function ContactModal() {
  const { open, setOpen } = useOpenContext();
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className={trigger}>
        <Mail /> <p className={triggerText}>Contact</p>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={overlay}>
          <Dialog.Content className={content}>
            <VisuallyHidden.Root>
              <Dialog.Title>contact form</Dialog.Title>
              <Dialog.Description>
                a form to send an email to Gavin
              </Dialog.Description>
            </VisuallyHidden.Root>
            <Dialog.Close className={close}>
              <X />
            </Dialog.Close>
            <ContactForm />
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
