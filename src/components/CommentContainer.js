const commentData = [
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Uday Bikkumandla",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Akshay Saini1",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Akshay Saini2",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Akshay Saini21",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
          {
            name: "Akshay Saini22",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Akshay Saini221",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Karrthil Bikkumandla",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Madhuri",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex py-2 m-1">
      <img
        className="w-12 h-12 mx-2"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />

      <div className=" mx-3">
        <p className="font-bold"> {name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return  comments.map((comment,index)=>(
     <div className=" border border-gray-200 bg-gray-100">
        <Comment data={comment} />
        <div className="pl-5 ml-5">
             <CommentList comments={comment.replies} />
        </div>

     </div>

  ));
};
const CommentContainer = () => {
  return (
    <div className="py-2">
      <h2 className="font-bold py-2">Comment :</h2>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentContainer;
