import React from 'react';

const MainLayout = ({ sidebar, content }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-1">
                {sidebar}
            </div>
            <div className="lg:col-span-2">
                {content}
            </div>
        </div>
    );
};

export default MainLayout;