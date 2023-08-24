export const initialState = {
    user: null,
    //token: null,
    playlists: [],
    playlist_map: {},// Maps playlist names to their ids (hashmap)
    current_playlist: null,

    to_be_deleted: {} // List of song names to be deleted - key value pairs are playlist_name: song_name
}

const reducer = (state, action) => {

    console.log(action)

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token
            }
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists,
            }
        case "SET_PLAYLIST_MAP":
            return{
                ...state,
                playlist_map: action.playlist_map,
            }
        case "SET_CURRENT_PLAYLIST":
            return{
                ...state,
                current_playlist: action.current_playlist,
            }
        default:
            return state;
    }
}

export default reducer