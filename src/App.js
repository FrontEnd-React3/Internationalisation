import './App.css';
import { useState, Suspense } from "react";
import React from "react";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
const translationsEn = {
  welcome: 'Welcome',
  changed: "You changed the language {{count}} time",
  changed_other: "You changed the language {{count}} times",
};
const translationsDu = {
  welcome: 'Welkom',
  changed: "Je hebt de taal{{count}} keer veranderd",
  changed_other: "Je hebt de taal{{count}} keren veranderd",
};
const translationsFr = {
  welcome: 'Bienvenus',
  changed: "Vous avez changé la langue {{count}} fois.",
  changed_other: "Vous avez changé la langue {{count}} fois.",
};
i18n.use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationsEn },

      du: { translation: translationsDu },
      fr: { translation: translationsFr },
    }, lng: "en", fallbackLng: "en", interpollation: { escapeValue: true },


  });
function App() {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const onChange = (event) => {
    // console.log("changed")
    i18n.changeLanguage(event.target.value)
    console.log((event.target.value))
    setCount((previousCount) => previousCount + 1);
  }
  // https://www.youtube.com/watch?v=kGFEvphB5G0
  // npm i i18next react-i18next
  return (
    <Suspense fallback="Loading">
      <div className="App">
        <header>
          <h1>{t("welcome")}</h1>
          <p>sample
            <strong>
              <i>text</i>
            </strong>
            .
          </p>
          <p>{t('changed', { count })}</p>
          <select name="language" onChange={onChange} id="langaugeChanger">
            <option value="en">English</option>
            <option value="du">Dutch</option>
            <option value="fr">French</option>
          </select>
        </header>
      </div ></Suspense>
  );
}

export default App;
