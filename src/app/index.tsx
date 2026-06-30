import Icon from "@/Components/Icon";
import ListingIssuer from "@/Components/ListingIssuer";
import Screen from "@/Components/Screen";

const index = () => {
  return (
    <Screen>
      <ListingIssuer
        cardInfo={{
          title: "Daniel",
          subTitle: "daniel072.dy@gmail.com",
          ImageComponent: <Icon name="mail" size={70} />,
        }}
        swipeOptions={{ isEnabled: false }}
      />
    </Screen>
  );
};
export default index;
