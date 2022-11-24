import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar';
import '@testing-library/jest-dom'

describe('My Testing Component for Navbar', () => {
    
    // test 1 for rendering Navbar content
    test('Test that should render Navbar', () => {
    render(
        <Router>
        <Navbar />
        </Router>
    );
    const check = screen.getByTestId("nav1");
    expect(check).toBeInTheDocument();
    });

    // test 2 that should display Buy2Rent.com
    test('Test that should display Buy2Rent.com', () => {
        render(
            <Router>
            <Navbar />
            </Router>
        );
        const check = screen.getByTestId("nav1");
        expect(check).toHaveTextContent("Buy2Rent.com");
        });

    // test 3 that should display Homepage
    test('Test that should display Homepage', () => {
        render(
            <Router>
            <Navbar />
            </Router>
        );
        const check = screen.getByTestId("nav2");
        expect(check).toHaveTextContent("Homepage");
        });

    // test 4 that should display Construction Team Page
    test('Test that should display Construction Team Page', () => {
        render(
            <Router>
            <Navbar />
            </Router>
        );
        const check = screen.getByTestId("nav2");
        expect(check).toHaveTextContent("Construction Team Page");
        });

});