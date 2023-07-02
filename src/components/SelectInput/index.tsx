import style from './select-input.module.scss';

type Props = {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  clearValue: () => void;
  options: { value: string, label: string }[];
  value: string;
}

export default function SelectInput(props: Props) {
  const { name, onChange, options, value, clearValue } = props;

  return (
    <div className={style.selectContainer}>
      <label htmlFor={name} className="sr-only">{name}</label>
      <select id={name} name={name} onChange={onChange} value={value} className={style.select}>
        <option value="">All</option>
        {options.map((option) => (
          <option key={`${option.value}_${option.label}`} value={option.value}>{option.label}</option>
        ))}
      </select>
      <button type="button" className={style.button} onClick={clearValue} disabled={!value} title={`Clear ${name} value`}>x</button>
    </div>
  )
}