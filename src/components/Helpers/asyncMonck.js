import Swal from "sweetalert2";

export const showEliminatedNotification = (title) => {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${title} ha sido eliminado del carrito`,
        showConfirmButton: false,
        timer: 2000,
    });
};

export const showSuccessNotification = (item) => {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${item.title} ha sido agregado al carrito`,
        showConfirmButton: false,
        timer: 2000,
    });
};

export const showDuplicateNotification = (item) => {
    Swal.fire({
        position: "top-end",
        icon: "info",
        title: `${item.title} ya ha sido agregado al carrito`,
        showConfirmButton: false,
        timer: 2000,
    });
};

export const showCartClearedNotification = () => {
    Swal.fire({
        position: "top-end",
        icon: "info",
        title: "El carrito ha sido vaciado",
        showConfirmButton: false,
        timer: 2000,
    });
};

export const formatPrice = (price) => {
    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
    }).format(price);
};

