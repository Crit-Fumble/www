import WorldAnvilService from "./WorldAnvilService"
import siteData from  "../data/siteData.json"
// console.log(siteData);

export default class DataService {
  static get userRoles() {
    const { userRoles } = siteData;
    return userRoles;
  }
  static get users() {
    const { users } = siteData;
    return users;
  }
  static get campaigns() {
    const { campaigns } = siteData;
    return campaigns;
  }
  static get settings() {
    const { settings } = siteData;
    return settings;
  }
  static get gameSystems() {
    const { gameSystems } = siteData;
    return gameSystems;
  }
  static get discord() {
    const { discord } = siteData;
    return discord;
  }

  static getRoleId(roleName) {
    return siteData.userRoles
      .find(({name}) => (name.toLowerCase() == roleName.toLowerCase()))
      ?.id;
  }

  static getWorldData(worldId) {
    return WorldAnvilService
      .getWorld(settings
        .find(({id}) => id == worldId)
        ?.externalIds?.worldAnvil
      );
  }
}