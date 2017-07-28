# Flask-Vue.js

🍣 compatible Vue.js v2 🍣

confrict a Jinja2 delimiter and Vue.js delimiter...

=> change Jinja2 delimiter

```python
from flask import Flask

class CustomFlask(Flask):
  jinja_options = Flask.jinja_options.copy()
  jinja_options.update(dict(
    block_start_string='(%',
    block_end_string='%)',
    variable_start_string='((',
    variable_end_string='))',
    comment_start_string='(#',
    comment_end_string='#)',
  ))

app = CustomFlask(__name__)

#
# your flask code here
#
```

- [different delimiters in jinja2 + flask](https://gist.github.com/lost-theory/3925738 "different delimiters in jinja2 + flask")

=> change Vue.js delimiter

```javascript
var app = new Vue({
  el: "#app",
  delimiters: ["[[", "]]"],
  data: {
    message: "Hello Vue!"
  }
})
```

- [Vue.js api/#delimiters](https://vuejs.org/v2/api/#delimiters "Vue.js api/#delimiters")

# Example & Tips

requirements: Flask (=> pip install Flask)

```
$ git clone https://github.com/yymm/flask-vuejs.git
$ cd flask-vuejs
$ python app.py
```

see localhost:5000.

## Menu

- [x] Jinja2 & Vue.js
- [x] more...
- SPA
  - using CDN
    - [x] vue-router
  - using Node.js(using vue-cli 'webpack-simple')
    - [x] Single File Component
    - [ ] TypeScript with Single File Component
    - [ ] Vuex
- [x] Vue.js v0.10.3
