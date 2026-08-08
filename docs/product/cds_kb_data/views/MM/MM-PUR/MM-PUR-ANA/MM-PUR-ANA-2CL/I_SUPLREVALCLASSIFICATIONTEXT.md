---
name: I_SUPLREVALCLASSIFICATIONTEXT
description: "Suplrevalclassificationtext"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - interface-view
  - text-view
  - classification
  - text
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# I_SUPLREVALCLASSIFICATIONTEXT

**Suplrevalclassificationtext**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `SupplierClassification` | ✓ | |  | `cast( dd07t.domvalue_l as mm_classification )` |  |  |
| `SupplierClfnName` |  | |  | `cast (dd07t.ddtext as mm_classifciation_text )` |  |  |
| `_Classification` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Classification` | `I_SuplrEvalClassification` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ISEVCLFNTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'SupplierClassification'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality:#A
@ObjectModel.usageType.sizeCategory: #S
@VDM.viewType: #BASIC
@EndUserText.label: 'Supplier Eval Classification - Text'
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
//@Analytics.dataCategory: #DIMENSION " Analtyics.DatCat #DIMENSION set in CDS I_SUPLREVALCLASSIFICATIONTEXT has priority. Obj Mod.DatCat #TEXT ignored [Analytics] .Hence commented
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ] 
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

define view I_SuplrEvalClassificationText 

  as select from dd07t
  association[1..1] to I_SuplrEvalClassification as _Classification on $projection.SupplierClassification = _Classification.SupplierClassification
  association [0..1] to I_Language                as _Language  on _Language.Language = $projection.Language

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage                                                                                                   as Language,
      
 //     @ObjectModel.foreignKey.association: '_Classification' 
      @ObjectModel.text.element: ['SupplierClfnName']
  key cast( dd07t.domvalue_l as mm_classification )                                                                      as SupplierClassification,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast (dd07t.ddtext as mm_classifciation_text )                                                                     as SupplierClfnName,

      _Classification,
      _Language

}
where
      dd07t.domname  = 'MM_CLASSIFICATION'
  and dd07t.as4local = 'A'
```
