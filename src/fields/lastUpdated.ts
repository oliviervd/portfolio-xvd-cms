import {Field} from "payload/types";

const lastUpdate: Field = {
    name: "lastUpdated",
    label: "last update",
    type: "date",
    required: true,
    admin: {
        position: "sidebar"
    }
}

export default lastUpdate