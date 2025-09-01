import chalk from 'chalk';
import { execSync } from 'child_process';
import figlet from 'figlet';

/**
 * Realiza configurações iniciais para padronização de projetos.
 */

/**
 * Extensões recomendadas para o projeto que serão instaladas.
 */
const extensions = [
	{ id: 'angular.ng-template', label: 'Angular Language Service' },
	{ id: 'johnpapa.angular2', label: 'Angular Snippets (Version 18)' },
	{ id: 'dbaeumer.vscode-eslint', label: 'ESLint' },
	{ id: 'esbenp.prettier-vscode', label: 'Prettier - Code formatter' },
	{ id: 'pkief.material-icon-theme', label: 'Material Icon Theme' },
	{ id: 'github.copilot', label: 'GitHub Copilot' },
	{ id: 'github.copilot-chat', label: 'GitHub Copilot Chat' },
	{ id: 'steoates.autoimport', label: 'Auto Import' }
];

/**
 * Executa o comando de terminal e exibe logs indicando
 * se a execução foi bem-sucedida ou falhou.
 *
 * @param command - O comando CLI a ser executado.
 * @param description - Texto descritivo da ação para exibir no terminal.
 */
function executeCommandWithLogs(command, description) {
	console.log(`\n- ${description}`);
	try {
		execSync(command, { stdio: 'inherit' });
		console.log(chalk.green(`✔️  Sucesso: ${description}`));
	} catch (err) {
		console.error(chalk.red(`⚠️  Falhou: ${description}`));
	}
}

function main() {
	// Banner de apresentação.
	console.log(chalk.cyan(figlet.textSync('MVM Setup', { horizontalLayout: 'full' })));

	// Instala as extensões recomendadas.
	extensions.forEach((extension) =>
		executeCommandWithLogs(
			`code --install-extension ${extension.id}`,
			`Instalando extensão: ${extension.label}`
		)
	);

	// Adiciona no package.json as dependencias necessárias do ESLint.
	executeCommandWithLogs(
		'npx ng add @angular-eslint/schematics --skip-confirmation',
		'Adicionando @angular-eslint/schematics'
	);

	// Executa o ESLint em todos os arquivos .ts dentro do projeto mvm, verificando se seguem as
	// regras definidas no .eslintrc.json do projeto.
	executeCommandWithLogs('npx eslint "src/**/*.ts"', 'Rodando ESLint na lib MVM');

	console.log('\n✅ Configuração MVM aplicada com sucesso!\n');
}

main();
