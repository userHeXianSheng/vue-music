import { createStore } from 'vuex'

export default createStore({
  state: {
    playlist:[{
      "id": 1959420555,
      "name": "同心圆",
      "picUrl": "http://p1.music.126.net/4RMb8NDxp-hbO8sL76uX4w==/109951167596441828.jpg",
      "song": {
          "name": "同心圆",
          "id": 1959420555,
          "artists": [
              {
                  "name": "杨千嬅",
                  "id": 10204,
                  "picUrl": "http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                  "img1v1Url": "http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
              }
          ],
          "album": {
              "name": "同心圆",
              "id": 147150122,
              "picUrl": "http://p4.music.126.net/4RMb8NDxp-hbO8sL76uX4w==/109951167596441828.jpg",
              "publishTime": 1656345600000,
              "description": "",
              "tags": "",
              "company": "中国唱片集团有限公司、新华社新媒体中心",
              "artists": [
                  {
                      "name": "杨千嬅",
                      "id": 10204,
                      "picId": 0,
                      "img1v1Id": 0,
                      "briefDesc": "",
                      "picUrl": "http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                      "img1v1Url": "http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                      "albumSize": 0,
                      "alias": [],
                      "trans": "",
                      "musicSize": 0,
                      "topicPerson": 0
                  }
              ],
          }
      },
      "alg": "hot_server"
  }],
    playlistIndex:0,
    isplay:false,
    lyric:[],
    currentTime:'',
    islogin:false,
    token:'',
  },
  getters: {
  },
  mutations: {
    updateLogin(state,val){
      state.islogin=val
    },
    playOrPause(state,val){
      state.isplay=val
    },
    addPlaySong(state,item){
      state.playlist.unshift(item)
      state.playlistIndex=0
      state.playlist=state.playlist.filter(item =>item!='')
    },
    deletePlaySong(state,id){
      state.playlist=state.playlist.filter(item =>item.id!==id)
      //console.log(state.playlist);
    },
    updatePlaylist(state,val){
      state.playlist=val
      //console.log(state.playlist)
    },
    updatePlaylistIndex(state,val){
      state.playlistIndex=val
      //console.log(state.playlistIndex)
    },
    updateLyric(state,val){
      state.lyric=val
    },
    updateCurrentTime(state,val){
      state.currentTime=val
    }
  },
  actions: {
  },
  modules: {
  }
})
