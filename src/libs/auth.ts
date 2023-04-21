import axios from 'axios';
import jwt_decode from 'jwt-decode';

interface JwtData {
  id: number;
}

interface SignInRequestData {
  email: string;
  password: string;
}

interface RegisterRequestData {
  email: string;
  name: string;
  password: string;
}

export async function signInRequest({ email, password }: SignInRequestData) {
  const request = await axios.post('/api/auth/login', { email, password });
  return request.data;
}

// export async function recoverUserInformation(token: string) {
//   const decoded: JwtData = jwt_decode(token);
//   const userId = decoded.id;
//   const request = await axios.get(`/api/user/${userId}`);
//   return request.data;
// }

export async function registerRequest({
  email,
  name,
  password,
}: RegisterRequestData) {
  const request = await axios.post('/api/auth/register', { email, name, password });
  return request.data;
}