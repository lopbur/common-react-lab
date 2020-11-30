import http from '../http-common'

class CommonService {
  getTestMessage() {
    return http.get('/');
  }
}

export default new CommonService();