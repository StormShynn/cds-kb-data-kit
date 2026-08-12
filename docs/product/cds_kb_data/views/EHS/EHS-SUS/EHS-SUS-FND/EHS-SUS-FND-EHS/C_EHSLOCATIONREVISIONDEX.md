---
name: C_EHSLOCATIONREVISIONDEX
description: "This CDS view supports the extraction of data for the revisions of an EHS location for further use, such as filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can location revision data be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONREVISIONDEX')/$value
semantic_en: "This CDS view supports the extraction of data for the revisions of an EHS location for further use, such as filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can location revision data be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Location Revision — CDS view tiêu dùng dựa trên I_EHSLocationRevisionBasic."
keywords:
  - "ehs"
  - "location"
  - "revision"
  - "start"
  - "date"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - transaction
---
# C_EHSLOCATIONREVISIONDEX

**This CDS view supports the extraction of data for the revisions of an EHS location for further use, such as filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can location revision data be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONREVISIONDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationRevisionUUID` | ✓ | |  |  | `RAW(16)` | EHS Location - Revision UUID |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `RevisionStartDate` |  | |  |  | `DATS(8)` | Revision Start Date |
| `RevisionEndDate` |  | |  |  | `DATS(8)` | Revision End Date |
| `EHSLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `EHSLocationType` |  | |  |  | `CHAR(21)` | Location Type |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `OrganizationalUnit` |  | |  |  | `NUMC(8)` | Organizational Unit ID |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `EHSLocationStatus` |  | |  |  | `CHAR(2)` | Location Status |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `LocationMigrationSource` |  | |  |  | `CHAR(60)` | Migration Source |
| `EHSLocationAuthorizationGroup` |  | |  |  | `CHAR(21)` | Location Authorization Group |
| `_EHSLocationName` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EHSLocationName` | `I_EHSLocationName` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONREVISIONDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONREVISIONDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'EHS Location Revision'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #B,
  sizeCategory: #M,
  dataClass: #MASTER
}
@ObjectModel: { modelingPattern: #NONE,
                supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ] }
@ObjectModel.sapObjectNodeType.name: 'EHSLocationRevision'
@VDM.viewType: #CONSUMPTION
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [{
        table: 'ehfndd_loc_rev',
        role: #MAIN,
        viewElement: ['EHSLocationRevisionUUID'],
        tableElement: ['db_key']
      }, {
        table: 'ehfndd_loc_root',
        role: #LEFT_OUTER_TO_ONE_JOIN,
        viewElement: ['EHSLocationUUID'],
        tableElement: ['db_key']
      }]
    }
  }
}
@Metadata.allowExtensions: true
define view entity C_EHSLocationRevisionDEX
  as select from           I_EHSLocationRevisionBasic as EHSLocationRevisionBasic
    left outer to one join I_EHSLocationRoot     as EHSLocationRoot on EHSLocationRevisionBasic.EHSLocationUUID = EHSLocationRoot.EHSLocationUUID
association [1..*] to I_EHSLocationName as _EHSLocationName on  $projection.EHSLocationRevisionUUID = _EHSLocationName.EHSLocationRevisionUUID
                                                                                and $projection.EHSLocationUUID         = _EHSLocationName.EHSLocationUUID
{
  // Name and parent cannot be provided
      @EndUserText.label: 'Location Revision Key'
  key EHSLocationRevisionBasic.EHSLocationRevisionUUID,
      @EndUserText.label: 'Location Key'
      EHSLocationRoot.EHSLocationUUID,
      EHSLocationRevisionBasic.RevisionStartDate,
      EHSLocationRevisionBasic.RevisionEndDate,
      EHSLocationRoot.EHSLocationID,
      EHSLocationRevisionBasic.EHSLocationType,
       @EndUserText.label: 'Country'
      EHSLocationRevisionBasic.Country,
      EHSLocationRevisionBasic.Region,
      EHSLocationRevisionBasic.Plant,
      EHSLocationRevisionBasic.CostCenter,
      EHSLocationRevisionBasic.CompanyCode,
      EHSLocationRevisionBasic.OrganizationalUnit,
      EHSLocationRevisionBasic.ControllingArea,
      EHSLocationRevisionBasic.EHSLocationStatus,
      EHSLocationRevisionBasic.BusinessArea,
      @EndUserText.label: 'Migration Source'
      EHSLocationRoot.LocationMigrationSource,

      // Required for DCL
      @Consumption.hidden: true
      EHSLocationRevisionBasic.EHSLocationAuthorizationGroup,
      
      _EHSLocationName
}
```
