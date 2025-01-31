import PropTypes from 'prop-types';

const Failure = ({ characterName }) => {
    return (
        <div
            className="fixed font-bold top-24 left-1/2 transform -translate-x-1/2 z-30 text-base 
            rounded-md text-slate-50 bg-rose-500 px-8 py-5 max-[740px]:top-72 
            border-2 border-solid border-rose-900"
        >
            Not {characterName} :(
        </div>
    );
};

Failure.propTypes = {
    characterName: PropTypes.string.isRequired,
};

export default Failure;
