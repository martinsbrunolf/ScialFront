import Stories from "../../components/stories/Stories.jsx"
import Posts from "../../components/posts/Posts.jsx"
import Share from "../../components/share/Share.jsx"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <Stories/>
      <Share/>
      <Posts/>
    </div>
  )
}

export default Home