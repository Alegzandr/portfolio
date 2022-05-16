import { useTranslation } from 'react-i18next';
import apiKey from '../common/api';
import { motion } from 'framer-motion';

function Contact() {
  const { t } = useTranslation('contact');

  return(
    <motion.div
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
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
        <iframe src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Nogent+sur+Marne,France`}></iframe>
      </section>
    </motion.div>
  );
}

export default Contact;
