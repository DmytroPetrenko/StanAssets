const state = () => ({
	posts: [
		{
			id: 0,
			image: "home-background1.png",
			rating: 3.49,
			votesCount: 1,
			views: 0,
			name: "Lorem ipsum dolor sit amet",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum ...",
			fullText: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				"Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.",
				"Vivamus mollis, odio ac finibus rutrum, libero augue venenatis leo, in maximus ipsum dui et est. In in aliquet libero. In ac enim non lectus convallis feugiat. Ut in pharetra tortor. Quisque ligula magna, iaculis non porta ut, suscipit sit amet sapien. Sed ut pharetra mauris. Cras ac dapibus turpis. Etiam suscipit orci eu tristique gravida. Fusce consectetur vel urna ut venenatis. Etiam in mauris odio. Phasellus sed turpis vitae justo maximus suscipit in ut risus. Quisque viverra magna lorem, et placerat velit cursus quis. Maecenas venenatis molestie eros, in pulvinar urna elementum quis. Praesent a lorem quis sem cursus feugiat sed nec erat.    Maecenas venenatis molestie eros, in pulvinar urna elementum quis. Praesent a lorem quis sem cursus feugiat sed nec erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum, libero augue venenatis leo, in maximus ipsum dui et est. In in aliquet libero. In ac enim non lectus convallis feugiat. Ut in pharetra tortor. Quisque ligula magna, iaculis non porta ut, suscipit sit amet sapien. Sed ut pharetra mauris. Cras ac dapibus turpis. Etiam suscipit orci eu tristique gravida.",
			],
			authorId: 0,
			createdDate: new Date("2021-02-02"),
		},
		{
			id: 1,
			image: "home-background2.png",
			rating: 4,
			votesCount: 1,
			views: 0,
			name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum ...",
			fullText: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				"Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.",
				"Vivamus mollis, odio ac finibus rutrum, libero augue venenatis leo, in maximus ipsum dui et est. In in aliquet libero. In ac enim non lectus convallis feugiat. Ut in pharetra tortor. Quisque ligula magna, iaculis non porta ut, suscipit sit amet sapien. Sed ut pharetra mauris. Cras ac dapibus turpis. Etiam suscipit orci eu tristique gravida. Fusce consectetur vel urna ut venenatis. Etiam in mauris odio. Phasellus sed turpis vitae justo maximus suscipit in ut risus. Quisque viverra magna lorem, et placerat velit cursus quis. Maecenas venenatis molestie eros, in pulvinar urna elementum quis. Praesent a lorem quis sem cursus feugiat sed nec erat.    Maecenas venenatis molestie eros, in pulvinar urna elementum quis. Praesent a lorem quis sem cursus feugiat sed nec erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum, libero augue venenatis leo, in maximus ipsum dui et est. In in aliquet libero. In ac enim non lectus convallis feugiat. Ut in pharetra tortor. Quisque ligula magna, iaculis non porta ut, suscipit sit amet sapien. Sed ut pharetra mauris. Cras ac dapibus turpis. Etiam suscipit orci eu tristique gravida.",
			],
			authorId: 1,
			createdDate: new Date("2021-01-01"),
		},
		{
			id: 2,
			image: "home-background3.png",
			rating: 4,
			votesCount: 1,
			views: 0,
			name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum ...",
			fullText: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				"Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.",
				"Vivamus mollis, odio ac finibus rutrum, libero augue venenatis leo, in maximus ipsum dui et est. In in aliquet libero. In ac enim non lectus convallis feugiat. Ut in pharetra tortor. Quisque ligula magna, iaculis non porta ut, suscipit sit amet sapien. Sed ut pharetra mauris. Cras ac dapibus turpis. Etiam suscipit orci eu tristique gravida. Fusce consectetur vel urna ut venenatis. Etiam in mauris odio. Phasellus sed turpis vitae justo maximus suscipit in ut risus. Quisque viverra magna lorem, et placerat velit cursus quis. Maecenas venenatis molestie eros, in pulvinar urna elementum quis. Praesent a lorem quis sem cursus feugiat sed nec erat.    Maecenas venenatis molestie eros, in pulvinar urna elementum quis. Praesent a lorem quis sem cursus feugiat sed nec erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum, libero augue venenatis leo, in maximus ipsum dui et est. In in aliquet libero. In ac enim non lectus convallis feugiat. Ut in pharetra tortor. Quisque ligula magna, iaculis non porta ut, suscipit sit amet sapien. Sed ut pharetra mauris. Cras ac dapibus turpis. Etiam suscipit orci eu tristique gravida.",
			],
			authorId: 0,
			createdDate: new Date("2021-03-03"),
		},
	],
})

const getters = {
	getArticleById: (state) => (id) => {
		return state.posts.find((article) => article.id == id)
	},
	getArticlesByDate: (state) => {
		return state.posts.sort((a, b) => a.createdDate - b.createdDate)
	},
	getAuthorArticlesByDate: (state) => (authorId) => {
		return state.posts
			.filter((post) => post.authorId == authorId)
			.sort((a, b) => a.createdDate - b.createdDate)
	},
}

const actions = {
	changeArticleRatingById({ commit, getters }, data) {
		const article = getters.getArticleById(data.articleId)
		const newRating =
			(article.rating + data.ratingFromUser) / (article.votesCount + 1)
		commit("setNewRatingById", { id: article.id, newRating })
	},
	changeArticleViewsById({ commit }, id) {
		commit("increaseArticleViewsById", id)
	},
}

const mutations = {
	setNewRatingById(state, data) {
		state.posts.find((article) => article.id == data.id).rating = data.newRating
	},
	increaseArticleViewsById(state, id) {
		state.posts.find((article) => article.id == id).views++
	},
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
}
