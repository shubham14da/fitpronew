FROM openjdk:11-jre-slim
WORKDIR usr/src
ADD ./target/product-webapp-0.0.1-SNAPSHOT.jar /usr/src/product-webapp-0.0.1-SNAPSHOT.jar
EXPOSE 8087
ENTRYPOINT ["java", "-jar", "product-webapp-0.0.1-SNAPSHOT.jar"]