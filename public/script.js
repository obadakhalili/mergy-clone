Vue
  .createApp({
    data() {
      return { inactiveSidebar: true }
    },
    methods: {
      toSvg(icon, attributes) {
        return feather.icons[icon].toSvg(attributes);
      }
    }
  })
  .mount("#root");
