import { ConfigSchema } from './../src/schema';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Эмуляция __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Путь к директории, в которой лежат файлы конфигураций
const configsDir = path.join(__dirname, '..', 'brand-config');
// Путь к базовой директории для host
const hostBaseDir = path.join(__dirname, '..', 'host');

// Читаем список файлов в директории brand-config
const configFiles = fs.readdirSync(configsDir);

// Перебираем каждый файл из директории
const run = async () => {
    for (const fileName of configFiles) {
        const configFilePath = path.join(configsDir, fileName);

        // Динамически импортируем модуль
        const moduleContent = await import(configFilePath);

        const config = moduleContent.config;
        if (!config) {
            console.warn(
                `Файл ${fileName} не содержит экспортированного поля config, пропускаем.`,
            );
            continue;
        }

        const validationResult = ConfigSchema.safeParse(config);
        if (!validationResult.success) {
            console.error(
                `Ошибка валидации в файле ${fileName}:`,
                validationResult.error.format(),
            );
            continue;
        }

        const { data, hostnames, version } = validationResult.data;
        const jsonData = { data, version };

        hostnames.forEach((subfolder) => {
            const destinationDir = path.join(hostBaseDir, subfolder);
            const destinationFilePath = path.join(
                destinationDir,
                'config.json',
            );

            if (!fs.existsSync(destinationDir)) {
                fs.mkdirSync(destinationDir, { recursive: true });
            }

            fs.writeFileSync(
                destinationFilePath,
                JSON.stringify(jsonData, null, 2),
            );
            console.log(
                `Файл конфигурации для ${fileName} создан по пути: ${destinationFilePath}`,
            );
        });
    }
};

run();
