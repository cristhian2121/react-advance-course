const DB_NAME = "likes_db"

const request = window.indexedDB.open(DB_NAME, 1)
export let objStore

request.onerror = function (event) {
    console.log('error: ', event);
    // Do something with request.errorCode!
}
request.onsuccess = function (event) {
    console.log('event: ***********', event);
    // Do something with request.result!
    const db = event.target.result

    objStore = db.createObjectStore(DB_NAME, { autoIncrement: true })
    console.log('objStore: 1 ', objStore);
    getRegister(1)

}

export function addRegister(register) {
    console.log('register: ', register);
    objStore.add(register)
}

function updateRegister(register) {
    objStore.put(register)
}

function removeRegister(register) {
    objStore.delete(register)
}

export function getRegister(register) {
    console.log('objStore: ', objStore);
    objStore.get(register)
}

