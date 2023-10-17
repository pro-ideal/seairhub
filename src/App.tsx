import {ExtendedRecordMap} from 'notion-types'
import {NotionRenderer} from 'react-notion-x'
import {Code} from 'react-notion-x/build/third-party/code'
import {Collection} from 'react-notion-x/build/third-party/collection'
import {Equation} from 'react-notion-x/build/third-party/equation'
import {Modal} from 'react-notion-x/build/third-party/modal'
import {Pdf} from 'react-notion-x/build/third-party/pdf'


import defaultRecordMap from './record-map.json'
import {useEffect, useState} from "react";
import axios from "axios";
import {rootNotionPageId} from "./config";

function App() {
  // fallback 등록
  const [recordMap, setRecordMap] = useState(defaultRecordMap as unknown as ExtendedRecordMap)


  useEffect(() => {
    axios
      .get(`https://notion-api.splitbee.io/v1/page/${rootNotionPageId}`)
      .then(({data}) => {
        setRecordMap({'block': data} as unknown as ExtendedRecordMap)
      });
  }, []);

  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={true}
      darkMode={false}
      components={{
        Code,
        Collection,
        Equation,
        Pdf,
        Modal
      }}
    />
  )
}

export default App
