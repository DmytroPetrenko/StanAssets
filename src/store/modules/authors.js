const state = () => ({
	authors: [
		{
			id: 0,
			name: "Andrew",
			surname: "Williams",
			image: "author.png",
			position: "SEO",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum.",
			biography: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum, libero augue venenatis leo, in maximus ipsum dui et est. In in aliquet libero. In ac enim non lectus convallis feugiat.",
				"Ut in pharetra tortor. Quisque ligula magna, iaculis non porta ut, suscipit sit amet sapien. Sed ut pharetra mauris. Cras ac dapibus turpis. Etiam suscipit orci eu tristique gravida.",
				"Fusce consectetur vel urna ut venenatis. Etiam in mauris odio. Phasellus sed turpis vitae justo maximus suscipit in ut risus. Quisque viverra magna lorem, et placerat velit cursus quis.",
				"Maecenas venenatis molestie eros, in pulvinar urna elementum quis. Praesent a lorem quis sem cursus feugiat sed nec erat.    Maecenas venenatis molestie eros, in pulvinar urna elementum quis. Praesent a lorem quis sem cursus feugiat sed nec erat.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum, libero augue venenatis leo, in maximus ipsum dui et est. In in aliquet libero. In ac enim non lectus convallis feugiat.",
				"Ut in pharetra tortor. Quisque ligula magna, iaculis non porta ut, suscipit sit amet sapien. Sed ut pharetra mauris. Cras ac dapibus turpis. Etiam suscipit orci eu tristique gravida.",
				"Fusce consectetur vel urna ut venenatis. Etiam in mauris odio. Phasellus sed turpis vitae justo maximus suscipit in ut risus. Quisque viverra magna lorem, et placerat velit cursus quis.",
				"Maecenas venenatis molestie eros, in pulvinar urna elementum quis. Praesent a lorem quis sem cursus feugiat sed nec erat.    Maecenas venenatis molestie eros, in pulvinar urna elementum quis. Praesent a lorem quis sem cursus feugiat sed nec erat.",
			],
			facebook_link: "",
			linkedin_link: "",
		},
		{
			id: 1,
			name: "Johny",
			surname: "Depp",
			image: "author.png",
			position: "Tech Lead",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum.",
			biography: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum, libero augue venenatis leo, in maximus ipsum dui et est. In in aliquet libero. In ac enim non lectus convallis feugiat.",
				"Ut in pharetra tortor. Quisque ligula magna, iaculis non porta ut, suscipit sit amet sapien. Sed ut pharetra mauris. Cras ac dapibus turpis. Etiam suscipit orci eu tristique gravida.",
				"Fusce consectetur vel urna ut venenatis. Etiam in mauris odio. Phasellus sed turpis vitae justo maximus suscipit in ut risus. Quisque viverra magna lorem, et placerat velit cursus quis.",
				"Maecenas venenatis molestie eros, in pulvinar urna elementum quis. Praesent a lorem quis sem cursus feugiat sed nec erat.    Maecenas venenatis molestie eros, in pulvinar urna elementum quis. Praesent a lorem quis sem cursus feugiat sed nec erat.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum, libero augue venenatis leo, in maximus ipsum dui et est. In in aliquet libero. In ac enim non lectus convallis feugiat.",
				"Ut in pharetra tortor. Quisque ligula magna, iaculis non porta ut, suscipit sit amet sapien. Sed ut pharetra mauris. Cras ac dapibus turpis. Etiam suscipit orci eu tristique gravida.",
				"Fusce consectetur vel urna ut venenatis. Etiam in mauris odio. Phasellus sed turpis vitae justo maximus suscipit in ut risus. Quisque viverra magna lorem, et placerat velit cursus quis.",
				"Maecenas venenatis molestie eros, in pulvinar urna elementum quis. Praesent a lorem quis sem cursus feugiat sed nec erat.    Maecenas venenatis molestie eros, in pulvinar urna elementum quis. Praesent a lorem quis sem cursus feugiat sed nec erat.",
			],
			facebook_link: "",
			linkedin_link: "",
		},
		{
			id: 2,
			name: "Andrew",
			surname: "Williams",
			image: "author.png",
			position: "SEO",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum.",
			biography: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum, libero augue venenatis leo, in maximus ipsum dui et est. In in aliquet libero. In ac enim non lectus convallis feugiat.",
				"Ut in pharetra tortor. Quisque ligula magna, iaculis non porta ut, suscipit sit amet sapien. Sed ut pharetra mauris. Cras ac dapibus turpis. Etiam suscipit orci eu tristique gravida.",
				"Fusce consectetur vel urna ut venenatis. Etiam in mauris odio. Phasellus sed turpis vitae justo maximus suscipit in ut risus. Quisque viverra magna lorem, et placerat velit cursus quis.",
				"Maecenas venenatis molestie eros, in pulvinar urna elementum quis. Praesent a lorem quis sem cursus feugiat sed nec erat.    Maecenas venenatis molestie eros, in pulvinar urna elementum quis. Praesent a lorem quis sem cursus feugiat sed nec erat.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum, libero augue venenatis leo, in maximus ipsum dui et est. In in aliquet libero. In ac enim non lectus convallis feugiat.",
				"Ut in pharetra tortor. Quisque ligula magna, iaculis non porta ut, suscipit sit amet sapien. Sed ut pharetra mauris. Cras ac dapibus turpis. Etiam suscipit orci eu tristique gravida.",
				"Fusce consectetur vel urna ut venenatis. Etiam in mauris odio. Phasellus sed turpis vitae justo maximus suscipit in ut risus. Quisque viverra magna lorem, et placerat velit cursus quis.",
				"Maecenas venenatis molestie eros, in pulvinar urna elementum quis. Praesent a lorem quis sem cursus feugiat sed nec erat.    Maecenas venenatis molestie eros, in pulvinar urna elementum quis. Praesent a lorem quis sem cursus feugiat sed nec erat.",
			],
			facebook_link: "",
			linkedin_link: "",
		},
		{
			id: 3,
			name: "Johny",
			surname: "Depp",
			image: "author.png",
			position: "Tech Lead",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum.",
			biography: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum, libero augue venenatis leo, in maximus ipsum dui et est. In in aliquet libero. In ac enim non lectus convallis feugiat.",
				"Ut in pharetra tortor. Quisque ligula magna, iaculis non porta ut, suscipit sit amet sapien. Sed ut pharetra mauris. Cras ac dapibus turpis. Etiam suscipit orci eu tristique gravida.",
				"Fusce consectetur vel urna ut venenatis. Etiam in mauris odio. Phasellus sed turpis vitae justo maximus suscipit in ut risus. Quisque viverra magna lorem, et placerat velit cursus quis.",
				"Maecenas venenatis molestie eros, in pulvinar urna elementum quis. Praesent a lorem quis sem cursus feugiat sed nec erat.    Maecenas venenatis molestie eros, in pulvinar urna elementum quis. Praesent a lorem quis sem cursus feugiat sed nec erat.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum, libero augue venenatis leo, in maximus ipsum dui et est. In in aliquet libero. In ac enim non lectus convallis feugiat.",
				"Ut in pharetra tortor. Quisque ligula magna, iaculis non porta ut, suscipit sit amet sapien. Sed ut pharetra mauris. Cras ac dapibus turpis. Etiam suscipit orci eu tristique gravida.",
				"Fusce consectetur vel urna ut venenatis. Etiam in mauris odio. Phasellus sed turpis vitae justo maximus suscipit in ut risus. Quisque viverra magna lorem, et placerat velit cursus quis.",
				"Maecenas venenatis molestie eros, in pulvinar urna elementum quis. Praesent a lorem quis sem cursus feugiat sed nec erat.    Maecenas venenatis molestie eros, in pulvinar urna elementum quis. Praesent a lorem quis sem cursus feugiat sed nec erat.",
			],
			facebook_link: "",
			linkedin_link: "",
		},
	],
})

const getters = {
	getAuthorById: (state) => (id) => {
		return state.authors.find((author) => author.id == id)
	},
}

const actions = {}

const mutations = {}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
}
