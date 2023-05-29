import { buildConfig } from 'payload/config';
import path from 'path';

import Users from './collections/Users';
import Media from "./collections/Media";
import Project from "./collections/Projects";
import Tags from "./collections/Tags";
import People from "./collections/People";

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Project,
    Tags,
    People,
    Media
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
