---
name: I_SLSPRICINGCONDITIONTYPETEXT
description: "SLSPricing ConditionTYPETEXT"
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-CM
  - interface-view
  - text-view
  - pricing
  - pricing-condition
  - text
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
  - bo:PricingCondition
---
# I_SLSPRICINGCONDITIONTYPETEXT

**SLSPricing ConditionTYPETEXT**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  |  |  |
| `ConditionType` | ✓ | |  |  |  |  |
| `ConditionTypeName` |  | |  |  |  |  |
| `_SlsPricingConditionType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SlsPricingConditionType` | `I_SlsPricingConditionType` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISLSCNDNTYPET'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.dataCategory: #TEXT
@AbapCatalog.preserveKey:true
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE    
@EndUserText.label: 'Pricing Condition Type in Sales - Text'

define view I_SlsPricingConditionTypeText
  as select from I_ConditionTypeText
  association [1..1] to I_SlsPricingConditionType as _SlsPricingConditionType on  $projection.ConditionType        = _SlsPricingConditionType.ConditionType
{
      @Semantics.language: true
  key Language,
  //key ConditionUsage,
  //@ObjectModel.sapObjectNodeTypeReference: 'PricingConditionApplication'
  //key ConditionApplication,
  key ConditionType,
      @Semantics.text: true
      ConditionTypeName,
      _SlsPricingConditionType
}
where
      ConditionUsage       = 'A'
  and ConditionApplication = 'V'
```
