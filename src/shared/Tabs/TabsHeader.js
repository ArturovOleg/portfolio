import React from 'react'

const TabsHeader = ({names, onTabClick, selectedTab, renderTabsHeader}) => {

    const handleOnTabClick = (index) => {
        onTabClick(index)
    }

    
    return (
        <div className='tabs-header-wrapper'>
            {!renderTabsHeader && names.map((tab, index) => <span key={tab} className={index === selectedTab ? 'active tabs-header-item' : 'tabs-header-item'} onClick={() => handleOnTabClick(index)}>{tab}</span>)}
            {(renderTabsHeader && names.length) && renderTabsHeader(names, handleOnTabClick, selectedTab)}
        </div>
    )
}

export default TabsHeader