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
        showGoToTop: false,
        contact: {
          firstname: "",
          lastname: "",
          email: "",
          subject: "",
          message: ""
        }
      }
    },
    methods: {
      sendMessage() {
        const contact = this.contact;
        const regexs = this.regexs;

        if (
          regexs.name.test(contact.firstname) &&
          regexs.name.test(contact.lastname) &&
          regexs.email.test(contact.email) &&
          regexs.title.test(contact.subject) &&
          contact.message
        ) {
          return new Promise((resolve) => setTimeout(() => {
            contact.firstname = "";
            contact.lastname = "";
            contact.email = "";
            contact.subject = "";
            contact.message = "";
            this.$toast.success("Message Sent");
            resolve();
          }, 1500));
        } else {
          this.$toast.error("One or more fields are invalid");
        }
      },
      scrollTop() {
        window.scroll(0, 0);
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
  const templateResponse = await fetch("../templates/hire.html");
  const template = await templateResponse.text();
  const skillsResponse = await fetch("https://raw.githubusercontent.com/fforres/skills/master/tags.json")
  const skills = await skillsResponse.json();

  return {
    template,
    data() {
      return {
        hireInfo: [
          {
            header: "Employee's Info",
            info: [
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
            info: ["Harry", "Potter", "harry.gryffindor@hogwarts.com", ""]
          },
          {
            header: "Meeting Set-up",
            date: new Date(new Date().getTime() + 1.728e+8)
          },
          { header: "Ready to Go?" },
          { header: "Completed" }
        ],
        currentStep: 0,
        isBooking: false
      };
    },
    computed: {
      isPhoneValid() {
        return this.hireInfo[1].info[3] === "" || this.regexs.phone.test(this.hireInfo[1].info[3]);
      }
    },
    methods: {
      nextStep(e) {
        if (this.currentStep === 0) {
          if (
            this.hireInfo[0].info[0].values.length === 0 ||
            this.hireInfo[0].info[1].value === null
          ) {
            return this.$toast.error("One or more fields are invalid");
          }
        } else if (this.currentStep === 1) {
          if (
            !this.regexs.name.test(this.hireInfo[1].info[0]) ||
            !this.regexs.name.test(this.hireInfo[1].info[1]) ||
            !this.regexs.email.test(this.hireInfo[1].info[2]) ||
            !this.regexs.phone.test(this.hireInfo[1].info[3])
          ) {
            return this.$toast.error("One or more fields are invalid");
          }
        } else if (this.currentStep === 3) {
          this.isBooking = true;
          return new Promise((resolve) => setTimeout(() => {
            this.currentStep++;
            resolve();
          }, 1500));
        }

        this.currentStep++;
        e.target.blur();
      }
    },
    components: { "vue-multiselect": window.VueMultiselect.default }
  };
}

async function NotFoundComponent() {
  const response = await fetch("../templates/404.html");
  const template = await response.text();

  return { template };
}

Vue.component("m-input", {
  render(createElement) {
    const isTextarea = this.$props.type === "textarea";
    
    return createElement(
      isTextarea ? "textarea" : "input",
      {
        domProps: { value: this.$props.value },
        class: [
          "transition border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded text-base focus:outline-none focus:border-transparent",
          isTextarea || this.isValid ? "focus:ring-2 focus:ring-blue-500" : "ring-2 ring-red-400"
        ],
        on: { input: (e) => this.updateValue(e.target.value) }
      }
    );
  },
  props: ["type", "value", "regex"],
  computed: {
    isValid() {
      return this.value === "" || this.regex.test(this.value);
    }
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    }
  }
});

Vue.use(window.VuePromiseBtn);
Vue.use(window.VueToast, { duration: 2000 });
Vue.use(window.VueTelInput);

Vue.mixin({
  data() {
    return {
      get regexs() {
        return {
          name: /^\w{2,15}$/,
          email: /^\S+@\S+\.\S+$/,
          title: /^\w{1,25}( \w{1,25}){0,5}$/,
          phone: /^[0-9 ]+$/
        };
      }
    };
  }
});

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
  data: { sidebarActive: false },
  computed: {
    inHome() {
      return this.$route.path == '/';
    }
  },
  watch: {
    sidebarActive(value) {
      this.$refs.sidebar.classList[value ? "remove" : "add"]("-translate-x-full");
    }
  }
}).$mount("#root");
