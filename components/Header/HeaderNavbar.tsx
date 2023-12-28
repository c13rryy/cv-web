import { NAVBAR_LINKS } from "@/data/navigations";
import anchorScroll from "@/helpers/anchorScroll";
import { usePathname } from "next/navigation";
import LinkCustom from "../UI/Link/LinkCustom";

export default function HeaderNavbar() {
  const path = usePathname();
  return (
    <nav>
      <ul className="flex items-center gap-24px">
        {NAVBAR_LINKS.map(el => (
          <li
            className="text-16 capitalize  text-grey_1 duration-700  leading-24 font-semibold hover:text-black_1 hover:duration-700"
            key={el.value}
          >
            <LinkCustom
              linkType={path.length > 1 ? "Link" : "button"}
              onClick={() => {
                const id = el.href.slice(1);
                anchorScroll(id);
              }}
              href={`/${el.href}`}
            >
              {el.value}
            </LinkCustom>
          </li>
        ))}
      </ul>
    </nav>
  );
}
