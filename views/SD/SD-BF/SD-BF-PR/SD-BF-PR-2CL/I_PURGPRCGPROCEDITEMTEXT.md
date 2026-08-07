---
name: I_PURGPRCGPROCEDITEMTEXT
description: Purgprcgproceditemtext
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
  - text-view
  - text
  - item-level
  - component:SD-BF-PR-2CL
  - lob:Sales & Distribution
---
# I_PURGPRCGPROCEDITEMTEXT

**Purgprcgproceditemtext**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  |  |
| `ConditionUsage` | ✓ | |  |  |
| `ConditionApplication` | ✓ | |  |  |
| `PricingProcedure` | ✓ | |  |  |
| `PricingProcedureStep` | ✓ | |  |  |
| `PricingProcedureCounter` | ✓ | |  |  |
| `ConditionTypeName` |  | |  |  |
| `_ConditionApplication` | | ✓ | | |
| `_ConditionUsage` | | ✓ | | |
| `_PurgPricingProcedureItem` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConditionApplication` | `I_ConditionApplication` | [1..1] |
| `_ConditionUsage` | `I_ConditionUsage` | [1..1] |
| `_PurgPricingProcedureItem` | `I_PurgPricingProcedureItem` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPURPRCGPRCDITMT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Pricing Procedure Item in Purchasing - Text'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.dataCategory: #TEXT
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@Metadata.ignorePropagatedAnnotations:true

//P_PricingProcedureItemText: get Pricing Procedure Item text
define view I_PurgPrcgProcedItemText
  as select from P_PricingProcedureItemText
  association [1..1] to I_ConditionApplication     as _ConditionApplication     on  $projection.ConditionApplication = _ConditionApplication.ConditionApplication
  association [1..1] to I_ConditionUsage           as _ConditionUsage           on  $projection.ConditionUsage = _ConditionUsage.ConditionUsage
  association [1..1] to I_PurgPricingProcedureItem as _PurgPricingProcedureItem on  $projection.ConditionUsage          = _PurgPricingProcedureItem.ConditionUsage
                                                                                and $projection.ConditionApplication    = _PurgPricingProcedureItem.ConditionApplication
                                                                                and $projection.PricingProcedure        = _PurgPricingProcedureItem.PricingProcedure
                                                                                and $projection.PricingProcedureStep    = _PurgPricingProcedureItem.PricingProcedureStep
                                                                                and $projection.PricingProcedureCounter = _PurgPricingProcedureItem.PricingProcedureCounter
  association [0..1] to I_Language                 as _Language                 on  $projection.Language = _Language.Language
{
      @Semantics.language: true
  key Language,
      @ObjectModel.foreignKey.association: '_ConditionUsage'
  key ConditionUsage,
      @ObjectModel.foreignKey.association: '_ConditionApplication'
  key ConditionApplication,
  key PricingProcedure,
  key PricingProcedureStep,
  key PricingProcedureCounter,
      @Semantics.text: true
      ConditionTypeName,
      _ConditionUsage,
      _ConditionApplication,
      _PurgPricingProcedureItem,
      _Language

}where ConditionApplication = 'M'
```
