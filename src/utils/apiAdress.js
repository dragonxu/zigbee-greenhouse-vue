//const baseUrl="你的上线服务器ip";  
const baseUrl="http://localhost:8081/api";
const wsUrl="ws://localhost:8081/websocket/zigbee";
module.exports = {

  basePath:baseUrl+"/",

  wsUrl,

  getAllZigbeeData:baseUrl+"/zigbee/all",

  getLastZigbeeData:baseUrl+"/zigbee/last",

  getAllZigbeeDataById:baseUrl+"/zigbee/",

  searchZigbeeData:baseUrl+"/zigbee/search",

  searchZigbeeDataByTemperatureRange:baseUrl+"/zigbee/search/temperature",

  searchZigbeeDataByHumidityRange:baseUrl+"/zigbee/search/humidity",

  searchZigbeeDataByDate:baseUrl+"/zigbee/search/date",

  addZigbeeData:baseUrl+"/zigbee/",

  getAllZigbeeDataTestData:"../static/test.json",

  getLastZigbeeDataTestData:"../static/last1.json",
}