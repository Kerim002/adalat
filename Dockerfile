FROM node:20-alpine

# Установить рабочую директорию
WORKDIR /app

# Копировать package.json и package-lock.json
COPY package*.json ./

# Установить зависимости
RUN npm install

# Копировать весь код приложения
COPY . .

# Указать порт, который будет использоваться
EXPOSE 4000

# Команда для запуска приложения
CMD ["npm", "run", "dev"]
