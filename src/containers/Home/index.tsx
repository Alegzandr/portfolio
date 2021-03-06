import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import AnimatedDiv from '../../components/AnimatedDiv';
import AnimatedH1 from '../../components/AnimatedH1';

const Home = () => {
  const { t } = useTranslation('home');

  return(
    <AnimatedDiv className="home two-columns">
      <section>
        <AnimatedH1>{t('title')}</AnimatedH1>
        <br />

        <article>
          <p>
            {t('about-me')}
          </p>

          <p>
            {t('goals')}
          </p>
        </article>
      </section>

      <motion.section
        initial={{ filter: 'blur(3px)' }}
        animate={{ filter: 'blur(0px)' }}
        exit={{ filter: 'blur(3px)' }}
        transition= {{ type: 'spring', stiffness: 250, damping: 25, duration: 3 }}
      >
        <img src="/img/vs-code.png" alt="Code" />
      </motion.section>
    </AnimatedDiv>
  );
}

export default Home;
