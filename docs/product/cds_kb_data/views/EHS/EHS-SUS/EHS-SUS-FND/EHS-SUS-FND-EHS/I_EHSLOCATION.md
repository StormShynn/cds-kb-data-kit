---
name: I_EHSLOCATION
description: "This CDS view retrieves details about the current (most recent) location revision. This CDS view provides the data to answer the following business questions: What's the status of my current location revision? What about the location type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATION')/$value
semantic_en: "This CDS view retrieves details about the current (most recent) location revision. This CDS view provides the data to answer the following business questions: What's the status of my current location revision? What about the location type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Location — CDS view giao diện (master data) dựa trên I_EHSLocationRevision."
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
# I_EHSLOCATION

**This CDS view retrieves details about the current (most recent) location revision. This CDS view provides the data to answer the following business questions: What's the status of my current location revision? What about the location type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATION')/$value) |

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
| `EHSLocationType` |  | |  |  | `CHAR(21)` | Location Type |
| `EHSLocationStatus` |  | |  |  | `CHAR(2)` | Location Status |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `EHSLocationPhone` |  | |  |  | `CHAR(30)` | Telephone Number |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `OrganizationalUnit` |  | |  |  | `NUMC(8)` | Organizational Unit ID |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `EHSLocationAuthorizationGroup` |  | |  |  | `CHAR(21)` | Location Authorization Group |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region |
| `CityName` |  | |  |  | `CHAR(40)` | City |
| `StreetName` |  | |  |  | `CHAR(60)` | Street Address |
| `PostalCode` |  | |  |  | `CHAR(10)` | City Postal Code |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment |
| `FunctionalLocation` |  | |  |  | `CHAR(40)` | Functional Location ID |
| `Latitude` |  | |  |  | `DEC(15)` | Geographic Latitude |
| `Longitude` |  | |  |  | `DEC(15)` | Geographic Longitude |
| `EHSLocationID` |  | | `_EHSLocationRoot` | `EHSLocationID` | `CHAR(20)` | Location ID |
| `_EHSLocationHierarchy` | | ✓ | | | | |
| `_EHSLocationRoot` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EHSLocationHierarchy` | `I_EHSLocationHierarchy` | [0..*] |
| `_EHSLocationRoot` | `I_EHSLocationRoot` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATION')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILOCATION',
    compiler.compareFilter: true
}
@EndUserText.label: 'EHS Location'
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.privilegedAssociations: [ '_CreatedByUser', '_EHSLocationHierarchy', '_OrganizationalUnit', '_LastChangedByUser' ]
@Analytics: { dataCategory:#DIMENSION , dataExtraction.enabled:true }
@VDM.viewType: #BASIC --#COMPOSITE
@ObjectModel:{
    representativeKey: 'EHSLocationUUID',
    // used for BOBF Master Data Object
    usageType:{ serviceQuality: #A,       
                sizeCategory:  #M,         // < 100.000
                dataClass: #MASTER },
                modelingPattern: #NONE
  }

@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET]
@Metadata.ignorePropagatedAnnotations: true

// Client handling by session
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions:true
// Begin correction 2765428 - 07.03.2019  **************************
@Consumption.filter.businessDate.at: true
// End correction 2765428 - 07.03.2019  ****************************
@ObjectModel.sapObjectNodeType.name: 'EHSLocation'


define view I_EHSLocation
  as select from I_EHSLocationRevision
  association [0..*] to I_EHSLocationHierarchy as _EHSLocationHierarchy on $projection.EHSLocationUUID = _EHSLocationHierarchy.EHSLocationUUID
  association [1..1] to I_EHSLocationRoot      as _EHSLocationRoot      on $projection.EHSLocationUUID = _EHSLocationRoot.EHSLocationUUID
{
      @ObjectModel.hierarchy.association: '_EHSLocationHierarchy'
      @ObjectModel.text.association: '_EHSLocationRevisionName'
  key I_EHSLocationRevision.EHSLocationUUID,

      @Semantics.businessDate.to
  key I_EHSLocationRevision.RevisionEndDate,


      @Semantics.businessDate.from
      I_EHSLocationRevision.RevisionStartDate,
      I_EHSLocationRevision.EHSLocationRevisionUUID,

      @Semantics.systemDateTime.createdAt
      I_EHSLocationRevision.CreationDateTime,
      @Semantics.user.createdBy
      I_EHSLocationRevision.CreatedByUser,
      @Semantics.systemDateTime.lastChangedAt
      I_EHSLocationRevision.LastChangeDateTime,
      @Semantics.user.lastChangedBy
      I_EHSLocationRevision.LastChangedByUser,

      I_EHSLocationRevision.EHSLocationType,
      I_EHSLocationRevision.EHSLocationStatus,
      I_EHSLocationRevision.Plant,
      I_EHSLocationRevision.EHSLocationPhone,
      
      //--[ GENERATED:012:29JlHNUf7jY4oS0yl5vKTW
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      // ]--GENERATED
      I_EHSLocationRevision.CompanyCode,
      //--[ GENERATED:012:29JlHNUf7jY4oS0yl5vKTW
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_BusinessAreaStdVH',
                     element: 'BusinessArea' }
        }]
      // ]--GENERATED
      I_EHSLocationRevision.BusinessArea,
      //--[ GENERATED:012:29JlHNUf7jY4oS0yl5vKTW
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CostCenterStdVH',
                     element: 'CostCenter' },
          additionalBinding: [{ localElement: 'ControllingArea',
                                element: 'ControllingArea' }]
        }]
      // ]--GENERATED
      I_EHSLocationRevision.CostCenter,
      I_EHSLocationRevision.ControllingArea,
      I_EHSLocationRevision.OrganizationalUnit,
      I_EHSLocationRevision.StorageLocation,
      I_EHSLocationRevision.EHSLocationAuthorizationGroup,
      I_EHSLocationRevision.Country,
      I_EHSLocationRevision.Region,
      I_EHSLocationRevision.CityName,
      I_EHSLocationRevision.StreetName,
      I_EHSLocationRevision.PostalCode,

      //--[ GENERATED:012:29JlHNUf7jY4oS0yl5vKTW
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_EquipmentStdVH',
                     element: 'Equipment' }
        }]
      // ]--GENERATED
      I_EHSLocationRevision.Equipment,
      //--[ GENERATED:012:29JlHNUf7jY4oS0yl5vKTW
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_FunctionalLocationStdVH',
                     element: 'FunctionalLocation' }
        }]
      // ]--GENERATED
      I_EHSLocationRevision.FunctionalLocation,

      I_EHSLocationRevision.Latitude,
      I_EHSLocationRevision.Longitude,

      _EHSLocationRoot.EHSLocationID,

      /* Associations */
      I_EHSLocationRevision._BusinessArea,
      I_EHSLocationRevision._CompanyCode,
      I_EHSLocationRevision._ControllingArea,
      I_EHSLocationRevision._OrganizationalUnit,
      I_EHSLocationRevision._StorageLocation,
      //        I_EHSLocationRevision._CostCenter,
      I_EHSLocationRevision._Country,
      I_EHSLocationRevision._CreatedByUser,
      I_EHSLocationRevision._EHSLocationRevisionName,
      I_EHSLocationRevision._EHSLocationAuthGroup,
      I_EHSLocationRevision._EHSLocationStatus,
      I_EHSLocationRevision._EHSLocationType,
      I_EHSLocationRevision._LastChangedByUser,
      I_EHSLocationRevision._Plant,
      I_EHSLocationRevision._Region,
      I_EHSLocationRevision._Equipment,
      I_EHSLocationRevision._FunctionalLocation,
      _EHSLocationRoot,
      _EHSLocationHierarchy
      //        ,
      //        _EHSLocationHierarchy.EHSLocHierarchyUUID,
      //        _EHSLocationHierarchy._EHSLocationHierarchyRevision
}
where
       I_EHSLocationRevision.RevisionStartDate <= $session.system_date
  and  I_EHSLocationRevision.RevisionEndDate   >= $session.system_date // consider current location revisions only
```
