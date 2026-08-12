---
name: C_EHSMYLOCATION
description: "This CDS view retrieves data about the location that is set to My Location in the system. This CDS view provides the data to answer the following business questions: What's the name, type, or ID of the location that is set to My Location in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSMYLOCATION')/$value
semantic_en: "This CDS view retrieves data about the location that is set to My Location in the system. This CDS view provides the data to answer the following business questions: What's the name, type, or ID of the location that is set to My Location in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "My EHS Location — CDS view tiêu dùng dựa trên I_MyEHSLocation."
keywords:
  - "ehs"
  - "location"
  - "type"
  - "status"
  - "authorization"
  - "group"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
---
# C_EHSMYLOCATION

**This CDS view retrieves data about the location that is set to My Location in the system. This CDS view provides the data to answer the following business questions: What's the name, type, or ID of the location that is set to My Location in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSMYLOCATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationUUID` | ✓ | |  |  | `RAW(16)` | Location |
| `EHSLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `EHSLocationType` |  | |  |  | `CHAR(21)` | Location Type |
| `EHSLocationStatus` |  | |  |  | `CHAR(2)` | Location Status |
| `EHSLocationAuthorizationGroup` |  | |  | `cast( EHSLocation.EHSLocationAuthorizationGroup as ehfnd_loc_auth_group_nc preserving type )` | `CHAR(21)` | Location Authorization Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSMYLOCATION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSMYLOCATION')/$value)*

```abap
@EndUserText.label: 'My EHS Location'

@OData.publish: true
@VDM.viewType: #CONSUMPTION

@AbapCatalog.sqlViewName: 'CMYLOCATION'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE

@AccessControl.authorizationCheck: #MANDATORY

@ObjectModel.usageType: {serviceQuality: #D, sizeCategory: #L, dataClass: #MIXED}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #TRANSACTIONAL_PROVIDER ]

define view C_EHSMyLocation as select from I_MyEHSLocation as MyEHSLocation
join I_EHSLocation                                      as EHSLocation               on MyEHSLocation.EHSLocationUUID = EHSLocation.EHSLocationUUID
{
  key MyEHSLocation.EHSLocationUUID,
  
  @ObjectModel.text.element: [ 'EHSLocationName' ]
  EHSLocation.EHSLocationID,
  
  MyEHSLocation._EHSLocationName[1:Language = $session.system_language].EHSLocationName,
  
  EHSLocation._EHSLocationStatus._Text[1:Language = $session.system_language].EHSLocationStatusText,
  
  EHSLocation._EHSLocationType._Text[1:Language = $session.system_language].EHSLocationTypeText,
  
  @UI.hidden: true
  EHSLocation.EHSLocationType,
  @UI.hidden: true
  EHSLocation.EHSLocationStatus,
  @UI.hidden: true
  cast( EHSLocation.EHSLocationAuthorizationGroup as ehfnd_loc_auth_group_nc preserving type )  as EHSLocationAuthorizationGroup,
  @UI.hidden: true
  EHSLocation.Plant,
  @UI.hidden: true
  EHSLocation.CostCenter,
  @UI.hidden: true
  EHSLocation.CompanyCode,
  @UI.hidden: true
  EHSLocation.BusinessArea

}
```
