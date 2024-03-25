const fs = require('fs').promises;
const pdf = require('pdf-parse');

async function extrairMetadadosDoPDF(file) {
    try {
        // Lendo o arquivo PDF
        const dataBuffer = await fs.readFile(file);

        // Convertendo o buffer de dados para texto
        const data = await pdf(dataBuffer);

        const metadata = {
            title: data.info?.Title ?? null,
            author: data.info?.Author ?? null,
            doi: data.metadata?._metadata?.['dc:identifier'] ?? null,
            publisher: data.metadata?._metadata?.['dc:publisher'] ?? null,
            subject: data.metadata?._metadata?.['dc:subject'] ?? null,
            issn: data.metadata?._metadata?.['prism:issn'] ?? null,
            creator: data.metadata?._metadata?.['dc:creator'] ?? null,
            description: data.metadata?._metadata?.['dc:description'] ?? null,
            producer: data.info?.Producer ?? null,
            creationDate: data.info?.CreationDate ?? null,
            modDate: data.info?.ModDate ?? null
        };
        return metadata;
    } catch (error) {
        console.error('Erro ao extrair metadados do PDF:', error);
        throw error;
    }
}

module.exports.extrairMetadadosDoPDF = extrairMetadadosDoPDF;