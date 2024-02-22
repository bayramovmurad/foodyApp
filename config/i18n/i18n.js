import i18n from "i18next";
import {initReactI18next} from 'react-i18next';
const resources = {
	en: {
		translation: {
			//! Login
				"loginHeadTitle": "Welcome Admin",
				"loginUserName": "Username",
				"loginPassword": "Password",
				"loginSaveTitle": "Sign In",
				"save": "Save",
				"total": "Total",
				
				"profile": "Profile",
				"upload": 'upload',
				"yourbasket": "Your Basket",
				"yourorder": "Your Orders",
				"home": "Home",
				"restaurants": "Restaurants",
				"about": "About us",
				"aboutD": "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
				"howitworks": "How it works",
				"howitD": "Delivery may be extended during sale periods. Please refer to the checkout page for an updated estimate for your location. Kindly note that once you have placed an order, it is no longer possible to modify your order. Taxes and duties are included in all product prices.It is possible to place an order with shipment to a different address than your home or billing address when paying with a credit card. Please note that Klarna payments require that your order is shipped to your registered home address.",
				"programming":  "Programming",
				"child":  "Books for children",
				"pyshc": "Psychology",
				"pop": "Popular",
				"faq":  "Faqs",
				"explore": "Explore now",
				"register": "Register",
				'footerDescription': "Lorem ipsum is placeholder text commonly used in the graphic, ",
				"order": "Order Now",
				"search": "Search",
				"headerTitle": "Our Food site makes it easy to find local food",
				"headerDescription": "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
				"features": "Features",
				"popular": "Our Popular Update New Foods",
				"lorem": "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
				"discover": "Discover Restaurants Near From you",
				"goback": "Go Back",
				"products": "Products",
				"Checkouts": "Checkout",
				"faq": "F.A.Q",
				"logout": "Logout",
				"contact": "Contact",
				"email": "Email",
				'username': "Username",
				"fullname": "Full Name",
				"adresss": "Delivery Address",
				"number": "Contact Number",
				"method": "Payment Method",
				'atdoor': "pay at the door",
				"credit": "pay at the door by credit card"
			}
	},
	az: {
		translation: {
			//! Login
				"profile": "Profil",
				"loginHeadTitle": "Adminə Xoş gəldiniz",
				"loginUserName": "İstifadəçi adı",
				"loginPassword": "Parol",
				"loginSaveTitle": "Daxil olun",
				"yourbasket": "Səbətiniz",
				"yourorder": "Sifarişləriniz",
				"aboutD": "Lorem ipsum layoutların və vizual maketlərin önizlənməsi üçün qrafik, çap və nəşriyyat sənayesində geniş istifadə olunan yertutan mətndir. Lorem ipsum layoutların və vizual maketlərin önizlənməsi üçün qrafik, çap və nəşriyyat sənayesində geniş istifadə olunan yertutan mətndir. Lorem ipsum yertutandır. planların və vizual maketlərin önizlənməsi üçün qrafik, çap və nəşriyyat sənayesində geniş istifadə olunan mətn.",
				"home": "Ana Səhifə",
				"restaurants": "Restoranlar",
				"about": "Haqqımızda",
				"howitworks": "Necə işləyir",
				"programming":  "Proqramlaşdırma",
				"child":  "Uşaqlar üçün kitablar",
				"pyshc": "Psixologiya",
				"pop": "Məşhur",
				"explore": "İndi araşdırın",
				"faq":  "Tez-tez verilən suallar",
				'signup': "Qeydiyyat",
				"order": "İndi sifariş edin",
				'footerDescription': "Lorem ipsum, qrafikdə çox istifadə olunan yer tutucu mətndir",
				"register": "Qeydiyyat",
				"search": "Axtarış",
				"headerTitle": "Qida saytımız yerli yeməkləri tapmağı asanlaşdırır",
				"headerDescription": "Lorem ipsum qrafika, çap və nəşriyyat sənayelərində tərtibat və vizual maketləri önizləmək üçün geniş istifadə olunan yer tutucu mətndir.",
				"features": "Xüsusiyyətləri",
				"lorem": "Lorem ipsum qrafika, çap və nəşriyyat sənayelərində tərtibat və vizual maketləri önizləmək üçün geniş istifadə olunan yer tutucu mətndir.",
				"popular": "Populyar Yeniləmə Yeni Yeməklərimiz",
				"discover": "Sizə yaxın restoranları kəşf edin",
				"goback": "Geri",
				"products": "Məhsullar",
				"Checkouts": "Yoxla",
				"faq": "T.V.S",
				"howitD": "Satış müddətində çatdırılma uzadıla bilər. Məkanınız üçün yenilənmiş təxmin üçün yoxlama səhifəsinə baxın. Nəzərə alın ki, sifariş verdikdən sonra sifarişinizi dəyişdirmək artıq mümkün deyil. Vergilər və rüsumlar bütün məhsul qiymətlərinə daxildir. Kredit kartı ilə ödəniş edərkən evinizdən və ya faktura ünvanınızdan fərqli ünvana çatdırılma ilə sifariş vermək mümkündür. Nəzərə alın ki, Klarna ödənişləri sifarişinizin qeydiyyatdan keçmiş ev ünvanınıza göndərilməsini tələb edir.",
				"logout": "Çıxış",
				"upload": 'yüklə',
				"contact": "Əlaqə",
				"email": "E-poçt",
				'username': "İstifadəçi adı",
				"fullname": "Tam adi",
				"save": "Yadda saxla",
				"adresss": "Çatdırılma ünvanı",
				"number": "Əlaqə nömrəsi",
				"method": "Ödəniş üsulu",
				'atdoor': "qapıda ödəyin",
				"credit": "kredit kartı ilə qapıda ödəyin",
				"total": "Ümumi",
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