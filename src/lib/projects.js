// lib/projects.js

export const projects = [
    {
      id: 1,
      slug: 'pacific-hurricane-data-extractor',
      title: 'Pacific Hurricane Data Extractor',
      description: 'This project utilizes Large Language Models (LLMs)',
      mainImage: '/images/pacific hurricane.jpg', // NEW: Path to the main project image
      techStack: ['Python', 'HTML', 'LLM', 'LangChain'], // NEW: Tech stack list
      fullDescription: 'This project utilizes Large Language Models (LLMs), web scraping, and vector databases to extract structured information about hurricanes from HTML content.',
      githubLink: 'https://github.com/vigoroth/pacific-hurricane-llm',
    },
    {
      id: 2,
      slug: 'malaria-Cell-Classification-using-CNNs',
      title: 'Malaria Cell Classification using CNNs',
      description: 'Malaria Cell Classification using CNNs',
      mainImage: '/images/malairia.jpg', // NEW: Path to the main project image
      techStack: ['Python', 'MatPlotLib', 'TensorFlow'], // NEW: Tech stack list
      fullDescription: 'This repository contains code to classify malaria-infected cells using Convolutional Neural Networks (CNNs). The dataset used is from TensorFlow Datasets.',
      githubLink: 'https://github.com/vigoroth/Malairia-NN-Dataset',
    },
    {
      id: 3,
      slug: 'basketball-Tracking-and-Dataset-Creation-App',
      title: 'Basketball Tracking and Dataset Creation App',
      description: 'A web application for basketball object detection, tracking, and automated dataset creation using YOLO object detection models. Built with FastAPI (backend) and Streamlit (frontend).',
      mainImage: '/images/basketball.jpg', // NEW: Path to the main project image
      techStack: ['Python', 'Streamlit', 'Ultralytics', 'Numpy','openCV'], // NEW: Tech stack list
      fullDescription: 'This project introduces an end-to-end computer vision pipeline designed to automate the analysis of basketball games, streamlining the entire workflow from raw video to a trainable dataset. At its core, the system leverages state-of-the-art YOLO (You Only Look Once) models for real-time object detection. It is trained to accurately identify and track key basketball elements, including the ball, individual players, and the rim. Crucially, it also detects dynamic game events, such as a successful shot, providing a rich layer of contextual data. A major feature of this project is its ability to move beyond simple detection to automated dataset generation. The system can process raw game footage or images and automatically create high-quality, annotated datasets in the standard YOLO format, eliminating the need for countless hours of manual labeling. To complete the machine learning lifecycle, the pipeline includes a robust dataset management module. Users can define custom splitting ratios to generate finalized datasets, neatly divided into training, validation, and test sets. These datasets are conveniently provided as organized JSON files or as a downloadable ZIP archive, making them immediately ready for use in training new, custom sports analytics models.',
      githubLink: 'https://github.com/vigoroth/basketball_tracking_dataset_app',
    },

            {
      id: 4,
      slug: 'Personal-Portfolio-Website',
      title: 'Personal Portfolio Website',
      description: 'A personal portfolio website showcasing my projects, skills, and experiences. Built with Next.js and Tailwind CSS.',
      mainImage: '/images/profolio.png', // NEW: Path to the main project image
      techStack: ['Python', 'Next.js','HTML','React'], // NEW: Tech stack list
      fullDescription: 'This is my personal portfolio website, built with Next.js and Tailwind CSS. It showcases my projects, skills, and experiences in a modern and responsive design. The website is optimized for performance and SEO, ensuring a great user experience across devices.',
      githubLink: 'https://github.com/vigoroth/my-portfolio',
    },

  ];
