import { useTranslation } from 'react-i18next';
import AnimatedDiv from '../../components/AnimatedDiv';

const Home = () => {
  const { t } = useTranslation('home');

  return(
    <AnimatedDiv className="home">
      <h1 title={t('title')}>{t('title')}</h1>

      <p>
        {t('about-me')}
      </p>

      <p>
        {t('goals')}
      </p>
    </AnimatedDiv>
  );
}

export default Home;
