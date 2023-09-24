import {CollectionConfig} from "payload/types";

const People: CollectionConfig = {
    slug: "people",
    fields: [
        {
            name: "firstName",
            label: "first name",
            type: "text",
            required: true
        },
        {
            name: "lastName",
            label: "last name",
            type: "text",
            required: true
        }
    ]
}

export default People