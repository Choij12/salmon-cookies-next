import { useEffect, useState } from 'react'
import Head from '../components/head'
import Header from '../components/header'
import Table from '../components/table'
import Form from '../components/form'
import Footer from '../components/footer'
import axios from 'axios';

export default function Home() {

  const [stores, setStores] = useState([]);

  const getStores = async () => {
    const response = await axios.get('https://salmon-cookie-api.azurewebsites.net/api/Store');
    setStores(response.data);
  }

  const addStore = async (newStore) => {
    newStore.maxCust = Number(newStore.maxCust);
    newStore.minCust = Number(newStore.minCust);
    newStore.avgSale = Number(newStore.avgSale);
    const response = await axios.post('https://salmon-cookie-api.azurewebsites.net/api/Store', newStore);
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