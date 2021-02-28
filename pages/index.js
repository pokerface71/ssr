import { useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/actions/productAction';
import NavMain from '../Components/layout/NavMain';



export default function Home() {
  const { products } = useSelector(state => state.product)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts());

  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>React and Next and Redux</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/sketchy/bootstrap.min.css" integrity="sha384-RxqHG2ilm4r6aFRpGmBbGTjsqwfqHOKy1ArsMhHusnRO47jcGqpIQqlQK/kmGy9R" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
      </Head>
      <main className="container">
        <NavMain/>
          <div className="row">
            {products.data && products.data.map(item => (
              <div className="col-md-3 col-6 card text-white bg-danger mb-3" key={item.id}>
                <div className="card-header">{item.productname}</div>
                <div className="card-body">
                  <img src={item.image} className="img-fluid" alt={item.productname} />
                  <h5 className="card-title">{item.price} </h5>
                  <p className="card-text"><i className="fa fa-star"></i>{item.rate}</p>
                  <p className="card-text"><i className="fa fa-calendar-alt"></i>{item.date}</p>
                  <p className="card-text"><i className="fa fa-shop">{item.exit === true ? "موجود" : "ناموجود"}</i></p>
                </div>
              </div>
            ))}
          </div>
   

      </main>

      <footer className={styles.footer}>
        <a href="https://jobinja.ir/user/FE-6415327">
          Powered by{' '}
          Esmaeil jafari
        </a>
      </footer>
    </div>
  )
}
