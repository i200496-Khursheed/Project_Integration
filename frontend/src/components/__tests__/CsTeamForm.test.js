import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import CsTeamForm from '../CsTeamForm';
import '@testing-library/jest-dom'
import userEvent from "@testing-library/react";
import fireEvent from "@testing-library/react";

describe('My Testing Component for CsTeamForm', () => {
    
    // test 1 for rendering CsTeamForm content
    test('Test that should render CsTeamForm', () => {
    render(
        <Router>
        <CsTeamForm />
        </Router>
    );
    const check = screen.getByTestId("csForm1");
    expect(check).toBeInTheDocument();
    });

    // test 2 for checking Service Information text
    test('Test that should display Service Information text', () => {
    render(
        <Router>
        <CsTeamForm />
        </Router>
    );
    const check = screen.getByTestId("csForm2");
    expect(check).toHaveTextContent("Service Information");
    });

    // test 3 for checking Description text
    test('Test that should display Description text', () => {
    render(
        <Router>
        <CsTeamForm />
        </Router>
    );
    const check = screen.getByTestId("csForm3");
    expect(check).toHaveTextContent("Description");
    });

    // test 4 for rendering correct number of buttons
    test('Test that should render only 1 Add button', async () => {
    render(
        <Router>
        <CsTeamForm />
        </Router>
    );
    const check = await screen.findAllByRole("button");
    expect(check).toHaveLength(1);
    });

    // test 5 for checking Service Fee only accepts String text
    test('Test for Service Fee that should have type number', () => {
    render(
        <Router>
        <CsTeamForm />
        </Router>
    );
    const fee = screen.getByPlaceholderText("enter fee");
    expect(fee).toHaveAttribute("type", "number");
    });
});