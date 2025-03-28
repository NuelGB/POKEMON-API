exports.NamedAPIResource = {
    name: String,
    id: Number,
};

exports.names = [
    {
        name: String,
        language: exports.NamedAPIResource,
    },
];
exports.descriptions = [
    {
        description: String,
        language: exports.NamedAPIResource,
    },
];
