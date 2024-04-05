import { useState } from 'react';
import SearchResult from './components/SearchResult';
import SearchForm from './components/SearchForm';
import { apiGroups } from '../utils/mockData';

function App() {
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [radius, setRadius] = useState('');
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
        setRadius(radius);
      }
    } catch (error) {
      console.error('Error searching groups:', error);
      setError('Failed to search groups. Please try again.');
      setSearchResults([]);
    }
  };

  return (
    <div className='mt-20 relative'>
      <div className='mx-auto w-80 mb-10'>
        <img
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1712282416/upload-folder/615c5497a251fd06817ac696_facebook_tj8ojo.jpg'
          alt='facebook groups img'
          className='rounded-t-lg w-full'
        />
      </div>
      <h1 className='xl:text-4xl text-3xl text-center font-bold mb-5 text-blue-600'>
        Facebook Group Search Tool
      </h1>
      <SearchForm onSearch={handleSearch} />
      {error && (
        <p className='text-blue-700 xl:text-xl absolute left-1/2 transform -translate-x-1/2 translate-y-28'>
          {error}
        </p>
      )}
      <SearchResult groups={searchResults} radius={radius} />
    </div>
  );
}

export default App;
