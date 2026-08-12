---
name: I_SUPLREVALDOCCATCONFIGNT
description: "Suplrevaldoccatconfignt"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - interface-view
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# I_SUPLREVALDOCCATCONFIGNT

**Suplrevaldoccatconfignt**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `SuplrEvalRelevantDocCategory` | ✓ | |  | `cast( cast ( substring( dd07t.domvalue_l, 1, 1 ) as abap.char( 1 ) ) as mmpur_ana_de_se_doc_config )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `SuplrEvalRelevantDocCatTxt` |  | |  | `cast( dd07t.ddtext as mmpur_ana_de_se_doc_cat_cf_txt preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_DocConfigCatValue` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISUPEVLDOCCFTT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'SuplrEvalRelevantDocCategory'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Supplier Eval Doc Catergory Config - Txt'
define view I_SuplrEvalDocCatConfignT
  as select from dd07t
  association        to parent I_SuplrEvalDocCatConfign as _DocConfigCatValue on $projection.SuplrEvalRelevantDocCategory = _DocConfigCatValue.SuplrEvalRelevantDocCategory
  association [0..1] to I_Language                      as _Language          on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                      as Language,
      @ObjectModel.foreignKey.association: '_DocConfigCatValue'
      @ObjectModel.text.element: ['SuplrEvalRelevantDocCatTxt']
  //key cast( dd07t.domvalue_l as mmpur_ana_de_se_doc_config )                 as SuplrEvalRelevantDocCategory,
  key cast( cast ( substring( dd07t.domvalue_l, 1, 1 ) as abap.char( 1 ) ) as mmpur_ana_de_se_doc_config ) as SuplrEvalRelevantDocCategory,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                       as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as mmpur_ana_de_se_doc_cat_cf_txt preserving type ) as SuplrEvalRelevantDocCatTxt,
      _DocConfigCatValue,
      _Language
}
where
      dd07t.domname  = 'MMPUR_ANA_SE_DOC_CONFIG'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
