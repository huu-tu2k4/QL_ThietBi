import { useState, useEffect } from "react";

export default function ChangePasswordModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener("openChangePasswordModal", handler);
    return () => window.removeEventListener("openChangePasswordModal", handler);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Đổi mật khẩu</h5>
            <button type="button" className="btn-close" onClick={() => setIsOpen(false)}></button>
          </div>
          <div className="modal-body">
            <div className="d-flex flex-column gap-3">
              <div>
                <label className="form-label">Mật khẩu hiện tại *</label>
                <input type="password" className="form-control" placeholder="Nhập mật khẩu hiện tại" />
              </div>
              <div>
                <label className="form-label">Mật khẩu mới *</label>
                <input type="password" className="form-control" placeholder="Nhập mật khẩu mới (tối thiểu 8 ký tự)" />
              </div>
              <div>
                <label className="form-label">Xác nhận mật khẩu mới *</label>
                <input type="password" className="form-control" placeholder="Nhập lại mật khẩu mới" />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-outline-secondary" onClick={() => setIsOpen(false)}>
              Hủy
            </button>
            <button className="btn btn-primary" onClick={() => setIsOpen(false)}>
              Đổi mật khẩu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}