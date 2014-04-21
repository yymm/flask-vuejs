var simple = new Vue({
	el: "#simple",
	data: {
		message: 'bokete'
	}
})

var editor = new Vue({
	el: '#editor',
	data: {
		input: '# hello'
	},
	filters: {
		marked: marked
	}
})
