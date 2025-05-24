import React from "react";
import { render, screen } from "@testing-library/react";

import AssetsPage from "../AssetsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders assets page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AssetsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("assets-datatable")).toBeInTheDocument();
    expect(screen.getByRole("assets-add-button")).toBeInTheDocument();
});
