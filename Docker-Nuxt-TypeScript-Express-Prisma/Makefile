# docker-composeコマンド
up:
	docker-compose up -d
build:
	docker-compose up -d --build
down:
	docker-compose down
restart:
	docker-compose down
	docker-compose up -d --build

# nuxtの導入(ファイルの追記あり)
nuxt:
	npx create-nuxt-app frontend
	cp .env.example .env
	docker-compose up -d --build
	docker-compose exec front npm install --save @nuxtjs/proxy @nuxtjs/dotenv
	docker-compose exec front touch .env

# prismaのマイグレーションとGUIの実行
migrate:
	docker-compose exec app npm run prisma:migrate
	docker-compose exec app npm run prisma:db

# typescriptの導入(ファイルの追記あり)
typescript:
	docker-compose exec front npm install --save-dev @nuxt/types
	docker-compose exec front touch shims-vue.d.ts

# composition-apiの導入(ファイルの追記あり)
composition-api:
	docker-compose exec front npm install @nuxtjs/composition-api --save

# storybookの起動
storybook:
	docker-compose exec front npx sb init
	docker-compose exec front npm run storybook

# storybookの再起動
re-storybook:
	docker-compose exec front npm run storybook