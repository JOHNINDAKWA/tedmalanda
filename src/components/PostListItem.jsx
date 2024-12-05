import { Link } from "react-router-dom";
import Image from "./Image";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image src="postImg.jpeg" className="rounded-2xl object-cover"  w='735'  />
      </div>

      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>By</span>
          <Link className="text-blue-800">Ted Malanda</Link>
          <span>on</span>
          <Link className="text-blue-800">Humor & Satire</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti ea
          dolores molestiae pariatur sit nemo porro repudiandae aspernatur
          maxime corporis quibusdam eaque inventore voluptatum illum quas
          similique nisi, suscipit, possimus perferendis magnam incidunt vel
          aliquid doloremque.
        </p>
        <Link to='/test' className="underline text-blue-800 text-sm">Read More</Link>
      </div>
    </div>
  );
};

export default PostListItem;
