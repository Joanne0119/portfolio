export const navLinks = [
    { id: 1, key: 'home', href: '#home' },
    { id: 2, key: 'about', href: '#about' },
    { id: 3, key: 'projects', href: '#projects' },
    { id: 4, key: 'contact', href: '#contact' },
];

export const projectInfo = [
    {
        id: 1,
        skills: ['Unity 6', 'C#', 'React', 'Vite', 'Framer Motion', 'WebSocket', 'WebRTC'],
        github: 'https://github.com/Lets-Jamm',
        netlify: 'https://toys-dont-move-right.vercel.app/',
        videoDemo: 'https://youtu.be/ji9oFNMD3R4?si=iK08s7kwGFNCzm9N',
        texture: '/projects/toyDemo.mp4',
        mobileTexture: '/projects/toyMobile.png',
        phoneTexture: '/projects/toyPhoneDemo.mp4',
        phoneMobileTexture: '/projects/toyPhoneMobile.jpg',
        displayType: 'both',
        background: 'linear-gradient(to bottom right, white, rgb(254 226 226))'
    },
    {
        id: 2,
        skills: ['JavaScript', 'TailwindCSS', 'React', 'motion', 'Redux', 'Firebase'],
        github: 'https://github.com/Joanne0119/lunch_box',
        netlify: 'https://heweibox.vercel.app/',
        texture: 'https://raw.githubusercontent.com/Joanne0119/portfolio/main/public/projects/heweiDemo.mp4',
        mobileTexture: 'https://raw.githubusercontent.com/Joanne0119/portfolio/main/public/projects/heweiDemoMobile.jpg',
        displayType: 'macbook',
        background: 'linear-gradient(to bottom right, white , rgb(252 243 235)'
    },
    {
        id: 3,
        skills: ['SwiftUI', 'Google Maps API'],
        github: 'https://github.com/Joanne0119/Market-Duck',
        netlify: 'https://youtu.be/ixhBDF6XOf0',
        texture: 'https://raw.githubusercontent.com/Joanne0119/portfolio/main/public/projects/MarketDuckDemo.mp4',
        mobileTexture: 'https://raw.githubusercontent.com/Joanne0119/portfolio/main/public/projects/MarketDuckMobile.jpg',
        displayType: 'phone',
        background: 'linear-gradient(to bottom right, white , rgb(255 251 235))'
    },
    {
        id: 4,
        skills: ['TailwindCSS', 'JavaScript', 'React', 'Three.js', 'GSAP'],
        github: 'https://github.com/Joanne0119/portfolio',
        netlify: 'https://joanne-porfolio.netlify.app/',
        texture: 'https://raw.githubusercontent.com/Joanne0119/portfolio/main/public/projects/PortfolioDemo.mp4',
        mobileTexture: 'https://raw.githubusercontent.com/Joanne0119/portfolio/main/public/projects/PortfolioMobile.jpg',
        displayType: 'macbook',
        background: 'linear-gradient(to bottom right, white , rgb(186 230 253)'
    },
    {
        id: 5,
        skills: ['SwiftUI', 'ChatGPT API'],
        github: 'https://github.com/dddCrazy87/enSPIRE',
        netlify: 'https://youtu.be/MRch09O2lKA',
        texture: 'https://raw.githubusercontent.com/Joanne0119/portfolio/main/public/projects/enSPIREDemo.mp4',
        mobileTexture: 'https://raw.githubusercontent.com/Joanne0119/portfolio/main/public/projects/enSPIREMobile.jpg',
        displayType: 'phone',
        background: 'rgb(255 255 255)'
    }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      avatarScale: isSmall ? 1.2 : isMobile ? 1.5 : 1.7,
      avatarPosition: isMobile ? [0, 2, 0] : [0, -2, 0],
      hiAvatarScale: isSmall ? 2.3 : isMobile ? 2.6 : 2.8,
      hiAvatarPosition: isMobile ? [0, -0.8, 0] : [0, -2.3, 0],
      starScale: isSmall ? 0.8 : isMobile ? 0.9 : 1.0,
      hatScale: isSmall ? 3.8 : isMobile ? 4.4 : 4.6,
      diamondScale: isSmall ? 1.6 : isMobile ? 1.8 : 2.0,
      macbookScale: isSmall ? 4.8 : isMobile ? 6.2 : 7.2,
      phoneScale: isSmall ? 8 : isMobile ? 10 : 12,
      macbookScaleBoth: isSmall ? 4.2 : isMobile ? 5.4 : 6.2,
      phoneScaleBoth: isSmall ? 6.2 : isMobile ? 7.8 : 9.2,
    }
}
