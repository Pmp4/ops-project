package com.pmp4.ops.api;

import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/test")
public class MainApiController {
    private static final Logger LOGGER = LoggerFactory.getLogger(MainApiController.class);

    @ApiOperation(value = "TEST API", notes = "테스트 API 실행")
    @GetMapping("/test")
    public String test(HttpServletRequest httpServletRequest) {
        return "test";
    }
}
