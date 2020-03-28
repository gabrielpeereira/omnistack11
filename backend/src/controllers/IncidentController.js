const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { title, descripition, value } = request.body;

        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            descripition,
            value,
            ong_id,
        });

        return response.json({ id });
    }
};