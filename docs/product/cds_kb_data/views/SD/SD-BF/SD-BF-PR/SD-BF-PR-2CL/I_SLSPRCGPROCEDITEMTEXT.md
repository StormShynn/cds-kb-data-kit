---
name: I_SLSPRCGPROCEDITEMTEXT
description: "Slsprcgproceditemtext"
app_component: SD-BF-PR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
# I_SLSPRCGPROCEDITEMTEXT

**Slsprcgproceditemtext**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  |  |  |
| `PricingProcedure` | ✓ | |  |  |  |  |
| `PricingProcedureStep` | ✓ | |  |  |  |  |
| `PricingProcedureCounter` | ✓ | |  |  |  |  |
| `ConditionUsage` |  | |  |  |  |  |
| `ConditionApplication` |  | |  |  |  |  |
| `ConditionTypeName` |  | |  |  |  |  |
| `_ConditionApplication` | | ✓ | | | | |
| `_ConditionUsage` | | ✓ | | | | |
| `_SlsPricingProcedureItem` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConditionApplication` | `I_ConditionApplication` | [1..1] |
| `_ConditionUsage` | `I_ConditionUsage` | [1..1] |
| `_SlsPricingProcedureItem` | `I_SlsPricingProcedureItem` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISLSPRCGPRCDITMT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Pricing Procedure Item in Sales - Text'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.dataCategory: #TEXT
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@Metadata.ignorePropagatedAnnotations:true

//P_PricingProcedureItemText: get Pricing Procedure Item text from t683t
define view I_SlsPrcgProcedItemText
  as select from P_PricingProcedureItemText
  association [1..1] to I_ConditionApplication    as _ConditionApplication    on  $projection.ConditionApplication = _ConditionApplication.ConditionApplication
  association [1..1] to I_ConditionUsage          as _ConditionUsage          on  $projection.ConditionUsage = _ConditionUsage.ConditionUsage
  association [1..1] to I_SlsPricingProcedureItem as _SlsPricingProcedureItem on  $projection.PricingProcedure        = _SlsPricingProcedureItem.PricingProcedure
                                                                              and $projection.PricingProcedureStep    = _SlsPricingProcedureItem.PricingProcedureStep
                                                                              and $projection.PricingProcedureCounter = _SlsPricingProcedureItem.PricingProcedureCounter
                                                                              //$projection.ConditionUsage          = _SlsPricingProcedureItem.ConditionUsage
                                                                              //and $projection.ConditionApplication    = _SlsPricingProcedureItem.ConditionApplication
  association [0..1] to I_Language                as _Language                on  $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key Language,
  key PricingProcedure,
  key PricingProcedureStep,
  key PricingProcedureCounter,
      @ObjectModel.foreignKey.association: '_ConditionUsage'
      ConditionUsage,
      @ObjectModel.foreignKey.association: '_ConditionApplication'
      ConditionApplication,
      @Semantics.text: true
      ConditionTypeName,
      _ConditionUsage,
      _ConditionApplication,
      _SlsPricingProcedureItem,
      _Language

}where ConditionUsage = 'A'
 and   ConditionApplication = 'V'
```
