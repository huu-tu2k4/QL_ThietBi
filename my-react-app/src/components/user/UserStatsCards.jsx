import { Users, UserCheck } from "lucide-react";

export default function UserStatsCards() {
  return (
    <div className="row g-4 mb-4">
      <div className="col-12 col-md-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h6 className="text-muted mb-0">Tổng người dùng</h6>
              <Users size={20} className="text-primary" />
            </div>
            <h2 className="mb-0">45</h2>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h6 className="text-muted mb-0">Đang hoạt động</h6>
              <UserCheck size={20} style={{ color: "#10b981" }} />
            </div>
            <h2 className="mb-0">42</h2>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h6 className="text-muted mb-0">Admin</h6>
              <Users size={20} style={{ color: "#dc2626" }} />
            </div>
            <h2 className="mb-0">3</h2>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h6 className="text-muted mb-0">Người dùng thường</h6>
              <Users size={20} className="text-primary" />
            </div>
            <h2 className="mb-0">35</h2>
          </div>
        </div>
      </div>
    </div>
  );
}