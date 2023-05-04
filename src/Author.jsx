import PropTypes from 'prop-types';

export default function Author({ author }) {
    return (
        <div className="author-container">
            <p className="author-text">{author}</p>
        </div>
    );
}

Author.propTypes = {
    author: PropTypes.string.isRequired,
};
