import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender';
import { SideBar } from 'widgests/SideBar/ui/SideBar/SideBar';

describe('SideBar', () => {
    test('SideBAr test render', () => {
        componentRender(<SideBar />);
        expect(screen.getByTestId('sideBar')).toBeInTheDocument();
    });
    test('SideBAr test toggle', () => {
        componentRender(<SideBar />);
        const toogleBtn = screen.getByTestId('sideBar-toggle');
        expect(screen.getByTestId('sideBar')).toBeInTheDocument();
        fireEvent.click(toogleBtn);
        expect(screen.getByTestId('sideBar')).toHaveClass('collapsed');
    });
});
