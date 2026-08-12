---
name: I_EHSLOCATIONREVISION
description: "This CDS view retrieves location revision data. It can be used in key user extensions as an association target or for selection of location data. This CDS view provides the data to answer the following business questions: How can I use location revisions in my key user extensions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONREVISION')/$value
semantic_en: "This CDS view retrieves location revision data. It can be used in key user extensions as an association target or for selection of location data. This CDS view provides the data to answer the following business questions: How can I use location revisions in my key user extensions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Location Revision — CDS view giao diện dựa trên I_EHSLocationRevisionBasic."
keywords:
  - "ehs"
  - "location"
  - "revision"
  - "date"
  - "start"
  - "creation"
  - "time"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
---
# I_EHSLOCATIONREVISION

**This CDS view retrieves location revision data. It can be used in key user extensions as an association target or for selection of location data. This CDS view provides the data to answer the following business questions: How can I use location revisions in my key user extensions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONREVISION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationUUID` | ✓ | |  |  | `RAW(16)` | Location |
| `RevisionEndDate` | ✓ | |  |  | `DATS(8)` | Revision End Date |
| `RevisionStartDate` |  | |  |  | `DATS(8)` | Revision Start Date |
| `EHSLocationRevisionUUID` |  | |  |  | `RAW(16)` | EHS Location - Revision UUID |
| `CreationDateTime` |  | |  |  | `DEC(21)` | Created On |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | Last Changed On |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last Change By |
| `Latitude` |  | |  |  | `DEC(15)` | Geographic Latitude |
| `Longitude` |  | |  |  | `DEC(15)` | Geographic Longitude |
| `EHSLocationType` |  | |  |  | `CHAR(21)` | Location Type |
| `EHSLocationStatus` |  | |  |  | `CHAR(2)` | Location Status |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `OrganizationalUnit` |  | |  | `cast( OrganizationalUnit as ehfnd_org_unit_id preserving type )` | `NUMC(8)` | Organizational Unit ID |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `EHSLocationAuthorizationGroup` |  | |  | `cast( EHSLocationAuthorizationGroup as ehfnd_loc_auth_group preserving type )` | `CHAR(21)` | Location Authorization Group |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region |
| `CityName` |  | |  |  | `CHAR(40)` | City |
| `StreetName` |  | |  |  | `CHAR(60)` | Street Address |
| `PostalCode` |  | |  |  | `CHAR(10)` | City Postal Code |
| `EHSLocationPhone` |  | |  |  | `CHAR(30)` | Telephone Number |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment |
| `FunctionalLocation` |  | |  | `EHSFunctionalLocation` | `CHAR(40)` | Functional Location ID |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_EHSLocationType` | | ✓ | | | | |
| `_EHSLocationStatus` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_OrganizationalUnit` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_EHSLocationAuthGroup` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_Equipment` | | ✓ | | | | |
| `_FunctionalLocation` | | ✓ | | | | |
| `_EHSLocationRevisionName` | | ✓ | | | | |
| `_EHSLocationStorageLocation` | | ✓ | | | | |
| `_EHSLocationBuilding` | | ✓ | | | | |
| `_EHSLocRespTechnician` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreatedByUser` | `I_User` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_EHSLocationType` | `I_EHSLocationType` | [0..1] |
| `_EHSLocationStatus` | `I_EHSLocationStatus` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_OrganizationalUnit` | `I_OrgUnit` | [0..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_EHSLocationAuthGroup` | `I_EHSLocationAuthznGroup` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_Region` | `I_Region` | [0..1] |
| `_Equipment` | `I_Equipment` | [0..1] |
| `_FunctionalLocation` | `I_FunctionalLocation` | [0..1] |
| `_EHSLocationRevisionName` | `I_EHSLocationRevisionNameT` | [0..*] |
| `_EHSLocationStorageLocation` | `I_EHSLocationStorageLocation` | [0..*] |
| `_EHSLocationBuilding` | `I_EHSLocationBuilding` | [0..*] |
| `_EHSLocRespTechnician` | `I_EHSLocRespTechnicianCombined` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONREVISION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONREVISION')/$value)*

```abap
@EndUserText.label: 'EHS Location Revision'
@Analytics: { dataCategory:#DIMENSION , dataExtraction.enabled:true }
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'EHSLocationUUID'
@AccessControl.authorizationCheck: #MANDATORY

@AbapCatalog.sqlViewName: 'ILOCREV'
@AbapCatalog.compiler.compareFilter: true

// Client handling by session
@ClientHandling.algorithm: #SESSION_VARIABLE

// used for BOBF Master Data Object
@ObjectModel.usageType:{ serviceQuality: #A,        
                         sizeCategory:  #M,         // < 100.000
                         dataClass: #MASTER }
@Metadata.allowExtensions:true

@AccessControl.privilegedAssociations: ['_CreatedByUser', '_OrganizationalUnit', '_LastChangedByUser']
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #NONE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'EHSLocationRevision'
define view I_EHSLocationRevision
  as select from I_EHSLocationRevisionBasic as rev

  association [0..1] to I_User                         as _CreatedByUser              on  $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                         as _LastChangedByUser          on  $projection.LastChangedByUser = _LastChangedByUser.UserID
  association [0..1] to I_EHSLocationType              as _EHSLocationType            on  $projection.EHSLocationType = _EHSLocationType.EHSLocationType
  association [0..1] to I_EHSLocationStatus            as _EHSLocationStatus          on  $projection.EHSLocationStatus = _EHSLocationStatus.EHSLocationStatus
  association [0..1] to I_Plant                        as _Plant                      on  $projection.Plant = _Plant.Plant
  association [0..1] to I_CompanyCode                  as _CompanyCode                on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_BusinessArea                 as _BusinessArea               on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_OrgUnit                      as _OrganizationalUnit         on  $projection.OrganizationalUnit = _OrganizationalUnit.OrganizationalUnit
  association [0..1] to I_StorageLocation              as _StorageLocation            on  $projection.StorageLocation = _StorageLocation.StorageLocation
                                                                                      and $projection.Plant           = _StorageLocation.Plant
  association [0..1] to I_ControllingArea              as _ControllingArea            on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..*] to I_CostCenter                   as _CostCenter                 on  $projection.CostCenter      = _CostCenter.CostCenter
                                                                                      and $projection.ControllingArea = _CostCenter.ControllingArea
  association [0..1] to I_EHSLocationAuthznGroup       as _EHSLocationAuthGroup       on  $projection.EHSLocationAuthorizationGroup = _EHSLocationAuthGroup.EHSLocationAuthorizationGroup
  association [0..1] to I_Country                      as _Country                    on  $projection.Country = _Country.Country
  association [0..1] to I_Region                       as _Region                     on  $projection.Region  = _Region.Region
                                                                                      and $projection.Country = _Region.Country
  association [0..1] to I_Equipment                    as _Equipment                  on  $projection.Equipment = _Equipment.Equipment
  association [0..1] to I_FunctionalLocation           as _FunctionalLocation         on  $projection.FunctionalLocation = _FunctionalLocation.FunctionalLocation
  association [0..*] to I_EHSLocationRevisionNameT     as _EHSLocationRevisionName    on  $projection.EHSLocationUUID = _EHSLocationRevisionName.EHSLocationUUID
                                                                                      and $projection.RevisionEndDate = _EHSLocationRevisionName.RevisionEndDate

  association [0..*] to I_EHSLocationStorageLocation   as _EHSLocationStorageLocation on  $projection.EHSLocationRevisionUUID = _EHSLocationStorageLocation.EHSLocationRevisionUUID
  association [0..*] to I_EHSLocationBuilding          as _EHSLocationBuilding        on  $projection.EHSLocationRevisionUUID = _EHSLocationBuilding.EHSLocationRevisionUUID
  association [0..*] to I_EHSLocRespTechnicianCombined as _EHSLocRespTechnician       on  $projection.EHSLocationRevisionUUID = _EHSLocRespTechnician.EHSLocationRevisionUUID


{
       @ObjectModel.text.association: '_EHSLocationRevisionName'
  key  EHSLocationUUID,
       // The end date in view P_EHSLocRevisionValidty is actually the start date of the next revision. Thus we still have to subtract
       // one day from that date in order to determine the correct end date (unfortunately this is not posible to do in P_EHSLocRevisionValidty
       // because in that view we have to use SQL min aggregation for this field as well).
       // If there is no next revision, i.e. there is no end date, we use 99991231 as end date.
       @Semantics.businessDate.to
  key  RevisionEndDate,

       @Semantics.businessDate.from
       RevisionStartDate,

       EHSLocationRevisionUUID,

       @Semantics.systemDateTime.createdAt
       CreationDateTime,
       @Semantics.user.createdBy
       CreatedByUser,
       _CreatedByUser,
       @Semantics.systemDateTime.lastChangedAt
       LastChangeDateTime,
       @Semantics.user.lastChangedBy
       LastChangedByUser,
       _LastChangedByUser,
       Latitude,
       Longitude,
       @ObjectModel.foreignKey.association: '_EHSLocationType'
       EHSLocationType,
       _EHSLocationType,
       @ObjectModel.foreignKey.association: '_EHSLocationStatus'
       EHSLocationStatus,
       _EHSLocationStatus,
       @ObjectModel.foreignKey.association: '_Plant'
       Plant,
       _Plant,
       //--[ GENERATED:012:29JlHNUf7jY4oS0yl5vKTW
       @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_CompanyCodeStdVH',
                      element: 'CompanyCode' }
         }]
       // ]--GENERATED
       @ObjectModel.foreignKey.association: '_CompanyCode'
       CompanyCode,
       _CompanyCode,
       //--[ GENERATED:012:29JlHNUf7jY4oS0yl5vKTW
       @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_BusinessAreaStdVH',
                      element: 'BusinessArea' }
         }]
       // ]--GENERATED
       @ObjectModel.foreignKey.association: '_BusinessArea'
       BusinessArea,
       _BusinessArea,
       @ObjectModel.foreignKey.association: '_ControllingArea'
       ControllingArea,
       _ControllingArea,
       //--[ GENERATED:012:29JlHNUf7jY4oS0yl5vKTW
       @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_CostCenterStdVH',
                      element: 'CostCenter' },
           additionalBinding: [{ localElement: 'ControllingArea',
                                 element: 'ControllingArea' }]
         }]
       // ]--GENERATED
       @ObjectModel.foreignKey.association: null
       CostCenter,
       //       _CostCenter,
       @ObjectModel.foreignKey.association: '_OrganizationalUnit'
       cast( OrganizationalUnit as ehfnd_org_unit_id preserving type )               as OrganizationalUnit,
       _OrganizationalUnit,
       @ObjectModel.foreignKey.association: '_StorageLocation'
       StorageLocation,
       _StorageLocation,
       @ObjectModel.foreignKey.association: '_EHSLocationAuthGroup'
       cast( EHSLocationAuthorizationGroup as ehfnd_loc_auth_group preserving type ) as EHSLocationAuthorizationGroup,
       _EHSLocationAuthGroup,
       @ObjectModel.foreignKey.association: '_Country'
       Country,
       _Country,
       @ObjectModel.foreignKey.association: '_Region'
       Region,
       _Region,
       CityName,

       StreetName,

       PostalCode,
       EHSLocationPhone,

       //--[ GENERATED:012:29JlHNUf7jY4oS0yl5vKTW
       @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_EquipmentStdVH',
                      element: 'Equipment' }
         }]
       // ]--GENERATED
       @ObjectModel.foreignKey.association: '_Equipment'
       Equipment,
       _Equipment,
       //--[ GENERATED:012:29JlHNUf7jY4oS0yl5vKTW
       @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_FunctionalLocationStdVH',
                      element: 'FunctionalLocation' }
         }]
       // ]--GENERATED
       @ObjectModel.foreignKey.association: '_FunctionalLocation'
       EHSFunctionalLocation                                                         as FunctionalLocation,
       @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
       _FunctionalLocation,

       _EHSLocationRevisionName,
       _EHSLocationStorageLocation,
       _EHSLocationBuilding,
       _EHSLocRespTechnician,
       _CostCenter
}
```
