import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import Typography from "../UI/Typo/Typography";

interface FeatureCardProps {
  featureName: string;
  description: string;
  imgUrl: string | StaticImageData;
}

const FeatureCard: FC<FeatureCardProps> = ({
  featureName,
  description,
  imgUrl,
}) => {
  return (
    <div className="bg-background_section sm:p-30px mds:p-[22px] p-15px rounded-[20px]">
      <div className="flex flex-col sm:gap-24px gap-16px">
        <div className="relative w-full xl:h-[500px] sm:h-[400px] mds:h-[350px] h-[250px]">
          <Image
            src={imgUrl}
            alt={featureName}
            fill
            loading="lazy"
            placeholder="blur"
            className="object-cover rounded-[20px] object-[top_left]"
          />
        </div>
        <div className="flex flex-col sm:gap-16px gap-8px">
          <Typography tag="h3" text={featureName} />
          <Typography type="defaultP" text={description} />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
