import 'es6-promise';
import 'whatwg-fetch';


function obj2Form(data){
    var formData = new FormData();
     for(var key in data){
         formData.append(key, data[key]);
     }
     return formData
}

export function httpGet(url){
    let promise = new Promise(function(resolve, reject){
        fetch(url,{
                method: 'GET',
                mode: 'cors',
                cache: 'default',
                credentials: 'include'
        }).then(resp =>{
            return resp.json()
        }).then(data =>{
            resolve(data)

        }).catch(error=>{
            reject(error)
        })
    });     
    return promise
}

export function httpPost(url, data){
    let promise = new Promise(function(resolve, reject){
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            },
            body: obj2Form(data),
            mode: 'cors',
            cache: 'default',
            credentials: 'include'
        }).then(resp =>{
            return resp.json()
        }).then(data =>{
            resolve(data)

        }).catch(error=>{
            reject(error)
        })
    })
    return promise
}

export function httpPostJson(url, data){
    let promise = new Promise(function(resolve, reject){
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            mode: 'cors',
            cache: 'default',
            credentials: 'include'
        }).then(resp =>{
            return resp.json()
        }).then(data =>{
            resolve(data)

        }).catch(error=>{
            reject(error)
        })
    })
    return promise
}

export function httpPut(url, data){
    let promise = new Promise(function(resolve, reject){
        fetch(url,{
            method: 'PUT',
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            },
            body: obj2Form(data),
            mode: 'cors',
            cache: 'default',
            credentials: 'include'
        }).then(resp =>{
            return resp.json()
        }).then(data =>{
            resolve(data)

        }).catch(error=>{
            reject(error)
        })
    })
    return promise
}

export function httpPutJson(url, data){
    let promise = new Promise(function(resolve, reject){
        fetch(url,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            mode: 'cors',
            cache: 'default',
            credentials: 'include'
        }).then(resp =>{
            return resp.json()
        }).then(data =>{
            resolve(data)

        }).catch(error=>{
            reject(error)
        })
    })
    return promise
}

export function httpDelete(url){
    let promise = new Promise(function(resolve, reject){
        fetch(url,{
                method: 'DELETE',
                mode: 'cors',
                cache: 'default',
                credentials: 'include'
        }).then(resp =>{
            return resp.json()
        }).then(data =>{
            resolve(data)

        }).catch(error=>{
            reject(error)
        })
    });     
    return promise
}
