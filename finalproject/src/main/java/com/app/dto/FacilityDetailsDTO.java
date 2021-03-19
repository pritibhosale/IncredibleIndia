package com.app.dto;

import java.util.List;
public interface FacilityDetailsDTO {
	  int getId();
	String getAddress();
	String getRent();
	String getStatus();
   List <AreaInfo> getAreaData();
    interface AreaInfo{
    	 String getAreaName();
    	 City getCityData();
    	 interface City{
    		   String getCityName();
    	 }
    }
    List<Facilities> getFacilityList();
      interface Facilities{
    	   String getFurnished();
    	   String getLift();
    	   String getCctv();
      }
     
}
