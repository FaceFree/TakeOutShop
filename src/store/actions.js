/*
* 通过mutation间接更新state的多个方法对象
* */
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutation-types'
import {reqCategorys,reqAddress,reqShops} from '../api'
export default {
  //异步获取地址
  async getAddress({commit,state}){
    //发送异步请求
    const geohash=state.latitude+','+state.longitude;
    const result =await reqAddress(geohash);
    if(result.code === 0){
      //变量名称与mutations中的名字相同
        const address=result.data;
        console.log(address);
        commit(RECEIVE_ADDRESS,{address});
    }
  },
  //异步获取食品分类
  async getCategorys({commit}){
    //发送异步请求
    const result =await reqCategorys();
    if(result.code===0){
      //变量名称与mutations中的名字相同
      const categorys=result.data;
      commit(RECEIVE_CATEGORYS,{categorys});
    }
  },
  //异步获取商家列表
  async getShops({commit,state}){
    //发送异步请求
    const result =await reqShops(state.latitude,state.longitude);
    if(result.code===0){
      //变量名称与mutations中的名字相同
      const shops=result.data;
      commit(RECEIVE_SHOPS,{shops});
    }
  }
}
