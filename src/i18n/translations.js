export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hello, I'm Joanne!",
      subtitle: 'A Creative Programmer and Designer',
      cta: 'Get in touch',
    },
    about: {
      title: 'About',
      nameLabel: 'Name:',
      nameValue: 'Joanne (Cheng En, Liu)',
      description: [
        { text: 'I am Joanne, a proactive ' },
        { text: 'full-stack developer', bold: true },
        { text: ' experienced in building interactive web and mobile applications. ' },
        { text: 'Skilled in front-end technologies like JavaScript, React, and CSS', bold: true },
        { text: ', I also integrate ' },
        { text: 'back-end systems, IoT devices, and real-time data flows', bold: true },
        { text: ' to create practical, user-centered solutions. I enjoy turning complex technical challenges into functional and engaging applications.' },
      ],
      skills: 'Skills',
      programmingLanguages: 'Programming Languages',
      frameworksAndTools: 'Frameworks & Tools',
      education: 'Education',
      workExperience: 'Work Experience',
      competitionExperience: 'Competition Experience',
      code: ['HTML', 'CSS', 'JavaScript', 'Swift/SwiftUI', 'Python', 'C/C++', 'C#'],
      tools: ['React', 'Vite', 'TailwindCSS', 'Framer Motion', 'Unity', 'WebSocket / WebRTC', 'GitHub'],
      educationList: [
        { name: 'National Taipei University of Education - Department of Digital Technology Design', degree: 'Bachelor', date: '2022.09 - 2026.06' },
        { name: 'National Sun Yat-sen University - Department of Computer Science and Engineering', degree: 'Master', date: '2026.09 - Present' },
      ],
      workList: [
        {
          name: '**Research Assistant** at Research Center for Information Technology Innovation, Academia Sinica: Developed an **iOS Bluetooth node utility tool** & an **anomaly detection system**',
          date: '2025.04 - Present'
        },
        {
          name: '**Front-end Engineering Intern** at Genibuilder Technology Co., Ltd.: Developed a **cross-platform B2B appointment & AI customer service application**',
          date: '2026.01 - 2026.08'
        },
      ],
      competitionList: [
        '**Winner** of the 2026 **Vision Get Wild Award** for Non-Traditional Games: Developed a multiplayer motion-controlled party game with a "one screen, many phones" experience',
        '**Honorable Mention** in the 2026 **Original X Awards** for Campus: Developed a multiplayer motion-controlled party game with a "one screen, many phones" experience',
        '**Finalist** in the 2024 **MAIC** (Mobile App Innovation Competition): Developed an iOS app that brings together markets across Taiwan',
        '**Best Technical Award** at the 14th **OpenHCI Workshop**: Developed a VR game using Unity',
      ],
    },
    projects: {
      title: 'Projects',
      viewProject: 'View Project',
      viewDemo: 'View Demo',
      list: [
        {
          name: "Toys Don't Move Right",
          role: 'Frontend · Networking · Art Direction',
          description:
            'A "one screen, many phones" multiplayer party game. No app downloads or controllers needed: players scan the QR code on the big screen, and their phone becomes the controller. Tilt, tap and swipe to move quirky toy characters around a shared world. Built for get-togethers, so anyone can join a round in seconds.',
        },
        {
          name: 'Smart Meal Locker System',
          role: 'Full-stack Software Development',
          description:
            'A smart meal-pickup locker system integrating LINE Bot with IoT cabinets. Users upload their order screenshot to the LINE Bot; Gemini OCR reads the receipt to auto-assign a locker and generate a verification code. MQTT drives real-time cabinet control (unlock, capture, status), with LINE push notifications on timeout or anomaly.',
        },
        {
          name: 'Hewei Box',
          description:
            'An interactive 3D bento customization website where users can register, browse ingredients, design, and customize their own 3D bento, and save their unique bento creations to their account.',
        },
        {
          name: 'Market Duck',
          description:
            'An iOS app that brings together markets across Taiwan. Users can search for markets based on location or category and view detailed information about each market. The app also includes a membership point system to encourage public participation in market culture and incentivize market owners to use the platform.',
        },
        {
          name: 'Portfolio',
          description:
            'A portfolio website that highlights my personal information, projects, and experiences through engaging 3D elements and interactive features, reflecting my unique style, creativity, and technical skills.',
        },
        {
          name: 'enSPIRE',
          description:
            'An iOS app that helps users discover new ideas. The main feature involves using AI to ask users questions to help them discover new ideas, presented in the form of mind maps. The app also includes a chatroom feature for brainstorming with others and a gallery where users can upload and view creative works for inspiration.',
        },
      ],
    },
    contact: {
      title: 'Contact',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Submit',
      submitting: 'Submitting...',
      success: 'Success! Message sent successfully',
      error: 'Something went wrong. Please try later.',
    },
    footer: {
      copyright: '© 2026 Designed by Joanne Liu',
    },
    language: {
      toggle: '繁',
      ariaLabel: 'Switch to Traditional Chinese',
    },
    preloader: {
      loading: 'Loading...',
      ready: 'All set!',
      enter: 'Enter site',
    },
  },
  zh: {
    nav: {
      home: '首頁',
      about: '關於我',
      projects: '作品',
      contact: '聯絡方式',
    },
    hero: {
      greeting: '哈囉！我是 Joanne',
      subtitle: '工程師 × 設計師',
      cta: '聯絡我',
    },
    about: {
      title: '關於我',
      nameLabel: '姓名：',
      nameValue: 'Joanne (劉丞恩)',
      description: [
        { text: '我是 Joanne，一名' },
        { text: '全端工程師', bold: true },
        { text: '，專長是開發互動式網頁與行動 App。前端以 ' },
        { text: 'JavaScript、React 與 CSS', bold: true },
        { text: ' 為主，也能串接' },
        { text: '後端系統、IoT 裝置與即時資料', bold: true },
        { text: '，做出真正好用的產品。我喜歡把複雜的技術問題，變成好用又好玩的作品。' },
      ],
      skills: '技能',
      programmingLanguages: '程式語言',
      frameworksAndTools: '框架與工具',
      education: '學歷',
      workExperience: '工作經歷',
      competitionExperience: '比賽經歷',
      code: ['HTML', 'CSS', 'JavaScript', 'Swift / SwiftUI', 'Python', 'C / C++', 'C#'],
      tools: ['React', 'Vite', 'TailwindCSS', 'Framer Motion', 'Unity', 'WebSocket / WebRTC', 'GitHub'],
      educationList: [
        { name: '國立臺北教育大學 - 數位科技設計學系', degree: '學士', date: '2022.09 - 2026.06' },
        { name: '國立中山大學 - 資訊工程學系', degree: '碩士', date: '2026.09 - 至今' },
      ],
      workList: [
        {
          name: '中央研究院資訊科技創新研究中心 **研究助理**：開發 **iOS 藍牙節點工具**與**異常偵測系統**',
          date: '2025.04 - 至今'
        },
        {
          name: '沛智科技股份有限公司 **前端工程實習生**：開發**跨平台 B2B 預約與 AI 客服應用程式**',
          date: '2026.01 - 2026.08'
        }
      ],
      competitionList: [
        '2026 **放視大賞** 遊戲類 非典型遊戲組 **金獎**：以手機當遙控器的多人派對遊戲',
        '2026 **原創遊戲大賞** 校園組 **佳作**：以手機當遙控器的多人派對遊戲',
        '2024 行動應用創新競賽 (**MAIC**) **決賽入選**：整合全台市集資訊的 iOS App',
        '第 14 屆 **OpenHCI 工作坊** **最佳技術獎**：以 Unity 開發 VR 遊戲',
      ],
    },
    projects: {
      title: '作品',
      viewProject: '前往網站',
      viewDemo: '觀看展示',
      list: [
        {
          name: '不會動的玩具才正常吧',
          role: '前端・連線・美術',
          description:
            '「一個螢幕、多支手機」的多人派對遊戲。不用下載 App，也不用手把，掃描畫面上的 QR Code 就能加入。傾斜、點擊、滑動手機，操控畫面裡的玩具角色和朋友一起玩。適合聚會時拿出來，幾秒就能開局。',
        },
        {
          name: '智慧取餐櫃系統',
          role: '負責全端軟體系統開發',
          description:
            '整合 LINE Bot 與智慧櫃體的取餐系統：使用者上傳訂單截圖，Gemini OCR 辨識後自動分配櫃位並產生驗證碼，MQTT 即時控制櫃體開關、拍照與狀態回報，逾時或異常由 LINE 主動推播通知。',
        },
        {
          name: '盒味盒子',
          description:
            '互動式 3D 便當客製化網站。註冊後可以瀏覽食材、組出專屬便當，並把作品存到自己的帳號。',
        },
        {
          name: 'Market Duck',
          description:
            '整合全台市集資訊的 iOS App，可以依地點或類別搜尋市集、查看詳細資訊。內建會員點數機制，鼓勵大家逛市集，也吸引市集主辦單位加入平台。',
        },
        {
          name: '個人作品集',
          description:
            '用 3D 元素和互動效果打造的個人作品集，介紹我的經歷與作品，也展現我的設計風格與技術。',
        },
        {
          name: 'enSPIRE',
          description:
            '幫助發想點子的 iOS App。AI 會一步步提問，引導你找到靈感，並整理成心智圖。另外還有一起腦力激盪的聊天室，以及分享創作的靈感畫廊。',
        },
      ],
    },
    contact: {
      title: '聯絡方式',
      name: '姓名',
      email: '電子郵件',
      message: '訊息',
      submit: '送出',
      submitting: '送出中…',
      success: '已成功送出訊息！',
      error: '發生錯誤，請稍後再試。',
    },
    footer: {
      copyright: '© 2026 由 Joanne Liu 設計',
    },
    language: {
      toggle: 'EN',
      ariaLabel: '切換為英文',
    },
    preloader: {
      loading: '載入中…',
      ready: '載入完成！',
      enter: '進入網站',
    },
  },
};

export const defaultLanguage = 'en';
