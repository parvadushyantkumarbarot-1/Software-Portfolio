// Central, typed content model for the portfolio.
// All page and component content is derived from this file so that the
// project archive, case-study routes, and home page sections stay consistent.

export type ProjectStatus =
  | "In Development"
  | "Active Development"
  | "Planned Rebuild";

export type ProjectCategory =
  | "AI Infrastructure"
  | "Distributed Systems"
  | "Backend"
  | "Cloud"
  | "Data"
  | "Full Stack";

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "AI Infrastructure",
  "Distributed Systems",
  "Backend",
  "Cloud",
  "Data",
  "Full Stack",
];

export interface VerifiedMetric {
  label: string;
  value: string;
  context: string;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  description: string;
}

export interface EngineeringDecision {
  decision: string;
  rationale: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  status: ProjectStatus;
  categories: ProjectCategory[];
  stack: string[];
  problem: string;
  goals: string[];
  architectureSummary: string;
  architectureFlow: ArchitectureNode[];
  capabilities: string[];
  engineeringDecisions: EngineeringDecision[];
  reliabilityConsiderations: string[];
  securityConsiderations: string[];
  testingStrategy: string[];
  observabilityStrategy: string[];
  limitations: string[];
  roadmap: string[];
  githubUrl?: string;
  liveUrl?: string;
  metrics?: VerifiedMetric[];
  featured: boolean;
}

export interface ExperienceEntry {
  id: string;
  roleLabel: string;
  period: string;
  summary: string;
  impact: string[];
  metrics: VerifiedMetric[];
  stack: string[];
}

export interface SkillGroup {
  name: string;
  skills: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  detail: string;
}

// ---------------------------------------------------------------------------
// Site-level configuration
// ---------------------------------------------------------------------------

export const site = {
  name: "Parva Barot",
  initials: "PB",
  title:
    "Software Engineer — Backend Systems, Cloud Infrastructure, Distributed Architecture & AI Infrastructure",
  shortTitle: "Software Engineer",
  positioning:
    "I build scalable backend systems, cloud-native platforms, and production AI infrastructure for real-world workloads.",
  location: "Tempe, Arizona",
  experienceYears: "4+",
  email: "parvadushyantkumarbarot@gmail.com",
  githubUser: "parvadushyantkumarbarot-1",
  githubUrl: "https://github.com/parvadushyantkumarbarot-1",
  canonicalUrl: "https://parva-software-portfolio.vercel.app",
  resumePath: "/resume/Parva_Barot_Software_Resume.pdf",
  resumeFileName: "Parva_Barot_Software_Resume.pdf",
} as const;

export const heroMetrics: VerifiedMetric[] = [
  {
    label: "Years of Engineering Experience",
    value: "4+",
    context: "Professional experience",
  },
  {
    label: "Daily Requests Supported",
    value: "500K+",
    context: "Professional experience",
  },
  {
    label: "Async Events per Day",
    value: "1M+",
    context: "Professional experience",
  },
  {
    label: "Faster Deployment Workflow",
    value: "40%",
    context: "Professional experience",
  },
];

// ---------------------------------------------------------------------------
// Generic system architecture used by the Hero panel and the Systems page.
// This describes the shape of architecture Parva has built professionally —
// it is a preview/diagram, not a claim of a specific live system.
// ---------------------------------------------------------------------------

export const systemArchitecture: ArchitectureNode[] = [
  {
    id: "client",
    label: "Client / API",
    description:
      "External clients and upstream services call versioned REST and gRPC endpoints behind schema validation.",
  },
  {
    id: "service",
    label: "FastAPI / Spring Boot",
    description:
      "Stateless application services handle request validation, auth, and business logic, and publish work instead of blocking on it.",
  },
  {
    id: "broker",
    label: "Kafka / SQS",
    description:
      "An event broker decouples producers from consumers, absorbs load spikes, and gives every event a durable, replayable log.",
  },
  {
    id: "workers",
    label: "Workers",
    description:
      "Horizontally scaled worker pools process events asynchronously with idempotent handlers, retries, and dead-letter queues.",
  },
  {
    id: "cache",
    label: "Redis",
    description:
      "A caching layer absorbs read-heavy traffic and stores short-lived session and rate-limit state to protect the database.",
  },
  {
    id: "store",
    label: "PostgreSQL / Vector Store",
    description:
      "Durable relational storage for transactional state, paired with a vector store for embeddings and semantic retrieval.",
  },
  {
    id: "observability",
    label: "Observability",
    description:
      "Structured logs, metrics, and traces flow into Prometheus and Grafana so regressions are caught before users notice.",
  },
];

export const architecturePrinciples: { title: string; description: string }[] = [
  {
    title: "Decoupling",
    description:
      "Producers and consumers never call each other directly. A broker sits between them so either side can change, fail, or scale independently.",
  },
  {
    title: "Asynchronous processing",
    description:
      "Work that doesn't need an immediate response is queued, not blocked on. Request threads stay free and p95 latency stays predictable under load.",
  },
  {
    title: "Horizontal scalability",
    description:
      "Stateless services and worker pools scale by adding replicas, not bigger machines, so capacity grows with traffic instead of ahead of it.",
  },
  {
    title: "Caching",
    description:
      "A caching layer in front of the database absorbs read-heavy and repeated-lookup traffic, keeping p95 latency stable during spikes.",
  },
  {
    title: "Durable persistence",
    description:
      "Transactional state lives in PostgreSQL; vector data lives in a purpose-built store. Neither is a place to leave data half-written.",
  },
  {
    title: "Observability",
    description:
      "Every service emits structured logs, metrics, and traces by default, so an incident is a dashboard query, not a guessing game.",
  },
  {
    title: "Fault isolation",
    description:
      "A slow or failing downstream dependency degrades one workflow, not the whole platform, through timeouts, bulkheads, and circuit breakers.",
  },
  {
    title: "Retry and idempotency",
    description:
      "Handlers are written to be safely retried. Idempotency keys and at-least-once delivery are treated as the default, not an edge case.",
  },
];

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------

