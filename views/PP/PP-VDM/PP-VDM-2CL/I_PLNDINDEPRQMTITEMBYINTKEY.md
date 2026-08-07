---
name: I_PLNDINDEPRQMTITEMBYINTKEY
description: Plndindeprqmtitembyintkey
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - item-level
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_PLNDINDEPRQMTITEMBYINTKEY

**Plndindeprqmtitembyintkey**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PlndIndepRqmtInternalID` | ✓ | |  | `bdzei` |
| `WorkingDayDate` | ✓ | |  | `cast(pbed.pdatu as pph_working_day preserving type)` |
| `ForecastPeriodType` |  | |  | `cast(pbed.entli as periotype preserving type)` |
| `LastChangedByUser` |  | |  | `aenam` |
| `LastChangeDate` |  | |  | `laeda` |
| `BaseUnit` |  | |  | `meins` |
| `PlannedQuantity` |  | |  | `cast(pbed.plnmg as pph_plan_qty preserving type)` |
| `WithdrawalQuantity` |  | |  | `entmg` |
| `_PlndIndepRqmt` | | ✓ | | |
| `_UnitOfMeasure` | | ✓ | | |
| `_LastChangedByUser` | | ✓ | | |
| `_PeriodType` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PlndIndepRqmt` | `I_PlndIndepRqmtByIntKey` | [1..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [1..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_PeriodType` | `I_SalesDelivDateCategory` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_LastChangedByUser']
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IPIRITEMBYINTK'
@Analytics.internalName: #LOCAL
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'WorkingDayDate'
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Planned Independent Requirement Item by Internal Key'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_PlndIndepRqmtItemByIntKey
  as select from pbed

  association [1..1] to I_PlndIndepRqmtByIntKey  as _PlndIndepRqmt     on $projection.PlndIndepRqmtInternalID = _PlndIndepRqmt.PlndIndepRqmtInternalID
  association [1..1] to I_UnitOfMeasure          as _UnitOfMeasure     on $projection.BaseUnit = _UnitOfMeasure.UnitOfMeasure
  association [0..1] to I_User                   as _LastChangedByUser on $projection.LastChangedByUser = _LastChangedByUser.UserID
  association [0..1] to I_SalesDelivDateCategory as _PeriodType        on $projection.ForecastPeriodType = _PeriodType.SalesDelivDateCategory

{
      @ObjectModel.foreignKey.association: '_PlndIndepRqmt'
  key bdzei                                               as PlndIndepRqmtInternalID,
  key cast(pbed.pdatu as pph_working_day preserving type) as WorkingDayDate,                   

      @ObjectModel.foreignKey.association: '_PeriodType'
      cast(pbed.entli as periotype preserving type)       as ForecastPeriodType,
      
      // Admin Data
      @Semantics.user.lastChangedBy: true
      pbed.aenam                                          as LastChangedByUser,
      @Semantics.systemDate.createdAt: true
      pbed.laeda                                          as LastChangeDate,

      // Quantities and UoM
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      pbed.meins                                          as BaseUnit,     
      @Semantics.quantity.unitOfMeasure : 'BaseUnit'
      @Aggregation.default: #SUM
      cast(pbed.plnmg as pph_plan_qty preserving type)    as PlannedQuantity,
      @Semantics.quantity.unitOfMeasure : 'BaseUnit'
      @Aggregation.default: #SUM
      pbed.entmg                                          as WithdrawalQuantity,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT,#TO_COMPOSITION_PARENT]
      _PlndIndepRqmt,
      _UnitOfMeasure,
      _LastChangedByUser,
      _PeriodType
};
```
