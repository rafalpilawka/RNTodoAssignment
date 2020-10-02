import { Alert, Share } from "react-native";
import AsyncStorageOperations from "src/services/asyncStorageFacade";
import listToStringConverter from "src/utils/listToStringConverter";

export const onShare = async (id:string, name:string) => {
  try {
    let message = ` ${name}\nThis list is empty right now!`;
    const asyncList = await AsyncStorageOperations.todosList.get(id);
    if (asyncList !== null && asyncList.length > 2) {
      debugger;
      message = listToStringConverter(asyncList!, name);
    }
    const result = await Share.share({
      message: `${message}`,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
      } else {
      }
    } else if (result.action === Share.dismissedAction) {
    }
  } catch (error) {
    Alert.alert(error.message);
  }
};
