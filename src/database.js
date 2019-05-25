export const initialize = () => {
    var request = window.indexedDB.open("MyData", 3);

    request.onupgradeneeded = function (event) {
        var db = event.target.result;

        if(!db.objectStoreNames.contains('banks')){
            var table = db.createObjectStore("banks", {keyPath: "bankId", autoIncrement: true});
            table.createIndex( "name", "name", {unique:false});
            table.createIndex("type", "type", {unique:false});
            table.createIndex( "accountNo", "accountNo", {unique:false});
        }
    }

}

export const saveToDb = (table, data, onComplete) => {
    let db = indexedDB.open("MyData");
    db.onsuccess = (event) => {
        let tx = event.target.result.transaction([table], "readwrite");
        let store = tx.objectStore(table);
        
        store.put(data);

        tx.oncomplete = (event) => {
            onComplete(event);
        }        
        tx.onerror = (event) => {
            onComplete(false);
        }
    }
}
