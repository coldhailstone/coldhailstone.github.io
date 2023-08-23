---
title: 'Spring initializr 사용하기'
categories:
    - TIL
tags:
    - 스프링
author_profile: false
comments: true
toc: true
toc_sticky: true
toc_label: '목차'
---

[Spring Initializr](https://start.spring.io/)를 사용하여 Spring Boot 프로젝트 생성

>[https://start.spring.io](https://start.spring.io/)

![spring-init](/assets/images/2023/04-10/spring-init.png)

## Project
빌드 관리 도구 선택

| 옵션                | 설명                                                   |
|-------------------|:-----------------------------------------------------|
| `Maven`           | 자바용 프로젝트 관리 도구, xml을 이용한 빌드 시스템                      |
| `Gradle` | JVM 기반의 빌드 도구로 기존의 Maven을 보완, Groovy - Kotlin은 문법 차이 |

## Language
사용 언어 선택

| 옵션       | 설명                                              |
|----------|:------------------------------------------------|
| `Java`   | JVM 가상머신을 사용하여 어느 플랫폼에서나 동일한 형태로 실행             |
| `Kotlin` | Java와 유사하지만 더 간결한 문법과 다양한 기능을 추가                |
| `Groovy` | Java에 파이썬, 루비, 스몰토크 등의 특징을 더한 동적 객체 지향 프로그래밍 언어 |

## Spring Boot
Spring Boot 버전 선택 - 접미사 없는 버전이 안정화 버전

| 접미사                     | 설명                                              |
|:------------------------|:------------------------------------------------|
| `SNAPSHOT`              | 아직 개발이 완료되지 않은 버전             |
| `M(Milestone)`          | 개발은 완료되었으나, 아직 기능들을 개선하는 중 또는 버그를 수정하고 있는 버전                |
| `RC(Release Candidate)` | 기능 개선과 버그 수정이 완료되었으나, 최종적으로 릴리즈되지는 않은 버전 |

## Project Metadata
프로젝트 설정

| 필드              | 설명                                               |
|----------------|:-------------------------------------------------|
| `Group`        | 보통 기업의 도메인명                                      |
| `Artifact`     | 빌드 결과물의 이름                                       |
| `Name`         | 프로젝트명 (일반적으로 Artifact와 동일)                       |
| `Description`  | 프로젝트에 대한 간략한 설명                                  |
| `Package name` | 프로젝트에 생성할 패키지명 (Group과 Artifact를 설정하면 자동으로 만들어줌) |
| `Packaging`    | 프로젝트 압축 방법                                       |
| `Java`         | JDK 버전                                           |

## Dependencies
라이브러리 설정

`웹 프로젝트 추천 라이브러리`

| 라이브러리        | 설명                               |
|:-------------|:---------------------------------|
| `Spring Web` | Spring 기반 웹 어플리케이션 개발에 필요한 라이브러리 |
| `Thymeleaf`  | 템플릿 엔진                           |

## 생성
1. 하단의 GENERATE 버튼 클릭해서 생성된 프로젝트 다운로드
2. 다운로드 받은 파일 압축해제 후 사용할 폴더로 이동
3. IDE에서 Import or Open
4. 압축해제한 파일의 build.gradle 선택 후 프로젝트 열기
5. 프로젝트 실행 후 다음과 같이 실행되면 성공

![spring-run](/assets/images/2023/04-10/spring-run.png)
