import UserApi from "../api/user.api"

const userApi = new UserApi();

export default class UserStore{
    get = (id) =>{
        return userApi.get(id).then(response =>{
            return response
        }).catch(error=>{
            console.log(error)
        })
    }


}
