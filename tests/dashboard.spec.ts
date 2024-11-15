import { test, expect } from '@playwright/test';

test.describe('Dashboard Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3001');
    });

    test('should render the SearchBar component', async ({ page }) => {
        const searchBarPlaceholder = 'Digite um CPF válido';

        // Verifica se o campo de pesquisa está presente
        await expect(page.locator(`input[placeholder="${searchBarPlaceholder}"]`)).toBeVisible();
    });

    test('should render columns with titles', async ({ page }) => {
        const columnTitles = ['Pronto para revisar', 'Aprovado', 'Reprovado'];

        for (const title of columnTitles) {
            await expect(page.locator(`text=${title}`)).toBeVisible();
        }
    });

    test('should navigate to New Admission Page on button click', async ({ page }) => {
        await page.goto('/');
        const newAdmissionButton = page.locator('text=Nova Admissão');
        await newAdmissionButton.click();
        await page.waitForURL(/\/#\/new-user$/, { timeout: 10000 });
        expect(page.url()).toMatch(/\/#\/new-user$/);
    });

});
