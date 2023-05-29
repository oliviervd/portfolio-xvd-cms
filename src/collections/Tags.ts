import { CollectionConfig } from 'payload/types';

const Tags: CollectionConfig = {
    slug: "tags",
    fields: [
        {
            name: "tag",
            label: "tag",
            type: "text",
            required: true
        }
    ]
}

export default Tags