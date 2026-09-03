export const profile = {
  name: 'Rongzhe Zhao',
  preferredName: 'Rongzhe (Rob) Zhao',
  initials: 'RZ',
  title: 'PhD Student in Health Data Science · Machine Learning & AI Researcher',
  statement:
    'My work focuses on interpretable and trustworthy machine learning, with current interests in multimodal AI, Video-LLMs, and healthcare applications.',
  location: 'George Washington University · Washington, DC',
  email: 'robzhao7@outlook.com',
  github: 'https://github.com/rstationpro',
  linkedin: 'https://www.linkedin.com/in/rongzhe-zhao-801913242',
  googleScholar: null,
  resume: '/Rongzhe_Zhao_Resume.pdf',
  headshot: null,
}

export const about = [
  'I am a Health Data Science PhD student at George Washington University, trained in statistics and biostatistics and working across machine learning, artificial intelligence, and applied health research.',
  'My approach combines careful study design and statistical reasoning with modern ML workflows. I am especially interested in how multimodal models arrive at decisions, what interpretability evidence can support, and how reliable methods translate to consequential domains such as healthcare.',
]

export const researchAreas = [
  {
    index: '01',
    title: 'Multimodal AI & Video-LLMs',
    description:
      'Studying how video-language systems represent temporal evidence, connect visual events to language, and perform multimodal reasoning over complex sequences.',
    focus: ['video understanding', 'temporal reasoning', 'multimodal representation'],
  },
  {
    index: '02',
    title: 'Interpretability & Trustworthy AI',
    description:
      'Examining model behavior through evidence attribution, faithfulness, and causal validity—while separating what a method visualizes from what it can legitimately explain.',
    focus: ['faithfulness', 'evidence attribution', 'causal inference'],
  },
  {
    index: '03',
    title: 'Machine Learning for Healthcare',
    description:
      'Applying statistical learning and machine learning to biomedical, physiological, and health data with attention to study design, reproducibility, and decision relevance.',
    focus: ['biomedical data', 'predictive modeling', 'statistical learning'],
  },
]

export const publications = [
  {
    year: '2026',
    title:
      'Examining Delays in Definitive Fixation: An Association of Patient Demographics in Orthopaedic Trauma Requiring External Fixation',
    venue: 'Foot & Ankle Orthopaedics, 11(2)',
    authors: "O'Mara, A., Teehan, E., Fealy, A. W., Lee, S. M., Zhao, R., & DeBritz, J.",
    url: 'https://doi.org/10.1177/24730114261450079',
  },
  {
    year: '2023',
    title:
      'On Modelling Relative Risks for Longitudinal Binomial Responses: Implications from Two Dueling Paradigms',
    venue: 'General Psychiatry, 36, e100977',
    authors: 'Lin, T., Zhao, R., Tu, S., Wu, H., Hui, Z., & Tu, X.',
    url: 'https://doi.org/10.1136/gpsych-2022-100977',
  },
]

export const projects = [
  {
    index: 'P/01',
    title: 'Video-LLM Interpretability Research',
    status: 'Ongoing survey manuscript',
    context:
      'Interpretability research in Video-LLMs often mixes behavioral observations, evidence-level explanations, and claims about internal mechanisms. The project organizes those claims by the evidence each method can support.',
    description:
      'A structured survey of multimodal and Video-LLM evaluation, grounding, faithfulness, temporal reasoning, and interpretability methods.',
    methods: [
      'Systematic literature mapping',
      'Structured evidence coding',
      'Claim–evidence taxonomy',
      'Faithfulness and causal-validity review',
    ],
    technologies: ['Video-LLMs', 'Multimodal models', 'LaTeX', 'Git', 'Bash'],
    contribution:
      'Built a 61-paper literature map, systematically coded 48 core studies, and organized methods across behavioral, evidence-level, and mechanism-level explanation.',
    visual: 'video',
    links: [
      { label: 'GitHub', url: null, placeholder: '[ADD GITHUB URL]' },
      { label: 'Paper', url: null, placeholder: '[ADD PAPER LINK]' },
    ],
  },
  {
    index: 'P/02',
    title: 'Physiological Signals & Driving Stress Classification',
    status: '[ADD PROJECT STATUS]',
    context:
      'A multimodal classification setting that combines physiological streams—including ECG, EMG, GSR, heart rate, respiration, EOG, and temperature—to study driving stress.',
    description:
      'Reserved for a detailed account of the signal-processing, feature-engineering, modeling, and evaluation workflow.',
    methods: ['[ADD PREPROCESSING]', '[ADD FEATURE PIPELINE]', '[ADD MODEL]', '[ADD EVALUATION]'],
    technologies: ['[ADD VERIFIED TECHNOLOGIES]'],
    contribution: '[ADD PERSONAL CONTRIBUTION AND VERIFIED RESULT]',
    visual: 'signals',
    links: [
      { label: 'GitHub', url: null, placeholder: '[ADD GITHUB URL]' },
      { label: 'Report', url: null, placeholder: '[ADD REPORT LINK]' },
    ],
  },
  {
    index: 'P/03',
    title: 'Distributed SNP Annotation on AWS',
    status: 'Team course project · 2026',
    context:
      'A distributed bioinformatics workflow for uploading SNP variants, running complementary annotations asynchronously, tracking job state, and returning merged results.',
    description:
      'The system used a Flask interface on EC2 with S3 storage, SNS/SQS fan-out, queue-driven workers, and DynamoDB status tracking.',
    methods: [
      'Asynchronous job orchestration',
      'Regional gene annotation',
      'Variant-effect annotation',
      'Queue-driven result merging',
    ],
    technologies: ['Python', 'Flask', 'EC2', 'S3', 'SNS/SQS', 'DynamoDB', 'IAM'],
    contribution:
      'Participated in the team project and development/deployment of the AWS-hosted application. [ADD COMPONENT-LEVEL CONTRIBUTION]',
    visual: 'cloud',
    links: [
      {
        label: 'Team repository',
        url: 'https://github.com/QixShawnChen/gene_annotation_cloud_computing_tool',
      },
      { label: 'Report', url: null, placeholder: '[ADD REPORT LINK]' },
    ],
  },
  {
    index: 'P/04',
    title: 'Predictors of Time to Definitive Surgery',
    status: 'Published analysis · 2025–2026',
    context:
      'A reproducible statistical analysis of time from external fixation to definitive surgery in a 126-patient orthopaedic-trauma cohort with overdispersed count outcomes.',
    description:
      'Compared count-model families, documented exclusions, automated sensitivity analyses and contrasts, and produced publication-ready statistical graphics.',
    methods: [
      'Poisson and negative binomial models',
      'Overdispersion testing',
      'Sensitivity analysis',
      'Estimated marginal means',
    ],
    technologies: ['R', 'dplyr', 'ggplot2', 'MASS', 'emmeans', 'renv'],
    contribution:
      'Built the reproducible analysis pipeline; model comparison supported the negative binomial specification (dispersion 4.39; likelihood-ratio p < 0.001; ΔAIC 177.5).',
    visual: 'statistics',
    links: [
      { label: 'GitHub', url: null, placeholder: '[ADD GITHUB URL]' },
      {
        label: 'Publication',
        url: 'https://doi.org/10.1177/24730114261450079',
      },
    ],
  },
]

