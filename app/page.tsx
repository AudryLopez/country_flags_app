'use client';
import { useEffectOnce, } from "react-use";
import { countryFeed } from "@/components/models/api/country";
import { useEffect, useState } from "react";
import { CountryInterface } from "@/components/models/types"
import CountryCard from "@/components/molecules/country-card";
import InputSearch from "@/components/molecules/input-search";

function useHome(){
  const [countries, setCountries] = useState<CountryInterface[]>([]);
  const [search, setSearch] = useState('');

  const getCountries = async () => {
    const response = await countryFeed();
    setCountries(response);
  }
  useEffectOnce(() => {
    getCountries();
  })

  return {
    models: { countries, search },
    operations: { setSearch, setCountries }
  }
}

export default function Home() {
  const { models, operations } = useHome();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-5 py-8 gap-3">
      <InputSearch
        search={models.search} 
        setSeach={operations.setSearch}
      />
      <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-5'>
        {models.countries
          .filter((item) =>
            item.name.common
              .toLowerCase()
              .includes(models.search.toLowerCase())
          )
          .map((country: CountryInterface, index: number) => {
          return (
            <CountryCard country={country} key={index} />
          );
        })}
      </section>
    </main>
  );
}
