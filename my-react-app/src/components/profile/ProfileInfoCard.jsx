import { useState } from "react";
import { User, Mail, Phone, Building, Shield, Save } from "lucide-react";

export default function ProfileInfoCard() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState({
    ho_ten: "Nguyễn Văn A",
    email: "admin@university.edu.vn",
    so_dien_thoai: "0123456789",
    don_vi: "Phòng Quản lý thiết bị",
    vai_tro: "Admin",
  });

  // Đồng bộ trạng thái edit từ Sidebar (nếu cần mở rộng)
  window.addEventListener("toggleEditMode", () => setIsEditMode(prev => !prev));

  return (
    <div className="card mb-4">
      <div className="card-header d-flex align-items-center justify-content-between">
        <h5 className="mb-0">Thông tin cá nhân</h5>
        {isEditMode && (
          <button className="btn btn-sm btn-success">
            <Save size={16} className="me-2" />
            Lưu thay đổi
          </button>
        )}
      </div>
      <div className="card-body">
        <div className="row g-3">
          <div className="col-12">
            <label className="form-label d-flex align-items-center gap-2">
              <User size={16} />
              Họ và tên
            </label>
            <input
              type="text"
              className="form-control"
              value={userInfo.ho_ten}
              onChange={(e) => setUserInfo({ ...userInfo, ho_ten: e.target.value })}
              disabled={!isEditMode}
            />
          </div>

          <div className="col-12 col-md-6">
            <label className="form-label d-flex align-items-center gap-2">
              <Mail size={16} />
              Email
            </label>
            <input
              type="email"
              className="form-control"
              value={userInfo.email}
              onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
              disabled={!isEditMode}
            />
          </div>

          <div className="col-12 col-md-6">
            <label className="form-label d-flex align-items-center gap-2">
              <Phone size={16} />
              Số điện thoại
            </label>
            <input
              type="tel"
              className="form-control"
              value={userInfo.so_dien_thoai}
              onChange={(e) => setUserInfo({ ...userInfo, so_dien_thoai: e.target.value })}
              disabled={!isEditMode}
            />
          </div>

          <div className="col-12 col-md-6">
            <label className="form-label d-flex align-items-center gap-2">
              <Building size={16} />
              Đơn vị
            </label>
            <input type="text" className="form-control" value={userInfo.don_vi} disabled />
          </div>

          <div className="col-12 col-md-6">
            <label className="form-label d-flex align-items-center gap-2">
              <Shield size={16} />
              Vai trò
            </label>
            <input type="text" className="form-control" value={userInfo.vai_tro} disabled />
          </div>
        </div>
      </div>
    </div>
  );
}