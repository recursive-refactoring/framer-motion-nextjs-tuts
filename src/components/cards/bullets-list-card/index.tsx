import { CommonCardBgManImage } from "@/assets/images/common/card";
import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";
import { BodyText } from "@/components/text/body-text";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import { StarBorder } from "@mui/icons-material";
import { Avatar } from "@mui/material";

export const BulletsListCard = (props: any) => {
  const {
    isEven = true,
    flexDirection = isEven ? "row" : "row-reverse",
    itemsList = [
      {
        heading: "Customizable & Social Sol",
        description:
          "Wheathe you'reLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt necessitatibus, quas iure laborum nobis explicabo! Qui officia ad aut porro quam veritatis maxime, dolorum deleniti ipsam assumenda quasi debitis sint minima? Voluptatem enim doloremque quibusdam, dolor necessitatibus nobis inventore. ",
      },
      {
        heading: "Customizable & Social Sol",
        description:
          "Wheathe you'reLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt necessitatibus, quas iure laborum nobis explicabo! Qui officia ad aut porro quam veritatis maxime, dolorum deleniti ipsam assumenda quasi debitis sint minima? Voluptatem enim doloremque quibusdam, dolor necessitatibus nobis inventore. ",
      },
      {
        heading: "Customizable & Social Sol",
        description:
          "Wheathe you'reLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt necessitatibus, quas iure laborum nobis explicabo! Qui officia ad aut porro quam veritatis maxime, dolorum deleniti ipsam assumenda quasi debitis sint minima? Voluptatem enim doloremque quibusdam, dolor necessitatibus nobis inventore. ",
      },
      {
        heading: "Customizable & Social Sol",
        description:
          "Wheathe you'reLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt necessitatibus, quas iure laborum nobis explicabo! Qui officia ad aut porro quam veritatis maxime, dolorum deleniti ipsam assumenda quasi debitis sint minima? Voluptatem enim doloremque quibusdam, dolor necessitatibus nobis inventore. ",
      },
      {
        heading: "Customizable & Social Sol",
        description:
          "Wheathe you'reLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt necessitatibus, quas iure laborum nobis explicabo! Qui officia ad aut porro quam veritatis maxime, dolorum deleniti ipsam assumenda quasi debitis sint minima? Voluptatem enim doloremque quibusdam, dolor necessitatibus nobis inventore. ",
      },
    ],
  } = props;

  return (
    <ContainerGridLayout
      spacing={4}
      customStyles={{ padding: "1rem", flexDirection }}
    >
      <ItemGridLayout md={6}>
        <Avatar
          src={CommonCardBgManImage?.src}
          alt="122"
          variant="square"
          sx={{ width: "100%", height: "100%", aspectRatio: "4/3" }}
        />
      </ItemGridLayout>
      <ItemGridLayout md={6}>
        <Avatar sx={{ width: 50, height: 50 }}>
          <StarBorder sx={{ color: "text.primary" }} />
        </Avatar>
        <ul>
          {itemsList.map((list: any) => (
            <li style={{}}>
              <SubHeadingText component="span">
                {list?.heading ? `${list?.heading} :` : ""}
              </SubHeadingText>{" "}
              <BodyText component="span">{list?.description}</BodyText>
            </li>
          ))}
        </ul>
      </ItemGridLayout>
    </ContainerGridLayout>
  );
};
