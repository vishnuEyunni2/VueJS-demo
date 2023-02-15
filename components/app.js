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
    props: ['name']
  })
  .mount("#app");