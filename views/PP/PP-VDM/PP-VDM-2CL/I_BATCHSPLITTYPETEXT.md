---
name: I_BATCHSPLITTYPETEXT
description: Batchsplittypetext
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
  - batch
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_BATCHSPLITTYPETEXT

**Batchsplittypetext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(t.ddlanguage as spras preserving type)` |  |  |
| `BatchSplitType` | ✓ | |  | `cast(substring( domvalue_l, 1, 1) as vdm_chsplit preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `BatchSplitTypeName` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |
| `_BatchSplitType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'IBATCHSPLTTYPTXT'
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'BatchSplitType'
@ObjectModel.sapObjectNodeType.name: 'BatchSplitTypeText'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Batch Split Type - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_BatchSplitTypeText as select from dd07t as t
  association to parent I_BatchSplitType as _BatchSplitType on $projection.BatchSplitType = _BatchSplitType.BatchSplitType
  association [0..1] to I_Language       as _Language       on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'      
      @Semantics.language: true
  key cast(t.ddlanguage as spras preserving type)                       as Language,
      @ObjectModel.foreignKey.association: '_BatchSplitType'  
      @ObjectModel.text.element: ['BatchSplitTypeName']
  key cast(substring( domvalue_l, 1, 1) as vdm_chsplit preserving type) as BatchSplitType,
      @Analytics.hidden: true
      @Consumption.hidden: true
      t.domvalue_l                                                      as DomainValue,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      t.ddtext                                                          as BatchSplitTypeName,
  
      // Associations
      _BatchSplitType,
      _Language
}
  where t.domname = 'CHSPLIT'
    and t.as4local = 'A'
    and t.as4vers  = '0000';
```
