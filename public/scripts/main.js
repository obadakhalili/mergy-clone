async function MainComponent() {
  const response = await fetch("../templates/main.html");
  const template = await response.text();
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

  return {
    template,
    data() {
      return {
        services,
        activeService: 0,
        showGoToTop: false
      }
    },
    methods: {
      scrollTop() {
        scroll(0, 0);
      }
    },
    mounted() {
      window.addEventListener("scroll", () => {
        this.showGoToTop = (document.body.scrollTop || document.documentElement.scrollTop) > 100 ? true : false;
      });
      feather.replace();
    }
  };
}

async function HireComponent() {
  const template = await (await fetch("../templates/hire.html")).text();
  const skills = await (await fetch("https://raw.githubusercontent.com/fforres/skills/master/tags.json")).json();

  return {
    template,
    data() {
      return {
        hireInfo: [
          {
            header: "Employee's Info",
            inputs: [
              {
                values: ["html", "css", "javascript"],
                options: skills.map(item => item.tagName)
              },
              {
                value: "Full Time",
                options: ["Full Time", "Part Time"]
              }
            ]
          },
          {
            header: "Your Info",
            inputs: ["Harry", "Potter", "harry.gryffindor@hogwarts.com", "6054756961"]
          },
          {
            header: "Meeting Set-up",
            date: new Date().toLocaleString()
          },
          { header: "Ready to Go?" },
          { header: "Completed" }
        ],
        currentStep: 0
      };
    },
    components: { "vue-multiselect": VueMultiselect.default }
  };
}

async function NotFoundComponent() {
  const template = await (await fetch("../templates/404.html")).text();
  return { template };
}

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: MainComponent 
    },
    {
      path: "/hire",
      component: HireComponent
    },
    {
      path: "*",
      component: NotFoundComponent
    }
  ]
});

router.beforeEach((to, _, next) => {
  if (to.hash === "") {
    NProgress.start();
    NProgress.set(0.1);
  }
  next();
})
router.afterEach((to, _) => {
  if (to.hash === "") {
    NProgress.done();
  }
});

new Vue({
  router: router,
  data: { inactiveSidebar: true },
  computed: {
    inHome() {
      return this.$route.path == '/';
    }
  }
}).$mount("#root");
