import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import User from './User';
import TableBody from '../components/TableBody';
import { Table } from 'grommet';

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

const columns = [
	{ label: 'id', weight: 'normal', align: 'start' },
	{ label: 'doctorLabel', weight: 'normal', align: 'center' },
	{ label: 'date', weight: 'bold', align: 'end' }
];

test('should render User page', () => {
	const { asFragment } = renderWithRouter(<User />);

	expect(asFragment()).toMatchSnapshot();
});

test('should logout on "sair" button clicked', () => {
	const { getByText, history } = renderWithRouter(
		<User history={{ push: jest.fn() }} />
	);
	getByText(/sair/i).click();

	expect(history.location.pathname).toEqual('/');
});

test('should render a empty list if has no schedules', () => {
	const { queryAllByTestId } = render(
		<Table>
			<TableBody data={[]} columns={columns} />
		</Table>
	);
	const rows = queryAllByTestId('table-body');
	expect(rows.length).toBe(0);
});

test('should render a list with 2 schedules', () => {
	const data = [
		{
			id: 1,
			doctor: 'Mayara Moreira de Deus / Otorrino',
			time: '10/05/19 - 07:00h'
		},
		{
			id: 2,
			doctor: 'Mayara Moreira de Deus / Otorrino',
			time: '15/05/19 - 07:00h'
		}
	];
	const { getAllByTestId } = render(
		<Table>
			<TableBody data={data} columns={columns} />
		</Table>
	);
	const rows = getAllByTestId('table-body');
	expect(rows.length).toBe(2);
});

test('should go to schedule page on "agendar" button clicked', () => {
	const { getByText, history } = renderWithRouter(<User />);
	getByText(/agendar/i).click();

	expect(history.location.pathname).toEqual('/user/schedule');
});
