import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';
import { SideBar } from 'widgests/SideBar/ui/SideBar/SideBar';

describe('SideBar', () => {
    test('SideBAr test render', () => {
        renderWithTranslation(<SideBar />);
        expect(screen.getByTestId('sideBar')).toBeInTheDocument();
    });
    test('SideBAr test toggle', () => {
        renderWithTranslation(<SideBar />);
        const toogleBtn = screen.getByTestId('sideBar-toggle');
        expect(screen.getByTestId('sideBar')).toBeInTheDocument();
        fireEvent.click(toogleBtn);
        expect(screen.getByTestId('sideBar')).toHaveClass('collapsed');
    });
});