export const experience: ExperienceEntry[] = [
  {
    id: "enterprise-backend-ai",
    roleLabel: "Software Engineer — Enterprise Backend and AI Platforms",
    period: "November 2024 – Present",
    summary:
      "Design and build backend systems and AI infrastructure for enterprise platforms — high-throughput REST APIs, event-driven processing, and retrieval-augmented workflows deployed through automated CI/CD pipelines.",
    impact: [
      "Designed scalable backend systems and REST APIs in Python and Java for enterprise platforms supporting 500K+ daily requests.",
      "Built high-throughput FastAPI services and reduced p95 response latency by 28% through profiling, caching, and query optimization.",
      "Built distributed processing infrastructure handling more than 1M asynchronous events per day.",
      "Automated testing, deployment, monitoring, telemetry, and logging through CI/CD pipelines, cutting deployment time by 40%.",
      "Integrated LLM, RAG, retrieval, caching, and vector-search capabilities into five enterprise workflows.",
      "Built retrieval systems supporting 75K+ indexed documents with a 30% reduction in p95 retrieval latency.",
    ],
    metrics: [
      { label: "Daily requests supported", value: "500K+", context: "Enterprise platform traffic" },
      { label: "p95 API latency reduction", value: "28%", context: "FastAPI service optimization" },
      { label: "Async events processed per day", value: "1M+", context: "Distributed processing infrastructure" },
      { label: "Deployment time reduction", value: "40%", context: "CI/CD automation" },
      { label: "Enterprise workflows with LLM/RAG integration", value: "5", context: "Retrieval and vector-search capabilities" },
      { label: "Indexed documents (retrieval)", value: "75K+", context: "Retrieval system" },
      { label: "p95 retrieval latency reduction", value: "30%", context: "Retrieval system tuning" },
    ],
    stack: [
      "Python",
      "Java",
      "FastAPI",
      "Kafka",
      "Redis",
      "PostgreSQL",
      "LangChain",
      "OpenAI API",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    id: "cloud-native-applications",
    roleLabel: "Software Engineer — Cloud-Native Applications",
    period: "February 2021 – July 2023",
    summary:
      "Built cloud-native backend services, ingestion pipelines, and search infrastructure — connecting serverless processing, real-time frontend workflows, and containerized deployment for production applications.",
    impact: [
      "Developed backend systems, REST APIs, and microservices in Python and Java, improving p95 response time by 30%.",
      "Built FastAPI and AWS Lambda ingestion pipelines processing up to 10K documents per day.",
      "Developed search and retrieval capabilities across 500K+ indexed documents, improving search latency by 25%.",
      "Integrated frontend and backend services for real-time workflows, reducing workflow completion time by 25%.",
      "Reduced Docker image size by 35% and improved production incident investigation time by 20%.",
    ],
    metrics: [
      { label: "p95 response time improvement", value: "30%", context: "Backend microservices" },
      { label: "Documents ingested per day", value: "10K", context: "FastAPI + AWS Lambda pipeline" },
      { label: "Indexed documents (search)", value: "500K+", context: "Search and retrieval system" },
      { label: "Search latency improvement", value: "25%", context: "Search system tuning" },
      { label: "Workflow completion time reduction", value: "25%", context: "Real-time frontend/backend integration" },
      { label: "Docker image size reduction", value: "35%", context: "Container optimization" },
      { label: "Incident investigation time reduction", value: "20%", context: "Structured logging and monitoring" },
    ],
    stack: [
      "Python",
      "Java",
      "FastAPI",
      "AWS Lambda",
      "AWS S3",
      "AWS SQS",
      "Docker",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "GitHub Actions",
    ],
  },
];

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------

export const education: EducationEntry[] = [
  {
    degree: "Master of Science in Information Technology",
    institution: "Arizona State University",
    period: "August 2023 – May 2025",
    detail: "GPA: 4.0 / 4.0",
  },
];

// ---------------------------------------------------------------------------
// Skills, grouped by engineering responsibility.
// ---------------------------------------------------------------------------

export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    skills: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "C#", "C++"],
  },
  {
    name: "Backend and APIs",
    skills: [
      "FastAPI",
      "Django",
      "Spring Boot",
      ".NET Core",
      "REST APIs",
      "gRPC",
      "Microservices",
      "API Design",
    ],
  },
  {
    name: "Distributed Systems",
    skills: [
      "Apache Kafka",
      "Event-Driven Architecture",
      "Asynchronous Processing",
      "Distributed Systems",
      "Caching",
      "Worker-based processing",
      "Idempotency",
      "Retry & failure-recovery patterns",
    ],
  },
  {
    name: "Cloud and Infrastructure",
    skills: [
      "AWS EC2",
      "AWS S3",
      "AWS Lambda",
      "AWS EKS",
      "AWS SQS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Helm",
      "GitHub Actions",
      "CI/CD",
    ],
  },
  {
    name: "Databases and Caching",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "TimescaleDB",
      "Pinecone",
      "ChromaDB",
    ],
  },
  {
    name: "AI Engineering",
    skills: [
      "LLMs",
      "Retrieval-Augmented Generation",
      "LangChain",
      "LangGraph",
      "OpenAI API",
      "AI Agents",
      "Embeddings",
      "Semantic Search",
      "Vector Databases",
      "MLflow",
      "Pandas",
    ],
  },
  {
    name: "Security and Reliability",
    skills: ["JWT", "RBAC", "Authentication", "API Validation", "Rate Limiting"],
  },
  {
    name: "Testing and Observability",
    skills: [
      "Unit Testing",
      "Integration Testing",
      "Test Automation",
      "Structured Logging",
      "Monitoring",
      "Distributed Tracing",
      "Prometheus",
      "Grafana",
      "Performance Tuning",
      "Incident Triage",
    ],
  },
];

// ---------------------------------------------------------------------------
// Engineering principles
// ---------------------------------------------------------------------------

