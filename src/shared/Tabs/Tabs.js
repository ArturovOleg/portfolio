import React, { useEffect, useLayoutEffect, useState } from 'react'
import TabsContent from './TabsContent'
import TabsHeader from './TabsHeader'

const Tabs = (props) => {
    const { headerItems, tabsContentItems, renderTabsHeader, renderTabsContent} = props
    const [selectedTab, setSelectedTab] = useState(0)
    const [fadeIn, setFadeIn] = useState(false)
    const [headerItemsForRender, setHeaderItemsForRender] = useState([])
    const [contentItemsToRender, setContentItemToRender] = useState([])

    useEffect(() => {
        if(headerItems) {
            setHeaderItemsForRender(headerItems)
        }
    }, [headerItems])

    useEffect(() => {
        if (tabsContentItems) {
            setContentItemToRender(tabsContentItems)
        }
    }, [tabsContentItems])

    const onTabClick = (selectedIndex) => {
        if (selectedIndex === selectedTab) {
            return
        }
        setFadeIn(false)
        setSelectedTab(selectedIndex)
    }

    return (
        <> 
            <TabsHeader names={headerItemsForRender} onTabClick={onTabClick} selectedTab={selectedTab} renderTabsHeader={renderTabsHeader}/>
            <TabsContent contents={contentItemsToRender} selectedTab={selectedTab} renderTabsContent={renderTabsContent} fadeIn={fadeIn} setFadeIn={setFadeIn}/>
        </>
    )
}

export default Tabs