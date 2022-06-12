import { useRef, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import emailConfig from '../../config/email';
import AnimatedDiv from '../../components/AnimatedDiv';
import AnimatedH1 from '../../components/AnimatedH1';
import AnimatedA from '../../components/AnimatedA';

const Contact = () => {
  const { t } = useTranslation('contact');

  const form = useRef() as any;

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(emailConfig.serviceId, emailConfig.templateId, form.current, emailConfig.publicKey)
      .then((result) => {
        console.log(result.text);
        alert('Email sent !');
      }, (error) => {
        console.log(error.text);
        alert('Error while sending your email');
      });
  };

  return(
    <AnimatedDiv className="contact two-columns middle-title">
      <AnimatedH1>{t('title')}</AnimatedH1>

      <section>
        <br />
        <p>{t('intro')}</p>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder={`${t('name')}*`} required />
          <input type="email" name="user_email" placeholder={`${t('email')}*`} required />
          <textarea name="message" placeholder={`${t('message')}*`} required></textarea>

          <motion.input
            type="submit"
            value={t('send')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </form>

        <br />
        <AnimatedA href="/pdf/cv.pdf" download="CV Alexandre Farrenq">
          <i className="fas fa-download"></i>&nbsp;
          <b>{t('download')}</b>
        </AnimatedA>
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
          <h2>Ready to work</h2>
        </div>
      </section>
    </AnimatedDiv>
  );
}

export default Contact;
