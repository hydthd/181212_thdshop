/*ajax请求函数模块
返回值：promise对象(异步返回的数据是：response.data)
*/
import axios from 'axios'
export default function ajax(url,data={},type='GET'){
    return new Promise(function(resolve,reject){
        //执行异步AJAX请求
        let promise
        if(type==='GE'){
            //准备url query参数数据
            let dataStr = '' //数据拼接字符串
            Object.keys(data).forEach(keys=>{
                dataStr += key +'=' + data[key] + '&'
            })
            if(dataStr !== ''){
                dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
                url = url + '?' +dataStr
            }
            //发送GET请求
            Promise = axios.get(url)
        }else{
            //发送POST请求
            promise = axios.post(url,data)
        }
        promise.then(function(response){
            //成功了调用resolve
            resolve(response.data)
        }).catch(function(error){
            reject(error)
        })
        //成功了resolve
        //失败了reject
    })
   
    return promise
}
// const response = await ajax()
// const result = response.data
// const result = await ajax()