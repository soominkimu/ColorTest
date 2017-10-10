import C from '../../../src/constants'
import { color } from '../../../src/store/reducers'
import deepFreeze from 'deep-freeze'

describe("color Reducer", () => {

	it("ADD_COLOR success", () => {
		const state = {}
		const action = {
			type: C.ADD_COLOR,
			id: 0,
			title: 'Test Teal',
			color: '#90C3D4',
			timestamp: new Date().toString()
		}
		deepFreeze(state)
		deepFreeze(action)		
		expect(color(state, action))
			.toEqual({
				id: 0,
				title: 'Test Teal',
				color: '#90C3D4',
				timestamp: action.timestamp,
				rating: 0
			})
	})

	it("RATE_COLOR success", () => {
		const state = {
			id: 0,
			title: 'Test Teal',
			color: '#90C3D4',
			timestamp: "Wed Sep 13 2017 16:30:24 GMT-0700 (PDT)",
			rating: undefined
		}
		const action = {
			type: C.RATE_COLOR,
			id: 0,
			rating: 3
		}
		deepFreeze(state)
		deepFreeze(action)		
		expect(color(state, action))
			.toEqual({
				id: 0,
				title: 'Test Teal',
				color: '#90C3D4',
				timestamp: "Wed Sep 13 2017 16:30:24 GMT-0700 (PDT)",
				rating: 3
			})
	})

})