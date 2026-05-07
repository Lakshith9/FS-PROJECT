pipeline {
    agent any
    stages {
        stage('Build WAR') {
            steps {
                dir('backend') {
                    sh 'mvn clean package'
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t myapp .'
            }
        }
        stage('Deploy Container') {
            steps {
                sh 'docker stop mycontainer || true'
                sh 'docker rm mycontainer || true'
                sh 'docker run -d -p 8090:8080 --name mycontainer myapp'
            }
        }
    }
}
