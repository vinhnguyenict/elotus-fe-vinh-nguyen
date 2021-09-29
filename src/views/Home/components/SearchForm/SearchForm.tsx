import React, {useContext} from "react";
import moment from "moment";
import {DatePicker,} from "antd";

import {FORMAT_DATE} from "config/timestamp";
import {NeoWsContext} from "../../context";

const { RangePicker, } = DatePicker;
const SearchForm: React.FC = () => {
  const { setParams}  = useContext(NeoWsContext)

  const onChange = (dates: any) : void => {
    setParams({
      start_date: dates ? moment(dates[0]).format(FORMAT_DATE) : null,
      end_date: dates ?moment(dates[1]).format(FORMAT_DATE) : null,
    })
  }
  

  return  <RangePicker onChange={onChange}/>
}

export default SearchForm;