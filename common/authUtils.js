import { getClientDetails } from '../services/ClientService';

export const clientApiKeyValidation = async (req, res, next) => {

    let clientApiKey = req.get('api_key');

    if (!clientApiKey) {
        return res.status(400).send({
            status: false,
            response: "Missing Api Key"
        })
    }

    try {
        let clientDetails = await getClientDetails(req.db, clientApiKey);
        if (clientDetails) {
            next();
        }
    } catch (e) {
        console.log('%%%%%%%% error :', e);
        return res.status(400).send({
            status: false,
            response: "Invalid Api Key"
        })
    }

}