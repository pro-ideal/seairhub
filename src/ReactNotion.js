import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css'; // only needed for code highlighting
import {NotionRenderer} from "react-notion"
import {useEffect, useState} from "react";

import axios from 'axios';


export default function ReactNotion() {
    const [response, setResponse] = useState({});

    useEffect(() => {
        const NOTION_PAGE_ID = '5139ddefb25b48779b50aa9c3fed0e71';
        axios
            .get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
            .then(({data}) => {
                setResponse(data);
            });
    }, []);

    return (
        Object.keys(response).length && (
            <NotionRenderer
                blockMap={response}
                fullPage={true}
            />
        )
    );
}
