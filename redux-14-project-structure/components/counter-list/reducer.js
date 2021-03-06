import counterReducer from '../counter/reducer'

// that should come from counter dependency
const counterInitState = { index: 0, value: 0}

export default (state = [], action) => {
	switch (action.type) {
		case 'ADD_COUNTER':
			return [...state, { ...counterInitState, index: state.length }]
		case 'RM_COUNTER':
			let index = 0
			return [...state].filter((fCounter) => {
				if (fCounter.index === action.index)
					return false
				return Object.assign(fCounter, { index: index++ })
			})
		case 'RESET':
		case 'INC':
		case 'DEC':
			return state.map((fCounter) => {
				return fCounter.index == action.index
					? counterReducer(fCounter, action)
					: fCounter
			})
	}
	return state
}