export function setLang (state, data) {
	state.lang=data
}

export function unsetLang (state) {
	state.lang='ru'
}

export function setUsername (state, data) {
	state.user_data=data
}

export function unsetUsername (state) {
	state.user_data=''
}

export function setAuth (state, data) {
	state.auth=data
}

export function unsetAuth (state) {
	state.auth=''
}