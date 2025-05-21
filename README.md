# **Lingo Bingo** 

## Vocabulary Learning Application

An interactive web app designed to help users improve their vocabulary in a fun and effective way. It offers categorized word lists, pronunciation features, and progress tracking — perfect for students, language learners, or anyone looking to expand their word bank.

---

## **Live Demo**

[Live Demo]()

---

## **Project Features**

- **Firebase Authentication**:  
  Users can log in, register, or use Google Sign-In popUp to access private routes.

- **Dynamic Vocabulary Lessons**:  
  Learn new words through categorized lessons, each with unique vocabulary cards.

- **Speak Up Feature**:  
  Pronounce the vocabulary words for auditory learning.

- **JSON-Driven Content**:  
  Over 150+ vocabulary words structured by difficulty and lessons.

- **Responsive Design**:  
  A fully responsive design optimized for mobile, tablet, and desktop devices.

- **Interactive Success Counters**:  
  Animated counters for user, vocabulary, and lesson statistics.

- **Private Routes**:  
  Secure access to user profile, lessons, and tutorial pages after login.

---

## **Project Structure**

```

lingo-bingo/
├── public/                # Public folder for static assets
│   ├── index.html         # Main HTML file
│   ├── logo.png           # Logo image
│   └── vite.svg           # Vite logo
├── src/                   # Source folder for app components and logic
│   ├── assets/
│   └── react.svg          # React SVG file
│   ├── components/        # Reusable components
│   │   ├── Provider/       # Button-related components
│   │   │   └── Authprovider/ 
|   |   │   └── PrivateRouth/ 
│   │   ├── Banner.jsx
│   │   ├── Error404.jsx
│   │   ├── Footer.jsx
│   │   ├── LessonDetails.jsx
│   │   ├── Modal.jsx
│   │   ├── NavBar.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── data/          # Context API-related files
│   │   └── Vocabulary.json
│   ├── layout/            # Layout components
│   │   ├── MainLayout.jsx e
│   ├── pages/             # Page components
│   │   ├── AboutUs.jsx    # About Us page
│   │   ├── ForgetPassword.jsx      
│   │   ├── MyProfile.jsx  # Profile page
│   │   ├── Home.jsx 
│   │   ├── StartLearning.jsx # Start learning page
│   │   ├── Tutorials.jsx  # Tutorials page
│   │   ├── UpdateProfile.jsx # Profile update page
│   ├── routes/            # Routing 
│   │   └── router.jsx     # Main routing 
│   ├── App.jsx            # Root application component
│   ├── App.css            # Global styles
│   ├── main.jsx           # Entry point for the app
│   └── Firebase.init.js  
│   └── index.css        
├── .firebaserc            # Firebase configuration file
├── .gitignore             # Git ignore file
├── eslint.config.js       # ESLint configuration
├── firebase.json          # Firebase project settings
├── index.html             # Main HTML file for Vite
├── package.json           # Project dependencies and metadata
├── postcss.config.js      # PostCSS configuration
├── README.md              # Documentation for the project
├── tailwind.config.js     # Tailwind CSS configuration
└── vite.config.js         # Vite configuration

---

## **NPM Packages Used**

- **react**: ^18.3.1 - A JavaScript library for building user interfaces.
- **react-dom**: ^18.3.1 - Serves as the entry point to the DOM and server renderers for React.
- **react-router-dom**: ^6.28.0 - DOM bindings for React Router.
- **firebase**: ^11.0.2 - Firebase JavaScript SDK for authentication and database.
- **animate.css**: ^4.1.1 - A library of ready-to-use, cross-browser animations.
- **aos**: ^2.3.4 - Animate on scroll library.
- **react-icons**: ^5.3.0 - Include popular icons in your React projects easily.
- **sort-by**: 
- **vite**: ^5.4.10 - Next generation frontend tooling.
- **daisyui**: ^4.12.24 - Tailwind CSS Components.
- **tailwindcss**: ^3.4.17 - framework.