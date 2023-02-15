Vue.createApp({})
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
    data() {
      return {
        plans: ['The Hacker', 'The Curious', 'The Addict']
      }
    },
    props: ['name']
  })
  .mount("#app");