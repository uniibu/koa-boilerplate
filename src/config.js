exports.NODE_ENV = process.env.NODE_ENV || 'development';
exports.PORT = Number.parseInt(process.env.PORT, 10) || 3010;
exports.TRUST_PROXY = process.env.TRUST_PROXY === 'true';
exports.DATABASE_URL = process.env.DATABASE_URL || 'postgres://127.0.0.1:5432/';
