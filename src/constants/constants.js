export const projects = [
  {
    title: "Health Intent Classification with Speech Recognition",
    description:
      "An experiment intended to create a model that could recognize what symptoms we had, using a speech recognition model to convert speech to text",
    image: "/images/Projects/0.png",
    play: "https://github.com/fbrynpk/HealthIntentClassification",
    tags: ["Python", "PyTorch", "NLTK"],
    source:
      "https://www.kaggle.com/datasets/paultimothymooney/medical-speech-transcription-and-intent",
    visit: "https://github.com/fbrynpk/HealthIntentClassification",
    id: 0
  },
  {
    title: "ViT: Vision Transformer for Early Dementia Detection",
    description:
      "An attempt to manually create a Vision-Transformer model from scratch, this model is based on the paper An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale, in this attempt I recreated the ViT-B/16 model.",
    image: "/images/Projects/6.png",
    play: "https://github.com/fbrynpk/ViT-Dementia",
    tags: ["Python", "PyTorch"],
    source: "https://arxiv.org/pdf/2010.11929.pdf",
    visit: "https://github.com/fbrynpk/ViT-Dementia",
    id: 1
  },
  {
    title: "FoodVision",
    description:
      "Used transfer learning method creating a custom Vision-Transformer model that could detect a specific food classes, this model is trained using 20% dataset from PyTorch Food101 dataset, and the model is hosted on HuggingFace Spaces",
    image: "/images/Projects/2.png",
    play: "https://huggingface.co/spaces/fbrynpk/FoodVision",
    tags: ["Python", "PyTorch", "HuggingFace"],
    source: "",
    visit: "https://huggingface.co/spaces/fbrynpk/FoodVision/tree/main",
    id: 2
  },
  {
    title: "Pneumonia Detection",
    description:
      "The purpose of this project is to compare models between TinyVGG and EfficientNetB0 on which model is better to detect Pneumonia from X-Ray images",
    image: "/images/Projects/7.png",
    play: "https://huggingface.co/spaces/fbrynpk/Covid-19-Detection",
    tags: ["Python", "PyTorch", "Transfer Learning"],
    source: "https://poloclub.github.io/cnn-explainer/",
    visit: "https://github.com/fbrynpk/Covid19-Prediction",
    id: 3
  },
  {
    title: "Image Caption Generator (Bachelor's Thesis)",
    description:
      "Created an image to caption generator with Transfer Learning and Deep Learning from an Inception V3 model combined into a transformer encoder and decoder model",
    image: "/images/Projects/5.jpg",
    play: "https://huggingface.co/spaces/fbrynpk/image-caption-generator",
    tags: ["Python", "Deep Learning", "Transfer Learning", "Tensorflow"],
    source:
      "https://keras.io/examples/vision/image_captioning/#image-captioning",
    visit: "https://github.com/fbrynpk/Image-Caption-Generator",
    id: 4
  },
  {
    title: "Emotion Recognition",
    description:
      "First project that is related to data science and machine learning, creating a CNN and training it to be able to accurately detect emotions including Happy, Sad, Angry, Scared, and Shocked",
    image: "/images/Projects/1.jpg",
    play: "https://github.com/fbrynpk/RealTimeEmotionRecognition",
    tags: ["Python", "Tensorflow"],
    source: "https://google.com",
    visit: "https://github.com/fbrynpk/RealTimeEmotionRecognition",
    id: 5
  },
  {
    title: '"Crinema" Online Movie Rating System',
    description:
      "An experiment to create a functional rating system based on movies, the reason for this project is for movie lovers who at times have troubles to watch good movies, and this system will create a trust-worthy rating system that every movie lovers can rate and view regarding what movies they might find themselves suitable with",
    image: "/images/Projects/3.png",
    play: "https://github.com/fbrynpk/web-programming-final",
    tags: ["HTML", "CSS", "JavaScript", "Git", "Firebase"],
    source: "https://google.com",
    visit: "https://github.com/fbrynpk/web-programming-final",
    id: 7
  },
  {
    title: "Minesweeper",
    description:
      "An old school windows game when the internet was not a thing, this game keeps lots of people company when they are bored!",
    image: "/images/Projects/4.jpg",
    play: "https://minesweeper-ts.vercel.app/",
    tags: ["React", "SCSS", "TypeScript"],
    source:
      "https://www.youtube.com/watch?v=hg41egLtM9o&t=5s&ab_channel=JustinKim",
    visit: "https://github.com/fbrynpk/minesweeper-ts",
    id: 6
  }
];

export const TimeLineData = [
  {
    year: 2018,
    text: "Started learning python, data structures and algorithm"
  },
  {
    year: 2019,
    text: "Got introduced into machine learning and it's applications"
  },
  {
    year: 2020,
    text: "Created first ever CNN model for facial emotion recognition"
  },
  {
    year: 2021,
    text: "Dived deeper to understand more about neural networks, deep learning and theories behind state-of-the-art models"
  },
  {
    year: 2022,
    text: "Experimented with Transformer models to generate captions based on a given image (Bachelor's thesis)"
  },
  {
    year: 2023,
    text: "Conducted some experiments with speech recognition and NLP to help with early detection for medical disorders"
  }
];

export const data = [
  { image: "/images/Awards/award2.png", text: "Dean's List Award - Fall 2019" },
  {
    image: "/images/Awards/award.jpg",
    text: "Dean's List Award - Spring 2020"
  },
  { image: "/images/Awards/award4.png", text: "Dean's List Award - Fall 2020" },
  {
    image: "/images/Awards/award3.png",
    text: "Dean's List Award - Spring 2021"
  },
  {
    image: "/images/Awards/val_award.png",
    text: "Valedictorian of EECS Department Award"
  }
];

export const certif = [
  {
    image: "/images/Certificates/PyTorch.png",
    text: "PyTorch for Deep Learning Specialization"
  },
  {
    image: "images/Certificates/LLM.png",
    text: "ChatGPT & Large Language Models (LLMs)"
  },
  {
    image: "images/Certificates/GenAI.png",
    text: "GPT-4 Foundations: Building AI Powered Apps"
  },
  {
    image: "images/Certificates/MLDS.png",
    text: "Machine Learning & Data Science Specialization"
  },
  {
    image: "images/Certificates/HealthDataScience.png",
    text: "Health Data Science Foundation"
  },
  {
    image: "images/Certificates/NLPAttention.png",
    text: "Natural Language Processing with Attention Models"
  },
  {
    image: "images/Certificates/DeepLearningHealthcare.png",
    text: "Deep Learning Methods for Healthcare"
  }
];
