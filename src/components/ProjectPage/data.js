export const projectObjOne = {
    id: 'utilities',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    headline: 'Ithaca College Utilities Database System and Google Drive UI',
    description: "Ithaca College Utilities Database System and Google Drive UI is a project that I worked on during my time at Ithaca College. The project was a collaboration between the IT department and the Facilities department. The goal of the project was to create a system that would allow the Facilities department to easily access and update information about the utilities on campus. The system was built using Python and Django, and it included features such as a PDF Scraper, a database of information about each utility, and a user interface for updating the information. The project also included a Google Drive UI that allowed users to access and update documents related to the utilities. The project was a success, and it is still in use by the Facilities department at Ithaca College.",
    challenges: "One of the major challenges in this project was integrating multiple data sources into a single, easily accessible system. The Facilities department relied on a mix of physical documents, PDFs, and scattered digital records, making it difficult to maintain up-to-date and accurate information. Additionally, ensuring that non-technical users could interact with the system without extensive training posed a usability challenge.",
    solutions: "To address these issues, we developed a structured database using Django and SQL, providing a central repository for all utility-related data. A PDF scraper was implemented to extract relevant information from existing documents and integrate it into the system automatically. The Google Drive UI was designed with a focus on simplicity, allowing users to access and update documents with minimal effort. Clear validation mechanisms were also put in place to maintain data consistency and prevent errors.",
    tech: ["Python", "JaveScript", "GoogleScript", "Google Drive", "Django", "SQL"],
    roles: ["Developer", "Designer", "Researcher"],
    tldr: "Developed a system for Ithaca College's Facilities department to manage campus utilities. Features included an PDF scraper, a database, and a Google Drive UI for document access.",
    link: "https://github.com/mjstevens33/Pro-IC-Energy",
    img: require('../../images/img-1.svg'),
    alt: 'Person working on a laptop with graphics behind them',
    dark: false,
    primary: false,
    darkText: true
};

export const projectObjTwo = {
    id: 'tame',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    headline: 'Research Project - Time Assessed Memory Evaluation (TAME)',
    description: 'A research project that I worked on during my time at Ithaca College. The project was headed by the Computer Science department during the Summer Scolar program. The goal of the project was to create a system that would allow researchers to assess time awarness in children ages 8-12 in a more efficient and accurate way. The system was built using GDScript, and it included assessments that tested Prospective Memory Processing, Retrospective Time Evaluation, And More. The project was a success, and it is still in use by researchers at Ithaca College.',
    challenges: "Developing an assessment system for measuring time awareness in children required balancing scientific accuracy with an engaging experience. One of the key challenges was designing tests that effectively measured cognitive processes like Prospective Memory Processing and Retrospective Time Evaluation without making them feel tedious or repetitive. Additionally, collecting and analyzing real-time data efficiently while ensuring accurate results for researchers posed a technical hurdle.",
    solutions: "To solve these issues, we leveraged GDScript to build interactive, game-like assessments that kept children engaged while still producing reliable data. Each test was carefully designed based on cognitive science research to measure specific aspects of time awareness. A real-time data logging system was implemented to capture responses accurately, and a user-friendly researcher dashboard was developed to facilitate analysis. These solutions ensured both usability for participants and robust data collection for researchers.",
    tech: ["GDScript", "Figma"],
    roles: ["Developer", "Designer", "Researcher"],
    tldr: "Developed a GDScript-based system for Ithaca College’s reaserch program to assess time blindness in children. Included tests for Prospective Memory Processing, Retrospective Time Evaluation, and more.",
    link: "https://github.com/kaidenhj/Summer2024MiniGames",
    img: require('../../images/tame-img.png'),
    alt: 'People sitting on text boxes',
    dark: false,
    primary: false,
    darkText: true
};

export const projectObjThree = {
    id: 'satellite',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    headline: 'Tracking Suburban Habitat Loss: An ML Approach to Satellite Image Analysis',
    description: "A research project that I worked on during my time at Ithaca College. The project was imagined during the last semester of college carrer. The goal of the project was to create a system that would allow researchers to track suburban habitat loss in the suburban development areas. The system was built using Python and TensorFlow, and the SAM (Segment Anything Model) by Meta and it included features such as a database of satellite images of the area, a machine learning model for analyzing the images, and a saletite image scraper that pulls satalite images over any area and time.",
    challenges: "The primary challenge in this project was acquiring and processing large-scale satellite imagery in a way that allowed for accurate habitat loss detection. High-resolution images often contained noise and irrelevant details, making it difficult for a machine learning model to isolate meaningful environmental changes. Additionally, automating the retrieval of satellite images over time required integrating multiple data sources and handling large datasets efficiently.",
    solutions: "To tackle these challenges, we developed a Python-based satellite image scraper that could collect images from various sources and organize them into a structured database. We then fine-tuned a machine learning model using TensorFlow and Meta’s SAM (Segment Anything Model) to improve accuracy in detecting land-use changes. An automated pipeline was implemented to continuously retrieve, process, and analyze new satellite images over time, enabling researchers to track suburban habitat loss with greater precision and efficiency.",
    tech: ["Python", "JaveScript", "GoogleScript", "Google Drive"],
    roles: ["Developer", "Designer", "Researcher"],
    tldr: "Developed a Python and TensorFlow-based system using Meta's SAM model to track suburban habitat loss. Included a ML model for analysis and an automated scraper for retrieving satellite images over time.",
    link: "https://github.com/kaidenhj/ml_satilite_image_final",
    img: require('../../images/sam-img.png'),
    alt: 'People sitting on text boxes',
    dark: false,
    primary: false,
    darkText: true
};