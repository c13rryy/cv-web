import {
  CONTACT_LINKS,
  NAV_FOOTER_LINKS,
  SOCIAL_LINKS,
} from "@/data/footerLinks";
import { Icon } from "../UI/Icon/Icon";
import Link from "next/link";
import Typography from "../UI/Typo/Typography";
import FooterButton from "./FooterButton";
import { MotionDiv } from "../MotionDiv/MotionDiv";
import { ANCHOR_CONTACTS } from "@/constans/path";
import FooterLink from "./FooterLink";
export default function Footer() {
  return (
    <footer
      id={ANCHOR_CONTACTS.slice(1)}
      className="bg-main_grey overflow-hidden"
    >
      <div className="flex justify-between xl:gap-0px sm:gap-24px gap-16px xl:flex-row flex-col sm:px-30px px-16px pt-32px">
        <MotionDiv
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center sm:gap-10px sm:justify-start justify-between"
        >
          <div className="flex sm:gap-16px gap-8px items-center">
            {NAV_FOOTER_LINKS.map(el => (
              <FooterLink key={el.value} text={el.value} href={el.href} />
            ))}
          </div>
          <FooterButton />
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col sm:gap-24px gap-16px"
        >
          <div className="flex sm:gap-16px gap-8px items-center mds:flex-row flex-col  mobile:items-start">
            {CONTACT_LINKS.map(el => (
              <Link
                key={el.icon}
                href={el.href}
                className="text-14  font-semibold leading-28 text-[#fff] px-7px py-4px flex items-center gap-6px animation-icon"
              >
                <Icon
                  icon={el.icon ?? "mail"}
                  size={18}
                  viewBox="0 0 24 24"
                  className="icon-hover"
                />
                <span>{el.value}</span>
              </Link>
            ))}
          </div>
          <div className="flex gap-24px items-center xl:justify-end justify-start">
            {SOCIAL_LINKS.map(el => (
              <Link
                className="hover:scale-110 scale-100 duration-700 hover:duration-700"
                key={el.icon}
                href={el.href}
              >
                <Icon icon={el.icon ?? "mail"} size={32} viewBox="0 0 32 32" />
              </Link>
            ))}
          </div>
        </MotionDiv>
      </div>
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="border-t-[1px] border-solid border-grey_4 sm:mt-[40px] mt-24px text-center sm:py-24px py-16px"
      >
        <Typography
          type="aboutP"
          text="Copyright © 2023. All rights are reserved"
          className="mt-8px"
          color="text-[#fff]"
        />
      </MotionDiv>
    </footer>
  );
}
