---
name: I_CONDITIONORIGINTEXT
description: Conditionorigintext
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
# I_CONDITIONORIGINTEXT

**Conditionorigintext**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` |
| `ConditionOrigin` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as kherk )` |
| `ConditionOriginName` |  | |  | `cast ( ddtext as price_element_origin_descr )` |
| `_ConditionOrigin` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConditionOrigin` | `I_ConditionOrigin` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNORIGINTEXT'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Condition Origin - Text' 
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'ConditionOrigin'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT]

define view I_ConditionOriginText
  as select from dd07t
  association [0..1] to I_ConditionOrigin as _ConditionOrigin on $projection.ConditionOrigin = _ConditionOrigin.ConditionOrigin
  association [0..1] to I_Language        as _Language        on $projection.Language = _Language.Language
{
      @Semantics.language:true
  key cast( ddlanguage as spras )                     as Language,
      @ObjectModel.foreignKey.association: '_ConditionOrigin'
  key cast ( substring( domvalue_l, 1, 1 ) as kherk ) as ConditionOrigin,
      @Semantics.text:true
      cast ( ddtext as price_element_origin_descr )   as ConditionOriginName,
      _ConditionOrigin,
      _Language      
}
where
      domname  = 'KHERK'
  and as4local = 'A'
```
