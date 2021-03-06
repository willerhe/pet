import axios from 'axios'

const http = axios.create({
  baseURL: process.env.baseURI,
  withCredentials: true,
})

let api = {
  appointment: QuickParse('appointment', 'appointments'),
  fee: QuickParse('fee', 'fees'),
  goods: QuickParse('goods', 'goods'),
  pet: QuickParse('pet', 'pets'),
  medicalRecord: QuickParse('medicalRecord', 'medicalRecords'),
  role: QuickParse('role', 'roles'),
  medical: QuickParse('medical', 'medicals'),
  prescription: QuickParse('prescription', 'prescriptions'),
  article: QuickParse('article', 'articles'),
  user: QuickParse('user', 'users'),
}

api.fee.getByPrescriptionId = function (id) {
  return http.get('/fee/medicals' + '?prescriptionId=' + id)
}
api.article.getByArticleId = function (id) {
  return http.get('/article/' + '?id=' + id)
}

api.prescription.store = function (param) {
  return http.post('/prescription/store', param)
}

api.appointment.confirm = function (domain) {
  return http.put('appointment/confirm', domain)
}

api.login = function (obj) {
  return http.post('/login', obj)
}

api.register = function (obj) {
  return http.post('/register', obj)
}


export default api

function QuickParse(odd, plural) {
  return {
    list: function (params) {
      return http.get(plural, {params: params})
    },
    delete: function (param) {
      return http.delete(odd, {params: param})
    },
    get: function (id) {
      return http.get(odd + '?id=' + id)
    },
    create: function (domain) {
      return http.post(odd, domain)
    },
    update: function (domain) {
      return http.put(odd, domain)
    }
  }
}
