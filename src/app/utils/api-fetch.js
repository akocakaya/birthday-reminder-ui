import axios from 'axios';

export default param => {
    return new Promise( (resolve, reject) => {
        const req = {
            method    : param.method,
            url       : param.url,
            data      : param.data,
        };
        axios(req)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                console.log(`err -> `, err);
                reject(err);
            });
    });
};
