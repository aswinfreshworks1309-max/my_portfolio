import ecommerceImg from "./assets/e-commerce.png";
import busTicketImg from "./assets/Bus-ticket.png";
import voiceCommanderImg from "./assets/voice commander.png";
import schoolImg from "./assets/school.png";
import fresworks from './assets/batch_05.jpeg';
import college from './assets/college.png';
import Skills from "./components/Skills";
import uniqueTalks from "./assets/unique_talks.png";
import product from './assets/product.png';
import squad from './assets/squad power presentation.jpg'

export const defaultConfig = {
  hero_name: " I'm Aswin",
  hero_titles: ["Full Stack Developer", "Frontend Enthusiast", "Quick Learner"],
  hero_tagline:
    "Building exceptional digital experiences with modern technologies",
  about_text:
    "I’m Aswin from Thoothukudi. I completed my schooling in Chennai and am currently pursuing Full Stack Web Development at Freshworks STS Software Academy, where I’m building skills in frontend and backend technologies. I’m passionate about creating scalable and user-friendly web applications.",
  contact_email: "aswinrajasekar20@gmail.com",
  contact_phone: "+91         -        74189      95677",
  contact_location: "Chennai, India",
  github_url: "https://github.com/aswinfreshworks1309-max",
  linkedin_url:
    "https://www.linkedin.com/in/aswin-rajasekar-kasi-du-6a1b1a2b1/",
  background_color: "#0a0e27",
  surface_color: "#151a35",
  text_color: "#f0f4f8",
  primary_action: "#00d9ff",
  secondary_action: "#a855f7",
  highlights_text: `Hello, my name is Aswin, and I am originally from Thoothukudi. I completed my schooling at Government Higher Secondary School, Thuraipakkam, Chennai. At present, I am learning Full Stack Web Development at Freshworks STS Software Academy, where I am building strong technical skills in modern web technologies.

Coming to my family background, my father works at an MRF tyre showroom, and my mother is a homemaker. I have one younger brother who is currently studying in the 12th standard at Mary Immaculate Matriculation Higher Secondary School.

During my college years, I received the merit award for two consecutive years, which reflects my dedication and consistent academic performance. However, due to my family situation, I decided to start working after my studies in order to support my family. This experience helped me become more responsible, disciplined, and motivated to build a stable career in the technology field.

Currently, I am fully focused on improving my full-stack development skills and preparing myself for opportunities where I can contribute effectively while continuing to learn and grow.`,
};

export const techStack = [
  {
    name: "HTML",
    icon: '<svg viewBox="0 0 24 24" fill="#e34c26"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>',
    color: "#e34c26",
  },
  {
    name: "CSS",
    icon: '<svg viewBox="0 0 24 24" fill="#1572B6"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm4.75 7.5l.508 5.648h7.488l-.27 2.659-2.488.654-2.488-.654-.164-1.748H6.23l.326 3.471 4.576 1.269 4.575-1.269.616-6.922H6.594l-.246-2.658h9.106l.235-2.602H6.25z"/></svg>',
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    icon: '<svg viewBox="0 0 24 24" fill="#F7DF1E"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>',
    color: "#F7DF1E",
  },
  {
    name: "Python",
    icon: '<svg viewBox="0 0 24 24" fill="#3776AB"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/></svg>',
    color: "#3776AB",
  },
  {
    name: "Express.js",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2"><path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957c-2.667 1.645-6.617.895-8.389-1.787a6.891 6.891 0 01-1.64-4.83zm1.093-.557h10.776c-.05-2.412-1.61-4.485-3.797-4.821-2.539-.39-5.03 1.61-5.682 4.821z" fill="#000000"/></svg>',
    color: "#000000",
  },
  {
    name: "FastAPI",
    icon: '<svg viewBox="0 0 24 24" fill="#009688"><path d="M12 0C5.375 0 0 5.375 0 12c0 6.627 5.375 12 12 12 6.626 0 12-5.373 12-12 0-6.625-5.373-12-12-12zm-.624 21.62v-7.528H7.19L13.203 2.38v7.528h4.029L11.376 21.62z"/></svg>',
    color: "#009688",
  },
  {
    name: "Node.js",
    icon: '<svg viewBox="0 0 24 24" fill="#339933"><path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/></svg>',
    color: "#339933",
  },
  {
    name: "MongoDB",
    icon: '<svg viewBox="0 0 24 24" fill="#47A248"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/></svg>',
    color: "#47A248",
  },
  {
    name: "React",
    icon: '<svg viewBox="0 0 24 24" fill="#61DAFB"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>',
    color: "#61DAFB",
  },

  {
    name: "Tailwind",
    icon: '<svg viewBox="0 0 24 24" fill="#06B6D4"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>',
    color: "#06B6D4",
  },
  {
    name: "Communication",
    icon: '<svg viewBox="0 0 24 24" fill="#6366f1"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>',
    color: "#6366f1",
  },
];

