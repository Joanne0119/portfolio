export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Projects',
      href: '#projects',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];

  export const aboutCode = [
    {
      id: 1,
      name: 'HTML'
    },
    {
      id: 2,
      name: 'CSS'
    },
    {
      id: 3,
      name: 'JavaScript',
    },
    {
      id: 4,
      name: 'SwiftUI',
    },
    {
      id: 5,
      name: 'Python',
    },
    {
      id: 6,
      name: 'C/C++',
    }
  ];

  export const aboutTools = [
    {
      id: 1,
      name: 'React'
    },
    {
      id: 2,
      name: 'GitHub'
    },
    {
      id: 3,
      name: 'Figma',
    },
    {
      id: 4,
      name: 'Blender',
    }
  ];

  export const aboutEducation = [
    {
      id: 1,
      name: 'National Taipei University of Education - Department of Digital Technology Design'
    }
  ];

  export const aboutExperience = [
    {
      id: 1,
      name: 'Finalist in the 2024 MAIC (Mobile App Innovation Competition)'
    },
    {
      id: 2,
      name: 'Best Technical Award at the 14th OpenHCI Workshop'
    },
    {
      id: 3,
      name: 'Served as a course lecturer for the department’s camp'
    },
    {
      id: 4,
      name: 'Held a assistant role in the iOS club'
    }
  ];

  export const projectInfo = [
    {
        id: 1,
        name: 'Wayne Music',
        skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap5', 'Firebase'],
        description: 'An interactive music streaming site where users can register, receive personalized music recommendations, search for songs, and upload their own music. Creators can categorize and feature their tracks on the homepage to increase visibility.',    
        github: 'https://github.com/Joanne0119/music-player',
        netlify: 'https://joanne0119.github.io/music-player/index.html',
        texture: 'https://raw.githubusercontent.com/Joanne0119/portfolio/main/public/projects/WyanMusicDemo.mp4',
        mobileTexture: 'https://raw.githubusercontent.com/Joanne0119/portfolio/main/public/projects/WyanMusicMobile.jpg',
        macbook: true,
        background: 'linear-gradient(to bottom right, white , rgb(203 213 225))'
    },
    {
        id: 2,
        name: 'Market Duck',
        skills: ['SwiftUI', 'Google Maps API'],
        description: 'An iOS app that integrates markets across Taiwan. Users can search for markets based on location or category and view detailed information about each market. The app also includes a membership point system to encourage public participation in market culture and incentivize market owners to use the platform.',    
        github: 'https://github.com/Joanne0119/Market-Duck',
        netlify: 'https://youtu.be/ixhBDF6XOf0',
        texture: 'https://raw.githubusercontent.com/Joanne0119/portfolio/main/public/projects/MarketDuckDemo.mp4',
        mobileTexture: 'https://raw.githubusercontent.com/Joanne0119/portfolio/main/public/projects/MarketDuckMobile.jpg',
        macbook: false,
        background: 'linear-gradient(to bottom right, white , rgb(255 251 235))'
    },
    {
        id: 3,
        name: 'Portfolio',   
        skills: ['TailwindCSS', 'JavaScript', 'React', 'Three.js', 'GSAP'],
        description: 'A portfolio website that highlights my personal information, projects, and experiences through engaging 3D elements and interactive features, reflecting my unique style, creativity, and technical skills.',    
        github: 'https://github.com/Joanne0119/portfolio',
        netlify: 'https://joanne-porfolio.netlify.app/',
        texture: 'https://raw.githubusercontent.com/Joanne0119/portfolio/main/public/projects/PortfolioDemo.mp4',
        mobileTexture: 'https://raw.githubusercontent.com/Joanne0119/portfolio/main/public/projects/PortfolioMobile.jpg',
        macbook: true,
        background: 'linear-gradient(to bottom right, white , rgb(186 230 253)'
    },
    {
        id: 4,
        name: 'enSPIRE',   
        skills: ['SwiftUI'],
        description: 'An iOS app that helps users discover new ideas. The main feature involves using AI to ask users questions to help them discover new ideas, presented in the form of mind maps. The app also includes a chatroom feature for brainstorming with others and a gallery where users can upload and view creative works for inspiration.',    
        github: 'https://github.com/dddCrazy87/enSPIRE',
        netlify: 'https://youtu.be/MRch09O2lKA',
        texture: 'https://raw.githubusercontent.com/Joanne0119/portfolio/main/public/projects/enSPIREDemo.mp4',
        mobileTexture: 'https://raw.githubusercontent.com/Joanne0119/portfolio/main/public/projects/enSPIREMobile.jpg',
        macbook: false,
        background: 'rgb(255 255 255)'
    }
  ]

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
    }
}