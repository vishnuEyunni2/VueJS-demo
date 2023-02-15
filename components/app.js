Vue.createApp({
  data() {
    return {
      
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
  .component("plan-picker", {
    template: '#plan-picker-template',
    data(){
      return{
        plans: ['The Hacker', 'The Curious', 'The Addict']
      }
    }
  })
  .mount("#app");