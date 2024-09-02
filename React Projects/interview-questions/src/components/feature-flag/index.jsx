import { useContext } from "react"
import Accordion from "../accordion"
import LightDarkeMode from "../light-dark-mode"
import RandomColor from "../random-colors"
import TicTacToe from "../tic-tak-toe"
import TreeView from "../tree-view"
import { FeatureFlagsContext } from "./context"
import menus from "../tree-view/data"
import TabTest from "../custom-tabs/tab-test"

export default function FeatureFlags(){

    const {loading,enabledFlags} = useContext(FeatureFlagsContext);
   
    const compoenetsToRender = [
        {
            key : 'showLightAndDarkeMode',
            component : <LightDarkeMode/>
        },
        {
            key : 'showTicTacToeBoard',
            component : <RandomColor/>
        },
        {
            key : 'showAccordian',
            component : <Accordion/>
        },
        {
            key : 'showTicTacToeBoard',
            component : <TicTacToe/>
        },
        {
            key : 'showTreeView',
            component : <TreeView menus={menus}/>
        },
        {
            key : 'showTabs',
            component : <TabTest/>
        }
        
    ]

    function checkEnabledFlags(getCurrentKey){
        return enabledFlags[getCurrentKey];
    }

    if(loading) return <h1>Loading Data ! Please Wait</h1>

    return (
        <div>
            <h1>Features Flags</h1>
            {
                compoenetsToRender.map(componentItem => 
                    checkEnabledFlags(componentItem.key) ? componentItem.component : null)
            }
        </div>);
}