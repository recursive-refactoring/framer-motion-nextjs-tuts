import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";
import { BodyText } from "@/components/text/body-text";
import { HeadingText } from "@/components/text/heading-text";
import { Box } from "@mui/material";
import { CommonCard } from "../common-card";

export const TextCard = (props: any) => {
  const {
    isEven = true,
    flexDirection = isEven ? "row" : "row-reverse",
    heading = "Seamless Integrationa MaVailabel",
    description = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic sapiente illo consequuntur dolore dolores eligendi provident dolorem cupiditate laboriosam voluptatum!`,
  } = props;

  return (
    <CommonCard>
      <ContainerGridLayout customStyles={{ flexDirection }}>
        <ItemGridLayout md={6}>
          <HeadingText>{heading}</HeadingText>
        </ItemGridLayout>
        <ItemGridLayout md={6}>
          {/* <Box sx={{ marginY: 2 }}> */}
          <BodyText>{description}</BodyText>
          {/* </Box> */}
        </ItemGridLayout>
      </ContainerGridLayout>
    </CommonCard>
  );
};
