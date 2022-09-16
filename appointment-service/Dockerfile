FROM openjdk:11-jre-slim
WORKDIR usr/src
ENV MONGO_URI=mongodb://localhost:27017/fitpro
EXPOSE 8097
ADD ./target/appointment-service-0.0.1-SNAPSHOT.jar /usr/src/appointment-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "appointment-service-0.0.1-SNAPSHOT.jar"]