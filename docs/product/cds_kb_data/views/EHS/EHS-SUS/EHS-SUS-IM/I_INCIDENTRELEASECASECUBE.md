---
name: I_INCIDENTRELEASECASECUBE
description: "This CDS view provides access to data on incidents of group Release, such as their total number, the type and size of release, and the date, time, and location of the incident. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTRELEASECASECUBE')/$value
semantic_en: "This CDS view provides access to data on incidents of group Release, such as their total number, the type and size of release, and the date, time, and location of the incident. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Incident Release - Cube — CDS view giao diện dựa trên I_IncidentWithTime."
keywords:
  - "incident"
  - "release"
  - "cube"
  - "title"
  - "status"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
---
# I_INCIDENTRELEASECASECUBE

**This CDS view provides access to data on incidents of group Release, such as their total number, the type and size of release, and the date, time, and location of the incident. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTRELEASECASECUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentReleaseUUID` | ✓ | |  |  | `RAW(16)` | NodeID |
| `IncidentUUID` |  | |  |  | `RAW(16)` | Incident UUID |
| `IncidentID` |  | |  |  | `CHAR(20)` | Incident ID |
| `IncidentTitle` |  | |  |  | `CHAR(80)` | Incident Title |
| `IncidentStatus` |  | |  |  | `CHAR(2)` | Incident Status |
| `IncidentCategory` |  | |  |  | `CHAR(3)` | Incident Category |
| `IncidentMajorRootCause` |  | |  |  | `CHAR(21)` | Major Root Cause |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region of Incident |
| `Region` |  | |  |  | `CHAR(3)` | Region of Incident |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `OrganizationalUnit` |  | |  |  | `NUMC(8)` | Organizational Unit ID |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSLocationID` |  | |  | `cast(EHSLocationID as ehfnd_loc_id)` | `CHAR(20)` | Location ID |
| `IncidentDate` |  | |  |  | `DATS(8)` | Incident Start Date |
| `IncidentMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `IncidentYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `IncidentYearQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `IncidentYearMonth` |  | |  |  | `NUMC(6)` | Year Month |
| `IncidentWeekDay` |  | |  |  | `NUMC(1)` | Week Day |
| `IncidentTimeIsUnknown` |  | |  |  | `CHAR(1)` | Time Unknown for Incident Start |
| `IncidentTime` |  | |  |  | `TIMS(6)` | Field of type TIMS |
| `IncidentHour` |  | |  |  | `CHAR(2)` | Hour |
| `IncidentHasAccessRestriction` |  | |  |  | `CHAR(1)` | Restricted Access to Incident Record |
| `IncidentReleaseType` |  | |  |  | `CHAR(21)` | Release Type |
| `IncidentReleaseSize` |  | |  |  | `CHAR(21)` | Release Size |
| `NumberOfReleaseCases` |  | |  | `cast(1 as ehhss_number_release_cases)` | `INT4(10)` | Number of Release-Related Cases |
| `_EHSLocation` | | ✓ | | | | |
| `_EHSLocationGeoPoint` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EHSLocation` | `I_EHSLocation` | [0..*] |
| `_EHSLocationGeoPoint` | `I_EHSLocationGeoPoint` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTRELEASECASECUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTRELEASECASECUBE')/$value)*

```abap
@EndUserText.label: 'Incident Release - Cube'
@Analytics.dataCategory: #CUBE
@VDM.viewType: #COMPOSITE
@AccessControl:{ authorizationCheck: #CHECK }

@AbapCatalog.sqlViewName: 'IINCRELEASECUBE'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #D, sizeCategory: #L, dataClass: #MIXED}
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

define view I_IncidentReleaseCaseCube
  as select from I_IncidentWithTime as incwithtime
    inner join   I_IncidentRelease  as rel on rel.IncidentUUID = incwithtime.IncidentUUID

  association [0..*] to I_EHSLocation as _EHSLocation on $projection.EHSLocationUUID = _EHSLocation.EHSLocationUUID
  association [1..*] to I_EHSLocationGeoPoint        as _EHSLocationGeoPoint        on $projection.EHSLocationID = _EHSLocationGeoPoint.EHSLocationID

{
  key IncidentReleaseUUID,

      incwithtime.IncidentUUID,
      incwithtime.IncidentID,
      incwithtime.IncidentTitle,
      @ObjectModel.foreignKey.association: '_IncidentStatus'
      incwithtime.IncidentStatus,
      incwithtime._IncidentStatus,
      @ObjectModel.foreignKey.association: '_IncidentCategory'
      incwithtime.IncidentCategory,
      incwithtime._IncidentCategory,
      @ObjectModel.foreignKey.association: '_IncidentMajorRootCause'
      incwithtime.IncidentMajorRootCause,
      incwithtime._IncidentMajorRootCause,
      @ObjectModel.foreignKey.association: '_Country'
      incwithtime.Country,
      incwithtime._Country,
      @ObjectModel.foreignKey.association: '_Region'
      incwithtime.Region,
      incwithtime._Region,
      @ObjectModel.foreignKey.association: '_Plant'
      incwithtime.Plant,
      incwithtime._Plant,

      incwithtime.OrganizationalUnit,

      @ObjectModel.foreignKey.association: '_EHSLocation'
      incwithtime.EHSLocationUUID,
      _EHSLocation,
      
      @ObjectModel.foreignKey.association: '_EHSLocationGeoPoint'
      cast(EHSLocationID as ehfnd_loc_id) as EHSLocationID,
      _EHSLocationGeoPoint,
      
      incwithtime._CurrentEHSParentLocationID,
      

      incwithtime._IncidentBasicInfo,
      
      incwithtime.IncidentDate,
      incwithtime._CalendarDate,

      @ObjectModel.foreignKey.association: '_CalendarMonth'
      incwithtime.IncidentMonth,
      incwithtime._CalendarMonth,

      @ObjectModel.foreignKey.association: '_CalendarYear'
      incwithtime.IncidentYear,
      incwithtime._CalendarYear,
      
      @ObjectModel.foreignKey.association: '_CalendarQuarter'
      incwithtime.IncidentYearQuarter,
      incwithtime._CalendarQuarter,
      
      @ObjectModel.foreignKey.association: '_YearMonth'
      incwithtime.IncidentYearMonth,
      incwithtime._YearMonth,

      @ObjectModel.foreignKey.association: '_WeekDay'
      incwithtime.IncidentWeekDay,
      incwithtime._WeekDay,

      incwithtime.IncidentTimeIsUnknown,

      incwithtime.IncidentTime,

      @ObjectModel.foreignKey.association: '_IncidentHour'
      incwithtime.IncidentHour,
      incwithtime._IncidentHour,

      incwithtime.IncidentHasAccessRestriction,

      @ObjectModel.foreignKey.association: '_IncidentReleaseType'
      rel.IncidentReleaseType,
      rel._IncidentReleaseType,

      @ObjectModel.foreignKey.association: '_IncidentReleaseSize'
      rel.IncidentReleaseSize,
      rel._IncidentReleaseSize,

      @DefaultAggregation: #SUM
      cast(1 as ehhss_number_release_cases) as NumberOfReleaseCases
      
}
```
