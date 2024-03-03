const whilelist = ['/captcha','/qiegang-auth/oauth/tokenAdmin']

const fetch = (url: string, options?: any): Promise<any> => {
     let headers = {}
    if (!whilelist.includes(url)) {
        const type = useCookie('type')
        const token = useCookie('token')
        headers = {
            'Authorization': `${type} ${token}`,
        }
    } else {
         headers = {
            'Authorization': `Basic bWFsbC1hZG1pbjoxMjM0NTY=`,
        }
    }
    const { public: { baseUrl } } = useRuntimeConfig()
    const reqUrl = baseUrl + url
    return new Promise((resolve,reject) => {
        useFetch(reqUrl, { ...options, headers }).then(({data, error}:any) => {
            if (!data._rawValue) {
                // TODO 接口错误 参数错误
                const value = JSON.parse(JSON.stringify(error))
                const {status} = value._object[value._key].data
                if (status === 404) {
                    console.log('😔', '接口不存在')
                } else {
                    reject(value._object[value._key].data)
                }
            } else if (data._rawValue.code !== '00000') {
                console.log('❌', data._rawValue);
            } else {
                resolve(ref(data))
            }
        }).catch((err: any) => {
            reject(err)
        })
    })
}

export default new class Http{
    // GET
    get(url: string, params?: any): Promise<any>{
        return fetch(url, {method: 'get', params: params})
    }
    // POST
     post(url: string, body?: any): Promise<any>{
        return fetch(url, {method: 'post',body})
    }
    // PUT
    put(url: string, body?: any): Promise<any> {
        return fetch(url, { method: 'put', body })
    }
    // DELETE
    delete(url: string, body?: any): Promise<any>  {
        return fetch(url, { method: 'delete', body })
    }
}