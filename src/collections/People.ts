import {CollectionConfig} from "payload/types";

const People: CollectionConfig = {
    slug: "people",
    admin: {
        useAsTitle: "company"
    },
    fields: [
        {
            name: "company",
            defaultValue: "NO_COMPANY",
            label: "company",
            type: "text",
            //required: true,
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
        },
        {
            name: "website",
            label: "website",
            type: "text",
            admin: {
                description: "website to refer to when clicked (optional)"
            }
        }
    ]
}

export default People