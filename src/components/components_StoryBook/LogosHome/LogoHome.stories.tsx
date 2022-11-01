import logoHomeWhite from '../../../assets/LogoHome_white.svg';
import logoHomeBlack from '../../../assets/LogoHome_black.svg';
import logoHomeBlue from '../../../assets/LogoHome_blue.svg';
import logosHome from '../../../assets/Logos.svg';

export default {
  title: 'Logos/Imagens',
};

const image = {
  src: {
    logoHomeWhite,
    logoHomeBlack,
    logoHomeBlue,
    logosHome,
},
  alt: {
    logoHomeWhite: 'Logo Home White',
    logoHomeBlack: 'Logo Home Black',
    logoHomeBlue: 'Logo Home Blue',
    logosHome: 'Logos Home',
},  
};

export const LogoHome = () => <img src={image.src.logosHome} alt={image.alt.logosHome} />;

export const LogoHomeWhite = () => <img src={image.src.logoHomeWhite} alt={image.alt.logoHomeWhite} />;

export const LogoHomeBlack = () => <img src={image.src.logoHomeBlack} alt={image.alt.logoHomeBlack} />;

export const LogoHomeBlue = () => <img src={image.src.logoHomeBlue} alt={image.alt.logoHomeBlue} />;

