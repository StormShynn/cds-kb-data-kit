---
name: I_BUSTRANSACTIONCATEGORYTEXT
description: "Bustransactioncategorytext"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - text-view
  - text
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_BUSTRANSACTIONCATEGORYTEXT

**Bustransactioncategorytext**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` |  |  |
| `BusinessTransactionCategory` | ✓ | |  | `cast(finsc_bttype_t.bttype as fis_bttype preserving type )` |  |  |
| `BusTransactionCategoryName` |  | |  | `cast(finsc_bttype_t.txt as fins_bttype_txt preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IFIBUSTXCATT'
@ObjectModel.representativeKey: 'BusinessTransactionCategory'
@EndUserText.label: 'Business Transaction Category - Text'
@Analytics: { dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK //NOT_REQUIRED
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
//@Consumption.ranked: true

define view entity I_BusTransactionCategoryText
  as select from finsc_bttype_t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language' //Inserted by VDM CDS Suite Plugin
  key finsc_bttype_t.langu  as Language,
//      @Search.defaultSearchElement: true
//      @Search.fuzzinessThreshold: 0.8
//      @Search.ranking: #HIGH 
  key cast(finsc_bttype_t.bttype as fis_bttype preserving type ) as BusinessTransactionCategory,
      @Semantics.text
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW 
      cast(finsc_bttype_t.txt as fins_bttype_txt preserving type ) as BusTransactionCategoryName,
      _Language
}
```
