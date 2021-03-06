const { omitBy } = require('lodash');

const isHasValue = val => !val;

class MetadataSerializer {

    static serialize(data) {

        const result = {
            data: []
        };
        if (data) {
            let serializeData = data;
            if (!Array.isArray(data)) {
                serializeData = [data];
            }
            serializeData.forEach((el) => {
                result.data.push({
                    id: el._id,
                    type: 'metadata',
                    attributes: omitBy({
                        dataset: el.dataset,
                        application: el.application,
                        resource: el.resource,
                        language: el.language,
                        name: el.name,
                        altName: el.altName || '',
                        description: el.description,
                        citation: el.citation,
                        license: el.license,
                        variableMeasured: el.variableMeasured,
                        info: el.info,
                        dataLineage: el.dataLineage,
                        columns: el.columns,
                        applicationProperties: el.applicationProperties,
                        createdAt: el.createdAt,
                        updatedAt: el.updatedAt,
                        creator: el.creator,
                        source: el.source,
                        identifier: el.identifier,
                        keywords: el.keywords,
                        version: el.version,
                        url: el.url,
                        distribution: el.distribution,
                        spatialCoverage: el.spatialCoverage,
                        temporalCoverage: el.temporalCoverage,
                        status: el.status
                    }, isHasValue)
                });
            });
        }
        return result;
    }

}

module.exports = MetadataSerializer;
