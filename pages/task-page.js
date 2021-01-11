import Layout from "../compornents/layout"
import Link from "next/link"

const TaskPage = () => {
	return (
		<Layout title="Task page">
			<Link href="/main-page">
				<div className="flex cursor-pointer mt-12">
					<svg
						className="w-6 h-6 mr-3"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
						></path>
					</svg>
					<span>Back to main page</span>
				</div>
			</Link>
		</Layout>
	)
}

export default TaskPage
