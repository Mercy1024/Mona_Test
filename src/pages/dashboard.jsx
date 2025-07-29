import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedChart from "../components/animatedChart";
import dash from "../assets/Category.png";
import logo from "../assets/Logo.svg";
import products from "../assets/Chart.png";
import orders from "../assets/Ticket.png";
import payout from "../assets/Document.png";
import reff from "../assets/Calendar.png";
import help_center from "../assets/Activity.png";
import notification from "../assets/Notification.png";
import settings from "../assets/Setting.png";
import upgrade from "../assets/Illustration.png";
import avatar from "../assets/avatar.png";
import { Pointer } from "lucide-react";
const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#f8fafc",
    fontFamily: "'Nunito', sans-serif",
  },

  sidebar: {
    width: "280px",
    backgroundColor: "white",
    borderRight: "none",
    transition: "all 0.3s ease",
    position: "fixed",
    minHeight: "100vh",
    zIndex: 1000,
    transform: "translateX(-100%)",
  },

  sidebarOpen: {
    transform: "translateX(0)",
  },

  sidebarDesktop: {
    position: "relative",
    transform: "translateX(0)",
  },

  sidebarContent: {
    padding: "24px",
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "32px",
    color: "#c4a574",
    cursor: "pointer",
  },

  logoIcon: {
    width: "32px",
    height: "32px",
    background: "linear-gradient(135deg, #c4a574, #a68b5b)",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
  },

  logoText: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#a68b5b",
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },

  navItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: "transparent",
    color: "#64748b",
    transition: "all 0.2s ease",
    border: "none",
    width: "100%",
    textAlign: "left",
  },

  navItemActive: {
    backgroundColor: "#f1f5f9",
    color: "#c4a574",
  },

  navItemText: {
    fontSize: "14px",
    fontWeight: "500",
  },

  badge: {
    backgroundColor: "#ef4444",
    color: "white",
    fontSize: "12px",
    padding: "2px 6px",
    borderRadius: "12px",
    marginLeft: "auto",
  },

  upgradeSection: {
    position: "absolute",
    bottom: "24px",
    left: "24px",
    right: "24px",
  },

  upgradeCard: {
    width: "100%",
  },

  userProfile: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginTop: "16px",
    padding: "8px 0",
  },

  userAvatar: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    backgroundColor: "#e2e8f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  userName: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#1e293b",
  },

  userPackage: {
    fontSize: "12px",
    color: "#64748b",
  },

  mainContent: {
    flex: 1,
    minWidth: 0,
  },

  mainContentDesktop: {
    marginLeft: "0px",
  },

  header: {
    backgroundColor: "white",
    borderBottom: "none",
    padding: "16px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "16px",
  },

  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },

  menuButton: {
    background: "none",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
    padding: "4px",
  },

  closeButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "4px",
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "#64748b",
    fontSize: "18px",
  },

  title: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#1e293b",
    margin: 0,
  },

  headerRight: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    flexWrap: "wrap",
  },

  searchContainer: {
    position: "relative",
  },

  searchInput: {
    padding: "8px 12px 8px 40px",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
    fontSize: "14px",
    width: "280px",
    outline: "none",
    maxWidth: "100%",
  },

  searchIcon: {
    position: "absolute",
    left: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#64748b",
  },

  notificationIcon: {
    position: "relative",
  },

  notificationDot: {
    position: "absolute",
    top: "-4px",
    right: "-4px",
    width: "8px",
    height: "8px",
    backgroundColor: "#ef4444",
    borderRadius: "50%",
  },

  userMenu: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
  },

  userMenuAvatar: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    backgroundColor: "#c4a574",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "14px",
    fontWeight: "500",
  },

  userMenuText: {
    fontSize: "14px",
    fontWeight: "500",
  },

  userMenuSubtext: {
    fontSize: "12px",
    color: "#64748b",
  },

  main: {
    padding: "24px",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "32px",
  },

  statsCard: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },

  statsCardContent: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },

  statsIcon: {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
  },

  statsValue: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "4px",
  },

  statsLabel: {
    fontSize: "14px",
    color: "#64748b",
  },

  dashboardGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "24px",
    marginBottom: "32px",
  },

  dashboardGridDesktop: {
    gridTemplateColumns: "2fr 1fr",
  },

  card: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
    flexWrap: "wrap",
    gap: "16px",
  },

  cardTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#1e293b",
    margin: 0,
  },

  viewAllButton: {
    background: "none",
    border: "none",
    color: "#c4a574",
    fontSize: "12px",
    cursor: "pointer",
  },

  tabButtons: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },

  tabButton: {
    padding: "6px 12px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "transparent",
    color: "#64748b",
    fontSize: "12px",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },

  tabButtonActive: {
    backgroundColor: "#c4a574",
    color: "white",
  },

  chartContainer: {
    height: "300px",
    position: "relative",
    backgroundColor: "#f8fafc",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  productList: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  productItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  productIcon: {
    width: "40px",
    height: "40px",
    backgroundColor: "#3b82f6",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    flexShrink: 0,
  },

  productInfo: {
    flex: 1,
    minWidth: 0,
  },

  productName: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#1e293b",
    marginBottom: "2px",
  },

  productRating: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },

  productStats: {
    textAlign: "right",
    flexShrink: 0,
  },

  productCode: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#1e293b",
  },

  productSold: {
    fontSize: "12px",
  },

  productStock: {
    fontSize: "12px",
  },

  tableContainer: {
    overflowX: "auto",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "800px",
  },

  tableHeader: {
    borderBottom: "1px solid #e2e8f0",
  },

  tableHeaderCell: {
    padding: "12px 8px",
    textAlign: "left",
    fontSize: "12px",
    fontWeight: "500",
    color: "#64748b",
    whiteSpace: "nowrap",
  },

  tableRow: {
    borderBottom: "1px solid #f1f5f9",
  },

  tableCell: {
    padding: "16px 8px",
    fontSize: "14px",
    color: "#1e293b",
    whiteSpace: "nowrap",
  },

  productCell: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  productCellIcon: {
    width: "24px",
    height: "24px",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    flexShrink: 0,
  },

  statusBadge: {
    padding: "4px 8px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "500",
  },

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
  },

  // Mobile-specific styles
  mobile: {
    statsGrid: {
      gridTemplateColumns: "1fr",
      gap: "20px",
    },

    statsCard: {
      padding: "16px",
      margin: "20px",
    },

    main: {
      padding: "16px",
    },

    header: {
      padding: "16px",
    },

    searchInput: {
      width: "200px",
    },

    tabButtons: {
      width: "100%",
      justifyContent: "center",
    },

    cardHeader: {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "12px",
    },
  },
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Monthly");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const statsData = [
    {
      icon: "🍔",
      value: "178+",
      label: "Purchased Products",
      bgColor: "#f5f1e8",
    },
    {
      icon: "💰",
      value: "N9,780,000",
      label: "Total Payout",
      bgColor: "#f0f4f8",
    },
    {
      icon: "📥",
      value: "190+",
      label: "Save Products",
      bgColor: "#f0f8f4",
    },
    {
      icon: "✨",
      value: "18+",
      label: "Total Points",
      bgColor: "#fef7e0",
    },
  ];

  const topProducts = [
    {
      name: "NIKE Shoes Black Pattern",
      code: "NGN87",
      sold: 33,
      stock: 83,
      rating: 5,
    },
    {
      name: "NIKE Shoes Black Pattern",
      code: "NGN87",
      sold: 12,
      stock: 0,
      rating: 5,
    },
    {
      name: "NIKE Shoes Black Pattern",
      code: "NGN87",
      sold: 44,
      stock: 83,
      rating: 5,
    },
    {
      name: "NIKE Shoes Black Pattern",
      code: "NGN87",
      sold: 18,
      stock: 18,
      rating: 5,
    },
    {
      name: "NIKE Shoes Black Pattern",
      code: "NGN87",
      sold: 5,
      stock: 83,
      rating: 5,
    },
  ];

  const recentOrders = [
    {
      id: 1,
      product: "Camera Lens",
      orderId: "#876364",
      price: "NGN178",
      totalOrder: 325,
      totalAmount: "NGN1,46,660",
      date: "17-01-2024",
      status: "Delivered",
      icon: "📷",
      color: "#e91e63",
    },
    {
      id: 2,
      product: "Black Sleep Dress",
      orderId: "#876368",
      price: "NGN14",
      totalOrder: 53,
      totalAmount: "NGN46,660",
      date: "17-01-2024",
      status: "Pending",
      icon: "👗",
      color: "#333",
    },
    {
      id: 3,
      product: "Argan Oil",
      orderId: "#876412",
      price: "NGN21",
      totalOrder: 78,
      totalAmount: "NGN3,46,676",
      date: "17-01-2024",
      status: "Delivered",
      icon: "🧴",
      color: "#8bc34a",
    },
    {
      id: 4,
      product: "EAU DE Parfum",
      orderId: "#876621",
      price: "NGN32",
      totalOrder: 98,
      totalAmount: "NGN3,46,981",
      date: "17-01-2024",
      status: "Cancelled",
      icon: "🧴",
      color: "#ff9800",
    },
  ];

  const sidebarItems = [
    { icon: dash, label: "Dashboard", active: true },
    { icon: products, label: "Products" },
    { icon: orders, label: "Orders" },
    { icon: payout, label: "Payouts" },
    { icon: reff, label: "Referrals" },
    { icon: help_center, label: "Help Center" },
    { icon: notification, label: "Notification", badge: "49" },
    { icon: settings, label: "Settings" },
  ];

  const getStatusStyle = (status) => {
    const baseStyle = { ...styles.statusBadge };

    switch (status) {
      case "Delivered":
        return {
          ...baseStyle,
          backgroundColor: "#dcfce7",
          color: "#166534",
        };
      case "Pending":
        return {
          ...baseStyle,
          backgroundColor: "#fef3c7",
          color: "#92400e",
        };
      case "Cancelled":
        return {
          ...baseStyle,
          backgroundColor: "#fee2e2",
          color: "#991b1b",
        };
      default:
        return baseStyle;
    }
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div
        style={{
          ...styles.sidebar,
          ...(sidebarOpen && styles.sidebarOpen),
          ...(!isMobile && styles.sidebarDesktop),
        }}
      >
        <div style={styles.sidebarContent}>
          {isMobile && (
            <button
              onClick={() => setSidebarOpen(false)}
              style={styles.closeButton}
            >
              ✕
            </button>
          )}

          <div onClick={() => navigate("/")} style={styles.logo}>
            <img src={logo} alt="logo" />
          </div>

          <nav style={styles.nav}>
            {sidebarItems.map((item, index) => (
              <button
                key={index}
                style={{
                  ...styles.navItem,
                  ...(item.active && styles.navItemActive),
                }}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  style={{ width: "20px", height: "20px" }}
                />

                <span style={styles.navItemText}>{item.label}</span>
                {item.badge && <span style={styles.badge}>{item.badge}</span>}
              </button>
            ))}
          </nav>
        </div>

        {/* Upgrade Section */}
        <div style={styles.upgradeSection}>
          <div style={styles.upgradeCard}>
            <img
              style={{ width: "100%", maxWidth: "200px" }}
              src={upgrade}
              alt="upgrade"
            />
          </div>

          <div style={styles.userProfile}>
            <div style={styles.userAvatar}>👤</div>
            <div>
              <div style={styles.userName}>Nyene Uduak</div>
              <div style={styles.userPackage}>Student Package</div>
            </div>
            <span
              style={{ fontSize: "16px", marginLeft: "auto", color: "#64748b" }}
            >
              ⌄
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          ...styles.mainContent,
          ...(!isMobile && styles.mainContentDesktop),
        }}
      >
        {/* Header */}
        <header
          style={
            isMobile
              ? { ...styles.header, ...styles.mobile.header }
              : styles.header
          }
        >
          <div style={styles.headerLeft}>
            {isMobile && (
              <button
                onClick={() => setSidebarOpen(true)}
                style={styles.menuButton}
              >
                ☰
              </button>
            )}
            <h1 style={styles.title}>Dashboard</h1>
          </div>

          <div style={styles.headerRight}>
            {!isMobile && (
              <div style={styles.searchContainer}>
                <span style={{ ...styles.searchIcon, fontSize: "16px" }}>
                  🔍
                </span>
                <input
                  type="text"
                  placeholder="Search something here"
                  style={
                    isMobile
                      ? { ...styles.searchInput, ...styles.mobile.searchInput }
                      : styles.searchInput
                  }
                />
              </div>
            )}

            <div style={styles.notificationIcon}>
              <span
                style={{
                  color: "#64748b",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
              >
                🔔
              </span>
              <span style={styles.notificationDot} />
            </div>

            <div style={styles.userMenu}>
              <div style={styles.userMenuAvatar}>
                <img style={{ maxWidth: "30px" }} src={avatar} alt="avatar" />
              </div>
              {!isMobile && (
                <div>
                  <div style={styles.userMenuText}>Nyene Uduak K.</div>
                  <div style={styles.userMenuSubtext}>Student Package</div>
                </div>
              )}
              <span style={{ fontSize: "16px", color: "#64748b" }}>⌄</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main style={isMobile ? styles.mobile.main : styles.main}>
          {/* Stats Cards */}
          <div style={isMobile ? styles.mobile.statsGrid : styles.statsGrid}>
            {statsData.map((stat, index) => (
              <div
                key={index}
                style={
                  isMobile
                    ? { ...styles.statsCard, ...styles.mobile.statsCard }
                    : styles.statsCard
                }
              >
                <div style={styles.statsCardContent}>
                  <div
                    style={{
                      ...styles.statsIcon,
                      backgroundColor: stat.bgColor,
                    }}
                  >
                    {stat.icon}
                  </div>
                  <div>
                    <div style={styles.statsValue}>{stat.value}</div>
                    <div style={styles.statsLabel}>{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              ...styles.dashboardGrid,
              ...(!isMobile && !isTablet && styles.dashboardGridDesktop),
            }}
          >
            {/* Purchase Report Chart */}
            <div style={styles.card}>
              <div
                style={
                  isMobile
                    ? { ...styles.cardHeader, ...styles.mobile.cardHeader }
                    : styles.cardHeader
                }
              >
                <h3 style={styles.cardTitle}>Purchase Report</h3>
                <div
                  style={
                    isMobile
                      ? { ...styles.tabButtons, ...styles.mobile.tabButtons }
                      : styles.tabButtons
                  }
                >
                  {["Today", "Weekly", "Monthly", "Yearly"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      style={{
                        ...styles.tabButton,
                        ...(activeTab === tab && styles.tabButtonActive),
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chart Area */}
              <AnimatedChart />
            </div>

            {/* Top Selling Products */}
            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <h3 style={styles.cardTitle}>Top Selling Products</h3>
                <button style={styles.viewAllButton}>view all</button>
              </div>

              <div style={styles.productList}>
                {topProducts.map((product, index) => (
                  <div key={index} style={styles.productItem}>
                    <div style={styles.productIcon}>👟</div>
                    <div style={styles.productInfo}>
                      <div style={styles.productName}>{product.name}</div>
                      <div style={styles.productRating}>
                        {[...Array(product.rating)].map((_, i) => (
                          <span
                            key={i}
                            style={{ color: "#fbbf24", fontSize: "12px" }}
                          >
                            ⭐
                          </span>
                        ))}
                      </div>
                    </div>
                    <div style={styles.productStats}>
                      <div style={styles.productCode}>{product.code}</div>
                      <div
                        style={{
                          ...styles.productSold,
                          color: product.stock === 0 ? "#ef4444" : "#22c55e",
                        }}
                      >
                        {product.sold} sold
                      </div>
                      <div
                        style={{
                          ...styles.productStock,
                          color: product.stock === 0 ? "#ef4444" : "#22c55e",
                        }}
                      >
                        {product.stock === 0
                          ? "Out of stock"
                          : `${product.stock} in stock`}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h3 style={styles.cardTitle}>Recent Orders</h3>
              <button style={styles.viewAllButton}>view all</button>
            </div>

            <div style={styles.tableContainer}>
              <table style={styles.table}>
                <thead style={styles.tableHeader}>
                  <tr>
                    <th style={styles.tableHeaderCell}>
                      <input type="checkbox" />
                    </th>
                    <th style={styles.tableHeaderCell}>SN</th>
                    <th style={styles.tableHeaderCell}>Product Name</th>
                    <th style={styles.tableHeaderCell}>Order ID</th>
                    <th style={styles.tableHeaderCell}>Price</th>
                    <th style={styles.tableHeaderCell}>Total Order</th>
                    <th style={styles.tableHeaderCell}>Total Amount</th>
                    <th style={styles.tableHeaderCell}>Date</th>
                    <th style={styles.tableHeaderCell}>Status</th>
                    <th style={styles.tableHeaderCell}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} style={styles.tableRow}>
                      <td style={styles.tableCell}>
                        <input type="checkbox" />
                      </td>
                      <td style={styles.tableCell}>{order.id}</td>
                      <td style={styles.tableCell}>
                        <div style={styles.productCell}>
                          <div
                            style={{
                              ...styles.productCellIcon,
                              backgroundColor: order.color,
                            }}
                          >
                            {order.icon}
                          </div>
                          <span>{order.product}</span>
                        </div>
                      </td>
                      <td style={styles.tableCell}>{order.orderId}</td>
                      <td style={styles.tableCell}>{order.price}</td>
                      <td
                        style={{
                          ...styles.tableCell,
                          color: "#c4a574",
                          fontWeight: "500",
                        }}
                      >
                        {order.totalOrder}
                      </td>
                      <td style={styles.tableCell}>{order.totalAmount}</td>
                      <td style={styles.tableCell}>{order.date}</td>
                      <td style={styles.tableCell}>
                        <span style={getStatusStyle(order.status)}>
                          {order.status === "Delivered" && "● "} {order.status}
                        </span>
                      </td>
                      <td style={styles.tableCell}>
                        <span
                          style={{
                            color: "#64748b",
                            cursor: "pointer",
                            fontSize: "16px",
                          }}
                        >
                          ⋯
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && isMobile && (
        <div style={styles.overlay} onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  );
};

export default Dashboard;
