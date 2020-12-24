<template>
  <div class="home">
    <b-loading
      :is-full-page="true"
      v-model="loading"
      :can-cancel="false"
    ></b-loading>
    <b-navbar fixed-top>
      <template slot="brand">
        <b-navbar-item>
          Github Full Time Jobs
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="div">
          <div class="current-page-indicator">
            <h5>Page {{ currentPage }}</h5>
          </div>
          <div class="buttons">
            <b-button
              class="button"
              type="is-primary"
              @click="previousPage"
              v-if="currentPage > 1"
              >Previous Page</b-button
            >
            <b-button
              class="button"
              type="is-primary"
              @click="nextPage"
              v-if="jobs.length > 0"
              >Next Page</b-button
            >
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>

    <b-modal v-model="activeModal">
      <job-modal :job="currentJob"></job-modal>
    </b-modal>

    <div class="container">
      <div class="columns is-multiline" v-if="jobs.length !== 0 && !error">
        <div class="column is-one-third" v-for="job in jobs" :key="job.id">
          <div class="" @click="openDetails(job)">
            <job-card :job="job"></job-card>
          </div>
        </div>
      </div>
      <div v-if="!loading && jobs.length === 0 && !error">
        <div class="no-jobs">
          <h2 class="title is-2">Oh No! No more jobs :(</h2>
          <b-button
            class="button"
            type="is-primary"
            @click="previousPage"
            v-if="currentPage > 1"
            >Previous Page</b-button
          >
        </div>
      </div>
      <div class="error" v-if="error">
        <h2 class="title is-2">Oh No! An error occured</h2>
        <h2 class="title is-2">Please come back later</h2>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import JobCard from "../components/JobCard";
import JobModal from "../components/JobModal";
export default {
  components: { JobCard, JobModal },
  name: "Home",
  data: function() {
    return {
      currentPage: 1,
      jobs: [],
      loading: false,
      activeModal: false,
      currentJob: {},
      error: false,
    };
  },
  methods: {
    fetchJobs: async function(page) {
      this.loading = true;
      try {
        const response = await axios.get(`/api/full-time/${page}`);
        this.jobs = response.data.jobs;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.error = true;
      }
    },
    openDetails: function(job) {
      this.currentJob = job;
      this.activeModal = true;
    },
    nextPage: function() {
      this.currentPage++;
      this.fetchJobs(this.currentPage);
    },
    previousPage: function() {
      this.currentPage--;
      this.fetchJobs(this.currentPage);
    },
  },
  mounted: function() {
    this.fetchJobs(this.currentPage);
  },
};
</script>
<style scoped>
.container {
  margin-top: 45px;
}
.button {
  width: 110px;
}
.current-page-indicator {
  margin-right: 50px;
}
.no-jobs,
.error {
  text-align: center;
}
</style>
