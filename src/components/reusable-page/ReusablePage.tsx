"use client"
import { useState } from 'react';

export interface PageItemImage {
    left?: string;
    right?: string;
    main?: string;
}

export interface PageItem {
    id: string;
    title: string;
    content: string;
    displayType?: 'default' | 'organization-chart' | 'custom';
    images?: PageItemImage;
    hasImages?: boolean;
}

export interface ReusablePageProps {
    pageTitle: string;
    pageData: PageItem[];
    defaultTab?: string | null;
}

export default function ReusablePage({
    pageTitle,
    pageData,
    defaultTab = null
}: ReusablePageProps) {
    const [selectedTab, setSelectedTab] = useState(defaultTab || pageData[0]?.id);

    const selectedItem = pageData.find(item => item.id === selectedTab) || pageData[0];

    return (
        <div className="bg-gray-50 min-h-screen py-12 mx-3">
            <div className="container mx-auto max-w-7xl px-4 lg:px-0 2xl:px-5">
                <div className="text-center  mb-8">
                    <h1 className="text-header-lg font-bold text-textColor">{pageTitle}</h1>
                </div>

                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="lg:w-1/4 order-2 lg:order-1flex-1">
                        <div className="bg-main/5 shadow-md border border-gray-100 overflow-hidden sticky top-22">
                            <nav className="flex flex-col">
                                {pageData.map(item => (
                                    <button
                                        key={item.id}
                                        onClick={() => {
                                            setSelectedTab(item.id);
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }}
                                        className={`p-4  xl:text-title-md text-title-md lg:text-title-sm text-left transition-all duration-300 border-l-4 flex items-center ${selectedTab === item.id
                                            ? 'border-textColor bg-main/20 font-medium text-textColor'
                                            : 'border-transparent hover:bg-main/20 hover:border-gray-200'
                                            }`}
                                    >

                                        {item.title}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    <div className="lg:w-3/4 space-y-8 order-1 lg:order-2">
                        <div className="bg-white shadow-md border border-gray-100 overflow-hidden">
                            {selectedItem.images && (
                                <>
                                    {selectedItem.displayType === 'organization-chart' ? (
                                        <div className="p-6 overflow-hidden">
                                            <img
                                                src={selectedItem.images.main || selectedItem.images.left}
                                                alt="Organization Chart"
                                                className="w-full h-auto shadow-sm"
                                            />
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {selectedItem.images.left && (
                                                <div className="h-72 md:h-96 overflow-hidden">
                                                    <img
                                                        src={selectedItem.images.left}
                                                        alt={`${selectedItem.title} left image`}
                                                        className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300"
                                                    />
                                                </div>
                                            )}
                                            {selectedItem.images.right && (
                                                <div className="h-72 md:h-96 overflow-hidden">
                                                    <img
                                                        src={selectedItem.images.right}
                                                        alt={`${selectedItem.title} right image`}
                                                        className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </>
                            )}

                            <div className="p-8">
                                <div className="border-b border-gray-200 pb-4 mb-6">
                                    <h2 className="text-2xl font-semibold text-textColor">
                                        {selectedItem.title}
                                    </h2>
                                </div>

                                <div className="prose max-w-none text-textColor">
                                    {selectedItem.content.split('\n\n').map((paragraph, idx) => (
                                        <p key={idx} className="mb-6 text-base leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}