import { buildConfig } from 'payload/config';
import path from 'path';
import {cloudStorage} from "@payloadcms/plugin-cloud-storage";
import {s3Adapter} from "@payloadcms/plugin-cloud-storage/s3";

import Users from './collections/Users';
import Media from "./collections/Media";
import Project from "./collections/Projects";
import Tags from "./collections/Tags";
import People from "./collections/People";

export default buildConfig({
  serverURL:  process.env.PAYLOAD_URL,
  plugins: [
      cloudStorage({
        collections: {
          'media': {
            adapter: s3Adapter({
              config: {
                endpoint: process.env.S3_ENDPOINT,
                region: process.env.S3_REGION,
                credentials: {
                  accessKeyId: process.env.S3_ACCESS_KEY_ID,
                  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
                },
              },
              bucket: process.env.S3_BUCKET
            })
          }
        }
      })
  ],
  cors: [
    'http://localhost:3000',
    'https://p02--admin--wjrlktvqwrfv.code.run/',
  ],
  csrf: [
    'http://localhost:3000',
    'https://p02--admin--wjrlktvqwrfv.code.run/',
  ],

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
