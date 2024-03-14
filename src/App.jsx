
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
const [bookmarks, setBookmark] = useState([]);
const [readingTime, setReadingTime] = useState(0);

const handleAddToBookmark = (blog) =>{
  // console.log(blog.title);

  const newBookmarks = [...bookmarks, blog];
  setBookmark(newBookmarks);
}

const handleMarkAsRead = (time, id)=>{
  const newReadingTime = readingTime + time ;
  setReadingTime(newReadingTime);

  //remove the red blog from bookmark
  const remainingBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
  setBookmark(remainingBookmarks);
}
// console.log(readingTime);

  return (
    <>
      <Header></Header>

      <main className='md:flex max-w-7xl mx-auto items-start'>
        <Blogs
          handleAddToBookmark = {handleAddToBookmark}
          handleMarkAsRead = {handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks = {bookmarks} 
          readingTime = {readingTime}
        ></Bookmarks>
      </main>

    </>
  )
}

export default App

//  Success! - Published to rambunctious-jeans.surge.sh

