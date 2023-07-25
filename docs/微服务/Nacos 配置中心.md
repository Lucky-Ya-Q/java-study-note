完整示例代码请参考：[nacos-spring-cloud-config-example](https://github.com/nacos-group/nacos-examples/tree/master/nacos-spring-cloud-example/nacos-spring-cloud-config-example)

## 服务提供者

必须在 `bootstrap.properties` 文件中配置与配置中心有关的参数

```properties
spring.cloud.nacos.config.server-addr=123.57.63.56:8848
# 以下三项配置代表要读取 dataId 为 service-provider.yml 和 service-provider-dev.yml 的配置
spring.application.name=service-provider
spring.profiles.active=dev
spring.cloud.nacos.config.file-extension=yml
```

```yaml
server:
  port: 8070
spring:
  cloud:
    nacos:
      discovery:
        server-addr: 123.57.63.56:8848
```

```java
@RefreshScope
@RestController
@RequestMapping("/config")
public class ConfigController {
    @Value("${activeDef:def}")
    private String activeDef;

    @Value("${activeDev:dev}")
    private String activeDev;

    @GetMapping("/get")
    public String get() {
        return activeDef + " - " + activeDev;
    }
}
```

测试接口：http://localhost:8070/config/get

## 服务消费者

```java
@RestController
@RequestMapping("/config")
public class ConfigController {
    @Autowired
    private RestTemplate restTemplate;

    @GetMapping("/get")
    public String get() {
        return restTemplate.getForObject("http://service-provider/config/get", String.class);
    }
}
```

测试接口：http://localhost:8080/config/get
