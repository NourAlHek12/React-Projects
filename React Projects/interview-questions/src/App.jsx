import { useState } from 'react'
import './App.css'
import Accordion from './components/accordion';
import RandomColor from './components/random-colors';
import StartRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import QRCodeGenerator from './components/qr-code-generator';
import LightDarkeMode from './components/light-dark-mode';
import ScrollIndicator from './components/scroll-indicator';
import TabTest from './components/custom-tabs/tab-test';
import ModelTest from './components/custom-model-propup/model-test';
import GithubProfileFinder from './components/github-profile-finder';
import SearchAutoComplete from './components/search-autocomplete-using-api';
import TicTacToe from './components/tic-tak-toe';
import FeatureFlagGlobalState from './components/feature-flag/context';
import FeatureFlags from './components/feature-flag';
import UseFetchHookTest from './components/use-fetch/test';
import UseOnClickOutsideTest from './components/use-outside-click/test';
import UseWindowResizeTest from './components/use-window-resize/test';
import ScrollToTopAndButtom from './components/scroll-to-top-and-down';
import ScrollToSection from './components/scroll-to-top-and-down/scroll-to-section';

function App() {
  

  return (
    <>
      {/* Accordion Component */}
      {/* <Accordion/> */}

      {/* Random Color */}
      {/* <RandomColor/> */}

      {/* Rating stars */}
      {/* <StartRating noOfStarts = {10}/> */}

      {/* Image Slider */}
      {/* <ImageSlider 
      url={'https://picsum.photos/v2/list'} 
      page = {"1"} 
      limit={"10"}/> */}

      {/* Load more products components */}
      {/* <LoadMoreData/> */}

      {/* Tree view component / menu UI component/ recursive navigation menu */}
      {/* <TreeView menus={menus}/> */}

      {/* QR code generator*/}
      {/* <QRCodeGenerator/> */}

      {/* light and dark theme switch */}
      {/* <LightDarkeMode/> */}

      {/* Scroll Indecator Component */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}

      {/* Custom Tba Component */}
      {/* <TabTest/> */}

      {/* custom Model Component */}
      {/* <ModelTest/> */}

      {/* Github Profile Finder */}
      {/* <GithubProfileFinder/> */}

      {/* Search Autocomplete  */}
      {/* <SearchAutoComplete/> */}

      {/* Tic Tac Toe */}
      {/* <TicTacToe/> */}

      {/* Feature Flags implementation*/}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags/>
      </FeatureFlagGlobalState> */}

      {/* Use Fetch Hook */}
      {/* <UseFetchHookTest/> */}

      {/* Use Onclick outside hook*/}
      {/* <UseOnClickOutsideTest/> */}

      {/* Use Window Resize Hook Test */}
      {/* <UseWindowResizeTest/> */}

      {/* Scroll to Top and Bottom */}
      {/* <ScrollToTopAndButtom/> */}

      {/* Scroll to a particular Section */}
      <ScrollToSection/>
    </>

  )
}

export default App
