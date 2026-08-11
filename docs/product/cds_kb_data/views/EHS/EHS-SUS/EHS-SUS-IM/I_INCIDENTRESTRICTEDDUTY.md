---
name: I_INCIDENTRESTRICTEDDUTY
description: "This CDS view retrieves information about work absences and restrictions of an injured person in an incident. This CDS view provides the data to answer the following business questions: How many incidents in the system led to a work absence or restriction of the injured person? For what period? How many of the restrictions are also job transfers? Which incidents have an injured person with a permanent work absence or restriction? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTRESTRICTEDDUTY')/$value
semantic_en: "This CDS view retrieves information about work absences and restrictions of an injured person in an incident. This CDS view provides the data to answer the following business questions: How many incidents in the system led to a work absence or restriction of the injured person? For what period? How many of the restrictions are also job transfers? Which incidents have an injured person with a permanent work absence or restriction? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Restricted Duty of an Injured Person — CDS view giao diện dựa trên ehhssd_inc_resdu."
keywords:
  - "restricted"
  - "duty"
  - "injured"
  - "person"
  - "incident"
  - "info"
  - "creation"
  - "date"
  - "time"
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
# I_INCIDENTRESTRICTEDDUTY

**This CDS view retrieves information about work absences and restrictions of an injured person in an incident. This CDS view provides the data to answer the following business questions: How many incidents in the system led to a work absence or restriction of the injured person? For what period? How many of the restrictions are also job transfers? Which incidents have an injured person with a permanent work absence or restriction? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTRESTRICTEDDUTY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RestrictedDutyUUID` | ✓ | |  | `db_key` | `RAW(16)` | Restricted Duty UUID |
| `IncidentUUID` |  | |  | `cast(root_key as ehhss_incident_uuid preserving type)` | `RAW(16)` | Incident UUID |
| `InjuredPersonInfoUUID` |  | |  | `cast(parent_key as ehhss_person_injured_info_uuid preserving type)` | `RAW(16)` | Injured Person Information UUID |
| `CreationDateTime` |  | |  | `cast(datetime_cr as ehfnd_datetime_cr preserving type)` | `DEC(15)` | Object Created On/At |
| `CreatedByUser` |  | |  | `user_id_cr` | `CHAR(12)` | Object Created By |
| `LastChangeDateTime` |  | |  | `cast(datetime_ch as ehfnd_datetime_ch preserving type)` | `DEC(15)` | Object Changed On/At |
| `LastChangedByUser` |  | |  | `user_id_ch` | `CHAR(12)` | Object Changed By |
| `RestrictedDutyCategory` |  | |  | `type` | `CHAR(3)` | Category of Restricted Duty |
| `RestrictedDutyStartDate` |  | |  | `start_date` | `DATS(8)` | Start Date of Restricted Duty |
| `RestrictedDutyEndDate` |  | |  | `end_date` | `DATS(8)` | Actual End Date of Restricted Duty |
| `RestrictedDutyEstimatedEndDate` |  | |  | `end_est_date` | `DATS(8)` | Estimated End Date of Restricted Duty |
| `RestrictedDutyInWorkDays` |  | |  | `work_day_meas` | `INT4(10)` | Actual Workdays of Restricted Duty |
| `RestrictedDutyInCalendarDays` |  | |  | `cal_day_meas` | `INT4(10)` | Actual Calendar Days of Restricted Duty |
| `RestrictedDutyIsJobTransfer` |  | |  | `job_transfer_ind` | `CHAR(1)` | Job Transfer |
| `RestrictedDutyIsPermanent` |  | |  | `permanent_ind` | `CHAR(1)` | Permanent Restricted Duty |
| `_RestrictedDutyCategory` | | ✓ | | | | |
| `_RestrictedDutyIsJobTransfer` | | ✓ | | | | |
| `_RestrictedDutyIsPermanent` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_Incident` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RestrictedDutyCategory` | `I_RestrictedDutyCategory` | [0..1] |
| `_RestrictedDutyIsJobTransfer` | `I_Indicator` | [1..1] |
| `_RestrictedDutyIsPermanent` | `I_Indicator` | [1..1] |
| `_CreatedByUser` | `I_User` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_Incident` | `I_Incident` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTRESTRICTEDDUTY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTRESTRICTEDDUTY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IINCRESDU'
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'RestrictedDutyUUID'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl: { authorizationCheck: #CHECK,
                  privilegedAssociations: ['_CreatedByUser', '_LastChangedByUser'] }
@EndUserText.label: 'Restricted Duty of an Injured Person'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL}

// #NOT_REQUIRED because of existing end of purpose check
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'EHSIncidentRestrictedDuty'

define view I_IncidentRestrictedDuty
  as select from ehhssd_inc_resdu
  association [0..1] to I_RestrictedDutyCategory as _RestrictedDutyCategory      on $projection.RestrictedDutyCategory = _RestrictedDutyCategory.RestrictedDutyCategory
  association [1..1] to I_Indicator              as _RestrictedDutyIsJobTransfer on $projection.RestrictedDutyIsJobTransfer = _RestrictedDutyIsJobTransfer.IndicatorValue
  association [1..1] to I_Indicator              as _RestrictedDutyIsPermanent   on $projection.RestrictedDutyIsPermanent = _RestrictedDutyIsPermanent.IndicatorValue
  association [0..1] to I_User                   as _CreatedByUser               on $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                   as _LastChangedByUser           on $projection.LastChangedByUser = _LastChangedByUser.UserID
  association [1..1] to I_Incident               as _Incident                    on $projection.IncidentUUID = _Incident.IncidentUUID

{
  key db_key                                                             as RestrictedDutyUUID,
      cast(root_key as ehhss_incident_uuid preserving type)              as IncidentUUID,
      cast(parent_key as ehhss_person_injured_info_uuid preserving type) as InjuredPersonInfoUUID,

      // Admin data
      cast(datetime_cr as ehfnd_datetime_cr preserving type)             as CreationDateTime,
      user_id_cr                                                         as CreatedByUser,
      _CreatedByUser,
      cast(datetime_ch as ehfnd_datetime_ch preserving type)             as LastChangeDateTime,
      user_id_ch                                                         as LastChangedByUser,
      _LastChangedByUser,


      @ObjectModel.foreignKey.association: '_RestrictedDutyCategory'
      type                                                               as RestrictedDutyCategory,
      _RestrictedDutyCategory,

      start_date                                                         as RestrictedDutyStartDate,
      end_date                                                           as RestrictedDutyEndDate,
      end_est_date                                                       as RestrictedDutyEstimatedEndDate,
      work_day_meas                                                      as RestrictedDutyInWorkDays,
      cal_day_meas                                                       as RestrictedDutyInCalendarDays,

      @ObjectModel.foreignKey.association: '_RestrictedDutyIsJobTransfer'
      job_transfer_ind                                                   as RestrictedDutyIsJobTransfer,
      _RestrictedDutyIsJobTransfer,

      @ObjectModel.foreignKey.association: '_RestrictedDutyIsPermanent'
      permanent_ind                                                      as RestrictedDutyIsPermanent,
      _RestrictedDutyIsPermanent,
      _Incident
}
```
