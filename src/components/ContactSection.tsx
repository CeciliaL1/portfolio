import {
  ContactButtonStyle,
  ContactContainerStyle,
  ContactFormStyle,
  ContactInfoSectionStyle,
  ContactInputStyle,
  ContactTextAreaStyle,
} from "./styled/ContactSection";

export const ContactSection = () => {
  return (
    <>
      <ContactContainerStyle>
        <div>
          {" "}
          <ContactFormStyle>
            <ContactInputStyle type="text" placeholder="Name" />
            <ContactInputStyle type="email" placeholder="Email" />
            <ContactTextAreaStyle placeholder="Message" />
            <ContactButtonStyle type="submit">Send</ContactButtonStyle>
          </ContactFormStyle>
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
