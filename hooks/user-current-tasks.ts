import { useSession } from "next-auth/react";

export const useCurrentTasks = () => {
    const session = useSession()

    console.log(typeof session.data?.user)

    if (session.data?.user?.tasks) {
        console.log(session.data?.user?.tasks)
        return session.data?.user?.tasks
    }

    return []
}