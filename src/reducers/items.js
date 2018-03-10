var defaultState = [
	{id: '123', name: 'ABC', level: 0},
	{id: '456', name: 'DEF', level: 1},
	{id: '789', name: 'JSK', level: 2}
];

const items = (state = defaultState, action) => {
	return defaultState;
};

export default items;