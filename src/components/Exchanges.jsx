import React from 'react'
import millify from 'millify'
import { Collapse, Row, Col, Typography, Avatar } from 'antd'
import HTMLReactParser from 'html-react-parser'

import {useGetExchangesQuery} from '../services/cryptoApi'

import Loader from './Loader'

const Exchanges = () => {
  const {data,isFetching} = useGetExchangesQuery();

  console.log(data);
  

  if (isFetching) return <Loader />
  return (
    <div>Exchanges</div>
  )
}

export default Exchanges