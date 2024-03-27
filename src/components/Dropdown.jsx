import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Dropdown({ handleInsertText }) {
    const handleClick = (value) => {
        handleInsertText(value);
    };

    return (
        <Menu as="div" className="hidden lg:relative lg:inline-block lg:text-left">
            <div>
                <Menu.Button className="flex w-full hover:shadow-inner hover:shadow-grey-700 justify-center gap-x-1.5 bg-grey-300 pl-3 pt-[0.35rem] pb-[0.5rem] border-2 border-grey-300 text-sm">
                    <span className="text-black font-semibold">Headings</span>
                    <ChevronDownIcon className="mr-1 h-5 w-5 text-black" />
                </Menu.Button>
            </div>
            <Menu.Items className="absolute shadow-inner shadow-grey-700 w-full items-center z-10">
                <div className="py-1 border-2 border-grey-700">
                    <Menu.Item>
                        <a
                            href="#"
                            className='bg-grey-300 text-grey-100 block px-4 py-2 text-sm hover:shadow-inner hover:shadow-grey-900'
                            onClick={() => handleClick('# New Section')}
                        >
                            Heading 1
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a
                            href="#"
                            className='bg-grey-300 text-grey-100 block px-4 py-2 text-sm hover:shadow-inner hover:shadow-grey-900'
                            onClick={() => handleClick('## New Section')}
                        >
                            Heading 2
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a
                            href="#"
                            className='bg-grey-300 text-grey-100 block px-4 py-2 text-sm hover:shadow-inner hover:shadow-grey-900'
                            onClick={() => handleClick('### New Section')}
                        >
                            Heading 3
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a
                            href="#"
                            className='bg-grey-300 text-grey-100 block px-4 py-2 text-sm hover:shadow-inner hover:shadow-grey-900'
                            onClick={() => handleClick('#### New Section')}
                        >
                            Heading 4
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a
                            href="#"
                            className='bg-grey-300 text-grey-100 block px-4 py-2 text-sm hover:shadow-inner hover:shadow-grey-900'
                            onClick={() => handleClick('##### New Section')}
                        >
                            Heading 5
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a
                            href="#"
                            className='bg-grey-300 text-grey-100 block px-4 py-2 text-sm hover:shadow-inner hover:shadow-grey-700'
                            onClick={() => handleClick('###### New Section')}
                        >
                            Heading 6
                        </a>
                    </Menu.Item>
                </div>
            </Menu.Items>
        </Menu>
    )
}