import { path, map, pick, assocPath } from 'ramda'

<<<<<<< HEAD
const getPropsFromList = (data, propPath, props) => {
=======
const getPropFromList = (data, propPath, props) => {
>>>>>>> Finish members tests
    const items = path(propPath, data)
    const structuredData = map(pick(props), items);

    return assocPath(propPath, structuredData, {})
}

export {
<<<<<<< HEAD
    getPropsFromList
=======
    getPropFromList
>>>>>>> Finish members tests
}