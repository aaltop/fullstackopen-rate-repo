import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {

    // Fairly generic. Should realistically use a parent class
    // which already has this, and uses a global set of used namespaces
    // to ensure that a namespace is not repeated
    constructor(namespace = 'auth') {
        this.namespace = namespace;
    }

    // Fairly generic
    withNamespace(key) {
        return `${this.namespace}.${key}`;
    }

    get accessTokenKey() {
        return this.withNamespace("accessTokenKey");
    }

    async getAccessToken() {
        return await AsyncStorage.getItem(
            this.accessTokenKey,
        );
    }

    async setAccessToken(accessToken) {
        await AsyncStorage.setItem(
            this.accessTokenKey,
            accessToken
        );
    }

    async removeAccessToken() {
        await AsyncStorage.removeItem(this.accessTokenKey);
    }
}

export default AuthStorage;