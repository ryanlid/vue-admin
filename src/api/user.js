import request from "@/utils/request";
import { resolve } from "any-promise";

export function login(data) {
  // return request({
  //   url: '/user/login',
  //   method: 'post',
  //   data
  // })
  return new Promise((resolve, reject) => {
    resolve({
      data: {
        token: 123
      }
    });
  });
}
export function logout(data) {
  // return request({
  //   url: '/user/logout',
  //   method: 'post',
  //   data
  // })
  return new Promise((resolve, reject) => {
    resolve({
      data: {}
    });
  });
}