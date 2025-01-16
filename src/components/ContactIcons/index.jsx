import icon_github from '@assets/icons/github.svg'
import icon_linkedin from '@assets/icons/linkedin.svg'
import icon_email from '@assets/icons/email.svg'

function ContactIcons() {

  return (
    <div className="flex flex-row justify-between gap-10">
      <a
        href="https://github.com/DanielLS12"
        title="GitHub"
        className="custom_contact_icons"
        rel="noreferrer noopener"
        target="_blank"
      >
        <div className='flex flex-col sm:flex-row items-center gap-1.5'>
          <img
            src={icon_github}
            width="28px"
            height="28px"
            alt="github"
            loading='lazy'
            decoding='async'
          />
          <span className='hidden min-[400px]:block text-xl font-bold'>
            GitHub
          </span>
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/daniel-josue-luna-sanchez-260126248/"
        title="LinkedIn"
        className="custom_contact_icons"
        rel="noreferrer noopener"
        target="_blank"
      >
        <div className='flex flex-col sm:flex-row items-center gap-1.5'>
          <img
            src={icon_linkedin}
            width="28px"
            height="28px"
            alt="linkedin"
            loading='lazy'
            decoding='async'
          />
          <span className='hidden min-[400px]:block text-xl font-bold'>
            LinkedIn
          </span>
        </div>
      </a>
      <a
        href="mailto:danielluna03012001@gmail.com"
        title="Correo Electrónico"
        className="custom_contact_icons"
        rel="noreferrer noopener"
        target="_blank"
      >
        <div className='flex flex-col sm:flex-row items-center gap-1.5'>
          <img 
            src={icon_email} 
            width="28px" 
            height="28px" 
            alt="email" 
            loading='lazy' 
            decoding='async'
          />
          <span className='hidden min-[400px]:block text-xl font-bold'>
            Email
          </span>
        </div>
      </a>
    </div>
  );
}

export default ContactIcons;
