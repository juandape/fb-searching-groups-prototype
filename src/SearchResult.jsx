import PropTypes from 'prop-types';

SearchResult.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      members: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function SearchResult({ groups }) {
  return (
    <>
<hr />
      <h2 className='text-center text-2xl font-bold'>Search Results</h2>
      <ul>
        {groups.map((group) => (
          <li key={group.id}>
            <h3>{group.name}</h3>
            <p>Members: {group.members}</p>
            <p>Description: {group.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default SearchResult;
