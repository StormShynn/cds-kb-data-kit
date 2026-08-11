---
name: I_INCIDENTTIMEDATA
description: "This CDS view retrieves information about the time period of work absences and restrictions. This CDS view provides the data to answer the following business questions: What's the average length of work absences or restrictions due to incidents in my organization? Which incidents have injured persons with a permanent restriction? Which incidents have injured persons with a permanent absence? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTTIMEDATA')/$value
semantic_en: "This CDS view retrieves information about the time period of work absences and restrictions. This CDS view provides the data to answer the following business questions: What's the average length of work absences or restrictions due to incidents in my organization? Which incidents have injured persons with a permanent restriction? Which incidents have injured persons with a permanent absence? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Absence Data of an Injured Person — CDS view giao diện dựa trên ehhssd_inc_tidat."
keywords:
  - "absence"
  - "data"
  - "injured"
  - "person"
  - "incident"
  - "time"
  - "info"
  - "creation"
  - "date"
  - "created"
  - "user"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - bo:salesorder
---
# I_INCIDENTTIMEDATA

**This CDS view retrieves information about the time period of work absences and restrictions. This CDS view provides the data to answer the following business questions: What's the average length of work absences or restrictions due to incidents in my organization? Which incidents have injured persons with a permanent restriction? Which incidents have injured persons with a permanent absence? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTTIMEDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentTimeDataUUID` | ✓ | |  | `db_key` | `RAW(16)` | NodeID |
| `IncidentUUID` |  | |  | `cast(root_key as ehhss_incident_uuid preserving type)` | `RAW(16)` | Incident UUID |
| `InjuredPersonInfoUUID` |  | |  | `cast(parent_key as ehhss_person_injured_info_uuid preserving type)` | `RAW(16)` | Injured Person Information UUID |
| `CreationDateTime` |  | |  | `cast(datetime_cr as ehfnd_datetime_cr preserving type)` | `DEC(15)` | Object Created On/At |
| `CreatedByUser` |  | |  | `user_id_cr` | `CHAR(12)` | Object Created By |
| `LastChangeDateTime` |  | |  | `cast(datetime_ch as ehfnd_datetime_ch preserving type)` | `DEC(15)` | Object Changed On/At |
| `LastChangedByUser` |  | |  | `user_id_ch` | `CHAR(12)` | Object Changed By |
| `NmbrOfCalendarDaysAwayFromWork` |  | |  | `a_cal_d_meas` | `INT4(10)` | Actual Calendar Days of Absence |
| `CaseHasPermanentAbsences` |  | |  | `perm_abs_ex_ind` | `CHAR(1)` | Permanent Absence Exists |
| `NmbrOfRstrcdAndTransfCalDays` |  | |  | `d_res_cal_d_meas` | `INT4(10)` | Actual Calendar Days of Restricted Duty |
| `CaseHasPermanentRestrictions` |  | |  | `perm_rest_ex_ind` | `CHAR(1)` | Permanent Restriction Exists |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_CaseHasPermanentAbsences` | | ✓ | | | | |
| `_CaseHasPermanentRestrictions` | | ✓ | | | | |
| `_Incident` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreatedByUser` | `I_User` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_CaseHasPermanentAbsences` | `I_Indicator` | [1..1] |
| `_CaseHasPermanentRestrictions` | `I_Indicator` | [1..1] |
| `_Incident` | `I_Incident` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTTIMEDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTTIMEDATA')/$value)*

```abap
@EndUserText.label: 'Absence Data of an Injured Person'
@Analytics.dataExtraction.enabled: true

@VDM.viewType: #BASIC

@ObjectModel.representativeKey: 'IncidentTimeDataUUID'
@AccessControl: { authorizationCheck: #CHECK,
                  privilegedAssociations: ['_CreatedByUser', '_LastChangedByUser'] }

@AbapCatalog.sqlViewName: 'IINCTIDAT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL}

// #NOT_REQUIRED because of existing end of purpose check
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'EHSIncidentTimeData'

define view I_IncidentTimeData
  as select from ehhssd_inc_tidat
  association [0..1] to I_User      as _CreatedByUser                on $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User      as _LastChangedByUser            on $projection.LastChangedByUser = _LastChangedByUser.UserID
  association [1..1] to I_Indicator as _CaseHasPermanentAbsences     on $projection.CaseHasPermanentAbsences = _CaseHasPermanentAbsences.IndicatorValue
  association [1..1] to I_Indicator as _CaseHasPermanentRestrictions on $projection.CaseHasPermanentRestrictions = _CaseHasPermanentRestrictions.IndicatorValue
  association [1..1] to I_Incident  as _Incident                     on $projection.IncidentUUID = _Incident.IncidentUUID

{
  key db_key                                                             as IncidentTimeDataUUID,

      cast(root_key as ehhss_incident_uuid preserving type)              as IncidentUUID,
      cast(parent_key as ehhss_person_injured_info_uuid preserving type) as InjuredPersonInfoUUID,

      // Admin data
      cast(datetime_cr as ehfnd_datetime_cr preserving type)             as CreationDateTime,
      user_id_cr                                                         as CreatedByUser,
      _CreatedByUser,
      cast(datetime_ch as ehfnd_datetime_ch preserving type)             as LastChangeDateTime,
      user_id_ch                                                         as LastChangedByUser,
      _LastChangedByUser,

      a_cal_d_meas                                                       as NmbrOfCalendarDaysAwayFromWork,

      @ObjectModel.foreignKey.association: '_CaseHasPermanentAbsences'
      perm_abs_ex_ind                                                    as CaseHasPermanentAbsences,
      _CaseHasPermanentAbsences,

      d_res_cal_d_meas                                                   as NmbrOfRstrcdAndTransfCalDays,

      @ObjectModel.foreignKey.association: '_CaseHasPermanentRestrictions'
      perm_rest_ex_ind                                                   as CaseHasPermanentRestrictions,
      _CaseHasPermanentRestrictions,
      _Incident
}
```
