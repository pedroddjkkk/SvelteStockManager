import { AUTH_SECRET } from "$env/static/private";
import { decode } from "@auth/core/jwt";
import type { Cookies } from "@sveltejs/kit";

export async function getUserByCookie(cookie: Cookies){
  const token = cookie.get('next-auth.session-token');

  if(token) return await decode({token, secret: AUTH_SECRET});
  return null;
}