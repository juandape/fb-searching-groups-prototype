import PropTypes from 'prop-types';

function SearchResult({ groups }) {
  return (
    <>
      <hr />
      <h2 className='text-center text-3xl font-bold mt-5'>Search Results</h2>
      <ul className=''>
        {groups.map((group) => (
          <li key={group.id} className='border-2 w-80 mb-4 mx-auto'>
            <h3 className='text-xl text-blue-500'>
              Group Name: {group.groups}
            </h3>
            <p>State: {group.state}</p>
            <p>Members: {group.Members}</p>
            <p>Distance: {group.radius} miles</p>
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
