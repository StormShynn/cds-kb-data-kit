---
name: I_PURCHASINGDOCUMENTTYPETEXT
description: "Purchasingdocumenttypetext"
app_component: MM
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - text-view
  - document
  - text
  - component:MM
  - lob:Sourcing & Procurement
---
# I_PURCHASINGDOCUMENTTYPETEXT

**Purchasingdocumenttypetext**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchasingDocumentType` | ✓ | |  | `bsart` |  |  |
| `PurchasingDocumentCategory` | ✓ | |  | `bstyp` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `PurchasingDocumentTypeName` |  | |  | `batxt` |  |  |
| `_PurchasingDocumentCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_PurchasingDocumentType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchasingDocumentCategory` | `I_PurchasingDocumentCategory` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.sapObjectNodeType.name:'PurchasingDocumentTypeText'
@ObjectModel.representativeKey: 'PurchasingDocumentType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY, #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@Analytics.dataExtraction.enabled: true
@AbapCatalog.sqlViewName: 'IMMPURGDOCTYPTXT'
@EndUserText.label: 'Purchasing Document Type - Text'
@AccessControl.authorizationCheck:#NOT_REQUIRED
@VDM.viewType : #BASIC
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

define view I_PurchasingDocumentTypeText
  as select from t161t
  association        to parent I_PurchasingDocumentType as _PurchasingDocumentType     on  $projection.PurchasingDocumentCategory = _PurchasingDocumentType.PurchasingDocumentCategory
                                                                                       and $projection.PurchasingDocumentType     = _PurchasingDocumentType.PurchasingDocumentType
  association [1..1] to I_PurchasingDocumentCategory    as _PurchasingDocumentCategory on  $projection.PurchasingDocumentCategory = _PurchasingDocumentCategory.PurchasingDocumentCategory

  association [0..1] to I_Language                      as _Language                   on  $projection.Language = _Language.Language


{
      @ObjectModel.foreignKey.association: '_PurchasingDocumentType'
      @ObjectModel.text.element: ['PurchasingDocumentTypeName']
  key bsart as PurchasingDocumentType,
      @ObjectModel.foreignKey.association: '_PurchasingDocumentCategory'
  key bstyp as PurchasingDocumentCategory,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras as Language,

      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.7 }
      @Semantics.text: true
      batxt as PurchasingDocumentTypeName,

      _PurchasingDocumentType,
      _PurchasingDocumentCategory,
      _Language

}
```
