import React from "react";
import Link from "next/link";

const Page = () => {
	return (
		<>
			<h1>Page1</h1>
			<Link href="/page2">to page2</Link>
		</>
	);
};

export default Page;
