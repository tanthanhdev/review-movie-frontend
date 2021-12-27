import React, { Component } from 'react';

class Filler extends Component {
    render() {
        return (
            <div className="grid content__footer" style={{ marginTop: 'var(--height-header)' }}>
                <div className="grid wide content__footer-wide">
                    <div className="row content__footer-row">
                    <div className="col l-4 option">
                                <select className="form-select" style={{ width: '100%', height: '40px', fontSize: '1.4rem', backgroundColor: '#999', marginTop: '10px' }} aria-label="Default select example">
                                    <option selected>Thể loại</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                </select>
                            </div>
                            <div className="col l-4 option">
                                <select className="form-select" style={{ width: '100%', height: '40px', fontSize: '1.4rem', backgroundColor: '#999', marginTop: '10px' }} aria-label="Default select example">
                                    <option selected>Quốc gia</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                </select>
                            </div>
                            <div className="col l-4 option">
                                <select className="form-select" style={{ width: '100%', height: '40px', fontSize: '1.4rem', backgroundColor: '#999', marginTop: '10px' }} aria-label="Default select example">
                                    <option selected>Năm sản xuất</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                </select>
                            </div>

                        <header className="content__footer-header">
                            <i className="content__footer-header-icon fas fa-moon" />
                            <h2 className="content__footer-header-name">
                                Phim hành động
                            </h2>
                        </header>
                        <div className="col l-2 m-4 c-6">
                            <a className="content__item" href="#">
                                <img src="./assets/img/footer_hanhdong/Bloodshot.jpg" alt="Bloodshot" className="content__list-img" />
                                <h3 className="content__item-name-vn webkit">
                                    Bloodshot
                                </h3>
                                <span className="content__item-name-eng webkit">
                                    Bloodshot
                                </span>
                                <div className="content__item-status">
                                    <span className="content__item-status-view">
                                        Lượt xem: 10219
                                    </span>
                                    <div className="content__item-status-rating">
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--no fas fa-star" />
                                    </div>
                                </div>
                                <div className="status content__footer-status">
                                    <span className="content__item-status-sub">HD Vietsub</span>
                                </div>
                            </a>
                        </div>
                        <div className="col l-2 m-4 c-6">
                            <a className="content__item" href="#">
                                <img src="./assets/img/footer_hanhdong/Phi Hồ Cực Chiến.jpg" alt="Phi Hồ Cực Chiến" className="content__list-img" />
                                <h3 className="content__item-name-vn webkit">
                                    Phi Hồ Cực Chiến 2
                                </h3>
                                <span className="content__item-name-eng webkit">
                                    Flying Tigers 2
                                </span>
                                <div className="content__item-status">
                                    <span className="content__item-status-view">
                                        Lượt xem: 11219
                                    </span>
                                    <div className="content__item-status-rating">
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--no fas fa-star" />
                                    </div>
                                </div>
                                <div className="status content__footer-status">
                                    <span className="content__item-status-sub">HD Vietsub</span>
                                </div>
                            </a>
                        </div>
                        <div className="col l-2 m-4 c-6">
                            <a className="content__item" href="#">
                                <img src="./assets/img/footer_hanhdong/Sự Sa Ngã Phần 2.jpg" alt="Sự Sa Ngã Phần 2" className="content__list-img" />
                                <h3 className="content__item-name-vn webkit">
                                    Sự Sa Ngã Phần 2
                                </h3>
                                <span className="content__item-name-eng webkit">
                                    The Fall Season 2
                                </span>
                                <div className="content__item-status">
                                    <span className="content__item-status-view">
                                        Lượt xem: 10219
                                    </span>
                                    <div className="content__item-status-rating">
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--no fas fa-star" />
                                    </div>
                                </div>
                                <div className="status content__footer-status">
                                    <span className="content__item-status-sub">HD Vietsub</span>
                                </div>
                            </a>
                        </div>
                        <div className="col l-2 m-4 c-6">
                            <a className="content__item" href="#">
                                <img src="./assets/img/footer_hanhdong/Thế Giới Bí Mật Của Arrietty.png" alt="Arrietty" className="content__list-img" />
                                <h3 className="content__item-name-vn webkit">
                                    Thế Giới Bí Mật Của Arrietty
                                </h3>
                                <span className="content__item-name-eng webkit">
                                    The Secret World of Arrietty/Karig
                                </span>
                                <div className="content__item-status">
                                    <span className="content__item-status-view">
                                        Lượt xem: 1819
                                    </span>
                                    <div className="content__item-status-rating">
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--no fas fa-star" />
                                    </div>
                                </div>
                                <div className="status content__footer-status">
                                    <span className="content__item-status-sub">HD Vietsub</span>
                                </div>
                            </a>
                        </div>
                        <div className="col l-2 m-4 c-6">
                            <a className="content__item" href="#">
                                <img src="./assets/img/footer_hanhdong/Tiềm Hành Truy Kích.jpg" alt="Tiềm Hành Truy Kích" className="content__list-img" />
                                <h3 className="content__item-name-vn webkit">
                                    Tiềm Hành Truy Kích
                                </h3>
                                <span className="content__item-name-eng webkit">
                                    Lives of Omission 2011
                                </span>
                                <div className="content__item-status">
                                    <span className="content__item-status-view">
                                        Lượt xem: 11219
                                    </span>
                                    <div className="content__item-status-rating">
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--no fas fa-star" />
                                    </div>
                                </div>
                                <div className="status content__footer-status">
                                    <span className="content__item-status-sub">HD Vietsub</span>
                                </div>
                            </a>
                        </div>
                        <div className="col l-2 m-4 c-6">
                            <a className="content__item" href="#">
                                <img src="./assets/img/footer_hanhdong/Vượt Ngục Phần 1.jpg" alt="Vượt Ngục" className="content__list-img" />
                                <h3 className="content__item-name-vn webkit">
                                    Vượt Ngục Phần 1
                                </h3>
                                <span className="content__item-name-eng webkit">
                                    Prison Break Season 1
                                </span>
                                <div className="content__item-status">
                                    <span className="content__item-status-view">
                                        Lượt xem: 8519
                                    </span>
                                    <div className="content__item-status-rating">
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--no fas fa-star" />
                                    </div>
                                </div>
                                <div className="status content__footer-status">
                                    <span className="content__item-status-sub">HD Vietsub</span>
                                </div>
                            </a>
                        </div>
                        <header className="content__footer-header">
                            <i className="content__footer-header-icon fas fa-moon" />
                            <h2 className="content__footer-header-name">
                                Phim viễn tưởng
                            </h2>
                        </header>
                        <div className="col l-2 m-4 c-6">
                            <a className="content__item" href="#">
                                <img src="./assets/img/footer_vientuong/Biệt Đội Siêu Anh Hùng 3_ Cuộc Chiến Vô_yyth.jpg" alt="end game" className="content__list-img" />
                                <h3 className="content__item-name-vn webkit">
                                    Biệt đội siêu anh hùng 3
                                </h3>
                                <span className="content__item-name-eng webkit">
                                    Avengers 3: Infinity War
                                </span>
                                <div className="content__item-status">
                                    <span className="content__item-status-view">
                                        Lượt xem: 11219
                                    </span>
                                    <div className="content__item-status-rating">
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--no fas fa-star" />
                                    </div>
                                </div>
                                <div className="status content__footer-status">
                                    <span className="content__item-status-sub">HD Vietsub</span>
                                </div>
                            </a>
                        </div>
                        <div className="col l-2 m-4 c-6">
                            <a className="content__item" href="#">
                                <img src="./assets/img/footer_vientuong/Godzilla vs. Kong.jpg" alt="Godzilla vs. Kong" className="content__list-img" />
                                <h3 className="content__item-name-vn webkit">
                                    Godzilla vs. Kong
                                </h3>
                                <span className="content__item-name-eng webkit">
                                    Godzilla vs. Kong
                                </span>
                                <div className="content__item-status">
                                    <span className="content__item-status-view">
                                        Lượt xem: 12219
                                    </span>
                                    <div className="content__item-status-rating">
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--no fas fa-star" />
                                    </div>
                                </div>
                                <div className="status content__footer-status">
                                    <span className="content__item-status-sub">HD Vietsub</span>
                                </div>
                            </a>
                        </div>
                        <div className="col l-2 m-4 c-6">
                            <a className="content__item" href="#">
                                <img src="./assets/img/footer_vientuong/Sóng Tình.jpg" alt="Sóng Tình" className="content__list-img" />
                                <h3 className="content__item-name-vn webkit">
                                    Sóng Tình
                                </h3>
                                <span className="content__item-name-eng webkit">
                                    Undulant Fever
                                </span>
                                <div className="content__item-status">
                                    <span className="content__item-status-view">
                                        Lượt xem: 8219
                                    </span>
                                    <div className="content__item-status-rating">
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--no fas fa-star" />
                                    </div>
                                </div>
                                <div className="status content__footer-status">
                                    <span className="content__item-status-sub">HD Vietsub</span>
                                </div>
                            </a>
                        </div>
                        <div className="col l-2 m-4 c-6">
                            <a className="content__item" href="#">
                                <img src="./assets/img/footer_vientuong/vung_chien_su_nguy_hiem_outside_the_wire_2021.jpg" alt="vung_chien" className="content__list-img" />
                                <h3 className="content__item-name-vn webkit">
                                    Vùng Chiến Sự Nguy Hiểm
                                </h3>
                                <span className="content__item-name-eng webkit">
                                    Outside The Wire 2021
                                </span>
                                <div className="content__item-status">
                                    <span className="content__item-status-view">
                                        Lượt xem: 9819
                                    </span>
                                    <div className="content__item-status-rating">
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--no fas fa-star" />
                                    </div>
                                </div>
                                <div className="status content__footer-status">
                                    <span className="content__item-status-sub">HD Vietsub</span>
                                </div>
                            </a>
                        </div>
                        <div className="col l-2 m-4 c-6">
                            <a className="content__item" href="#">
                                <img src="./assets/img/footer_vientuong/xac_song_phan_10_the_walking_dead_season_10.jpg" alt="xac song" className="content__list-img" />
                                <h3 className="content__item-name-vn webkit">
                                    Xác sống phần 10
                                </h3>
                                <span className="content__item-name-eng webkit">
                                    The Walking Dead Season 10
                                </span>
                                <div className="content__item-status">
                                    <span className="content__item-status-view">
                                        Lượt xem: 11219
                                    </span>
                                    <div className="content__item-status-rating">
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--no fas fa-star" />
                                    </div>
                                </div>
                                <div className="status content__footer-status">
                                    <span className="content__item-status-sub">HD 22/22</span>
                                </div>
                            </a>
                        </div>
                        <div className="col l-2 m-4 c-6">
                            <a className="content__item" href="#">
                                <img src="./assets/img/footer_vientuong/Được Nuôi Bởi Người Sói.jpg" alt="Được Nuôi Bởi Người Sói" className="content__list-img" />
                                <h3 className="content__item-name-vn webkit">
                                    Được Nuôi Bởi Người Sói
                                </h3>
                                <span className="content__item-name-eng webkit">
                                    Raised by Wolves season 1
                                </span>
                                <div className="content__item-status">
                                    <span className="content__item-status-view">
                                        Lượt xem: 4519
                                    </span>
                                    <div className="content__item-status-rating">
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--no fas fa-star" />
                                    </div>
                                </div>
                                <div className="status content__footer-status">
                                    <span className="content__item-status-sub">HD Vietsub</span>
                                </div>
                            </a>
                        </div>
                        <header className="content__footer-header">
                            <i className="content__footer-header-icon fas fa-moon" />
                            <h2 className="content__footer-header-name">
                                Phim cổ trang
                            </h2>
                        </header>
                        <div className="col l-2 m-4 c-6">
                            <a className="content__item" href="#">
                                <img src="./assets/img/footer_cotrang/Công Chúa Khó Gần.jpg" alt="Công Chúa Khó Gần" className="content__list-img" />
                                <h3 className="content__item-name-vn webkit">
                                    Công Chúa Khó Gần
                                </h3>
                                <span className="content__item-name-eng webkit">
                                    No Touch Princess
                                </span>
                                <div className="content__item-status">
                                    <span className="content__item-status-view">
                                        Lượt xem: 1219
                                    </span>
                                    <div className="content__item-status-rating">
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--no fas fa-star" />
                                    </div>
                                </div>
                                <div className="status content__footer-status">
                                    <span className="content__item-status-sub">HD Vietsub 22/22</span>
                                </div>
                            </a>
                        </div>
                        <div className="col l-2 m-4 c-6">
                            <a className="content__item" href="#">
                                <img src="./assets/img/footer_cotrang/Hoa Đậu Xanh.jpg" alt="Hoa Đậu Xanh" className="content__list-img" />
                                <h3 className="content__item-name-vn webkit">
                                    Hoa Đậu Xanh
                                </h3>
                                <span className="content__item-name-eng webkit">
                                    The Nokdu Flower
                                </span>
                                <div className="content__item-status">
                                    <span className="content__item-status-view">
                                        Lượt xem: 12219
                                    </span>
                                    <div className="content__item-status-rating">
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--no fas fa-star" />
                                    </div>
                                </div>
                                <div className="status content__footer-status">
                                    <span className="content__item-status-sub">HD Vietsub 24/24</span>
                                </div>
                            </a>
                        </div>
                        <div className="col l-2 m-4 c-6">
                            <a className="content__item" href="#">
                                <img src="./assets/img/footer_cotrang/Hoàng Tử Gác Mái.jpg" alt="Hoàng Tử Gác Mái" className="content__list-img" />
                                <h3 className="content__item-name-vn webkit">
                                    Hoàng Tử Gác Mái
                                </h3>
                                <span className="content__item-name-eng webkit">
                                    Rooftop Prince
                                </span>
                                <div className="content__item-status">
                                    <span className="content__item-status-view">
                                        Lượt xem: 6219
                                    </span>
                                    <div className="content__item-status-rating">
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--no fas fa-star" />
                                        <i className="rating--no fas fa-star" />
                                    </div>
                                </div>
                                <div className="status content__footer-status">
                                    <span className="content__item-status-sub">HD Vietsub 20/20</span>
                                </div>
                            </a>
                        </div>
                        <div className="col l-2 m-4 c-6">
                            <a className="content__item" href="#">
                                <img src="./assets/img/footer_cotrang/Lưu Ly Mỹ Nhân Sát.jpg" alt="Lưu Ly Mỹ Nhân Sát" className="content__list-img" />
                                <h3 className="content__item-name-vn webkit">
                                    Lưu Ly Mỹ Nhân Sát
                                </h3>
                                <span className="content__item-name-eng webkit">
                                    Love and Redemption
                                </span>
                                <div className="content__item-status">
                                    <span className="content__item-status-view">
                                        Lượt xem: 9819
                                    </span>
                                    <div className="content__item-status-rating">
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--no fas fa-star" />
                                    </div>
                                </div>
                                <div className="status content__footer-status">
                                    <span className="content__item-status-sub">HD Vietsub 59/59</span>
                                </div>
                            </a>
                        </div>
                        <div className="col l-2 m-4 c-6">
                            <a className="content__item" href="#">
                                <img src="./assets/img/footer_cotrang/Mặt Trăng Ôm Mặt Trời.jpg" alt="Mặt Trăng Ôm Mặt Trời" className="content__list-img" />
                                <h3 className="content__item-name-vn webkit">
                                    Mặt Trăng Ôm Mặt Trời
                                </h3>
                                <span className="content__item-name-eng webkit">
                                    The Moon Embracing The Sun 2012
                                </span>
                                <div className="content__item-status">
                                    <span className="content__item-status-view">
                                        Lượt xem: 11219
                                    </span>
                                    <div className="content__item-status-rating">
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--no fas fa-star" />
                                        <i className="rating--no fas fa-star" />
                                    </div>
                                </div>
                                <div className="status content__footer-status">
                                    <span className="content__item-status-sub">HD 20/20</span>
                                </div>
                            </a>
                        </div>
                        <div className="col l-2 m-4 c-6">
                            <a className="content__item" href="#">
                                <img src="./assets/img/footer_cotrang/Sở Lưu Hương Tân Truyện.jpg" alt="Sở Lưu Hương Tân Truyện" className="content__list-img" />
                                <h3 className="content__item-name-vn webkit">
                                    Sở Lưu Hương Tân Truyện
                                </h3>
                                <span className="content__item-name-eng webkit">
                                    The Legend Of Chu Liuxiang
                                </span>
                                <div className="content__item-status">
                                    <span className="content__item-status-view">
                                        Lượt xem: 4519
                                    </span>
                                    <div className="content__item-status-rating">
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--have fas fa-star" />
                                        <i className="rating--no fas fa-star" />
                                    </div>
                                </div>
                                <div className="status content__footer-status">
                                    <span className="content__item-status-sub">HD Vietsub 10/43</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Filler;