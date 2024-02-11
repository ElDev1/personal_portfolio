import {
  SiCss3,
  SiNodedotjs,
  SiMongodb,
  SiReact,
  SiStyledcomponents,
  SiSass,
  SiJavascript,
  SiHtml5,
  SiRedux,
  SiCoinmarketcap,
  SiReactrouter,
  SiTailwindcss,
  SiFirebase,
  SiBootstrap,
  SiChakraui,
  SiSolidity,
  SiTypescript,
  SiPrisma
} from 'react-icons/si'
import { FaWpforms, FaHardHat } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'

export const projectIcon = (technology) => {
  switch (technology.toLowerCase()) {
    case 'mongodb':
      return <SiMongodb size={20} />
    case 'css':
      return <SiCss3 size={20} />
    case 'express':
      return <SiNodedotjs size={20} />
    case 'nodejs':
      return <SiNodedotjs size={20} />
    case 'react':
      return <SiReact size={20} />
    case 'nextjs':
      return <TbBrandNextjs size={20} />
    case 'styled components':
      return <SiStyledcomponents size={20} />
    case 'vanilla js':
      return <SiJavascript size={20} />
    case 'html':
      return <SiHtml5 size={20} />
    case 'scss':
      return <SiSass size={20} />
    case 'redux':
      return <SiRedux size={20} />
    case 'material ui':
      return <SiCoinmarketcap size={20} />
    case 'react router':
      return <SiReactrouter size={20} />
    case 'formik':
      return <FaWpforms size={20} />
    case 'tailwind':
      return <SiTailwindcss size={20} />
    case 'firebase':
      return <SiFirebase size={20} />
    case 'bootstrap':
      return <SiBootstrap size={20} />
    case 'chakra ui':
      return <SiChakraui size={20} />
    case 'solidity':
      return <SiSolidity size={20} />
    case 'typescript':
      return <SiTypescript size={20} />
    case 'hardhat':
      return <FaHardHat size={20} />
    case 'prisma':
      return <SiPrisma size={20} />
    default:
      return ''
  }
}
