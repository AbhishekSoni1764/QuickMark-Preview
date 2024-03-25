import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Dropdown({ handleInsertText }) {
    const handleClick = (value) => {
        handleInsertText(value);
    };

    return (
        <Menu as="div" className="hidden lg:relative lg:inline-block lg:text-left lg:left-[-2px]">
            <div>
                <Menu.Button className="flex w-full justify-center gap-x-1.5  bg-white px-3 pt-[0.4rem] pb-[0.6rem] border-2 text-sm text-gray-900">
                    Headings
                    <ChevronDownIcon className="mr-1 h-5 w-5 text-gray-400" />
                </Menu.Button>
            </div>
            <Menu.Items className="absolute right-0 z-10">
                <div className="py-1">
                    <Menu.Item>
                        <a
                            href="#"
                            className='bg-gray-100 text-gray-900 block px-4 py-2 text-sm'
                            onClick={() => handleClick('# ')}
                        >
                            Heading 1
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a
                            href="#"
                            className='bg-gray-100 text-gray-900 block px-4 py-2 text-sm'
                            onClick={() => handleClick('## ')}
                        >
                            Heading 2
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a
                            href="#"
                            className='bg-gray-100 text-gray-900 block px-4 py-2 text-sm'
                            onClick={() => handleClick('### ')}
                        >
                            Heading 3
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a
                            href="#"
                            className='bg-gray-100 text-gray-900 block px-4 py-2 text-sm'
                            onClick={() => handleClick('#### ')}
                        >
                            Heading 4
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a
                            href="#"
                            className='bg-gray-100 text-gray-900 block px-4 py-2 text-sm'
                            onClick={() => handleClick('##### ')}
                        >
                            Heading 5
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a
                            href="#"
                            className='bg-gray-100 text-gray-900 block px-4 py-2 text-sm'
                            onClick={() => handleClick('###### ')}
                        >
                            Heading 6
                        </a>
                    </Menu.Item>
                </div>
            </Menu.Items>
        </Menu>
    )
}