# Base image
#FROM openjdk:21-ea-slim

# Set working directory
#WORKDIR /app

# Copy Gradle wrapper and build files
#COPY backend/landOfRex/gradlew ./gradlew
#COPY backend/landOfRex/gradle ./gradle
#COPY backend/landOfRex/build.gradle ./

# Copy the source files
# COPY backend/landOfRex/src ./src

# Make Gradle wrapper executable
#RUN chmod +x ./gradlew

# Build the application using Gradle wrapper
#RUN ./gradlew clean build && ls -la /app/build/libs

# Copy the built JAR file
#RUN cp /app/build/libs/app-0.0.1-SNAPSHOT.jar /app/app.jar

# Specify the command to run the application
#ENTRYPOINT ["java", "-jar", "app.jar"]

# upper no docker hub version

FROM openjdk:21-slim-buster 

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. GitHub Actions에서 전송한 최종 JAR 파일만 복사
# ⚠️ GitHub Actions의 SCP 단계에서 이 이름으로 전송되도록 설정해야 합니다.
COPY app.jar /app/app.jar 

# 4. 포트 노출 (선택 사항)
EXPOSE 8080 

# 5. 애플리케이션 실행
ENTRYPOINT ["java", "-jar", "app.jar"]
