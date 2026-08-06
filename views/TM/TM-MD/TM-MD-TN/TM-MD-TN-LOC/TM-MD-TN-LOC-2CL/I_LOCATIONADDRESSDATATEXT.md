---
name: I_LOCATIONADDRESSDATATEXT
description: Locationaddressdatatext
app_component: TM-MD-TN-LOC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-MD
  - TM-MD-TN
  - interface-view
  - text-view
  - address
  - text
  - component:TM-MD-TN-LOC-2CL
  - lob:Other
---
# I_LOCATIONADDRESSDATATEXT

**Locationaddressdatatext**

| Property | Value |
|---|---|
| App Component | `TM-MD-TN-LOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `LocationUUID` | `LocationUUID` |
| `LocationAdditionalUUID` | `LocationAdditionalUUID` |
| `Location` | `Location` |
| `LocationAddressDataText` | `case when loc_basic._Text[1: Language = $session.system_language ].LocationDescription is not initial then concat_with_space( concat_with_space( concat_with_space( loc_basic._Text[1: Language = $session.system_language ].LocationDescription, '/' , 1), concat_with_space( concat_with_space( loc_basic._PostalAddrDfltRprstn.StreetName, loc_basic._PostalAddrDfltRprstn.HouseNumber , 1), concat_with_space( '/' , concat_with_space( loc_basic._PostalAddrDfltRprstn.PostalCode , loc_basic._PostalAddrDfltRprstn.CityName, 1), 1), 1), 3 ), concat( concat( '(' , loc_basic.Location) , ')' ), 1 ) else concat_with_space( concat_with_space(loc_basic._PostalAddrDfltRprstn.PostalCode, loc_basic._PostalAddrDfltRprstn.CityName, 1), concat( concat( '(' , loc_basic.Location) , ')' ), 1 ) end` |
| `BusinessPartnerUUID` | `loc_basic.BusinessPartnerUUID` |
| `IsBusinessPurposeCompleted` | `loc_basic.IsBusinessPurposeCompleted` |
| `_BusinessPartner` | *Association* |

## Source Code

```abap
@AccessControl:{
  authorizationCheck: #MANDATORY,
  personalData:{
    blocking: #REQUIRED
  }
}
@ObjectModel:{
  representativeKey: 'LocationUUID',
  semanticKey: [ 'Location'],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #MASTER },
   supportedCapabilities: [  #SQL_DATA_SOURCE, 
                             #CDS_MODELING_DATA_SOURCE, 
                             #CDS_MODELING_ASSOCIATION_TARGET]
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Location Address Data - Text'
@Metadata.ignorePropagatedAnnotations: true

define view entity I_LocationAddressDataText
  as select from I_LocationBasic_2 as loc_basic
{

  key LocationUUID                         as LocationUUID,
      LocationAdditionalUUID               as LocationAdditionalUUID,
      Location                             as Location,


      /* we will use the assiciation _PostalAddrDftlReprstn which directly selects from the adrc table
         and avoids the association to the union view I_ADDRESS_2, which will cause a performance issue
         when consumed in views with multiple locations */

      case when loc_basic._Text[1: Language = $session.system_language ].LocationDescription is not initial
           then concat_with_space(      // Combintion of location description and address data
                  concat_with_space(
                        concat_with_space( loc_basic._Text[1: Language = $session.system_language ].LocationDescription, '/' , 1),
                        concat_with_space(
                              concat_with_space( loc_basic._PostalAddrDfltRprstn.StreetName, loc_basic._PostalAddrDfltRprstn.HouseNumber , 1),
                              concat_with_space( '/' , concat_with_space( loc_basic._PostalAddrDfltRprstn.PostalCode , loc_basic._PostalAddrDfltRprstn.CityName, 1), 1), 1), 3 ),

                  concat( concat( '(' ,  loc_basic.Location) , ')' ), 1 ) //Location ID in ()

           else concat_with_space(      // Only address data
                  concat_with_space(loc_basic._PostalAddrDfltRprstn.PostalCode, loc_basic._PostalAddrDfltRprstn.CityName, 1),
                  concat( concat( '(' ,  loc_basic.Location) , ')' ), 1 ) //Location ID in ()
      end                                  as LocationAddressDataText,

      @Consumption.hidden: true
      loc_basic.BusinessPartnerUUID        as BusinessPartnerUUID,
      @Consumption.hidden: true
      @Semantics.booleanIndicator: true
      loc_basic.IsBusinessPurposeCompleted as IsBusinessPurposeCompleted,

      _BusinessPartner

}
```
