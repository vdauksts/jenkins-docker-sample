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
			// docker build -t jcantosz/jenkins-node:latest .
			docker.withServer('tcp://swarm:2376', 'dockerswarm'){
				app = docker.build("jcantosz/jenkins-node:latest")
			}
		}
		
		stage('Deploy'){
			// Connect to the swarm
			// docker run -td -p 8080:3000 jcantosz/jenkins-node:latest
			
			docker.withServer('tcp://swarm:2376', 'dockerswarm'){
				app.withRun('-td -p 8080:3000'){
				}
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