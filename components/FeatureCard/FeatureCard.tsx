import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import Typography from "../UI/Typo/Typography";

interface FeatureCardProps {
  featureName: string;
  description: string;
  imgUrl: string | StaticImageData;
  imageStyles?: string;
}

const FeatureCard: FC<FeatureCardProps> = ({
  featureName,
  description,
  imgUrl,
  imageStyles,
}) => {
  return (
    <div className="bg-[#e9e9e9] h-full sm:p-30px mds:p-[22px] p-15px rounded-[20px]">
      <div className="flex flex-col sm:gap-24px gap-16px">
        <div className="relative w-full xl:h-[500px] sm:h-[400px] mds:h-[350px] xs:h-[250px] h-[200px]">
          <Image
            src={imgUrl}
            alt={featureName}
            fill
            loading="lazy"
            placeholder="blur"
            className={`object-cover rounded-[20px] ${imageStyles}`}
          />
        </div>
        <div className="flex flex-col gap-10px">
          <Typography tag="h3" text={featureName} />
          <Typography type="defaultP" text={description} />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
