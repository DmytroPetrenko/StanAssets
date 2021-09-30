import Vue from "vue"
import Vuex from "vuex"
import pages from "@/store/modules/pages"
import projects from "@/store/modules/projects"
import questions from "@/store/modules/questions"
import products from "@/store/modules/products"
import posts from "@/store/modules/posts"
import authors from "@/store/modules/authors"
import openingPositions from "@/store/modules/openingPositions"

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		pages,
		projects,
		questions,
		products,
		posts,
		authors,
		openingPositions,
	},
})
