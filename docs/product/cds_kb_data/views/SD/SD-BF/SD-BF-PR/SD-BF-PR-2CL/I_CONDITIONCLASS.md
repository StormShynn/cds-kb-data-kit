---
name: I_CONDITIONCLASS
description: "Conditionclass"
app_component: SD-BF-PR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-PR
  - interface-view
  - pricing-condition
  - component:SD-BF-PR-2CL
  - lob:Sales & Distribution
---
# I_CONDITIONCLASS

**Conditionclass**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionClass` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as koaid )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ConditionClassText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICONDITIONCLASS'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Condition Class'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'ConditionClass'
@Metadata.ignorePropagatedAnnotations:true
@Analytics: {dataCategory: #DIMENSION,
             dataExtraction.enabled: true }
@Analytics.internalName:#LOCAL 
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,  #VALUE_HELP_PROVIDER]
@ObjectModel.sapObjectNodeType.name: 'PriceConditionClass'
@ObjectModel.dataCategory: #VALUE_HELP
define view I_ConditionClass
  as select from dd07l
  association [0..*] to I_ConditionClassText as _Text on $projection.ConditionClass = _Text.ConditionClass
{

      @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as koaid ) as ConditionClass,
      _Text

}

where
      domname  = 'KOAID'
  and as4local = 'A'
```
