import { useState } from 'react';
import SearchForm from './searchForm';
import SearchResult from './SearchResult';
import { fetchGroups } from './api';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (town, radius) => {
    try {
      const groups = await fetchGroups(town, radius);
      setSearchResults(groups);
    } catch (error) {
      console.error('Error fetching groups:', error);
    }
  };

  return (
    <div className='mt-40'>
      <h1 className='text-4xl text-center font-bold mb-5'>Facebook Group Search Tool</h1>
      <SearchForm onSearch={handleSearch} />
      <SearchResult groups={searchResults} />
    </div>
  );
}

export default App;
