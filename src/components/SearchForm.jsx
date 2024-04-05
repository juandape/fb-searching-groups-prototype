import { useState } from 'react';
import PropTypes from 'prop-types';

function SearchForm({ onSearch }) {
  const [town, setTown] = useState('');
  const [radius, setRadius] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(town, radius);
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col'>
      <label className='text-xl mx-auto text-blue-600 font-bold'>
        Town
        <input
          type='text'
          placeholder='Enter town name'
          value={town}
          className='border-2 border-gray-300 p-2 rounded-lg w-48 my-4 ml-8 text-base hover:bg-gray-100'
          onChange={(e) => setTown(e.target.value)}
        />
      </label>
      <label className='text-xl mx-auto text-blue-600 font-bold'>
        Radius
        <input
          type='number'
          placeholder='Enter radius in miles'
          value={radius}
          className='border-2 border-gray-300 p-2 rounded-lg w-48 mb-4 ml-5 text-base hover:bg-gray-100'
          onChange={(e) => setRadius(e.target.value)}
        />
      </label>
      <button
        className='border-2 p-2 mx-auto font-bold rounded-lg w-20 mb-10 bg-blue-600 text-white hover:bg-blue-800'
      >
        Search
      </button>
    </form>
  );
}

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
