// src/components/dashboard/Header.jsx
import { Bell, Search, User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Header({ onToggleSidebar, isSidebarOpen }) {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <header className="navbar navbar-expand navbar-light bg-white border-bottom shadow-sm sticky-top">
      <div className="container-fluid px-4">
        {/* Nút hamburger - chỉ hiện khi màn hình nhỏ hoặc sidebar đóng */}
        <button
          className="btn btn-link text-dark me-3"
          onClick={onToggleSidebar}
        >
          <i className={`bi ${isSidebarOpen ? "bi-list" : "bi-list"} fs-3`}></i>
        </button>

        {/* Right menu */}
        <ul className="navbar-nav align-items-center gap-3">
          {/* Notification */}
          <li className="nav-item dropdown">
            <a className="nav-link position-relative" href="#" data-bs-toggle="dropdown">
              <Bell size={22} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "0.65rem" }}>
                3
              </span>
            </a>
            <div className="dropdown-menu dropdown-menu-end mt-2 shadow" style={{ width: "340px" }}>
              <h6 className="dropdown-header">Thông báo</h6>
              <div className="dropdown-divider"></div>
              <div className="p-2 small">
                <div className="p-2 bg-light rounded mb-2">Thiết bị cần bảo trì: 8 cái</div>
                <div className="p-2 bg-light rounded mb-2">Đề xuất mua sắm đã duyệt</div>
                <div className="p-2 bg-light rounded">Kiểm kê hoàn thành</div>
              </div>
            </div>
          </li>

          {/* User */}
          <li className="nav-item dropdown">
            <a className="nav-link d-flex align-items-center gap-2 text-decoration-none" href="#" data-bs-toggle="dropdown">
              <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: 38, height: 38 }}>
                <User size={20} />
              </div>
              <div className="d-none d-md-block text-start">
                <div className="fw-semibold small">Nguyễn Văn A</div>
                <div className="text-muted" style={{ fontSize: "0.75rem" }}>Quản trị viên</div>
              </div>
            </a>
            <ul className="dropdown-menu dropdown-menu-end mt-2 shadow">
              <li>
                <button className="dropdown-item" onClick={handleProfileClick}>
                  <User className="me-2" size={16} /> Trang cá nhân
                </button>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li><button className="dropdown-item text-danger"><LogOut className="me-2" size={16} /> Đăng xuất</button></li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
}