---
name: I_PRICINGCONDITIONTYPETEXT
description: "Pricing ConditionTYPETEXT"
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_PRICINGCONDITIONTYPETEXT

**Pricing ConditionTYPETEXT**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `ConditionApplication` | ✓ | |  | `kappl` |  |  |
| `ConditionType` | ✓ | |  | `kschl` |  |  |
| `ConditionTypeName` |  | |  | `cast(vtext as vtxtm )` |  |  |
| `_ConditionApplication` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConditionApplication` | `I_ConditionApplication` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRCGCNDNTYPET'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Pricing Condition Type - Text'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #GENERIC
@AbapCatalog.buffering.numberOfKeyFields: 001
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ConditionType'
@Metadata.ignorePropagatedAnnotations:true
define view I_PricingConditionTypeText
  as select from t685t
  association [0..1] to I_ConditionApplication as _ConditionApplication on $projection.ConditionApplication = _ConditionApplication.ConditionApplication
{
      @Semantics.language: true
  key spras                 as Language,
      @ObjectModel.foreignKey.association: '_ConditionApplication'
  key kappl                 as ConditionApplication,
  key kschl                 as ConditionType,
      @Semantics.text: true
      cast(vtext as vtxtm ) as ConditionTypeName,
      _ConditionApplication
}
where
  kvewe = 'A'
```
