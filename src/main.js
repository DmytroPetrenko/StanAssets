import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faStar as faStarReg } from "@fortawesome/free-regular-svg-icons"
import {
	faAngleDown,
	faPhone,
	faPhoneSquare,
	faEnvelope,
	faMapMarkerAlt,
	faChevronLeft,
	faChevronRight,
	faChevronDown,
	faChevronUp,
	faStar,
	faClock,
	faEye,
	faShareAlt,
	faTimes,
	faBars,
} from "@fortawesome/free-solid-svg-icons"
import {
	faFacebook,
	faLinkedin,
	faWhatsapp,
	faSkype,
	faAndroid,
	faApple,
	faUnity,
	faGithub,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import upperFirst from "lodash/upperFirst"
import camelCase from "lodash/camelCase"

const requireComponent = require.context(
	// Относительный путь до каталога компонентов
	"./components/Base",
	// Обрабатывать или нет подкаталоги
	false,
	// Регулярное выражение для определения файлов базовых компонентов
	/Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach((fileName) => {
	// Получение конфигурации компонента
	const componentConfig = requireComponent(fileName)

	// Получение имени компонента в PascalCase
	const componentName = upperFirst(
		camelCase(
			// Получаем имя файла независимо от глубины вложенности
			fileName
				.split("/")
				.pop()
				.replace(/\.\w+$/, "")
		)
	)

	// Глобальная регистрация компонента
	Vue.component(
		componentName,
		// Поиск опций компонента в `.default`, который будет существовать,
		// если компонент экспортирован с помощью `export default`,
		// иначе будет использован корневой уровень модуля.
		componentConfig.default || componentConfig
	)
})

library.add(
	faFacebook,
	faLinkedin,
	faWhatsapp,
	faSkype,
	faAngleDown,
	faAndroid,
	faApple,
	faUnity,
	faPhone,
	faPhoneSquare,
	faEnvelope,
	faMapMarkerAlt,
	faGithub,
	faChevronLeft,
	faChevronRight,
	faChevronDown,
	faChevronUp,
	faStar,
	faClock,
	faEye,
	faShareAlt,
	faStarReg,
	faTimes,
	faBars
)

Vue.component("font-awesome-icon", FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app")
