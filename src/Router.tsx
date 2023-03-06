import { Routes, Route } from 'react-router-dom'
import { Blog } from './pages/Blog'
import { PostBlog } from './pages/PostBlog'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Blog />}/>
      <Route path="/posts/:postNumber" element={<PostBlog />}/>
    </Routes>
  )
}