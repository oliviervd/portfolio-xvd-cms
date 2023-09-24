import {CollectionConfig} from "payload/types";

const People: CollectionConfig = {
    slug: "people",
    fields: [
        {
            name: "company",
            defaultValue: "NO_COMPANY",
            label: "company",
            type: "text",
        },
        {
            name: "firstName",
            label: "first name",
            type: "text",
        },
        {
            name: "lastName",
            label: "last name",
            type: "text",
        },
        {
            name: "website",
            label: "website",
            type: "text"
        }
    ]
}

export default People