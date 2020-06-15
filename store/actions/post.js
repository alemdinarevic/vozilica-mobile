import URLs from '../../constants/urls';
import axios from 'axios';

export const GET_POSTS = 'GET_POSTS';
export const GET_RANDOM_QUOTE = 'GET_RANDOM_QUOTE';
export const GET_FAVORITE_QUOTES = 'GET_FAVORITE_QUOTES';
export const SET_FAVORITE_QUOTE = 'SET_FAVORITE_QUOTE';


export const getPosts = () => {
	return (dispatch, getState) => {
		axios.get(URLs.base.concat('/posts'), {
			headers: {
				Authorization: 'Bearer ' + getState().auth.token
			}})
			.then(posts => {
				return dispatch({
					type: GET_POSTS,
					posts: posts.data,
				});
			})
			.catch(error => {
				console.log(error)
				return false;
		});
	}
}

export const getRandomQuote = () => {
	return dispatch => {
		axios.get(URLs.base.concat('/quotes/daily'))
			.then(quote => {
				return dispatch({
					type: GET_RANDOM_QUOTE,
					quote: quote.data
				});
			})
			.catch(error => {
				console.log(error)
				return false;
		});
	}
}

export const setFavoriteQuote = (quote) => {
	return (dispatch, getState) => {
		axios.post(URLs.base.concat('/quotes/set_favorite'), {
			user_id:  getState().auth.userId,
			quote_id: quote.id
		}, {
			headers: {
				Authorization: 'Bearer ' + getState().auth.token
			}})
			.then(quotes => {
				return dispatch({
					type: SET_FAVORITE_QUOTE,
					favoriteQuote: quotes.data.favorite_quote
				});
			})
			.catch(error => {
				console.log(error)
				return false;
		});
	}
}