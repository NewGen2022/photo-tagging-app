import PropTypes from 'prop-types';

const Success = ({ characterName }) => {
    return (
        <div
            className="fixed font-bold top-24 left-1/2 transform -translate-x-1/2 z-40 text-base 
            rounded-md text-slate-50 bg-cyan-400 px-8 py-5 max-[740px]:top-72
            border-2 border-solid border-cyan-800"
        >
            {characterName} found successfully
        </div>
    );
};

Success.propTypes = {
    characterName: PropTypes.string.isRequired,
};

export default Success;
