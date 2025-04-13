import { CommonCardBgManImage } from "@/assets/images/common/card";
import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";
import { BodyText } from "@/components/text/body-text";
import { HeadingText } from "@/components/text/heading-text";
import { FiberManualRecord } from "@mui/icons-material";
import { Avatar, Box } from "@mui/material";

export const ListCard = (props: any) => {
  const {
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
    <ContainerGridLayout customStyles={{ padding: "1rem" }}>
      <ItemGridLayout md={6}>
        <Avatar
          src={CommonCardBgManImage?.src}
          alt="122"
          variant="square"
          sx={{ width: "100%", height: "100%", aspectRatio: "4/3" }}
        />
      </ItemGridLayout>
      <ItemGridLayout md={6}>
        <HeadingText>{heading}</HeadingText>
        <Box sx={{ marginY: 2 }}>
          <BodyText>{description}</BodyText>
        </Box>
        {itemsLists?.map((list: any) => (
          <Box
            key={list?.text}
            sx={{ display: "flex", alignItems: "center", gap: 1, my: 2 }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ width: 20, height: 20 }}>
                <FiberManualRecord
                  sx={{ fontSize: ".6rem", color: "text.primary" }}
                />
              </Avatar>
            </Box>
            <BodyText>{list?.text}</BodyText>
          </Box>
        ))}
      </ItemGridLayout>
    </ContainerGridLayout>
  );
};
