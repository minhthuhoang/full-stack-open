const PersonForm = (props) => (
  <form onSubmit={props.onSubmit}>
    <div>
      name: <input value={props.nameValue} onChange= {props.nameInputChange} />
    </div>
    <div>
      number: <input value={props.numberValue} onChange={props.numberInputChange} />
    </div>
    <div>
      <button type="submit">{props.buttonText}</button>
    </div>
  </form>
)

export default PersonForm