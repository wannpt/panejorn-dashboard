FROM node:10.19.0

#Location of source code
ENV PROJECT_ROOT /opt/app
RUN mkdir -p $PROJECT_ROOT
WORKDIR $PROJECT_ROOT

#Install package
COPY ./panejorn-dashboard/package.json .
COPY ./panejorn-dashboard/yarn.lock .

#copy source file to build process
COPY ./panejorn-dashboard/tsconfig.json .
COPY ./panejorn-dashboard/public ./public
COPY ./panejorn-dashboard/src ./src

#install dependencies
RUN yarn --silence
RUN yarn add react-scripts -g --silence

EXPOSE 3000
#Build the app
CMD ["yarn", "start"]
