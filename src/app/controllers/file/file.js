const emlToPdf = require('eml-pdf-image');
const docToPdf = require('doc-pdf-image')

class Arquivo { 
    constructor() {}

    async arquivoTeste(req, res) {
        try {
            const { path } = req.file;
        
            let conversao = await emlToPdf.emlToPdf(path, path.replace('.eml', '.pdf'));
            res.status(200).send(conversao);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    async arquivoTeste2(req, res) {
        try {
            const { path } = req.file;
        
            let conversao = await emlToPdf.emlToImage(path);
            res.status(200).send(conversao);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    async arquivoDoc(req, res) {
        try {
            const { path } = req.file;
        
            let conversao = await docToPdf.docToPdf(path);
            res.status(200).send(conversao);
        } catch (error) {
            res.status(400).send(error);
        }
    }
} 

module.exports = new Arquivo();
