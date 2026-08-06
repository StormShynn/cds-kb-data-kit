---
name: I_MATERIALDOCUMENTPOSTGTYPETXT
description: Materialdocumentpostgtypetxt
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-VDM
  - interface-view
  - material
  - document
  - component:MM-IM-VDM-SGM-2CL
  - lob:Sourcing & Procurement
  - bo:Material
---
# I_MATERIALDOCUMENTPOSTGTYPETXT

**Materialdocumentpostgtypetxt**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MaterialDocumentPostingType` | `cast(substring(domvalue_l, 1, 1) as kzsto)` |
| key `Language` | `cast(ddlanguage as spras preserving type)` |
| `MaterialDocumentPostgTypeName` | `cast(ddtext as vdm_lkngseq_text preserving type)` |
| `_MatlDocPostgType` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MatlDocPostgType` | `I_MaterialDocumentPostingType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics: { technicalName: 'IMatlDocPostgTpTxt',
              dataExtraction.enabled:true }

@EndUserText.label: 'Material Document Posting Type - Text'

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'MaterialDocumentPostingType',
                supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #LANGUAGE_DEPENDENT_TEXT,
                                        #SEARCHABLE_ENTITY,
                                        #SQL_DATA_SOURCE],
                sapObjectNodeType.name: 'MaterialDocumentPostingTypeTxt',
                usageType: { serviceQuality: #A, 
                             dataClass: #META, 
                             sizeCategory: #S } }

@Search.searchable: true

@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #BASIC }
define view entity I_MaterialDocumentPostgTypeTxt 
  as select from dd07t

  association [0..1] to I_MaterialDocumentPostingType  as _MatlDocPostgType on $projection.MaterialDocumentPostingType = _MatlDocPostgType.MaterialDocumentPostingType
  association [0..1] to I_Language                     as _Language         on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_MatlDocPostgType'
  key cast(substring(domvalue_l, 1, 1) as kzsto)       as MaterialDocumentPostingType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(ddlanguage as spras preserving type)        as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast(ddtext as vdm_lkngseq_text preserving type) as MaterialDocumentPostgTypeName,

      //Associations
      _MatlDocPostgType,
      _Language

}
where domname  = 'KZSTO'
  and as4local = 'A'
  and (valpos  = '0001' or valpos = '0002' or valpos = '0003')
  and as4vers  = '0000'
  and domvalue_l <> '3';
```
