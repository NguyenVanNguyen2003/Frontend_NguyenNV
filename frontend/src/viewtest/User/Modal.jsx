import React, { useState } from "react";
import "../User/css/modal.css";
import axios from "axios";
import "../User/css/reponsive.css";
import { FaPen } from "react-icons/fa6";

function AnimatedModal() {
  const [modalDisplay, setModalDisplay] = useState("none");
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
    location: "",
    birthDay: "",
    linkFB: "",
    avatar: ""
  });

  const openModal = () => {
    setModalDisplay("block");
  };

  const closeModal = () => {
    setModalDisplay("none");
  };

  const handleOutsideClick = (event) => {
    if (event.target.id === "myModal") {
      setModalDisplay("none");
    }
  };

  const handleInputChange = (e, field) => {
    setUserDetails({
      ...userDetails,
      [field]: e.target.value
    });
  };

  const handleEditUser = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const userId = localStorage.getItem('userId');
      const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : {};

      const userDataToUpdate = { ...userDetails };

      await axios.put(`http://localhost:5000/edit-user/${userId}`, userDataToUpdate, { headers });
      window.location.reload();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };
  return (
    <div className="modal-main">
      <div className="btn-openModal" onClick={() => openModal()}>Chỉnh sửa<i><FaPen></FaPen></i></div>
      <div
        id="myModal"
        className="modal-user"
        style={{ display: modalDisplay }}
        onClick={handleOutsideClick}>
        <div className="modal-content">
          <div className="modal-body">
              <h1>Chỉnh sửa thông tin</h1>
              <div className="input-textarenna">
              <div className="change-avt">
              <h3>Thay đổi ảnh đại diện</h3>
                    <div>
                    <div className="wrap-input">
                    <input
              type="text"
              placeholder="URL  Ảnh"
              value={userDetails.avatar}
              onChange={(e) => handleInputChange(e, "avatar")}
            />               
                    </div>
                    </div>
              </div>
              <div className="change-avt">
              <h3>Nhập Họ Tên</h3>
               <div className="wrap-input">
                  <input type="text" placeholder="VD : Nguyễn Văn A" value={userDetails.fullName}
              onChange={(e) => handleInputChange(e, "fullName")}/>               
               </div>
              </div>
              <div className="change-avt">
              <h3>Nhập Địa Chỉ</h3>
               <div className="wrap-input">
                  <input type="text" placeholder="VD : 123 Phạm Đình Hổ, Quận Liên Chiểu, TP Đà Nẵng" value={userDetails.location}
              onChange={(e) => handleInputChange(e, "location")}/>               
               </div>
               </div>
              </div>
              <div className="change-avt">
              <h3>Nhập Email</h3>
               <div className="wrap-input">
                  <input type="text" placeholder="example@exam.com" value={userDetails.email}
              onChange={(e) => handleInputChange(e, "email")}/>               
               </div>
              </div>
              <div className="change-avt">
              <h3>Nhập Ngày Sinh</h3>
               <div className="wrap-input">
                  <input type="text" placeholder="--/--/----" value={userDetails.birthDay}
              onChange={(e) => handleInputChange(e, "birthDay")}/>               
               </div>
              </div>
              <div className="change-avt">
              <h3>Liên Kết Facebook</h3>
               <div className="wrap-input">
                  <input type="text" placeholder="http://www.facebook.com/zuck" value={userDetails.linkFB}
              onChange={(e) => handleInputChange(e, "linkFB")}/>               
               </div>
              </div>
              <div className="btn-modal">
                <button onClick={closeModal}>Hủy</button>
                <button className="btn-modal-active" onClick={handleEditUser} type="submit">Xác nhận</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimatedModal;
