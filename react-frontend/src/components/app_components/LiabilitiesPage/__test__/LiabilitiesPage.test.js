import React from "react";
import { render, screen } from "@testing-library/react";

import LiabilitiesPage from "../LiabilitiesPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders liabilities page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <LiabilitiesPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("liabilities-datatable")).toBeInTheDocument();
    expect(screen.getByRole("liabilities-add-button")).toBeInTheDocument();
});
