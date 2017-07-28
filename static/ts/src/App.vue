<template>
  <div id="ts">
    <h2>{{ msg }}</h2>
    <div class="code">
      <pre><div>TypeScript</div><code class="typescript">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component({
  name: 'app'
})
export default class App extends Vue {
  msg: string = "It's written by TypeScript"
}
      </code></pre>
      <pre><div>HTML</div><code class="html">
{% extends "layout.html" %}

{% block body %}
&lt;div id="sfc"&gt;&lt;/div&gt;
&lt;script src="(( url_for('static', filename='ts/dist/build.js') ))"&gt;&lt;/script&gt;
{% endblock %}
      </code></pre>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component({
  name: 'app'
})
export default class App extends Vue {
  msg: string = "It's written by TypeScript"
}
</script>

<style>
h2 {
  font-weight: normal;
}
</style>
