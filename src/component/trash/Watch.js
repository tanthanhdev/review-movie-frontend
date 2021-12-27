import React, { Component } from 'react';

class Watch extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <div className="watch embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="https://pic.pikbest.com/19/41/94/54C888piCcSU.mp4" />
                    </div>
                    <div className="description">
                        <div className="grid">
                            <div className="grid wide">
                                <div className="row">
                                    <div className="col l-3">
                                        <img src="./assets/img/footer_cotrang/Công Chúa Khó Gần.jpg" alt="Công Chúa Khó Gần" />
                                    </div>
                                    <div className="col l-9 description-content">
                                        <h2 className="description__name">
                                            Công Chúa Khó Gần
                                        </h2>
                                        <div className="description__infomation">
                                            <div className="description__infomation-item">
                                                <i className="fas fa-thumbs-up" />
                                                <span>0</span>
                                            </div>
                                            <div className="description__infomation-item">
                                                <i className="fas fa-eye" />
                                                <span>6k</span>
                                            </div>
                                            <div className="description__infomation-item">
                                                <i className="fas fa-share" />
                                                <span>Share</span>
                                            </div>
                                            <span>Đám Cưới Đen xoay quanh câu chuyện của tên Zhenya, một cô gái đau khổ vì tình yêu với người chồng đã bỏ mình nên cô quyết định mang anh ta trở lại. Trong sự tuyệt vọng, cô gái đã sử dụng một câu thần chú gọi là "Đám cưới đen", một nghi lễ ma thuật nổi tiếng với sức mạnh to lớn và không thể đảo ngược. Sau nghi lễ, người chồng yêu dấu của cô trở lại, mặc dù tình yêu của anh trở nên giống như một nỗi ám ảnh: anh thậm chí sẵn sàng giết Zhenya, để không trao cô cho bất cứ ai.</span>
                                        </div>
                                        <div className="description__infomation-2">
                                            <div className="description__infomation-2-item">
                                                <span className="description__infomation-2-item-left">Thời lượng</span>
                                                <span className="description__infomation-2-item-right">92 phút</span>
                                            </div>
                                            <div className="description__infomation-2-item">
                                                <span className="description__infomation-2-item-left">Đạo diễn</span>
                                                <span className="description__infomation-2-item-right">Svyatoslav Podgaevskiy</span>
                                            </div>
                                            <div className="description__infomation-2-item">
                                                <span className="description__infomation-2-item-left">Thể loại</span>
                                                <span className="description__infomation-2-item-right">Kinh dị, Phim mới,</span>
                                            </div>
                                            <div className="description__infomation-2-item">
                                                <span className="description__infomation-2-item-left">Quốc gia</span>
                                                <span className="description__infomation-2-item-right">Mỹ</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default Watch;