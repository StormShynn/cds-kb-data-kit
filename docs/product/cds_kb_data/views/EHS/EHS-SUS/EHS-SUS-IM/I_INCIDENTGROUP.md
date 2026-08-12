---
name: I_INCIDENTGROUP
description: "This CDS view provides a structured representation of incident categorization data within Incident Management. It serves as a basic interface view that exposes incident group classifications, including Incident, Near Miss, and Safety Observation groups, along with severity levels and administrative tracking information. The view enables data extraction for analytical purposes and supports transactional operations for managing how incidents are categorized and grouped for reporting and analysis. This CDS view provides the data to answer the following business questions: How are incidents classified across different categories (incident groups, near miss groups, and safety observation groups)? What is the severity distribution of incident groups, and which groups represent the highest risk levels? Which incidents are associated with specific group classifications for compliance and regulatory reporting? What is the volume and categorization of near misses and safety observations compared to actual incidents across the organization? Who created or last modified specific incident group classifications, and when were these changes made? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTGROUP')/$value
semantic_en: "This CDS view provides a structured representation of incident categorization data within Incident Management. It serves as a basic interface view that exposes incident group classifications, including Incident, Near Miss, and Safety Observation groups, along with severity levels and administrative tracking information. The view enables data extraction for analytical purposes and supports transactional operations for managing how incidents are categorized and grouped for reporting and analysis. This CDS view provides the data to answer the following business questions: How are incidents classified across different categories (incident groups, near miss groups, and safety observation groups)? What is the severity distribution of incident groups, and which groups represent the highest risk levels? Which incidents are associated with specific group classifications for compliance and regulatory reporting? What is the volume and categorization of near misses and safety observations compared to actual incidents across the organization? Who created or last modified specific incident group classifications, and when were these changes made? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Incident Group — CDS view giao diện dựa trên ehhssd_inc_incgr."
keywords:
  - "incident"
  - "group"
  - "creation"
  - "date"
  - "time"
  - "created"
  - "user"
  - "last"
  - "change"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - transaction
  - bo:salesorganization
---
# I_INCIDENTGROUP

**This CDS view provides a structured representation of incident categorization data within Incident Management. It serves as a basic interface view that exposes incident group classifications, including Incident, Near Miss, and Safety Observation groups, along with severity levels and administrative tracking information. The view enables data extraction for analytical purposes and supports transactional operations for managing how incidents are categorized and grouped for reporting and analysis. This CDS view provides the data to answer the following business questions: How are incidents classified across different categories (incident groups, near miss groups, and safety observation groups)? What is the severity distribution of incident groups, and which groups represent the highest risk levels? Which incidents are associated with specific group classifications for compliance and regulatory reporting? What is the volume and categorization of near misses and safety observations compared to actual incidents across the organization? Who created or last modified specific incident group classifications, and when were these changes made? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTGROUP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentGroupUUID` | ✓ | |  | `db_key` | `RAW(16)` | NodeID |
| `IncidentUUID` |  | |  | `parent_key` | `RAW(16)` | NodeID |
| `CreationDateTime` |  | |  | `cast(datetime_cr as ehfnd_datetime_cr preserving type)` | `DEC(15)` | Object Created On/At |
| `CreatedByUser` |  | |  | `user_id_cr` | `CHAR(12)` | Object Created By |
| `LastChangeDateTime` |  | |  | `cast(datetime_ch as ehfnd_datetime_ch preserving type)` | `DEC(15)` | Object Changed On/At |
| `LastChangedByUser` |  | |  | `user_id_ch` | `CHAR(12)` | Object Changed By |
| `IncidentGroupCode` |  | |  | `inc_group` | `CHAR(21)` | Incident Group |
| `NearMissGroupCode` |  | |  | `nm_group` | `CHAR(21)` | Near Miss Group |
| `SafetyObservationGroupCode` |  | |  | `so_group` | `CHAR(21)` | Safety Observation Group |
| `EHSIncidentGroupSeverity` |  | |  | `cast(severity as ehhss_grp_sev_type_code_nconv)` | `CHAR(21)` | Severity Level Code |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_IncidentGroupCode` | | ✓ | | | | |
| `_NearMissGroupCode` | | ✓ | | | | |
| `_SafetyObservationGroupCode` | | ✓ | | | | |
| `_IncidentGroupSeverityText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreatedByUser` | `I_User` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_IncidentGroupCode` | `I_IncidentGroupCode` | [0..1] |
| `_NearMissGroupCode` | `I_NearMissGroupCode` | [0..1] |
| `_SafetyObservationGroupCode` | `I_SafetyObservationGroupCode` | [0..1] |
| `_IncidentGroupSeverityText` | `I_IncidentGroupSeverityText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTGROUP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTGROUP')/$value)*

```abap
@EndUserText.label: 'Incident Group'
@Analytics.dataExtraction.enabled: true

@VDM.viewType: #BASIC

@ObjectModel.representativeKey: 'IncidentGroupUUID'
@AccessControl: { authorizationCheck: #CHECK,
                  privilegedAssociations: ['_CreatedByUser', '_LastChangedByUser'] }

@AbapCatalog.sqlViewName: 'IINCINCGR'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'EHSIncident'

define view I_IncidentGroup
  as select from ehhssd_inc_incgr
  association [0..1] to I_User                       as _CreatedByUser              on $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                       as _LastChangedByUser          on $projection.LastChangedByUser = _LastChangedByUser.UserID

  association [0..1] to I_IncidentGroupCode          as _IncidentGroupCode          on $projection.IncidentGroupCode = _IncidentGroupCode.IncidentGroupCode
  association [0..1] to I_NearMissGroupCode          as _NearMissGroupCode          on $projection.NearMissGroupCode = _NearMissGroupCode.NearMissGroupCode
  association [0..1] to I_SafetyObservationGroupCode as _SafetyObservationGroupCode on $projection.SafetyObservationGroupCode = _SafetyObservationGroupCode.SafetyObservationGroupCode
  association [0..*] to I_IncidentGroupSeverityText  as _IncidentGroupSeverityText  on $projection.EHSIncidentGroupSeverity = _IncidentGroupSeverityText.EHSIncidentGroupSeverity
{
  key db_key                                                 as IncidentGroupUUID,
      parent_key                                             as IncidentUUID,

      // Admin data
      cast(datetime_cr as ehfnd_datetime_cr preserving type) as CreationDateTime,
      user_id_cr                                             as CreatedByUser,
      _CreatedByUser,
      cast(datetime_ch as ehfnd_datetime_ch preserving type) as LastChangeDateTime,
      user_id_ch                                             as LastChangedByUser,
      _LastChangedByUser,

      @ObjectModel.foreignKey.association: '_IncidentGroupCode'
      inc_group                                              as IncidentGroupCode,
      _IncidentGroupCode,

      @ObjectModel.foreignKey.association: '_NearMissGroupCode'
      nm_group                                               as NearMissGroupCode,
      _NearMissGroupCode,

      @ObjectModel.foreignKey.association: '_SafetyObservationGroupCode'
      so_group                                               as SafetyObservationGroupCode,
      _SafetyObservationGroupCode,

      @ObjectModel.text.association: '_IncidentGroupSeverityText'
      cast(severity as ehhss_grp_sev_type_code_nconv)        as EHSIncidentGroupSeverity,
      _IncidentGroupSeverityText

}
```
