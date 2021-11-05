import counterpart from "counterpart";
import en from "../../languages/en";
import es from "../../languages/es";
import jp from "../../languages/jp";

export default function languageHandler() {
  let language = localStorage.getItem("language");

  switch (language) {
    case "en":
      counterpart.setLocale("en", en);
      break;
    case "es":
      counterpart.setLocale("es", es);
      break;
    case "jp":
      counterpart.setLocale("jp", jp);
      break;
    default:
      counterpart.setLocale("en", en);
      break;
  }
}

counterpart.registerTranslations("en", en);
counterpart.registerTranslations("es", es);
counterpart.registerTranslations("jp", jp);
