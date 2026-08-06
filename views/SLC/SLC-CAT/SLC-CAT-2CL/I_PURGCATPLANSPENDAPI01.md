---
name: I_PURGCATPLANSPENDAPI01
description: Purgcatplanspendapi 01
app_component: SLC-CAT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-CAT
  - interface-view
  - component:SLC-CAT-2CL
  - lob:Other
---
# I_PURGCATPLANSPENDAPI01

**Purgcatplanspendapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-CAT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PurgCatPlndSpendUUID` | `PurgCatPlndSpendUUID` |
| `PurgCatUUID` | `PurgCatUUID` |
| `PurgCatPlndSpendValidFromDate` | `PurgCatPlndSpendValidFromDate` |
| `PurgCatPlndSpendValidToDate` | `PurgCatPlndSpendValidToDate` |
| `PurgCatPlndSpendAmount` | `PurgCatPlndSpendAmount` |
| `PurgCatPlndSpendCurrency` | `PurgCatPlndSpendCurrency` |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPUCPLSPENDAPI01'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@EndUserText.label: 'Planned Spend for Purchasing Category'
define view I_PurgCatPlanSpendAPI01 as select from I_PurchasingCategoryPlanSpend {
  key PurgCatPlndSpendUUID, 
  PurgCatUUID, 
  PurgCatPlndSpendValidFromDate, 
  PurgCatPlndSpendValidToDate,
  
  @Semantics.amount.currencyCode: 'PurgCatPlndSpendCurrency' 
  PurgCatPlndSpendAmount, 
  PurgCatPlndSpendCurrency
}
```
