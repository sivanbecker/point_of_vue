import axios from 'axios';
const bp_mountpoint = "albums"
const ROOT_API = process.env.VUE_APP_API + bp_mountpoint
const state = {
    albums: {},
}

const getters = {
    getAlbums: (state) => state.albums,
}

const actions = {
    async fetchAlbums({commit}) {
        await axios.get(ROOT_API).then(response => {
            commit('setAlbums', response.data)
        })
    }
}

const mutations = {
    setAlbums: (state, albumsData) => (state.albums = albumsData)

}

export default {
    state,
    getters,
    actions,
    mutations
};