import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({ blog, handleAddToBookmark }) => {
    // console.log(blog);

    const { title, cover, reading_time, author_img, author_name, posted_date, hashtags } = blog;
    return (
        <div className='mb-10'>
            <img className='w-full' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex items-center justify-between'>
                <div className='flex items-center my-4'>
                    <img className='w-20 h-20 rounded-full mr-5' src={author_img} alt="" />

                    <div>
                        <h2 className='text-2xl'>{author_name}</h2>
                        <p className='text-xl'>{posted_date}</p>
                    </div>
                </div>

                <div className='text-xl flex'>
                    <span>{reading_time} min read</span>
                    <button className='ml-2'
                        onClick={() => handleAddToBookmark(blog)}
                    ><IoBookmarksOutline /></button>
                </div>
            </div>

            <h2 className="text-4xl">{title}</h2>
            <div className='text-2xl mt-3'>
                {
                    hashtags.map((tag, index) => <span key={index} > <a href="">#{tag}</a></span>)
                }
            </div>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object,
    handleAddToBookmark: PropTypes.func.isRequired,
}
export default Blog;
