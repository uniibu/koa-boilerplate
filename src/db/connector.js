const {extend, sql, _raw} = require('pg-extra')
const config = require('../config')
const pg = extend(require('pg'))
console.log(Object.getOwnPropertyNames(pg))
const pool = new pg.Pool({connectionString: config.DATABASE_URL})

module.exports = pool
