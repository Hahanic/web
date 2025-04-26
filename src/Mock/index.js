// 使用 Mock
import mock from "mockjs";

const mockData = mock.mock({
  "data|20": [{
    "moment": "@datetime",
    "id|+1": 1,
    "userId|+1" : 10,
    "message|24-200": "@cword",
    "label|0-10": 0,
    "name": "@cname",
    "like|0-120" : 0,
    "comment|0-120": 0,
    "type": 0,
    "imgURL|0-13": 0,
  }]
})

export default mockData