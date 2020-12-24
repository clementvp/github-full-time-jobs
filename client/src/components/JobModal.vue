<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div v-if="job.company_logo" class="media-left">
          <figure class="image is-48x48">
            <img :src="job.company_logo" alt="Placeholder image" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ job.title }}</p>
        </div>
      </div>

      <div class="content">
        <div>
          <h3>Company: {{ job.company }}</h3>
        </div>
        <div>
          <h4>Location: {{ job.location }}</h4>
        </div>
        <div>
          <markdown-it-vue :content="job.description" />
        </div>
        <div class="apply">
          <h4>How to apply:</h4>
          <markdown-it-vue :content="job.how_to_apply" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MarkdownItVue from "markdown-it-vue";
import "markdown-it-vue/dist/markdown-it-vue.css";
export default {
  name: "JobModal",
  components: { MarkdownItVue },
  props: {
    job: Object,
  },
};
</script>
<style scoped>
.apply {
  margin-top: 20px;
}
</style>
