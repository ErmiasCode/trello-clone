"use client"

import { useBoardStore } from "@/store/BoardStore";

import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from "@heroicons/react/24/outline";

const types = [
  {
    id: "todo",
    name: "Todo",
    description: "Todo description",
    color: "bg-red-500",
  },
  {
    id: "inprogress",
    name: "In Progress",
    description: "In Progress description",
    color: "bg-yellow-400",
  },
  {
    id: "done",
    name: "Done",
    description: "Done description",
    color: "bg-green-500",
  },
];

const TaskTypeRadioGroup = () => {
  const [newTaskType, setNewTaskType ] = useBoardStore((state) => [
    state.newTaskType,
    state.setNewTaskType,
  ]);

  return (
    <div className="w-full py-5">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup 
          value={newTaskType}
          onChange={(e) => setNewTaskType(e)}
        >
          <div className="space-y-2">
            {types.map((type) => (
              <RadioGroup.Option
                key={type.id}
                value={type.id}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-200"
                      : ""
                  }
                  ${
                    checked ? `${type.color} bg-opacity-75 text-white` : "bg-white"
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                }
                >
                  {({ active, checked }) => (
                    <>
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-sm">
                            <RadioGroup.Label
                              as="p"
                              className={`font-medium ${checked ? "text-white" : "text-gray-900"}`}
                            >
                             {type.name}
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as="span"
                              className={`inline ${checked ? "text-white" : "text-gray-500"}`}
                            >
                              <span>{type.description}</span>
                            </RadioGroup.Description>
                          </div>
                        </div>
                        {checked && (
                          <div className="shrink-0 text-white">
                            <CheckIcon className="w-6 h-6" />
                          </div>
                        )}
                      </div>            
                    </>
                  )}
                </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>

      </div>
    </div>
  )
}

export default TaskTypeRadioGroup