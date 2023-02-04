import Link from "next/link";

export default function Home() {
	return (
		<>
			<h1>Hello NextJs</h1>
			<Link href="/page1">to page1</Link>
		</>
	);
}
