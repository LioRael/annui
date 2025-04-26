import { Button } from "@/registry/default/buttons/base";
import Link from "next/link";

export default function BaseButtonComposition() {
	return <Button.Root render={<Link href="/" />}>I'm a Link</Button.Root>;
}
