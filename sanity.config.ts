import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import post from './src/sanity/schemas/post';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'default',
  title: 'Al-Takeef HVAC Studio',

  projectId,
  dataset,

  basePath: '/studio', // This matches the Next.js catch-all route page location

  plugins: [structureTool()],

  schema: {
    types: [post],
  },
});
