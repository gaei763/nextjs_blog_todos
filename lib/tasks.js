import fetch from "node-fetch"

export const getAllTasksData = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`
	)
	const tasks = await res.json()
	const filteredTasks = tasks.sort(
		(a, b) => new Date(b.created_at) - new Date(a.created_at)
	)
	return filteredTasks
}

export const getAllTasksIds = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`
	)
	const tasks = await res.json()
	return tasks.map((task) => {
		return {
			params: {
				id: String(task.id),
			},
		}
	})
}

export const getTasksData = async (id) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-task/${id}/`
	)
	const task = await res.json()
	return { task }
}
