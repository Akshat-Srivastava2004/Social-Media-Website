import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";
import Navbar from "../../pages/Nav.jsx";
export default function Feed(){
    return(
        <div className="feed">
            <div className="feedWrapper">
               <Navbar />
                <Share/>
                {Posts.map((p) =>(
                    <Post key={p.id} post={p}/>

                ))}
                
                
            </div>
        </div>
    )
}