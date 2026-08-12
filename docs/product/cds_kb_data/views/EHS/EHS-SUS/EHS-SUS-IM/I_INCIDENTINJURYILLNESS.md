---
name: I_INCIDENTINJURYILLNESS
description: "This CDS view retrieves information about injuries and illnesses that is recorded in incidents. This CDS view provides the data to answer the following business questions: How many of the injury/illness cases have a certain classification? How many of the injury/illness cases have a certain type? Which body part is most frequently affected in injury/illness cases? Which side of the body is most frequently affected in injury/illness cases? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTINJURYILLNESS')/$value
semantic_en: "This CDS view retrieves information about injuries and illnesses that is recorded in incidents. This CDS view provides the data to answer the following business questions: How many of the injury/illness cases have a certain classification? How many of the injury/illness cases have a certain type? Which body part is most frequently affected in injury/illness cases? Which side of the body is most frequently affected in injury/illness cases? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Injury or Illness of an Injured Person — CDS view giao diện dựa trên ehhssd_inc_injil."
keywords:
  - "injury"
  - "illness"
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
# I_INCIDENTINJURYILLNESS

**This CDS view retrieves information about injuries and illnesses that is recorded in incidents. This CDS view provides the data to answer the following business questions: How many of the injury/illness cases have a certain classification? How many of the injury/illness cases have a certain type? Which body part is most frequently affected in injury/illness cases? Which side of the body is most frequently affected in injury/illness cases? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTINJURYILLNESS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InjuryIllnessUUID` | ✓ | |  | `db_key` | `RAW(16)` | Injury/Illness Case UUID |
| `IncidentUUID` |  | |  | `cast(root_key as ehhss_incident_uuid preserving type)` | `RAW(16)` | Incident UUID |
| `InjuredPersonInfoUUID` |  | |  | `cast(parent_key as ehhss_person_injured_info_uuid preserving type)` | `RAW(16)` | Injured Person Information UUID |
| `CreationDateTime` |  | |  | `cast(datetime_cr as ehfnd_datetime_cr preserving type)` | `DEC(15)` | Object Created On/At |
| `CreatedByUser` |  | |  | `user_id_cr` | `CHAR(12)` | Object Created By |
| `LastChangeDateTime` |  | |  | `cast(datetime_ch as ehfnd_datetime_ch preserving type)` | `DEC(15)` | Object Changed On/At |
| `LastChangedByUser` |  | |  | `user_id_ch` | `CHAR(12)` | Object Changed By |
| `InjuryIllnessClassification` |  | |  | `cast(inj_ill as ehhss_inj_ill_code_nconv)` | `CHAR(21)` | Injury/Illness Classification |
| `InjuryIllnessType` |  | |  | `cast(type as ehhss_inj_ill_type_code_nconv)` | `CHAR(21)` | Injury/Illness Type |
| `InjuryIllnessIsRecordable` |  | |  | `reg_rep_ts` | `CHAR(1)` | Reporting of Injury/Illness Required |
| `InjuryIllnessIsMainInjury` |  | |  | `main_ts` | `CHAR(1)` | Main Injury/Illness |
| `IncidentBodyPart` |  | |  | `cast(body_part as ehhss_body_part_code_nconv)` | `CHAR(21)` | Injured Body Part |
| `IncidentBodySide` |  | |  | `cast(body_side as ehhss_body_side_code_nconv)` | `CHAR(21)` | Injured Body Side |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_InjuryIllnessClass` | | ✓ | | | | |
| `_InjuryIllnessType` | | ✓ | | | | |
| `_InjuryIllnessIsRecordable` | | ✓ | | | | |
| `_InjuryIllnessIsMainInjury` | | ✓ | | | | |
| `_IncidentBodyPart` | | ✓ | | | | |
| `_IncidentBodySide` | | ✓ | | | | |
| `_Incident` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreatedByUser` | `I_User` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_InjuryIllnessClass` | `I_InjuryIllnessClass` | [0..1] |
| `_InjuryIllnessType` | `I_InjuryIllnessType` | [0..1] |
| `_InjuryIllnessIsRecordable` | `I_TernaryLogicalState` | [1..1] |
| `_InjuryIllnessIsMainInjury` | `I_Indicator` | [1..1] |
| `_IncidentBodyPart` | `I_IncidentBodyPart` | [0..1] |
| `_IncidentBodySide` | `I_IncidentBodySide` | [0..1] |
| `_Incident` | `I_Incident` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTINJURYILLNESS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTINJURYILLNESS')/$value)*

