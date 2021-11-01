import axios from 'axios';
import { makeUseAxios } from 'axios-hooks';
import { API_URL } from '../../env';

export const client = axios.create({ baseURL: API_URL });

export function useInterceptorOnInvalidToken(): void {
  // Load any resources or data that we need prior to rendering the apps
  // We could add login functionlity with tokens in context.

}

const useAxios = makeUseAxios({
  axios: client,
});

export default useAxios;
