import JavaScriptIcon from "./assets/skill_icons/javascript-js.png";
import tsLogo from "./assets/skill_icons/tsLogo.png";
import javaLogo from "./assets/skill_icons/javaLogo.png";
import reactLogo from "./assets/skill_icons/reactLogo.png";
import nextjsLogo from "./assets/skill_icons/nextjsLogo.png";
import vueLogo from "./assets/skill_icons/vueLogo.png";
import springBootLogo from "./assets/skill_icons/springBootLogo.png";
import nodeLogo from "./assets/skill_icons/nodeLogo.png";
import reduxLogo from "./assets/skill_icons/reduxLogo.png";
import tailwindLogo from "./assets/skill_icons/tailwindLogo.png";
import boostrapLogo from "./assets/skill_icons/boostrapLogo.png";
import wpLogo from "./assets/skill_icons/wpLogo.png";
import figmaLogo from "./assets/skill_icons/figmaLogo.png";
import cPanelLogo from "./assets/skill_icons/linux-panel-logo.png";
import jira from "./assets/skill_icons/jira.png";
import sqlServer from "./assets/skill_icons/sqlServer.png";
import office from "./assets/skill_icons/office.png";
import trello from "./assets/skill_icons/trello.png";
import palette from "./assets/skill_icons/palette.png";
import miro from "./assets/skill_icons/miro.png";
import greengoWe from "./assets/skill_icons/miro.png";


