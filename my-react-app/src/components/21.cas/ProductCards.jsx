import { useState } from "react";
import Button from "./Button.jsx";
import RoundButton from "./RoundButton.jsx";
import Select from "./Select.jsx";

import Text from "./Text.jsx";
import Rating from "./rating.jsx";

const ProductCard = (props) => {
  const [img, setImg] = useState(props.data.imgs.white);
  console.log(props);
  return (
    <div>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <Text type="t1" text={props.description} />
        <Text type="t2" text={props.data.brandTitle} />
        <div>
          <Rating value={props.data.reviews} />
          <Text type="t3" text={props.data.reviewsCount + "4 Reviews"} />
          {/* {props.data.socialNetworkLnks.fb} */}
          {/* <SocialIcon type="fb" />
          <SocialIcon type="twitter" />
          <SocialIcon type="intagram" /> */}
        </div>
        <Text type="t3" text="..." />

        <div>
          <Text type="t3" text="Color" />
          <RoundButton color="blue" />
          <RoundButton color="black" />
          <RoundButton color="white" />
          <Text type="t3" text="Size" />
          <Select list={["s", "m", "l", "xl"]} />
        </div>
        {/* <Divider /> */}

        <div>
          <Text type="t4" text="48 $" />
          <Button title="Button" />
          <Button />
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
