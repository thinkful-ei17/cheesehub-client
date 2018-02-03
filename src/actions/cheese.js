export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => ({
  type: FETCH_CHEESES_REQUEST
});

export const FETCH_CHEESES_SUCCESS= 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = cheeses =>({
  type: FETCH_CHEESES_SUCCESS,
  cheeses
});

export const FETCH_CHEESES_ERROR= 'FETCH_CHEESES_ERROR';
const fetchCheesesError = error => ({
  type: FETCH_CHEESES_ERROR,
  error
});


const fetchCheeses = () => {
  dispatch(fetchCheesesRequest());
  return fetch('http://localhost:8080/api/cheeses')
    .then(res => {
      if(!res.ok){
        return Promise.reject('Something went wrong');
      }
      return res.json();
    })
    .then(cheeses => dispatch(fetchCheesesSuccess(cheeses)))
    .catch(error => dispatch(fetchCheesesError));
};