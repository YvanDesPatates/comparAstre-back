const connection = require('../DB/connectionDB')
const {Astre} = require("../model/Astre");

async function getAll() {
    return await connection.getAllData(connection.astresUrl)
}

async function saveAstre(astre) {
    astre = new Astre(astre);
    console.log("save : \n" + astre)
    return await connection.saveObject(astre, connection.astresUrl)
}

module.exports = {
    getAllAstres: getAll,
    saveAstre: saveAstre,
}