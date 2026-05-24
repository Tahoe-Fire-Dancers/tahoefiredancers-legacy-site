import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  apiVersion: "2024-10-22", // use current date (YYYY-MM-DD) to target the latest API version

  // Use environment variables for production deployment
  projectId: import.meta.env.SANITY_PROJECT_ID || "8n6kitqe",
  dataset: import.meta.env.SANITY_DATASET || "production",
  token: import.meta.env.SANITY_API_TOKEN || "", // leave blank if you are not using any token
};

export const client = createClient(config);
