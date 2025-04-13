import { IconAvatar } from "@/components/avatars/icon-avatar";
import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";
import { BodyText } from "@/components/text/body-text";
import { HeadingText } from "@/components/text/heading-text";
import { Place } from "@mui/icons-material";
import { Avatar, Box } from "@mui/material";
import HeroRight from "./stack-images";
import { SlideUp } from "@/components/animations/slide-up";

export const HeroCard = (props: any) => {
  const {
    title = "Intellident Solution",
    heading = "Solutions Designed for Growth & Effiecinecy",
    description = ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
          blanditiis, commodi, facere quos culpa neque sit deserunt provident
          impedit quia nihil. Enim, sunt eius rerum iure quas beatae
          reprehenderit quos fugit dolore, quisquam rem?`,
  } = props;

  return (
    <Box sx={{ padding: "2rem", paddingY: "6rem" }}>
      <ContainerGridLayout>
        <ItemGridLayout md={5} lg={6}>
          <SlideUp>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <IconAvatar>
                <Place />
              </IconAvatar>
              <BodyText>{title}</BodyText>
            </Box>
            <HeadingText>{heading}</HeadingText>
            <BodyText>{description}</BodyText>
          </SlideUp>
        </ItemGridLayout>
        <ItemGridLayout
          md={7}
          lg={6}
          customStyles={{ border: "1px solid red" }}
        >
          <HeroRight />
        </ItemGridLayout>
      </ContainerGridLayout>
    </Box>
  );
};
