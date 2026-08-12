---
name: I_TRANSPORTATIONAGREEMENT
description: "Transportationagreement"
app_component: TM-FRA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRA
  - interface-view
  - transport
  - component:TM-FRA-2CL
  - lob:Other
---
# I_TRANSPORTATIONAGREEMENT

**Transportationagreement**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationAgreementUUID` | ✓ | |  | `cast(db_key as /scmtms/transpagrmt_uuid preserving type)` |  |  |
| `TransportationAgreement` |  | |  | `cast(fagrmntid044 as /scmtms/vdm_fag_id preserving type)` |  |  |
| `TranspExternalAgreement` |  | |  | `cast(external_fa_id as /scmtms/vdm_fag_ext_id preserving type)` |  |  |
| `TranspAgreementValidFromDate` |  | |  | `cast(validity_start as /scmtms/vdm_fag_valdty_strt_dt preserving type)` |  |  |
| `TranspAgreementValidToDate` |  | |  | `cast(validity_end as /scmtms/vdm_fag_valdty_end_dt preserving type)` |  |  |
| `TransportationAgreementDocCrcy` |  | |  | `cast(doc_currency as /scmtms/vdm_fag_doc_currency preserving type)` |  |  |
| `TransportationAgreementStatus` |  | |  | `cast(status as /scmtms/vdm_fag_root_status preserving type)` |  |  |
| `TranspDimnWeightProfile` |  | |  | `dim_wt_profile` |  |  |
| `TransportationMode` |  | |  | `mode_of_transp` |  |  |
| `TransportationShippingType` |  | |  | `shipping_type` |  |  |
| `CreationDateTime` |  | |  | `cast(created_on as log_created_on preserving type)` |  |  |
| `CreatedByUser` |  | |  | `cast(created_by as vdm_createdbyuserid preserving type)` |  |  |
| `ChangedDateTime` |  | |  | `cast(changed_on as /scmtms/vdm_tm_tstmp_cht preserving type)` |  |  |
| `LastChangedByUser` |  | |  | `cast(changed_by as vdm_lastchangedbyuserid preserving type)` |  |  |
| `TranspAgreementTimeZone` |  | |  | `cast(timezone as /scmtms/vdm_fag_tzone preserving type)` |  |  |
| `TransportationAgreementType` |  | |  | `fagtypeid103` |  |  |
| `_TranspAgrmtCurrency` | | ✓ | | | | |
| `_TranspAgrmtCreatedBy` | | ✓ | | | | |
| `_TranspAgrmtChangedBy` | | ✓ | | | | |
| `_TranspAgreementStatus` | | ✓ | | | | |
| `_TranspDimnWeightProfile` | | ✓ | | | | |
| `_TransportationMode` | | ✓ | | | | |
| `_TransportationShippingType` | | ✓ | | | | |
| `_TranspAgreementType` | | ✓ | | | | |
| `_TranspAgreementItem` | | ✓ | | | | |
| `_TranspAgrmtOrganization` | | ✓ | | | | |
| `_TranspAgreementParty` | | ✓ | | | | |
| `_TranspAgreementDescription` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspAgrmtCurrency` | `I_Currency` | [1..1] |
| `_TranspAgrmtCreatedBy` | `I_User` | [0..1] |
| `_TranspAgrmtChangedBy` | `I_User` | [0..1] |
| `_TranspAgreementStatus` | `I_TranspAgreementStatus` | [1..1] |
| `_TranspDimnWeightProfile` | `I_TranspDimnWeightProfile` | [0..1] |
| `_TransportationMode` | `I_TransportationMode_2` | [0..1] |
| `_TransportationShippingType` | `I_TranspOrdShippingType` | [0..1] |
| `_TranspAgreementType` | `I_TranspAgreementType` | [0..1] |

## Source Code

