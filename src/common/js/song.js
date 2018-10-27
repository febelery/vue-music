import {getLyric} from "../../api/song";
import {ERR_OK} from "../../api/config";
import {Base64} from 'js-base64'

export default class Song {
  constructor({id, mid, singer, name, album, duration, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }

  getLyric() {
    if (this.lyric) {
      return Promise.resolve(this.lyric)
    }
    return new Promise((resolve, reject) => {
      getLyric(this.mid).then((res) => {
        if (res.retcode === ERR_OK) {
          this.lyric = Base64.decode(res.lyric)
          resolve(this.lyric)
        } else {
          reject('no lyric')
        }
      })
    })
  }
}

export function createSong(musicData) {
  let song = new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    //todo 链接不能获取正确
    // url: 'http://dl.stream.qqmusic.qq.com/http://dl.stream.qqmusic.qq.com/C400' + musicData.songmid + '.m4a?guid=6159747516&vkey=' + musicData.vkey + '&uin=0&fromtag=38'
    url: 'http://dl.stream.qqmusic.qq.com/http://dl.stream.qqmusic.qq.com/C400001OyHbk2MSIi4.m4a?guid=1148308198&vkey=6E9F5FC6C77AF4CBEAC4CA7A4E6802C7472C5FE8DD515E1E1A96CA57A15FEF5665F41C75A5E4C5AA191F34BA7D3D811F29A4A71274F1712F&uin=0&fromtag=38' + Math.random(),
  })

  return song
}

function filterSinger(singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach((s) => {
    ret.push(s.name)
  })
  return ret.join('/')
}

