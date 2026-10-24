/*
  Content Collections Configuration
  ==================================
  This file defines the STRUCTURE of your content.

  Think of it as a template: it says "every project must have
  a title, a description, and optionally some tags."

  Astro will check your Markdown files against these rules
  and warn you if something is missing.

  HOW TO ADD A NEW COLLECTION:
  1. Define a new collection below (copy the projects example)
  2. Create a matching folder in src/content/
  3. Add Markdown files to that folder
*/

import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// --- Projects Collection ---
// Each file in src/content/projects/ is a portfolio project.
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    // Required fields — every project must have these
    title: z.string(),
    description: z.string(), // Short summary (1-2 sentences)
    category: z.string(), // e.g. "Web Application", "AI Solution"

    // Optional fields — include these when you have them
    tags: z.array(z.string()).default([]), // Technologies used
    liveUrl: z.string().url().optional(), // Link to live site
    githubUrl: z.string().url().optional(), // Link to source code
    featured: z.boolean().default(false), // Show on home page?
    order: z.number().default(0), // Sort order (lower = first)

    // Project type — be honest about what the project is
    // "independent" = you built it yourself (not for a paying client)
    // "client"      = built for a paying client
    // "open-source" = open-source contribution
    projectType: z
      .enum(["independent", "client", "open-source"])
      .default("independent"),
  }),
});

// Export all collections
export const collections = { projects };
