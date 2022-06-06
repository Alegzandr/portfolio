import { useTranslation } from 'react-i18next';
import AnimatedDiv from '../../components/AnimatedDiv';
import H1 from '../../components/H1';

const Contact = () => {
  const { t } = useTranslation('contact');

  return(
    <AnimatedDiv className="contact">
      <H1>{t('title')}</H1>

      <section>
        <div className="avatar online">
          <img src="/img/avatar.jpg" alt="Alexandre Farrenq" />
          <h3>Ready to work</h3>
        </div>
      </section>

      <section>
      <form action="https://www.mailthis.to/alexandrefarrenq@hotmail.fr">
          <input type="text" name="name" value="Name" />
          <input type="email" name="email" value="Email" />
          <input type="text" name="subject" value="Subject" />
          <textarea name="message" value="Message"></textarea>

          <input type="submit" value="Send message !" />
        </form>
      </section>
    </AnimatedDiv>
  );
}

export default Contact;
