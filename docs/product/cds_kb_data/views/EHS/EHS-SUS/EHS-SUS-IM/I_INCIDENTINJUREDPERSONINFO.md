---
name: I_INCIDENTINJUREDPERSONINFO
description: "This CDS view information about injured persons in incidents. This CDS view provides the data to answer the following business questions: How many of the reported incidents has a fatality? How many of the incidents in the system need to be reported to an authority? Which injury/illness is most common in my organization? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTINJUREDPERSONINFO')/$value
semantic_en: "This CDS view information about injured persons in incidents. This CDS view provides the data to answer the following business questions: How many of the reported incidents has a fatality? How many of the incidents in the system need to be reported to an authority? Which injury/illness is most common in my organization? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Injured Person in an Incident — CDS view giao diện dựa trên ehhssd_inc_pinji."
keywords:
  - "injured"
  - "person"
  - "incident"
  - "info"
  - "involved"
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
# I_INCIDENTINJUREDPERSONINFO

**This CDS view information about injured persons in incidents. This CDS view provides the data to answer the following business questions: How many of the reported incidents has a fatality? How many of the incidents in the system need to be reported to an authority? Which injury/illness is most common in my organization? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTINJUREDPERSONINFO')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InjuredPersonInfoUUID` | ✓ | |  | `cast(db_key as ehhss_person_injured_info_uuid preserving type)` | `RAW(16)` | Injured Person Information UUID |
| `IncidentUUID` |  | |  | `cast(root_key as ehhss_incident_uuid preserving type)` | `RAW(16)` | Incident UUID |
| `InvolvedPersonUUID` |  | |  | `cast(parent_key as ehhss_person_involved_uuid preserving type)` | `RAW(16)` | Involved Person UUID |
| `CreationDateTime` |  | |  | `cast(datetime_cr as ehfnd_datetime_cr preserving type)` | `DEC(15)` | Object Created On/At |
| `CreatedByUser` |  | |  | `user_id_cr` | `CHAR(12)` | Object Created By |
| `LastChangeDateTime` |  | |  | `cast(datetime_ch as ehfnd_datetime_ch preserving type)` | `DEC(15)` | Object Changed On/At |
| `LastChangedByUser` |  | |  | `user_id_ch` | `CHAR(12)` | Object Changed By |
| `IncidentType` |  | |  | `cast(oc_inc_type as ehhss_occ_inc_type_code_nconv)` | `CHAR(21)` | Incident Type |
| `InjuryIllnessIsFatal` |  | |  | `fatality_ts` | `CHAR(1)` | Fatal Injury / Illness |
| `InjuryIllnessCaseIsRecordable` |  | |  | `report_req_ts` | `CHAR(1)` | Reporting Required |
| `PersnHasTrtmtBeyond1stAid` |  | |  | `treat_bey_fi_ts` | `CHAR(1)` | Treatment Beyond First Aid |
| `PersnIsTreatedInEmgyRoom` |  | |  | `emerg_room_ts` | `CHAR(1)` | Emergency Room Treatment |
| `PersonIsInpatientOvernight` |  | |  | `inpat_ts` | `CHAR(1)` | Inpatient Treatment Overnight |
| `PersonHasReceivedFirstAid` |  | |  | `first_aid_ts` | `CHAR(1)` | First Aid Treatment |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_IncidentType` | | ✓ | | | | |
| `_InjuryIllnessIsFatal` | | ✓ | | | | |
| `_IncidentInjuryIllness` | | ✓ | | | | |
| `_IncidentRestrictedDuty` | | ✓ | | | | |
| `_IncidentTimeData` | | ✓ | | | | |
| `_Incident` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreatedByUser` | `I_User` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_IncidentType` | `I_IncidentType` | [0..1] |
| `_InjuryIllnessIsFatal` | `I_TernaryLogicalState` | [1..1] |
| `_IncidentInjuryIllness` | `I_IncidentInjuryIllness` | [0..*] |
| `_IncidentRestrictedDuty` | `I_IncidentRestrictedDuty` | [0..*] |
| `_IncidentTimeData` | `I_IncidentTimeData` | [0..1] |
| `_Incident` | `I_Incident` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTINJUREDPERSONINFO')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTINJUREDPERSONINFO')/$value)*

```abap
@EndUserText.label: 'Injured Person in an Incident'
@Analytics.dataExtraction.enabled: true

