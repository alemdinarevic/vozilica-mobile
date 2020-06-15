import { GET_POSTS, GET_RANDOM_QUOTE, GET_FAVORITE_QUOTES, SET_FAVORITE_QUOTE } from '../actions/post';

const innitialState = {
	posts: [],
	loading: false,
	error: null
}

const postReducer = (state = innitialState, action) => {
	switch(action.type) {
		case GET_POSTS:
			return { ...state, posts: action.posts, }
		case GET_RANDOM_QUOTE:
			return { ...state, posts: action.posts }
		case GET_FAVORITE_QUOTES:
			return { ...state, posts: action.posts }
		case SET_FAVORITE_QUOTE:
			return { ...state }
		default:
			return state;
	}
  return state;
}

export default postReducer;