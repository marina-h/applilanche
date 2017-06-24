import Redux, { createStore } from 'redux';
import reducer from '../reducers/reducer.js'

const array = [0,1,2,3,4];

const emailSubmitArray = 
	array.map((element) => {
		return {
			0 : "",
			1 : "",
			2 : "",
			"radio" : "default"
			//,visible : (element === 0) ? true : false	
		}
	});

const DEFAULT_STATE = {
	header:{headerSelected:0},
	scraper:{},
	email:{
		emailSubmitData : emailSubmitArray,
		tabSelected : ""
	},
	appData:{
		coverLetters:["default","snarky"]
	}

};

export default createStore(reducer,DEFAULT_STATE);