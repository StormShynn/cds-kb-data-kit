---
name: I_PURGDOCUMENTITEMCATEGORYTEXT
description: "Purgdocumentitemcategorytext"
app_component: MM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - text-view
  - document
  - text
  - item-level
  - component:MM
  - lob:Sourcing & Procurement
---
# I_PURGDOCUMENTITEMCATEGORYTEXT

**Purgdocumentitemcategorytext**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchasingDocumentItemCategory` | ✓ | |  | `pstyp` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `PurgDocItemCategoryName` |  | |  | `ptext` |  |  |
| `PurgDocExternalItemCategory` |  | |  | `epstp` |  |  |
| `_Language` | | ✓ | | | | |
| `_PurgDocumentItemCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'PurchasingDocumentItemCategory'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@AbapCatalog.sqlViewName: 'IMMPURDOCITMCATT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@EndUserText.label: 'Purchasing Document Item Category - Text'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name:'PurgDocumentItemCategoryText'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@Analytics.dataExtraction.enabled: true

define view I_PurgDocumentItemCategoryText
  as select from t163y

  association        to parent I_PurgDocumentItemCategory as _PurgDocumentItemCategory on $projection.PurchasingDocumentItemCategory = _PurgDocumentItemCategory.PurchasingDocumentItemCategory

  association [0..1] to I_Language                        as _Language                 on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_PurgDocumentItemCategory'
      @ObjectModel.text.element: ['PurgDocItemCategoryName']
  key pstyp as PurchasingDocumentItemCategory,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras as Language,
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.7 }
      @Semantics.text: true
      ptext as PurgDocItemCategoryName,
      epstp as PurgDocExternalItemCategory,
      _PurgDocumentItemCategory,
      _Language
}
```
