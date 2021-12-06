import { Rate } from "antd";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const RaterSearch = ({ star, setStar }) => {
  const handleChange = (star) => {
    setStar(star);
  };
  return (
    <div>
      <Rate tooltips={desc} onChange={handleChange} value={star} />
    </div>
  );
};

export default RaterSearch;
