import BaseService from "./base.service";

export default class SupportService extends BaseService {

    static async getSupportsByLesson(params) {
        return new Promise((resolve, reject) => {
            this.request({ auth: true})
                .get('/supports', params)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response))
        })
    }

    static async getUserSupports(params) {
        return new Promise((resolve, reject) => {
            this.request({ auth: true})
                .get('/user-supports', params)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response))
        })
    }

    static async storeSupportByLesson(params) {
        return new Promise((resolve, reject) => {
            this.request({ auth: true})
                .post('/supports', params)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response))
        })
    }

    static async storeReplySupport(params) {
        return new Promise((resolve, reject) => {
            this.request({ auth: true})
                .post('/replies', params)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response))
        })
    }

}