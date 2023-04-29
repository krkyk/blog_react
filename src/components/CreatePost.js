import React from "react";
import "./CreatePost.css";

export const CreatePost = () => {
  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>記事を投稿する</h1>
        <div className="inputPost">
          <div>タイトル</div>
          <input type="text" placeholder="タイトルを入力" />
        </div>
        <div className="inputPost">
          <div>投稿</div>
          <textarea placeholder="投稿内容を入力"></textarea>
        </div>
        <button type="submit" className="postBtn">
          投稿
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
