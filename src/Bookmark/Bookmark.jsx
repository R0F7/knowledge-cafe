import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark ;

    return (
        <div>
            <h3 className="text-xl bg-slate-100 p-4 m-4 rounded-2xl font-light">{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;