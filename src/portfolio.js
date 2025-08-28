const header = {
  // all the properties are optional - can be left empty or deleted
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
      'and optimized performance, serving over <strong>100,000 users</strong>, solved security issues detected by Dhaka Bank ' +
      'securities',
    stack: ['Android', 'Kotlin', 'Firebase', 'REST'],
    sourceCode: 'https://play.google.com/store/apps/details?id=com.gplex.dhakabank&hl=en&gl=US',
  },
  {
    name: 'Picky - Online Shopping BD',
    description:
      'Enhanced the design and implementation of an e-commerce app Picky with over <strong>50,000 downloads</strong> and ' +
      'integrated a payment gateway, saving time for 20 Riders',
    stack: ['Flutter', 'Getx', 'REST', 'Firebase', 'ShoreBird'],
    sourceCode: 'https://play.google.com/store/apps/details?id=com.haitsofts.picky&hl=en&gl=US',
    livePreview: 'https://apps.apple.com/us/app/picky-online-shopping-bd/id1613911394',
  },
  {
    name: 'Foxy Pizza',
    description:
      'Pizza Delivery, Takeaway, & Eat in. It is providing all-possible ways of ordering the most delicious pizza in the city.',
    stack: ['Flutter', 'Getx', 'REST', 'Firebase'],
    sourceCode: 'https://play.google.com/store/apps/details?id=com.foxy.user&hl=en&gl=US',
    livePreview: 'https://apps.apple.com/us/app/foxy-pizza/id1660795503',
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
  // email is optional - if left empty Contact section won't show up
  email: 'dev.abdulkayuem@gmail.com',
}

export { header, about, projects, skills, contact,experience }
