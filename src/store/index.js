import Vue from "vue"
import Vuex from "vuex"
import pages from "@/store/modules/pages"
import projects from "@/store/modules/projects"
import questions from "@/store/modules/questions"

Vue.use(Vuex)

export default new Vuex.Store({
	modules: { pages, projects, questions },
})
