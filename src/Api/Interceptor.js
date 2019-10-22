import { Auth } from 'aws-amplify';
import { loginConfig, isSecurityApplied } from '.';
import UserStore from '../Store';
import { isSessionExpired, renewSessionTime } from '../Utils/AppSessionUtil';

export const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /192\.168\.\b(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\b\.\b(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\b/
    )
);

export const redirectToLogin = () => {
  const redirectURI = window.location.href;
  const redirectURIHex = UserStore.encryptToHex(redirectURI);
  UserStore.clearStorageData();
  window.location.replace(
    `${loginConfig.baseUrl}?redirect_to=${redirectURIHex}`
  );
};

export const getIdToken = async () => {
  let idToken = '';
  if (!isLocalhost) {
    const session = await Auth.currentSession();
    idToken = session.idToken.jwtToken;
    return idToken;
  }

  // Sushant Token
  // idToken =
  //   'eyJraWQiOiJUNkczV3E3YlBvM0tNaDV3a08zMlUxYUlCTVAwQlpkQUp5amg4VlN4UTBRPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIzNDcxMDZkNS02MGM3LTQxM2MtYmVmYy0xYjViY2Y5OWM3YzkiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiY3VzdG9tOmlzVXNlckFjdGl2ZSI6InRydWUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9ZcHZkSWdLbU0iLCJjb2duaXRvOnVzZXJuYW1lIjoiMzQ3MTA2ZDUtNjBjNy00MTNjLWJlZmMtMWI1YmNmOTljN2M5IiwiYXVkIjoiNWJhZmJuOTEyYTBnanNzZHNvOG1udW8ybGUiLCJldmVudF9pZCI6IjdkYjRjODFiLTNjYTktMTFlOS04N2RmLWRkNDI1MzNlNTBlZSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTUxNTAzNDI3LCJwaG9uZV9udW1iZXIiOiIrOTE5MDM1MTEyNzcwIiwiZXhwIjoxNTUxNTA3MDI3LCJpYXQiOjE1NTE1MDM0MjcsImVtYWlsIjoic3VzaGFudC5hd2F0aW1hdGhAbmV2aXRvbi5jb20ifQ.Naokv6WJ5vla2LwuinTS-hypJiO4bVkLh4ZeYQU37SjZpWvchiVtD7wvY9QkUiSZZENjQ_KacTqvRxvVcwRACNKUUcSIwT9dJYipZNTn1koHTsGSjMu4lFYWntgwf3HRyj8AJ6IL9BZbGxQdWY_HgWaR3SvVqjdU87S8MNbVU-b5opzl9k7QeFClsX-ItbuoSqUSf1iegm3OKvWfE5L5aie4IQo_2jUKVdbPLSu8g2-xpVYdqg8ZxvuYj1Gq23u4hOppTn32pYicyKzrJwPn5feVofa7wriFqKlPQLUtKwusagqWB1IVLCatCn5-glWnn9qaG8haVTjlhlnaQeHqvw';

  // Amit token
  // idToken =
  //   'eyJraWQiOiJUNkczV3E3YlBvM0tNaDV3a08zMlUxYUlCTVAwQlpkQUp5amg4VlN4UTBRPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJlYTg4ZGRiNi05M2Y1LTRmOWEtOGM3OS01ODdiNDIzM2RhZjIiLCJhdWQiOiI1YmFmYm45MTJhMGdqc3Nkc284bW51bzJsZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjU5MThjOWU3LWJiMDQtMTFlOC05NGMyLTQxODE3MjA3MWIzOCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTM3MjQ4ODAwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9ZcHZkSWdLbU0iLCJjb2duaXRvOnVzZXJuYW1lIjoiZWE4OGRkYjYtOTNmNS00ZjlhLThjNzktNTg3YjQyMzNkYWYyIiwicGhvbmVfbnVtYmVyIjoiKzkxOTUzNTEzOTE1NiIsImV4cCI6MTUzOTI1ODM3MywiaWF0IjoxNTM5MjU0NzczLCJlbWFpbCI6ImFtaXQubWVoZXJAbmV2aXRvbi5jb20ifQ.dvmJav78Q3Y070fseY1hm51JErV0SvMcJWhw9QlBN46Fd1yyCCF3nEaHDPf2sV-C7yP8BGCFEET41fE0QlMkHeuE0FHVWUicdjNDN6RDT7dDIbRkzFF_Xiz82oimgev8TGXQkTXGn_xlaauWtKzQk1gYbHpDoDUpIh86ob6_CmIpiuG5gqZT7ln12CtrmOQbmP5SYF_ZRHa1lJONLB8S5_adcjjXc3RDNzHfAIxklUt2m_Bhff5acz3nmmzlAderAPJfBmuSSZtqv1e3Ca_Zb7UgYIPabMbmvZ7o7IS2KFsA8HmjKRuao1rTVm6TbhbWm9JIh6GyyHFctMhtkSkrlQ';

  // pornima token
  // idToken =
  //   'eyJraWQiOiJUNkczV3E3YlBvM0tNaDV3a08zMlUxYUlCTVAwQlpkQUp5amg4VlN4UTBRPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjMjNlZGNlNi0xZGI2LTQzMDQtYjgyOS0xY2ZjNjc2NzE3NjAiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiY3VzdG9tOmlzVXNlckFjdGl2ZSI6InRydWUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9ZcHZkSWdLbU0iLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiYzIzZWRjZTYtMWRiNi00MzA0LWI4MjktMWNmYzY3NjcxNzYwIiwiYXVkIjoiNWJhZmJuOTEyYTBnanNzZHNvOG1udW8ybGUiLCJldmVudF9pZCI6ImJjYmUyYjBjLTNlM2MtMTFlOS04ZjJkLTJkMTdiY2I5OWYyOCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTUxNjc2NjIwLCJwaG9uZV9udW1iZXIiOiIrOTE4MDk1MzU2MTEwIiwiZXhwIjoxNTUxNzA1Nzg5LCJpYXQiOjE1NTE3MDIxODksImVtYWlsIjoicG9vcm5pbWEuc3VicmFtYW55YW1AbmV2aXRvbi5jb20ifQ.OcLhy1e0MmTG1Of5yLGw5gfCFksxO8RjxlTOAaB0qFUfidQPOj2C4c8tCa7HtOHkPHoyd75Xu8JAtx1GQcL3UVixzhE9g3_KHdFzWULRoYHqvpm9olXEK7oh_dhsrpSAkHrJuBe7CMzkoUxkxygqjSj6LxlOzhLYQ8i5HhKNswEhhG2Y8OV6z8LqmV4Mu1hhN5JG9EPJwfu9NuBpsWPfkCH-Tg2iqK14rccZDjFxDfhbgHm64wNa3-Gv9XuTkQMuKeMyWyVO-fi6m-LzvTckdip01xB0SXEh2fdtefWLujBPR8aCQ_x81JIE7SQvQR6BgRJETOMoiM20vrODoGdHpA';

  // NItin
  idToken =
    'eyJraWQiOiJUNkczV3E3YlBvM0tNaDV3a08zMlUxYUlCTVAwQlpkQUp5amg4VlN4UTBRPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI3OTUwOGI3OS02MzBhLTQzZWQtOWExZS1mNDQ3MDA2MTczYjIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiY3VzdG9tOmlzVXNlckFjdGl2ZSI6InRydWUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9ZcHZkSWdLbU0iLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiNzk1MDhiNzktNjMwYS00M2VkLTlhMWUtZjQ0NzAwNjE3M2IyIiwiYXVkIjoiNWJhZmJuOTEyYTBnanNzZHNvOG1udW8ybGUiLCJldmVudF9pZCI6IjJhOGM5YTZlLTc1N2QtMTFlOS04MTRhLWJkNGRhMjc4NTdkNCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTU3NzUxNjA2LCJwaG9uZV9udW1iZXIiOiIrOTE3ODI5NDEwMzQzIiwiZXhwIjoxNTU3NzU1MjA3LCJpYXQiOjE1NTc3NTE2MDcsImVtYWlsIjoibml0aW4ua2F2ZXJpYXBwYUBuZXZpdG9uLmNvbSJ9.fdotiPIdyKCOcFWX7bhlrq1rBK0QjFbkhGypiGJen1C_kkFZJPZ9ik98RC-Z-V2mHWNdZX08efCVy1RReCgR6eNkaXj9xmKq4MbrvAiwOt41lACLU1JFOi7gXaPTrWrPD1MuG5M7BCMGqEVxU9_T_tvcekd5Mmd5IPiLKhH548Tqp0rmGA4ipkqZL7u273MKWITsc_HqrreLUWIzvKT1n5p_yAlRJ9Tez75pLQLwWA-NJmbXmrdZN-S1h1SGmSpSSP3EtACG33JoB4DSg3HeqxJIcC3amBgJV0QERs1qR9C2p2usl-g0rk0gCkWoM5TyaNmerM4EKWiKyDqFsG0vdg';

  // anji
  // idToken =
  //   'eyJraWQiOiJUNkczV3E3YlBvM0tNaDV3a08zMlUxYUlCTVAwQlpkQUp5amg4VlN4UTBRPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJmOWE3MDcxMS0xZTMwLTQ4NDAtYWUzZi1iMTQzNzY3MWVjMDkiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiY3VzdG9tOmlzVXNlckFjdGl2ZSI6InRydWUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9ZcHZkSWdLbU0iLCJjb2duaXRvOnVzZXJuYW1lIjoiZjlhNzA3MTEtMWUzMC00ODQwLWFlM2YtYjE0Mzc2NzFlYzA5IiwiYXVkIjoiNWJhZmJuOTEyYTBnanNzZHNvOG1udW8ybGUiLCJldmVudF9pZCI6IjEwNTc1NDZjLTY1OTItMTFlOS1hYWQ2LTQ1YWM1NDc5NzVjOCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTU2MDAxMzYyLCJwaG9uZV9udW1iZXIiOiIrOTE5NzQwMTUxNDQyIiwiZXhwIjoxNTU2MDA0OTY0LCJpYXQiOjE1NTYwMDEzNjQsImVtYWlsIjoiYW5qYW5leXVsdS5wYXRodXJpQG5ldml0b24uY29tIn0.ieW58lTCpb3N3zW9R9SpnD8yFvcasObpTw_kGC-NWjn7RQI3-uyozJooj-337TSCAPLHJ479Yf0guuO6sFQfZ3u7y3L-V4fceyZP-Ejrh0qko_z95HWhQLXmoG8I-zah6aHrGss9HiISoMDaj-yoGfJO2iACTeZ-eClcDWvK_BEwu1rl8AHJlhRe5Myna49RORCfzJA-9aZC-Kqj-_qSLgHs7XjdsHUWyZCiyqpee_xgX-QXMueyWAHcbZppzF9gPdaCOaiTGi0mo31BsPdwg7jhs8zlvAzrzzY3EJNmxHnx43xaMykP5JGdNeMF93h46pLE7THOn3fEd6lV_fWhCA';
  // ramesh
  // idToken =
  //   'eyJraWQiOiJUNkczV3E3YlBvM0tNaDV3a08zMlUxYUlCTVAwQlpkQUp5amg4VlN4UTBRPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjYzExYWFjMC1hNjZhLTQwZmQtYWUzYi05YWQzMzE0YjUyMzUiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiY3VzdG9tOmlzVXNlckFjdGl2ZSI6InRydWUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9ZcHZkSWdLbU0iLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOnRydWUsImNvZ25pdG86dXNlcm5hbWUiOiJjYzExYWFjMC1hNjZhLTQwZmQtYWUzYi05YWQzMzE0YjUyMzUiLCJhdWQiOiI1YmFmYm45MTJhMGdqc3Nkc284bW51bzJsZSIsImN1c3RvbTpuZXdVc2VyIjoiZmFsc2UiLCJldmVudF9pZCI6Ijc1NGFmNWE3LTU1NDItMTFlOS1iODc0LWViNmJmYWVlMjkwNiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTU0MjA3OTU0LCJwaG9uZV9udW1iZXIiOiIrOTE3ODkzNTc0MTIzIiwiZXhwIjoxNTU0MjExNTU0LCJpYXQiOjE1NTQyMDc5NTQsImVtYWlsIjoibXVkdXJ1a29sYS5yYW1lc2hAbmV2aXRvbi5jb20ifQ.Q8Mf17e3L21qk1KLkwB4lw1Hq7uGhJ5FYjNzGP5aWYqnKoc9o8NtN_QPZHUXeDCtM9l2zI8GlYmBJuCVHc40Lsg5ZbaOZZKHsTVfn_WDZsg8C-hhSce0HMC-vt4fcOqILueTakXpcpGgOy-repTtwyCcHcD6K7cZPgXj1jDkF6BeR8MtbMkvfpFrTaeGB46eu75SJAh9CNcc3XJJ2eKgr7wyPQDkZmYf-PV7UGA7BP2BO7Qhc32Ez2ib6gYK7T-JtdbimHj4DxsFt90noXzZ55sCGLDgqc_1XlYv3ix5TCrqSjimhhBwRXbaSh0AqC0xQt_xaSAo7kHx7EjjE--xIQ';

  // idToken =
  //   'eyJraWQiOiJUNkczV3E3YlBvM0tNaDV3a08zMlUxYUlCTVAwQlpkQUp5amg4VlN4UTBRPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI3OTUwOGI3OS02MzBhLTQzZWQtOWExZS1mNDQ3MDA2MTczYjIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiY3VzdG9tOmlzVXNlckFjdGl2ZSI6InRydWUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9ZcHZkSWdLbU0iLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiNzk1MDhiNzktNjMwYS00M2VkLTlhMWUtZjQ0NzAwNjE3M2IyIiwiYXVkIjoiNWJhZmJuOTEyYTBnanNzZHNvOG1udW8ybGUiLCJldmVudF9pZCI6IjhhNWVmZWJlLTQ5NjAtMTFlOS05NTlkLTU5YTFmMDk4MzViYyIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTUyOTAxNDYwLCJwaG9uZV9udW1iZXIiOiIrOTE3ODI5NDEwMzQzIiwiZXhwIjoxNTUyOTY3NTczLCJpYXQiOjE1NTI5NjM5NzMsImVtYWlsIjoibml0aW4ua2F2ZXJpYXBwYUBuZXZpdG9uLmNvbSJ9.VGtEo32TqJZfcwiv-TuuGEUtHcMEKNxnWRGm7ACp_FrqIXRsMKB6836X2uQIjx3F_8YrgDMJHUz5pj-fSHTnMFwKtLNEuwIwRcB1XzWCe9gGgZOzhrskhtUjRbCV3jwWZhy0pKgeVUWjgC4-oJCwPLb1f0d3ZPEoLH_g73HlcacaBb7TBGDxfJTwA8YqvVpUMiZouuCqU2QdKNgN56obbpLMNO0wrSyqAUGdrMGei1dK7srzZAibayC-Bq6RVs676IY7bbdSHiN-GdLKDYRviIlM6l8zxEE45o8fv5NimOJHopDCIdc_CYVrv4JuVJizt7jscovlmAKlFRIB3v5e4Q';
  return idToken;
};

const getUserSession = async () => {
  await Auth.currentAuthenticatedUser()
    .then(() => Promise.resolve())
    .catch(() => {
      redirectToLogin();
    });
};

class Interceptor {
  requestInterceptor = axios => {
    axios.interceptors.request.use(
      async config => {
        if (config.url.endsWith('verifyOtp')) {
          return config;
        }
        if (!isLocalhost) {
          const bool = isSessionExpired();
          if (bool) redirectToLogin();
        }
        // eslint-disable-next-line
        config.headers.Authorization = await getIdToken();
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
    if (isLocalhost) renewSessionTime();
  };
}

const applyFilter = axios => {
  if (isSecurityApplied) {
    if (!isLocalhost) getUserSession();
    const filter = new Interceptor();
    filter.requestInterceptor(axios);
  }
};

export default applyFilter;
