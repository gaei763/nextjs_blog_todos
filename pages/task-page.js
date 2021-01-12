import Layout from "../components/Layout"
import Link from "next/link"
import { getAllTasksData } from "../lib/tasks"
import Task from "../components/Task"
import useSWR from "swr"
import { useEffect } from "react"
import StateContextProvider from "../context/StateContext"
import TaskForm from "../components/TaskForm"

const fetcher = (url) => fetch(url).then((res) => res.json())
const apiUrl = `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`

const TaskPage = ({ staticFilteredTasks }) => {
	const { data: tasks, mutate } = useSWR(apiUrl, fetcher, {
		initialData: staticFilteredTasks,
	})
	const filterdTasks = tasks?.sort(
		(a, b) => new Date(b.created_at) - new Date(a.created_at)
	)

	useEffect(() => {
		mutate()
	}, [])

	return (
		<StateContextProvider>
			<Layout title="Task page">
				<TaskForm taskCreated={mutate} />
				<ul>
					{filterdTasks &&
						filterdTasks.map((task) => (
							<Task key={task.id} task={task} taskDeleted={mutate} />
						))}
				</ul>
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
								strokeWidth={2}
								d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
							></path>
						</svg>
						<span>Back to main page</span>
					</div>
				</Link>
			</Layout>
		</StateContextProvider>
	)
}

export const getStaticProps = async () => {
	const staticFilteredTasks = await getAllTasksData()
	return {
		props: { staticFilteredTasks },
		revalidate: 3,
	}
}

export default TaskPage
