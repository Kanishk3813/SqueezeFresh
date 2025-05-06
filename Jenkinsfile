pipeline {
  agent any

  environment {
    IMAGE_NAME = 'squeezefresh-app'
    CONTAINER_NAME = 'squeezefresh'
  }

  stages {
    stage('Clone Repository') {
      steps {
        echo '🔄 Cloning the repository...'
        git branch: 'main', url: 'https://github.com/Kanishk3813/SqueezeFresh.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        echo '🐳 Building Docker image...'
        sh 'docker build -t $IMAGE_NAME .'
      }
    }

    stage('Run Docker Container') {
      steps {
        echo '🚀 Running Docker container...'
        sh '''
          if docker ps -a --format '{{.Names}}' | grep -Eq "^$CONTAINER_NAME\$"; then
            echo "Stopping and removing existing container..."
            docker stop $CONTAINER_NAME
            docker rm $CONTAINER_NAME
          fi

          echo "Starting new container..."
          docker run -d -p 3000:3000 --name $CONTAINER_NAME $IMAGE_NAME
        '''
      }
    }
  }
}
