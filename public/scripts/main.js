const services = [
  {
    title: "Ease & Precision",
    icon: "share-2",
    desc: "We provide you with an easy to use UI. Hiring is detailed and optimized for every scenario and is viable with a few clicks. And we also produce an exact and honest salary rate that suits both the employer's and the employee's needs.",
    image: "connect"
  },
  {
    title: "Talent",
    icon: "circle",
    desc: "Everyone wants an ideal employee, hence why our platform connects with top-end software engineers. Most of which have a significant amount of skill sets along with real-world experience to suit everyone's requirements.",
    image: "talent"
  },
  {
    title: "Collaboration",
    icon: "users",
    desc: "Even though our software engineers are talented as individuals, we decided to equip our clients with the choice of hiring teams, as some scenarios require the distribution of the workload over a group.",
    image: "collaboration"
  },
  {
    title: "Profit",
    icon: "dollar-sign",
    desc: "The salary rates we provide are precise and honest. Even though the employees we provide are top-end software engineers, the wages that accompany them are fair and well thought out to accommodate your company's profit and growth. We help boost your focus on your business logic, leaving the process of finding an ideal employee to us.",
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
