import { CountryInterface } from "@/components/models/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  country: CountryInterface
}

export default function (props: Props) {
  const { country } = props;
  
  return(
    <Link href={`/country/${country.name.common}`}
      className='w-[275px] flex flex-col rounded-lg bg-light-elements-primary dark:bg-dark-elements-primary'
    >
      <header className='w-full  aspect-auto'>
        <Image
          src={country?.flags?.png ?? country?.flags?.svg}
          alt={country?.flags?.alt ?? `flag of ${country.name}`}
          width={500}
          height={500}
          className=' rounded-t-lg h-40'
          priority
        />
      </header>
      <footer className='flex flex-col p-4 gap-3  text-light-base-primary dark:text-dark-text-100'>
        <h3 className="text-lg font-semibold">{country?.name?.common}</h3>
        <span className='flex flex-col gap-1.5'>
          <p><strong>Population:</strong> {new Intl.NumberFormat('en-US').format(country?.population)}</p>
          <p><strong>Region:</strong> {country?.region}</p>
          <p><strong>Capital:</strong> {country?.capital}</p>
        </span>
      </footer>
    </Link>
  );
}