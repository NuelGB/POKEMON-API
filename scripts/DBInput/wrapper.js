
function URLToInt(object , linkLen){
    object.id = Number(object.url.slice(linkLen,-1));
}


processData = {
    firmLen : "https://pokeapi.co/api/v2/berry-firmness/".length,
    flavLen : "https://pokeapi.co/api/v2/berry-flavor/".length,
    itemLen : "https://pokeapi.co/api/v2/item/".length,
    ngtLen : "https://pokeapi.co/api/v2/type/".length,
    langLen : "https://pokeapi.co/api/v2/language/".length,
    verLen : "https://pokeapi.co/api/v2/version/".length,

    berry : function(data){
        URLToInt(data.firmness,this.firmLen);
        URLToInt(data.item,this.itemLen);
        URLToInt(data.natural_gift_type , this.ngtLen);
        for (let i of data.flavors) {
            URLToInt(i.flavor,this.flavLen);
        }
    },

    ["contest-effect"] : function(data){
        for (let i of data.effect_entries){
            URLToInt(i.language,this.langLen);
        }
        for (let i of data.flavor_text_entries){
            URLToInt(i.language,this.langLen);
            if (i.version)URLToInt(i.version, this.verLen);
        }
    }
}

exports.processData = processData;