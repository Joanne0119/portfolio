export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hello I'm Joanne!",
      subtitle: 'A Creative Programmer and Designer',
      cta: 'Get in touch',
    },
    about: {
      title: 'About',
      nameLabel: 'Name:',
      nameValue: 'Joanne (Cheng En, Liu)',
      birthLabel: 'Birth:',
      birthValue: 'January 19, 2004',
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
          name: '**Full-stack Engineering Intern** at Research Center for Information Technology Innovation, Academia Sinica: Developed an **iOS Bluetooth node utility tool** & an **anomaly detection system**',
          date: '2025.04 - 2026.08'
        },
        {
          name: '**Front-end Engineering Intern** at Genibuilder Technology Co., Ltd.: Developed a **cross-platform B2B appointment & AI customer service application**',
          date: '2026.01 - 2026.08'
        },
      ],
      competitionList: [
        '**Winner** of the 2026 **Vision Get Wild Award** for Non-Traditional Games: Developed a multiplayer motion-controlled party game with a "one screen, many phones" experience',
        '**Honorable Mention** in the 2026 **Original X Awards** for Campus: Developed a multiplayer motion-controlled party game with a "one screen, many phones" experience',
        '**Finalist** in the 2024 **MAIC** (Mobile App Innovation Competition): Developed an iOS app that integrates markets across Taiwan',
        '**Best Technical Award** at the 14th **OpenHCI Workshop**: Developed an VR game using Unity',
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
            'A multiplayer motion-controlled party game with a "one screen, many phones" experience — no app to install, no controllers needed. Everyone just scans the QR code on the game screen with their phone and instantly joins the fun. Tilt, tap and swipe your phone to control adorable toy characters in the shared world on screen. Designed for casual gatherings where friends can jump in and play together in seconds.',
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
            'An iOS app that integrates markets across Taiwan. Users can search for markets based on location or category and view detailed information about each market. The app also includes a membership point system to encourage public participation in market culture and incentivize market owners to use the platform.',
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
    },
  },
  zh: {
    nav: {
      home: '首頁',
      about: '關於我',
      projects: '作品',
      contact: '聯絡我',
    },
    hero: {
      greeting: '哈囉！我是 Joanne',
      subtitle: '有創意的工程師 × 設計師',
      cta: '聯絡我',
    },
    about: {
      title: '關於我',
      nameLabel: '姓名：',
      nameValue: 'Joanne (劉丞恩)',
      birthLabel: '生日：',
      birthValue: '2004 年 1 月 19 日',
      description: [
        { text: '我是 Joanne，一位積極主動的' },
        { text: '全端工程師', bold: true },
        { text: '，擅長開發互動式的網頁與行動應用程式。我' },
        { text: '熟悉 JavaScript、React 與 CSS 等前端技術', bold: true },
        { text: '，同時也能整合' },
        { text: '後端系統、IoT 裝置與即時資料流', bold: true },
        { text: '，打造以使用者為核心的實用解決方案。我喜歡把複雜的技術挑戰轉化為兼具功能性與吸引力的作品。' },
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
          name: '中央研究院資訊科技創新研究中心 **全端工程實習生**：開發 **iOS 藍牙節點工具**與**異常偵測系統**',
          date: '2025.04 - 2026.08'
        },
        {
          name: '沛智科技股份有限公司 **前端工程實習生**：開發**跨平台 B2B 預約與 AI 客服應用程式**',
          date: '2026.01 - 2026.08'
        }
      ],
      competitionList: [
        '2026 **放視大賞** 遊戲類 非典型遊戲組 **金獎**：開發用手機作為遙控器的多人派對遊戲',
        '2026 **原創遊戲大賞** 校園組 **佳作**：開發用手機作為遙控器的多人派對遊戲',
        '2024 行動應用創新競賽 (**MAIC**) **決賽入選**：開發整合全台市場的 iOS 應用程式',
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
          role: '負責前端、連線、美術設計',
          description:
            '一款主打「一台電腦、多支手機」的多人派對遊戲：不用下載 App、不需要任何遊戲手把，玩家只要用手機掃描電腦畫面上的 QR Code 就能立刻加入。透過傾斜、點擊與滑動手機，操控畫面上可愛的玩具角色一起同樂。專為朋友聚會設計，幾秒內就能加入房間開玩。',
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
            '一個互動式的 3D 便當客製化網站，使用者可以註冊、瀏覽食材、設計專屬便當，並將自己的作品儲存到帳號中。',
        },
        {
          name: 'Market Duck',
          description:
            '一款整合全台市場的 iOS 應用程式，使用者可以依位置或分類搜尋市場並查看詳細資訊。App 內建會員點數系統，鼓勵民眾參與市場文化，也吸引市場業者加入平台。',
        },
        {
          name: '個人作品集',
          description:
            '一個結合 3D 元素與互動效果的個人作品集網站，呈現我的個人資訊、作品與經歷，展現我的風格、創意與技術能力。',
        },
        {
          name: 'enSPIRE',
          description:
            '一款協助使用者發想新點子的 iOS 應用程式，主要功能是透過 AI 提問幫助使用者激發靈感，並以心智圖呈現。App 也包含腦力激盪聊天室以及作品靈感畫廊。',
        },
      ],
    },
    contact: {
      title: '聯絡我',
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
    },
  },
};

export const defaultLanguage = 'en';
