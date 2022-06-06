import { useTranslation } from 'react-i18next';
import AnimatedDiv from '../../components/AnimatedDiv';
import H1 from '../../components/H1';

const Home = () => {
  const { t } = useTranslation('home');

  return(
    <AnimatedDiv className="home">
      <H1>{t('title')}</H1>

      <article>
        <p>
          {t('about-me')}
        </p>

        <p>
          {t('goals')}
        </p>
      </article>
    </AnimatedDiv>
  );
}

export default Home;
