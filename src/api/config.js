export const commonParams = {
  g_tk: 1928093487,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp'
}

export const songUrlGuid = 6886437314

export const options = {
  param: 'jsonpCallback'
}

const proxyBaseUri = process.env.VUE_APP_PROXY_URI || ''
export const discListUrl = (() => {
  if (process.env.NODE_ENV === 'production') {
    return proxyBaseUri + '?type=discList'
  } else {
    return '/api/getDiscList'
  }
}).call()

export const songListUrl = (() => {
  if (process.env.NODE_ENV === 'production') {
    return proxyBaseUri + '?type=songList'
  } else {
    return '/api/getSongList'
  }
}).call()

export const searchUrl = (() => {
  if (process.env.NODE_ENV === 'production') {
    return proxyBaseUri + '?type=search'
  } else {
    return '/api/search'
  }
}).call()

export const lyricUrl = (() => {
  if (process.env.NODE_ENV === 'production') {
    return proxyBaseUri + '?type=lyric'
  } else {
    return '/api/lyric'
  }
}).call()

export const ERR_OK = 0
