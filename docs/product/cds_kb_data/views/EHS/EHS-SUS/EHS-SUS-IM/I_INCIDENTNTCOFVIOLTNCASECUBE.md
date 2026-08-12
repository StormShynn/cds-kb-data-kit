---
name: I_INCIDENTNTCOFVIOLTNCASECUBE
description: "This CDS view provides access to data on incidents of group Notice of Violation, such as their total number, the category, type, and source of the notice of violation, and the date, time, and location of the incident. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTNTCOFVIOLTNCASECUBE')/$value
semantic_en: "This CDS view provides access to data on incidents of group Notice of Violation, such as their total number, the category, type, and source of the notice of violation, and the date, time, and location of the incident. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Incident Notice Of Violation - Cube — CDS view giao diện dựa trên I_IncidentWithTime."
keywords:
  - "incident"
  - "notice"
  - "violation"
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
# I_INCIDENTNTCOFVIOLTNCASECUBE

**This CDS view provides access to data on incidents of group Notice of Violation, such as their total number, the category, type, and source of the notice of violation, and the date, time, and location of the incident. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTNTCOFVIOLTNCASECUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `NoticeOfViolationUUID` | ✓ | |  |  | `RAW(16)` | NodeID |
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
| `NoticeOfViolationCategory` |  | |  |  | `CHAR(21)` | Violation Category |
| `NoticeOfViolationType` |  | |  |  | `CHAR(21)` | Violation Type |
| `NoticeOfViolationSource` |  | |  |  | `CHAR(21)` | Violation Source |
| `FinalPenaltyAmount` |  | |  |  | `CURR(15)` | Final Penalty Amount |
| `FinalPenaltyCurrency` |  | |  |  | `CUKY(5)` | Currency for Final Penalty |
| `ProposedPenaltyAmount` |  | |  |  | `CURR(15)` | Proposed Penalty Amount |
| `ProposedPenaltyCurrency` |  | |  |  | `CUKY(5)` | Currency for Proposed Penalty |
| `NumberOfNoticeOfViolationCases` |  | |  | `cast(1 as ehhss_number_noticeofviol_case)` | `INT4(10)` | Number of Notice Of Violation Cases |
| `_EHSLocation` | | ✓ | | | | |
| `_EHSLocationGeoPoint` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EHSLocation` | `I_EHSLocation` | [0..*] |
| `_EHSLocationGeoPoint` | `I_EHSLocationGeoPoint` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTNTCOFVIOLTNCASECUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTNTCOFVIOLTNCASECUBE')/$value)*

```abap
@EndUserText.label: 'Incident Notice Of Violation - Cube'
@Analytics.dataCategory: #CUBE
@VDM.viewType: #COMPOSITE
@AccessControl:{ authorizationCheck: #CHECK }

@AbapCatalog.sqlViewName: 'IINCVIOLNCUBE'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #D, sizeCategory: #L, dataClass: #MIXED}
@Metadata.allowExtensions:true

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

define view I_IncidentNtcOfVioltnCaseCube
  as select from I_IncidentWithTime          as incwithtime
    inner join   I_IncidentNoticeOfViolation as nov on incwithtime.IncidentUUID = nov.IncidentUUID

  association [0..*] to I_EHSLocation         as _EHSLocation         on $projection.EHSLocationUUID = _EHSLocation.EHSLocationUUID
  association [1..*] to I_EHSLocationGeoPoint as _EHSLocationGeoPoint on $projection.EHSLocationID = _EHSLocationGeoPoint.EHSLocationID

{
  key nov.NoticeOfViolationUUID,

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
      incwithtime._CurrentEHSParentLocationID,

      @ObjectModel.foreignKey.association: '_EHSLocationGeoPoint'
      cast(EHSLocationID as ehfnd_loc_id)       as EHSLocationID,
      _EHSLocationGeoPoint,

      _EHSLocation,

      incwithtime.IncidentDate,
      incwithtime._CalendarDate,

      incwithtime._IncidentBasicInfo,

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

      @ObjectModel.foreignKey.association: '_NoticeOfViolationCategory'
      nov.NoticeOfViolationCategory,
      nov._NoticeOfViolationCategory,

      @ObjectModel.foreignKey.association: '_NoticeOfViolationType'
      nov.NoticeOfViolationType,
      nov._NoticeOfViolationType,

      @ObjectModel.foreignKey.association: '_NoticeOfViolationSource'
      nov.NoticeOfViolationSource,
      nov._NoticeOfViolationSource,
      
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'FinalPenaltyCurrency'
      nov.FinalPenaltyAmount,
      
      nov.FinalPenaltyCurrency,
      
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'ProposedPenaltyCurrency'
      nov.ProposedPenaltyAmount,
       
      nov.ProposedPenaltyCurrency,

      @DefaultAggregation: #SUM
      cast(1 as ehhss_number_noticeofviol_case) as NumberOfNoticeOfViolationCases

}
```
