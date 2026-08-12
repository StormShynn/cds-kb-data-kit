---
name: I_CONFFAILEDACTUALCOSTCALC
description: "Conffailedactualcostcalc"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_CONFFAILEDACTUALCOSTCALC

**Conffailedactualcostcalc**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrderID` | ✓ | |  | `aufnr` |  |  |
| `ConfirmationGroup` | ✓ | |  | `cast(rueck as pph_rueck preserving type)` |  |  |
| `OrderConfirmation` | ✓ | |  | `cast(rmzhl as pph_rmzhl preserving type)` |  |  |
| `CreationDate` |  | |  | `ersda` |  |  |
| `CreationTime` |  | |  | `ertim` |  |  |
| `CreatedByUser` |  | |  | `ernam` |  |  |
| `OrderCategory` |  | |  | `cast(autyp as pph_autyp preserving type)` |  |  |
| `CostingErrorLogID` |  | |  | `cast(cmfnr as vdm_cmfnr preserving type)` |  |  |
| `_Order` | | ✓ | | | | |
| `_OrderCategory` | | ✓ | | | | |
| `_ConfirmationGroup` | | ✓ | | | | |
| `_Confirmation` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_CreationDate` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Order` | `I_Order` | [1..1] |
| `_OrderCategory` | `I_OrderCategory` | [1..1] |
| `_ConfirmationGroup` | `I_ConfirmationGroup` | [1..1] |
| `_Confirmation` | `I_OrderConfirmation` | [1..1] |
| `_CreatedByUser` | `I_User` | [1..1] |
| `_CreationDate` | `I_CalendarDate` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.privilegedAssociations: ['_CreatedByUser']
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Failed Actual Cost Calculations'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_ConfFailedActualCostCalc
  as select from afrc

  association [1..1] to I_Order             as _Order             on  $projection.OrderID = _Order.OrderID
  association [1..1] to I_OrderCategory     as _OrderCategory     on  $projection.OrderCategory = _OrderCategory.OrderCategory
  association [1..1] to I_ConfirmationGroup as _ConfirmationGroup on  $projection.ConfirmationGroup = _ConfirmationGroup.ConfirmationGroup
  association [1..1] to I_OrderConfirmation as _Confirmation      on  $projection.ConfirmationGroup = _Confirmation.ConfirmationGroup
                                                                  and $projection.OrderConfirmation = _Confirmation.OrderConfirmation
  association [1..1] to I_User              as _CreatedByUser     on  $projection.CreatedByUser = _CreatedByUser.UserID
  association [1..1] to I_CalendarDate      as _CreationDate      on  $projection.CreationDate = _CreationDate.CalendarDate
{
      // Key
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_LogisticsOrderStdVH', element: 'OrderID' } } ]
      @ObjectModel.foreignKey.association: '_Order'
  key aufnr as OrderID,
      @ObjectModel.foreignKey.association: '_ConfirmationGroup'
  key cast(rueck as pph_rueck preserving type) as ConfirmationGroup,
      @ObjectModel.foreignKey.association: '_Confirmation'
  key cast(rmzhl as pph_rmzhl preserving type) as OrderConfirmation,

      // Admin
      @Semantics.systemDate.createdAt: true
      ersda as CreationDate,
      @Semantics.systemTime.createdAt: true
      ertim as CreationTime,
      @Semantics.user.createdBy: true
      ernam as CreatedByUser,

      // others
      @ObjectModel.foreignKey.association: '_OrderCategory'
      cast(autyp as pph_autyp preserving type) as OrderCategory,
--    @ObjectModel.foreignKey.association: '_CostingErrorLog'      
      cast(cmfnr as vdm_cmfnr preserving type) as CostingErrorLogID,

      // Associations
      _Order,
      _ConfirmationGroup,
      _Confirmation,
      _OrderCategory,
      _CreatedByUser,
      _CreationDate
};
```