const data = {
  tr: {
    header: {
      darkmode: "GECE MODU",
      lightmode: "GÜNDÜZ MODU",
      languagetxt: "İNGİLİZCEYE",
      language: " GEÇ",
      skill: "Beceriler",
      proje: "Projeler",
      contact: "İletişim!",
    },
    introduction: {
      greeting1: "Merhaba,ben ",
      greeting2: "Asilcan Çetinkaya",
      greeting3: "Full Stack Developer",
      greeting4: "Frontend Developer",
      greeting5: "Business Analyst",
      greeting6: "İş Analisti",
      p1: "Merhaba ben Asilcan Çetinkaya teknoloji alanında paydaşlarla süreç yürütme İş Analistliği ve Proje Yönetimi alanında kendimi geliştiriyorum.Mobil uygulamala canlıya alma süreçleri,firma web sitesi gibi alanlarda tecrübe sahibiyim.Projelerinizi hayata geçirirken sizlere çözüm üretmek için buradayım.Aşağıda yaptığım çalışmaları inceleyebilirsiniz.",
      iletişim1: "İletişim",
      iletişim2: "Github",
      iletişim3: "LinkedIn",
    },
    skills: {
      title: "Beceriler",
      skillerim: [
        {
          name: "Jira",
          icon: jira,
        },
        {
          name: "Sql",
          icon: sqlServer,
        },
        {
          name: "MS Office",
          icon: office,
        },
        {
          name: "Trello",
          icon: trello,
        },
        {
          name: "Palette",
          icon: palette,
        },
        {
          name: "Miro",
          icon: miro,
        }
      ],
    },
    profile: {
      title: "Profil",
      basicinfo: {
        birthdatekey: "Doğum Tarihi",
        birthdate: "08.01.1998",
        locationkey: "İkamet Şehri",
        location: "Muğla",
        edukey: "Eğitim Durumu",
        edu: "Uludağ Üniversitesi Lisans, 2021",
        rolekey: "Tercih Ettiği Rol",
        role: "Business Analyst",
      },
      aboutme: {
        title: "Hakkımda",
        p1: "Üniversiteden mezun olduktan sonra kendimi teknoloji alanında geliştirmeye başladım.Jira ,SQL ,süreç yönetimi,use case , canva gibi uygulamalarda deneyim sahibiyim",
        p2: "Genel uyumlu bir insanım ve takım çalışması içerisinde bulunmaktan keyif alıyorum.Boş zamanlarımda doğada vakit geçirmekten hoşlanırım",
      },
    },
    projects: {
      title: "Projeler",
      project1: {
        title: "Unicar Rental App",
        p1: "Kullanıcıların mobil uygulamaya girerek araç kiralayabildiği alternatif rotalar ve keşifler yapabileceği bir mobil uygulama.",
        tags: [
          "UseCase",  
          "SQL",
          "Migration",
          "MS Office",
          "Canva",
          "Miroo",
          "PowerPoint",
          "UML",
          "Security Alternatives",
          "Mock-Up",
          "Data Mining",
        ],
        links: {
          git: "https://github.com/Asilcetinkaya/FmssFinalProject",
          redirect: "https://docs.google.com/presentation/d/186-etqXFi6kBPMhloJIUL1z9hT4iovHK/edit?usp=sharing&ouid=106092499694473798871&rtpof=true&sd=true",
        },
        image: "/project-img/unicar.png",
      },
      project2: {
        title: "Skytex Website",
        p1: "Skytex için, tekstil sektörüne özel olarak tasarlanmış, mobil uyumlu ve SEO optimize edilmiş bir kurumsal web sitesini bir yazılım geliştirici arkadaşım ile beraber canlıya aldık. Projede, kullanıcı deneyimi odaklı bir yaklaşım benimseyerek WordPress gibi güçlü bir CMS kullanarak, şirketin marka kimliğini en iyi şekilde yansıtan bir dijital platform oluşturdum.",
        tags: [
          "JavaScript",
          "Html",
          "Css",
          "SQL",
          "MS Office",
          "Wordpress",
        ],
        links: {
          git: "https://github.com/Asilcancetinkaya",
          redirect: "https://www.skytextil.com/",
        },
        image: "/project-img/skytex-home.jpeg",
      },
      project3: {
        title: "GreenGo Rental",
        p1: "Bu projede, Türkiye'de şu an için faaliyette olmayan ancak ileride hizmete girme potansiyeli bulunan, yalnızca elektrikli araç kiralama hizmeti sunacak bir web sitesi tasarımı oluşturdum.",
        tags: [
          "MS Office",
          "Kritik Yol Methodu",
          "Dijital Pazarlama",
          "Marka İmajı",
          "Adobe XD",
          "Jira",
          "Wordpress"
        ],
        links: {
          git: "https://github.com/Asilcetinkaya",
          redirect: "https://drive.google.com/drive/folders/1sJFSNyMQOU0gfnlp9s1tfn6xfBXXbNf_?usp=sharing",
        },
        image: "/project-img/greengoWe.jpeg",
      },
      project4: {
        title: "Pizza Website",
        p1: "Vue.js, TypeScript, Tailwind CSS ve Pinia kullanarak, kullanıcıların pizza siparişlerini kişiselleştirerek oluşturabileceği interaktif bir web uygulaması geliştirdim. Gelişmiş validasyon mekanizmaları ile kullanıcı hatalarını önleyerek sorunsuz bir sipariş süreci sağlandı.",
        tags: [
          "Vue 3",
          "TypeScript",
          "Tailwind",
          "Vercel",
          "Pinia",
          "Vue-Router",
        ],
        links: {
          git: "https://github.com/BSenaS/pizza-vue",
          redirect: "https://pizza-vue.vercel.app/",
        },
        image: "/project-img/pizza-home.jpeg",
      },
      project5: {
        title: "LoL Comp Builder",
        p1: "En çok oynanan online oyunlardan League of Legends için bir tutku projesi geliştirdim. Kullanıcılar bu proje sayesinde takım kompozisyonları oluşturabilir, filtreleyebilir ve oluşturdukları kompozisyonlarla etkileşim kurabilir.",
        tags: [
          "React",
          "JavaScript",
          "Context",
          "Vercel",
          "React Icons",
          "Html",
        ],
        links: {
          git: "https://github.com/BSenaS/proCompsExercise",
          redirect: "https://pro-comps-test-case.vercel.app/",
        },
        image: "/project-img/pro-comps.jpeg",
      },
      project6: {
        title: "Spring Store",
        p1: "Java Spring Boot ve PostgreSQL ile geliştirilmiş basit bir e-ticaret projesinin backend kısmını oluşturan bir REST API'dir. İki temel uç nokta ile farklı uygulamalara hizmet verir.",
        tags: [
          "Java",
          "SpringBoot",
          "PostgreSQL",
          "Jpa",
          "Hibernate",
          "Lombok",
        ],
        links: {
          git: "https://github.com/BSenaS/spring-store/tree/master",
          redirect: "https://github.com/BSenaS/spring-store/tree/master",
        },
        image: "/project-img/java.jpg",
      },
    },
    footer: {
      title: "Bir sonraki ürününüz üzerinde birlikte çalışalım.",
      links: {
        git: "Github",
        blog: "Kişisel Blog",
        linkedin: "Linkedin",
        email: "asilcetinkaya48@gmail.com",
      },
    },
  },
  en: {
    header: {
      darkmode: "DARK MODE",
      lightmode: "LIGHT MODE",
      language: "SWITCH TO",
      languagetxt: " TURKISH",
      skill: "Skills",
      proje: "Projects",
      contact: "Contact!",
    },
    introduction: {
      greeting1: "Hi, I'm ",
      greeting2: "Asilcan Cetinkaya",
      greeting3: "Full Stack Developer",
      greeting4: "Frontend Developer",
      greeting5: "Business Analyst",
      greeting6: "İş Analisti",
      p1: "Hi, I'm Asilcan Çetinkaya. I'm improving myself in the fields of Business Analysis and Project Management by collaborating with stakeholders in the technology sector. I have experience in areas such as mobile application go-live processes and corporate websites. I'm here to provide solutions while bringing your projects to life. You can check out my work below.",
      contact1: "asilcetinkaya48@gmail.com",
      contact2: "https://github.com/Asilcetinkaya",
      contact3: "https://www.linkedin.com/in/asilcetinkaya/",
      iletişim1: "Contact",
      iletişim2: "Github",
      iletişim3: "LinkedIn",
    },
    skills: {
      title: "Skills",
      skillerim: [
        {
          name: "Jira",
          icon: jira,
        },
        {
          name: "Sql",
          icon: sqlServer,
        },
        {
          name: "MS Office",
          icon: office,
        },
        {
          name: "Trello",
          icon: trello,
        },
        {
          name: "Palette",
          icon: palette,
        },
        {
          name: "Miro",
          icon: miro,
        }
      ],
    },
    profile: {
      title: "Profile",
      basicinfo: {
        birthdatekey: "Date of Birth",
        birthdate: "08.01.1998",
        locationkey: "City of Residence",
        location: "Muğla",
        edukey: "Education",
        edu: "Uludag University, Economics Bachelor's Degree, 2021",
        rolekey: "Preferred Role",
        role: "Business Analyst",
      },
      aboutme: {
        title: "About Me",
        p1: "After graduating from university, I started improving myself in the field of technology. I have experience with applications such as Jira, SQL, process management, use case, and Canva.",
        p2: "I am a generally adaptable person and I enjoy being part of a team. In my free time, I like spending time in nature.",
      },
    },

    projects: {
      title: "Projects",
      project1: {
        title: "Unicar Rental App",
        p1: "A mobile application where users can rent vehicles, explore alternative routes, and make discoveries.",
        tags: [
          "UseCase",  
          "SQL",
          "Migration",
          "MS Office",
          "Canva",
          "Miroo",
          "PowerPoint",
          "UML",
          "Security Alternatives",
          "Mock-Up",
          "Data Mining",
        ],
        links: {
          git: "https://github.com/Asilcetinkaya/FmssFinalProject",
          redirect: "https://docs.google.com/presentation/d/186-etqXFi6kBPMhloJIUL1z9hT4iovHK/edit?usp=sharing&ouid=106092499694473798871&rtpof=true&sd=true",
        },
        image: "/project-img/unicar.png",
      },
      project2: {
        title: "Skytex Website",
        p1: "I developed a custom-designed, mobile-friendly, and SEO-optimized corporate website for Skytex specifically tailored to the textile industry. Adopting a user-centric approach, I utilized a powerful CMS like WordPress to create a digital platform that effectively reflects the company's brand identity.",
        tags: [
          "JavaScript",
          "Html",
          "Css",
          "SQL",
          "MS Office",
          "Wordpress",
        ],
        links: {
          git: "https://github.com/Asilcancetinkaya",
          redirect: "https://www.skytextil.com/",
        },
        image: "/project-img/skytex-home.jpeg",
      },
      project3: {
        title: "GreenGo Rental",
        p1:  "In this project, I have created a website design for an exclusive electric vehicle rental service, which is not currently operational in Turkey but has the potential to launch in the future.",
        tags: [
          "MS Office"  ,
          "Critical Path Method"  ,
          "Digital Marketing" , 
          "Brand Image",
          "Adobe XD",
          "Jira",
          "Wordpress"
        ],
        links: {
          git: "https://github.com/Asilcetinkaya",
          redirect: "https://drive.google.com/drive/folders/1sJFSNyMQOU0gfnlp9s1tfn6xfBXXbNf_?usp=sharing",
        },
        image: "/project-img/greengoWe.jpeg",
      },
      project4: {
        title: "Pizza Website",
        p1: "I've developed an interactive web application using Vue.js, TypeScript, Tailwind CSS, and Pinia that allows users to customize and place pizza orders. The application incorporates robust validation mechanisms to prevent user errors and ensure a smooth ordering process.",
        tags: [
          "Vue 3",
          "TypeScript",
          "Tailwind",
          "Vercel",
          "Pinia",
          "Vue-Router",
        ],
        links: {
          git: "https://github.com/BSenaS/pizza-vue",
          redirect: "https://pizza-vue.vercel.app/",
        },
        image: "/project-img/pizza-home.jpeg",
      },
      project5: {
        title: "LoL Comp Builder",
        p1: "I've developed a passion project for League of Legends, one of the most popular online games, that allows users to create, filter, and interact with team compositions.",
        tags: [
          "React",
          "JavaScript",
          "Context",
          "Vercel",
          "React Icons",
          "Html",
        ],
        links: {
          git: "https://github.com/BSenaS/proCompsExercise",
          redirect: "https://pro-comps-test-case.vercel.app/",
        },
        image: "/project-img/pro-comps.jpeg",
      },
      project6: {
        title: "Spring Store",
        p1: "It's a REST API that serves as the backend for a simple e-commerce project developed using Java, Spring Boot, and PostgreSQL. It offers two primary endpoints to cater to various applications.",
        tags: [
          "Java",
          "SpringBoot",
          "PostgreSQL",
          "Jpa",
          "Hibernate",
          "Lombok",
        ],
        links: {
          git: "https://github.com/BSenaS/spring-store/tree/master",
          redirect: "https://github.com/BSenaS/spring-store/tree/master",
        },
        image: "/project-img/java.jpg",
      },
    },
    footer: {
      title: "Let's work together on your next product.",
      links: {
        git: "Github",
        blog: "Personal Blog",
        linkedin: "Linkedin",
        email: "asilcetinkaya48@gmail.com",
      },
    },
  },
};

export default data;
