import {Field} from "payload/types";

const lastUpdate: Field = {
    name: "lastUpdated",
    label: "last update",
    type: "date",
    required: true,
    admin: {
        date: {
            pickerAppearance: "dayOnly"
        },
        position: "sidebar"
    }
}

export default lastUpdate