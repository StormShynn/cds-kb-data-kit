---
name: I_CONDITIONCALCULATIONTYPETEXT
description: Conditioncalculationtypetext
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
  - pricing-condition
  - text
  - component:SD-BF-PR-2CL
  - lob:Sales & Distribution
---
# I_CONDITIONCALCULATIONTYPETEXT

**Conditioncalculationtypetext**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` |  |  |
| `ConditionCalculationType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 3 ) as krech_long )` |  |  |
| `ConditionCalculationTypeName` |  | |  | `cast ( substring ( ddtext, 1, 30 ) as prct_calculation_type_descr )` |  |  |
| `_ConditionCalculationType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConditionCalculationType` | `I_ConditionCalculationType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNCALCTYPET'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Condition Calculation Type - Text'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.representativeKey: 'ConditionCalculationType'
@Metadata.ignorePropagatedAnnotations:true
define view I_ConditionCalculationTypeText
  as select from dd07t
  association [0..1] to I_ConditionCalculationType as _ConditionCalculationType on $projection.ConditionCalculationType = _ConditionCalculationType.ConditionCalculationType
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{
      @Semantics.language:true
  key cast( ddlanguage as spras )                                         as Language,
      @ObjectModel.foreignKey.association: '_ConditionCalculationType'
  key cast ( substring( domvalue_l, 1, 3 ) as krech_long )                as ConditionCalculationType,
      @Semantics.text:true
      cast ( substring ( ddtext, 1, 30 ) as prct_calculation_type_descr ) as ConditionCalculationTypeName,
      _ConditionCalculationType,
      _Language
}
where
      domname  = 'KRECH3'
  and as4local = 'A'
```
