package com.app.service;
import java.util.List;
import com.app.custom_excs.ResourceNotFoundException;
import com.app.dto.FacilityDetailsDTO;
import com.app.dto.PropertyDetailsDTO;
import com.app.dto.UpdateDTO;
import com.app.pojos.Role;
import com.app.pojos.Users;

public interface IUserService {
Users loginRequest(String email,String password);
Users registerationForm(Users  user);
List<PropertyDetailsDTO> getAllProperty();
FacilityDetailsDTO getPropertyFacilities(int propid);

}
