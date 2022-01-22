pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                ./scripts/build/main.sh
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}