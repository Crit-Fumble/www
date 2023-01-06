import WorldAnvilService from "./WorldAnvilService"
import siteData from  "../data/siteData.json"
import _campaigns from  "../data/campaigns.json"
import _settings from  "../data/settings.json"
import _gameSystems from  "../data/gameSystems.json"
import _users from  "../data/users.json"
// console.log(siteData);

export default class DataService {
  static get userRoles() {
    const { userRoles } = siteData;
    return userRoles;
  }
  static get users() {
    return _users;
  }
  static get campaigns() {
    return _campaigns;
  }
  static get settings() {
    return _settings;
  }
  static get gameSystems() {
    return _gameSystems;
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