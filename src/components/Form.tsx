import { useState, useEffect } from 'react';

export default function Form() {
	const [ isFormValid, setFormValidation ] = useState(false);
	const [ currentData, setCurrentData ] = useState({
		firstName: {
			value: '',
			isValid: false,
			type: 'name',
			message: '',
		},

		lastName: {
			value: '',
			isValid: false,
			type: 'name',
			message: '',
		},
	})
}