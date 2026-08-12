---
name: I_PURGPRICINGPROCEDURE
description: "Purgpricingprocedure"
app_component: SD-BF-PR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
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
  - pricing
  - component:SD-BF-PR-2CL
  - lob:Sales & Distribution
---
# I_PURGPRICINGPROCEDURE

**Purgpricingprocedure**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionUsage` | ✓ | |  |  |  |  |
| `ConditionApplication` | ✓ | |  |  |  |  |
| `PricingProcedure` | ✓ | |  |  |  |  |
| `InclusionPoint` |  | |  |  |  |  |
| `_PurgPricingProcedureItem` | | ✓ | | | | |
| `_ConditionUsage` | | ✓ | | | | |
| `_ConditionApplication` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurgPricingProcedureItem` | `I_PurgPricingProcedureItem` | [0..*] |
| `_ConditionUsage` | `I_ConditionUsage` | [1..1] |
| `_ConditionApplication` | `I_ConditionApplication` | [1..1] |
| `_Text` | `I_PurgPricingProcedureText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPURGPRCGPROCED'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Pricing Procedure in Purchasing'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.representativeKey: 'PricingProcedure'
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name:'PurchasingPricingProcedure'
//P_PricingProcedure get Pricing Procedure from t683
define view I_PurgPricingProcedure
  as select from P_PricingProcedure as _Procedure
  association [0..*] to I_PurgPricingProcedureItem as _PurgPricingProcedureItem on  $projection.ConditionUsage       = _PurgPricingProcedureItem.ConditionUsage
                                                                                and $projection.ConditionApplication = _PurgPricingProcedureItem.ConditionApplication
                                                                                and $projection.PricingProcedure     = _PurgPricingProcedureItem.PricingProcedure

  association [1..1] to I_ConditionUsage           as _ConditionUsage           on  $projection.ConditionUsage = _ConditionUsage.ConditionUsage
  association [1..1] to I_ConditionApplication     as _ConditionApplication     on  $projection.ConditionApplication = _ConditionApplication.ConditionApplication
  association [0..*] to I_PurgPricingProcedureText as _Text                     on  $projection.ConditionUsage       = _Text.ConditionUsage
                                                                                and $projection.ConditionApplication = _Text.ConditionApplication
                                                                                and $projection.PricingProcedure     = _Text.PricingProcedure
{
       @ObjectModel.foreignKey.association: '_ConditionUsage'
  key  ConditionUsage,
       @ObjectModel.foreignKey.association: '_ConditionApplication'
  key  ConditionApplication,
  key  PricingProcedure,
       _ConditionUsage,
       _ConditionApplication,
       _Text,
       _PurgPricingProcedureItem,
       InclusionPoint
}where ConditionUsage = 'A'
 and   ConditionApplication = 'M'
```
