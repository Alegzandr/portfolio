import { useTranslation } from 'react-i18next';
import apiKey from '../common/api';

function Contact() {
  const { t } = useTranslation('contact');

  return(
    <div className="contact">
      <section>
        <div className="avatar online">
          <img src="/img/avatar.jpg" alt="Alexandre Farrenq" />
          <h3>Ready to work</h3>
        </div>
        
        <form>
          <input type="text" name="name" value="Name" />
          <input type="email" name="email" value="Email" />
          <input type="text" name="subject" value="Subject" />
          <textarea name="message" value="Message"></textarea>

          <input type="submit" value="Send message !" />
        </form>
      </section>

      <section>
        <iframe src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Nogent+sur+Marne,France`}></iframe>
      </section>
    </div>
  );
}

export default Contact;
