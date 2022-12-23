import { useState, useEffect } from 'react'

import TextInput from './form/TextInput.tsx'
import PrimaryButton from './form/PrimaryButton.tsx'

export default function Form() {
	const [ isFormValid, setFormValidation ] = useState(false);
	const [ currentData, setCurrentData ] = useState({
		firstName: {
			value: '',
			isValid: false,
			message: '',
		},

		lastName: {
			value: '',
			isValid: false,
			message: '',
		},
	})

	useEffect(() => {
		setFormValidationBasedOnElementValidation();
	}, [currentData.firstName.value, currentData.lastName.value,])

	function handleFirstNameChange(event: React.ChangeEvent<HTMLInputElement>) {
		const key = 'firstName';
		const textInputValue = event.currentTarget.value;
		const isInputValid = returnContainsOnlyLetters(textInputValue);

		setCurrentDataValue(key, textInputValue);
		setCurrentDataIsValid(key, isInputValid);
	}

	function handleLastNameChange(event: React.ChangeEvent<HTMLInputElement>) {
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

	function setFormValidationBasedOnElementValidation () {
		const containNoFalse = 0;
		const arrayOfFalse: boolean[] = [];


		for (const formSection in currentData) {
			const formSectionObject = currentData[formSection];

			if (!formSectionObject.isValid) {
				arrayOfFalse.push(false) ;
			}
		}

		if (arrayOfFalse.length === containNoFalse) {
			setFormValidation(true) 
		} else {
			setFormValidation(false) 
		}
	}

	function returnContainsOnlyLetters(key: string) {
		const letters = /^[a-åA-Å\s-]+$/;

		if (letters.test(key)) {
			return true;
		} else {
			return false;
		}
	}

	function onSubmit(event) {
		event.preventDefault();

		console.log('Post request!!');
	}

	return (
		<form action="/">
			<TextInput 
				placeholderText="Fornavn" 
				onChange={handleFirstNameChange} 
				isValid={currentData.firstName.isValid}
			/>

			<TextInput 
				placeholderText="Etternavn" 
				onChange={handleLastNameChange} 
				isValid={currentData.lastName.isValid}
			/>

			<PrimaryButton 
				submitMethod={onSubmit} 
				isDisabled={!isFormValid}
			/>
		</form>
	)
}