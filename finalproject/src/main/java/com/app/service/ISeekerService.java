package com.app.service;

import java.util.List;

import com.app.custom_excs.ResourceNotFoundException;
import com.app.dto.AreaDTO;
import com.app.custom_excs.ResourceNotFoundException;
public interface ISeekerService {
      // String  getContactDetails(int ownerId) throws ResourceNotFoundException;
       List<AreaDTO> searchPropertyByCity(String areaName,String city) throws ResourceNotFoundException;

}
