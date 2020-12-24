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
        <h5>Company: {{ job.company }}</h5>
      </div>
      <div class="content">
        <h5>Location: {{ job.location }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobCard",
  props: {
    job: Object,
  },
};
</script>

<style scoped>
.card {
  height: 250px;
}
.card-content:hover {
  cursor: pointer;
}
</style>
