---
title: 'Spring Annotation 정리 - @Controller, @Service, @Repository, @Component'
categories:
    - TIL
tags:
    - Spring
author_profile: false
comments: true
toc: true
toc_sticky: true
toc_label: '목차'
---

Spring Framework는 Java 기반의 웹 애플리케이션 개발을 위한 프레임워크로, 객체지향적인 개발 방식을 적극적으로 활용한다. 이러한 객체지향적인 개발을 지원하기 위해 Spring은 여러 개의 Annotation을 제공하고 있다. 이번 글에서는 Spring Annotation 중에서 가장 대표적인 4가지 Annotation인 `@Controller`, `@Service`, `@Repository`, `@Component`를 정리해보고자 한다.

## 1. `@Controller`
`@Controller` Annotation은 Spring MVC에서 사용되는 Annotation으로, Controller 역할을 수행하는 클래스에 부착된다. 즉, 사용자의 요청을 받아 해당 요청을 처리하고 그 결과를 응답으로 반환하는 역할을 한다.

```java
@Controller
public class UserController {
    
   @RequestMapping(value = "/user/{userId}", method = RequestMethod.GET)
   public String getUser(@PathVariable int userId, Model model) {
      User user = userService.getUserById(userId);
      model.addAttribute("user", user);
      return "user";
   }
}
```
위의 코드에서 `@Controller` Annotation이 부착된 `UserController` 클래스는 `/user/{userId}` URL에 대한 GET 요청을 처리하는 Controller 역할을 한다.

## 2. `@Service`
`@Service` Annotation은 비즈니스 로직을 처리하는 Service 클래스에 부착된다. 즉, Service 클래스에서는 데이터베이스와의 연동 및 비즈니스 로직을 수행한다.

```java
@Service
public class UserServiceImpl implements UserService {
    
   @Autowired
   private UserRepository userRepository;
   
   @Override
   public User getUserById(int userId) {
       return userRepository.getUserById(userId);
   }
}
```
위의 코드에서 `@Service` Annotation이 부착된 `UserServiceImpl` 클래스는 `UserRepository`와 연동하여 `getUserById(int userId)` 메소드를 구현하는 비즈니스 로직을 처리하는 Service 역할을 한다.

## 3. @Repository
`@Repository` Annotation은 DAO(Data Access Object) 클래스에 부착된다. DAO 클래스는 데이터베이스와의 연동을 처리하며, `@Repository` Annotation을 사용하면 Spring에서 해당 클래스를 Repository로 인식하여 데이터베이스와의 연동을 수행한다.

```java
@Repository
public class UserRepositoryImpl implements UserRepository {
    
   @Autowired
   private SqlSession sqlSession;
   
   @Override
   public User getUserById(int userId) {
       return sqlSession.selectOne("getUserById", userId);
   }
}
```
위의 코드에서 `@Repository` Annotation이 부착된 `UserRepositoryImpl` 클래스는 MyBatis와 연동하여 데이터베이스와의 연동을 수행하는 DAO 역할을 한다.

## 4. @Component
`@Component` Annotation은 Spring에서 관리하는 Bean으로 등록되는 클래스에 부착된다. 즉, `@Component` Annotation을 사용하면 해당 클래스를 Bean으로 등록할 수 있다.

```java
@Component
public class User {
    
   private int userId;
   private String userName;
   // getter, setter, constructor
}
```
위의 코드에서 `@Component` Annotation이 부착된 User 클래스는 Spring에서 관리하는 Bean으로 등록