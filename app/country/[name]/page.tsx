'use client';
import { useParams } from "next/navigation";
import { getCountryByName } from "@/components/models/api/country";
import { useEffectOnce } from "react-use";
import { useState } from "react";
import { CountryInterface } from "@/components/models/types";
import Image from 'next/image';

function useCountry() {
  const [country, setCountry] = useState<CountryInterface>();
  const params = useParams();

  const getCountry = async () => {
    const response = await getCountryByName(params.name.toString().toLocaleLowerCase());
    setCountry(response[0] as CountryInterface);
  }

  useEffectOnce(() => {
    getCountry();
  })
  
  return {
    models: {
      params,
      country
    }
  }
}

export default function Country() {
  const { models: { country } } = useCountry();

  if (country) {

    return (
      <section className='px-4 py-4 text-light-text-100 dark:text-dark-text-100'>
        <span className='flex flex-col gap-4'>
          <Image
            src={country?.flags?.png ?? country?.flags?.svg}
            alt={country?.flags?.alt ?? `flag of ${country.name}`}
            width={500}
            height={500}
            className=''
            priority
          />
          <aside>
            <h3 className=' text-base font-extrabold'>{country.name.common}</h3>
          </aside>
          <div>

          </div>
          <footer className='flex flex-col gap-2.5'>
            <label>Border Countries</label>
            <span className='flex gap-2'>
              {country.borders.map((name: string) => { return(
                <p className=" w-16 h-8 shadow-md rounded-md flex justify-center items-center bg-light-elements-primary dark:bg-dark-elements-primary">
                  {name}
                </p>
              ) })}
            </span>
          </footer>
        </span>
      </section>
    );
  }
}