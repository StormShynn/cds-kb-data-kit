---
name: I_PURGINFORECDPRICECNDNAPI01
description: Purginforecdpricecndnapi 01
app_component: MM-PUR-VM-REC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-VM
  - interface-view
  - component:MM-PUR-VM-REC-2CL
  - lob:Sourcing & Procurement
---
# I_PURGINFORECDPRICECNDNAPI01

**Purginforecdpricecndnapi 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-VM-REC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PurchasingInfoRecord` | ✓ | |  |  |
| `PurchasingOrganization` | ✓ | |  |  |
| `PurchasingInfoRecordCategory` | ✓ | |  |  |
| `Plant` | ✓ | |  |  |
| `ConditionRecord` | ✓ | |  |  |
| `ConditionValidityEndDate` | ✓ | |  |  |
| `ConditionSequentialNumberShort` | ✓ | |  |  |
| `ConditionType` |  | |  |  |
| `ConditionValidityStartDate` |  | |  |  |
| `ConditionRateValue` |  | |  |  |
| `ConditionRateValueUnit` |  | |  |  |
| `ConditionQuantity` |  | |  |  |
| `ConditionQuantityUnit` |  | |  |  |
| `ConditionApplication` |  | |  |  |
| `ConditionCalculationTypeShort` |  | |  |  |
| `ConditionIsDeleted` |  | |  |  |
| `ConditionToBaseQtyNmrtr` |  | |  |  |
| `ConditionToBaseQtyDnmntr` |  | |  |  |
| `BaseUnit` |  | |  |  |
| `Material` |  | |  |  |
| `MaterialGroup` |  | |  |  |
| `PurgDocOrderQuantityUnit` |  | |  |  |
| `ConditionCurrency` |  | |  |  |
| `_DocumentCurrency` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Purchasing Info Record Pricing Condition'
@VDM.viewType : #COMPOSITE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API


define view entity I_PurgInfoRecdPriceCndnAPI01
  as select from I_PurgInfoRecdPriceCondition
{

  key PurchasingInfoRecord,
  key PurchasingOrganization,
  key PurchasingInfoRecordCategory,
  key Plant,
      @EndUserText.label: 'Condition Group ID'
  key ConditionRecord,
      @Semantics.businessDate.to: true
  key ConditionValidityEndDate,
  key ConditionSequentialNumberShort,

      ConditionType,

      @Semantics.businessDate.to: true
      ConditionValidityStartDate,

      @EndUserText.label: 'Amount'
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      ConditionRateValue,
      
      @ObjectModel.foreignKey.association: '_DocumentCurrency'
      ConditionRateValueUnit,

      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      @EndUserText.label: 'Condition Pricing'
      ConditionQuantity,

      @EndUserText.label: 'Condition Pricing Unit'
      ConditionQuantityUnit,

      ConditionApplication,
      //      _Validity.ConditionType,
      @EndUserText.label: 'Condition Calculation Type'
      ConditionCalculationTypeShort,

      ConditionIsDeleted,

      @EndUserText.label: 'Numerator for Conversion'
      ConditionToBaseQtyNmrtr,

      @EndUserText.label: 'Denominator for Conversion'
      ConditionToBaseQtyDnmntr,

      @EndUserText.label: 'Base Unit'
      BaseUnit,

      Material,

      MaterialGroup,

      PurgDocOrderQuantityUnit,

      //  From Condition Record View
      ConditionCurrency,

      
      _DocumentCurrency

}
```
