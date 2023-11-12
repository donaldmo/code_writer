import { useState, useEffect } from "react";
import Banner from "./components/Banner";
import CodeMirrow from "./components/CodeMirror";

import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "views/admin/marketplace/variables/tableColumnsTopCreators";
import TopCreatorTable from "./components/TableTopCreators";
import sampleText from '../../../code/greet.txt'

const Marketplace = () => {

  const [text, setText] = useState('');

  useEffect(() => {
    fetch(sampleText)
      .then(response => response.text())
      .then(data => setText(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  console.log(text)
  
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        {/* NFt Banner */}
        <CodeMirrow codeText={text} />
        <pre>{text}</pre>
      </div>

      {/* right side section */}

      <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-1">
        <TopCreatorTable
          extra="mb-5"
          tableData={tableDataTopCreators}
          columnsData={tableColumnsTopCreators}
        />
      </div>
    </div>
  );
};

export default Marketplace;
