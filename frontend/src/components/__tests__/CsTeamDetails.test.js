import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import CsTeamDetails from '../CsTeamDetails';
import '@testing-library/jest-dom'
import userEvent from "@testing-library/react";
import fireEvent from "@testing-library/react";

describe('My Testing Component for CsTeamDetails', () => {
    
    // test 1 for rendering CsTeamDetails content
    test('Test that should render CsTeamDetails', () => {
    render(
        <Router>
        <CsTeamDetails />
        </Router>
    );
    const check = screen.getByTestId("csDetails1");
    expect(check).toBeInTheDocument();
    });

    // test 2 for displaying correct number of buttons
    test('Test that should render only 2 buttons', async () => {
    render(
        <Router>
        <CsTeamDetails />
        </Router>
    );
    const check = await screen.findAllByRole("button");
    expect(check).toHaveLength(2);
    });

    // test 3 for checking update status box-field is displayed properly
    test('Test for update Status box-field that should be displayed', () => {
    render(
        <Router>
        <CsTeamDetails />
        </Router>
    );
    const status = screen.getByTestId("update");
    expect(status).toHaveTextContent("Update Status:");
    });

    // test 4 for checking update fee box-field is displayed properly
    test('Test for update Fee box-field that should be displayed', () => {
    render(
        <Router>
        <CsTeamDetails />
        </Router>
    );
    const fee = screen.getByTestId("fee");
    expect(fee).toHaveTextContent("Update Price:");
    });

    // test 5 for checking update Service Fee only accepts input as number
    test('Test for update Service Fee that should have type number', () => {
    render(
        <Router>
        <CsTeamDetails />
        </Router>
    );
    const fee = screen.getByPlaceholderText("edit fee");
    expect(fee).toHaveAttribute("type", "number");
    });

});