```abap
@AccessControl: {authorizationCheck: #MANDATORY,
                 privilegedAssociations: ['_TranspAgreementItem',
                                          '_TranspAgrmtOrganization',
                                          '_TranspAgreementParty',
                                          '_TranspAgrmtCreatedBy',
                                          '_TranspAgrmtChangedBy']}
@Analytics.technicalName: 'ITFAG'
@EndUserText: {label: 'Transportation Agreement'}
@ObjectModel: {sapObjectNodeType.name: 'FreightAgreement',
               representativeKey: 'TransportationAgreementUUID',
               compositionRoot:    true,
               semanticKey: ['TransportationAgreement'],
               usageType: { serviceQuality: #A,
                            sizeCategory: #M,
                            dataClass: #TRANSACTIONAL},
               supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ] }
@Metadata.ignorePropagatedAnnotations:true
@VDM: {viewType: #BASIC,
       lifecycle.contract.type: #PUBLIC_LOCAL_API}

define root view entity I_TransportationAgreement
  as select from /scmtms/d_fagrot
  /* Business Object related Node Associations*/
  composition [0..*] of I_TranspAgreementItem_2        as _TranspAgreementItem
  composition [1..1] of I_TranspAgrmtOrganization_2    as _TranspAgrmtOrganization
  composition [1..1] of I_TranspAgreementParty_2       as _TranspAgreementParty
  composition [0..1] of I_TranspAgreementDescription_2 as _TranspAgreementDescription

  /* Foreign Key Associations */
  association [1..1] to I_Currency                     as _TranspAgrmtCurrency        on $projection.TransportationAgreementDocCrcy = _TranspAgrmtCurrency.Currency
  association [0..1] to I_User                         as _TranspAgrmtCreatedBy       on $projection.CreatedByUser = _TranspAgrmtCreatedBy.UserID
  association [0..1] to I_User                         as _TranspAgrmtChangedBy       on $projection.LastChangedByUser = _TranspAgrmtChangedBy.UserID
  association [1..1] to I_TranspAgreementStatus        as _TranspAgreementStatus      on $projection.TransportationAgreementStatus = _TranspAgreementStatus.TransportationAgreementStatus
  association [0..1] to I_TranspDimnWeightProfile      as _TranspDimnWeightProfile    on $projection.TranspDimnWeightProfile = _TranspDimnWeightProfile.TranspDimnWeightProfile
  association [0..1] to I_TransportationMode_2         as _TransportationMode         on $projection.TransportationMode = _TransportationMode.TransportationMode
  association [0..1] to I_TranspOrdShippingType        as _TransportationShippingType on $projection.TransportationShippingType = _TransportationShippingType.TranspOrdShippingType
  association [0..1] to I_TranspAgreementType          as _TranspAgreementType        on $projection.TransportationAgreementType = _TranspAgreementType.TransportationAgreementType
{
  key cast(db_key as /scmtms/transpagrmt_uuid preserving type)               as TransportationAgreementUUID,
      cast(fagrmntid044 as /scmtms/vdm_fag_id preserving type)               as TransportationAgreement,
      cast(external_fa_id as /scmtms/vdm_fag_ext_id preserving type)         as TranspExternalAgreement,

      //Agreement Validity
      cast(validity_start as /scmtms/vdm_fag_valdty_strt_dt preserving type) as TranspAgreementValidFromDate,
      cast(validity_end as /scmtms/vdm_fag_valdty_end_dt preserving type)    as TranspAgreementValidToDate,

      @ObjectModel.foreignKey.association: '_TranspAgrmtCurrency'
      cast(doc_currency as /scmtms/vdm_fag_doc_currency preserving type)     as TransportationAgreementDocCrcy,
      @ObjectModel.foreignKey.association: '_TranspAgreementStatus'
      cast(status as /scmtms/vdm_fag_root_status  preserving type)           as TransportationAgreementStatus,
      @ObjectModel.foreignKey.association: '_TranspDimnWeightProfile'
      dim_wt_profile                                                         as TranspDimnWeightProfile,
      @ObjectModel.foreignKey.association: '_TransportationMode'
      mode_of_transp                                                         as TransportationMode,
      @ObjectModel.foreignKey.association: '_TransportationShippingType'
      shipping_type                                                          as TransportationShippingType,

      //Admin fields
      @Semantics.systemDateTime.createdAt: true
      cast(created_on as log_created_on preserving type)                     as CreationDateTime,
      @Semantics.user.createdBy: true
      @ObjectModel.foreignKey.association: '_TranspAgrmtCreatedBy'
      cast(created_by as vdm_createdbyuserid preserving type)                as CreatedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      cast(changed_on as /scmtms/vdm_tm_tstmp_cht preserving type)           as ChangedDateTime,
      @Semantics.user.lastChangedBy: true
      @ObjectModel.foreignKey.association: '_TranspAgrmtChangedBy'
      cast(changed_by as vdm_lastchangedbyuserid preserving type)            as LastChangedByUser,

      cast(timezone as /scmtms/vdm_fag_tzone preserving type)                as TranspAgreementTimeZone,
      @ObjectModel.foreignKey.association: '_TranspAgreementType'
      fagtypeid103                                                           as TransportationAgreementType,

      /* Associations */
      @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
      _TranspAgreementItem,
      @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
      _TranspAgrmtOrganization,
      @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
      _TranspAgreementParty,
      @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
      _TranspAgreementDescription,

      _TranspAgrmtCurrency,
      _TranspAgrmtCreatedBy,
      _TranspAgrmtChangedBy,
      _TranspAgreementStatus,
      _TranspDimnWeightProfile,
      _TransportationMode,
      _TransportationShippingType,
      _TranspAgreementType

}
```
