pipeline {
  agent any

  stages {
    stage('Clone Repository') {
      steps {
        git 'https://github.com/Kanishk3813/SqueezeFresh.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t squeezefresh-app .'
      }
    }

    stage('Run Container') {
      steps {
        sh '''
          docker rm -f squeezefresh || true
          docker run -d -p 3000:3000 --name squeezefresh squeezefresh-app
        '''
      }
    }
  }
}
