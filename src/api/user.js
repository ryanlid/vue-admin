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

export function getInfo(token) {
  // return request({
  //   url: '/user/info',
  //   method: 'get',
  //   params: { token }
  // })

  return new Promise((resolve, reject) => {
    resolve({
      data: {
        roles: ["admin"],
        introduction: "I am a super administrator",
        avatar: "https://avatars1.githubusercontent.com/u/6867964?s=40&v=4",
        name: "Super Admin"
      }
    });
  });
}
