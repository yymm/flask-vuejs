# flask-vue.js

confrict a jinja2 delimiter and vue.js delimiter...

=> jinja2 delimiter is changed.

	from flask import Flask
	 
	class CustomFlask(Flask):
		jinja_options = Flask.jinja_options.copy()
		jinja_options.update(dict(
			block_start_string='{%',
			block_end_string='%}',
			variable_start_string='[[',
			variable_end_string=']]',
			comment_start_string='{#',
			comment_end_string='#}',
		))
	 
	app = CustomFlask(__name__)

* [different delimiters in jinja2 + flask](https://gist.github.com/lost-theory/3925738 "different delimiters in jinja2 + flask")
* [Alternative Syntax — Jinja Documentation](http://modular.math.washington.edu/home/wstein/www/home/bjarke/sage-4.4.4/local/LIB/python/site-packages/Jinja-1.2-py2.6-linux-x86_64.egg/docs/html/altsyntax.html "Alternative Syntax — Jinja Documentation")
