import { BodyText } from "@/components/text/body-text";
import { CommonCard } from "../common-card";
import { HeadingText } from "@/components/text/heading-text";
import { ActivityInfoCardPropsI } from "../cards.interface";
import { SlideDown } from "@/components/animations/slide-down";
import { CommonButton } from "@/components/buttons/common-button";

const ActivityInfoCard = (props: ActivityInfoCardPropsI) => {
  const { name, info, infoColor, extraInfo } = props;
  return (
    <CommonCard>
      <SlideDown initialOpacity={0.3} initialY={-60} duration={0.9}>
        <BodyText color="primary.main">{name}</BodyText>
      </SlideDown>
      <SlideDown>
        <HeadingText variant="h6" color={infoColor}>
          {info}
          <SlideDown>
            <BodyText component="span">{extraInfo}</BodyText>
          </SlideDown>
        </HeadingText>
      </SlideDown>
      <SlideDown initialOpacity={0.3} initialY={-60} duration={0.9}>
        <CommonButton>Click Me</CommonButton>
      </SlideDown>
    </CommonCard>
  );
};

export default ActivityInfoCard;