export const heroBackgroundIcons = [
  {
    name: "TypeScript",
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm22.487 18.422c-.171-1.095-.588-2.015-2.026-2.876-.738-.434-1.44-.58-1.71-.808-.52-.405-.45-.767-.034-.995.45-.247 1.25-.138 2.035.435L22.03 12.01c-.5-.347-1.188-.638-2.187-.638-2.316 0-3.34 1.127-3.34 2.76 0 2.217 1.516 3.125 3.328 4.027.64.316 1.455.518 1.637.818.232.38.106.843-.456 1.155-.595.333-1.636.216-2.527-.417l-.82 1.485c.82.686 2.036 1.015 3.163 1.015 2.502 0 3.737-1.118 3.737-2.617-.034-1.176-.757-1.503-1.082-1.682zm-11.233-7.01h-2.164v9.64H11.254v1.89h-6.22v-1.89h2.164V11.412h-2.164V9.522h6.22v1.89z"/></svg>',
    color: "#3178C6",
  },
  {
    name: "Tailwind",
    icon: '<svg viewBox="0 0 24 24" fill="#06B6D4"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>',
    color: "#06B6D4",
  },
  {
    name: "Tailwind",
    icon: '<svg viewBox="0 0 24 24" fill="#06B6D4"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>',
    color: "#06B6D4",
  },
  {
    name: "Tailwind",
    icon: '<svg viewBox="0 0 24 24" fill="#06B6D4"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>',
    color: "#06B6D4",
  },
  {
    name: "TypeScript",
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm22.487 18.422c-.171-1.095-.588-2.015-2.026-2.876-.738-.434-1.44-.58-1.71-.808-.52-.405-.45-.767-.034-.995.45-.247 1.25-.138 2.035.435L22.03 12.01c-.5-.347-1.188-.638-2.187-.638-2.316 0-3.34 1.127-3.34 2.76 0 2.217 1.516 3.125 3.328 4.027.64.316 1.455.518 1.637.818.232.38.106.843-.456 1.155-.595.333-1.636.216-2.527-.417l-.82 1.485c.82.686 2.036 1.015 3.163 1.015 2.502 0 3.737-1.118 3.737-2.617-.034-1.176-.757-1.503-1.082-1.682zm-11.233-7.01h-2.164v9.64H11.254v1.89h-6.22v-1.89h2.164V11.412h-2.164V9.522h6.22v1.89z"/></svg>',
    color: "#3178C6",
  },
  {
    name: "TypeScript",
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm22.487 18.422c-.171-1.095-.588-2.015-2.026-2.876-.738-.434-1.44-.58-1.71-.808-.52-.405-.45-.767-.034-.995.45-.247 1.25-.138 2.035.435L22.03 12.01c-.5-.347-1.188-.638-2.187-.638-2.316 0-3.34 1.127-3.34 2.76 0 2.217 1.516 3.125 3.328 4.027.64.316 1.455.518 1.637.818.232.38.106.843-.456 1.155-.595.333-1.636.216-2.527-.417l-.82 1.485c.82.686 2.036 1.015 3.163 1.015 2.502 0 3.737-1.118 3.737-2.617-.034-1.176-.757-1.503-1.082-1.682zm-11.233-7.01h-2.164v9.64H11.254v1.89h-6.22v-1.89h2.164V11.412h-2.164V9.522h6.22v1.89z"/></svg>',
    color: "#3178C6",
  },

  {
    name: "Angular",
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L1.75 3.63L3.31 16.65L12 21.49L20.69 16.65L22.25 3.63L12 0ZM12 2.4L20.15 5.28L18.75 16.92L12 20.69L5.25 16.92L3.85 5.28L12 2.4ZM12 4.41L6.71 16.27H8.92L10.04 13.52H13.96L15.08 16.27H17.29L12 4.41ZM12 8.78L13.39 12.11H10.61L12 8.78Z"/></svg>',
    color: "#DD0031",
  },
  {
    name: "Angular",
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L1.75 3.63L3.31 16.65L12 21.49L20.69 16.65L22.25 3.63L12 0ZM12 2.4L20.15 5.28L18.75 16.92L12 20.69L5.25 16.92L3.85 5.28L12 2.4ZM12 4.41L6.71 16.27H8.92L10.04 13.52H13.96L15.08 16.27H17.29L12 4.41ZM12 8.78L13.39 12.11H10.61L12 8.78Z"/></svg>',
    color: "#DD0031",
  },
  {
    name: "Angular",
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L1.75 3.63L3.31 16.65L12 21.49L20.69 16.65L22.25 3.63L12 0ZM12 2.4L20.15 5.28L18.75 16.92L12 20.69L5.25 16.92L3.85 5.28L12 2.4ZM12 4.41L6.71 16.27H8.92L10.04 13.52H13.96L15.08 16.27H17.29L12 4.41ZM12 8.78L13.39 12.11H10.61L12 8.78Z"/></svg>',
    color: "#DD0031",
  },
  {
    name: "Angular",
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L1.75 3.63L3.31 16.65L12 21.49L20.69 16.65L22.25 3.63L12 0ZM12 2.4L20.15 5.28L18.75 16.92L12 20.69L5.25 16.92L3.85 5.28L12 2.4ZM12 4.41L6.71 16.27H8.92L10.04 13.52H13.96L15.08 16.27H17.29L12 4.41ZM12 8.78L13.39 12.11H10.61L12 8.78Z"/></svg>',
    color: "#DD0031",
  },
  {
    name: "Angular",
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L1.75 3.63L3.31 16.65L12 21.49L20.69 16.65L22.25 3.63L12 0ZM12 2.4L20.15 5.28L18.75 16.92L12 20.69L5.25 16.92L3.85 5.28L12 2.4ZM12 4.41L6.71 16.27H8.92L10.04 13.52H13.96L15.08 16.27H17.29L12 4.41ZM12 8.78L13.39 12.11H10.61L12 8.78Z"/></svg>',
    color: "#DD0031",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A Static e-commerce webpage with HTML, CSS.",
    tags: ["HTML", "CSS"],
    github: "https://github.com/aswinfreshworks1309-max/E--Commerce.git",
    live: "https://e-commerce-gamma-one-spes3qccin.vercel.app/",
    image: ecommerceImg,
  },
  {
    id: 3,
    title: "Text to Voice convertor",
    description:
      "A mini project of text to voice converter with HTML, CSS, JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/aswinfreshworks1309-max/Voice_Commander.git",
    live: "https://aswinfreshworks1309-max.github.io/Voice_Commander/",
    image: voiceCommanderImg,
  },
  {
    id: 2,
    title: "Bus Ticket Booking Website",
    description:
      "A fullstack website with HTML, CSS, JavaScript, FastAPI,PostgreSQL.",
    tags: ["HTML", "CSS", "JavaScript", "FastAPI", "PostgreSQL"],
    github: "https://github.com/aswinfreshworks1309-max/Full_Stack_Project.git",
    live: "https://locotranz-git-main-aswins-projects-7ca69fa9.vercel.app/",
    image: busTicketImg,
  },
];

