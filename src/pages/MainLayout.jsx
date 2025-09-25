import React from 'react';

const MainLayout = ({ sidebar, content, layoutType }) => {
    return (
        <div className="flex flex-col lg:flex-row gap-8">
            <div className={`lg:w-1/3 rounded-lg ${layoutType !== 'home' ? 'hidden lg:block' : ''}`}>
                {sidebar}
            </div>
            <div className="lg:w-2/3 space-y-6">
                {content}
            </div>
        </div>
    );
};

export default MainLayout;