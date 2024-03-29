interface Props {
  search: string;
  setSeach: (search: string) => void;
}

export default function InputSearch({ search, setSeach }: Props) {

  return(
    <div className='w-full'>
      <input 
        type="text" value={search} 
        onChange={(e) => setSeach(e.target.value)}
        placeholder="Search for a country..."
        className='w-full text-sm rounded-md h-10 bg-light-elements-primary dark:bg-dark-elements-primary outline-none px-8 py-1 text-light-text-100 dark:text-dark-text-100'
      />
    </div>
  );
}