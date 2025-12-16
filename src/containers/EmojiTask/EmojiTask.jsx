import { useState } from "react";

const EmojiTask = () => {
  const [input, setInput] = useState("");
  const [postData, setPostData] = useState([]);

  const emojis = ["😂", "❤️", "👍🏻", "😳"];

  const handlePost = () => {
    setPostData((prev) => [
      ...prev,
      { id: Date.now(), title: input, reaction: emojis[0], showEmoji: false },
    ]);

    setInput("");
  };

  const handleToggle = (id) => {
    setPostData((prev) =>
      prev.map((post) => {
        return post.id === id ? { ...post, showEmoji: !post.showEmoji } : post;
      })
    );
  };

  const handleDelete = (id) => {
    setPostData((prev) => prev.filter((post) => post.id !== id));
  };

  const handleEmojiClick = (id, index) => {
    setPostData((prev) =>
      prev.map((post) =>
        post.id === id
          ? { ...post, showEmoji: !post.showEmoji, reaction: emojis[index] }
          : post
      )
    );
  };

  return (
    <div className=" flex flex-col gap-8 items-center">
      <h1 className="text-3xl font-bold">Emoji App</h1>
      <div className="flex gap-5">
        <input
          className="border rounded p-2 w-100"
          type="text"
          name="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white py-2 px-5 rounded-lg hover:bg-blue-700 transition-all cursor-pointer"
          onClick={handlePost}
        >
          Post
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {postData.map((post) => {
          return (
            <div key={post.id} className="flex flex-col gap-4 w-[400px]">
              <div className=" flex justify-between">
                <p>{post.title}</p>
                <button
                  className="bg-red-500 text-white py-2 px-5 rounded-lg transition-all cursor-pointer"
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </button>
              </div>
              <div>
                <p
                  className="cursor-pointer"
                  onClick={() => handleToggle(post.id)}
                >
                  {post.reaction}
                </p>
                <div className="flex gap-2">
                  {post.showEmoji &&
                    emojis.map((emoji, index) => {
                      return (
                        <span
                          key={index}
                          className="cursor-pointer"
                          onClick={() => handleEmojiClick(post.id, index)}
                        >
                          {emoji}
                        </span>
                      );
                    })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmojiTask;
