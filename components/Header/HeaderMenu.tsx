import { NAVBAR_LINKS } from "@/data/navigations";
import Typography from "../UI/Typo/Typography";
import classNames from "classnames";
import HeaderMenuButton from "./HeaderMenuButton";
import anchorScroll from "@/helpers/anchorScroll";
import { usePathname } from "next/navigation";
import LinkCustom from "../UI/Link/LinkCustom";

interface HeaderMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export default function HeaderMenu({ isOpen, closeMenu }: HeaderMenuProps) {
  const path = usePathname();
  return (
    <nav
      className={classNames(
        "fixed inset-[0] z-[100] flex flex-col justify-between overflow-y-auto  transition-all duration-500  bg-[#fff] pt-117px  px-20px md:hidden",
        {
          "pointer-events-none invisible opacity-0": !isOpen,
        }
      )}
    >
      <ul className="flex flex-col gap-32px pt-20px">
        {NAVBAR_LINKS.map(el => (
          <li key={el.value}>
            <LinkCustom
              linkType={path.length > 1 ? "Link" : "button"}
              onClick={() => {
                const id = el.href.slice(1);
                closeMenu();
                anchorScroll(id);
              }}
              href={`/${el.href}`}
            >
              <Typography tag="h3">{el.value}</Typography>
            </LinkCustom>
          </li>
        ))}
      </ul>
      <HeaderMenuButton closeMenu={closeMenu} />
    </nav>
  );
}
