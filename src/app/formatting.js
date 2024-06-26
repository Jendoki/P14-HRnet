function toNamesList(list) {
    return list.map(item => item.name);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
}

const formatFunctions = { toNamesList, formatDate }

export default formatFunctions;