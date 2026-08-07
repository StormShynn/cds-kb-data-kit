---
name: I_PURGQUOTAARRGMTITEMTP_2
description: Purgquotaarrgmtitemtp 2
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
  - transactional-processing
  - item-level
  - component:MM-PUR-SQ-QTA-2CL
  - lob:Sourcing & Procurement
---
# I_PURGQUOTAARRGMTITEMTP_2

**Purgquotaarrgmtitemtp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-SQ-QTA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `QuotaArrangement` | ✓ | |  |  |  |  |
| `QuotaArrangementItem` | ✓ | |  |  |  |  |
| `MaterialProcurementCategory` |  | |  |  |  |  |
| `MaterialProcurementType` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `SupplyingPlant` |  | |  |  |  |  |
| `PurchasingSourceQuota` |  | |  |  |  |  |
| `ProductionVersion` |  | |  |  |  |  |
| `MaterialRoundingProfile` |  | |  |  |  |  |
| `SourceOfSupplyIsAssignedOnce` |  | |  |  |  |  |
| `QuotaReleasePeriodType` |  | |  |  |  |  |
| `NumberOfPeriodsPerRelQuantity` |  | |  |  |  |  |
| `QuotaDeterminationPriority` |  | |  |  |  |  |
| `ManufacturerMaterial` |  | |  |  |  |  |
| `PlannedDeliveryDurationInDays` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `QuotaInPercent` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `QuotaBaseQuantity` |  | |  |  |  |  |
| `QuotaAllocatedQuantity` |  | |  |  |  |  |
| `QuotaMaximumQuantity` |  | |  |  |  |  |
| `MaterialMaxLotSizeQuantity` |  | |  |  |  |  |
| `MaterialMinLotSizeQuantity` |  | |  |  |  |  |
| `MaximumReleaseQuantity` |  | |  |  |  |  |
| `MaterialBaseUnit` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `IsBusinessPurposeCompleted` |  | |  |  |  |  |
| `_Supplier` | | ✓ | | | | |
| `_PurgQuotaArrgmt` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Quota Arrangement Item - TP'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: [ 'QuotaArrangement', 'QuotaArrangementItem' ]
//@ObjectModel.representativeKey: 'QuotaArrangementItem' 

@ObjectModel: {
    usageType: {
      sizeCategory: #M,
      serviceQuality: #C,
      dataClass: #TRANSACTIONAL
    }
  }

@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view entity I_PurgQuotaArrgmtItemTP_2
  as projection on R_PurgQuotaArrgmtItemTP as _PurgQuotaArrgmtItem
{
//      @ObjectModel.foreignKey: { association : '_PurgQuotaArrgmt' }
  key QuotaArrangement,
  key QuotaArrangementItem,
      MaterialProcurementCategory,
      MaterialProcurementType,
      @Consumption.semanticObject: 'Supplier'
      Supplier,
      SupplyingPlant,
      PurchasingSourceQuota,
      ProductionVersion,
      MaterialRoundingProfile,
      SourceOfSupplyIsAssignedOnce,
      QuotaReleasePeriodType,
      NumberOfPeriodsPerRelQuantity,
      QuotaDeterminationPriority,
      ManufacturerMaterial,
      PlannedDeliveryDurationInDays,
      Plant,
      QuotaInPercent,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit' 
      QuotaBaseQuantity,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit' 
      QuotaAllocatedQuantity,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit' 
      QuotaMaximumQuantity,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit' 
      MaterialMaxLotSizeQuantity,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit' 
      MaterialMinLotSizeQuantity,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit' 
      MaximumReleaseQuantity,
      MaterialBaseUnit,
      AuthorizationGroup, //This field is added for DCL and this CDS will be C1 released
      @Semantics.booleanIndicator 
      IsBusinessPurposeCompleted, //This field is added for DCL and this CDS will be C1 released
      
      _Supplier,
      /* Associations */      
      _PurgQuotaArrgmt : redirected to parent I_PurgQuotaArrgmtTP_2
}
```
