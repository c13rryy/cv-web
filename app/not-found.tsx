import Button from "@/components/UI/Button/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex  justify-center ">
      <div className="flex flex-col gap-56px">
        <h1 className="xl:text-[70px] sm:text-[50px] mds:text-[40px] text-[20px] uppercase font-bold text-black_1">
          the page doesn&lsquo;t exist.
        </h1>

        <div className=" flex justify-center">
          <Button className="w-[200px]" buttonSize="large">
            <Link href="/">Main Page</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
