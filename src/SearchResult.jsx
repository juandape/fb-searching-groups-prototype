
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
    <div>
      <h2>Search Results</h2>
      <ul>
        {groups.map((group) => (
          <li key={group.id}>
            <h3>{group.name}</h3>
            <p>Members: {group.members}</p>
            <p>Description: {group.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResult;
