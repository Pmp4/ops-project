package com.pmp4.ops.api;

import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class MainApiController {

    @ApiOperation(value = "TEST API", notes = "테스트 API 실행")
    @GetMapping("/test")
    public String test() {
        return "test";
    }
}
