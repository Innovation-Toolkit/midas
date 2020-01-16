const jobs = {
  'dos-application-due': require('./state.department/application-due'),
};

const undefinedJob = {
  name: 'JOB NOT FOUND',
  description: 'JOB NOT FOUND',
  run: function () {},
  status: function () {},
}

module.exports = {
  /**
   * @param {string} key
   * @return {Object} a job for running or scheduling
   */
  getJob: function (key) {
    return jobs[key] || undefinedJob;
  },
  /**
   * @returns {Array<Object>}
   */
  listJobs: function () {
    return Object.keys(jobs).map((key) => {
      return {
        job: key,
        name: jobs[key].name,
        description: jobs[key].description,
      };
    })
  },
};