@VDM.viewType: #BASIC

@ObjectModel.representativeKey: 'InjuredPersonInfoUUID'
@AccessControl: { authorizationCheck: #CHECK,
                  privilegedAssociations: ['_CreatedByUser', '_LastChangedByUser'] }

@AbapCatalog.sqlViewName: 'IINCINJPI'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL}

// #NOT_REQUIRED because of existing end of purpose check
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'EHSIncidentInjuredPersonInfo'

define view I_IncidentInjuredPersonInfo
  as select from ehhssd_inc_pinji
  association [0..1] to I_User                   as _CreatedByUser          on $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                   as _LastChangedByUser      on $projection.LastChangedByUser = _LastChangedByUser.UserID
  association [0..1] to I_IncidentType           as _IncidentType           on $projection.IncidentType = _IncidentType.IncidentType
  association [1..1] to I_TernaryLogicalState    as _InjuryIllnessIsFatal   on $projection.InjuryIllnessIsFatal = _InjuryIllnessIsFatal.TernaryLogicalState
  association [0..*] to I_IncidentInjuryIllness  as _IncidentInjuryIllness  on $projection.InjuredPersonInfoUUID = _IncidentInjuryIllness.InjuredPersonInfoUUID
  association [0..*] to I_IncidentRestrictedDuty as _IncidentRestrictedDuty on $projection.InjuredPersonInfoUUID = _IncidentRestrictedDuty.InjuredPersonInfoUUID
  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_IncidentTimeData       as _IncidentTimeData       on $projection.InjuredPersonInfoUUID = _IncidentTimeData.InjuredPersonInfoUUID
  association [1..1] to I_Incident               as _Incident               on $projection.IncidentUUID = _Incident.IncidentUUID

{
  key cast(db_key as ehhss_person_injured_info_uuid preserving type) as InjuredPersonInfoUUID,
      cast(root_key as ehhss_incident_uuid preserving type)          as IncidentUUID,
      cast(parent_key as ehhss_person_involved_uuid preserving type) as InvolvedPersonUUID,

      // Admin data
      cast(datetime_cr as ehfnd_datetime_cr preserving type)         as CreationDateTime,
      user_id_cr                                                     as CreatedByUser,
      _CreatedByUser,
      cast(datetime_ch as ehfnd_datetime_ch preserving type)         as LastChangeDateTime,
      user_id_ch                                                     as LastChangedByUser,
      _LastChangedByUser,

      @ObjectModel.foreignKey.association: '_IncidentType'
      cast(oc_inc_type as ehhss_occ_inc_type_code_nconv)             as IncidentType, // cast to avoid execution of conversion exit
      _IncidentType,

      @ObjectModel.foreignKey.association: '_InjuryIllnessIsFatal'
      fatality_ts                                                    as InjuryIllnessIsFatal,
      _InjuryIllnessIsFatal,

      @Semantics.booleanIndicator
      report_req_ts                                                  as InjuryIllnessCaseIsRecordable,
      @Semantics.booleanIndicator
      treat_bey_fi_ts                                                as PersnHasTrtmtBeyond1stAid,
      @Semantics.booleanIndicator
      emerg_room_ts                                                  as PersnIsTreatedInEmgyRoom,
      @Semantics.booleanIndicator
      inpat_ts                                                       as PersonIsInpatientOvernight,
      @Semantics.booleanIndicator
      first_aid_ts                                                   as PersonHasReceivedFirstAid,

      _IncidentInjuryIllness,
      _IncidentRestrictedDuty,
      _IncidentTimeData,
      _Incident
}
```
