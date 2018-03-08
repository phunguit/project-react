var defaultState = {
	orderBy: 'name',
	orderDir: 'asc'
};

export let order = (state = defaultState, action) => {
	switch(action.type) {
		case 'ORDER':
			defaultState.orderBy = action.orderBy;
			defaultState.orderDir = action.orderDir;
			return state;
			
		default:
			return state;
	}
}