FROM centos:7

# install java
RUN yum install -y java-1.8.0-openjdk-devel
ENV JAVA_HOME=/usr/lib/jvm/java-1.8.0
ENV PATH=$PATH:$JAVA_HOME/bin
#ENV JAVA_HOME=/usr/java/default
# install Nodejs
RUN curl --silent --location https://rpm.nodesource.com/setup_8.x | bash - \
    && yum install -y nodejs
# install Maven
RUN curl -O http://www-eu.apache.org/dist/maven/maven-3/3.5.2/binaries/apache-maven-3.5.2-bin.tar.gz \
    && tar xzvf apache-maven-3.5.2-bin.tar.gz
ENV PATH=/opt/apache-maven-3.5.2/bin:$PATH

ADD target/my-library-1.0.0.jar /tmp/app.jar

ENV JAVA_OPTS=""

EXPOSE 8080
CMD npm run dev
ENTRYPOINT exec java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /tmp/app.jar