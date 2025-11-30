// src/components/user/UserTable.jsx
import { Eye, Edit, Trash2 } from "lucide-react";

const mockUsers = [
  {
    id: 1,
    username: "admin",
    ho_ten: "Nguyễn Văn A",
    email: "admin@university.edu.vn",
    vai_tro: "Admin",
    don_vi: "Phòng Quản lý thiết bị",
    trang_thai: "Hoạt động",
    ngay_tao: "2024-01-01",
  },
  {
    id: 2,
    username: "nvtb_001",
    ho_ten: "Trần Thị B",
    email: "tran.b@university.edu.vn",
    vai_tro: "Nhân viên thiết bị",
    don_vi: "Phòng Quản lý thiết bị",
    trang_thai: "Hoạt động",
    ngay_tao: "2024-02-15",
  },
  {
    id: 3,
    username: "tk_cntt",
    ho_ten: "Lê Văn C",
    email: "le.c@university.edu.vn",
    vai_tro: "Trưởng khoa",
    don_vi: "Khoa CNTT",
    trang_thai: "Hoạt động",
    ngay_tao: "2024-03-01",
  },
];

const roleColors = {
  "Admin": "badge-danger",
  "Nhân viên thiết bị": "badge-primary",
  "Trưởng khoa": "badge-warning",
  "Người dùng": "badge-secondary",
};

const statusColors = {
  "Hoạt động": "badge-success",
  "Tạm khóa": "badge-danger",
};

export default function UserTable() {
  const openDetail = (user) => {
    localStorage.setItem("selectedUser", JSON.stringify(user));
    window.dispatchEvent(new Event("openDetailUserModal"));
  };

  const openEdit = (user) => {
    localStorage.setItem("selectedUser", JSON.stringify(user));
    window.dispatchEvent(new Event("openEditUserModal"));
  };

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="mb-0">Danh sách người dùng</h5>
      </div>
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead>
              <tr>
                <th>Tên đăng nhập</th>
                <th>Họ tên</th>
                <th>Email</th>
                <th>Vai trò</th>
                <th>Đơn vị</th>
                <th>Trạng thái</th>
                <th className="text-end">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {mockUsers.map((user) => (
                <tr key={user.id}>
                  <td className="font-medium">{user.username}</td>
                  <td>{user.ho_ten}</td>
                  <td>{user.email}</td>
                  <td>
                    <span className={`badge ${roleColors[user.vai_tro]}`}>
                      {user.vai_tro}
                    </span>
                  </td>
                  <td>{user.don_vi}</td>
                  <td>
                    <span className={`badge ${statusColors[user.trang_thai]}`}>
                      {user.trang_thai}
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="d-flex justify-content-end gap-2">
                      <button className="btn btn-sm btn-link text-dark p-1" onClick={() => openDetail(user)} title="Xem chi tiết">
                        <Eye size={16} />
                      </button>
                      <button className="btn btn-sm btn-link text-dark p-1" onClick={() => openEdit(user)} title="Chỉnh sửa">
                        <Edit size={16} />
                      </button>
                      <button className="btn btn-sm btn-link text-danger p-1" title="Xóa">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}