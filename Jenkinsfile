pipeline {
  agent { docker 
  { image 'python'
    args '--user 0:0'  }
   }
  stages {
    stage('testing') {
      steps {
          sh 'pip install tox'
          sh 'tox' 
      
      }
    }
    stage('running') {
      steps {
        sh 'virtualenv -p python3 .venv'
        sh 'source .venv/bin/activate'
        sh 'pip install -r requirements.txt'
        sh 'export MONGO_URI=mongodb://myuser:1234@mongodb:27017/test'
        sh 'python app.py'

      }   
    }
  }
}