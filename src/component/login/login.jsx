import React, { useState } from "react";
import "./css/login.css";
import { Link} from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Login = ({}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="welcome">
                <div className="welcome-inner">
                    <h1 className="logo txt-cen">
                        Slytherin
                    </h1>
                    <h2 className="txt-cen">Đăng nhập</h2>
                    <p className="txt-cen txt-sm">
                        Mừng bạn quay trở lại
                    </p>
                    <div className="fb-btn btn btn-pr txt-cen">Facebook</div>
                    <p className="txt-cen txt-sm">OR</p>
                    <div>
                        <p className="mb-1">Tài Khoản</p>
                        <input className="w-100" type="text" id="txtUsername" name="txtUsername"/>
                        <br />
                        <p className="mb-1">Mật khẩu</p>
                        <input className="w-100" type="password" id="txtPassword" name="txtPassword"/>
                    </div>
                    <div type="submit" className="lg-btn btn txt-cen btn-se mt-3">
                        Sign in
                    </div>
                    <p className="txt-cen">Bạn chưa có tài khoản?<Link to="register">Đăng ký</Link></p>
                    <p className="txt-cen">Tài khoản chưa kích hoạt?<a href="#" onClick={handleShow}>Kích hoạt</a></p>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Xác thực tài khoản</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="mb-1">Email</p>
                    <input className="w-100" type="text" id="txtUsername" name="txtUsername"/>
                    <br />
                    <p className="mb-1">Mật khẩu</p>
                    <input className="w-100" type="password" id="txtPassword" name="txtPassword"/>
                    <div>Xác thực</div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Login;