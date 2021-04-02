import Swal from 'sweetalert2'

export class ModalService {

  alert( title: string, message: string, icon: string ) {

    Swal.fire({
          title: title,
          text: message,
          icon: 'warning',
          showCancelButton: true,
          timer: 1500
    });

  }

}
