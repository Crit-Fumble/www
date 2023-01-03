import axios from "axios";

const apiUrl = "https://faas-sfo3-7872a1dd.doserverless.co/api/v1/namespaces/fn-97bca257-2a79-4005-8a42-18387cf834e6/actions/WorldAnvilAPI";

//https://www.worldanvil.com/api/aragorn/documentation
export default class WorldAnvilService {
  static getWorld(worldId) {
    return axios.get(`${apiUrl}`);
  }
}