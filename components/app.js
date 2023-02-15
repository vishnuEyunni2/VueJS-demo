Vue.createApp({
  data() {
    return {
      plans: ['The Hacker', 'The Curious', 'The Addict']
    }
  },
})
  .component("click-counter", {
    template: '#click-counter-template',
    data() {
      return {
        count: 0,
      };
    },
  })
  .component("plan", {
    template: '#plan-template',
    props: {
      name: { type: String, default: 'The Single', required: true },
    }
  })
  .mount("#app");