import Image from "./Image";

const ProductCard = () => {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        {/* <Text type="t1" text="BRAND NAME" /> */}
        {/* <Text type="t2" text="The Catcher in the Rye" /> */}
      </div>
      <div>
        <Raiting value={4} />
        {/* <Text type="t3" text="4 Reviews" /> */}
        {/* <SocialIcon type="fb" />
        <SocialIcon type="twitter" />
        <SocialIcon type="instagram" /> */}
      </div>
      {/* <Text type="t3" text="..." /> */}
      <div>{/* <Text type="t3" text="Color" /> */}</div>
    </div>
  );
};

export default ProductCard;
