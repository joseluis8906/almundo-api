pipeline {
  agent {
    docker {
      image "node:10.15.3-stretch"
      args "--name almundoapi --network nginx"
    }
  }
  stages {
    stage ("Build") {
      steps {
        sh "npm install"
      }
    }
    stage ("Run") {
      steps {
        sh "npm run build"
        sh "npm run serve"
        input message: "Finished using the web site? (Click \"Proceed\" to continue)"
      }
    }
  }
}