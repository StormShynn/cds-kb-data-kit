---
name: I_SLSPRICINGPROCEDURETEXT
description: "Slspricingproceduretext"
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
# I_SLSPRICINGPROCEDURETEXT

**Slspricingproceduretext**

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
| `PricingProcedure` | ✓ | |  |  |  |  |
| `ConditionUsage` |  | |  |  |  |  |
| `ConditionApplication` |  | |  |  |  |  |
| `PricingProcedureName` |  | |  |  |  |  |
| `_ConditionUsage` | | ✓ | | | | |
| `_ConditionApplication` | | ✓ | | | | |
| `_SlsPricingProcedure` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConditionUsage` | `I_ConditionUsage` | [1..1] |
| `_ConditionApplication` | `I_ConditionApplication` | [1..1] |
| `_SlsPricingProcedure` | `I_SlsPricingProcedure` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISLSPRCGPROCEDT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Pricing Procedure in Sales - Text'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'PricingProcedure'
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@Metadata.ignorePropagatedAnnotations:true

//P_PricingProcedureText: get Prcing procedure text from t683u
define view I_SlsPricingProcedureText
  as select from P_PricingProcedureText
  association [1..1] to I_ConditionUsage       as _ConditionUsage       on  $projection.ConditionUsage = _ConditionUsage.ConditionUsage
  association [1..1] to I_ConditionApplication as _ConditionApplication on  $projection.ConditionApplication = _ConditionApplication.ConditionApplication
  association [1..1] to I_SlsPricingProcedure  as _SlsPricingProcedure  on  $projection.PricingProcedure     = _SlsPricingProcedure.PricingProcedure
                                                                        //$projection.ConditionUsage       = _SlsPricingProcedure.ConditionUsage
                                                                        //and $projection.ConditionApplication = _SlsPricingProcedure.ConditionApplication
                                                                        //and 
{
      @Semantics.language: true
  key Language,
  key PricingProcedure,
      @ObjectModel.foreignKey.association: '_ConditionUsage'
      ConditionUsage,
      @ObjectModel.foreignKey.association: '_ConditionApplication'
      ConditionApplication,
      @Semantics.text: true
      PricingProcedureName,
      _ConditionUsage,
      _ConditionApplication,
      _SlsPricingProcedure
}where ConditionUsage = 'A'
 and   ConditionApplication = 'V'
```
