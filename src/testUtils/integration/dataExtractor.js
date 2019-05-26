import { path, map, pick, assocPath } from 'ramda'

const getPropsFromList = (data, propPath, props) => {
    const items = path(propPath, data);
    const structuredData = map(pick(props), items);

    return assocPath(propPath, structuredData, {})
};

export default getPropsFromList;
