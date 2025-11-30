// src/components/user/UserDetailModal.jsx
import { useState, useEffect } from "react";

export default function UserDetailModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handler = () => {
      const data = localStorage.getItem("selectedUser");
      if (data) {
        setUser(JSON.parse(data));
        setIsOpen(true);
      }
    };
    window.addEventListener("openDetailUserModal", handler);
    return () => window.removeEventListener("openDetailUserModal", handler);
  }, []);

  if (!isOpen || !user) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Chi tiết người dùng</h5>
            <button type="button" className="btn-close" onClick={() => setIsOpen(false)}></button>
          </div>
          <div className="modal-body">
            <div className="row g-3">
              <div className="col-6">
                <label className="form-label">Tên đăng nhập</label>
                <input type="text" className="form-control" value={user.username} readOnly />
              </div>
              <div className="col-6">
                <label className="form-label">Họ tên</label>
                <input type="text" className="form-control" value={user.ho_ten} readOnly />
              </div>
              <div className="col-6">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" value={user.email} readOnly />
              </div>
              <div className="col-6">
                <label className="form-label">Số điện thoại</label>
                <input type="tel" className="form-control" value={user.sdt || ''} readOnly />
              </div>
              <div className="col-6">
                <label className="form-label">Vai trò</label>
                <input type="text" className="form-control" value={user.vai_tro} readOnly />
              </div>
              <div className="col-6">
                <label className="form-label">Đơn vị</label>
                <input type="text" className="form-control" value={user.don_vi} readOnly />
              </div>
              <div className="col-6">
                <label className="form-label">Trạng thái</label>
                <input type="text" className="form-control" value={user.trang_thai} readOnly />
              </div>
              <div className="col-6">
                <label className="form-label">Ngày tạo</label>
                <input type="text" className="form-control" value={user.ngay_tao} readOnly />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-outline-secondary" onClick={() => setIsOpen(false)}>Đóng</button>
          </div>
        </div>
      </div>
    </div>
  );
}