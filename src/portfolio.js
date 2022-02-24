const header = {
  //add favicon V
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Vivek Kumar",
  role: "Full Stack Web Developer",
  description:
    "Full-Stack Web Developer with an ability to learn and collaborate in rapidly changing environments and compositions. Worked through 6 months of intensive Bootcamp structure and learned MERN tech stack. Eager to learn new technologies and tackle new web development challenges.",
  resume:
    "https://drive.google.com/file/d/1PZ7mkJIwIA-nOHyc48ADNgoMUUo_1Wgw/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/vivek-kumar-56a0a81a6/",
    github: "https://github.com/Vivek14kr",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Clone of Lakme",
    image: "/lakme.png",
    description:
      "An e-commerce website to buy cosmetics at affordable prices. This is a clone of the Lakme website. The clone is complete with a Login page, Sign-in page, Shopping Cart, Wishlist and Sorting feature. ",
    stack: ["HTML", "CSS", "Javascript", "Localstorage"],
    sourceCode: "https://github.com/nkil123/lakme_clone",
    livePreview: "https://lakme-clone.vercel.app/",
  },
  {
    name: "Clone of Porter",
    image: "/porter.png",
    description:
      "A website to Book mini-trucks and intra city logistics. Built the Backend and frontend of porter.in using ejs CSS,Javascript, express js, node js and mongoo db. Major pages include home page, packers and movers page , For Enterprice page , Driver Partners page",
    stack: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "EJS",
      "Expressjs",
      "Nodejs",
      "MongoDB",
    ],
    sourceCode:
      "https://github.com/avinashpanchal123/porterClone_Backend/tree/main/constructweek_porter_clone-main",
    livePreview: "https://porterclone.herokuapp.com/",
  },
  {
    name: "Clone of NordStorm",
    image: "/k.png",
    description: "An E-commerce application to shop all apparels",
    stack: ["React", "Redux", "Expressjs", "Nodejs", "MongoDB"],
    sourceCode: "https://github.com/taherahmed14/nordstrom-clone/",
    livePreview: "",
  },
];

const frontskills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up

  //{
  {
    image:
      "https://cdn0.iconfinder.com/data/icons/social-network-7/50/22-512.png",
    skillname: "HTML",
  },
  {
    image: "https://portfolio-vinayak-pk.vercel.app/svg/css3.svg",
    skillname: "CSS",
  },
  {
    image: "https://portfolio-vinayak-pk.vercel.app/svg/javascript.svg",
    skillname: "JS",
  },
  {
    image: "https://portfolio-vinayak-pk.vercel.app/svg/react.svg",
    skillname: "REACT",
  },
  {
    image: "https://portfolio-vinayak-pk.vercel.app/svg/redux.svg",
    skillname: "REDUX",
  },
 
  // 'HTML',
  // 'CSS',
  // 'JavaScript',

  // 'React',
  // 'Redux',

  // 'Material UI',
  // 'Git',
  // 'MongoDB',
  // 'Node',
  // 'Express'
];


const backskills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up

  //{

  {
    image: "https://portfolio-vinayak-pk.vercel.app/svg/nodejs.svg",
    skillname: "NODE.js",
  },
  {
    image: "https://portfolio-vinayak-pk.vercel.app/svg/exp.png",
    skillname: "EXPRESS",
  },
  {
    image: "https://portfolio-vinayak-pk.vercel.app/svg/mongodb.svg",
    skillname: "MongoDB",
  },
  {
    image: "https://portfolio-vinayak-pk.vercel.app/svg/heroku.svg",
    skillname: "Heroku",
  },
  {
    image: "https://portfolio-vinayak-pk.vercel.app/svg/git-icon.svg",
    skillname: "GIT",
  },

  // 'HTML',
  // 'CSS',
  // 'JavaScript',

  // 'React',
  // 'Redux',

  // 'Material UI',
  // 'Git',
  // 'MongoDB',
  // 'Node',
  // 'Express'
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "vivekkumarvky13@gmail.com",
};

export { header, about, projects, frontskills, backskills, contact };
