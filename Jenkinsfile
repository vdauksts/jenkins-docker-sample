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
			  echo "10.1.2.93 swarm" | sudo tee -a /etc/hosts
			'''
		}
		
		stage('Build'){
			// docker build -t jcantosz/jenkins-node:latest .
			docker.withServer('tcp://swarm:2376', 'dockerswarm'){
				app = docker.build("jcantosz/jenkins-node:latest")
			}
		}
		
		stage('Deploy'){
			// Connect to the swarm
			// docker run -d -p 8080:3000 -t jcantosz/jenkins-node:latest
			docker.withServer('tcp://swarm:2376', 'dockerswarm'){
				app.withRun('-p 8080:3000')
			}
		}
		stage('Test'){
			// curl  swarm:8080
			sh '''
				curl swarm:8080
				'''
		}
	}
}