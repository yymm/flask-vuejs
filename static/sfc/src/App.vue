<template>
  <div id="sfc">
    <h2>{{ msg }}</h2>
    <div class="code">
      <pre><div>Command</div><code class="shell">
$ cd static
$ vue init webpack-simple sfc
$ cd sfc
$ npm install
$ npm run build
(load 'url_for('static', filename='sfc/dist/build.js')' in template)
      </code></pre>
      <pre><div>Javascript</div><code class="javascript">
export default {
  name: 'sfc',
  data () {
    return {
      msg: 'Single File Component'
    }
  }
}
      </code></pre>
      <pre><div>HTML</div><code class="html">
{% extends "layout.html" %}

{% block body %}
&lt;div id="sfc"&gt;&lt;/div&gt;
&lt;script src="(( url_for('static', filename='sfc/dist/build.js') ))"&gt;&lt;/script&gt;
{% endblock %}
      </code></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sfc',
  data () {
    return {
      msg: 'Single File Component'
    }
  }
}
</script>

<style>
h2 {
  font-weight: normal;
}
</style>
