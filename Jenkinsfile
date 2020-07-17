
pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'testing'
    }
	stages {
		stage('checkout') {
		    steps {
			checkout scm
		    }
		}
		stage('Setup'){
		    steps {
			// Resolve hostname locally (add to DNS would be even better)
			sh '''
			  echo "test"
			'''
		    }
		}
		
		stage('Build'){
		    steps {
			timestamps {
			    retry(3) {
				sh label: 'image build', script: '''
				    export DOCKER_TAG=${JOB_NAME}
				    docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} --build-arg tag=${DOCKER_TAG} .
				'''
			    }
			}
		    }
		}
		
		stage('Deploy'){
		    steps {
			// Resolve hostname locally (add to DNS would be even better)
			sh '''
			  echo "deploy"
			'''
		    }	
		}
		stage('Test'){
			steps {
			// curl  swarm:8080
			sh '''
				curl -vL https://google.com
				'''
			}
		}
	}
}
