// import { setAuthorization } from "./api";
// import { Base64 } from "js-base64";
// import { setCurrentWeb } from "../stores/actions/adminMainPage";

// export function login(token, appId = "") {
//   localStorage.setItem("accessToken", token);
//   localStorage.setItem("appId", appId);
//   setAuthorization();
//   return true;
// }

// export function validAccessToken() {
//   localStorage.getItem('accessToken');
// }

// export function logout() {
//   localStorage.removeItem("accessToken");
//   setAuthorization();
//   setTimeout(() => {
//     if (process.browser) window.location.href = `${window.location.origin}/`;
//   }, 500);
//   // window.location.href = `${window.location.origin}/`;
//   return true;
// }
// export const encodeData = (payload) => {
//   try {
//     let dataString = Base64.btoa(encodeURI(JSON.stringify(payload)));
//     return dataString;
//   } catch (error) {
//     return null;
//   }
// };

// export const decodeData = (token) => {
//   try {
//     let payload = JSON.parse(decodeURI(Base64.atob(token)));
//     return payload;
//   } catch (error) {
//     return null;
//   }
// };

// export function setCurrentWebDetails(currentWeb) {
//   const encodecurrentWeb = encodeData(currentWeb);
//   if (process.browser) {
//     return localStorage.setItem("currentWeb", encodecurrentWeb);
//   }
//   return "";
// }
// export function getCurrentWebDetails() {
//   if (process.browser) {
//     const curWeb = localStorage.getItem("currentWeb");
//     return curWeb ? decodeData(curWeb) : "";
//   }
//   return "";
// }

// export function isAuth() {
//   try {
//     const tokenChecked = localStorage.getItem("accessToken");    
//     if (tokenChecked) {
//       return tokenChecked;
//     }
//     return false;
//   } catch (err) {
//     return false;
//   }
// }
