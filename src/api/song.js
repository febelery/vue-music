import {commonParams} from './config'
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

//todo 获取歌曲链接 not userfun
export function getMusicExpress(mid) {
  const url = 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg'

  const data = Object.assign({}, commonParams, {
    g_tk: "1418093288",
    loginUin: "344604012",
    hostUin: "0",
    format: "json",
    inCharset: "utf8",
    outCharset: "utf-8",
    notice: "0",
    platform: "yqq",
    needNewCode: "0",
    cid: "205361747",
    // callback: "MusicJsonCallback2",
    // jsonpCallback: "MusicJsonCallback01822902435765017",
    uin: "344604012",
    songmid: mid,
    filename: "C400" + mid + ".m4a",
    guid: "9010457983",
  })

  return jsonp(url, data, {})
}