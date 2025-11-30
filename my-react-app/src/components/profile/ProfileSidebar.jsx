import { useState } from "react";
import { User, Edit, Key } from "lucide-react";

const userInfo = {
  ho_ten: "Nguyễn Văn A",
  vai_tro: "Admin",
  username: "admin",
};

export default function ProfileSidebar() {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <>
      {/* Profile Card */}
      <div className="card mb-4">
        <div className="card-body text-center">
          <div
            className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
            style={{ width: "100px", height: "100px", backgroundColor: "var(--bs-primary)" }}
          >
            <User size={48} color="white" />
          </div>
          <h4 className="mb-1">{userInfo.ho_ten}</h4>
          <p className="text-muted mb-3">{userInfo.vai_tro}</p>
          <span className="badge bg-success mb-3">Hoạt động</span>
          <div className="d-grid gap-2">
            <button
              className="btn btn-primary"
              onClick={() => setIsEditMode(!isEditMode)}
            >
              <Edit size={16} className="me-2" />
              {isEditMode ? "Hủy chỉnh sửa" : "Chỉnh sửa thông tin"}
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => window.dispatchEvent(new Event("openChangePasswordModal"))}
            >
              <Key size={16} className="me-2" />
              Đổi mật khẩu
            </button>
          </div>
        </div>
      </div>

      {/* Account Info */}
      <div className="card">
        <div className="card-header">
          <h6 className="mb-0">Thông tin tài khoản</h6>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label className="text-muted text-sm mb-1">Tên đăng nhập</label>
            <p className="mb-0 fw-medium">{userInfo.username}</p>
          </div>
          <div className="mb-3">
            <label className="text-muted text-sm mb-1">Ngày tạo</label>
            <p className="mb-0">01/01/2024</p>
          </div>
          <div>
            <label className="text-muted text-sm mb-1">Đăng nhập lần cuối</label>
            <p className="mb-0">29/11/2025 14:30</p>
          </div>
        </div>
      </div>
    </>
  );
}