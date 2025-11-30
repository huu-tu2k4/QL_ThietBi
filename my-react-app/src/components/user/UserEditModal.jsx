import { useState, useEffect } from "react";

export default function UserEditModal() {
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
    window.addEventListener("openEditUserModal", handler);
    return () => window.removeEventListener("openEditUserModal", handler);
  }, []);

  if (!isOpen || !user) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Chỉnh sửa người dùng - {user.username}</h5>
            <button type="button" className="btn-close" onClick={() => setIsOpen(false)}></button>
          </div>
          <div className="modal-body">
            <div className="row g-3">
              <div className="col-6">
                <label className="form-label">Họ tên *</label>
                <input type="text" className="form-control" defaultValue={user.ho_ten} />
              </div>
              <div className="col-6">
                <label className="form-label">Email *</label>
                <input type="email" className="form-control" defaultValue={user.email} />
              </div>
              <div className="col-6">
                <label className="form-label">Vai trò *</label>
                <select className="form-select" defaultValue={user.vai_tro}>
                  <option>Admin</option>
                  <option>Nhân viên thiết bị</option>
                  <option>Trưởng khoa</option>
                  <option>Người dùng</option>
                </select>
              </div>
              <div className="col-6">
                <label className="form-label">Đơn vị</label>
                <select className="form-select" defaultValue={user.don_vi}>
                  <option>Phòng Quản lý thiết bị</option>
                  <option>Khoa CNTT</option>
                  <option>Khoa Cơ khí</option>
                  <option>Khoa Điện tử</option>
                </select>
              </div>
              <div className="col-6">
                <label className="form-label">Trạng thái</label>
                <select className="form-select" defaultValue={user.trang_thai}>
                  <option>Hoạt động</option>
                  <option>Tạm khóa</option>
                </select>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-outline-secondary" onClick={() => setIsOpen(false)}>Hủy</button>
            <button className="btn btn-primary" onClick={() => setIsOpen(false)}>
              Lưu thay đổi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}