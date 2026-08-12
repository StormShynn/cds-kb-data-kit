---
name: I_PURGPRICINGPROCEDURETEXT
description: "Purgpricingproceduretext"
app_component: SD-BF-PR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
  - pricing
  - text
  - component:SD-BF-PR-2CL
  - lob:Sales & Distribution
---
# I_PURGPRICINGPROCEDURETEXT

**Purgpricingproceduretext**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  |  |  |
| `ConditionUsage` | ✓ | |  |  |  |  |
| `ConditionApplication` | ✓ | |  |  |  |  |
| `PricingProcedure` | ✓ | |  |  |  |  |
| `PricingProcedureName` |  | |  |  |  |  |
| `_ConditionUsage` | | ✓ | | | | |
| `_ConditionApplication` | | ✓ | | | | |
| `_PurgPricingProcedure` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConditionUsage` | `I_ConditionUsage` | [1..1] |
| `_ConditionApplication` | `I_ConditionApplication` | [1..1] |
| `_PurgPricingProcedure` | `I_PurgPricingProcedure` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPURGPRCGPROCEDT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Purchasing Pricing Procedure - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'PricingProcedure'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
//P_PricingProcedureText: get Pricing Procedure Text from t683u
define view
I_PurgPricingProcedureText
as select from
P_PricingProcedureText
association [1..1] to I_ConditionUsage       as _ConditionUsage       on  $projection.ConditionUsage = _ConditionUsage.ConditionUsage
association [1..1] to I_ConditionApplication as _ConditionApplication on  $projection.ConditionApplication = _ConditionApplication.ConditionApplication
association [1..1] to I_PurgPricingProcedure as _PurgPricingProcedure on  $projection.ConditionUsage       = _PurgPricingProcedure.ConditionUsage
                                                                      and $projection.ConditionApplication = _PurgPricingProcedure.ConditionApplication
                                                                      and $projection.PricingProcedure     = _PurgPricingProcedure.PricingProcedure {
      @Semantics.language: true
  key Language,
      @ObjectModel.foreignKey.association: '_ConditionUsage'
  key ConditionUsage,
      @ObjectModel.foreignKey.association: '_ConditionApplication'
  key ConditionApplication,
  key PricingProcedure,
      @Semantics.text: true
      PricingProcedureName,
      _ConditionUsage,
      _ConditionApplication,
      _PurgPricingProcedure
}
where
  ConditionApplication = 'M'
```
