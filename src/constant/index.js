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
        description: 'A music streaming app. User can search songs and add them to playlist. User can also upload their own songs.',    
        github: 'https://github.com/Joanne0119/music-player',
        netlify: 'https://joanne0119.github.io/music-player/index.html',
        texture: '../public/projects/WyanMusicDemo.mp4',
        macbook: true
    },
    {
        id: 2,
        name: 'Market Duck',
        skills: ['SwiftUI', 'Google Maps API'],
        description: 'A music streaming app. User can search songs and add them to playlist. User can also upload their own songs.',    
        github: 'https://github.com/Joanne0119/Market-Duck',
        netlify: 'https://joanne0119.github.io/music-player/index.html',
        texture: '../public/projects/WyanMusicDemo.mp4',
        macbook: false
    },
    {
        id: 3,
        name: 'Porfolio',   
        skills: ['HTML', 'TailwindCSS', 'JavaScript', 'React', 'Three.js'],
        description: 'A music streaming app. User can search songs and add them to playlist. User can also upload their own songs.',    
        github: 'https://github.com/Joanne0119/portfolio',
        netlify: 'https://joanne0119.github.io/music-player/index.html',
        texture: '../public/projects/WyanMusicDemo.mp4',
        macbook: true
    },
    {
        id: 4,
        name: 'enSPIRE',   
        skills: ['SwiftUI'],
        description: 'A music streaming app. User can search songs and add them to playlist. User can also upload their own songs.',    
        github: 'https://github.com/dddCrazy87/enSPIRE',
        netlify: 'https://joanne0119.github.io/music-player/index.html',
        texture: '../public/projects/WyanMusicDemo.mp4',
        macbook: false
    }
  ]

  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      avatarScale: isSmall ? 1.2 : isMobile ? 1.6 : 1.7,
      avatarPosition: isMobile ? [0, -0.8, 0] : [0, -2.3, 0],
      starScale: isSmall ? 0.8 : isMobile ? 0.9 : 1.0,
      hatScale: isSmall ? 3.8 : isMobile ? 4.4 : 4.6,
      diamondScale: isSmall ? 1.6 : isMobile ? 1.8 : 2.0,
      macbookScale: isSmall ? 4 : isMobile ? 7.4 : 7.6,
      cubeScale: isSmall ? 0.3 : isMobile ? 0.5 : 0.8,
      cubePosition: isSmall ? [2.8, -0.5, 0] : isMobile ? [3.6, -1, 0] : isTablet ? [4.6, -2.6, 0] : [4.6, -2.6, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
}