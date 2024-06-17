import Image from "next/image";
import Link from "next/link";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Countdown from "@/components/ui/Countdown";
import { BsTelegram as telegram } from "react-icons/bs";
import { Icon } from "@/components/ui/Icon";
import { getDate } from "@/lib/utils";

export default async function Home() {
	const target = await getDate();

	return (
		<>
			<div>
				<h2 className="text-4xl font-semibold text-center text-neutral-900 dark:text-neutral-100">Welcome to the Bitcoin Poker Tour.</h2>
				<h3 className="text-2xl font-semibold text-center text-neutral-700 dark:text-neutral-300">Live Poker. Bitcoin buy ins.  Coming soon!</h3>
			</div>
			<Link className="flex flex-col text-center items-center mt-3 hover:cursor-pointer" href={"https://t.me/+4_ll8Wiu8zQ0MTE9"} target="_blank">
				<Icon className="transition duration-100 hover:scale-125" icon={telegram} size={30} />
				Join Our Telegram
			</Link>
			<div className="flex top-2 sm:w-full countdown text-slate-900 md:w-100 justify-center mb-3">
				<Countdown newTarget={target} />
			</div>
			<div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
				<a
					href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className="mb-3 text-2xl font-semibold">
						Events <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
					</h2>
					<p className="m-0 max-w-[30ch] text-sm opacity-50">Browse upcoming events and register to play.</p>
				</a>

				<a
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className="mb-3 text-2xl font-semibold">
						Buy Bitcoin <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
					</h2>
					<p className="m-0 max-w-[30ch] text-sm opacity-50">Learn how to buy and store Bitcoin securely.</p>
				</a>

				<a
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className="mb-3 text-2xl font-semibold">
						Inscriptions <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
					</h2>
					<p className="m-0 max-w-[30ch] text-sm opacity-50">See past winners immortalized in the Bitcoin blockchain!</p>
				</a>

				<a
					href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className="mb-3 text-2xl font-semibold">
						Register <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
					</h2>
					<p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">Ready to jump in? Buy into the next Bitcoin Poker Tour event.</p>
				</a>
			</div>
		</>
	);
}
