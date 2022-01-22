pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh "sh ./script_files/main.sh"
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