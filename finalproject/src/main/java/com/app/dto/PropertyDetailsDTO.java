package com.app.dto;

import java.util.List;

public interface PropertyDetailsDTO {
	  int getId();
	String getAddress();
	String getRent();
	String getStatus();
   List <AreaInfo> getAreadata();
    interface AreaInfo{
    	 String getAreaName();
    }
    /*List<Facilities> getFacilityList();
      interface Facilities{
    	   String getFurnished();
    	   String getLift();
    	   String getCctv();
      }*/
     
}