export const highlightsData = [
  {
    title: "Freshworks STS Software Academy",
    description:
      "Intensive Full Stack Web Development training at Freshworks STS Software Academy.",
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3l.71-.71z"/></svg>',
    color: "#ef4444",
    image: fresworks,
  },
  {
    title: "Higher Studies",
    description:
      "Awarded Merit Certificates for Second years during my college studies.",
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>',
    color: "#10b981",
    image: college,
  },
  {
    title: "Higher Studies",
    description:
      "Awarded Merit Certificates for First years during my college studies.",
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>',
    color: "#3b82f6",
    image: college,
  },
  {
    title: "Schooling",
    description:
      "Completed secondary education at Government Higher Secondary School, Thuraipakkam.",
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm4 8H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2z"/></svg>',
    color: "#fbbf24",
    image: schoolImg,
  },
];

export const lifeSkills = [
  {
    id: "Project 1",
    name: "Squad power presentation",
    description:
      "The Squad Power presentation was my first stage presentation, and it was the best experience I have gained. This project helped me overcome my stage fear and build confidence while speaking in front of an audience.",
    image: squad,
    Skill: "Confidence",
  },
  {
    id: "Project 2",
    name: "Product Building Challenge",
    description:
      "The product-building challenge required us, as a squad, to create a product from scratch. In this project, I learned how to handle team conflicts effectively. It also helped me improve my collaboration and problem-solving skills. Overall, it was a valuable learning experience.",
    Skill: "Conflict Resolution",
    image: product,
  },
  {
    id: "Project 3",
    name: "Unique Talks",
    description:
      "I did a presentation on the topic of false memory. It was an interesting and informative experience that helped me understand the subject more deeply. It also gave me more confidence while speaking in front of others. Overall, it was very useful for improving my presentation skills.",
    Skill: "Presentation Skills",
    image: uniqueTalks,
  },
];