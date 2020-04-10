import { AsyncStorage } from 'react-native'

/**
 *
 * @param {*} key 
 * @param {*} value
 * 
 * {string} name
 * {bool} isLogin
 * {number} accountInfoStatus 0 is none, 1 is verifying, 2 is error, 3 is verified
 * 
 */

// export const setUserToken = (key, value) => AsyncStorage.setItem(key, value)
// export const getUserToken = (key) => AsyncStorage.getItem(key)
export const setMySetting = (key, value) => AsyncStorage.setItem(key, value)
export const getMySetting = (key) => AsyncStorage.getItem(key)