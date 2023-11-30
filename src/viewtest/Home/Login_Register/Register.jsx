import React, { useState } from "react";
import "./css/register.css";
import "./css/base.css";
import axios from "axios";
import { Link } from "react-router-dom";
import {  FaFacebook, FaGoogle } from "react-icons/fa6";
import img from '../../img/avatardefault.png'; 
function Register() {
  const [fullName, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setImage(files[0]);
    } else {
      switch (name) {
        case 'fullName':
          setFullname(value);
          break;
        case 'email':
          setEmail(value);
          break;
          case 'phoneNumber':
          setphoneNumber(value);
          break;
        case 'password':
          setPassword(value);
          break;
        case 'location':
          setLocation(value);
          break;
        default:
          break;
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('image', image);
    formDataToSend.append('fullName', fullName);
    formDataToSend.append('phoneNumber', phoneNumber);
    formDataToSend.append('email', email);
    formDataToSend.append('password', password);
    formDataToSend.append('location', location);

    try {
      await axios.post('http://localhost:5000/register', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
        },
      });
        alert('Đăng Ký Thành Công');
        window.location.href="http://localhost:3000/login"
    } catch (error) {
      console.error('Có lỗi xảy ra khi Register:', error);
    }
  };



  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };


  const handleCloseButtonClick = () => {
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
  };
  const [file, setFile] = useState();
  const defaultImage = img // ảnh mặc định
  function getFile(event) {
    setFile(URL.createObjectURL(event.target.files[0]))
  }
  return (
    <form className="register-form" onSubmit={handleSubmit}>
    <div className="hehehe">
      <div className="modal">
 
        <div className="modal-content">
       
          <div className="modal-header">
            <button
              type="button"
              className="close"
              onClick={handleCloseButtonClick}
            >
              <span aria-hidden="true">x</span>
            </button>
            
            <h2>Đăng ký</h2>
          </div>
          
          <div className="modal-body">
            <div className="modal-input-body">
              <div className="modal-input-body">
              <div className="line-form">
                <div className="custom-input">
                    <div className="wrap-info">
                      <div className="title-status">
                        <p>Ảnh đại diện</p>
                        <div className="desc">

                        </div>
                      </div>
                    </div>
                    <div className="custom-input-list">
                    <div className="wrap-input">
                      <div className="wrap-text">
                        <input
                          type="file"
                          name="image"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="wrap-images">
                        <img src={file ? file : defaultImage} alt="" />
                    
                    </div>
                  </div>
                </div>
                </div>
                <div className="line-form">
                  <div className="custom-input">
                    <div className="wrap-info">
                      <div className="title-status">
                        <p>Số điện thoại</p>
                        <div className="desc"></div>
                      </div>
                    </div>
                    <div className="wrap-input">
                      <div className="wrap-text">
                        <input
                          type="text"
                          name="phoneNumber"
                          placeholder="Nhập Số Điện Thoại"
                          onChange={handleChange}
                          required
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="line-form">
                  <div className="custom-input">
                    <div className="wrap-info">
                      <div className="title-status">
                        <p>Họ và Tên</p>
                        <div className="desc"></div>
                      </div>
                    </div>
                    <div className="wrap-input">
                      <div className="wrap-text">
                        <input type="text" name="fullName" placeholder="Nhập Họ và Tên" onChange={handleChange}></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="line-form">
                  <div className="custom-input">
                    <div className="wrap-info">
                      <div className="title-status">
                        <p>Email</p>
                        <div className="desc"></div>
                      </div>
                    </div>
                    <div className="wrap-input">
                      <div className="wrap-text">
                        <input type="text" name="email" placeholder="Nhập Email" onChange={handleChange}></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="line-form">
                  <div className="custom-input">
                    <div className="wrap-info">
                      <div className="title-status">
                        <p>Mật Khẩu</p>
                        <div className="desc"></div>
                      </div>
                    </div>
                    <div className="wrap-input">
                      <div className="wrap-text">
                        <input        
                        type="password"                
                          name="password"
                          required
                          className="input-password"
                          placeholder="Nhập Mật Khẩu"
                          onChange={handleChange}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="line-form">
                  <div className="custom-input">
                    <div className="wrap-info">
                      <div className="title-status">
                        <p>Địa chỉ</p>
                        <div className="desc"></div>
                      </div>
                    </div>
                    <div className="wrap-input">
                      <div className="wrap-text">
                        <input type="text" name="location" placeholder="Nhập Địa Chỉ" onChange={handleChange}></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrap-test">
                  <div className="custom-checkbox-selected">
                    <input
                      type="checkbox"
                      id="myCheck"
                      checked={isChecked}
                      onClick={handleCheckboxClick}
                    ></input>
                    <label htmlFor="myCheck">
                      Tôi đồng ý với chính sách của Hungdev.
                      <a class="text-primary" href="/privacy">
                        Chi tiết
                      </a>
                    </label>
                  </div>
                </div>
                <div className="wrap-btn-register">
                  <button
                    type="submit"
                    className={`background ${
                      isChecked ? "new-background" : ""
                    }`}
                    id="backgroud2"
                  >
    
                      Đăng Ký
                  </button>
                </div>
                <div className="wrap-btn-text">
                  <p>Bạn đã có tài khoản ? 
                    <Link to ="/login"> <span>Đăng nhập</span>      </Link>
                    </p>
                </div>
                <div className="wrap-btn-icon">
                  <div className="wrap-btn-icon__facebook">
                    <span className="icon__face">
                      <FaFacebook />
                    </span>
                    <span>FaceBook</span>
                  </div>

                  <div className="wrap-btn-google">
                    <span className="icon-Google">
                      <FaGoogle />
                    </span>
                    <span>Google</span>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
    </form>
  );
}

export default Register;
