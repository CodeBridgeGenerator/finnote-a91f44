import React from "react";
import { render, screen } from "@testing-library/react";

import LiabilitiesCreateDialogComponent from "../LiabilitiesCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders liabilities create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <LiabilitiesCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("liabilities-create-dialog-component")).toBeInTheDocument();
});
