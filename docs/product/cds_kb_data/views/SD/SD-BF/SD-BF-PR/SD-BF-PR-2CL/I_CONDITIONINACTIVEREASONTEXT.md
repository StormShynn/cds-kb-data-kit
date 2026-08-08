---
name: I_CONDITIONINACTIVEREASONTEXT
description: "Conditioninactivereasontext"
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
# I_CONDITIONINACTIVEREASONTEXT

**Conditioninactivereasontext**

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
| `ConditionInactiveReason` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as kinak )` |  |  |
| `ConditionInactiveReasonName` |  | |  | `cast ( ddtext as price_element_inactive_descr )` |  |  |
| `_ConditionInactiveReason` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConditionInactiveReason` | `I_ConditionInactiveReason` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNINACTRSNT'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Condition Inactive Reason - Text'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'ConditionInactiveReason'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT]

define view I_ConditionInactiveReasonText
  as select from dd07t
  association [0..1] to I_ConditionInactiveReason as _ConditionInactiveReason on $projection.ConditionInactiveReason = _ConditionInactiveReason.ConditionInactiveReason
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{
      @Semantics.language:true
  key cast( ddlanguage as spras )                     as Language,
      @ObjectModel.foreignKey.association: '_ConditionInactiveReason'
  key cast ( substring( domvalue_l, 1, 1 ) as kinak ) as ConditionInactiveReason,
      @Semantics.text:true
      cast ( ddtext as price_element_inactive_descr ) as ConditionInactiveReasonName,
      _ConditionInactiveReason,
      _Language
}
where
      domname  = 'KINAK'
  and as4local = 'A'
```
