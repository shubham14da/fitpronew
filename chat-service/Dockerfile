FROM openjdk:11-jre-slim
EXPOSE 8092
ADD ./target/chat-service-0.0.1-SNAPSHOT.jar /usr/src/chat-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar","chat-service-0.0.1-SNAPSHOT.jar"]