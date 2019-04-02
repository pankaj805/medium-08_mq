export const getUserDetails = (db, userName) => {
    return new Promise((resolve, reject) => {
        db.collection('user').find({ 'username': userName }).toArray((err, docs) => {
            if(docs && docs.length>0){
                resolve(docs[0]);
            }else{
                reject()
            }
        });
    });
}