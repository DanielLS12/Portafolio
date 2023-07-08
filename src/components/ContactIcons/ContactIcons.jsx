import icon_github from '@assets/icons/icon_github.svg'
import icon_linkedin from '@assets/icons/icon_linkedin.svg'
import icon_email from '@assets/icons/icon_email.svg'

function ContactIcons({ className }) {

  return (
    <div className="flex flex-row gap-3 justify-center">
      <a
        href="https://github.com/DanielLS12"
        className={className}
        target="_blank"
      >
        <img
          src={icon_github}
          width="28px"
          height="28px"
          alt="icon_github"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/daniel-josue-luna-sanchez-260126248/"
        className={className}
        target="_blank"
      >
        <img
          src={icon_linkedin}
          width="28px"
          height="28px"
          alt="icon_linkedin"
        />
      </a>
      <a
        href="mailto:danielluna03012001@gmail.com"
        className={className}
        target="_blank"
      >
        <img src={icon_email} width="28px" height="28px" alt="icon_email" />
      </a>
    </div>
  );
}

export default ContactIcons;
