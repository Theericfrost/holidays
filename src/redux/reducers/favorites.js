const initialState = {
    favorites: []
}

export default function favorites(state = initialState, action) {
    switch (action.type) {
        case 'ADD':
            return {
                favorites: [...state.favorites, action.value]
            }
        case 'DELETE': 
            return {
                favorites: state.favorites.filter((event)=>{
                    return JSON.stringify(event) !== JSON.stringify(action.value)
                })
            }
        default:
            return state
    }
}