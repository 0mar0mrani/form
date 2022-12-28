import { useState, useEffect } from 'react'

import TextInput from './form/TextInput.tsx'
import PrimaryButton from './form/PrimaryButton.tsx'
import SecondaryButton from './form/SecondaryButton.tsx'
import SelectInput from './form/SelectInput.tsx'
import RadioInput from './form/RadioInput.tsx'

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

	const selectOptions = [
		{ value: 'norway', label: 'Norge'},
		{ value: 'denmark', label: 'Danmark'},
		{ value: 'sweden', label: 'Sverige'},
	]

	const radioOptions = [
		{ value: 'male', label: 'Mann'},
		{ value: 'female', label: 'Kvinne'},
		{ value: 'other', label: 'Annet'},
		{ value: 'no', label: 'Ønsker ikke å oppgi'},
	]
	
	useEffect(() => {
		setFormValidationBasedOnElementValidation();
	}, [currentData.firstName.value, currentData.lastName.value, currentData.country.value, currentData.gender.value])

	function handleFirstNameChange(event: InputEvent | null) {
		const key = 'firstName';
		const textInputValue = event.currentTarget.value;
		const isInputValid = returnContainsOnlyLetters(textInputValue);

		setCurrentDataValue(key, textInputValue);
		setCurrentDataIsValid(key, isInputValid);
	}

	function handleLastNameChange(event) {
		const key = 'lastName';
		const textInputValue = event.target.value;
		const isInputValid = returnContainsOnlyLetters(textInputValue);

		setCurrentDataValue(key, textInputValue);
		setCurrentDataIsValid(key, isInputValid);
	}

	function handleCountryChange(event) {
		const key = 'country';
		const selectInputValue = event.target.value;
		const isInputValid = selectInputValue !== ''; 

		setCurrentDataValue(key, selectInputValue);
		setCurrentDataIsValid(key, isInputValid);
	}

	function handleGenderChange(event) {
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

	function onReset(event) {
	}

	function onSubmit(event) {
		event.preventDefault();
		console.log(currentData);
	}

	return (
		<form action="/" className="form">
			<fieldset className="form__fieldset">
				<legend className="form__legend">Personlig Informasjon</legend>

				<TextInput 
					name={"Fornavn"}
					placeholderText="Ola" 
					onChange={handleFirstNameChange} 
					isValid={currentData.firstName.isValid}
				/>

				<TextInput 
					name={"Etternavn"}
					placeholderText="Normann" 
					onChange={handleLastNameChange} 
					isValid={currentData.lastName.isValid}
				/>

				<SelectInput
					name={"Land"}
					onChange={handleCountryChange}
					isValid={currentData.country.isValid}
					options={selectOptions}
				/>

				<RadioInput
					name={"Kjønn"}
					onChange={handleGenderChange}
					isValid={currentData.gender.isValid}
					options={radioOptions}
				/>

				<div className="form__buttons">
					<SecondaryButton
						clearMethod={onReset}
						name={"Avbryt"}
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