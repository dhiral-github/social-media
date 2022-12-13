import { MoreVert, Photo } from '@mui/icons-material'
import './post.css'
import { Users } from "../../dummyData"
import { useState } from "react";

const Post = ({ post }) => {
  // console.log('post record-------------', post)
  // #filter  below mention data of username[0]

  // const user = Users.filter(u=>u.id===1)
  // console.log("user ==>>>",user)
  // console.log("username ==>>>",user[0].username)
  const [like, setLike] = useState(post.like)
  const [isliked, setIsLiked] = useState(false)

  const likehandle = () => {
    setLike(isliked ? like - 1 : like + 1)
    setIsLiked(!isliked)
  }

  return (
    <div>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img className="postProfileImg"
                src={Users.filter(u => u.id === post.userId) [0].profilePicture}
                alt=""
              />
              <span className="postUsername">
                {Users.filter(u => u.id === post.userId)[0].username}
              </span>
              <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
              <MoreVert />
            </div>
          </div>
          <div className="postCenter">
            <span className="potsText">{post?.desc}</span>
            <img className="postImg" src={post.photo} alt="" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img className="likeIcon" onClick={likehandle} src="/assets/like.jpg" alt="" />
              <img className="likeIcon" onClick={likehandle} src="/assets/heart.jpg" alt="" />
              <div className="postLikeCounter">{like} like it</div>
            </div>
            <div className="postBottomRight">
              <div className="postCommonText">{post.comment} Comments</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
