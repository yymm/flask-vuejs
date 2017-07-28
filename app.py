from flask import Flask, render_template


class CustomFlask(Flask):
    jinja_options = Flask.jinja_options.copy()
    jinja_options.update(dict(
      block_start_string='{%',
      block_end_string='%}',
      variable_start_string='((',
      variable_end_string='))',
      comment_start_string='{#',
      comment_end_string='#}',
    ))


app = CustomFlask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/example')
def example():
    message = "Hello Flask!"
    return render_template('example.html', message=message)


@app.route('/more')
def more():
    return render_template('more.html')


@app.route('/router')
def router():
    return render_template('router.html')


@app.route('/sfc')
def sfc():
    return render_template('sfc.html')


@app.route('/typescript')
def typescript():
    return render_template('typescript.html')


@app.route('/vuex')
def vuex():
    return render_template('vuex.html')


@app.route('/v0.10.3')
def v0_10_3():
    return render_template('vue.js_v0.10.3.html')


if __name__ == '__main__':
    app.run(debug=True)
