import i18n from "i18next";
import {initReactI18next} from 'react-i18next';

const resources = {
	en: {
		translation: {
			"home": "Home",
            "restaurants": "Restaurants",
            "about": "About us",
            "howitworks": "How it works",
            "faq":  "Faqs"
		}
	},
	az: {
		translation: {
			"home": "Ana Səhifə",
            "restaurants": "Restoranlar",
            "about": "Haqqımızda",
            "howitworks": "Necə işləyir",
            "faq":  "Tez-tez verilən suallar"
		}
	}
}

i18n
	.use(initReactI18next)
	.init({
		resources,
		lng: 'en'
	})
  
export default i18n