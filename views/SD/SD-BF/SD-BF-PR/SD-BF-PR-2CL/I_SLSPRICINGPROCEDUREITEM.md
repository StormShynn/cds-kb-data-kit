---
name: I_SLSPRICINGPROCEDUREITEM
description: Slspricingprocedureitem
app_component: SD-BF-PR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-PR
  - interface-view
  - pricing
  - item-level
  - component:SD-BF-PR-2CL
  - lob:Sales & Distribution
---
# I_SLSPRICINGPROCEDUREITEM

**Slspricingprocedureitem**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PricingProcedure` | ✓ | |  |  |  |  |
| `PricingProcedureStep` | ✓ | |  |  |  |  |
| `PricingProcedureCounter` | ✓ | |  |  |  |  |
| `ConditionUsage` |  | |  |  |  |  |
| `ConditionApplication` |  | |  |  |  |  |
| `ConditionType` |  | |  |  |  |  |
| `PrcgProcedItemFromRefStep` |  | |  |  |  |  |
| `PrcgProcedItemToRefStep` |  | |  |  |  |  |
| `ConditionIsManuallyDtmnd` |  | |  |  |  |  |
| `PrcgProcedItemSubtotal` |  | |  |  |  |  |
| `ConditionIsForStatistics` |  | |  |  |  |  |
| `AccountKeyForGLAccount` |  | |  |  |  |  |
| `AcctKeyForAccrualsGLAccount` |  | |  |  |  |  |
| `PricingProcedureItemPrintType` |  | |  |  |  |  |
| `ConditionIsMandatory` |  | |  |  |  |  |
| `CndnIsAcctDetnRelevant` |  | |  |  |  |  |
| `PriceElementAccessLevel` |  | |  |  |  |  |
| `InclusionPointFromToIsCopied` |  | |  |  |  |  |
| `_ConditionUsage` | | ✓ | | | | |
| `_ConditionApplication` | | ✓ | | | | |
| `_ConditionType` | | ✓ | | | | |
| `_PrcgProcedItemPrntType` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_SalesPricingProcedure` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConditionUsage` | `I_ConditionUsage` | [1..1] |
| `_ConditionApplication` | `I_ConditionApplication` | [1..1] |
| `_ConditionType` | `I_ConditionType` | [1..1] |
| `_PrcgProcedItemPrntType` | `I_PrcgProcedItemPrntType` | [0..1] |
| `_Text` | `I_SlsPrcgProcedItemText` | [0..*] |
| `_SalesPricingProcedure` | `I_SlsPricingProcedure` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISLSPRCGPRCDITM'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Pricing Procedure Item in Sales'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@Metadata.ignorePropagatedAnnotations:true

//P_PricingProcedureItem: get Pricing Procedure Item from t683s
define view I_SlsPricingProcedureItem
  as select from P_PricingProcedureItem
  association [1..1] to I_ConditionUsage         as _ConditionUsage         on  $projection.ConditionUsage = _ConditionUsage.ConditionUsage
  association [1..1] to I_ConditionApplication   as _ConditionApplication   on  $projection.ConditionApplication = _ConditionApplication.ConditionApplication
  association [1..1] to I_ConditionType          as _ConditionType          on  $projection.ConditionUsage       = _ConditionType.ConditionUsage
                                                                            and $projection.ConditionApplication = _ConditionType.ConditionApplication
                                                                            and $projection.ConditionType        = _ConditionType.ConditionType
  association [0..1] to I_PrcgProcedItemPrntType as _PrcgProcedItemPrntType on  $projection.PricingProcedureItemPrintType = _PrcgProcedItemPrntType.PricingProcedureItemPrintType
  association [0..*] to I_SlsPrcgProcedItemText  as _Text                   on  $projection.PricingProcedure        = _Text.PricingProcedure
                                                                            and $projection.PricingProcedureStep    = _Text.PricingProcedureStep
                                                                            and $projection.PricingProcedureCounter = _Text.PricingProcedureCounter
                                                                            //$projection.ConditionUsage          = _Text.ConditionUsage
                                                                            //and $projection.ConditionApplication    = _Text.ConditionApplication
  association [1..1] to I_SlsPricingProcedure    as _SalesPricingProcedure  on  $projection.PricingProcedure     = _SalesPricingProcedure.PricingProcedure
                                                                            //and $projection.ConditionUsage       = _SalesPricingProcedure.ConditionUsage
                                                                            //and $projection.ConditionApplication = _SalesPricingProcedure.ConditionApplication
                                                                             

{                        
  key                     PricingProcedure,
  key                     PricingProcedureStep,
  key                     PricingProcedureCounter,
                          @ObjectModel.foreignKey.association: '_ConditionUsage'
                          ConditionUsage,
                          @ObjectModel.foreignKey.association: '_ConditionApplication'
                          ConditionApplication,
                          @ObjectModel.text.association: '_Text'
                          ConditionType,
                          PrcgProcedItemFromRefStep,
                          PrcgProcedItemToRefStep,
                          ConditionIsManuallyDtmnd,
                          PrcgProcedItemSubtotal,
                          ConditionIsForStatistics,
                          AccountKeyForGLAccount,
                          AcctKeyForAccrualsGLAccount,
                          PricingProcedureItemPrintType,
                          ConditionIsMandatory,
                          CndnIsAcctDetnRelevant,
                          _ConditionUsage,
                          _ConditionApplication,
                          _ConditionType,
                          _PrcgProcedItemPrntType,
                          _Text,
                          _SalesPricingProcedure,
                          PriceElementAccessLevel,
                          InclusionPointFromToIsCopied
}where ConditionUsage = 'A'
 and   ConditionApplication = 'V'
```