```abap
@EndUserText.label: 'Injury or Illness of an Injured Person'
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'InjuryIllnessUUID'
@AccessControl: { authorizationCheck: #CHECK,
                  privilegedAssociations: ['_CreatedByUser', '_LastChangedByUser'] }
@AbapCatalog.sqlViewName: 'IINCINJIL'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL}

// #NOT_REQUIRED because of existing end of purpose check
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'EHSIncidentInjuryIllness'

define view I_IncidentInjuryIllness
  as select from ehhssd_inc_injil
  association [0..1] to I_User                as _CreatedByUser             on  $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                as _LastChangedByUser         on  $projection.LastChangedByUser = _LastChangedByUser.UserID
  association [0..1] to I_InjuryIllnessClass  as _InjuryIllnessClass        on  $projection.InjuryIllnessClassification = _InjuryIllnessClass.InjuryIllnessClassification
  association [0..1] to I_InjuryIllnessType   as _InjuryIllnessType         on  $projection.InjuryIllnessClassification = _InjuryIllnessType.InjuryIllnessClassification
                                                                            and $projection.InjuryIllnessType           = _InjuryIllnessType.InjuryIllnessType
  association [1..1] to I_TernaryLogicalState as _InjuryIllnessIsRecordable on  $projection.InjuryIllnessIsRecordable = _InjuryIllnessIsRecordable.TernaryLogicalState
  association [1..1] to I_Indicator           as _InjuryIllnessIsMainInjury on  $projection.InjuryIllnessIsMainInjury = _InjuryIllnessIsMainInjury.IndicatorValue
  association [0..1] to I_IncidentBodyPart    as _IncidentBodyPart          on  $projection.IncidentBodyPart = _IncidentBodyPart.IncidentBodyPart
  association [0..1] to I_IncidentBodySide    as _IncidentBodySide          on  $projection.IncidentBodySide = _IncidentBodySide.IncidentBodySide
  association [1..1] to I_Incident            as _Incident                  on  $projection.IncidentUUID = _Incident.IncidentUUID

{
  key db_key                                                             as InjuryIllnessUUID,
      cast(root_key as ehhss_incident_uuid preserving type)              as IncidentUUID,
      cast(parent_key as ehhss_person_injured_info_uuid preserving type) as InjuredPersonInfoUUID,

      // Admin data
      cast(datetime_cr as ehfnd_datetime_cr preserving type)             as CreationDateTime,
      user_id_cr                                                         as CreatedByUser,
      _CreatedByUser,
      cast(datetime_ch as ehfnd_datetime_ch preserving type)             as LastChangeDateTime,
      user_id_ch                                                         as LastChangedByUser,
      _LastChangedByUser,

      @ObjectModel.foreignKey.association: '_InjuryIllnessClass'
      cast(inj_ill as ehhss_inj_ill_code_nconv)                          as InjuryIllnessClassification, // cast to avoid execution of conversion exit
      _InjuryIllnessClass,
      @ObjectModel.foreignKey.association: '_InjuryIllnessType'
      cast(type as ehhss_inj_ill_type_code_nconv)                        as InjuryIllnessType, // cast to avoid execution of conversion exit
      _InjuryIllnessType,
      @ObjectModel.foreignKey.association: '_InjuryIllnessIsRecordable'
      reg_rep_ts                                                         as InjuryIllnessIsRecordable,
      _InjuryIllnessIsRecordable,
      @ObjectModel.foreignKey.association: '_InjuryIllnessIsMainInjury'
      main_ts                                                            as InjuryIllnessIsMainInjury,
      _InjuryIllnessIsMainInjury,
      @ObjectModel.foreignKey.association: '_IncidentBodyPart'
      cast(body_part as ehhss_body_part_code_nconv)                      as IncidentBodyPart, // cast to avoid execution of conversion exit
      _IncidentBodyPart,
      @ObjectModel.foreignKey.association: '_IncidentBodySide'
      cast(body_side as ehhss_body_side_code_nconv)                      as IncidentBodySide, // cast to avoid execution of conversion exit
      _IncidentBodySide,
      _Incident
}
```
