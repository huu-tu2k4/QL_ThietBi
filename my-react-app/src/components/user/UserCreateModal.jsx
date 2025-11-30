import { useState, useEffect } from "react";

export default function UserCreateModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener("openCreateUserModal", handler);
    return () => window.removeEventListener("openCreateUserModal", handler);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Thêm người dùng mới</h5>
            <button type="button" className="btn-close" onClick={() => setIsOpen(false)}></button>
          </div>
          <div className="modal-body">
            <div className="row g-3">
              <div className="col-6">
                <label className="form-label">Tên đăng nhập *</label>
                <input type="text" className="form-control" placeholder="Nhập tên đăng nhập" />
              </div>
              <div className="col-6">
                <label className="form-label">Họ tên *</label>
                <input type="text" className="form-control" placeholder="Nhập họ tên" />
              </div>
              <div className="col-6">
                <label className="form-label">Email *</label>
                <input type="email" className="form-control" placeholder="example@university.edu.vn" />
              </div>
              <div className="col-6">
                <label className="form-label">Số điện thoại</label>
                <input type="tel" className="form-control" placeholder="0901234567" />
              </div>
              <div className="col-6">
                <label className="form-label">Vai trò *</label>
                <select className="form-select">
                  <option value="">Chọn vai trò</option>
                  <option>Admin</option>
                  <option>Nhân viên thiết bị</option>
                  <option>Trưởng khoa</option>
                  <option>Người dùng</option>
                </select>
              </div>
              <div className="col-6">
                <label className="form-label">Đơn vị</label>
                <select className="form-select">
                  <option value="">Chọn đơn vị</option>
                  <option>Phòng Quản lý thiết bị</option>
                  <option>Khoa CNTT</option>
                  <option>Khoa Cơ khí</option>
                  <option>Khoa Điện tử</option>
                </select>
              </div>
              <div className="col-6">
                <label className="form-label">Mật khẩu *</label>
                <input type="password" className="form-control" placeholder="••••••••" />
              </div>
              <div className="col-6">
                <label className="form-label">Xác nhận mật khẩu *</label>
                <input type="password" className="form-control" placeholder="••••••••" />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-outline-secondary" onClick={() => setIsOpen(false)}>Hủy</button>
            <button className="btn btn-primary" onClick={() => setIsOpen(false)}>
              Thêm người dùng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}