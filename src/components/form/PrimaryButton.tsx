export default function Button({name, submitMethod, isDisabled }) {
	return (
		<button
			className={`form__button ${isDisabled ? 'form__button--disabled' : ''}`}
			onClick={submitMethod}>
			{name}
		</button>
	)
}