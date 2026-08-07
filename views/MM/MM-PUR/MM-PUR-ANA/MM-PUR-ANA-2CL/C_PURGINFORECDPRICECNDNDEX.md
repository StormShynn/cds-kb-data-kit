---
name: C_PURGINFORECDPRICECNDNDEX
description: "Purginforecdpricecndndex"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - data-extraction
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_PURGINFORECDPRICECNDNDEX

**Purginforecdpricecndndex**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchasingInfoRecord` | ✓ | |  |  |  |  |
| `PurchasingOrganization` | ✓ | |  |  |  |  |
| `PurchasingInfoRecordCategory` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `ConditionRecord` | ✓ | |  |  |  |  |
| `ConditionValidityEndDate` | ✓ | |  |  |  |  |
| `ConditionSequentialNumberShort` | ✓ | |  |  |  |  |
| `ConditionType` |  | |  |  |  |  |
| `ConditionValidityStartDate` |  | |  |  |  |  |
| `ConditionRateValue` |  | |  |  |  |  |
| `ConditionRateValueUnit` |  | |  |  |  |  |
| `ConditionQuantity` |  | |  |  |  |  |
| `ConditionQuantityUnit` |  | |  |  |  |  |
| `ConditionApplication` |  | |  |  |  |  |
| `ConditionCalculationTypeShort` |  | |  |  |  |  |
| `ConditionIsDeleted` |  | |  |  |  |  |
| `ConditionToBaseQtyNmrtr` |  | |  |  |  |  |
| `ConditionToBaseQtyDnmntr` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `PurgDocOrderQuantityUnit` |  | |  |  |  |  |
| `ConditionCurrency` |  | |  |  |  |  |

## Source Code

```abap
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MIXED
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Search.searchable: true
@VDM.viewType: #CONSUMPTION
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE , #EXTRACTION_DATA_SOURCE ,#CDS_MODELING_ASSOCIATION_TARGET]
@Analytics.dataExtraction.enabled: true
@Analytics.dataCategory: #FACT
@EndUserText.label: 'Purchasing Info Record Pricing Condition'
@ObjectModel.sapObjectNodeType.name: 'PurchasingInfoRecord'
@Metadata.ignorePropagatedAnnotations:true

define view entity C_PurgInfoRecdPriceCndnDEX
  as select from I_PurgInfoRecdPriceCndnAPI01
{
 
      @Search.defaultSearchElement: true
  key PurchasingInfoRecord,
  key PurchasingOrganization,
  key PurchasingInfoRecordCategory,
  key Plant,
  key ConditionRecord,
  key ConditionValidityEndDate,
  key ConditionSequentialNumberShort,

      ConditionType,
      ConditionValidityStartDate,

      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      ConditionRateValue,
      ConditionRateValueUnit,

      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionQuantity,
      ConditionQuantityUnit,

      ConditionApplication,
      ConditionCalculationTypeShort,
      ConditionIsDeleted,
      ConditionToBaseQtyNmrtr,
      ConditionToBaseQtyDnmntr,
      BaseUnit,
      Material,
      MaterialGroup,
      PurgDocOrderQuantityUnit,
      ConditionCurrency

}
```
