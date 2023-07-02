import { Mushroom } from "@/pages/api/mushrooms";
import SelectInput from "../SelectInput";
import { Color, Spots } from '@/pages/api/mushrooms';
import { capitalize } from '@/utils/formatString'
import style from './filter.module.scss'
import { Filters } from "@/pages";

type Props = {
  mushrooms: Mushroom[];
  filters: Filters;
  setFilters: (filters: Filters) => void;
}

export default function Filter(props: Props) {
  const { mushrooms, filters, setFilters } = props;

  const filterEnum = {
    color: Color,
    spots: Spots
  }

  const options = (key: keyof Filters) => mushrooms.reduce((a, mushroom) => {
    if (
      !a.find(b => b.value === `${mushroom[key]}`) &&
      !Object.keys(filters).filter(k => k !== key).find((k) => {
        const typeK = k as keyof Filters;
        filters[typeK] !== '' && filters[typeK] !== mushroom[typeK]
      })
    ) {
      a.push({
        value: `${mushroom[key]}`,
        label: capitalize(filterEnum[key][mushroom[key]])
      });
    }
    return a;
  }, [] as { value: string, label: string }[]);

  return (
    <div className={style.filter}>
      {Object.keys(filters).map((key) => {

        return (
          <SelectInput
            key={key}
            name={key}
            options={options(key as keyof Filters)}
            onChange={(event) => setFilters({ ...filters, [key]: event.target.value ? parseInt(event.target.value) : '' })}
            value={`${filters[key as keyof typeof filters]}`}
            clearValue={() => setFilters({ ...filters, [key]: '' })}
          />
        )
      })}
    </div>
  )
}