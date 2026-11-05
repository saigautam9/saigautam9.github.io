// ---------------------------------------------------------------------------
// All site content lives here. Edit this file, not the components.
// To add a project: copy any object in `projects` and change the fields.
// `repo` / `live` are optional — leave them out and no link is rendered.
// `tracks` accepts any of: "DE" (Data Engineering), "DA" (Analytics), "AI".
// ---------------------------------------------------------------------------

export const profile = {
  name: "V Nagasai Gautam K",
  title: "Data & AI Engineer",
  subtitle: "Analytics · Data Engineering · Machine Learning",
  pitch:
    "I build end-to-end data systems — from pipelines and lakehouses to ML models and dashboards that drive decisions.",
  location: "San Jose, CA",
  email: "kvnsaigautam@gmail.com",
  github: "https://github.com/saigautam9",
  linkedin: "https://linkedin.com/in/saigautamk",
  about: [
    "I work across the full data lifecycle rather than one slice of it. That means the same project can start with raw ingestion and end at a dashboard a stakeholder actually opens on Monday morning — bronze/silver/gold pipelines, the models that sit on top of them, and the reporting layer that makes the result legible.",
    "My background is a mix of platform engineering for retail clients, analytics engineering at an AI startup, and reporting work for pharmaceutical and healthcare clients. That range is why I look at a problem as a system: where the data comes from, how it breaks, what it needs to answer, who is allowed to see it, and who has to trust the result.",
  ],
  education: {
    degree: "M.S., Applied Data Intelligence",
    school: "San Jose State University",
    year: "2025",
  },
};

export const whatIDo = [
  {
    track: "DE",
    title: "Data Engineering",
    blurb:
      "Batch and streaming pipelines that hold up in production — medallion lakehouses, dimensional models, quality gates, and orchestration.",
    items: [
      "Medallion lakehouses (bronze → silver → gold)",
      "ETL/ELT with PySpark, dbt, Airflow-style DAGs",
      "Delta Lake, Unity Catalog, BigQuery",
      "Validation, quarantine, and incremental MERGE",
    ],
  },
  {
    track: "DA",
    title: "Data Analytics",
    blurb:
      "Turning modeled tables into business answers — the metric definitions, the SQL behind them, and the dashboards people actually use.",
    items: [
      "SQL modeling and query optimization",
      "Power BI dashboards and KPI reporting",
      "Operational metrics (OEE, downtime, forecasting)",
      "Statistical analysis and A/B testing",
    ],
  },
  {
    track: "AI",
    title: "AI / Machine Learning",
    blurb:
      "Predictive models and LLM systems built on top of the same pipelines — trained, tracked, and evaluated, not demoed once.",
    items: [
      "Predictive modeling with scikit-learn, XGBoost",
      "Experiment tracking with MLflow",
      "Multi-agent LLM pipelines (Gemini, GPT, Groq)",
      "RAG with vector search (FAISS, pgvector)",
    ],
  },
];

