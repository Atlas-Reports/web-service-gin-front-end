import type { FormEvent } from "react";

interface Props {
    onCancel: () => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function CreateModal({ onCancel, onSubmit: handleSubmit }: Props) {
    return (
        <div className="absolute top-0 h-full w-full flex items-center justify-center dark:bg-gray-800/50">
            <div
                className="dark:bg-gray-600 p-2 min-h-40 min-w-52 rounded-lg shadow-lg dark:shadow-gray-400/20 flex flex-col gap-2">
                    <h2 className='text-sm text-center'>Create Album</h2>
                <form id="album-form" className="flex flex-col gap-2 p-1" onSubmit={handleSubmit}>
                    <label className="flex flex-col gap-1 text-sm">
                        <span>Title*</span>
                        <input required type="text" name="title" className="dark:border dark:bg-gray-700 p-1" />
                    </label>
                    <label className="flex flex-col gap-1 text-sm">
                        <span>Artist*</span>
                        <input required type="text" name="artist" className="dark:border dark:bg-gray-700 p-1" />
                    </label>
                    <label className="flex flex-col gap-1 text-sm">
                        <span>Price*</span>
                        <input required type="number" name="price" step={0.01} min={0} className="dark:border dark:bg-gray-700 p-1" />
                    </label>
                </form>
                <footer className="flex gap-2 justify-center w-full">
                    <button onClick={onCancel} type="button"
                            className="cursor-pointer px-2 py-1 dark:bg-red-800 text-sm rounded-md">Cancel</button>
                        <button form='album-form' className='cursor-pointer px-2 py-1 dark:bg-blue-600 text-sm rounded-md'>Create</button>
                    </footer>
            </div>
        </div>
    );
}