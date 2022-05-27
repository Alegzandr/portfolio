import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Contact = () => {
  const { t } = useTranslation('contact');

  return(
    <motion.div
      className="contact"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition= {{ type: 'spring', stiffness: 250, damping: 25, duration: 0.1 }}
    >
      <section>
        <div className="avatar online">
          <img src="/img/avatar.jpg" alt="Alexandre Farrenq" />
          <h3>Ready to work</h3>
        </div>
        
        <form action="https://www.mailthis.to/alexandrefarrenq@hotmail.fr">
          <input type="text" name="name" value="Name" />
          <input type="email" name="email" value="Email" />
          <input type="text" name="subject" value="Subject" />
          <textarea name="message" value="Message"></textarea>

          <input type="submit" value="Send message !" />
        </form>
      </section>

      <section>
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10504.454756907808!2d2.472374194131691!3d48.8369700921283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60d6bc85194b7%3A0x40b82c3688b3890!2sNogent-sur-Marne!5e0!3m2!1sfr!2sfr!4v1652912213184!5m2!1sfr!2sfr"
          width="200"
          height="200"
          loading="lazy"
        ></iframe>
      </section>
    </motion.div>
  );
}

export default Contact;
