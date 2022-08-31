import React from "react";
import {useTranslation} from 'react-i18next'
function Home() {
  const {t} = useTranslation()
  return (
    
    <>
    <div class="alert alert-success" role="alert">
        <h1 class="display-3">{t('title')}</h1>
    </div>
    {/* <div class="alert alert-success" role="alert">
    <h1 class="display-6">{t('parag.description')}</h1>
  </div> */}
    </>
  );
}

export default Home;
