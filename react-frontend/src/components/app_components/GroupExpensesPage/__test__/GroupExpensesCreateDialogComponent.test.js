import React from "react";
import { render, screen } from "@testing-library/react";

import GroupExpensesCreateDialogComponent from "../GroupExpensesCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders groupExpenses create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <GroupExpensesCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("groupExpenses-create-dialog-component")).toBeInTheDocument();
});
