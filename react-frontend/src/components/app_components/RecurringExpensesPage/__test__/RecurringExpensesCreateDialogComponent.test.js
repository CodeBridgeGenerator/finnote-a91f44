import React from "react";
import { render, screen } from "@testing-library/react";

import RecurringExpensesCreateDialogComponent from "../RecurringExpensesCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders recurringExpenses create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <RecurringExpensesCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("recurringExpenses-create-dialog-component")).toBeInTheDocument();
});
