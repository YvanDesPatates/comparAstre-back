const connexion = require('../BD/connexionBD')
const {Astre} = require("../model/Astre")
const fixtures = require("./fixtures")

async function getAll() {
    return await connexion.getAllData(connexion.astresUrl)
}

async function saveAstre(astreData) {
    let astre
    try {
        astre = new Astre(astreData)
    } catch (err){
        console.log("erreur controleur : " + err)
        return {code: "400", message: err.message}
    }
    return await connexion.saveObject(astre, connexion.astresUrl)
}

async function getAstreById(astreID) {
    return await connexion.getByID(astreID)
}

async function getAstreByField(field, regexName) {
    return await connexion.getByField(field, regexName)
}

async function loadFixtures() {
    let astres = fixtures.getFixtures()
    return await connexion.saveObject(astres, connexion.astresUrl)
}

module.exports = {
    getAllAstres: getAll,
    saveAstre: saveAstre,
    getAstreByID: getAstreById,
    getAstreByField: getAstreByField,
    loadFixtures: loadFixtures
}