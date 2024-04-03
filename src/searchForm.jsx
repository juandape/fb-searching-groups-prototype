import { useState } from 'react';

import PropTypes from 'prop-types';

function SearchForm({ onSearch }) {
  SearchForm.propTypes = {
    onSearch: PropTypes.func.isRequired,
  };
  const [town, setTown] = useState('');
  const [radius, setRadius] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(town, radius);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Enter town name'
        value={town}
        onChange={(e) => setTown(e.target.value)}
      />
      <input
        type='number'
        placeholder='Enter radius in miles'
        value={radius}
        onChange={(e) => setRadius(e.target.value)}
      />
      <button type='submit'>Search</button>
    </form>
  );
}

export default SearchForm;
