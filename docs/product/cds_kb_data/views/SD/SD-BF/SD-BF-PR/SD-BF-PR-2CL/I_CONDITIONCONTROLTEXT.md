---
name: I_CONDITIONCONTROLTEXT
description: "Conditioncontroltext"
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
  - text-view
  - pricing-condition
  - text
  - component:SD-BF-PR-2CL
  - lob:Sales & Distribution
---
# I_CONDITIONCONTROLTEXT

**Conditioncontroltext**

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
| `ConditionControl` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as ksteu )` |  |  |
| `ConditionControlName` |  | |  | `cast ( ddtext as price_element_control_descr )` |  |  |
| `_ConditionControl` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConditionControl` | `I_ConditionControl` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNCONTROLTEXT'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Condition Control - Text'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'ConditionControl'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT]

define view I_ConditionControlText
  as select from dd07t
  association [0..1] to I_ConditionControl as _ConditionControl on $projection.ConditionControl = _ConditionControl.ConditionControl
  association [0..1] to I_Language         as _Language         on $projection.Language = _Language.Language
{
      @Semantics.language:true
  key cast( ddlanguage as spras )                     as Language,
      @ObjectModel.foreignKey.association: '_ConditionControl'
  key cast ( substring( domvalue_l, 1, 1 ) as ksteu ) as ConditionControl,
      @Semantics.text:true
      cast ( ddtext as price_element_control_descr )  as ConditionControlName,
      _ConditionControl,
      _Language
}
where
      domname  = 'KSTEU'
  and as4local = 'A'
```
