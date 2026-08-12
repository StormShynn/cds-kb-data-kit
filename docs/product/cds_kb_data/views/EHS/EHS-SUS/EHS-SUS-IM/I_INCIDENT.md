---
name: I_INCIDENT
description: "This CDS view retrieves header data from incident records. This CDS view provides the data to answer the following business questions: How many incidents, near misses, or safety observations are reported in my organization? How many of the reported incidents are closed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENT')/$value
semantic_en: "This CDS view retrieves header data from incident records. This CDS view provides the data to answer the following business questions: How many incidents, near misses, or safety observations are reported in my organization? How many of the reported incidents are closed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Incident Header — CDS view giao diện dựa trên ehhssd_inc_root."
keywords:
  - "Incident Header"
  - "incident"
  - "header"
  - "creation"
  - "date"
  - "time"
  - "created"
  - "user"
  - "last"
  - "change"
  - "changed"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - bo:salesorganization
---
# I_INCIDENT

**This CDS view retrieves header data from incident records. This CDS view provides the data to answer the following business questions: How many incidents, near misses, or safety observations are reported in my organization? How many of the reported incidents are closed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentUUID` | ✓ | |  | `cast(db_key as ehhss_incident_uuid preserving type)` | `RAW(16)` | Incident UUID |
| `CreationDateTime` |  | |  | `cast(datetime_cr as ehfnd_datetime_cr preserving type)` | `DEC(15)` | Object Created On/At |
| `CreatedByUser` |  | |  | `user_id_cr` | `CHAR(12)` | Object Created By |
| `LastChangeDateTime` |  | |  | `cast(datetime_ch as ehfnd_datetime_ch preserving type)` | `DEC(15)` | Object Changed On/At |
| `LastChangedByUser` |  | |  | `user_id_ch` | `CHAR(12)` | Object Changed By |
| `IncidentID` |  | |  | `id` | `CHAR(20)` | Incident ID |
| `IncidentCategory` |  | |  | `category` | `CHAR(3)` | Incident Category |
| `IncidentStatus` |  | |  | `cast(status as ehhss_inc_status_code_nconv)` | `CHAR(2)` | Incident Status |
| `IncidentMigrationSourceText` |  | |  | `migration_src` | `CHAR(60)` | Incident Migration Source |
| `EHSDeviationHasJoinCondition` |  | |  | `'X'` | `CHAR(1)` |  |
| `IncidentReportingSourceCode` |  | |  | `reporting_src` | `CHAR(2)` | Incident Reporting Source |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_IncidentStatus` | | ✓ | | | | |
| `_IncidentCategory` | | ✓ | | | | |
| `_IncidentBasicInfo` | | ✓ | | | | |
| `_IncidentInvolvedPerson` | | ✓ | | | | |
| `_IncidentReport` | | ✓ | | | | |
| `_IncidentInvestigation` | | ✓ | | | | |
| `_IncidentRelease` | | ✓ | | | | |
| `_IncidentNoticeOfViolation` | | ✓ | | | | |
| `_IncidentInvolvedAsset` | | ✓ | | | | |
| `_IncidentGroup` | | ✓ | | | | |
| `_IncidentReportingSource` | | ✓ | | | | |
| `_EHSIncidentRegulation` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreatedByUser` | `I_User` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_IncidentStatus` | `I_IncidentStatus` | [1..1] |
| `_IncidentCategory` | `I_IncidentCategory` | [0..1] |
| `_IncidentBasicInfo` | `I_IncidentBasicInfo` | [1..1] |
| `_IncidentInvolvedPerson` | `I_IncidentInvolvedPerson` | [0..*] |
| `_IncidentReport` | `I_IncidentReport` | [0..*] |
| `_IncidentInvestigation` | `I_IncidentInvestigation` | [1..1] |
| `_IncidentRelease` | `I_IncidentRelease` | [0..*] |
| `_IncidentNoticeOfViolation` | `I_IncidentNoticeOfViolation` | [0..*] |
| `_IncidentInvolvedAsset` | `I_IncidentInvolvedAsset` | [0..*] |
| `_IncidentGroup` | `I_IncidentGroup` | [0..*] |
| `_IncidentReportingSource` | `I_IncidentReportingSource` | [0..1] |
| `_EHSIncidentRegulation` | `I_EHSIncidentRegulation` | [0..*] |
| `_Extension` | `E_Incident` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENT')/$value)*

