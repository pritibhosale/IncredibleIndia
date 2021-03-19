package com.app.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.custom_excs.ResourceNotFoundException;
import com.app.dto.LoginRequest;
import com.app.dto.ResponseDTO;
import com.app.dto.UpdateDTO;
import com.app.pojos.Role;
import com.app.pojos.Users;
import com.app.service.IUserService;

@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
	private IUserService userService;
	@Autowired
	public UserController()
	{
		System.out.println("in ctor of:-"+getClass().getName());
	}
	@PostMapping("/login")
	public ResponseDTO<?> Login(@RequestBody LoginRequest request)
	{
		System.out.println("values of request"+request.getEmail());
		return new ResponseDTO<> (HttpStatus.OK,"login done succssfully",
				userService.loginRequest(request.getEmail(),request.getPassword()));
	}
         @PostMapping("/register")
         public ResponseDTO<?> register(@RequestBody Users user)
         {
        	
				return new ResponseDTO<>(HttpStatus.OK,"registeration done successfully",userService.registerationForm(user));
			
         }
         
         @GetMapping("/property")
     	public ResponseDTO<?> getAllPropertyHomePage()
     	{
     		return new ResponseDTO<>(HttpStatus.OK,"Fetching property list successfully",userService.getAllProperty());
     	}
         @GetMapping("/facility/{propid}")
      	public ResponseDTO<?> getAllPropertyHomePage(@PathVariable int propid)
      	{
      		return new ResponseDTO<>(HttpStatus.OK,"Fetching property list successfully",userService.getPropertyFacilities(propid));
      	}
         
}
