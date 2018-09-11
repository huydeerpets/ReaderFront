// Render element or component by provided condition
export function renderIf(condition, renderFn) {
  return condition ? renderFn() : null
}

export function avatarLetter(firstName = '', lastName = '') {
  return firstName.substr(0, 1).toUpperCase() + lastName.substr(0, 1).toUpperCase()
}

// Substring with ...
export function subString(string, length = 0) {
  return string.length > length ? `${ string.substr(0, length) }...` : string
}

// Duplicate object
export function duplicate(object) {
  return Object.assign({}, object)
}

// Return empty string if value is null
export function nullToEmptyString(value) {
  return value || ''
}

// Return zero if value is null
export function nullToZero(value) {
  return value === null ? 0 : value
}

// Add (s) to any string by count
export function plural(value) {
  return value == 1 ? '' : 's'
}

// Check if object is empty
export function isEmpty(obj) {
  let name
  for (name in obj) {
    if (obj.hasOwnProperty(name)) {
      return false
    }
  }
  return true
}

// Check email
export function isEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

// Auth Check
export function authCheck(auth) {
  return auth.user && auth.user._id
}

// Slug
export function slug(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    //.replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '')            // Trim - from end of text
}

// GraphQL Query Builder
export function queryBuilder(options) {
  options.type = options.type ? options.type : 'query'
  options.operation = options.operation ? options.operation : ''
  options.fields = options.fields ? options.fields : []
  options.data = options.data ? options.data : {}
  options.variables = options.variables ? options.variables : {}

  const query = {
    query: `
      ${ options.type } ${ queryDataArgumentAndTypeMap(options.data) } {
          ${ options.operation } ${ queryDataNameAndArgumentMap(options.data) } {
              ${ options.fields.join(',') }
          }
      }`,
    variables: { ...options.data, ...options.variables }
  }

  return query
}

// Private - Convert object to name and argument map eg: (id: $id)
function queryDataNameAndArgumentMap(data) {
  return Object.keys(data).length ? `(${ Object.keys(data).reduce((dataString, key, i) => `${ dataString }${ i !== 0 ? ', ' : '' }${ key }: $${ key }`, '') })` : ''
}

// Private - Convert object to argument and type map eg: ($id: Int)
function queryDataArgumentAndTypeMap(data) {
  return Object.keys(data).length ? `(${ Object.keys(data).reduce((dataString, key, i) => `${ dataString }${ i !== 0 ? ', ' : '' }$${ key }: ${ queryDataType(data[key]) }`, '') })` : ''
}

// Private - Get GraphQL equivalent type of data passed (String, Int, Float, Boolean)
function queryDataType(data) {
  switch (typeof data) {
    case 'boolean':
      return 'Boolean'
    case 'number':
      return (data % 1 === 0) ? 'Int' : 'Float'
    case 'string':
    default:
      return 'String'
  }
}