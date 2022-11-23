import axios from 'axios'

export const obtenerDestinos = () => {
    return axios.get('https://destinys-road.onrender.com/destinos/')
}

export const guardarReserva = (body) => {
    return axios.post('https://destinys-road.onrender.com/reservas/', body)
}
