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
  resume: "resume.pdf", // drop the PDF into /public with this filename
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

export const experience = [
  {
    company: "SPM Strategic LLC",
    role: "Data Engineer",
    period: "Feb 2026 — Present",
    place: "San Jose, CA",
    points: [
      "Automated data pipelines for a retail client, integrating sales, order-management, inventory, and waste-management data into one centralized analytics environment.",
      "Integrated retail source-system data with Fivetran ingestion pipelines, then built automated ETL in Python, SQL, Databricks, and Microsoft Fabric with incremental Delta-table processing to clean, transform, and validate it.",
      "Built revenue and order-management dashboards tracking total revenue, average order value, product performance, order volume, margins, and store-level trends — cutting reporting turnaround by about 25%.",
      "Developed waste-management analytics that pinpointed high-waste products and operations, cutting waste-related losses by about 15%, and governed access with Unity Catalog, Entra ID role-based permissions, and private endpoints.",
    ],
    tags: [
      "Databricks",
      "Microsoft Fabric",
      "Delta Lake",
      "Fivetran",
      "Python",
      "SQL",
      "Unity Catalog",
      "Entra ID (RBAC)",
      "Power BI",
    ],
  },
  {
    company: "VeraAI Technologies",
    role: "Data & Analytics Engineer (Backend)",
    period: "Aug 2025 — Dec 2025",
    place: "San Jose, CA",
    points: [
      "Built a centralized analytics solution in Microsoft Fabric, using Fabric Lakehouse and OneLake to consolidate structured business, product-catalog, and material data.",
      "Developed Data Factory pipelines to ingest and automate data movement from multiple sources, and used Databricks and Spark with Delta tables to clean, transform, join, aggregate, and validate large catalog and operational datasets with incremental processing.",
      "Built Power BI dashboards in Fabric with semantic models — relationships, measures, KPIs — analyzing material usage, product categories, catalog activity, and revenue, reducing manual reporting effort by about 25%.",
      "Configured OneLake security and role-based access, and used Unity Catalog for table/schema permissions and data lineage across Databricks and Fabric; integrated external sources with Fivetran and secured connectivity with Entra ID and private endpoints.",
    ],
    tags: [
      "Microsoft Fabric",
      "OneLake",
      "Data Factory",
      "Databricks",
      "Spark",
      "Delta Lake",
      "Power BI",
      "Semantic models",
      "Unity Catalog",
    ],
  },
  {
    company: "Net Orbit Inc.",
    role: "Data Analyst",
    period: "Jul 2022 — Dec 2023",
    place: "Hyderabad, India",
    points: [
      "Built ETL/ELT pipelines from ERP and source systems with dimensional data modeling and quality checks, tuning SQL and cutting report turnaround by 30%.",
      "Delivered 15+ Power BI and Tableau dashboards and automated reporting for stakeholders, reducing manual effort by 60% and improving process efficiency by 15%.",
    ],
    tags: [
      "SQL",
      "Python",
      "ETL",
      "Power BI",
      "Tableau",
      "Dimensional modeling",
    ],
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
