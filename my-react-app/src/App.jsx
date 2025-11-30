// src/App.jsx
import { Routes, Route, Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

// Import các trang của bạn
import DashboardPage from "./pages/DashboardPage.jsx";
import EquipmentPage from "./pages/EquipmentPage.jsx";
import BatchPage from "./pages/BatchPage.jsx";
import InventoryPage from "./pages/InventoryPage.jsx";
import DisposalPage from "./pages/DisposalPage.jsx";
import ProcurementPage from "./pages/ProcurementPage.jsx";
import UsersPage from "./pages/UserPage.jsx";
import ReportsPage from "./pages/ReportsPage.jsx";
import ProfilePage from "./pages/ProfilePage";

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    // Thay h-100 vh-100 → chỉ cần h-100 + thêm flex-column
    <div className="d-flex h-100">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

      {/* Main content area */}
      <div className="d-flex flex-column flex-grow-1 min-width-0"> {/* thêm min-width-0 chống tràn */}
        <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} isSidebarOpen={sidebarOpen} />
        
        {/* Nội dung chính - scroll độc lập */}
        <main className="flex-grow-1 overflow-auto bg-light">
          <div className="container-fluid px-4 py-4">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path="equipment" element={<EquipmentPage />} />
        <Route path="batch" element={<BatchPage />} />
        <Route path="inventory" element={<InventoryPage />} />
        <Route path="disposal" element={<DisposalPage />} />
        <Route path="procurement" element={<ProcurementPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<div className="p-5"><h1>404 - Không tìm thấy</h1></div>} />
      </Route>
    </Routes>
  );
}