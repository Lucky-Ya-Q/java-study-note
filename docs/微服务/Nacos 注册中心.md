完整示例代码请参考：[nacos-spring-cloud-discovery-example](https://github.com/nacos-group/nacos-examples/tree/master/nacos-spring-cloud-example/nacos-spring-cloud-discovery-example)

## 服务提供者

```yaml
server:
  port: 8070
spring:
  application:
    name: service-provider
  cloud:
    nacos:
      discovery:
        server-addr: 123.57.63.56:8848
```

测试接口：http://localhost:8070/echo/2023

## 服务消费者

```yaml
server:
  port: 8080
spring:
  application:
    name: service-consumer
  cloud:
    nacos:
      discovery:
        server-addr: 123.57.63.56:8848
```

测试接口：http://localhost:8080/echo/2023
