export interface FocusArea {
  title: string;
  description: string;
  icon: "server" | "network" | "cloud" | "workflow" | "layers" | "brain";
}

export const focusAreas: FocusArea[] = [
  {
    title: "Backend Systems",
    description:
      "REST and gRPC services in Python and Java, designed around clear API contracts and predictable failure modes.",
    icon: "server",
  },
  {
    title: "Distributed Architecture",
    description:
      "Event-driven services connected through Kafka and message queues instead of brittle synchronous call chains.",
    icon: "network",
  },
  {
    title: "Cloud-Native Infrastructure",
    description:
      "Containerized deployments on Kubernetes and AWS, provisioned with Terraform and shipped through CI/CD.",
    icon: "cloud",
  },
  {
    title: "Event-Driven Processing",
    description:
      "Asynchronous worker pools that process millions of events a day with retries, idempotency, and dead-letter handling.",
    icon: "workflow",
  },
  {
    title: "Platform Engineering",
    description:
      "Observability, testing, and deployment automation that make a system operable, not just functional.",
    icon: "layers",
  },
  {
    title: "Production AI Infrastructure",
    description:
      "Retrieval-augmented generation, vector search, and LLM evaluation built for reliability, not demos.",
    icon: "brain",
  },
];
