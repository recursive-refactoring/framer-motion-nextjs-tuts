import { Box, Avatar } from "@mui/material";
import {
  CommonCardBgManImage,
  CommonCardTopOneImage,
  CommonCardTopTwoImage,
} from "@/assets/images/common/card";

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

      <Box
        sx={{
          position: "absolute",
          zIndex: 111,
          top: -20,
          right: 0,
        }}
      >
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
      </Box>
      <Box
        sx={{
          position: "absolute",
          zIndex: 111,
          bottom: 20,
          left: -70,
        }}
      >
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
      </Box>
    </Box>
  );
}
