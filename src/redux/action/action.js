import axios from "axios"
import { ADD, DELETE, EDIT, GET } from "../type/type"

export const getData = () => {
    return (dispatch) => {
        axios.get('https://student-api.mycodelibraries.com/api/student/get')
            .then((res) => {
                dispatch({ type: GET, data: res.data.data })
            })
            .catch((err) => console.log(err))
    }
}
export const addData = (obj) => {
    return (dispatch) => {
        axios.post('https://student-api.mycodelibraries.com/api/student/add', obj)
            .then((res) => {
                dispatch(getData())
            })
            .catch((err) => console.log(err))
    }
}
export const deleteData = (id) => {
    return (dispatch) => {
        id = `https://student-api.mycodelibraries.com/api/student/delete?id=${id}`
        axios.delete(id).then((res) => {
            dispatch(getData())
        }).catch((err) => console.log(err))
    }
}
export const updateData = (obj) => {
    return (dispatch) => {
        obj.id = obj._id
        axios.post('https://student-api.mycodelibraries.com/api/student/update', obj)
            .then((res) => dispatch(getData()))
            .catch((err) => console.log(err))
    }
}
export const editData = (id) => {
    return (dispatch) => {
        axios.get("https://student-api.mycodelibraries.com/api/student/get-student-by-id?id=" + id).then((res) => {
            let obj = res.data.data
            obj.hobbies = obj.hobbies.split(",")
            dispatch({ type: EDIT, obj: obj })
        }).catch((err) => { console.log(err) })
    }
}