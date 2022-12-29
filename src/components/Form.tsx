import { React, useState, useEffect } from 'react'

import PrimaryButton from './form/PrimaryButton.js'
import RadioInput from './form/RadioInput.js'
import SecondaryButton from './form/SecondaryButton.js'
import SelectInput from './form/SelectInput.js'
import TextInput from './form/TextInput.js'

export default function Form() {
	interface currentData {
		value: string
		isValid: boolean 
		message: string
	}

	const [ isFormValid, setFormValidation ] = useState<boolean>(false);
	const [ currentData, setCurrentData ] = useState<currentData>({
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

		country: {
			value: '',
			isValid: false,
			message: '',
		},

		gender: {
			value: '',
			isValid: false,
			message: '',
		}
	})

	const selectCountryOptions = [
		{ value: 'norway', label: 'Norge'},
		{ value: 'denmark', label: 'Danmark'},
		{ value: 'sweden', label: 'Sverige'},
	]

	const radioGenderOptions = [
		{ value: 'male', label: 'Mann'},
		{ value: 'female', label: 'Kvinne'},
		{ value: 'other', label: 'Annet'},
		{ value: 'no', label: 'Ønsker ikke å oppgi'},
	]

	useEffect(() => {
		getFormLocally();
	}, [])
	
	useEffect(() => {
		setFormValidationBasedOnElementValidation();
		storeFormLocally();
	}, [currentData.firstName.value, currentData.lastName.value, currentData.country.value, currentData.gender.value])

	function handleFirstNameChange(event: React.ChangeEvent<HTMLInputElement>) {
		const key = 'firstName';
		const textInputValue = event.target.value;
		const isInputValid = returnContainsOnlyLetters(textInputValue);

		setCurrentDataValue(key, textInputValue);
		setCurrentDataIsValid(key, isInputValid);
	}

	function handleLastNameChange(event: React.ChangeEvent<HTMLInputElement>) {
		const key = 'lastName';
		const textInputValue = event.target.value;
		const isInputValid = returnContainsOnlyLetters(textInputValue);

		setCurrentDataValue(key, textInputValue);
		setCurrentDataIsValid(key, isInputValid);
	}

	function handleCountryChange(event: React.ChangeEvent<HTMLInputElement>) {
		const key = 'country';
		const selectInputValue = event.target.value;
		const isInputValid = selectInputValue !== ''; 

		setCurrentDataValue(key, selectInputValue);
		setCurrentDataIsValid(key, isInputValid);
	}

	function handleGenderChange(event: React.ChangeEvent<HTMLInputElement>) {
		const key = 'gender';
		const radioInputValue = event.target.value;
		const isInputValid = radioInputValue !== ''; 
		
		setCurrentDataValue(key, radioInputValue);
		setCurrentDataIsValid(key, isInputValid);
	}

	function setCurrentDataValue(key: string, inputValue: string) {
		setCurrentData(currentData => ({
			...currentData, 
			[key]: {
				...currentData[key], 
				value: inputValue, 
			},
		}));
	}

	function setCurrentDataIsValid(key: string, isInputValid: boolean) {
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

	function storeFormLocally() {
		const form = currentData;
		const serializedForm = JSON.stringify(form);
		window.localStorage.setItem('formLocal', serializedForm);
	}

	function getFormLocally() {
		const localForm = window.localStorage.getItem('formLocal');
		
		if (localForm) {
			const parsedLocalForm = JSON.parse(localForm);
			setCurrentData(parsedLocalForm);
		}
	}

	function onReset(event: MouseEvent) {
		event.preventDefault();

		for (const key in currentData) {
			setCurrentData(currentData => ({
				...currentData, 
				[key]: {
					value: '',
					isValid: false,
					message: '',
				},
			}));
		}
	}

	function onSubmit(event: MouseEvent) {
		event.preventDefault();
		console.log(currentData);
	}

	return (
		<form action="/" className="form">
			<fieldset className="form__fieldset">
				<legend className="form__legend">Personlig informasjon</legend>

				<TextInput 
					name={"Fornavn"}
					stateValue={currentData.firstName.value}
					placeholderText="Ola" 
					onChange={handleFirstNameChange} 
					isValid={currentData.firstName.isValid}
					errorMessage={"Fyll ut med bokstaver (inkludert mellomrom og bindestrek)."}
				/>

				<TextInput 
					name={"Etternavn"}
					stateValue={currentData.lastName.value}
					placeholderText="Normann" 
					onChange={handleLastNameChange} 
					isValid={currentData.lastName.isValid}
					errorMessage={"Fyll ut med bokstaver (inkludert mellomrom og bindestrek)."}
				/>

				<SelectInput
					name={"Land"}
					stateValue={currentData.country.value}
					onChange={handleCountryChange}
					isValid={currentData.country.isValid}
					options={selectCountryOptions}
				/>

				<RadioInput
					name={"Kjønn"}
					stateValue={currentData.gender.value}
					onChange={handleGenderChange}
					isValid={currentData.gender.isValid}
					options={radioGenderOptions}
				/>

				<div className="form__buttons">
					<SecondaryButton
						name={"Avbryt"}
						clearMethod={onReset}
					/>
					
					<PrimaryButton 
						name={"Send inn"}
						submitMethod={onSubmit} 
						isDisabled={!isFormValid}
					/>
				</div>
			</fieldset>
		</form>
	)
}