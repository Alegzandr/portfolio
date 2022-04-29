import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation('home');

  return(
    <div>
      <h3>{t('title')}</h3>
    </div>
  );
}

export default Home;
