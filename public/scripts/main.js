const services = [
  {
    title: "Ease & Precision",
    icon: "share-2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu dolor vitae metus placerat malesuada sit amet ut leo. Etiam aliquam pharetra nisl. Praesent pretium, eros ac maximus varius, mi purus dignissim ipsum, sit amet convallis tellus magna non risus. Suspendisse et odio mauris. Suspendisse nec magna vel lorem finibus tincidunt. Nulla quam velit, ornare ac mauris nec, ultricies facilisis diam. Vivamus vitae ipsum metus.",
    image: "connect"
  },
  {
    title: "Talent",
    icon: "circle",
    desc: "Nulla bibendum velit non aliquam malesuada. Integer tincidunt elit gravida purus laoreet, non rhoncus lacus bibendum. Suspendisse potenti. Aenean enim velit, pretium vitae semper a, dictum vel augue. Cras et magna ac elit posuere congue nec et purus. Sed consequat nisl nec quam lobortis pharetra. Aenean viverra fringilla neque eu mattis. Suspendisse laoreet nibh eget lectus facilisis, vel pulvinar augue scelerisque. Cras facilisis feugiat dui, nec pretium orci dignissim aliquam. Aenean tincidunt lacinia tellus nec dignissim. Etiam turpis felis, convallis molestie enim nec, posuere fermentum mauris. Nulla tempus finibus velit at ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam diam lorem, feugiat ac odio sit amet, tempor congue felis.",
    image: "talent"
  },
  {
    title: "Collaboration",
    icon: "users",
    desc: "Suspendisse at risus massa. Nam dui turpis, dapibus et interdum quis, posuere interdum tellus. Suspendisse non ornare massa, et tempor felis. Ut vestibulum mauris lobortis commodo fringilla. Nullam cursus mi sed vehicula maximus. Cras eu maximus risus. Mauris quis felis viverra, fringilla neque nec, condimentum nisi.",
    image: "collaboration"
  },
  {
    title: "Profit",
    icon: "dollar-sign",
    desc: "Suspendisse vitae elementum massa. Morbi maximus magna ante, nec imperdiet dui rutrum ut. Sed vel tellus vestibulum, lobortis enim id, congue sem. Mauris ligula tortor, fringilla in placerat non, dictum luctus odio. Aliquam ut turpis turpis. Proin quis augue vel purus vestibulum vestibulum nec et lectus. Aliquam quis lacus felis. Suspendisse potenti.",
    image: "money"
  }
];

Vue
  .createApp({
    data() {
      return {
        inactiveSidebar: true,
        services,
        activeService: 0
      }
    }
  })
  .mount("#root");


feather.replace();
