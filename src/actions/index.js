export const AcCloseForm = () => {
	return {type: 'CLOSE_FORM'}
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