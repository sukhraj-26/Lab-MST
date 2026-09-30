const base64UrlEncode = (obj) => {
  return btoa(JSON.stringify(obj))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
};

const base64UrlDecode = (str) => {
  let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
  while (base64.length % 4) base64 += '=';
  return JSON.parse(atob(base64));
};

export const createMockJWT = (username, role) => {
  const header = { alg: 'HS256', typ: 'JWT' };
  const payload = {
    sub: '1234567890',
    username,
    role,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 3600,
  };
  const mockSignature = 'mock_signature_hash_xyz123';

  return `${base64UrlEncode(header)}.${base64UrlEncode(payload)}.${mockSignature}`;
};

export const parseMockJWT = (token) => {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) throw new Error('Invalid token');
    return base64UrlDecode(parts[1]);
  } catch (err) {
    return null;
  }
};