import PropTypes from 'prop-types';

function SearchResult({ groups }) {
  const formatToThousand = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num;
  };

  const pClass = 'ml-4 xl:text-lg';

  return (
    <>
      <hr />
      <h2 className='text-center text-2xl xl:text-3xl font-bold mt-5 text-blue-700'>
        Search Results
      </h2>
      <div className='mt-10 flex justify-around flex-wrap animate-page-enter'>
        {groups.map((group) => (
          <div
            key={group.id}
            className='border-2 border-blue-500 w-80 mb-6 mx-auto rounded-lg shadow-lg p-3 transition-transform duration-300 ease-in-out hover:scale-105'
          >
            <a href={group.link} target='_blank' rel='noopener noreferrer'>
              <p className='text-xl text-blue-700 text-center font-bold mb-2'>
                {group.groups}
              </p>
              <p className={pClass}>
                <strong>State:</strong> {group.state}
              </p>
              <p className={pClass}>
                <strong>Town:</strong> {group.town}
              </p>
              <p className={pClass}>
                <strong>Members:</strong> {formatToThousand(group.Members)}
              </p>
              <p className={pClass}>
                <strong>Distance:</strong> {group.radius} miles
              </p>
              <p className={pClass}>
                <strong>Type:</strong> {group.type}
              </p>
            </a>
          </div>
        ))}
      </div>
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
