import toastr from 'toastr'
import 'toastr/toastr.less'

function error (msg = 'Error', title = '', timeOut = 1200) {
  toastr.error(msg, title, {timeOut: timeOut})
}

function success (msg = 'Success', title = '', timeOut = 500) {
  toastr.success(msg, title, {timeOut: timeOut})
}

export default {
  error,
  success
}
