---
name: I_ACTIVEPLNDINDEPRQMTITEM
description: "Activeplndindeprqmtitem"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_ACTIVEPLNDINDEPRQMTITEM

**Activeplndindeprqmtitem**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlndIndepRqmtInternalID` | ✓ | |  |  |  |  |
| `WorkingDayDate` | ✓ | |  |  |  |  |
| `PeriodType` |  | |  | `cast( case pbed.ForecastPeriodType when '1' then 'D' when '2' then 'W' when '3' then 'M' when '4' then 'P' when '5' then 'C' end as pph_period_type preserving type)` |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `PlannedQuantity` |  | |  |  |  |  |
| `WithdrawalQuantity` |  | |  |  |  |  |
| `_ActivePlndIndepRqmt` | | ✓ | | | | |
| `_PeriodType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ActivePlndIndepRqmt` | `I_ActivePlndIndepRqmt` | [1..1] |
| `_PeriodType` | `I_PeriodType` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_LastChangedByUser']
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IACTPIRIT'
@Analytics.internalName: #LOCAL
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #ANALYTICAL_DIMENSION]
@ObjectModel.representativeKey: 'WorkingDayDate'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Active Planned Independent Requirement Item'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_ActivePlndIndepRqmtItem
  as select from I_PlndIndepRqmtItemByIntKey  as pbed
  association [1..1] to I_ActivePlndIndepRqmt as _ActivePlndIndepRqmt on $projection.PlndIndepRqmtInternalID = _ActivePlndIndepRqmt.PlndIndepRqmtInternalID
  association [1..1] to I_PeriodType          as _PeriodType          on $projection.PeriodType = _PeriodType.PeriodType  

{
      @ObjectModel.foreignKey.association: '_ActivePlndIndepRqmt'
  key pbed.PlndIndepRqmtInternalID,
  key pbed.WorkingDayDate,

      @ObjectModel.foreignKey.association: '_PeriodType'       
      cast( case pbed.ForecastPeriodType
        when '1' then 'D'
        when '2' then 'W'
        when '3' then 'M'
        when '4' then 'P'
        when '5' then 'C'
      end as pph_period_type preserving type) as PeriodType,
      
      // Admin Data
      @Semantics.user.lastChangedBy: true
      pbed.LastChangedByUser,
      @Semantics.systemDate.createdAt: true
      pbed.LastChangeDate,

      // Quantities and UoM
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      pbed.BaseUnit,     
      @Semantics.quantity.unitOfMeasure : 'BaseUnit'
      @Aggregation.default: #SUM
      pbed.PlannedQuantity,
      @Semantics.quantity.unitOfMeasure : 'BaseUnit'
      @Aggregation.default: #SUM
      pbed.WithdrawalQuantity,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT, #TO_COMPOSITION_PARENT]
      _ActivePlndIndepRqmt,
      _PeriodType,
      pbed._UnitOfMeasure,
      pbed._LastChangedByUser
}
where _ActivePlndIndepRqmt.PlndIndepRqmtInternalID is not null;
```
