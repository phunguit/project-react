var defaultState = {
	orderBy: 'name',
	orderDir: 'asc'
};

export let order = (state = defaultState, action) => {
	switch(action.type) {
		case 'ORDER':
			return {
				orderBy: action.orderBy,
				orderDir: action.orderDir
			};
			
		default:
			return state;
	}
}