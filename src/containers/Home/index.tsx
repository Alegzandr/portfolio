import { useTranslation } from 'react-i18next';
import AnimatedDiv from '../../components/AnimatedDiv';
import H1 from '../../components/H1';

const Home = () => {
  const { t } = useTranslation('home');

  return(
    <AnimatedDiv className="home two-columns">
      <section>
        <H1>{t('title')}</H1>

        <article>
          <p>
            {t('about-me')}
          </p>

          <p>
            {t('goals')}
          </p>
        </article>
      </section>

      <section>
        <img src="/img/vs-code.png" alt="Code" />
      </section>
    </AnimatedDiv>
  );
}

export default Home;
