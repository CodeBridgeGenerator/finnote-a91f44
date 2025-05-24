import AppSideBar from "./appSideBar/AppSideBar.js";

/*

import ProductsPage from "../ProductsPage/ProductsPage";
import AssetsPage from "../AssetsPage/AssetsPage";
import LiabilitiesPage from "../LiabilitiesPage/LiabilitiesPage";
import IncomesPage from "../IncomesPage/IncomesPage";
import ExpensesPage from "../ExpensesPage/ExpensesPage";
import RecurringExpensesPage from "../RecurringExpensesPage/RecurringExpensesPage";
import GroupsPage from "../GroupsPage/GroupsPage";
import GroupExpensesPage from "../GroupExpensesPage/GroupExpensesPage";
~cb-add-import~

~cb-add-services-card~

case "products":
                return <ProductsPage />;
case "assets":
                return <AssetsPage />;
case "liabilities":
                return <LiabilitiesPage />;
case "incomes":
                return <IncomesPage />;
case "expenses":
                return <ExpensesPage />;
case "recurringExpenses":
                return <RecurringExpensesPage />;
case "groups":
                return <GroupsPage />;
case "groupExpenses":
                return <GroupExpensesPage />;
~cb-add-thurthy~

*/

const AppLayout = (props) => {
  const { children, activeKey, activeDropdown } = props;

  return (
    <div className="flex min-h-[calc(100vh-5rem)] mt-20 bg-white">
      <AppSideBar activeKey={activeKey} activeDropdown={activeDropdown} />
      <div className="flex-1 ml-2">{children}</div>
    </div>
  );
};

export default AppLayout;