export const projects = [
  {
    title: "Real-Time Fraud Detection Pipeline",
    tracks: ["DE", "AI", "DA"],
    featured: true,
    summary:
      "A streaming medallion lakehouse on Databricks feeding a governed Snowflake serving layer and a Power BI dashboard. Transactions land via Auto Loader, pass a quality gate that quarantines bad records with reason codes, get scored by rules and a Random Forest, and surface as an analyst alert queue. The build was the easy part — most of the work was verifying it was actually correct, and it wasn't, six times.",
    techniques:
      "Structured Streaming with a verified watermark, Delta MERGE for idempotent incremental writes, quarantine pattern with reason taxonomy, cross-platform row reconciliation, Unity Catalog column masks, time-based train/test split, four-configuration engine benchmark.",
    stats: [
      "308,338 = 302,135 silver + 6,203 quarantined — reconciles exactly",
      "740 of 743 hourly windows emitted — the 3 withheld prove the watermark is real",
      "2,515 alerts at 0.83% of traffic, 99.3% precision (down from 25% at 8.7%)",
      "PR-AUC 0.983 · 16 false positives across 70,914 legitimate transactions",
      "Snowflake 2.4–8.4× faster on price-matched warehouses — after 3 corrected benchmarks",
    ],
    tags: [
      "Databricks",
      "Auto Loader",
      "Delta Lake",
      "Structured Streaming",
      "Unity Catalog",
      "PySpark",
      "MLflow",
      "Snowflake",
      "Power BI",
    ],
    repo: "https://github.com/saigautam9/fraud-detection-pipeline",
    image: "fraud_dashboard.png", // lives in /public
    imageCaption:
      "Power BI on the Snowflake gold layer — 302K transactions, fraud concentrated entirely in TRANSFER and CASH_OUT, and account identifiers rendering as ***MASKED*** because the BI role sits outside the Snowflake masking policy.",
  },
  {
    title: "Manufacturing Analytics Lakehouse",
    tracks: ["DE", "DA", "AI"],
    featured: true,
    summary:
      "Raw factory data — MES runs, nested JSON sensor telemetry, quality inspections — flows through a bronze → silver → gold medallion lakehouse on Azure Databricks, gains a machine-learning failure-prediction layer, and is served through Microsoft Fabric to a Power BI dashboard. It computes the KPIs a plant actually runs on: OEE, downtime by loss category, scrap, and predictive-maintenance risk.",
    techniques:
      "Medallion architecture, SCD Type 2, incremental MERGE upserts, window functions, quality gates, Six Big Losses taxonomy, OEE (Availability × Performance × Quality).",
    stats: [
      "50 machines · 90 days · ~2M sensor rows",
      "~28k downtime events (Six Big Losses)",
      "0.93 cross-validated AUC (Random Forest)",
      "6-visual Power BI Direct Lake dashboard",
    ],
    tags: [
      "Azure Databricks",
      "Delta Lake",
      "Unity Catalog",
      "PySpark",
      "MLflow",
      "scikit-learn",
      "Microsoft Fabric",
      "Power BI",
      "SCD Type 2",
    ],
    repo: "https://github.com/saigautam9/manufacturing-lakehouse",
    image: "dashboard.jpeg", // lives in /public
    imageCaption:
      "Power BI Direct Lake dashboard on the Fabric Lakehouse — OEE, at-risk machines, OEE vs failure risk, downtime Pareto, and loss-category breakdown.",
  },
  {
    title: "Deep Signal — Multi-Agent News Pipeline",
    tracks: ["AI", "DE"],
    summary:
      "Eight specialized agents — Fetcher, Classifier, Analyst, Impact Mapper, Historian, Synthesis, Verdict, Rewriter — that ingest, classify, and summarize news end to end. It runs on a GitHub Actions cron schedule and delivers finished briefs over Telegram, with a TF-IDF classifier and regressor handling the cheap decisions before an LLM is called.",
    stats: ["8-stage agent pipeline", "Scheduled daily via GitHub Actions"],
    tags: [
      "Python",
      "FastAPI",
      "Gemini 2.5 Flash",
      "Groq Llama 4 Scout",
      "scikit-learn",
      "GitHub Actions",
      "Vercel",
    ],
    repo: "https://github.com/saigautam9/news-agent-ai",
    live: "https://deep-signal-mu.vercel.app",
  },
  {
    title: "NL-to-SQL Generation System",
    tracks: ["AI", "DA"],
    summary:
      "A natural-language-to-SQL system that lets non-technical users query a database in plain English. Semantic search over schema and example queries retrieves the right context, and an LLM turns the question into runnable SQL.",
    stats: [],
    tags: [
      "Python",
      "FAISS",
      "LLMs",
      "SQLite",
      "Prompt engineering",
      "Semantic search",
    ],
    repo: "https://github.com/saigautam9/DATA-266-Text2SQL",
  },
  {
    title: "NYT Cloud Data Engineering Pipeline",
    tracks: ["DE"],
    summary:
      "An end-to-end cloud pipeline that pulls New York Times API data through Airflow-orchestrated ETL into Google Cloud Storage and BigQuery, then models it into analysis-ready tables.",
    stats: [],
    tags: [
      "Apache Airflow",
      "BigQuery",
      "Google Cloud Storage",
      "dbt",
      "Python",
    ],
    repo: "https://github.com/saigautam9/NYT-Cloud-Data-Engineering-Pipeline",
  },
  {
    title: "Multimodal Knowledge Retrieval",
    tracks: ["AI"],
    summary:
      "A multimodal RAG system that combines vision and language models so documents can be searched by what they show as well as what they say, returning contextually retrieved answers rather than raw matches.",
    stats: [],
    tags: ["Python", "RAG", "Vision-language models", "Vector search", "LLMs"],
    repo: "https://github.com/saigautam9/multimodal-knowledge-retrieval",
  },
  {
    title: "Generative AI Healthcare Data Platform",
    tracks: ["DE", "AI"],
    summary:
      "A healthcare analytics platform that ingests and standardizes clinical records into query-ready tables, then layers LLM-driven retrieval and automation on top for clinical and operational insight.",
    stats: [],
    tags: ["Python", "SQL", "LLMs", "Retrieval", "Cloud warehouse"],
    repo: "https://github.com/saigautam9/generative-ai-healthcare-data-platform",
  },
  {
    title: "Financial Data Streaming Platform",
    tracks: ["DE", "AI"],
    summary:
      "A real-time streaming pipeline for financial market data with an LSTM stock-prediction model on top, monitored end to end through Grafana dashboards.",
    stats: [],
    tags: ["Python", "Streaming", "LSTM", "Grafana", "Time series"],
    repo: "https://github.com/saigautam9/financial-data-streaming-platform",
  },
  {
    title: "Agentic AI Travel Assistant",
    tracks: ["AI"],
    summary:
      "A CrewAI multi-agent assistant that splits trip planning across specialized agents — itinerary, hotels, flights, and weather — which coordinate to produce a single recommendation.",
    stats: [],
    tags: ["Python", "CrewAI", "Multi-agent", "LLMs"],
    repo: "https://github.com/saigautam9/agentic-ai-travel-assistant",
  },
  {
    title: "FIFA Player Position Prediction",
    tracks: ["AI", "DE"],
    summary:
      "Predicts a football player's position from performance attributes, with distributed feature engineering in PySpark and a Random Forest classifier. Also packaged as an interactive Streamlit demo.",
    stats: [],
    tags: ["PySpark", "scikit-learn", "Random Forest", "Streamlit", "Python"],
    repo: "https://github.com/saigautam9/FIFA-Player-Position-Prediction",
  },
  {
    title: "CineLite — Text-to-Video Generation",
    tracks: ["AI"],
    summary:
      "A comparative implementation and evaluation of state-of-the-art text-to-video generation models — CogVideoX, ModelScope, and AnimateDiff — benchmarked against each other on the same prompts.",
    stats: [],
    tags: ["Python", "Generative AI", "CogVideoX", "ModelScope", "AnimateDiff"],
    repo:
      "https://github.com/saigautam9/CineLite-Text-to-Video-Generation-using-Generative-AI",
  },
  {
    title: "Quix Streams — Open-Source Contribution",
    tracks: ["DE"],
    summary:
      "Contributed a close_on_idle flag for tumbling windows to the open-source Quix Streams stream-processing library, with five unit tests covering the new behavior. Submitted as PR #1133 against issue #790.",
    stats: ["PR #1133 · 5 unit tests"],
    tags: ["Python", "Quix Streams", "Stream processing", "Unit testing"],
    repo: "https://github.com/quixio/quix-streams/pull/1133",
  },
];

