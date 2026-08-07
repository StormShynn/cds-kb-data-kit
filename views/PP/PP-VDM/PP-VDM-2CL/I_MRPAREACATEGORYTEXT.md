---
name: I_MRPAREACATEGORYTEXT
description: Mrpareacategorytext
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
  - text-view
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MRPAREACATEGORYTEXT

**Mrpareacategorytext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MRPAreaCategory` | ✓ | |  | `cast( cast(substring(t.domvalue_l, 1, 2) as abap.numc(2) ) as berty preserving type)` |  |  |
| `Language` | ✓ | |  | `cast(t.ddlanguage as spras preserving type)` |  |  |
| `MRPAreaCategoryName` |  | |  | `cast(t.ddtext as mrpareacategoryname preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_MRPAreaCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_MRPAreaCategory` | `I_MRPAreaCategory` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel.representativeKey: 'MRPAreaCategory'
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IPPMRPAREACATTXT'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'MRP Area Category - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_MRPAreaCategoryText
  as select from dd07t as t
  association [0..1] to I_Language        as _Language        on $projection.Language = _Language.Language
  association [1..1] to I_MRPAreaCategory as _MRPAreaCategory on $projection.MRPAreaCategory = _MRPAreaCategory.MRPAreaCategory
  {
    @ObjectModel.foreignKey.association: '_MRPAreaCategory'
    @ObjectModel.text.element: ['MRPAreaCategoryName']
    key cast( cast(substring(t.domvalue_l, 1, 2) as abap.numc(2) ) as berty preserving type) as MRPAreaCategory,
    @ObjectModel.foreignKey.association: '_Language'      
    @Semantics.language: true
    key cast(t.ddlanguage as spras preserving type)                                          as Language,
    @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}    
    @Semantics.text: true
    cast(t.ddtext as mrpareacategoryname preserving type)                                    as MRPAreaCategoryName,
    @Analytics.hidden: true
    @Consumption.hidden: true
    t.domvalue_l                                                                             as DomainValue,

    // Associations
    _Language,
    @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT] 
    _MRPAreaCategory
  }
  where t.domname = 'BERTY'
    and t.as4local = 'A'
    and t.as4vers  = '0000';
```
