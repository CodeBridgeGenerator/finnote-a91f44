import React from "react";
import { render, screen } from "@testing-library/react";

import RecurringExpensesPage from "../RecurringExpensesPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders recurringExpenses page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <RecurringExpensesPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("recurringExpenses-datatable")).toBeInTheDocument();
    expect(screen.getByRole("recurringExpenses-add-button")).toBeInTheDocument();
});
