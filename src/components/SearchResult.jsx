import PropTypes from 'prop-types';

function SearchResult({ groups }) {
  return (
    <>
      <hr />
      <h2 className='text-center text-2xl font-bold'>Search Results</h2>
      <ul>
        {groups.map((group) => (
          <li key={group.id}>
            <h3>{group.groups}</h3>
            <p>State: {group.state}</p>
            <p>Members: {group.members}</p>
            <p>Town: {group.town}</p>
            <p>Type: {group.type}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

SearchResult.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      groups: PropTypes.string.isRequired,
      members: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SearchResult;
