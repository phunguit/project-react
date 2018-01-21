const uuidv4 = require('uuid/v4');

let jobs = [
	{id: uuidv4(), name: 'Job A', level: 0},
    {id: uuidv4(), name: 'Job B', level: 1},
    {id: uuidv4(), name: 'Job C', level: 2}
];

export default jobs;