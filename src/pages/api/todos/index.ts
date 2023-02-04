import { NextApiRequest, NextApiResponse } from "next";

type Todo = {
	title: string;
};

const todos: Todo[] = [
	{ title: "Reading" },
	{ title: "programming" },
	{ title: "walking" },
];

const getTodos = async (req: NextApiRequest, res: NextApiResponse) => {
	await new Promise((resolve) => setTimeout(resolve, 4000));

	res.status(200).json(todos);
};

export default getTodos;
