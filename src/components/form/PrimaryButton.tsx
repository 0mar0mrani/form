export default function Button({name, submitMethod, isDisabled }) {
	return (
		<button
			className={`form__button-primary ${isDisabled ? 'form__button-primary--disabled' : ''}`}
			onClick={submitMethod}>
			{name}
		</button>
	)
}