```abap
@EndUserText.label: 'Incident Header'
@Analytics: { dataCategory:#DIMENSION , dataExtraction.enabled:true }

@VDM.viewType: #BASIC

@ObjectModel.representativeKey: 'IncidentUUID'
@AccessControl: { authorizationCheck: #CHECK,
                  privilegedAssociations: ['_CreatedByUser', '_LastChangedByUser'] }

@AbapCatalog.sqlViewName: 'IINCIDENT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'EHSIncident'
@AbapCatalog.viewEnhancementCategory: #PROJECTION_LIST

define view I_Incident
  as select from ehhssd_inc_root as IncidentRoot
  association [0..1] to I_User                      as _CreatedByUser             on $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                      as _LastChangedByUser         on $projection.LastChangedByUser = _LastChangedByUser.UserID
  association [1..1] to I_IncidentStatus            as _IncidentStatus            on $projection.IncidentStatus = _IncidentStatus.IncidentStatus
  association [0..1] to I_IncidentCategory          as _IncidentCategory          on $projection.IncidentCategory = _IncidentCategory.IncidentCategory
  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [1..1] to I_IncidentBasicInfo         as _IncidentBasicInfo         on $projection.IncidentUUID = _IncidentBasicInfo.IncidentUUID
  association [0..*] to I_IncidentInvolvedPerson    as _IncidentInvolvedPerson    on $projection.IncidentUUID = _IncidentInvolvedPerson.IncidentUUID
  association [0..*] to I_IncidentReport            as _IncidentReport            on $projection.IncidentUUID = _IncidentReport.IncidentUUID
  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [1..1] to I_IncidentInvestigation     as _IncidentInvestigation     on $projection.IncidentUUID = _IncidentInvestigation.IncidentUUID
  association [0..*] to I_IncidentRelease           as _IncidentRelease           on $projection.IncidentUUID = _IncidentRelease.IncidentUUID
  association [0..*] to I_IncidentNoticeOfViolation as _IncidentNoticeOfViolation on $projection.IncidentUUID = _IncidentNoticeOfViolation.IncidentUUID
  association [0..*] to I_IncidentInvolvedAsset     as _IncidentInvolvedAsset     on $projection.IncidentUUID = _IncidentInvolvedAsset.IncidentUUID
  association [0..*] to I_IncidentGroup             as _IncidentGroup             on $projection.IncidentUUID = _IncidentGroup.IncidentUUID
  association [0..1] to I_IncidentReportingSource   as _IncidentReportingSource   on $projection.IncidentReportingSourceCode = _IncidentReportingSource.IncidentReportingSourceCode
  association [0..*] to I_EHSIncidentRegulation     as _EHSIncidentRegulation     on $projection.IncidentUUID = _EHSIncidentRegulation.IncidentUUID
  // Extension include
  association [1..1] to E_Incident                  as _Extension                 on $projection.IncidentUUID = _Extension.IncidentUUID

{
  key cast(db_key as ehhss_incident_uuid preserving type)    as IncidentUUID,

      // Admin data
      cast(datetime_cr as ehfnd_datetime_cr preserving type) as CreationDateTime,
      user_id_cr                                             as CreatedByUser,
      _CreatedByUser,
      cast(datetime_ch as ehfnd_datetime_ch preserving type) as LastChangeDateTime,
      user_id_ch                                             as LastChangedByUser,
      _LastChangedByUser,
      id                                                     as IncidentID,

      @ObjectModel.foreignKey.association: '_IncidentCategory'
      category                                               as IncidentCategory,
      _IncidentCategory,

      @ObjectModel.foreignKey.association: '_IncidentStatus'
      cast(status as ehhss_inc_status_code_nconv)            as IncidentStatus, // cast to avoid execution of conversion exit
      _IncidentStatus,

      migration_src                                          as IncidentMigrationSourceText,

      'X'                                                    as EHSDeviationHasJoinCondition, // needed for lefter outer join to SPRO activity to show/hide deviations, as we dont have any field to make the join

      @ObjectModel.foreignKey.association: '_IncidentReportingSource'
      reporting_src                                          as IncidentReportingSourceCode,
      _IncidentReportingSource,

      _IncidentBasicInfo,
      _IncidentInvolvedPerson,
      _IncidentReport,
      _IncidentInvestigation,
      _IncidentRelease,
      _IncidentNoticeOfViolation,
      _IncidentInvolvedAsset,
      _IncidentGroup,
      _EHSIncidentRegulation
}
```
