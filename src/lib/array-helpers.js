import { compose } from 'redux'

const sortBy = (type, field) => {
    switch (type) {
        case "date" :
            return (a, b) => new Date(b[field]) - new Date(a[field]);
        case "string" :
            return (a, b) => (a[field] < b[field]) ? -1 : 1;
        default:
            return (a, b) => b[field] - a[field];
    }
}

export const sortFunction = sort =>
    (sort === "SORTED_BY_TITLE") ?
        sortBy("string", "title") :
        (sort === "SORTED_BY_RATING") ?
            sortBy("number", "rating") :
            sortBy("date", "timestamp")

const getSortState = (sortBy = "date",
                    stateHash = {
                        date: "SORTED_BY_DATE",
                        title: "SORTED_BY_TITLE",
                        rating: "SORTED_BY_RATING"
                    }) => stateHash[sortBy]

const locateSortFunction = compose(
    sortFunction,
    getSortState
)

export const sortColors = (colors, sortBy) => compose(
    fn => [...colors].sort(fn),
    locateSortFunction
)(sortBy)

export const getFirstArrayItem = array => array[0]

export const filterArrayById = (array, id) =>
    array.filter(item => item.id === id)

export const findById = compose(
    getFirstArrayItem,
    filterArrayById
)