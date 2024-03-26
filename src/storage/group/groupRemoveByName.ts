import AsyncStorage from '@react-native-async-storage/async-storage'
import { groupGetAll } from './groupGetAll'
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '../storageConfig'

/* eslint-disable no-useless-catch */
export async function groupRemoveByName(groupDeleted: string) {
  try {
    const storedGroups = await groupGetAll()
    const groups = storedGroups.filter((group) => group !== groupDeleted)

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups))
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`)
  } catch (error) {
    throw error
  }
}
