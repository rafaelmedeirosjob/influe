import { HiDevicePhoneMobile } from "react-icons/hi2";
import { lusitana } from "@/components/ui/fonts"
export default function InflueLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <HiDevicePhoneMobile className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Influe</p>
    </div>
  );
}
