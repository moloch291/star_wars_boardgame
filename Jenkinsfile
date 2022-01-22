pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh "sh ./script_files/build.sh"
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