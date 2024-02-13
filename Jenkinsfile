def label = "mypod-${UUID.randomUUID().toString()}"
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
          - name: sonar-scanner
            image: sonarsource/sonar-scanner-cli:latest
            imagePullPolicy: IfNotPresent
            command:
            - cat
            tty: true
          - name: trivy
            image: aquasec/trivy:latest
            imagePullPolicy: IfNotPresent
            command:
            - cat
            tty: true
            volumeMounts:
            - name: trivy-cache
              mountPath: /root/.cache/trivy
          - name: owasp-dependency-check
            image: owasp/dependency-check:latest
            imagePullPolicy: IfNotPresent
            command:
            - cat
            tty: true
            volumeMounts:
            - name: owasp-volume
              mountPath: /usr/src/app
          volumes:
          - name: dockercred
            projected:
              sources:
              - secret:
                  name: docker-credentials
                  items:
                    - key: .dockerconfigjson
                      path: config.json
          - name: owasp-volume
            emptyDir: {}
          - name: trivy-cache
            emptyDir: {}
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
                // sh "npm run build"
            }
        }
        stage("OWASP SCANNING") {
            container(name: 'owasp-dependency-check') {
                dependencyCheck additionalArguments: '--scan ./', odcInstallation: 'DC'
                dependencyCheckPublisher pattern: "**/dependency-check-report.xml"
            }
        }
        stage('Trivy FS SCAN') {
            container (name: 'trivy') {
                sh "trivy --version"
                // sh "trivy image registry.gitlab.com/vikasedu10/docker_registry:dev_autov1.0"
                sh "trivy fs ."
            }
        }
        stage('SonarQube analysis') {
            def SCANNER_HOME = tool 'SonarQube'
            container (name: 'sonar-scanner') {
                withSonarQubeEnv(credentialsId: 'sonar-tkn') {
                    withSonarQubeEnv('SonarQube') {
                        sh "$SCANNER_HOME/bin/sonar-scanner -Dsonar.projectName=samplePipeline -Dsonar.host.url=http://3.89.133.76:9000 -Dsonar.projectKey=samplePipeline"
                    }
                }
            }
        }
        stage('Build & Push') {
            container (name: 'kaniko', shell: '/busybox/sh') {
                sh "pwd"
                sh "ls"
                sh "/kaniko/executor --dockerfile ${workspace}/Dockerfile --context `pwd` --snapshotMode=redo --ignore-path /workspace --ignore-path /busybox --insecure-pull --skip-tls-verify-pull --insecure --skip-tls-verify --build-arg namespace=sample --destination registry.gitlab.com/vikasedu10/docker_registry:dev_autov1.0"
            }
        }
        
    }
}
