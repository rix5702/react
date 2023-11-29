// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Chính sách bảo hành</h5>
            <ul className="list-unstyled">
              <li><a href="#">Chính sách đổi trả</a></li>
              <li><a href="#">Chính sách bảo hành</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Khuyến mãi</h5>
            <ul className="list-unstyled">
              <li><a href="#">Ưu đãi đặc biệt</a></li>
              <li><a href="#">Khuyến mãi tháng này</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Hỗ trợ</h5>
            <ul className="list-unstyled">
              <li><a href="#">Hướng dẫn mua hàng</a></li>
              <li><a href="#">Trung tâm hỗ trợ</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <address>
              123 Main Street<br />
              City, State 12345<br />
              <a href="mailto:info@example.com">info@example.com</a>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