export const experience = [
  {
    type: 'Research',
    role: 'Research Assistant',
    organization: 'Data Discovery Lab · George Washington University',
    location: 'Washington, DC',
    period: 'Dec 2025 — Present',
    contributions: [
      'Research multimodal and Video-LLM interpretability with emphasis on explanatory strength, faithfulness, and causal validity.',
      'Maintain a reproducible LaTeX, Overleaf, Git, and Bash workflow for an ongoing survey manuscript.',
    ],
  },
  {
    type: 'Industry',
    role: 'Summer Data Analyst',
    organization: 'Mobalytics',
    location: 'Remote',
    period: 'Jun 2021 — Aug 2021',
    contributions: [
      'Modeled player-history data with linear regression and decision trees to identify demonstrated skills and traits.',
      'Translated findings into product recommendations and stakeholder-facing visualizations.',
    ],
  },
  {
    type: 'Industry',
    role: 'Search Engine Optimization Intern',
    organization: 'Acctrue Technology Co., Ltd.',
    location: 'Beijing, China / Remote',
    period: 'Oct 2020 — May 2021',
    contributions: [
      'Evaluated traffic, conversion, keyword, monetization, and A/B-test performance.',
      'Delivered forecasts, competitive analyses, and site-structure recommendations.',
    ],
  },
  {
    type: 'Industry',
    role: 'Summer Digital Marketing Analyst',
    organization: 'Accenture · Applied Intelligence Group',
    location: 'Remote',
    period: 'Jul 2020 — Sep 2020',
    contributions: [
      'Integrated multi-source campaign data and built performance-reporting dashboards.',
      'Presented Google Analytics findings to management.',
    ],
  },
]

export const education = [
  {
    institution: 'George Washington University',
    school: 'Milken Institute School of Public Health',
    degree: 'PhD in Health Data Science · Biostatistics Track',
    period: 'Expected 2030',
    location: 'Washington, DC',
  },
  {
    institution: 'University of California San Diego',
    school: null,
    degree: 'MS in Biostatistics',
    period: 'Jun 2025',
    location: 'San Diego, CA',
  },
  {
    institution: 'University of California San Diego',
    school: null,
    degree: 'BS in Statistics and Probability',
    period: 'Jun 2022',
    location: 'San Diego, CA',
  },
]

export const skills = [
  {
    category: 'Programming',
    items: ['Python', 'R', 'SQL', 'JavaScript', 'Bash'],
  },
  {
    category: 'Machine Learning / AI',
    items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'XGBoost', 'LightGBM', 'Transformers'],
  },
  {
    category: 'Scientific Computing',
    items: ['pandas', 'NumPy', 'SciPy', 'statsmodels', 'ggplot2'],
  },
  {
    category: 'Infrastructure',
    items: ['AWS', 'Docker', 'Git / GitHub', 'Linux', 'SLURM / HPC', 'GPU / CUDA'],
  },
  {
    category: 'Data Systems',
    items: ['PostgreSQL', 'MySQL', 'SQLite', 'DynamoDB', 'Spark / PySpark'],
  },
]

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]
