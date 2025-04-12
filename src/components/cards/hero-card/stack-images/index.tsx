import { Box, Avatar } from "@mui/material";
import {
  CommonCardBgManImage,
  CommonCardTopOneImage,
  CommonCardTopTwoImage,
} from "@/assets/images/common/card";
import { SlideDown } from "@/components/animations/slide-down";
import { SlideUp } from "@/components/animations/slide-up";

export default function HeroRight() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        minHeight: "100%",
      }}
    >
      <SlideUp>
        <Avatar
          src={CommonCardBgManImage?.src}
          sx={{
            width: "80%",
            height: "100%",
            backgroundColor: "transparent",
          }}
          alt="100"
          variant="rounded"
        />
      </SlideUp>

      <Box
        sx={{
          position: "absolute",
          zIndex: 111,
          top: -20,
          right: 0,
        }}
      >
        <SlideDown initialOpacity={0.3} initialY={-60} duration={0.9}>
          <Avatar
            src={CommonCardTopTwoImage?.src}
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "transparent",
              objectPosition: "center",
              imageRendering: "auto",
            }}
            alt="100"
            variant="rounded"
          />
        </SlideDown>
      </Box>

      <Box
        sx={{
          position: "absolute",
          zIndex: 111,
          bottom: 20,
          left: -70,
        }}
      >
        <SlideDown initialOpacity={0.3} initialY={-60} duration={0.9}>
          <Avatar
            src={CommonCardTopOneImage?.src}
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "transparent",
              objectPosition: "center",
              imageRendering: "auto",
            }}
            alt="100"
            variant="rounded"
          />
        </SlideDown>
      </Box>
    </Box>
  );
}