export const engineeringPrinciples: { title: string; description: string }[] = [
  {
    title: "Documented architecture",
    description:
      "Every project ships with an architecture summary and diagram, not just a folder structure, so intent survives beyond the code.",
  },
  {
    title: "Reproducible local development",
    description:
      "Docker Compose and pinned dependencies mean a project runs the same way on any machine, not just the one it was built on.",
  },
  {
    title: "Automated testing",
    description:
      "Unit and integration tests run before code merges, catching regressions before they reach a deployed environment.",
  },
  {
    title: "CI/CD",
    description:
      "GitHub Actions pipelines run lint, type checks, and tests on every change, and automate the path to a deployable artifact.",
  },
  {
    title: "Input validation",
    description:
      "Request and response schemas are validated at the boundary, so malformed data fails fast instead of corrupting downstream state.",
  },
  {
    title: "Authentication and authorization",
    description:
      "JWT-based auth and role-based access control gate sensitive operations rather than relying on obscurity.",
  },
  {
    title: "Failure handling",
    description:
      "Retries, timeouts, and dead-letter queues are designed in from the start, not bolted on after the first outage.",
  },
  {
    title: "Metrics and logging",
    description:
      "Structured logs and Prometheus metrics are part of the initial build, so an incident starts with data, not guesswork.",
  },
  {
    title: "Performance measurement",
    description:
      "Latency and throughput are measured before and after changes, so improvements are demonstrated rather than assumed.",
  },
  {
    title: "Honest benchmarks",
    description:
      "Numbers shown anywhere in this portfolio are either verified professional outcomes or explicitly marked as pending — never invented.",
  },
];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export const projects: Project[] = [
  // 1. RAG Platform ----------------------------------------------------------
  {
    slug: "rag-platform",
    title: "RAG Platform",
    shortDescription:
      "Scalable semantic-search and document-grounded Q&A platform with async ingestion, hybrid retrieval, and streaming answers.",
    longDescription:
      "A retrieval-augmented generation platform designed around asynchronous document ingestion, hybrid semantic + keyword search, streaming responses with source citations, and a pluggable vector-store adapter so the retrieval backend isn't locked to one vendor.",
    status: "In Development",
    categories: ["AI Infrastructure", "Backend", "Distributed Systems"],
    stack: [
      "Python",
      "FastAPI",
      "LangChain",
      "OpenAI API",
      "Redis Vector Search",
      "ChromaDB",
      "Pinecone",
      "PostgreSQL",
      "AWS S3",
      "Docker",
      "Kubernetes",
      "AWS EKS",
      "Helm",
      "Terraform",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
      "Pytest",
    ],
    problem:
      "Document-heavy teams need answers grounded in their own source material, not a general-purpose model's memory — and they need those answers to cite where they came from and stay fast as the document set grows.",
    goals: [
      "Ingest PDF, Markdown, and text documents without blocking the request path.",
      "Support hybrid semantic and keyword retrieval instead of vector search alone.",
      "Stream answers with inline source citations rather than a single blocking response.",
      "Keep the vector store swappable between a local development option and a managed service.",
      "Measure and publish retrieval latency instead of assuming it.",
    ],
    architectureSummary:
      "Documents land in S3 and are parsed and chunked by an async worker pool, which generates embeddings and writes them to a vector-store adapter (ChromaDB locally, Pinecone or Redis Vector Search in other environments). Query-time requests hit FastAPI, which runs hybrid retrieval, assembles context, and streams a cited response back to the client while Redis caches repeated queries.",
    architectureFlow: [
      { id: "upload", label: "Document Upload", description: "PDF, Markdown, and text files are uploaded and written to S3 for durable storage." },
      { id: "ingest", label: "Async Ingestion", description: "A worker pool parses and chunks documents off the request path so uploads never block on processing." },
      { id: "embed", label: "Embedding Generation", description: "Chunks are embedded and written to the configured vector store adapter." },
      { id: "retrieve", label: "Hybrid Retrieval", description: "Query time combines semantic vector search with keyword matching for more precise context." },
      { id: "cache", label: "Redis Cache", description: "Repeated queries are served from cache to reduce load on the retrieval path." },
      { id: "answer", label: "Streaming Answer", description: "FastAPI streams the generated answer with inline source citations back to the client." },
    ],
    capabilities: [
      "PDF, Markdown, and text ingestion",
      "Asynchronous parsing and chunking",
      "Embedding generation",
      "Semantic and hybrid search",
      "Streaming answers",
      "Source citations",
      "Document collections",
      "Redis caching",
      "Authentication and role-based access",
      "Health, readiness, and metrics endpoints",
      "Vector-store abstraction (ChromaDB / Pinecone / Redis Vector Search)",
      "Reproducible latency benchmarks",
    ],
    engineeringDecisions: [
      {
        decision: "Vector-store abstraction layer instead of a hard dependency on one provider.",
        rationale:
          "ChromaDB is free to run locally for development; Pinecone or Redis Vector Search suit managed or self-hosted production environments. An adapter interface keeps that a configuration choice, not a rewrite.",
      },
      {
        decision: "Asynchronous ingestion pipeline rather than synchronous upload processing.",
        rationale:
          "Parsing, chunking, and embedding are the slowest parts of ingestion. Decoupling them from the upload request keeps the API responsive regardless of document size.",
      },
      {
        decision: "Hybrid retrieval instead of pure vector similarity search.",
        rationale:
          "Keyword matching catches exact terms — names, IDs, error codes — that embeddings alone can under-rank. Combining both improves answer grounding.",
      },
    ],
    reliabilityConsiderations: [
      "Ingestion jobs are idempotent so a retried upload doesn't create duplicate chunks.",
      "Vector-store writes are batched with backoff so a transient provider error doesn't drop a document.",
      "Streaming responses fall back to a non-streaming path if the client doesn't support it.",
    ],
    securityConsiderations: [
      "JWT-based authentication with role-based access to document collections.",
      "Upload validation on file type and size before a document enters the ingestion pipeline.",
      "Rate limiting on query endpoints to protect the vector store from abusive traffic.",
    ],
    testingStrategy: [
      "Pytest unit tests for chunking, retrieval ranking, and the vector-store adapter interface.",
      "Integration tests against a local ChromaDB instance in CI.",
      "Contract tests for the streaming response format.",
    ],
    observabilityStrategy: [
      "Prometheus metrics for ingestion throughput, retrieval latency, and cache hit rate.",
      "Grafana dashboards separating ingestion-path and query-path latency.",
      "Structured logs correlating a query to the documents it retrieved.",
    ],
    limitations: [
      "Latency and retrieval-quality benchmarks are not yet published — they will be added once a reproducible evaluation harness is committed to the repository.",
      "Managed vector-store adapters (Pinecone) are implemented behind the interface but not yet load-tested at scale.",
    ],
    roadmap: [
      "Publish a reproducible latency benchmark suite before claiming specific numbers.",
      "Add document-collection-level access policies.",
      "Add an evaluation harness for retrieval precision/recall.",
    ],
    githubUrl: "https://github.com/parvadushyantkumarbarot-1/RAG-platform",
    featured: true,
  },

  // 2. Multi-Agent Workflow Automation ---------------------------------------
  {
    slug: "multi-agent-workflow-automation",
    title: "Multi-Agent Workflow Automation",
    shortDescription:
      "Event-driven agent orchestration for document classification, extraction, validation, and human-approved decisions.",
    longDescription:
      "A LangGraph-based orchestration system where a supervisor agent routes work across classification, extraction, validation, and response-generation agents, backed by Kafka for event processing and a human-approval stage for decisions that shouldn't be fully automated.",
    status: "In Development",
    categories: ["AI Infrastructure", "Distributed Systems", "Backend"],
    stack: [
      "Python",
      "FastAPI",
      "LangGraph",
      "OpenAI API",
      "Apache Kafka",
      "PostgreSQL",
      "Redis",
      "REST APIs",
      "gRPC",
      "Docker",
      "Kubernetes",
      "AWS EKS",
      "Helm",
      "Terraform",
      "GitHub Actions",
      "OpenTelemetry",
      "Prometheus",
      "Grafana",
      "Pytest",
    ],
    problem:
      "Document workflows that mix classification, extraction, and judgment calls don't fit a single LLM call — they need orchestration, durable state, and a place for a human to step in before a decision ships.",
    goals: [
      "Route documents through specialized agents instead of one monolithic prompt.",
      "Persist workflow state so a crashed worker doesn't lose progress mid-workflow.",
      "Process events through Kafka instead of holding requests open for slow agent chains.",
      "Give a human a defined approval stage before a workflow's output is finalized.",
      "Track token usage, latency, and output quality per workflow run.",
    ],
    architectureSummary:
      "A supervisor agent built on LangGraph routes each document through classification, extraction, and validation agents, publishing and consuming state-transition events over Kafka. Workflow state is persisted in PostgreSQL so any stage can resume after a failure, Redis holds short-lived contextual memory, and a response-generation agent's output pauses at a human-approval stage before the workflow is marked complete.",
    architectureFlow: [
      { id: "intake", label: "Document Intake", description: "Incoming documents are published as events rather than processed inline." },
      { id: "supervisor", label: "Supervisor Agent", description: "A LangGraph supervisor routes each document to the appropriate specialized agent." },
      { id: "classify", label: "Classification & Extraction", description: "Dedicated agents classify document type and extract structured fields." },
      { id: "validate", label: "Validation Agent", description: "Extracted output is checked against expected schema and business rules before proceeding." },
      { id: "approval", label: "Human Approval", description: "A human reviewer approves or rejects the workflow's output before it is finalized." },
      { id: "state", label: "Persistent State", description: "PostgreSQL and Redis persist workflow and contextual state so any stage can resume after a failure." },
    ],
    capabilities: [
      "Supervisor agent",
      "Document-classification agent",
      "Information-extraction agent",
      "Validation agent",
      "Response-generation agent",
      "Human-approval stage",
      "Kafka-based event processing",
      "Persistent workflow state",
      "Contextual memory",
      "Parallel and sequential execution",
      "Retries, idempotency, and dead-letter handling",
      "Audit history and workflow-status API",
      "Token, latency, and quality tracking",
    ],
    engineeringDecisions: [
      {
        decision: "Kafka as the event backbone instead of direct agent-to-agent calls.",
        rationale:
          "Publishing state transitions as events lets any stage crash and resume independently, and makes the workflow's history auditable rather than implicit in call stacks.",
      },
      {
        decision: "A dedicated validation agent and human-approval stage rather than trusting extraction output directly.",
        rationale:
          "Extraction and generation agents can be confidently wrong. A validation step and an explicit approval gate keep low-confidence output from silently becoming a finalized decision.",
      },
      {
        decision: "Workflow state in PostgreSQL rather than in-memory or purely in Kafka.",
        rationale:
          "A relational store gives the workflow-status API a queryable source of truth and lets any stage resume after a worker restart without replaying the entire event log.",
      },
    ],
    reliabilityConsiderations: [
      "Idempotency keys on every event so a redelivered message doesn't duplicate a workflow stage.",
      "Dead-letter queues capture events that fail repeated processing for manual inspection.",
      "Retries use exponential backoff so a transient LLM API failure doesn't immediately fail the workflow.",
    ],
    securityConsiderations: [
      "gRPC and REST endpoints are authenticated and scoped by role, separating reviewer access from service-to-service calls.",
      "Human-approval actions are attributed and stored in the audit history.",
    ],
    testingStrategy: [
      "Pytest unit tests per agent, isolating prompt logic from orchestration logic.",
      "Integration tests running the full supervisor graph against a local Kafka instance.",
      "Contract tests for the workflow-status API.",
    ],
    observabilityStrategy: [
      "OpenTelemetry traces spanning the supervisor and each downstream agent.",
      "Prometheus metrics for per-stage latency, retry counts, and dead-letter volume.",
      "Grafana dashboards for token usage and cost per workflow type.",
    ],
    limitations: [
      "Accuracy and quality-improvement claims are not published until a committed evaluation harness reproduces them.",
      "The human-approval UI is currently API-driven; a dedicated reviewer interface is on the roadmap.",
    ],
    roadmap: [
      "Build a reviewer-facing approval interface.",
      "Publish a reproducible evaluation harness before claiming any accuracy improvement.",
      "Add parallel fan-out for independent extraction sub-tasks.",
    ],
    githubUrl: "https://github.com/parvadushyantkumarbarot-1/Multi-agent-Workflow-Automation-System",
    featured: true,
  },

  // 3. LLM Evaluation and Monitoring Platform --------------------------------
  {
    slug: "llm-evaluation-monitoring-platform",
    title: "LLM Evaluation and Monitoring Platform",
    shortDescription:
      "AI reliability platform for comparing models and prompts, scoring groundedness, and gating regressions in CI.",
    longDescription:
      "A platform for registering models and prompts, running batch evaluations against curated datasets, scoring groundedness and completeness, and tracking latency and cost over time — with regression gates wired into CI/CD so a prompt change can't silently degrade quality.",
    status: "In Development",
    categories: ["AI Infrastructure", "Backend", "Data"],
    stack: [
      "Python",
      "FastAPI",
      "MLflow",
      "Prometheus",
      "Grafana",
      "PostgreSQL",
      "TimescaleDB",
      "OpenAI API",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Pytest",
    ],
    problem:
      "Prompt and model changes ship without a consistent way to measure whether they made responses better or worse — regressions get discovered by users instead of by a gate in CI.",
    goals: [
      "Register models and prompts as versioned, comparable entities.",
      "Run batch evaluations against a fixed dataset rather than ad hoc manual checks.",
      "Score groundedness, completeness, and relevance instead of relying on eyeballing output.",
      "Track latency, token usage, and estimated cost per model/prompt combination.",
      "Gate deployments in CI/CD when an evaluation run regresses against baseline.",
    ],
    architectureSummary:
      "Models and prompts are registered in MLflow's model registry alongside evaluation datasets stored in PostgreSQL. A FastAPI evaluation service runs batch scoring jobs, writes time-series latency and cost data to TimescaleDB, and exposes a comparison API. GitHub Actions calls the evaluation API as a CI gate, failing a pipeline when a candidate prompt or model regresses against its recorded baseline.",
    architectureFlow: [
      { id: "register", label: "Model & Prompt Registry", description: "Models and prompts are registered as versioned entities in MLflow." },
      { id: "dataset", label: "Evaluation Datasets", description: "Curated datasets in PostgreSQL define the fixed inputs each evaluation run scores against." },
      { id: "batch", label: "Batch Evaluation", description: "FastAPI runs scoring jobs across relevance, completeness, and groundedness." },
      { id: "timeseries", label: "Latency & Cost Tracking", description: "TimescaleDB stores per-run latency, token, and estimated-cost time series." },
      { id: "compare", label: "Baseline Comparison", description: "New evaluation runs are compared against a recorded baseline to detect regressions." },
      { id: "gate", label: "CI/CD Regression Gate", description: "GitHub Actions fails the pipeline when a candidate regresses against baseline." },
    ],
    capabilities: [
      "Model and prompt registration",
      "Evaluation datasets",
      "Batch evaluation",
      "Baseline comparison",
      "Relevance, completeness, and groundedness scoring",
      "Hallucination-risk detection",
      "Latency and token tracking",
      "Estimated-cost tracking",
      "Evaluation history",
      "Benchmark exports",
      "Production dashboards",
      "CI/CD regression gates",
    ],
    engineeringDecisions: [
      {
        decision: "TimescaleDB for latency and cost time series rather than plain PostgreSQL tables.",
        rationale:
          "Evaluation history is inherently time-series data — TimescaleDB's hypertables keep range queries and retention policies efficient as the history grows.",
      },
      {
        decision: "MLflow for the model/prompt registry instead of a bespoke registry.",
        rationale:
          "MLflow already solves versioning, comparison, and reproducible runs, and integrates cleanly with the batch-evaluation service rather than duplicating that infrastructure.",
      },
      {
        decision: "A CI/CD gate on evaluation regression rather than an advisory dashboard alone.",
        rationale:
          "A dashboard that nobody checks doesn't stop a regression from shipping. A failing pipeline does.",
      },
    ],
    reliabilityConsiderations: [
      "Evaluation runs are retried on transient provider errors without re-scoring already-completed samples.",
      "Baseline comparisons are versioned so a bad baseline can be rolled back without re-running the full dataset.",
    ],
    securityConsiderations: [
      "Evaluation datasets and scores are access-controlled per project to prevent cross-team data exposure.",
      "API keys for model providers are read from environment-scoped secrets, never stored in the dataset tables.",
    ],
    testingStrategy: [
      "Pytest unit tests for scoring functions in isolation from any live model call.",
      "Integration tests running a small evaluation batch end-to-end in CI.",
      "Snapshot tests on the benchmark export format.",
    ],
    observabilityStrategy: [
      "Prometheus metrics for evaluation throughput and queue depth.",
      "Grafana dashboards tracking latency, cost, and score trends per model/prompt.",
      "Structured logs linking a regression alert to the specific samples that failed.",
    ],
    limitations: [
      "Groundedness and hallucination-risk scoring currently rely on a single scoring approach; multi-method scoring is planned but not yet built.",
      "No published benchmark numbers yet — the evaluation harness itself is still being hardened.",
    ],
    roadmap: [
      "Add multi-method groundedness scoring to reduce single-method scoring bias.",
      "Expose a public benchmark-export format for sharing evaluation results.",
      "Add cost-budget alerts per project.",
    ],
    githubUrl: "https://github.com/parvadushyantkumarbarot-1/LLM-Evaluation-and-Monitoring-Platform",
    featured: true,
  },

  // 4. EV Commerce Platform ---------------------------------------------------
  {
    slug: "ev-commerce-platform",
    title: "EV Commerce Platform",
    shortDescription:
      "Full-stack vehicle commerce platform with configuration, persisted orders, demo-drive scheduling, and role-based admin.",
    longDescription:
      "An original, educational electric-vehicle commerce platform: a Next.js frontend for browsing and configuring vehicles, and a Spring Boot backend that owns persistence, orders, demo-drive scheduling, and administrative operations behind JWT-authenticated, role-based access.",
    status: "Active Development",
    categories: ["Full Stack", "Backend", "Cloud"],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "Java",
      "Spring Boot",
      "Spring Security",
      "REST APIs",
      "PostgreSQL",
      "Redis",
      "Apache Kafka",
      "JWT",
      "RBAC",
      "JUnit",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "GitHub Actions",
    ],
    problem:
      "Vehicle configuration and ordering flows are usually demonstrated as frontend-only prototypes with no real persistence, authentication, or administrative surface — this project builds the backend a production commerce flow actually needs.",
    goals: [
      "Keep Spring Boot as the sole owner of persistence and business logic — the Next.js app is a client, not a second source of truth.",
      "Persist vehicle configurations and orders instead of holding them in client state.",
      "Support authenticated customer dashboards and role-based administrative operations.",
      "Model demo-drive scheduling and mock payments as real backend workflows, not UI-only mockups.",
      "Present this as clearly educational, with no implied affiliation to any vehicle manufacturer.",
    ],
    architectureSummary:
      "A Next.js/TypeScript frontend renders the catalog, configurator, and customer dashboard, calling a Spring Boot backend over REST. Spring Security enforces JWT-based authentication and role-based access control for customer versus administrative operations. Orders and configurations persist in PostgreSQL, Redis caches catalog and session data, and Kafka carries order and scheduling events to keep the demo-drive and notification flows decoupled from the request path.",
    architectureFlow: [
      { id: "frontend", label: "Next.js Client", description: "Renders the vehicle catalog, configurator, and authenticated customer dashboard." },
      { id: "gateway", label: "Spring Boot API", description: "Owns all persistence and business logic behind REST endpoints secured by Spring Security." },
      { id: "auth", label: "JWT / RBAC", description: "Authenticates requests and separates customer access from administrative operations." },
      { id: "events", label: "Kafka Events", description: "Order placement and demo-drive scheduling publish events consumed asynchronously." },
      { id: "cache", label: "Redis Cache", description: "Caches catalog data and session state to keep read-heavy pages fast." },
      { id: "db", label: "PostgreSQL", description: "Durable storage for vehicle configurations, orders, and scheduling records." },
    ],
    capabilities: [
      "Identity and access (JWT, RBAC)",
      "Vehicle catalog",
      "Vehicle configuration",
      "Orders (persisted, not client-only)",
      "Demo-drive scheduling",
      "Mock payments",
      "Customer dashboard",
      "Administrative operations",
    ],
    engineeringDecisions: [
      {
        decision: "Spring Boot owns persistence and business logic; Next.js is a client only.",
        rationale:
          "Splitting persistence between a Node-based ORM and a Java backend invites two sources of truth. Consolidating business logic in Spring Boot keeps the data model and authorization rules in one place.",
      },
      {
        decision: "No Prisma or Node-side ORM in the final architecture.",
        rationale:
          "Once Spring Boot owns the data layer, a second ORM on the frontend would duplicate schema definitions and create drift between the two.",
      },
      {
        decision: "Kafka for order and scheduling events instead of synchronous calls between modules.",
        rationale:
          "Order placement, demo-drive scheduling, and notifications don't need to block on each other — publishing events keeps each module independently deployable.",
      },
    ],
    reliabilityConsiderations: [
      "Order creation is idempotent so a retried checkout request can't create duplicate orders.",
      "Redis cache invalidation is tied to catalog and configuration writes to avoid serving stale vehicle data.",
    ],
    securityConsiderations: [
      "Spring Security enforces JWT validation and RBAC on every administrative endpoint.",
      "Mock payment flows never handle real card data — they simulate the workflow only.",
    ],
    testingStrategy: [
      "JUnit tests for Spring Boot services, controllers, and security configuration.",
      "Frontend component tests for the configurator and dashboard flows.",
    ],
    observabilityStrategy: [
      "Structured logging across the Spring Boot backend for order and scheduling events.",
      "Health and readiness endpoints wired for container orchestration checks.",
    ],
    limitations: [
      "AWS deployment is planned but not yet live — the current environment target is Docker Compose and Kubernetes manifests.",
      "Payment processing is intentionally mocked; no real payment provider is integrated.",
    ],
    roadmap: [
      "Deploy to AWS with managed PostgreSQL and Kafka.",
      "Expand administrative reporting on orders and scheduling.",
      "Add automated visual regression tests for the configurator.",
    ],
    githubUrl: "https://github.com/parvadushyantkumarbarot-1/Tesla-Clone-App",
    featured: true,
  },

  // 5. Grammar Autocorrector ---------------------------------------------------
  {
    slug: "grammar-autocorrector",
    title: "Grammar Autocorrector",
    shortDescription:
      "Grammar and tone-preserving rewriting tool with side-by-side comparison and explained corrections.",
    longDescription:
      "A focused writing tool that corrects grammar and spelling while preserving meaning and tone, offers formal/concise/professional rewrite modes, explains what changed, and keeps a correction history — deliberately scoped without retrieval or vector search.",
    status: "Planned Rebuild",
    categories: ["AI Infrastructure", "Full Stack"],
    stack: [
      "Python",
      "FastAPI",
      "OpenAI API",
      "LangChain",
      "PostgreSQL",
      "Redis",
      "HTML",
      "CSS",
      "JavaScript",
      "Docker",
      "GitHub Actions",
      "Pytest",
    ],
    problem:
      "Generic grammar tools either over-correct and flatten tone, or under-explain why a change was made — this project is scoped narrowly to correct writing while preserving voice, and to show its work.",
    goals: [
      "Correct grammar and spelling without changing intended meaning.",
      "Preserve or intentionally shift tone (formal, concise, professional) as a selectable mode.",
      "Explain each change instead of returning a silent rewrite.",
      "Show a side-by-side comparison of original and corrected text.",
      "Keep the scope deliberately narrow — no retrieval, no vector search.",
    ],
    architectureSummary:
      "A FastAPI backend calls the OpenAI API through LangChain with structured-output prompts constrained to grammar correction and tone-preserving rewriting. Corrections and their explanations are cached in Redis for repeated inputs and persisted to PostgreSQL as history. A lightweight HTML/CSS/JavaScript frontend renders the side-by-side comparison and mode selection.",
    architectureFlow: [
      { id: "input", label: "Text Input", description: "User submits text and selects a rewrite mode: formal, concise, or professional." },
      { id: "llm", label: "Structured LLM Correction", description: "LangChain constrains the OpenAI API response to structured grammar and tone corrections." },
      { id: "cache", label: "Redis Cache", description: "Repeated inputs are served from cache instead of re-invoking the model." },
      { id: "history", label: "Correction History", description: "Corrections and explanations persist to PostgreSQL for later review." },
      { id: "compare", label: "Side-by-Side Comparison", description: "The frontend renders original and corrected text together with explanations." },
    ],
    capabilities: [
      "Grammar and spelling correction",
      "Meaning-preserving rewriting",
      "Tone-preserving rewriting",
      "Formal, concise, and professional modes",
      "Change explanations",
      "Side-by-side comparison",
      "Correction history",
      "Redis caching",
      "Rate limiting",
      "Structured LLM output",
      "Failure fallback",
      "Batch correction",
      "Evaluation dataset",
    ],
    engineeringDecisions: [
      {
        decision: "Structured LLM output instead of free-form text generation.",
        rationale:
          "Constraining the model to a structured schema (corrected text + explanation + diff) makes the response renderable and testable, rather than parsing prose.",
      },
      {
        decision: "Deliberately no RAG or vector search.",
        rationale:
          "This tool corrects the text it's given — it doesn't need external documents. Adding retrieval would add complexity without solving the actual problem.",
      },
    ],
    reliabilityConsiderations: [
      "A failure fallback returns the original text with a clear error state rather than a partially corrected result.",
      "Rate limiting protects the OpenAI API budget from repeated identical requests.",
    ],
    securityConsiderations: [
      "Input length limits and sanitization before text reaches the LLM call.",
      "Rate limiting per client to prevent abuse of the correction endpoint.",
    ],
    testingStrategy: [
      "Pytest unit tests for the structured-output schema and fallback path.",
      "An evaluation dataset of sample sentences to check correction quality doesn't regress between prompt changes.",
    ],
    observabilityStrategy: [
      "Structured logs for correction requests, cache hits, and fallback triggers.",
    ],
    limitations: [
      "This project is planned for rebuild; the current repository reflects an earlier iteration and does not yet include the full structured-output and history feature set described here.",
    ],
    roadmap: [
      "Rebuild the backend around structured LLM output and Redis caching.",
      "Add the evaluation dataset for regression-checking correction quality.",
      "Add batch correction for multi-paragraph input.",
    ],
    githubUrl: "https://github.com/parvadushyantkumarbarot-1/Grammar-Autocorrector",
    featured: false,
  },

  // 6. Agricultural Climate Analytics ------------------------------------------
  {
    slug: "agricultural-climate-analytics",
    title: "Agricultural Climate Analytics",
    shortDescription:
      "Cloud data-processing and visualization application for regional rainfall and temperature analysis.",
    longDescription:
      "A serverless data pipeline that ingests regional climate CSVs, validates and stores them as time series, and renders rainfall-versus-temperature comparisons and outlier detection through Plotly visualizations behind a FastAPI service.",
    status: "Planned Rebuild",
    categories: ["Data", "Cloud", "Backend"],
    stack: [
      "Python",
      "Pandas",
      "Plotly",
      "Preswald",
      "FastAPI",
      "PostgreSQL",
      "TimescaleDB",
      "AWS S3",
      "AWS Lambda",
      "AWS SQS",
      "Docker",
      "GitHub Actions",
      "Pytest",
    ],
    problem:
      "Regional agricultural planning needs rainfall and temperature trends compared across locations and time, but raw CSV exports from climate stations aren't validated, time-indexed, or visualized on their own.",
    goals: [
      "Accept CSV uploads without blocking on preprocessing.",
      "Validate datasets before they're treated as trustworthy time series.",
      "Store rainfall and temperature data as proper time series, not flat rows.",
      "Compare regions and detect outliers rather than just plotting raw values.",
      "Serve filtered data through an API in addition to visualizations.",
    ],
    architectureSummary:
      "Uploaded CSVs are stored in S3 and trigger an AWS Lambda function that validates schema and queues a preprocessing job on SQS. A worker normalizes the data into TimescaleDB as time series. A FastAPI service exposes filtered queries and export endpoints, and Plotly renders rainfall-versus-temperature and regional-comparison visualizations, starting with the original rainfall-versus-temperature dashboard concept.",
    architectureFlow: [
      { id: "upload", label: "CSV Upload", description: "Raw climate files are uploaded and stored in S3." },
      { id: "lambda", label: "Serverless Validation", description: "An AWS Lambda function validates schema and queues preprocessing." },
      { id: "queue", label: "AWS SQS", description: "Validated datasets are queued for asynchronous normalization." },
      { id: "timeseries", label: "TimescaleDB", description: "Rainfall and temperature readings are stored as indexed time series." },
      { id: "api", label: "FastAPI Access", description: "Filtered queries and exports are served through a REST API." },
      { id: "viz", label: "Plotly Visualizations", description: "Rainfall-versus-temperature and regional comparisons render as interactive charts." },
    ],
    capabilities: [
      "CSV upload",
      "Raw-file storage",
      "Serverless preprocessing",
      "Asynchronous processing",
      "Dataset validation",
      "Time-series storage",
      "Location, rainfall, and temperature filters",
      "Regional comparisons",
      "Outlier detection",
      "Plotly visualizations",
      "FastAPI access",
      "Filtered-data export",
    ],
    engineeringDecisions: [
      {
        decision: "AWS Lambda for validation instead of a synchronous upload handler.",
        rationale:
          "Validation cost scales with file size unpredictably. A serverless function keeps the upload endpoint responsive regardless of dataset size.",
      },
      {
        decision: "TimescaleDB instead of plain relational tables for climate readings.",
        rationale:
          "Rainfall and temperature data is fundamentally time-indexed. Hypertables make range queries and regional comparisons efficient as history accumulates.",
      },
    ],
    reliabilityConsiderations: [
      "SQS retries failed preprocessing jobs with backoff before routing to a dead-letter queue.",
      "Schema validation rejects malformed CSVs before they reach time-series storage.",
    ],
    securityConsiderations: [
      "Uploads are scoped per authenticated user; S3 objects are not publicly readable.",
    ],
    testingStrategy: [
      "Pytest unit tests for CSV validation and outlier-detection logic.",
      "Integration tests for the Lambda-to-SQS-to-worker pipeline using local stubs.",
    ],
    observabilityStrategy: [
      "Structured logs for validation failures and processing latency per file.",
    ],
    limitations: [
      "This project is planned for rebuild; the current repository reflects an earlier prototype and does not yet include the serverless pipeline described here.",
    ],
    roadmap: [
      "Rebuild ingestion around S3 + Lambda + SQS.",
      "Migrate storage to TimescaleDB.",
      "Add regional outlier detection and comparison views.",
    ],
    githubUrl: "https://github.com/parvadushyantkumarbarot-1/Agri-Analysis",
    featured: false,
  },

  // 7. Foodiee Recipe Platform ---------------------------------------------------
  {
    slug: "foodiee-recipe-platform",
    title: "Foodiee Recipe Platform",
    shortDescription:
      "Responsive recipe discovery and management platform with search, favorites, ratings, and admin workflows.",
    longDescription:
      "A recipe discovery and management platform covering authentication, catalog search and filtering, favorites and personal collections, ratings and reviews, and administrative recipe management with image uploads.",
    status: "Planned Rebuild",
    categories: ["Full Stack", "Backend"],
    stack: [
      "Python",
      "Django",
      "Django REST APIs",
      "MySQL",
      "Redis",
      "HTML",
      "CSS",
      "JavaScript",
      "JWT",
      "AWS S3",
      "Docker",
      "GitHub Actions",
    ],
    problem:
      "Recipe content is easy to publish but hard to make discoverable — this project focuses on search, filtering, and personal organization (favorites, collections, ratings) rather than just a content list.",
    goals: [
      "Support authenticated registration, login, and personal collections.",
      "Make the recipe catalog searchable and filterable by category and ingredients.",
      "Support favorites, ratings, and reviews as first-class data, not UI-only state.",
      "Give administrators a dedicated recipe-management workflow.",
      "Store recipe images in object storage rather than the application database.",
    ],
    architectureSummary:
      "A Django REST API backs authentication, the recipe catalog, favorites, ratings, and administrative management, with MySQL as the system of record and Redis caching catalog queries and pagination. Recipe images upload to AWS S3. A responsive HTML/CSS/JavaScript frontend consumes the API for search, filtering, and personal collections.",
    architectureFlow: [
      { id: "auth", label: "Registration & Login", description: "JWT-based authentication backs personal collections and admin access." },
      { id: "catalog", label: "Recipe Catalog", description: "Django REST APIs serve recipes with categories, ingredients, and instructions." },
      { id: "search", label: "Search & Filtering", description: "Catalog queries support search and category/ingredient filters, cached in Redis." },
      { id: "engagement", label: "Favorites & Ratings", description: "Favorites, ratings, and reviews persist per user in MySQL." },
      { id: "media", label: "Image Uploads (S3)", description: "Recipe images are stored in S3 rather than the application database." },
      { id: "admin", label: "Administrative Management", description: "A dedicated admin workflow manages recipe content and moderation." },
    ],
    capabilities: [
      "Registration and login",
      "Recipe catalog",
      "Ingredients and instructions",
      "Categories",
      "Search and filtering",
      "Favorites",
      "Ratings and reviews",
      "Personal collections",
      "Administrative recipe management",
      "Image uploads",
      "Caching",
      "Pagination",
      "Responsive UI",
    ],
    engineeringDecisions: [
      {
        decision: "Django REST Framework for the catalog and admin surface.",
        rationale:
          "Django's built-in admin and ORM reduce the boilerplate needed for a content-management-heavy platform like a recipe catalog.",
      },
      {
        decision: "Images in S3, never in MySQL.",
        rationale:
          "Object storage is built for binary assets; keeping images out of the relational database keeps backups and queries fast.",
      },
    ],
    reliabilityConsiderations: [
      "Redis caches paginated catalog queries with explicit invalidation on recipe edits.",
    ],
    securityConsiderations: [
      "JWT authentication gates favorites, reviews, and administrative endpoints.",
      "Image uploads are validated for type and size before reaching S3.",
    ],
    testingStrategy: [
      "Django test suite covering models, serializers, and permissions.",
    ],
    observabilityStrategy: [
      "Structured logging for authentication and administrative actions.",
    ],
    limitations: [
      "This project is planned for rebuild; a public repository has not yet been configured.",
    ],
    roadmap: [
      "Configure and publish the rebuilt repository.",
      "Implement search, favorites, and ratings against Django REST Framework.",
      "Add S3-backed image uploads.",
    ],
    featured: false,
  },

  // 8. Software Portfolio ---------------------------------------------------
  {
    slug: "software-portfolio",
    title: "Software Portfolio",
    shortDescription:
      "This portfolio — a data-driven Next.js site presenting engineering experience, architecture, and project case studies.",
    longDescription:
      "The portfolio being built through this project: a typed content model drives the project archive and case-study routes, with a restrained architecture-preview panel, filterable project archive, and honest project statuses instead of a generic template.",
    status: "Active Development",
    categories: ["Full Stack"],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API",
      "Vercel",
      "GitHub Actions",
    ],
    problem:
      "Most engineering portfolios are either a static résumé PDF or a generic template with identical project cards and no real engineering depth — this site treats the portfolio itself as a small software project with a typed data model and honest status reporting.",
    goals: [
      "Centralize all content in a typed data file instead of scattering copy across components.",
      "Generate the project archive and case-study routes from that data.",
      "Report project status honestly, including 'In Development' and 'Planned Rebuild' states.",
      "Fetch GitHub repository metadata as an enhancement, never a hard dependency.",
      "Support light and dark themes without relying on a photograph for identity.",
    ],
    architectureSummary:
      "Next.js App Router renders server components by default, sourcing all copy from a typed `src/data/portfolio.ts` model. The project archive and case-study pages are generated from that data. A server-side GitHub API integration enhances the build log with public repository metadata, with a static fallback if the API is unavailable.",
    architectureFlow: [
      { id: "data", label: "Typed Data Model", description: "src/data/portfolio.ts is the single source of truth for experience, projects, and skills." },
      { id: "routes", label: "Generated Routes", description: "The project archive and case-study pages are generated from the typed data." },
      { id: "github", label: "GitHub API (enhancement)", description: "Public repository metadata is fetched server-side and cached, never blocking rendering." },
      { id: "render", label: "Server Components", description: "Pages render as server components by default; client components are used only where interaction requires them." },
    ],
    capabilities: [
      "Typed project and experience data model",
      "Filterable project archive",
      "Generated case-study routes",
      "Light and dark themes",
      "Server-side GitHub build log with static fallback",
      "Resume preview and download",
    ],
    engineeringDecisions: [
      {
        decision: "A single typed data file instead of per-page content.",
        rationale:
          "Keeping project and experience content in one typed model means the archive, case studies, and home page sections can never drift out of sync with each other.",
      },
      {
        decision: "GitHub API calls happen server-side only, with a static fallback.",
        rationale:
          "A client-side call would need to expose a token or accept a low unauthenticated rate limit. Server-side fetching with revalidation keeps credentials off the client and keeps the page rendering even if the API fails.",
      },
    ],
    reliabilityConsiderations: [
      "A failed GitHub API call falls back to the static project data instead of breaking the build log section.",
    ],
    securityConsiderations: [
      "No API keys are required for core portfolio functionality.",
    ],
    testingStrategy: [
      "Vitest unit tests for the project-filtering logic and data-model integrity.",
      "React Testing Library smoke tests for navigation, theme toggling, and the resume modal.",
    ],
    observabilityStrategy: [
      "Not applicable at production scale — this is a static-first marketing site, not a monitored service.",
    ],
    limitations: [
      "The résumé PDF must be added at the configured path before download/preview actions are enabled.",
    ],
    roadmap: [
      "Connect a custom domain once deployed.",
      "Add a lightweight analytics integration that respects visitor privacy.",
    ],
    githubUrl: "https://github.com/parvadushyantkumarbarot-1/Software-Portfolio",
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getAdjacentProjects(slug: string): {
  previous: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: null, next: null };
  const previous = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;
  return { previous, next };
}
