function ContactIcons({className}) {
  return (
    <div className="flex flex-row gap-3 justify-center">
      <a href="https://github.com/DanielLS12" className={className} target='_blank'><img src="icon_github.svg" width="28px" height="28px" alt="icon_github"/></a>
      <a href="https://www.linkedin.com/in/daniel-josue-luna-sanchez-260126248/" className={className} target='_blank'><img src="icon_linkedin.svg" width="28px" height="28px"  alt="icon_linkedin"/></a>
      <a href="mailto:danielluna03012001@gmail.com" className={className} target='_blank'><img src="icon_email.svg" width="28px" height="28px" alt="icon_email"/></a>
    </div>
  );
}

export default ContactIcons;
