import { commonAPI } from "./CommonAPI";
import { serverURL } from "./ServerURl";

//1 add video details into the server
export const addVideo=async(reqBody)=>{
    return await commonAPI('post',`${serverURL}/allVideos`,reqBody)
}
//2 get all Videos from the server
export const getVideo=async()=>{
    return await commonAPI('get',`${serverURL}/allVideos`,"")
}
//3 delete a particuar video from the server
export const deleteVideo=async(id)=>{
    return await commonAPI ('delete',`${serverURL}/allVideos/${id}`,"")
}
//4 add watch-history video details to the server
export const addWatchHis=async(reqBody)=>{
    return await commonAPI('post',`${serverURL}/watch-history`,reqBody)
}
//5 get watch-history video details from the server
export const getWatchHis=async()=>{
    return await commonAPI('get',`${serverURL}/watch-history`,{})
}
//6 delete watch-history deatils
export const deleteWatchHis=async(id)=>{
    return await commonAPI('delete',`${serverURL}/watch-history/${id}`,'')
}
//7 add category into the server
export const addCategoryAPI=async(reqBody)=>{
    return await commonAPI('post',`${serverURL}/Cateory`,reqBody)
}
//8 get all categories from the server
export const getcategoryAPI=async()=>{
    return await commonAPI('get',`${serverURL}/Cateory`,{})
}
//9 delete a category from the server
export const deleteCategory=async(id)=>{
    return await commonAPI('delete',`${serverURL}/Cateory/${id}`,"")
}
//10 get a particular video details from the server
//11 update a particular video details from the server