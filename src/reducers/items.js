var defaultState = [];

let jobs = JSON.parse(localStorage.getItem('jobs'));

defaultState = (jobs !== null && jobs.length > 0) ? jobs : defaultState;

const items = (state = defaultState, action) => {
	return defaultState;
};

export default items;