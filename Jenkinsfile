// Throttle the node docker
throttle(['docker']) {
	// On the node, run these things
	node {
		def app
	
		// The pipeline (do we need "stages")

		stage('Clone'){
			checkout scm
		}
		stage('Setup'){
			// Resolve hostname locally (add to DNS would be even better)
			sh '''
			  echo "test"
			'''
		}
		
		stage('Build'){
			docker build -t jcantosz/jenkins-node:latest .
		}
		
		stage('Deploy'){
			// Connect to the swarm
			// docker run -td -p 8080:3000 jcantosz/jenkins-node:latest
			sh '''
			  echo "hi"
			'''			
		}
		stage('Test'){
			// curl  swarm:8080
			sh '''
				curl -vL https://google.com
				'''
		}
	}
}
