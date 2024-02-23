"use client"

import { toggleTaskComplete } from "@/data/task"

type TaskProps = {
  id: string 
  name: string
  complete: boolean
}

export function TaskItem({ id, name, complete }: TaskProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={e => toggleTaskComplete(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {name}
      </label>
    </li>
  )
}
