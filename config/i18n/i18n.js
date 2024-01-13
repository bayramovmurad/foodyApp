import i18n from "i18next";
import {initReactI18next} from 'react-i18next';

const resources = {
	en: {
		translation: {
			"home": "Home",
            "restaurants": "Restaurants",
            "about": "About us",
            "howitworks": "How it works",
            "faq":  "Faqs",
			"signup": "Sign Up",
			"register": "Register",
			"order": "Order Now",
			"search": "Search",
			"headerTitle": "Our Food site makes it easy to find local food",
			"headerDescription": "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
		}
	},
	az: {
		translation: {
			"home": "Ana Səhifə",
            "restaurants": "Restoranlar",
            "about": "Haqqımızda",
            "howitworks": "Necə işləyir",
            "faq":  "Tez-tez verilən suallar",
			'signup': "Qeydiyyat",
			"order": "İndi sifariş edin",
			"register": "Qeydiyyat",
			"search": "Axtarış",
			"headerTitle": "Qida saytımız yerli yeməkləri tapmağı asanlaşdırır",
			"headerDescription": "Lorem ipsum qrafika, çap və nəşriyyat sənayelərində tərtibat və vizual maketləri önizləmək üçün geniş istifadə olunan yer tutucu mətndir."
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