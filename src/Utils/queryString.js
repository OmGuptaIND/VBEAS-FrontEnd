const queryString = (params) => {
    var query = Object.keys(params).map(key => key + '=' + params[key]).join('&');

    return query;
}

export default queryString