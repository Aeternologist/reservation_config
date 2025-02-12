import { DUBAI, version } from '../brand-config/DUBAI';
import * as prettier from 'prettier';
import fs from 'fs';

const dubaiConfig = { data: DUBAI, version: version };

//Конфиг prettier и форматирование
export const writeFormattedText = (text: string, path: string) =>
    prettier
        .resolveConfig('./prettier.config.js')
        .then((config) => prettier.format(text, config as prettier.Options))
        .then((formattedText) =>
            fs.writeFileSync(path, formattedText, {
                encoding: 'utf-8',
            }),
        )
        .catch((error) => {
            console.log({
                message:
                    'prettier не смог отформатировать файл, возможно ошибка в синтаксисе или в конфиге prettier.config.js, убедитесь, что выставлены валидные настройки и parser',
                error,
            });
            fs.writeFileSync(path, text, {
                encoding: 'utf-8',
            });
        });

//Запись деклараций типов в файл
const writePathTypesDeclares = () => {
    writeFormattedText(JSON.stringify(dubaiConfig), 'host/feature.json');
};

writePathTypesDeclares();
