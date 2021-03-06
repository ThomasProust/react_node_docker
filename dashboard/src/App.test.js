import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import App from './App';
import axiosMock from 'axios';
import { act } from 'react-dom/test-utils';
jest.mock('axios');

describe('App', () => {
    let container = null;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it('renders without error', async () => {
        axiosMock.get.mockResolvedValueOnce({
            status: 200,
            data: [],
        });

        await act(async () => {
            render(<App />, container);
        });
        expect(container.childNodes.length).toBe(2);
    });
});
