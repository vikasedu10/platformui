def label = "devpod-${UUID.randomUUID().toString()}"
def serviceaccount = "jenkins-admin"

podTemplate(label: label, serviceAccount: serviceaccount,
    yaml: """
        spec:
          containers:
          - name: ubuntu
            image: ubuntu:latest
            imagePullPolicy: IfNotPresent
            command:
            - cat
            tty: true
            volumeMounts:
            - name: dockercred
              mountPath: /kaniko/.docker
          - name: jnlp
          - name: kaniko
            image: gcr.io/kaniko-project/executor:debug
            imagePullPolicy: Always
            volumeMounts:
            - name: dockercred
              mountPath: /kaniko/.docker
            command:
            - /busybox/cat
            tty: true
          - name: nodejs
            image: node:latest
            imagePullPolicy: IfNotPresent
            command:
            - cat
            tty: true
            volumeMounts:
            - name: dockercred
              mountPath: /kaniko/.docker
          volumes:
          - name: dockercred
            projected:
              sources:
              - secret:
                  name: docker-credentials
                  items:
                    - key: .dockerconfigjson
                      path: config.json
        """
) {
    node(label) {
        stage('checkout') {
            git branch: "main", url: "https://github.com/vikasedu10/platformui.git", credentialsId: "github-pat"
        }
        stage('Load image') {
            echo "Hello"
            container('ubuntu') {
                echo "world"
                sh "whoami"
                sh "ls -a"
                // sh "apt update"
                // sh "apt install nano"
            }
        }
        stage('Build stage') {
            container ('nodejs') {
                sh "node --version"
                sh "pwd"
                sh "ls -a"
                sh "pwd"
                sh "ls -a"
                // sh "npm run build"
            }
        }
        stage('Build & Push') {
            container (name: 'kaniko', shell: '/busybox/sh') {
                sh "pwd"
                sh "ls"
                sh "/kaniko/executor --dockerfile ${workspace}/Dockerfile --context `pwd` --snapshotMode=redo --ignore-path /workspace --ignore-path /busybox --insecure-pull --skip-tls-verify-pull --insecure --skip-tls-verify --build-arg namespace=sample --destination registry.gitlab.com/vikasedu10/docker_registry:autov1.0"
                
            // writeFile file: "Dockerfile", text: """
            //     FROM jenkins/agent
            //     MAINTAINER CloudBees Support Team <support@cloudbees.com>
            //     RUN mkdir /home/jenkins/.m2
            // """
    
            // sh '''#!/busybox/sh
            //     /kaniko/executor --context `pwd` --verbosity debug --destination registry.gitlab.com/vikasedu10/docker_registry:latest
            //  '''
            }
        }
    }
}
