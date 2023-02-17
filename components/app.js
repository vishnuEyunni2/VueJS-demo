let PlanComponent = {
  template: '#plan-template',
  props: {
    name: { type: String, default: 'The Single', required: true },
    selected: { type: Boolean, default: false }
  },
  methods: {
    select() {
      // emits to the parent div
      this.$emit('select', this.name)
    }
  }
}

let PlanPickerComponent = {
  components: { plan: PlanComponent },
  template: '#plan-picker-template',
  data() {
    return {
      plans: ['The Hacker', 'The Curious', 'The Addict'],
      selectedPlan: null
    }
  },
  methods: {
    selectPlan(plan) {
      this.selectedPlan = plan;
    }
  }
}

let ClickCounterComponent = {
  template: '#click-counter-template',
  data() {
    return {
      count: 0,
    };
  }
}

Vue.createApp({
  components: { PlanPicker: PlanPickerComponent }
}).mount("#app");