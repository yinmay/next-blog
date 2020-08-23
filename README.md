# next-blog

This is a blog with next.js, typescript, cypress (test framework), TypeORM

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### add typescript

- `tsc --init`
- `yarn add --dev typescript @types/react @types/react-dom @types/node`
- change suffix from js to tsx

### check docker’s container on process

- docker ps and get ID

### delete process

- kill the container`docker kill +ID`
- delete docker continer`docker rm +ID`
- delete the database folder`rm -rf blog-data`

### use docker to open postsql and create three databases

- `docker run -v "$PWD/blog-data":/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres:12.2`
- check docker status `docker ps`
- get into docker `docker exec -it +容器id +bash`
- get into database `psql -U blog`
- connect the blog_development database `\c blog_development`
- list blog database `\l blog`
- connect database `\c`
- display tables `\dt`
- check the table `\d posts`
- delete table `drop database +tableName`
- create database `CREATE DATABASE blog_development ENCODING 'UTF8' LC_COLLATE 'en_US.utf8' LC_CTYPE 'en_US.utf8';`

### create User table

- `typeorm migration:create -n CreateUsers`
- `yarn m:run`
- create fake data `node dist/seed.js`
