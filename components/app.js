let PlanComponent = {
  template: '#plan-template',
  props: {
    name: { type: String, default: 'The Single', required: true },
  }
}

let PlanPickerComponent = {
  components: { plan: PlanComponent },
  template: '#plan-picker-template',
  data() {
    return {
      plans: ['The Hacker', 'The Curious', 'The Addict']
    }
  }
}

Vue.createApp({
  components: { PlanPicker: PlanPickerComponent }
}).component("click-counter", {
  template: '#click-counter-template',
  data() {
    return {
      count: 0,
    };
  }
}).mount("#app");