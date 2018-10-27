import {commonParams,songUrlGuid} from './config'
import axios from 'axios'
import jsonp from '../common/js/jsonp'

export function getLyric(mid) {
  const url = '/api/lyric'

  const data = Object.assign({}, commonParams, {
    songmid: mid,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    categoryId: 10000000,
    pcachetime: +new Date(),
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getMusicExpress(mid) {
  const url = 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg'

  const data = Object.assign({}, commonParams, {
    g_tk: 195219765,
    loginUin: 1297716249,
    hostUin: 0,
    format: "json",
    inCharset: "utf8",
    outCharset: "utf-8",
    notice: 0,
    platform: "yqq",
    needNewCode: "0",
    cid: 205361747,
    uin: 1297716249,
    songmid: mid,
    filename: "C400" + mid + ".m4a",
    guid: songUrlGuid,
  })

  return jsonp(url, data, {})
}