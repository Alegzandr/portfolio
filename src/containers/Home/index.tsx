import { useTranslation } from 'react-i18next';
import AnimatedDiv from '../../components/AnimatedDiv';
import H1 from '../../components/H1';

const Home = () => {
  const { t } = useTranslation('home');

  return(
    <AnimatedDiv className="home">
      <H1>{t('title')}</H1>

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
