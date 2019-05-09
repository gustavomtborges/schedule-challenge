import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Signup from './Signup';
import FormSignupUser from '../components/Signup/FormSignupUser';
import FormSignupDoctor from '../components/Signup/FormSignupDoctor';

afterEach(cleanup);

function renderWithRouter(
	ui,
	{
		route = '/',
		history = createMemoryHistory({ initialEntries: [route] })
	} = {}
) {
	return {
		...render(<Router history={history}>{ui}</Router>),
		// adding `history` to the returned utilities to allow us
		// to reference it in our tests (just try to avoid using
		// this to test implementation details).
		history
	};
}

test('should render Signup page', () => {
	const { asFragment } = renderWithRouter(<Signup />);

	expect(asFragment()).toMatchSnapshot();
});

test('signup user form must contain name, email and password fields', () => {
	const { getByLabelText } = renderWithRouter(<Signup />);
	const name = getByLabelText('Nome');
	const email = getByLabelText('E-mail');
	const password = getByLabelText('Senha');

	expect(name).toBeDefined();
	expect(email).toBeDefined();
	expect(password).toBeDefined();
});

test('onSubmit must be called with name, email and password filled', () => {
	const handleSubmit = jest.fn();
	const { getByLabelText, getByText } = renderWithRouter(
		<FormSignupUser handleSubmit={handleSubmit} />
	);
	const nameInput = getByLabelText('Nome');
	const emailInput = getByLabelText('E-mail');
	const passwordInput = getByLabelText('Senha');
	fireEvent.change(nameInput, { target: { value: 'John Doe' } });
	fireEvent.change(emailInput, { target: { value: 'john@doe.com' } });
	fireEvent.change(passwordInput, { target: { value: '123' } });
	getByText(/salvar/i).click();

	expect(handleSubmit).toHaveBeenCalledTimes(1);
});

test('should go to login page on "cancelar" button clicked', () => {
	const { getByText, history } = renderWithRouter(<Signup />);
	getByText(/cancelar/i).click();

	expect(history.location.pathname).toEqual('/');
});
