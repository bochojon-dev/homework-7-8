import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

const SearchSection = ({ data, setValue }) => {
  const navigate = useNavigate();

  const handleNavigateDetailPage = (id) => {
    navigate(`/product/${id}`);
    setValue("");
  };

  let searchItems = data?.map((el) => (
    <div onClick={() => handleNavigateDetailPage(el.id)} key={el.id}>
      {/* <img src={el.images[0]} width={50} alt="" /> */}
      <span>{el.title}</span>
    </div>
  ));
  return <div className="navbar__search-model">{searchItems}</div>;
};

export default memo(SearchSection);
