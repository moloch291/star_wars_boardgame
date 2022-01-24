@Library('github.com/releaseworks/jenkinslib') _

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh "sh ./script_files/check_dependencies.sh"
                withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'awsAccessKey', usernameVariable: 'AWS_ACCESS_KEY_ID', passwordVariable: 'AWS_SECRET_ACCESS_KEY']]) {
                    AWS(" sts get-caller-identity")
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deployment....'
            }
        }
    }
}