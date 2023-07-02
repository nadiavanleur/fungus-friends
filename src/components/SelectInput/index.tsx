export default function SelectInput(props) {
  return (
    <div className="select">
      <select name={props.name} id={props.id} onChange={props.onChange}>
        {props.options.map((option, n) => (
          <option key={`${n}_${option}`}>{option}</option>
        ))}
      </select>
    </div>
  )
}