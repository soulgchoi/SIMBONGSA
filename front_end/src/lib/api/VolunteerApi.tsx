import axios from "axios";
const restBaseApi = "http://i02a205.p.ssafy.io:8080/A205";

export const getVolDetail = (id: number) => {
  try{
    return axios.get(restBaseApi + "/vol/detail/" + id)
  } catch (error) {
    console.log(error);
    return true;
  }
};

export const getVolList = (pgNum: number) => {
  try {
    return axios.get(restBaseApi + "/vol/titles/10/" + pgNum);
  } catch (error) {
    console.log(error);
    return true;
  }
};