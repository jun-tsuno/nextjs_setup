import Link from "next/link";
import React from "react";

type Todo = {
	title: string;
};

async function getData() {
	const res = await fetch("http://localhost:3000/api/todos", {
		next: { revalidate: 10 },
	});
	return res.json();
}

const Page = async () => {
	const todos: Todo[] = await getData();

	return (
		<>
			<h1>Todos</h1>
			{todos.map((todo, index) => {
				return <div key={index}>{todo.title}</div>;
			})}
			<Link href="/">Home</Link>
		</>
	);
};

export default Page;
