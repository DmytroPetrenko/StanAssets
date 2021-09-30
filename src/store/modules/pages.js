const state = () => ({
	all: [
		{
			id: 0,
			text: "Services",
			name: "Services",
			nestedTabs: [
				{
					name: "mobile",
					text: "Mobile Application development",
					image: "services_mobile.png",
					imageSm: "services_mobile_sm.png",
					parentText: "Services",
					parentName: "Services",
				},
				{
					name: "game",
					text: "Game development outsourcing",
					image: "services_game.png",
					imageSm: "services_game_sm.png",
					parentText: "Services",
					parentName: "Services",
				},
				{
					name: "vr",
					text: "vr app development",
					image: "services_vr.png",
					imageSm: "services_vr_sm.png",
					parentText: "Services",
				},
				{
					name: "dedicated",
					text: "dedicated developers",
					image: "services_dedicated.png",
					imageSm: "services_dedicated_sm.png",
					parentText: "Services",
					parentName: "Services",
				},
				{
					name: "sdk",
					text: "SDK development",
					image: "services_sdk.svg",
					imageSm: "services_sdk_sm.png",
					parentText: "Services",
					parentName: "Services",
				},
				{
					name: "3d",
					text: "3D modeling services",
					image: "services_3d.png",
					imageSm: "services_3d_sm.png",
					parentText: "Services",
					parentName: "Services",
				},
				{
					name: "ar",
					text: "ar app development",
					image: "services_ar.png",
					imageSm: "services_ar_sm.png",
					parentText: "Services",
					parentName: "Services",
				},
			],
		},
		{
			id: 1,
			text: "Technologies",
			name: "Technologies",
			nestedTabs: [
				{
					name: "android",
					text: "Android",
					image: "android.png",
					parentText: "Technologies",
					parentName: "Technologies",
				},
				{
					name: "ios",
					text: "Ios",
					image: "ios.png",
					parentText: "Technologies",
					parentName: "Technologies",
				},
				{
					name: "unity",
					text: "Unity",
					image: "unity.png",
					parentText: "Technologies",
					parentName: "Technologies",
				},
			],
		},
		{
			id: 2,
			text: "Products",
			name: "Products",
			image: "products.png",
			nestedTabs: null,
		},
		{
			id: 3,
			text: "Portfolio",
			name: "Portfolio",
			image: "portfolio.png",
			nestedTabs: null,
		},
		{
			id: 4,
			text: "Blog",
			name: "Blog",
			nestedTabs: null,
		},
		{
			id: 5,
			text: "About us",
			name: "About",
			nestedTabs: [
				{
					name: "contacts",
					text: "Contacts",
					parentText: "About us",
					parentName: "About",
				},
				{
					name: "team",
					text: "Team",
					parentText: "About us",
					parentName: "About",
				},
				{
					name: "join",
					text: "Join the team",
					image: "join.png",
					parentText: "About us",
					parentName: "About",
				},
			],
		},
	],
	activePage: "Index",
})

const getters = {
	getActivePage: (state) => {
		const queue = [...state.all]
		while (queue.length) {
			const obj = queue.shift()
			if (obj.name == state.activePage) return obj
			queue.push(...(obj.nestedTabs || []))
		}
	},
	getAllPossiblePages: (state) => (sectionName) => {
		const names = []
		const page = state.all.find((page) => page.name === sectionName)

		if (page.nestedTabs) {
			JSON.stringify(page.nestedTabs, (key, value) => {
				if (key === "name") names.push(value)
				return value
			})
		} else {
			names.push(page.name)
		}
		return names
	},
	getActiveNestedArray: (state) => (sectionName) => {
		const activePage = state.all.find((page) => page.name === sectionName)
		if (activePage) {
			return activePage.nestedTabs
		} else {
			return [
				{
					name: "finder",
					text: "I`m trying find the page",
					image: "services_mobile.png",
					imageSm: "services_mobile_sm.png",
				},
			]
		}
	},
}

const actions = {
	setActivePage({ commit }, page) {
		commit("addActivePage", page)
	},
}

const mutations = {
	addActivePage(state, page) {
		state.activePage = page
	},
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
}
