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

  export const aboutSkills = [
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
    }
  ];

  export const aboutEducation = [
    {
      id: 1,
      name: '2019-2022 YMSH'
    },
    {
      id: 2,
      name: '2022-now NTUE DTD'
    }
  ];

  export const aboutExperience = [
    {
      id: 1,
      name: '2024 MAIC'
    },
    {
      id: 2,
      name: '14th OpenHCI'
    }
  ];

  export const projectInfo = [
    {
        id: 1,
        name: 'Wyan Music',
        skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap5', 'Firebase'],
        description: 'An interactive music streaming website where users can register, log in, and receive music recommendations based on their listening habits. The site also allows users to search for music and lets creators upload their own songs, categorize them, and feature them on the homepage to increase visibility.',    
        github: 'https://github.com/Joanne0119/music-player',
        netlify: 'https://joanne0119.github.io/music-player/index.html',
        texture: '/projects/WyanMusicDemo.mp4',
        macbook: true,
        background: 'linear-gradient(to bottom right, white , rgb(203 213 225))'
    },
    {
        id: 2,
        name: 'Market Duck',
        skills: ['SwiftUI', 'Google Maps API'],
        description: 'An iOS app that integrates markets across Taiwan. Users can search for markets based on location or category and view detailed information about each market. The app also includes a membership point system to encourage public participation in market culture and incentivize market owners to use the platform.',    
        github: 'https://github.com/Joanne0119/Market-Duck',
        netlify: 'https://joanne0119.github.io/music-player/index.html',
        texture: '/projects/MarketDuckDemo.mov',
        macbook: false,
        background: 'linear-gradient(to bottom right, white , rgb(255 251 235))'
    },
    {
        id: 3,
        name: 'Porfolio',   
        skills: ['TailwindCSS', 'JavaScript', 'React', 'Three.js', 'Web3Forms'],
        description: 'A portfolio website that showcases my personal information, projects, and experiences, presenting my unique style and personality.',    
        github: 'https://github.com/Joanne0119/portfolio',
        netlify: 'https://joanne0119.github.io/music-player/index.html',
        texture: '/projects/WyanMusicDemo.mp4',
        macbook: true,
        background: 'linear-gradient(to bottom right, white , rgb(186 230 253)'
    },
    {
        id: 4,
        name: 'enSPIRE',   
        skills: ['SwiftUI'],
        description: 'An iOS app that helps users discover new ideas. The main feature involves using AI to ask users questions to help them discover new ideas, presented in the form of mind maps. The app also includes a chatroom feature for brainstorming with others and a gallery where users can upload and view creative works for inspiration.',    
        github: 'https://github.com/dddCrazy87/enSPIRE',
        netlify: 'https://joanne0119.github.io/music-player/index.html',
        texture: '/projects/enSPIREDemo.mov',
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
      macbookScale: isSmall ? 4 : isMobile ? 7 : 7.6,
      phoneScale: isSmall ? 5 : isMobile ? 10 : 12,
      cubeScale: isSmall ? 0.3 : isMobile ? 0.5 : 0.8,
      cubePosition: isSmall ? [2.8, -0.5, 0] : isMobile ? [3.6, -1, 0] : isTablet ? [4.6, -2.6, 0] : [4.6, -2.6, 0],
    }
}