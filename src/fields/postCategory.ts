import {Field} from "payload/types";

const projectCategory:Field = {
    name: "projectCategory",
    label: "project category",
    type: "select",
    required: true,
    options: [
        {
            label: "narrative content",
            value: "narrative-content"
        },
        {
            label: "branded content",
            value: "branded-content"
        }
    ]
}

export default projectCategory