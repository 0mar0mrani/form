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
		const isInputValid = returnContainsOnlyLetters(textInputValue);

		setCurrentDataValue(key, textInputValue);
		setCurrentDataIsValid(key, isInputValid);
	}

	function handleLastNameInput(event) {
		const key = 'lastName';
		const textInputValue = event.currentTarget.value;
		const isInputValid = returnContainsOnlyLetters(textInputValue);

		setCurrentDataValue(key, textInputValue);
		setCurrentDataIsValid(key, isInputValid);
	}

	function setCurrentDataValue(key: string, textInputValue: string) {
		setCurrentData(currentData => ({
			...currentData, 
			[key]: {
				...currentData[key], 
				value: textInputValue, 
			},
		}));
	}

	function setCurrentDataIsValid(key, isInputValid) {
		setCurrentData(currentData => ({
			...currentData, 
			[key]: {
				...currentData[key], 
				isValid: isInputValid, 
			},
		}));
	}

	function returnContainsOnlyLetters(key: string) {
		const letters = /^[a-åA-Å\s-]+$/;

		if (letters.test(key)) {
			return true;
		} else {
			return false;
		}
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