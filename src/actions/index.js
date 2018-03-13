export const AcCloseForm = () => {
	return {type: 'CLOSE_FORM'}
}

export const AcOpenForm = () => {
	return {type: 'OPEN_FORM'}
}

export const AcToggerForm = () => {
	return {type: 'TOGGER_FORM'}
}

export const AcOrder = (orderBy, orderDir) => {
	return {
		type: 'ORDER',
		orderBy,
		orderDir
	}
}

export const AcSearch = (strSearch) => {
	return { type: 'SEARCH', strSearch}
}

export const AcDelete = id => {
	return { type: 'DELETE', id }
}

export const AcAdd = (item) => {
	return { type: 'ADD', item }
}