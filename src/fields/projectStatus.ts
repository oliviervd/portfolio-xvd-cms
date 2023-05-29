import {Field} from "payload/types";

const projectStatus: Field = {
    // field to show status of current project.
    name: "projectStatus",
    required: true,
    type: "select",
    options: [
        {
            label:"post production",
            value:"post-production"
        },
        {
            label:"production",
            value:"production"
        },
        {
            label:"pre production",
            value:"pre-production"
        },
        {
            label:"released",
            value:"released"
        }
    ]
}

export default projectStatus