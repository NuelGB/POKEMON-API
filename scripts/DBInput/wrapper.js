
function URLToInt(object , linkLen){
    object.id = Number(object.url.slice(linkLen,-1));
}


processData = {
    berry : function(data){
        let firmLen = "https://pokeapi.co/api/v2/berry-firmness/".length;
        let flavLen = "https://pokeapi.co/api/v2/berry-flavor/".length;
        let itemLen = "https://pokeapi.co/api/v2/item/".length;
        let ngtLen = "https://pokeapi.co/api/v2/type/".length;
        
        URLToInt(data.firmness,firmLen);
        URLToInt(data.item,itemLen);
        URLToInt(data.natural_gift_type , ngtLen);
        for (let i of data.flavors) {
            URLToInt(i.flavor,flavLen);
        }
    }
}

exports.processData = processData;