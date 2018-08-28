const getFireStoreProp = value => {
  const props = { 'arrayValue': 1, 'booleanValue': 1, 'geoPointValue': 1, 'integerValue': 1, 'mapValue': 1, 'nullValue': 1, 'referenceValue': 1, 'stringValue': 1, 'timestampValue': 1 }
  if (typeof value === 'object')
  return Object.keys(value).find(k => props[k] === 1)
  else
  return null;
}

export const FireStoreParser = value => {
  const prop = getFireStoreProp(value)
  if (prop === 'integerValue') {
    value = Number(value[prop])
  }
  else if (prop === 'arrayValue') {
    value = (value[prop].values || []).map(v => FireStoreParser(v))
  }
  else if (prop === 'mapValue') {
    value = FireStoreParser(value[prop].fields)
  }
  else if (prop === 'geoPointValue') {
    value = { latitude: 0, longitude: 0, ...value[prop] }
  }
  else if (prop) {
    value = value[prop]
  }
  else if (typeof value === 'object') {
    Object.keys(value).forEach(k => value[k] = FireStoreParser(value[k]))
  }
  return value;
}
export default FireStoreParser
