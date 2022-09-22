FROM openjdk:11-jre-slim
WORKDIR usr/src
EXPOSE 8090
ADD ./target/appointment-service-0.0.1-SNAPSHOT.jar /usr/src/appointment-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "appointment-service-0.0.1-SNAPSHOT.jar"]