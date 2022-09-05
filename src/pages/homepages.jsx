import React, { useState, useEffect } from "react";
import Axios from 'axios'
import {
    Container, Row, Col
} from 'react-bootstrap'

import './pages.css'

// import component
import NavBar from "../component/navbar";
import Card from "../component/card"

import { Link } from 'react-router-dom'

const url = 'http://localhost:2000'

export default function HomePages() {
    const [products, setProducts] = useState([])

    // pagination
    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(0)

    let prodPerPage = 8
    let startCard = (page - 1) * prodPerPage
    let sliceCard = products.slice(startCard, startCard + prodPerPage)

    useEffect(() => {
        Axios.get(`${url}/products`)
            .then(res => {
                setProducts(res.data)
                setMaxPage(Math.ceil(res.data.length / prodPerPage))
            })
    }, [prodPerPage])

    const onNext = () => {
        setPage(page + 1)
    }
    const onPrev = () => {
        setPage(page - 1)
    }

    return (
        <div>
            <NavBar />
            {/* HEADER */}
            <div className="home-bg text-front-bg img-front p-0 m-0">
                <Container>
                    <Row>
                        <Col className="text-front col-7 p-0">
                            <div>Sedia makanan yang berkualitas</div>
                            <div className="p-img-front"><p>Kualitas rasa dan bahan tidak perlu anda khawatirkan.</p></div>
                            <a href="https://wa.link/itmp4h">
                                <button className="btn-style">Reservasi</button>
                            </a>
                        </Col>
                        <Col className="col-5 p-0">
                            <div className="img-front">
                                <img src="https://i.pinimg.com/564x/d7/63/bf/d763bf0cc1f80744f1261ee67381cdfa.jpg" alt="head" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* ADS TO LOGIN */}
            <div className="ads-sign-in my-5 p-0 mx-0">
                <Container>
                    <Row>
                        <Col className="text-ads-signup m-0 p-0">
                            <Link as={Link} to="/register">
                                <button className="btn-style my-3">REGISTER</button>
                            </Link>
                            <div>
                                Registrasi dan dapatkan harga spesial dari kami !
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* EXCESS  */}
            <div className="container-excess my-3">
                <Container>
                    <div className="header-excess my-4">Mengapa kami menjadi pilihan tepat anda ?</div>
                    <div className="container-card-excess">
                        <div className="card-excess p-3 me-2">
                            <div>
                                <img className="icon-excess py-2" src="https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg" alt="icon-1" />
                            </div>
                            <div className="title-excess">Chef yang berpengalaman</div>
                            <p>Kami memiliki chef yang sudah berpengalaman bertahun-tahun sebagai chef</p>
                        </div>

                        <div className="card-excess p-3 me-2">
                            <div>
                                <img className="icon-excess py-2" src="https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg" alt="icon-1" />
                            </div>
                            <div className="title-excess">Bahan dan rasa yang berkualitas</div>
                            <p>Seleksi terhadap bahan yang kami gunakan cukup ketat, agar rasa tetap terjaga kualitasnya</p>
                        </div>

                        <div className="card-excess p-3 me-2">
                            <div>
                                <img className="icon-excess py-2" src="https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg" alt="icon-1" />
                            </div>
                            <div className="title-excess">Chef yang berpengalaman</div>
                            <p>Kami memiliki chef yang sudah berpengalaman bertahun-tahun sebagai chef</p>
                        </div>

                        <div className="card-excess p-3 me-2">
                            <div>
                                <img className="icon-excess py-2" src="https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg" alt="icon-1" />
                            </div>
                            <div className="title-excess">Chef yang berpengalaman</div>
                            <p>Kami memiliki chef yang sudah berpengalaman bertahun-tahun sebagai chef</p>
                        </div>
                    </div>
                </Container>
            </div>

            {/* BEST MENU */}
            <div className="container-best-menu my-3">
                <Container>
                    <div className="header-excess my-4">Menu terbaik kami</div>
                    <div className="container-card-bestmenu">
                        <div className="card-menu p-4">
                            <img className="img-menu mb-3" src="https://i.pinimg.com/564x/c8/b3/7d/c8b37d136073b30d06a698cdcf84e219.jpg" alt="best-menu-1" />
                            <div>Kami memiliki chef yang sudah berpengalaman bertahun-tahun sebagai chef</div>
                        </div>

                        <div className="card-menu p-4 mx-2">
                            <img className="img-menu mb-3" src="https://i.pinimg.com/564x/c8/b3/7d/c8b37d136073b30d06a698cdcf84e219.jpg" alt="best-menu-1" />
                            <div>Kami memiliki chef yang sudah berpengalaman bertahun-tahun sebagai chef</div>
                        </div>

                        <div className="card-menu p-4">
                            <img className="img-menu mb-3" src="https://i.pinimg.com/564x/c8/b3/7d/c8b37d136073b30d06a698cdcf84e219.jpg" alt="best-menu-1" />
                            <div>Kami memiliki chef yang sudah berpengalaman bertahun-tahun sebagai chef</div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* CARD MENU */}
            <div className="bg-menu py-4">
                <Container >
                    <div className="header-excess my-4">All Menu</div>
                    <div className="container-card">
                        {sliceCard.map((item) =>
                            <Card
                                data={item}
                                key={item.id}
                            />
                        )}
                    </div>

                    {/* PAGINATION */}
                    <div className="pagination-product my-4">
                        <button className="btn-style mx-3" onClick={onPrev} disabled={page === 1 ? true : false}>Prev</button>
                        <label>Page {page}/{maxPage} </label>
                        <button className="btn-style mx-3" onClick={onNext} disabled={page === maxPage ? true : false}>Next</button>
                    </div>

                </Container>
            </div>


            {/* FOOTER */}
            <footer className="cont-footer">
                <Container>
                    <div className="cont-socmed py-3">
                        <div><i class="fa-brands fa-square-instagram fs-2"></i></div>
                        <div><i class="fa-brands fa-square-twitter fs-2 mx-3"></i></div>
                        <div><i class="fa-brands fa-square-facebook fs-2"></i></div>
                    </div>
                </Container>
            </footer>
        </div>
    )
}