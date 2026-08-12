---
name: I_EHSLOCATIONFORLOCIDC
description: "This CDS view retrieves and counts the number of task instances. It allows filtering by task characteristics and by related objects, such as location, compliance scenario, incident, deviation incident and compliance requirement. This CDS view provides the data to answer the following business questions: What data is available for tasks and related objects, such as location, compliance requirement, scenario, and others? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONFORLOCIDC')/$value
semantic_en: "This CDS view retrieves and counts the number of task instances. It allows filtering by task characteristics and by related objects, such as location, compliance scenario, incident, deviation incident and compliance requirement. This CDS view provides the data to answer the following business questions: What data is available for tasks and related objects, such as location, compliance requirement, scenario, and others? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Locations - Cube — CDS view giao diện dựa trên I_EHSLocationRevision."
keywords:
  - "ehs"
  - "locations"
  - "cube"
  - "location"
  - "revision"
  - "date"
  - "start"
  - "type"
  - "text"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
  - task
---
# I_EHSLOCATIONFORLOCIDC

**This CDS view retrieves and counts the number of task instances. It allows filtering by task characteristics and by related objects, such as location, compliance scenario, incident, deviation incident and compliance requirement. This CDS view provides the data to answer the following business questions: What data is available for tasks and related objects, such as location, compliance requirement, scenario, and others? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONFORLOCIDC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationUUID` | ✓ | |  | `cast( EHSLocation.EHSLocationUUID as ehfnd_loc_root_key preserving type )` | `RAW(16)` | EHS Location - Root UUID |
| `RevisionEndDate` | ✓ | |  |  | `DATS(8)` | Revision End Date |
| `RevisionStartDate` |  | |  |  | `DATS(8)` | Revision Start Date |
| `EHSLocationType` |  | |  |  | `CHAR(21)` | Location Type |
| `EHSLocationTypeText` |  | |  | `_EHSLocationType._Text[1:Language = $parameters.P_Language].EHSLocationTypeText` | `CHAR(40)` | Location Type Name |
| `EHSLocationStatus` |  | |  |  | `CHAR(2)` | Location Status |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `PlantName` |  | | `_Plant` | `PlantName` | `CHAR(30)` | Plant Name |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region |
| `EHSLocationID` |  | | `_EHSRootLocation` | `EHSLocationID` | `CHAR(20)` | Location ID |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `EHSLocationAuthorizationGroup` |  | |  | `cast( _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].EHSLocationAuthorizationGroup as ehfnd_loc_auth_group_nc preserving type )` | `CHAR(21)` | Location Authorization Group |
| `NumberOfLocations` |  | |  | `cast( 0 as ehfnd_number_of_locations )` | `INT4(10)` | Number of Locations |
| `_EHSRootLocation` | | ✓ | | | | |
| `_EHSLocation` | | ✓ | | | | |
| `_EHSLocationGeoPoint` | | ✓ | | | | |
| `_EHSLocationType` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_EHSLocationRevisionName` | | ✓ | | | | |
| `_EHSLocationStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EHSRootLocation` | `I_EHSLocationRoot` | [1..1] |
| `_EHSLocation` | `I_EHSLocation` | [0..*] |
| `_EHSLocationGeoPoint` | `I_EHSLocationGeoPoint` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONFORLOCIDC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONFORLOCIDC')/$value)*

```abap
@EndUserText.label: 'EHS Locations - Cube'
@Analytics.dataCategory: #CUBE
@Analytics.internalName: #LOCAL

@VDM.viewType: #COMPOSITE

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@ObjectModel.usageType:{ serviceQuality: #D,
                         sizeCategory:  #L,
                         dataClass: #MIXED }
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

define view entity I_EHSLocationForLocIDC
  with parameters    
    P_Date       : sydatum,
    P_Language   : sylangu

as select from I_EHSLocationRevision as EHSLocation

    association [1..1] to I_EHSLocationRoot           as _EHSRootLocation     on  $projection.EHSLocationUUID = _EHSRootLocation.EHSLocationUUID
    association [0..*] to I_EHSLocation               as _EHSLocation         on  $projection.EHSLocationUUID = _EHSLocation.EHSLocationUUID
    
    association [1..*] to I_EHSLocationGeoPoint        as _EHSLocationGeoPoint        on $projection.ehslocationid = _EHSLocationGeoPoint.EHSLocationID  

{
    @ObjectModel.foreignKey.association: '_EHSLocation'
    key cast( EHSLocation.EHSLocationUUID as ehfnd_loc_root_key preserving type ) as EHSLocationUUID,
    key RevisionEndDate,
    
    @Semantics.text: true
    _EHSLocationRevisionName[1:Language = $parameters.P_Language].EHSLocationName,
        
    RevisionStartDate,
   
    EHSLocationType,
    _EHSLocationType._Text[1:Language = $parameters.P_Language].EHSLocationTypeText as EHSLocationTypeText,
   
    EHSLocationStatus,
   
    @ObjectModel.foreignKey.association: '_Plant'
    Plant,
    _Plant.PlantName,
    
    @ObjectModel.foreignKey.association: '_Country'
    Country,
   
    @ObjectModel.foreignKey.association: '_Region'
    Region,
    
    @ObjectModel.foreignKey.association: '_EHSLocationGeoPoint'
    _EHSRootLocation.EHSLocationID,

    CompanyCode,
    BusinessArea,
    CostCenter,
    cast( _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].EHSLocationAuthorizationGroup as ehfnd_loc_auth_group_nc preserving type ) as EHSLocationAuthorizationGroup,
   
    @Aggregation.default: #COUNT_DISTINCT
    @Aggregation.referenceElement: ['EHSLocationUUID']
    cast( 0 as ehfnd_number_of_locations ) as NumberOfLocations,   
   
    /* Associations */
    _EHSLocation,
    _EHSLocationType,
    _Plant,
    _Country,
    _Region,
    _EHSRootLocation,       
        
    _BusinessArea,
    _CompanyCode,
    _EHSLocationRevisionName,
    _EHSLocationStatus,
    _EHSLocationGeoPoint
}
where 
  RevisionStartDate <= $parameters.P_Date and  
  RevisionEndDate   >= $parameters.P_Date
```
