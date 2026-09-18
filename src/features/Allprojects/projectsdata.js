import Ola from '../../assets/Ola.png';
import Alodo from '../../assets/Alodo.png';
import Campus from '../../assets/Campus.png';
import Eae from '../../assets/EAE.png';
import Wishes from '../../assets/Wishes.png';

export const PROJECTS = [
  {
    id: 'shop',
    title: 'OlaShop E-commerce Platform',
    description:
      'Olashop is an online store. It also features an admin interface that integrates inventory management and digitizes the delivery process for sold items.',
    image: Ola,
    techs: ['Laravel', 'React.js', 'MySQL'],
    demoUrl: 'https://olafrontend.vercel.app/',
  },
  {
    id: 'alodo',
    title: 'Diagnostic System',
    description:
      'A diagnostic system for issues facing Beninese MSMEs that offers support following the analysis and interpretation of the diagnostic results.',
    image: Alodo,
    techs: ['React.js', 'Laravel', 'MySQL'],
    githubUrl: 'https://github.com/ALODO-MPME-CHALLENGE-Mael-GUEDOU/',
  },
  {
    id:'campus',
    title:'CampusConnect',
    description:'CampusConnect is a web platform designed to facilitate communication and activity management within a school at the University of Abomey-Calavi.',
    image:Campus,
    techs: ['Laravel', 'MySQL'],
    githubUrl:'https://github.com/Maelguedou/Projet4'
  },
{
    id:'eae',
    title:'Event After Event',
    description:'Event platform for wedding project management.',
    image:Eae,
    techs: ['Laravel', 'MySQL'],
    githubUrl:'https://github.com/Nounagnon02/build_t_chall'
  },
  {
    id:'wishes',
    title:'Wishes',
    description:'Platform for drafting and sharing greetings.',
    image:Wishes,
    techs: ['Laravel', 'MySQL'],
    githubUrl:'https://github.com/Maelguedou/wishes'
  },
]
