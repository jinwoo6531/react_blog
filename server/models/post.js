import mongoose from "mongoose";
import moment from "moment";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    index: true, //검색할때 사용하기 위해 생성
  },
  contents: {
    type: String,
    required: true,
  },
  views: { //조회수
    type: Number,
    default: -2, //작성한 사람의 조회수를 빼기 위해 -2로 설정
  },
  fileUrl: {
    type: String,
    default: "https://source.unsplash.com/random/301x201", //s3주소로 바꿔야함
  },
  date: {
    type: String,
    default: moment().format("YYYY-MM-DD hh:mm:ss"),
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const Post = mongoose.model("post", PostSchema);

export default Post;