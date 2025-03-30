// URLToInt is a wrapper function that takes in an object and replaces all URL attributes to ID
function URLToInt(obj) {
    // Loop over every attribute of the object
    for (const i in obj) {
        // type is a reserved mongoose keyword. Change to type_
        if (i === 'type') {
            obj.type_ = obj.type;
            delete obj.type;
        }

        // If attribute is url, then we assign an id to the object based on the number at the end
        // of the url
        if (i === 'url' && obj[i] !== null) {
            obj.id = Number(obj.url.split('/')[obj.url.split('/').length - 2]);
            continue;
        }

        // If the attribute is an array, loop over the array to process the objects
        if (Array.isArray(obj[i])) {
            for (const item of obj[i]) {
                // If the item is an object, recursively run URLToInt on the object
                if (typeof item === 'object') {
                    URLToInt(item);
                }
            }
        }

        // If obj[i] is an object, simply recursively call URLToInt on the object
        if (typeof obj[i] === 'object') {
            URLToInt(obj[i]);
        }
    }
}

module.exports = URLToInt;
