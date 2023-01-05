import React from "react";
import "./css/login.css";

const Register = ({}) => {
    return(
        <div className="welcome">
            <div className="welcome-inner">
                <h1 className="logo txt-cen">
                    Slytherin
                </h1>
                <h2 className="txt-cen">Đăng kí</h2>
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
                <p className="txt-cen">Bạn chưa có tài khoản?<a href="#">Đăng kí</a></p>
                <p className="txt-cen">Tài khoản chưa kích hoạt?<a href="#">Kích hoạt</a></p>
            </div>
        </div>
    );
};

export default Register;