import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation('home');

  return(
    <div className="home">
      <h1 title={t('title')}>{t('title')}</h1>
      <p>
        {t('about-me')}
      </p>
    </div>
  );
}

export default Home;
