# React + Vite

For running this project use following commands: 
- cd todolist
- npm install
- npm run dev

Features :

- Add Tasks: Users can add new tasks to the list.
- Edit Tasks: Tasks can be edited in-place.
- Mark as Completed: Tasks can be marked as completed, toggling their status.
- Delete Tasks: Tasks can be removed from the list.
- Responsive UI: The application has a basic responsive design for small and large screens.

Components

TodoList

The TodoList component is the parent component that manages the overall list of tasks. It handles:

- State for storing the current task input (internalValue).
- State for storing the list of tasks (internalResult).
- Adding tasks to the list when the user clicks the "Add" button.

TodoItem

The TodoItem component represents each individual task in the list. It handles:

- Displaying each task's text.
- Editing a task by switching to input mode when the "Edit" button is clicked.
- Deleting a task from the list.
- Marking tasks as completed with a toggle button.
