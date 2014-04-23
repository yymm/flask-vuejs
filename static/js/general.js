Vue.config({
	delimiters: ['[', ']']
})

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

var emailRE = emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

var adduser = new Vue({
	el: "#adduser",
	data: {
		users: [],
		newUser: {
			name: '',
			email: ''
		},
		validation: {
			name: false,
			email: false
		}
	},
	filters: {
		nameValidator: function(val){
			this.validation.name = !!val;
			return val;
		},
		emailValidator: function(val){
			this.validation.email = emailRE.test(val);
			return val;
		}
	},
	methods: {
		addUser: function(e){
			e.preventDefault();
			if(this.validation.name && this.validation.email){
				var user = this.newUser;
				this.users.push(user);
				this.newUser = {};
			}
		}
	}
})

var data = [
	{ name: 'Chuck Norris', power: Infinity },
	{ name: 'Goku', power: 20000 },
	{ name: 'Vegeta', power: 18000 },
	{ name: 'Freeza', power: 530000 }
]

Vue.component('grid', {
	template: "#grid-template",
	replace: true,
	created: function(){
		this.ascending = {};
	},
	methods: {
		sortBy: function(key){
			var asc = this.ascending[key] = !this.ascending[key];
			this.data.sort(function(a, b){
				var res = a[key] > b[key];
				if (asc) res = !res;
				return res ? 1 : -1;
			});
		}
	}
})

var gridcomponent = new Vue({
	el: "#grid-component",
	data: {
		gridOptions: {
			data: data,
			columns: [
				{ header: 'Name', key: 'name' },
				{ header: 'Power', key: 'power' }
			]
		}
	}
})

var stats = [
	{ label: 'A', value: 100 },
	{ label: 'B', value: 100 },
	{ label: 'C', value: 100 },
	{ label: 'D', value: 100 },
	{ label: 'E', value: 100 },
	{ label: 'F', value: 100 }
]

Vue.component('polygraph', {
	template: '#polygraph-template',
	replace: true,
	computed: {
		points: function(){
			var total = this.stats.length;
			return this.stats.map(function(stat, i){
				var point = valueToPoint(stat.value, i, total);
				return point.x + ',' + point.y;
			}).join(' ')
		}
	},
	components: {
		'axis-label': {
			computed: {
				point: function(){
					return valueToPoint(+this.value + 10, this.$index, this.$parent.stats.length);
				},
				x: function(){
					return this.point.x;
				},
				y: function(){
					return this.point.y;
				}
			}
		}
	}
})

function valueToPoint(value, index, total){
	var x = 0,
		y = -value * 0.8,
		angle = Math.PI * 2 / total * index,
		cos = Math.cos(angle),
		sin = Math.sin(angle),
		tx = x * cos - y * sin + 100,
		ty = x * sin + y * cos + 100;
	return {
		x: tx,
		y: ty
	}
}


var svgsample = new Vue({
	el: '#svg-sample',
	data: {
		newLabel: '',
		stats: stats
	},
	filters: {
		format: function(stats){
			return JSON.stringify(stats, null, 2);
		}
	},
	methods: {
		add: function(){
			if(!this.newLabel) return;
			this.stats.push({
				label: this.newLabel,
				value: 100
			});
			this.newLabel = '';
		},
		remove: function(stat){
			if(this.stats.length > 3){
				this.stats.remove(stat.$data);
			}
		}
	}
})


Vue.component('img-slider', {
	template: '#img-slider-template',
	replace: true
})

new Vue({el: '#image-slider'})
