function getStorage(key, initial) {
  try {
    const token = JSON.parse(window.localStorage.getItem(key))
    return token != undefined ? token : null;
  } catch (error) {
    return initial;
  }
}

export default getStorage;
