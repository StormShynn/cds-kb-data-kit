---
name: I_RPTVMFGCONFPROCESSINGTYPETXT
description: "Rptvmfgconfprocessingtypetxt"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(t.ddlanguage as spras preserving type)` |  |  |
| `RptvMfgConfProcessingType` | ✓ | |  | `cast(substring(t.domvalue_l, 1, 4) as vdm_pp_vaart preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `RptvMfgConfProcessingTypeName` |  | |  | `cast(t.ddtext as vdm_pp_vaarttxt preserving type)` |  |  |
| `_Language` | | ✓ | | | | |
| `_RptvMfgConfProcessingType` | | ✓ | | | | |

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
