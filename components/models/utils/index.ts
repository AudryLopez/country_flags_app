import { CountryInterface } from "../types";
interface Props {
  country: CountryInterface[];
  setCountries: (countries: CountryInterface[]) => void;
  event: any;
}

export const filterBySearch = (props: Props) => {
  const query = props.event.target.value;
  let updatedList = [...props.country];

  updatedList = updatedList.filter((item) => {
    return item.name.common.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
  props.setCountries(updatedList);
};