const URL_SERVER = 'http://localhost:3000';
const URL_POSTFIX = '/api/goods';

const getGoods = (query = '') => 
    fetch (URL_SERVER + URL_POSTFIX + query)
        .then(Response => {
            if (Response.ok) {
                return Response.json()
            }
            return new Error(Response.statusText)
        })
        .catch(err => console.error(err))


const serviceGoods = async (fn, query, callback) => {
    fn (await getGoods(query));
    if(callback) callback();
}


export default serviceGoods;