---
name: I_INCIDENTGROUPCUBE
description: "This CDS view provides access to data on incidents of all categories, such as the total number of records per incident group and the status, date, time, and location of each incident. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTGROUPCUBE')/$value
semantic_en: "This CDS view provides access to data on incidents of all categories, such as the total number of records per incident group and the status, date, time, and location of each incident. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Incident Group - Cube — CDS view giao diện dựa trên I_IncidentWithTime."
keywords:
  - "incident"
  - "group"
  - "cube"
  - "code"
  - "near"
  - "miss"
  - "safety"
  - "observation"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
---
# I_INCIDENTGROUPCUBE

**This CDS view provides access to data on incidents of all categories, such as the total number of records per incident group and the status, date, time, and location of each incident. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTGROUPCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentUUID` | ✓ | |  |  | `RAW(16)` | Incident UUID |
| `IncidentGroupUUID` | ✓ | | `_IncidentGroup` | `IncidentGroupUUID` | `RAW(16)` | NodeID |
| `IncidentGroupCode` |  | | `_IncidentGroup` | `IncidentGroupCode` | `CHAR(21)` | Incident Group |
| `NearMissGroupCode` |  | | `_IncidentGroup` | `NearMissGroupCode` | `CHAR(21)` | Near Miss Group |
| `SafetyObservationGroupCode` |  | | `_IncidentGroup` | `SafetyObservationGroupCode` | `CHAR(21)` | Safety Observation Group |
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
| `EHSIncidentGroupSeverity` |  | | `_IncidentGroup` | `EHSIncidentGroupSeverity` | `CHAR(21)` | Severity Level Code |
| `IncidentHour` |  | |  |  | `CHAR(2)` | Hour |
| `IncidentInjuryIllnLogType` |  | |  |  | `CHAR(50)` | Injury/Illness Log Entry Type |
| `IncidentHasAccessRestriction` |  | |  |  | `CHAR(1)` | Restricted Access to Incident Record |
| `NumberOfIncidentRecords` |  | |  | `cast( case IncidentCategory when '001' then 1 else 0 end as ehhss_number_incident_records)` | `INT4(10)` | Number of Incident Records |
| `NumberOfNearMissRecords` |  | |  | `cast( case IncidentCategory when '002' then 1 else 0 end as ehhss_number_near_miss_records)` | `INT4(10)` | Number of Near Miss Records |
| `NumberOfSftyObservationRecords` |  | |  | `cast( case IncidentCategory when '003' then 1 else 0 end as ehhss_number_sfty_obs_records)` | `INT4(10)` | Number of Safety Observation Records |
| `NumberOfInjryIllnLogRecords` |  | |  | `cast( case IncidentCategory when '004' then 1 else 0 end as ehhss_number_inj_log_records)` | `INT4(10)` | Number of Injury/Illness Log Records |
| `_EHSLocation` | | ✓ | | | | |
| `_EHSLocationGeoPoint` | | ✓ | | | | |
| `_IncidentStatus` | | ✓ | | | | |
| `_IncidentCategory` | | ✓ | | | | |
| `_IncidentMajorRootCause` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_CurrentEHSParentLocationID` | | ✓ | | | | |
| `_CalendarDate` | | ✓ | | | | |
| `_CalendarMonth` | | ✓ | | | | |
| `_CalendarYear` | | ✓ | | | | |
| `_CalendarQuarter` | | ✓ | | | | |
| `_YearMonth` | | ✓ | | | | |
| `_WeekDay` | | ✓ | | | | |
| `_IncidentHour` | | ✓ | | | | |
| `_IncidentInjryIllnLogType` | | ✓ | | | | |
| `_IncidentBasicInfo` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EHSLocation` | `I_EHSLocation` | [0..*] |
| `_IncidentGroup` | `I_IncidentGroup` | [0..*] |
| `_EHSLocationGeoPoint` | `I_EHSLocationGeoPoint` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTGROUPCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTGROUPCUBE')/$value)*

```abap
@EndUserText.label: 'Incident Group - Cube'
@Analytics.dataCategory: #CUBE
@VDM.viewType: #COMPOSITE
@AccessControl:{ authorizationCheck: #CHECK }

@AbapCatalog.sqlViewName: 'IINCGROUPCUBE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #D, sizeCategory: #XL, dataClass: #MIXED}
@Metadata.allowExtensions:true

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

define view I_IncidentGroupCube
  as select from I_IncidentWithTime

  association [0..*] to I_EHSLocation   as _EHSLocation   on $projection.EHSLocationUUID = _EHSLocation.EHSLocationUUID
  association [0..*] to I_IncidentGroup as _IncidentGroup on $projection.IncidentUUID = _IncidentGroup.IncidentUUID
  association [1..*] to I_EHSLocationGeoPoint as _EHSLocationGeoPoint        on $projection.EHSLocationID = _EHSLocationGeoPoint.EHSLocationID

{

  key I_IncidentWithTime.IncidentUUID,
  key _IncidentGroup.IncidentGroupUUID,

      @ObjectModel.foreignKey.association: '_IncidentGroupCode'
      _IncidentGroup.IncidentGroupCode,
      _IncidentGroup._IncidentGroupCode,
      @ObjectModel.foreignKey.association: '_NearMissGroupCode'
      _IncidentGroup.NearMissGroupCode,
      _IncidentGroup._NearMissGroupCode,
      @ObjectModel.foreignKey.association: '_SafetyObservationGroupCode'
      _IncidentGroup.SafetyObservationGroupCode,
      _IncidentGroup._SafetyObservationGroupCode, 

      IncidentID,
      IncidentTitle,

      @ObjectModel.foreignKey.association: '_IncidentStatus'
      IncidentStatus,
      _IncidentStatus,
      @ObjectModel.foreignKey.association: '_IncidentCategory'
      IncidentCategory,
      _IncidentCategory,
      @ObjectModel.foreignKey.association: '_IncidentMajorRootCause'
      IncidentMajorRootCause,
      _IncidentMajorRootCause,
      @ObjectModel.foreignKey.association: '_Country'
      Country,
      _Country,
      @ObjectModel.foreignKey.association: '_Region'
      Region,
      _Region,
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
      _Plant,
      //@ObjectModel.foreignKey.association: '_OrgUnit'
      OrganizationalUnit,
      //_OrgUnit,
      @ObjectModel.foreignKey.association: '_EHSLocation'
      //@Consumption.valueHelpDefinition: [{ entity: { name: 'I_EHSLocationValueHelp', element: 'EHSLocationUUID' }}]
      EHSLocationUUID,

      @ObjectModel.foreignKey.association: '_EHSLocationGeoPoint'
      cast(EHSLocationID as ehfnd_loc_id) as EHSLocationID,
      _EHSLocationGeoPoint,
      
      _EHSLocation,
      _CurrentEHSParentLocationID,

      IncidentDate,
      _CalendarDate,

      @ObjectModel.foreignKey.association: '_CalendarMonth'
      IncidentMonth,
      _CalendarMonth,

      @ObjectModel.foreignKey.association: '_CalendarYear'
      IncidentYear,
      _CalendarYear,
      
      @ObjectModel.foreignKey.association: '_CalendarQuarter'
      IncidentYearQuarter,
      _CalendarQuarter,
      
      @ObjectModel.foreignKey.association: '_YearMonth'
      IncidentYearMonth,
      _YearMonth,

      @ObjectModel.foreignKey.association: '_WeekDay'
      IncidentWeekDay,
      _WeekDay,

     // @ObjectModel.foreignKey.association: '_IncidentTimeIsUnknown'
      IncidentTimeIsUnknown,
     // _IncidentTimeIsUnknown,

      IncidentTime,

      @ObjectModel.text.association: '_IncidentGroupSeverityText'
      _IncidentGroup.EHSIncidentGroupSeverity,
      _IncidentGroup._IncidentGroupSeverityText,

      @ObjectModel.foreignKey.association: '_IncidentHour'
      IncidentHour,
      _IncidentHour,

      @ObjectModel.foreignKey.association:  '_IncidentInjryIllnLogType'
      IncidentInjuryIllnLogType,
     _IncidentInjryIllnLogType,

      //@ObjectModel.foreignKey.association: '_IncidentHasAccessRestriction'
      IncidentHasAccessRestriction,
      //_IncidentHasAccessRestriction,

      @DefaultAggregation: #SUM
      cast( // key figure Category Incident
           case IncidentCategory when '001' then 1 else 0 end
           as ehhss_number_incident_records)                    as NumberOfIncidentRecords,

      @DefaultAggregation: #SUM
      cast( // key figure Category Near Miss
           case IncidentCategory when '002' then 1 else 0 end
           as ehhss_number_near_miss_records)                   as NumberOfNearMissRecords,

      @DefaultAggregation: #SUM
      cast( // key figure Category Safety Observation
           case IncidentCategory when '003' then 1 else 0 end
           as ehhss_number_sfty_obs_records)                    as NumberOfSftyObservationRecords,

      @DefaultAggregation: #SUM
      cast( // key figure Category Injury/Illness Log
           case IncidentCategory when '004' then 1 else 0 end
           as ehhss_number_inj_log_records)                     as NumberOfInjryIllnLogRecords,
             
    _IncidentBasicInfo


}
```
