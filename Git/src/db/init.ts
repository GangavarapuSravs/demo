import curd from './models/curd'
import Hospital from './models/hospital';

async function init(){
    const isDev = false;

    await curd.sync({alter:isDev})
    await Hospital.sync({alter:isDev})
}

const dbInit =() => {
    init();
}

export default dbInit;