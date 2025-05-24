import React from "react";
import { render, screen } from "@testing-library/react";

import GroupExpensesPage from "../GroupExpensesPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders groupExpenses page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <GroupExpensesPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("groupExpenses-datatable")).toBeInTheDocument();
    expect(screen.getByRole("groupExpenses-add-button")).toBeInTheDocument();
});
