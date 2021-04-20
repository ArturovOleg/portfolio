import React, { useEffect, useLayoutEffect, useState } from 'react'

const TabsContent = ({contents, selectedTab, renderTabsContent, fadeIn, setFadeIn}) => {

    useEffect(() => {
        setTimeout(() => {
            setFadeIn(true)
        }, 100)
    }, [selectedTab])

    

    return (
        <div className="tabs-content-wrapper">
            {!renderTabsContent && contents[selectedTab]}
            {(renderTabsContent && contents.length) && renderTabsContent(contents[selectedTab], fadeIn)}
        </div>
    )
}

export default TabsContent