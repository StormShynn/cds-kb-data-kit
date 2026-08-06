---
name: I_PURGQUOTAARRGMTITEMAPI01
description: Purgquotaarrgmtitemapi 01
app_component: MM-PUR-SQ-QTA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-SQ
  - interface-view
  - item-level
  - component:MM-PUR-SQ-QTA-2CL
  - lob:Sourcing & Procurement
---
# I_PURGQUOTAARRGMTITEMAPI01

**Purgquotaarrgmtitemapi 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-SQ-QTA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `QuotaArrangement` | `QuotaArrangement` |
| key `QuotaArrangementItem` | `QuotaArrangementItem` |
| `MaterialProcurementCategory` | `MaterialProcurementCategory` |
| `MaterialProcurementType` | `MaterialProcurementType` |
| `Supplier` | `Supplier` |
| `SupplyingPlant` | `SupplyingPlant` |
| `PurchasingSourceQuota` | `PurchasingSourceQuota` |
| `QuotaBaseQuantity` | `QuotaBaseQuantity` |
| `QuotaAllocatedQuantity` | `QuotaAllocatedQuantity` |
| `QuotaMaximumQuantity` | `QuotaMaximumQuantity` |
| `ProductionVersion` | `ProductionVersion` |
| `MaterialMaxLotSizeQuantity` | `MaterialMaxLotSizeQuantity` |
| `MaterialMinLotSizeQuantity` | `MaterialMinLotSizeQuantity` |
| `MaterialRoundingProfile` | `MaterialRoundingProfile` |
| `SourceOfSupplyIsAssignedOnce` | `SourceOfSupplyIsAssignedOnce` |
| `MaximumReleaseQuantity` | `MaximumReleaseQuantity` |
| `QuotaReleasePeriodType` | `QuotaReleasePeriodType` |
| `NumberOfPeriodsPerRelQuantity` | `NumberOfPeriodsPerRelQuantity` |
| `QuotaDeterminationPriority` | `QuotaDeterminationPriority` |
| `ManufacturerMaterial` | `ManufacturerMaterial` |
| `PlannedDeliveryDurationInDays` | `PlannedDeliveryDurationInDays` |
| `Plant` | `Plant` |
| `MaterialBaseUnit` | `MaterialBaseUnit` |
| `AuthorizationGroup` | `I_PurgQuotaArrgmtItem._Supplier.AuthorizationGroup` |
| `IsBusinessPurposeCompleted` | `I_PurgQuotaArrgmtItem._Supplier.IsBusinessPurposeCompleted` |
| `DataControllerSet` | `I_PurgQuotaArrgmtItem._Supplier.DataControllerSet` |
| `DataController1` | `I_PurgQuotaArrgmtItem._Supplier.DataController1` |
| `DataController2` | `I_PurgQuotaArrgmtItem._Supplier.DataController2` |
| `DataController3` | `I_PurgQuotaArrgmtItem._Supplier.DataController3` |
| `DataController4` | `I_PurgQuotaArrgmtItem._Supplier.DataController4` |
| `DataController5` | `I_PurgQuotaArrgmtItem._Supplier.DataController5` |
| `DataController6` | `I_PurgQuotaArrgmtItem._Supplier.DataController6` |
| `DataController7` | `I_PurgQuotaArrgmtItem._Supplier.DataController7` |
| `DataController8` | `I_PurgQuotaArrgmtItem._Supplier.DataController8` |
| `DataController9` | `I_PurgQuotaArrgmtItem._Supplier.DataController9` |
| `DataController10` | `I_PurgQuotaArrgmtItem._Supplier.DataController10` |
| `_PurgQuotaArrgmt` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurgQuotaArrgmt` | `I_PurgQuotaArrgmtAPI01` | [1..1] |

## Source Code

```abap
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M 

@ObjectModel.semanticKey:['QuotaArrangement', 'QuotaArrangementItem']
//@ObjectModel.representativeKey: 'QuotaArrangementItem'

@AbapCatalog.sqlViewName: 'IPURGQAITEMAPI01'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Purchasing Quota Arrangement Item'

@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type :#PUBLIC_LOCAL_API
@AccessControl.personalData.blocking: #REQUIRED
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view I_PurgQuotaArrgmtItemAPI01 as select from I_PurgQuotaArrgmtItem
association [1..1] to I_PurgQuotaArrgmtAPI01 as _PurgQuotaArrgmt on $projection.QuotaArrangement = _PurgQuotaArrgmt.QuotaArrangement
 {
  key QuotaArrangement,
  key QuotaArrangementItem,
  MaterialProcurementCategory,
  MaterialProcurementType,
  Supplier,
  SupplyingPlant,
  PurchasingSourceQuota,
  @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
  QuotaBaseQuantity,
  @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
  QuotaAllocatedQuantity,
  @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
  QuotaMaximumQuantity,
  ProductionVersion,
  @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
  MaterialMaxLotSizeQuantity,
  @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
  MaterialMinLotSizeQuantity,
  MaterialRoundingProfile,
  SourceOfSupplyIsAssignedOnce,
  @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
  MaximumReleaseQuantity,
  QuotaReleasePeriodType,
  NumberOfPeriodsPerRelQuantity,
  QuotaDeterminationPriority,
  ManufacturerMaterial,
  PlannedDeliveryDurationInDays,
  Plant,
  MaterialBaseUnit,
  I_PurgQuotaArrgmtItem._Supplier.AuthorizationGroup as AuthorizationGroup,
  @Semantics.booleanIndicator: true
  I_PurgQuotaArrgmtItem._Supplier.IsBusinessPurposeCompleted as IsBusinessPurposeCompleted,
  @Consumption.hidden:true
  @UI.hidden:true
  I_PurgQuotaArrgmtItem._Supplier.DataControllerSet,                                                                                                                                                                      
  @Consumption.hidden:true
  @UI.hidden:true
  I_PurgQuotaArrgmtItem._Supplier.DataController1,                                                                                                                                                                      
  //added only for DCL check
  @Consumption.hidden:true
  @UI.hidden:true
  I_PurgQuotaArrgmtItem._Supplier.DataController2,
  //added only for DCL check
  @Consumption.hidden:true
  @UI.hidden:true
  I_PurgQuotaArrgmtItem._Supplier.DataController3,
  //added only for DCL check
  @Consumption.hidden:true
  @UI.hidden:true
  I_PurgQuotaArrgmtItem._Supplier.DataController4,
  //added only for DCL check
  @Consumption.hidden:true
  @UI.hidden:true
  I_PurgQuotaArrgmtItem._Supplier.DataController5,                                                                                                                                                                       
  @Consumption.hidden:true
  @UI.hidden:true
  I_PurgQuotaArrgmtItem._Supplier.DataController6,                                                                                                                                                                        
  //added only for DCL check
  @Consumption.hidden:true
  @UI.hidden:true
  I_PurgQuotaArrgmtItem._Supplier.DataController7,                                                                                                                                                                      
  //added only for DCL check
  @Consumption.hidden:true
  @UI.hidden:true
  I_PurgQuotaArrgmtItem._Supplier.DataController8,
  //added only for DCL check
  @Consumption.hidden:true
  @UI.hidden:true
  I_PurgQuotaArrgmtItem._Supplier.DataController9,                                                                                                                                   
  //added only for DCL check
  @Consumption.hidden:true
  @UI.hidden:true
  I_PurgQuotaArrgmtItem._Supplier.DataController10,
  _PurgQuotaArrgmt
}
```
