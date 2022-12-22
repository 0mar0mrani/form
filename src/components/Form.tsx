import { useState, useEffect } from 'react'

import TextInput from './form/TextInput.tsx'
import PrimaryButton from './form/PrimaryButton.tsx'

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

	function handleFirstNameInput(event) {
		const key = 'firstName';
		const textInputValue = event.currentTarget.value;

	}

	function handleLastNameInput(event) {
		const key = 'lastName';
		const textInputValue = event.currentTarget.value;
	}

	return (
		<form action="/">
			<TextInput 
				placeholderText="Fornavn" 
				onInput={handleFirstNameInput} 
				// message={}
			/>

			<TextInput 
				placeholderText="Etternavn" 
				onInput={handleLastNameInput} 
				// message={}
			/>

			<PrimaryButton 
				// submitMethod={} 
				isDisabled={!isFormValid}
			/>
		</form>
	)
}