import React from "react";
import { render, screen } from "@testing-library/react";

import GroupExpensesEditDialogComponent from "../GroupExpensesEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders groupExpenses edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <GroupExpensesEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("groupExpenses-edit-dialog-component")).toBeInTheDocument();
});
