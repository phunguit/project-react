import * as Types from '../constants/ActionTypes';

export const AcCloseForm = () => {
	return {type: Types.CLOSE_FORM}
}

export const AcOpenForm = () => {
	return {type: Types.OPEN_FORM}
}

export const AcToggerForm = () => {
	return {type: Types.TOGGER_FORM}
}

export const AcOrder = (orderBy, orderDir) => {
	return {
		type: Types.ORDER,
		orderBy,
		orderDir
	}
}

export const AcSearch = (strSearch) => {
	return { type: Types.SEARCH, strSearch}
}

export const AcDelete = id => {
	return { type: Types.DELETE, id }
}

export const AcSubmitForm = (item) => {
	return { type: Types.SUBMIT_FORM, item }
}

export const AcSelectItem = (item) => {
	return { type: Types.SELECT_ITEM, item}
}

export const AcUnSelectItem = () => {
	return { type: Types.UNSELECT_ITEM}
}