export const skills = [
  {
    track: "DE",
    group: "Data Platforms & Engineering",
    items: [
      "Databricks",
      "Microsoft Fabric",
      "OneLake",
      "Data Factory",
      "Delta Lake",
      "Lakehouse architecture",
      "PySpark",
      "dbt",
      "BigQuery",
      "Fivetran",
      "ETL / ELT",
      "Airflow",
      "Incremental processing",
    ],
  },
  {
    track: "DE",
    group: "Governance & Security",
    items: [
      "Unity Catalog",
      "OneLake security",
      "Entra ID (RBAC)",
      "Private endpoints",
      "Data lineage",
      "Data quality & validation",
    ],
  },
  {
    track: "DA",
    group: "Analytics & BI",
    items: [
      "SQL",
      "Power BI",
      "Tableau",
      "Semantic models",
      "Dashboard design",
      "KPI reporting",
      "A/B testing",
      "Statistical analysis",
      "Grafana",
      "Power Automate",
    ],
  },
  {
    track: "AI",
    group: "AI / Machine Learning",
    items: [
      "scikit-learn",
      "XGBoost",
      "LightGBM",
      "PyTorch",
      "TensorFlow",
      "Hugging Face",
      "MLflow",
      "LLMs (Gemini, GPT, Groq)",
      "RAG",
      "Agentic AI / CrewAI",
      "FAISS",
      "Predictive modeling",
    ],
  },
  {
    track: null,
    group: "Languages & Tools",
    items: [
      "Python",
      "SQL",
      "JavaScript",
      "Git",
      "Microsoft Fabric",
      "GCP",
      "Firestore",
      "FastAPI",
      "Docker",
      "GitHub Actions",
      "Streamlit",
      "Vercel",
    ],
  },
];

// Label + color for each discipline badge.
export const TRACKS = {
  DE: { label: "Data Engineering", short: "DE", className: "bg-accentSoft text-accent" },
  DA: { label: "Analytics", short: "DA", className: "bg-[#F3EEE2] text-[#7A5E1F]" },
  AI: { label: "AI / ML", short: "AI", className: "bg-[#EDEDF8] text-[#4B4B9B]" },
};
