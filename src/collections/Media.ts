import { CollectionConfig } from 'payload/types';
import path from "path";

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticDir: path.resolve(__dirname, "../../media"),
    staticURL: "/media",
    //disableLocalStorage: true  todo:add S3.
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
    {
      name: 'caption',
      type: "text"
    },
    {
      name: 'credits',
      type: "text"
    }
  ],
  hooks: {
    beforeValidate:[
      (req):void => {
        const image=req.data;
        // make sure uploaded image is big enough.
        //todo: add limit of how big an image can be (image size)? - encourage to use bitmap? - this could be an action that is documented in the sustainability manifest.
        if (image && image.width < 640) {
          throw new Error('Image must be at least 640px wide')
        }
      }
    ]
  },
}

export default Media;