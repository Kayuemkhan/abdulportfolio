const header = {
  homepage: 'https://Kayuemkhan.github.io/abdulportfolio',
  title: 'AK',
}

const about = {
  name: 'Abdul Kayuem',
  role: 'Senior Mobile Engineer',
  description:
    'I’m a mobile engineer with over <strong>5 years</strong> of experience specializing in <strong>Android (Java/Kotlin)</strong> and <strong>Flutter</strong>. ' +
    'I have successfully built and scaled applications in <strong>Banking</strong>, <strong>Fintech</strong>, <strong>POS</strong>, <strong>Telemedicine</strong>, <strong>WebRTC</strong>, and <strong>E-commerce</strong> domains. ' +
    'Notable projects include modernizing the <strong>Dhaka Bank Go</strong> app, developing fintech sales solutions serving <strong>10K+ dealerships</strong>, and leading mobile teams to deliver secure, high-performance applications. ' +
    'I am passionate about creating innovative, impactful software that improves user experience and drives business growth.',
  resume: 'https://drive.google.com/file/d/1AFhcUTvvDGE0UtWJ7K8XIeDWqJXIw_jL/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/abdulkayuem/',
    github: 'https://github.com/Kayuemkhan',
  },
}

const projects = [
  {
    name: 'DBL Go',
    description:
      'Converted the Dhaka Bank Go app from Java to Kotlin, upgraded the UI with the latest architecture, ' +
      'and optimized performance, serving over <strong>100,000 users</strong>, solved security issues detected by Dhaka Bank securities.',
    stack: ['Android', 'Kotlin', 'Firebase', 'REST'],
    sourceCode: 'https://play.google.com/store/apps/details?id=com.gplex.dhakabank&hl=en&gl=US',
  },
  {
    name: 'Picky - Online Shopping BD',
    description:
      'Enhanced the design and implementation of an e-commerce app Picky with over <strong>50,000 downloads</strong> and ' +
      'integrated a payment gateway, saving time for 20 Riders.',
    stack: ['Flutter', 'Getx', 'REST', 'Firebase', 'ShoreBird'],
    sourceCode: 'https://play.google.com/store/apps/details?id=com.haitsofts.picky&hl=en&gl=US',
    livePreview: 'https://apps.apple.com/us/app/picky-online-shopping-bd/id1613911394',
  },
  {
    name: 'Foxy Pizza',
    description:
      'Pizza Delivery, Takeaway, & Eat in. Provides all possible ways of ordering the most delicious pizza in the city.',
    stack: ['Flutter', 'Getx', 'REST', 'Firebase'],
    sourceCode: 'https://play.google.com/store/apps/details?id=com.foxy.user&hl=en&gl=US',
    livePreview: 'https://apps.apple.com/us/app/foxy-pizza/id1660795503',
  },
  {
    name: 'PBX App',
    description:
      'Integrated a real-time chat system and improved VOIP call handling, boosting <strong>daily active users by 25%</strong> in the US. ' +
      'Ensured compliance with <strong>OWASP top 10 security standards</strong>.',
    stack: ['Android', 'Kotlin', 'WebRTC', 'REST', 'Firebase'],
    sourceCode: 'https://play.google.com/store/apps/details?id=com.gtalkpbx&hl=en&gl=US',
  },
  {
    name: 'Partex Cables Sales App',
    description:
      'Developed a fintech mobile sales app serving <strong>10,000+ dealerships</strong>, contributing to over <strong>$1M in revenue growth</strong> ' +
      'within the first year by streamlining order processing and sales tracking.',
    stack: ['Flutter', 'REST', 'Firebase', 'MySQL'],
  },
  {
    name: 'Ajinomoto HRM',
    description:
      'Delivered Android & iOS HRM apps for Ajinomoto Bangladesh, increasing <strong>employee engagement by 50%</strong> within 3 months of launch.',
    stack: ['Flutter', 'REST', 'Firebase'],
  },
  {
    name: 'Freshness Detector',
    description:
      'Open-source project using <strong>TensorFlow Lite</strong> to classify fruits and vegetables as fresh or stale. ' +
      'Currently upgrading with <strong>YOLOv8</strong> on 12,000+ dataset for improved accuracy.',
    stack: ['Android', 'TensorFlow Lite', 'ML Kit', 'Flutter'],
    sourceCode: 'https://github.com/Kayuemkhan/Freshness-Detector',
  },
]


const experience = [

  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  'Java',
  'Kotlin',
  'Dart',
  'SQL',

  'Android',
  'Flutter',
  'Clean Architecture',
  'MVVM',
  'GetX',
  'Provider',

  'REST API',
  'WebRTC',
  'Firebase',

  'Material UI',

  'Machine Learning',
  'ML Kit',
  'TensorFlow',

  'SQLite',
  'MySQL',

  'Git',
  'CI/CD',
  'Fastlane',
  'Gradle',

  'Agile Development',
  'Trello',
]


const contact = {
  email: 'dev.abdulkayuem@gmail.com',
  phone: '+8801684762673',
  linkedin: 'https://www.linkedin.com/in/abdulkayuem/',
  github: 'https://github.com/Kayuemkhan',
  location: 'Dhaka, Bangladesh',
}


export { header, about, projects, skills, contact,experience }
