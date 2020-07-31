import AsyncStorage from '@react-native-community/async-storage';

const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        // saving error
        console.log(e);
    }
}

const getData = async (key) => {
    
    try {
        const value = await AsyncStorage.getItem(key);
        return value != null ? JSON.parse(value) : null;

    } catch(e) {
      
        console.log('error happened');
        console.log(e);
    }

}

let StorageManager = {
    store: storeData,
    read: getData
}

export default StorageManager;