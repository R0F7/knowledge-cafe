import PropTypes from 'prop-types';
import Bookmark from '../../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 text-center">
            <p className='bg-gray-600 p-5 ml-10 rounded-xl text-white text-xl font-bold mb-4'>Spent time on read : {readingTime} min</p>
            <div className='bg-slate-200 rounded-xl ml-10 py-5'>
                <h1 className="text-3xl font-bold">Bookmarked Blogs: {bookmarks.length}</h1>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>

        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;