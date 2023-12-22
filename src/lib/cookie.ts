import Cookies, { Cookie, CookieSetOptions } from "universal-cookie";
import { ObjectKeys, ObjectValues } from "./types";

export const getCookie = (name: string) => {
  const cookiesData = new Cookies(document.cookie);
  const cookie = cookiesData.get(name) as string;
  return cookie || null;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getAllCookies = <ReturnType = any>() => {
  const cookiesData = new Cookies(document.cookie);
  const cookies = cookiesData.getAll();
  return cookies as ReturnType;
};

export const deleteCookie = (name: string) => {
  const cookiesData = new Cookies(document.cookie);
  cookiesData.remove(name);
};

export const setCookie = (
  name: string,
  value: Cookie,
  options?: CookieSetOptions
) => {
  const cookiesData = new Cookies(document.cookie);
  cookiesData.set(name, value, options);
};

export const COOKIE = {
  HideSmartBanner: "hideSmartBanner",
} as const;

export type CookieKeys = ObjectKeys<typeof COOKIE>;
export type COOKIEValues = ObjectValues<typeof COOKIE>;
