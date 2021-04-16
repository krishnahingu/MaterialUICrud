import { TOGGLE_MODAL, SHOW_MODAL, CLOSE_MODAL } from './actionTypes';

export const showModal = (type) => ({ type: SHOW_MODAL, payload: type });

export const closeModal = () => ({ type: CLOSE_MODAL });

export const toggleModal = () => ({ type: TOGGLE_MODAL });
