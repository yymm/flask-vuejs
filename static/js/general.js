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

var apiUrl = 'https://api.github.com/repos/yymm/Yoichi/commits?per_page=3&sha='
var commits = new Vue({
	el: "#commits",
	data: {
		branch: "master"
	},
	created: function(){
		this.$watch('branch', function() {
			this.fetchData();
		})
	},
	filters: {
		truncate: function(value){
			var newline = value.indexOf('\n');
			return newline > -1 ? value.slice(0, newline) : value;
		},
		formatDate: function(value){
			return value.replace(/T|Z/g, ' ');
		}
	},
	methods: {
		fetchData: function(){
			// self = thisは肝。
			// onload内のcommitsをVueオブジェクト内の参照にするために必須。
			// thisを使うとonload実行時のthis(=多分windowオブジェクト)になってしまう。
			var xhr = new XMLHttpRequest(), self = this;
			xhr.open('GET', apiUrl + self.branch);
			xhr.onload = function(){
				self.commits = JSON.parse(xhr.responseText);
			}
			xhr.send();
		}
	}
})
