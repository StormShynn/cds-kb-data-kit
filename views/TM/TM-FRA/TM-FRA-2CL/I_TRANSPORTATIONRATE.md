---
name: I_TRANSPORTATIONRATE
description: Transportationrate
app_component: TM-FRA-2CL
software_component: SAPSCORE
release_state: released
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
# I_TRANSPORTATIONRATE

**Transportationrate**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationRateUUID` | ✓ | |  | `cast(db_key as /scmtms/transpratetable_uuid preserving type)` |  |  |
| `TransportationRate` |  | |  | `rate_id` |  |  |
| `ChangedDateTime` |  | |  | `cast(changed_on as /scmtms/vdm_tm_tstmp_cht preserving type)` |  |  |
| `CreationDateTime` |  | |  | `cast(created_on as log_created_on preserving type)` |  |  |
| `LastChangedByUser` |  | |  | `cast(changed_by as vdm_lastchangedbyuserid preserving type)` |  |  |
| `CreatedByUser` |  | |  | `cast(created_by as vdm_createdbyuserid preserving type)` |  |  |
| `TransportationRateValueType` |  | |  | `cast(val_indicator as /scmtms/vdm_rt_value_type preserving type)` |  |  |
| `TranspChargeType` |  | |  | `tcet` |  |  |
| `TranspCalculationSheetUUID` |  | |  | `cast(owner_key as /scmtms/transpcalcsheet_uuid preserving type)` |  |  |
| `TranspChargeUsage` |  | |  | `tcusagecd085` |  |  |
| `TranspRateTableTimeZone` |  | |  | `cast(timezone as /scmtms/vdm_rt_tzone preserving type)` |  |  |
| `TransportationRateType` |  | |  | `rate_tab_type` |  |  |
| `TranspRateSignType` |  | | `_TranspChargeType` | `TranspRateSignType` |  |  |
| `_TranspCalcSheetItem` | | ✓ | | | | |
| `_TranspChargeType` | | ✓ | | | | |
| `_TranspRateTableCreatedBy` | | ✓ | | | | |
| `_TranspRateTableChangedBy` | | ✓ | | | | |
| `_TranspRateValueType` | | ✓ | | | | |
| `_TranspRateSignType` | | ✓ | | | | |
| `_TranspRateTableOrganization` | | ✓ | | | | |
| `_TranspRateScaleRef` | | ✓ | | | | |
| `_TranspRateValidity` | | ✓ | | | | |
| `_TranspRateTableText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspCalcSheetItem` | `I_TranspChrgCalcSheetItem` | [1..1] |
| `_TranspChargeType` | `I_TranspChargeType` | [1..1] |
| `_TranspRateTableCreatedBy` | `I_User` | [0..1] |
| `_TranspRateTableChangedBy` | `I_User` | [0..1] |
| `_TranspRateValueType` | `I_TranspRateValueType_2` | [0..1] |
| `_TranspRateSignType` | `I_TransportationRateSignType_2` | [0..1] |

## Source Code

```abap
@AccessControl: {authorizationCheck: #MANDATORY,
                 personalData.blocking:#('TRANSACTIONAL_DATA'),
                 privilegedAssociations: ['_TranspCalcSheetItem',
                                          '_TranspRateScaleRef',
                                          '_TranspRateValidity',
                                          '_TranspRateTableCreatedBy',
                                          '_TranspRateTableChangedBy']}
@Analytics.technicalName: 'ITRATE'
@EndUserText: {label: 'Transportation Rate Table'}
@ObjectModel: {sapObjectNodeType.name: 'TransportationRateTable',
               representativeKey: 'TransportationRateUUID',
               compositionRoot:    true,
               semanticKey: ['TransportationRate'],
               usageType: { serviceQuality: #A,
                            sizeCategory: #L,
                            dataClass: #TRANSACTIONAL},
               supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]}
@Metadata.ignorePropagatedAnnotations: true
@VDM: {viewType: #BASIC,
       lifecycle.contract.type: #PUBLIC_LOCAL_API }

define root view entity I_TransportationRate
  as select from /scmtms/d_tcrate as TransportationRate
  /* Business Object related Node Associations*/
  composition [0..*] of I_TranspRateTableOrganization  as _TranspRateTableOrganization
  composition [0..1] of I_TranspRateTableDescription_2 as _TranspRateTableText
  composition [0..*] of I_TranspRateScaleReference     as _TranspRateScaleRef
  composition [0..*] of I_TransportationRateValidity_2 as _TranspRateValidity
  association [1..1] to I_TranspChrgCalcSheetItem      as _TranspCalcSheetItem      on $projection.TransportationRateUUID = _TranspCalcSheetItem.TransportationRateUUID

  /* Foreign Key Associations */
  association [1..1] to I_TranspChargeType             as _TranspChargeType         on $projection.TranspChargeType = _TranspChargeType.TranspChargeType
  association [0..1] to I_User                         as _TranspRateTableCreatedBy on $projection.CreatedByUser = _TranspRateTableCreatedBy.UserID
  association [0..1] to I_User                         as _TranspRateTableChangedBy on $projection.LastChangedByUser = _TranspRateTableChangedBy.UserID
  association [0..1] to I_TranspRateValueType_2        as _TranspRateValueType      on $projection.TransportationRateValueType = _TranspRateValueType.TransportationRateValueType
  association [0..1] to I_TransportationRateSignType_2 as _TranspRateSignType       on $projection.TranspRateSignType = _TranspRateSignType.TranspRateSignType
{
  key  cast(db_key as /scmtms/transpratetable_uuid preserving type)     as TransportationRateUUID,
       rate_id                                                          as TransportationRate,
       @Semantics.systemDate.lastChangedAt: true
       cast(changed_on  as /scmtms/vdm_tm_tstmp_cht preserving type)    as ChangedDateTime,
       @Semantics.systemDate.createdAt: true
       cast(created_on  as log_created_on preserving type)              as CreationDateTime,
       @Semantics.user.lastChangedBy: true
       @ObjectModel.foreignKey.association: '_TranspRateTableChangedBy'
       cast(changed_by as vdm_lastchangedbyuserid preserving type)      as LastChangedByUser,
       @Semantics.user.createdBy: true
       @ObjectModel.foreignKey.association: '_TranspRateTableCreatedBy'
       cast(created_by as vdm_createdbyuserid preserving type)          as CreatedByUser,
       @ObjectModel.foreignKey.association: '_TranspRateValueType'
       cast(val_indicator as /scmtms/vdm_rt_value_type preserving type) as TransportationRateValueType,
       @ObjectModel.foreignKey.association: '_TranspChargeType'
       tcet                                                             as TranspChargeType,

       cast(owner_key as  /scmtms/transpcalcsheet_uuid preserving type) as TranspCalculationSheetUUID,

       tcusagecd085                                                     as TranspChargeUsage,

       cast(timezone as /scmtms/vdm_rt_tzone preserving type)           as TranspRateTableTimeZone,
       rate_tab_type                                                    as TransportationRateType,
       @ObjectModel.foreignKey.association: '_TranspRateSignType'
       _TranspChargeType.TranspRateSignType                             as TranspRateSignType,

       /* Associations */
       @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
       _TranspRateTableOrganization,
       @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
       _TranspRateScaleRef,
       @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
       _TranspRateValidity,
       @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
       _TranspRateTableText,

       _TranspCalcSheetItem,
       _TranspChargeType,
       _TranspRateTableCreatedBy,
       _TranspRateTableChangedBy,
       _TranspRateValueType,
       _TranspRateSignType
}
```
