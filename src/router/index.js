import Vue from "vue"
import VueRouter from "vue-router"
import routeNames from "./routeNames"

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		name: routeNames.index,
		component: () => import("@/views/Index.vue"),
	},
	{
		path: "/services/:id",
		name: routeNames.services,
		component: () => import("@/views/Services.vue"),
	},
	{
		path: "/technologies/:id",
		name: routeNames.technologies,
		component: () => import("@/views/Technologies.vue"),
	},
	{
		path: "/products",
		name: routeNames.products,
		component: () => import("@/views/Products.vue"),
	},
	{
		path: "/portfolio",
		name: routeNames.portfolio,
		component: () => import("@/views/Portfolio.vue"),
	},
	{
		path: "/blog",
		name: routeNames.blog,
		component: () => import("@/views/Blog.vue"),
	},
	{
		path: "/about/:id",
		name: routeNames.about,
		component: () => import("@/views/About.vue"),
	},
	{
		path: "*",
		name: routeNames.notFound,
		component: () => import("@/views/NotFound.vue"),
	},
]

const router = new VueRouter({
	routes,
})

export default router
