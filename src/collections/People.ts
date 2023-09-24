import {CollectionConfig} from "payload/types";

const People: CollectionConfig = {
    slug: "people",
    admin: {
        useAsTitle: "company"
    },
    fields: [
        {
            name: "company",
            label: "company",
            type: "text",
            required: true,
            admin: {
                description: "company this person works for"
            }
        },
        {
            name: "firstName",
            label: "first name",
            type: "text",
            required: false
        },
        {
            name: "lastName",
            label: "last name",
            type: "text",
            required: false
        }
    ]
}

export default People