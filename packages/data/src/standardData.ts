import { DataObject } from "./interfaces";

export const standardData : DataObject = {
    month: [
        { name: "January", shortName: "Jan", numeric: 1, days: 31 },
        // Not messing with leap years...
        { name: "February", shortName: "Feb", numeric: 2, days: 28 },
        { name: "March", shortName: "Mar", numeric: 3, days: 31 },
        { name: "April", shortName: "Apr", numeric: 4, days: 30 },
        { name: "May", shortName: "May", numeric: 5, days: 31 },
        { name: "June", shortName: "Jun", numeric: 6, days: 30 },
        { name: "July", shortName: "Jul", numeric: 7, days: 31 },
        { name: "August", shortName: "Aug", numeric: 8, days: 31 },
        { name: "September", shortName: "Sep", numeric: 9, days: 30 },
        { name: "October", shortName: "Oct", numeric: 10, days: 31 },
        { name: "November", shortName: "Nov", numeric: 11, days: 30 },
        { name: "December", shortName: "Dec", numeric: 12, days: 31 },
    ],
}