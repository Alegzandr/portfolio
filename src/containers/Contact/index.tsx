import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import AnimatedDiv from '../../components/AnimatedDiv';
import H1 from '../../components/H1';

const Contact = () => {
  const { t } = useTranslation('contact');

  return(
    <AnimatedDiv className="contact two-columns middle-title">
      <H1>{t('title')}</H1>

      <section>
        <br />
        <form action="https://www.mailthis.to/alexandrefarrenq@hotmail.fr" method="post">
          <input type="text" name="name" placeholder={`${t('name')}*`} required />
          <input type="email" name="_replyto" placeholder={`${t('email')}*`} required />
          <input type="text" name="_subject" placeholder={`${t('subject')}*`} required />
          <textarea name="message" placeholder={`${t('message')}*`} required></textarea>

          <motion.input
            type="submit"
            value={t('send')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </form>
      </section>

      <section>
        <div className="avatar online">
          <br />
          <img src="/img/avatar.jpg" alt="Alexandre Farrenq" />
          <h5>Ready to work</h5>
        </div>
      </section>
    </AnimatedDiv>
  );
}

export default Contact;
