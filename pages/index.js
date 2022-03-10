import { useEffect, useState } from 'react'
import Head from '../src/components/head'
import Header from '../src/components/header'
import Table from '../src/components/table'
import Form from '../src/components/form'
import Footer from '../src/components/footer'
import axios from 'axios';

export default function Home() {

  const [stores, setStores] = useState([]);

  const getStores = async () => {
    const response = await axios.get('cookie-stand-api-m3h');
    setStores(response.data);
  }

  const addStore = async (newStore) => {
    newStore.maxCust = Number(newStore.maxCust);
    newStore.minCust = Number(newStore.minCust);
    newStore.avgSale = Number(newStore.avgSale);
    const response = await axios.post('cookie-stand-api-m3h', newStore);
    await getStores();
  }

  useEffect(() => {
    getStores();
  },[]);

  return (
    <>
      <Head />
      <Header />
      <Form handleSubmit={addStore} />
      <Table reports={stores} />
      <Footer reports={stores} />
    </>
  )
}