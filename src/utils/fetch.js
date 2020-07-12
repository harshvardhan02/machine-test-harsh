import fetch from 'isomorphic-fetch'

const handleHTTPErrors = res => {
  if (res.ok) return res
  return res.json().then(err => { throw err })
}

export default (url, options) => {
  return fetch(url, options).then(handleHTTPErrors) 
}
