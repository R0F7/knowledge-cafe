import PropTypes from 'prop-types';
import Bookmark from '../../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-slate-200 rounded-xl ml-10 py-5">
            <h1 className="text-center text-3xl font-bold">Bookmarked Blogs: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx)=> <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }

        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;