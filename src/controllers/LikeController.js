const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        const { user } = req.headers;
        const { devId } = req.params;

        const loggedDev = Dev.findById(user);
        const targetDev = Dev.findById(devId);

        if (!targetDev){
            return res.status(400).json({ error: 'Dev não existe.'})
        }

    }
};