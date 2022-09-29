import { arrayFromServer } from "../API/api"

export default function renderModalCard(id) {
    console.log(arrayFromServer)

    arrayFromServer.find(film => {
        if (film.id === parseInt(id)) {
            console.log(film);

            return
        }
    })
}