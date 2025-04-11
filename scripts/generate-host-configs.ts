import fs from 'fs';
import path from 'path';
import { ConfigSchema } from '../src/schema';

// Путь к директории, в которой лежат файлы конфигураций
const configsDir = path.join(__dirname, '..', 'brand-config');
// Путь к базовой директории для host
const hostBaseDir = path.join(__dirname, '..', 'host');

// Читаем список файлов в директории brand-config
const configFiles = fs.readdirSync(configsDir);

// Перебираем каждый файл из директории
configFiles.forEach((fileName) => {
    // При необходимости, пропускаем файлы, которые не являются конфигурационными
    if (fileName === 'schema.ts' || fileName === 'schema.js') {
        return;
    }

    // Формируем путь к файлу
    const configFilePath = path.join(configsDir, fileName);

    // Динамически импортируем (или require) конфигурацию
    // Если используется CommonJS, можно использовать require, иначе - динамический import
    // Здесь показан вариант с require
    const moduleContent = require(configFilePath);

    // Предполагаем, что конфигурация экспортируется как { config }
    const config = moduleContent.config;
    if (!config) {
        console.warn(
            `Файл ${fileName} не содержит экспортированного поля config, пропускаем.`,
        );
        return;
    }

    // Валидация конфигурации с помощью схемы
    const validationResult = ConfigSchema.safeParse(config);
    if (!validationResult.success) {
        console.error(
            `Ошибка валидации в файле ${fileName}:`,
            validationResult.error,
        );
        return;
    }

    // Извлекаем необходимые данные
    const { data, hostname: subfolder, version } = validationResult.data;
    const jsonData = { data, version };

    // Формируем путь к директории для записи файла (поддиректория host соответствует subfolder)
    const destinationDir = path.join(hostBaseDir, subfolder);
    const destinationFilePath = path.join(destinationDir, 'config.json');

    // Создаём директорию, если она не существует
    if (!fs.existsSync(destinationDir)) {
        fs.mkdirSync(destinationDir, { recursive: true });
    }

    // Записываем JSON в файл с форматированием
    const jsonString = JSON.stringify(jsonData, null, 2);
    fs.writeFileSync(destinationFilePath, jsonString);

    console.log(
        `Файл конфигурации для ${fileName} создан по пути: ${destinationFilePath}`,
    );
});
