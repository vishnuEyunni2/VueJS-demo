let PlanComponent = {
  template: '#plan-template',
  props: {
    name: { type: String, default: 'The Single', required: true },
  },
  data() {
    return {
      selected: false
    }
  },
  methods: {
    select() {
      alert('this.selected is ' + String(this.selected))
      this.selected = true
    }
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