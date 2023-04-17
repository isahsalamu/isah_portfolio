const api = "http://localhost:5000/portfolio/api"

import axios from "axios";

export default class UserApi{
    get = (id) =>{
        return axios.get(api + "/user/" + id).then(response =>{
            return response
                }).catch(error=>{
                    console.log(error)
                })
    }


}
