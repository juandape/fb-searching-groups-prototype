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
    <form onSubmit={handleSubmit} className='flex flex-col w-96 mx-auto'>
      <label className='text-xl'>
        Town
        <input
          type='text'
          placeholder='Enter town name'
          value={town}
          className='border-2 border-gray-300 p-2 rounded-lg w-48 my-4 ml-8'
          onChange={(e) => setTown(e.target.value)}
        />
      </label>
      <label className='mr-5 text-xl'>
        Radius
        <input
          type='number'
          placeholder='Enter radius in miles'
          value={radius}
          className='border-2 border-gray-300 p-2 rounded-lg w-48 mb-4 ml-5'
          onChange={(e) => setRadius(e.target.value)}
        />
      </label>
      <button
        type='submit'
        className='border-2 border-gray-300 p-2 rounded-lg w-20 ml-20 hover:bg-gray-300 mb-10'
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
