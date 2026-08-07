---
name: I_EUELECTRONICDOCCATEGORYVH
description: "Euelectronicdoccategoryvh"
app_component: CA-GTF-CSC-EDO-PAP
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - value-help
  - component:CA-GTF-CSC-EDO-PAP
  - lob:Cross-Application Components
---
# I_EUELECTRONICDOCCATEGORYVH

**Euelectronicdoccategoryvh**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-PAP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EU_EDocDocCategory` | ✓ | |  | `cast(dd07t.domvalue_l as edoc_eu_doc_category)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `EU_EDocDocCategoryText` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Document Category'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'EU_EDocDocCategory'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel:{
usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #META
},
  supportedCapabilities: [#SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: #NONE
}
@VDM.viewType: #BASIC
@Search.searchable:true
@Analytics.technicalName: 'IEUEDODOCCATEGORYVH'
define view entity I_EUElectronicDocCategoryVH
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel: { text.element:  [ 'EU_EDocDocCategoryText' ]}
  key cast(dd07t.domvalue_l as edoc_eu_doc_category) as EU_EDocDocCategory,
      @Semantics.language
      @UI.hidden: true
  key ddlanguage                                     as Language,
      @Semantics.text: true
      @Search: {
       defaultSearchElement: true,
       ranking: #HIGH,
       fuzzinessThreshold: 0.8 }
      ddtext                                         as EU_EDocDocCategoryText,

      _Language
}

where
      domname    = 'EDOC_EU_DOC_CATEGORY'
  and as4local   = 'A'
  and ddlanguage = $session.system_language
```
