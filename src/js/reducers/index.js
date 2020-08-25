import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
    articles: []
};

//initialState is immutable, we use Object.assign() to create an new object to represent the new state
//and keep the original state unchanged
//then we use concat instead of push to return a new array to the articles of the new object
//to keep the original article unchanged
//by doing this we keep our initialState pure through out the app

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    return state;
}

export default rootReducer;