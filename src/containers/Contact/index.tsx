import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import AnimatedDiv from '../../components/AnimatedDiv';
import AnimatedH1 from '../../components/AnimatedH1';

const Contact = () => {
  const { t } = useTranslation('contact');

  return(
    <AnimatedDiv className="contact two-columns middle-title">
      <AnimatedH1>{t('title')}</AnimatedH1>

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
        <div className="avatar online" >
          <br />
          <motion.div
            initial={{ rotate: -180 }}
            animate={{ rotate: 0 }}
            transition= {{ type: 'spring', stiffness: 250, damping: 25, duration: 1 }}
          >
            <img src="/img/avatar.jpg" alt="Alexandre Farrenq" />
          </motion.div>
          <h5>Ready to work</h5>
        </div>
      </section>
    </AnimatedDiv>
  );
}

export default Contact;
