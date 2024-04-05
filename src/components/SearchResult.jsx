import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function SearchResult({ groups, radius }) {
  const formatToThousand = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num;
  };

  if (groups.length === 0) {
    return null;
  }

  const firstGroup = groups[0];
  const pClass = 'ml-4 xl:text-lg';

  return (
    <div className='animate-page-enter'>
      <hr />
      <h2 className='text-center text-2xl xl:text-3xl font-bold mt-5 text-blue-700'>
      Groups located within {radius} mile radius of {firstGroup.town}, {firstGroup.state}
      </h2>
      <div className='mt-10 flex justify-around flex-wrap mx-10'>
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
                <strong>Group Type:</strong> {group.type}
              </p>
              <p className={pClass}>
                <strong>Private group:</strong> {group.private}
              </p>
              <p className={pClass}>
                <strong>Bussiness group:</strong> {group.bussiness}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

SearchResult.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      groups: PropTypes.string.isRequired,
      members: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      town: PropTypes.string.isRequired,
      radius: PropTypes.number.isRequired,
      state: PropTypes.string.isRequired,
      private: PropTypes.string.isRequired,
      bussiness: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SearchResult;
