---
name: I_RPTVMFGCONFPROCESSINGTYPETXT
description: Rptvmfgconfprocessingtypetxt
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_RPTVMFGCONFPROCESSINGTYPETXT

**Rptvmfgconfprocessingtypetxt**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast(t.ddlanguage as spras preserving type)` |
| key `RptvMfgConfProcessingType` | `cast(substring(t.domvalue_l, 1, 4) as vdm_pp_vaart preserving type)` |
| `DomainValue` | `t.domvalue_l` |
| `RptvMfgConfProcessingTypeName` | `cast(t.ddtext as vdm_pp_vaarttxt preserving type)` |
| `_Language` | *Association* |
| `_RptvMfgConfProcessingType` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IREMCONFPRTYPTXT'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT, #SEARCHABLE_ENTITY, #SQL_DATA_SOURCE]
@ObjectModel.representativeKey: 'RptvMfgConfProcessingType'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Repetitive Manufacturing Confirmation Processing Type - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_RptvMfgConfProcessingTypeTxt
  as select from dd07t as t
  association to parent I_RptvMfgConfProcessingType as _RptvMfgConfProcessingType on $projection.RptvMfgConfProcessingType = _RptvMfgConfProcessingType.RptvMfgConfProcessingType  
  association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'      
      @Semantics.language: true
  key cast(t.ddlanguage as spras preserving type)                         as Language,
      @ObjectModel.foreignKey.association: '_RptvMfgConfProcessingType'  
      @ObjectModel.text.element: ['RptvMfgConfProcessingTypeName']
  key cast(substring(t.domvalue_l, 1, 4) as vdm_pp_vaart preserving type) as RptvMfgConfProcessingType,
      @Analytics.hidden: true
      @Consumption.hidden: true
      t.domvalue_l                                                        as DomainValue,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(t.ddtext as vdm_pp_vaarttxt preserving type)                   as RptvMfgConfProcessingTypeName,
    
      // Associations
      _RptvMfgConfProcessingType,
      _Language
}
  where t.domname = 'SA_VAART'
    and t.as4local = 'A'
    and t.as4vers  = '0000';
```
