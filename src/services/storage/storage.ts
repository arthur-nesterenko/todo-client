function isJson(str: string) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return isNaN(Number(str));
}

const isObject = (value: any) => typeof value === "object" && value !== null;

export default class Storage {
    static setValue(key: string, value: string | object) {
        const val = isObject(value) ? JSON.stringify(value) : value;
        this.storage.setItem(this.storageKeyPrefix.concat(key), val as string);
    }

    static getValue<T>(key: string): T | null {
        try {
            const value = this.storage.getItem(this.storageKeyPrefix.concat(key));

            if (value === null) return null as T;

            return isJson(value) ? JSON.parse(value) : value as unknown as T;
        } catch (e) {
            return null;
        }
    }

    static getSafeValue<T>(key: string, defaultValue: T): T {
        const data = this.getValue(key);
        return (data ?? defaultValue) as unknown as T;
    }

    static has(key: string) {
        return this.storage.getItem(this.storageKeyPrefix.concat(key)) !== null;
    }

    static remove(key: string) {
        this.storage.removeItem(this.storageKeyPrefix.concat(key));
    }

    static clear() {
        this.storage.clear();
    }

    static storage = window.localStorage;
    static storageKeyPrefix = "todo_";
}
