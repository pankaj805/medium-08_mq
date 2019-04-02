export const getClientDetails = (db, clientApiKey) => {
    return new Promise((resolve, reject) => {
        db.collection('clients').find({ 'client_api_key': clientApiKey }).toArray((err, docs) => {
            if(docs && docs.length>0){
                resolve(docs[0]);
            }else{
                reject(false);
            }
        });
    });
}