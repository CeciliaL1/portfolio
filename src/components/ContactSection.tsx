import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import {
  ContactButtonStyle,
  ContactContainerStyle,
  ContactFormStyle,
  ContactInfoSectionStyle,
  ContactInputStyle,
  ContactTextAreaStyle,
  ContactConfirmationStyle,
} from "./styled/ContactSection";

export const ContactSection = () => {
  const { theme } = useContext(ThemeContext);

  type FormState = "idle" | "loading" | "success" | "error";

  const [status, setStatus] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    console.log("Submitting form...");
    const form = e.currentTarget;

    try {
      const res = await fetch("https://formspree.io/f/meelawrz", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };
  return (
    <>
      <ContactContainerStyle>
        <div>
          {" "}
          <ContactFormStyle onSubmit={handleSubmit}>
            <ContactInputStyle
              color={theme.color}
              accentColor={theme.accentColor}
              secondaryColor={theme.secondaryBgColor}
              name="name"
              required
              type="text"
              placeholder="Name"
            />
            <ContactInputStyle
              color={theme.color}
              accentColor={theme.accentColor}
              secondaryColor={theme.secondaryBgColor}
              name="email"
              required
              type="email"
              placeholder="Email"
            />
            <ContactTextAreaStyle
              name="message"
              required
              color={theme.color}
              accentColor={theme.accentColor}
              secondaryColor={theme.secondaryBgColor}
              placeholder="Message"
            />
            <ContactButtonStyle
              color={theme.color}
              accentColor={theme.accentColor}
              secondaryColor={theme.secondaryBgColor}
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send"}
            </ContactButtonStyle>
          </ContactFormStyle>
          {status === "success" && (
            <ContactConfirmationStyle color={theme.accentColor}>
              Thank you for your message! I'll get back to you soon
            </ContactConfirmationStyle>
          )}
          {status === "error" && (
            <ContactConfirmationStyle color={theme.accentColor}>
              Something went wrong. Please try again later.
            </ContactConfirmationStyle>
          )}
        </div>

        <div>
          {" "}
          <ContactInfoSectionStyle>
            <h3>Contact Information</h3>
            <p>Email: </p>
          </ContactInfoSectionStyle>
        </div>
      </ContactContainerStyle>
    </>
  );
};
