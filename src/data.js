//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';
import { RiTelegramLine } from "react-icons/ri";
// companies icons
import FreelanceuaBrandIcon from './assets/img/brands/freelance_ua.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/mmx-russia.avif';
import Project2 from './assets/img/projects/meteory_kronshtadt.avif';
import Project3 from './assets/img/projects/kontur-sb.avif';
import Project4 from './assets/img/projects/HTML5_widget.avif';
import Project5 from './assets/img/projects/lithuaniancitizenship.avif';
import Project6 from './assets/img/projects/latviancitizenship.avif';
import Project7 from './assets/img/projects/vivawallet_smartcheckout.avif';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/wordpress.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';
// import SkillImg9 from './assets/img/skills/wordpress.png';
// import SkillImg10 from './assets/img/skills/opencart.png';
// import SkillImg11 from './assets/img/skills/modx.png';
// import SkillImg12 from './assets/img/skills/october.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/taras.avif';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/user.png';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: '',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/supersonic2k22',
  },
  {
    icon: <RiTelegramLine />,
    href: 'https://t.me/supersonic2k22',
  },
];

// companies
export const brands = [
  {
    img: FreelanceuaBrandIcon,
    href: 'https://freelance.ua/user/karbivskij/',
  },
  {
    img: UpworkBrandIcon,
    href: 'https://www.upwork.com/freelancers/~0132cb3713d8da825d',
  },
  {
    img: FiverBrandIcon,
    href: 'https://www.fiverr.com/karbivskyi',
  },
  {
    img: BehanceBrandIcon,
    href: 'https://www.behance.net/krdesigner',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'car rims MMX',
    category: 'web development',
    link: 'https://mmx-russia.ru/',
  },
  {
    id: '2',
    image: Project2,
    name: 'Meteor boat travel',
    category: 'web development',
    link: 'https://ostrovfortov.com/',
  },
  {
    id: '3',
    image: Project3,
    name: 'Kontur-SB security systems',
    category: 'web development',
    link: 'https://kontur-sb.com.ua/',
  },
  {
    id: '4',
    image: Project4,
    name: 'GT group gas prices informer ',
    category: 'html5 banners',
    link: 'https://www.nefterynok.info/#oil-informer',
  },
  {
    id: '5',
    image: Project5,
    name: 'Lithuanian Citizenship',
    category: 'web support',
    link: 'https://lithuaniancitizenship.com',
  },
  {
    id: '6',
    image: Project6,
    name: 'Latvian Citizenship',
    category: 'web support',
    link: 'https://latviancitizenship.eu',
  },  {
    id: '7',
    image: Project7,
    name: 'Viva Wallet Smart Checkout',
    category: 'plugins',
    link: 'https://www.drupal.org/project/commerce_viva',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'web development',
  },
  {
    name: 'web support',
  },
  {
    name: 'html5 banners',
  },
    {
    name: 'plugins',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Support',
    description:
      'Fixing bugs, supporting the project, adding new information and expanding the functionality of existing sites.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Creation of turnkey sites based on your design. Whether the creation of a business card website, landing page, online store in cooperation with a designer or based on a high-quality professional template with customization and information filling.',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'Creating a brand on the Internet, or connecting an existing brand to Internet technologies, creating a design, creating web pages, connecting to CRM',
  },
  {
    icon: <FiTag />,
    name: 'Technical SEO',
    description:
      'Technical seo. Setting up redirects, fixing errors in Google Search Console, adding Schema.org, installing and configuring the sitemap, optimizing page indexing',
  },
];

// const [isReadMoreShown, setReadMoreShown] = useState(false);
// const toggleBtn = () => {
//   setReadMoreShown((prevState) => !prevState);
// };

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'sehr kompetent, super Kommunikation. schnelle 💪💪',
    authorName: 'Taras',
    authorPosition: 'owner of an online toy store, dracheundfee.de',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Roman is very very willing to help, working all night long to solve the problem. This was not easy to fix.',
    authorName: 'Marcel',
    authorPosition: 'musician, piano teacher, www.modern-music.org',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'This guy basically saved my project! The site was down because of the plugin install. Roman basically started the work in min I contacted him privately, where else you could get such service!? For me was left 1h to fix the site before the end of my working week. I am thankful for this help. He identified the problem and fixed my employers site in less than an hour and without losing any data from our internet store. Fast, highly skilled, honest and easy to communicate. If you have a technical problems with your site, store, think no more, hire this guy!',
    authorName: 'Maigurs',
    authorPosition: 'Owner of web studio',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at karbivskij@gmail.com',
    link: "mailto:karbivskij@gmail.com"
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Vinnytsya, Ukraine',
    description: 'Serving clients worldwide',
    link: "https://www.fiverr.com/karbivskyi"
  },
];
