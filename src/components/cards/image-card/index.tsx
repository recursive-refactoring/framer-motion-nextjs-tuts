import { CommonCardBgManImage } from "@/assets/images/common/card";
import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";
import { BodyText } from "@/components/text/body-text";
import { HeadingText } from "@/components/text/heading-text";
import { FiberManualRecord } from "@mui/icons-material";
import { Avatar, Box } from "@mui/material";
import { CommonCard } from "../common-card";

export const ImageCard = (props: any) => {
  const {
    isEven = true,
    flexDirection = isEven ? "row" : "row-reverse",
    heading = "Seamless Integrationa MaVailabel",
    description = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic sapiente illo consequuntur dolore dolores eligendi provident dolorem cupiditate laboriosam voluptatum!`,
    itemsLists = [
      {
        text: "Lorem ipsum, dolor sit amet",
      },
      {
        text: "dolorem cupiditate laboriosam voluptatum!",
      },
      {
        text: "consequuntur dolore dolores eligendi provident",
      },
    ],
  } = props;

  return (
    <CommonCard>
      <ContainerGridLayout customStyles={{ flexDirection }}>
        <ItemGridLayout md={6}>
          <Avatar
            src={CommonCardBgManImage?.src}
            alt="122"
            variant="square"
            sx={{ width: "100%", height: "100%", aspectRatio: "4/3" }}
          />
        </ItemGridLayout>
        <ItemGridLayout md={6}>
          <HeadingText>
            {heading}
            <BodyText>{description}</BodyText>
          </HeadingText>
        </ItemGridLayout>
      </ContainerGridLayout>
    </CommonCard>
  );
};
