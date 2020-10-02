import AsyncStorage from '@react-native-community/async-storage';

export type AsyncFacadeT = {
  indexList: IndexFacadeT;
  todosList: TodosFacadeT;
};

export type IndexFacadeT = {
  store(value: string): Promise<void>;
  get(): Promise<string | null>;
};
export type TodosFacadeT = {
  store(key: string | undefined, value: string): Promise<void>;
  get(key: string | undefined): Promise<string | null>;
  remove(key: string): Promise<void>;
};

const indexList: IndexFacadeT = {
  store: async (value) => {
    try {
      await AsyncStorage.setItem('listIndex', value);
    } catch (error) {
      throw Error('Cannot set AsyncStorage item for given key: List index');
    }
  },
  get: async (): Promise<string | null> => {
    return await AsyncStorage.getItem('listIndex');
  },
};

const todosList: TodosFacadeT = {
  store: async (key, value) => {
    try {
      await AsyncStorage.setItem(key as string, value);
    } catch (error) {
      throw Error('Cannot set AsyncStorage item for given key: Todo List');
    }
  },
  get: async (key): Promise<string | null> => {
    try {
      return await AsyncStorage.getItem(key as string);
    } catch (error) {
      throw Error(`Cannot get AsyncStorage value for given key: ${key}`);
    }
  },
  remove: async (key) => {
    try {
      debugger
      await AsyncStorage.removeItem(key);
    } catch (error) {
      throw Error(`Cannot remove AsyncStorage item for given key ${key}`);
    }
  },
};

const AsyncStorageOperations: AsyncFacadeT = {
  indexList: indexList,
  todosList: todosList,
};

export default AsyncStorageOperations;
