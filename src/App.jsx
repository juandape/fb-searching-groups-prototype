import { useState } from 'react';
import SearchResult from './components/SearchResult';
import SearchForm from './components/SearchForm';
import { apiGroups } from '../utils/mockData';

function App() {
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (town, radius) => {
    try {
      const filteredGroups = apiGroups.filter((group) => {
        const distanceWithinRadius =
          group.town.toLowerCase() === town.toLowerCase() &&
          parseInt(group.radius) <= radius;
        const meetsMembershipCriteria =
          group.type === 'community' || group.type === 'town';
        const hasOver1000Members = group.Members > 1000;
        const isPrivateNonBusinessGroup =
          group.private === 'yes' && group.bussiness === 'no';

        return (
          distanceWithinRadius &&
          meetsMembershipCriteria &&
          hasOver1000Members &&
          isPrivateNonBusinessGroup
        );
      });
      if (filteredGroups.length === 0) {
        setError('No matching groups found.');
      } else {
        setSearchResults(filteredGroups);
        setError(null);
      }
    } catch (error) {
      console.error('Error searching groups:', error);
      setError('Failed to search groups. Please try again.');
      setSearchResults([]);
    }
  };

  return (
    <div className='mt-40 relative'>
      <h1 className='text-4xl text-center font-bold mb-5'>
        Facebook Group Search Tool
      </h1>
      <SearchForm onSearch={handleSearch} />
      {error && (
        <p className='text-red-500 absolute top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          {error}
        </p>
      )}
      <SearchResult groups={searchResults} />
    </div>
  );
}

export default App;
