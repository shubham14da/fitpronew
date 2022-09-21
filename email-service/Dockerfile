FROM openjdk:11-jre-slim
WORKDIR usr/src
EXPOSE 8088
ADD ./target/email-service-0.0.1-SNAPSHOT.jar /usr/src/email-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "email-service-0.0.1-SNAPSHOT.jar"]