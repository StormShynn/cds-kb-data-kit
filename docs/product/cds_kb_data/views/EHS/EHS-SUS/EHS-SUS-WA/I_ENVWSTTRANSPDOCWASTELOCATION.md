---
name: I_ENVWSTTRANSPDOCWASTELOCATION
description: "Waste Transportation Documents Location"
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENVWSTTRANSPDOCWASTELOCATION')/$value
semantic_en: "Waste Transportation Documents Location"
semantic_vi: "Waste Transportation Documents Location — CDS view giao diện (master data) dựa trên I_EHSLocation."
keywords:
  - "waste"
  - "transportation"
  - "documents"
  - "location"
  - "envrmt"
  - "gnrtr"
  - "phone"
  - "country"
  - "region"
tags:
  - EHS
  - bo:purchaseorder
  - component:EHS-SUS-WA
  - document
  - EHS-SUS
  - EHS-SUS-WA
  - interface-view
---
# I_ENVWSTTRANSPDOCWASTELOCATION

**Waste Transportation Documents Location**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-WA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENVWSTTRANSPDOCWASTELOCATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EnvrmtWasteGnrtrUUID` | ✓ | | `_Location` | `EHSLocationUUID` | `RAW(16)` | Location |
| `EHSLocationID` |  | | `_Location` | `EHSLocationID` | `CHAR(20)` | Location ID |
| `EHSLocationPhone` |  | | `_Location` | `EHSLocationPhone` | `CHAR(30)` | Telephone Number |
| `Country` |  | | `_Location` | `Country` | `CHAR(3)` | Country/Region |
| `Region` |  | | `_Location` | `Region` | `CHAR(3)` | Region |
| `CityName` |  | | `_Location` | `CityName` | `CHAR(40)` | City |
| `StreetName` |  | | `_Location` | `StreetName` | `CHAR(60)` | Street Address |
| `PostalCode` |  | | `_Location` | `PostalCode` | `CHAR(10)` | City Postal Code |
| `EHSLocationAuthorizationGroup` |  | |  | `cast(_Location.EHSLocationAuthorizationGroup as ehfnd_loc_auth_group_nc preserving type)` | `CHAR(21)` | Location Authorization Group |
| `Plant` |  | | `_Location` | `Plant` | `CHAR(4)` | Plant ID |
| `CostCenter` |  | | `_Location` | `CostCenter` | `CHAR(10)` | Cost Center |
| `EHSLocationType` |  | | `_Location` | `EHSLocationType` | `CHAR(21)` | Location Type |
| `EHSLocationStatus` |  | | `_Location` | `EHSLocationStatus` | `CHAR(2)` | Location Status |
| `CompanyCode` |  | | `_Location` | `CompanyCode` | `CHAR(4)` | Company Code |
| `BusinessArea` |  | | `_Location` | `BusinessArea` | `CHAR(4)` | Business Area |
| `EHSLocationIsAssigned` |  | |  | `cast(count(distinct _LocRespManager.EHSLocationResponsibleUUID) as abap.int1)` | `INT1(3)` |  |
| `_LocationText` | | ✓ | | | | |
| `_CountryText` | | ✓ | | | | |
| `_RegionText` | | ✓ | | | | |
| `_MethodCodeGroupText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LocationText` | `I_EnvrmtWasteGnrtrText` | [1..*] |
| `_CountryText` | `I_CountryText` | [1..*] |
| `_RegionText` | `I_RegionText` | [1..*] |
| `_MethodCodeGroupText` | `I_EnvrmtWasteMethCodeGrpT` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENVWSTTRANSPDOCWASTELOCATION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENVWSTTRANSPDOCWASTELOCATION')/$value)*

```abap
@EndUserText.label: 'Waste Transportation Documents Location'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType:  {
      dataClass: #MASTER,
      sizeCategory: #M,
      serviceQuality: #C
  },
  supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
  modelingPattern: #NONE
}
define view entity I_EnvWstTranspDocWasteLocation
  as select from I_EHSLocation as _Location
  left outer to one join I_EHSLocRespManagerCombined as _LocRespManager on _LocRespManager.EHSLocationUUID = _Location.EHSLocationUUID
                                                                        and _LocRespManager.EHSLocResponsibleManagerID = concat('D',cast($session.user as abap.char(12)))

  association [1..*] to I_EnvrmtWasteGnrtrText    as _LocationText        on _LocationText.EnvrmtWasteGnrtrUUID = $projection.EnvrmtWasteGnrtrUUID
  association [1..*] to I_CountryText             as _CountryText         on _CountryText.Country = $projection.Country
  association [1..*] to I_RegionText              as _RegionText          on  _RegionText.Region  = $projection.Region
                                                                          and _RegionText.Country = $projection.Country
  association [1..*] to I_EnvrmtWasteMethCodeGrpT as _MethodCodeGroupText on _MethodCodeGroupText.EnvrmtWasteMgmtMethCodeCntry = $projection.Country
{
  key _Location.EHSLocationUUID as EnvrmtWasteGnrtrUUID,
      
      _Location.EHSLocationID,
      
      _Location.EHSLocationPhone,
      _Location.Country,
      _Location.Region,
      _Location.CityName,
      _Location.StreetName,
      _Location.PostalCode,
      cast(_Location.EHSLocationAuthorizationGroup as ehfnd_loc_auth_group_nc preserving type) as EHSLocationAuthorizationGroup,
      _Location.Plant,
      _Location.CostCenter,
      _Location.EHSLocationType,
      _Location.EHSLocationStatus,
      _Location.CompanyCode,
      _Location.BusinessArea,
      
      @EndUserText.label: 'Is Location Assigned'
//      case
//        when _LocRespManager.EHSLocationResponsibleUUID is null then 0
//        when _LocRespManager.EHSLocationResponsibleUUID is not null then 1
//      end as EHSLocationIsAssigned,
      cast(count(distinct _LocRespManager.EHSLocationResponsibleUUID) as abap.int1) as EHSLocationIsAssigned,

      _LocationText,
      _CountryText,
      _RegionText,
      _MethodCodeGroupText,
      _Location._EHSLocationRoot
} 
group by _Location.EHSLocationUUID, _Location.EHSLocationID, _Location.EHSLocationPhone,
         _Location.Country, _Location.Region, _Location.CityName, _Location.StreetName, _Location.PostalCode,
         _Location.EHSLocationAuthorizationGroup, _Location.Plant, _Location.CostCenter,
         _Location.EHSLocationType, _Location.EHSLocationType, _Location.EHSLocationStatus,
         _Location.CompanyCode, _Location.BusinessArea
```
