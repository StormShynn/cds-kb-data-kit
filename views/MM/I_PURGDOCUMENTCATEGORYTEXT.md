---
name: I_PURGDOCUMENTCATEGORYTEXT
description: Purgdocumentcategorytext
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
  - component:MM
  - lob:Sourcing & Procurement
---
# I_PURGDOCUMENTCATEGORYTEXT

**Purgdocumentcategorytext**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PurchasingDocumentCategory` | ✓ | |  | `cast (cast(substring(dd07t.domvalue_l ,1,1) as abap.char( 1 ) ) as ebstyp )` |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |
| `DomainValue` |  | |  | `domvalue_l` |
| `PurchasingDocumentCategoryName` |  | |  | `cast (dd07t.ddtext as purchasingdocumentcategoryname preserving type )` |
| `_Language` | | ✓ | | |
| `_PurchasingDocumentCategory` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'PurchasingDocumentCategory'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #SEARCHABLE_ENTITY, #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@EndUserText.label: 'Purchasing Document Category - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'IMMPURDOCCATT'
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.sapObjectNodeType.name: 'PurchasingDocumentCategoryText'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

define view I_PurgDocumentCategoryText
  as select from dd07t
  association to parent I_PurchasingDocumentCategory as _PurchasingDocumentCategory 
    on $projection.PurchasingDocumentCategory = _PurchasingDocumentCategory.PurchasingDocumentCategory
  association [0..1] to I_Language as _Language 
    on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_PurchasingDocumentCategory'
      @ObjectModel.text.element: ['PurchasingDocumentCategoryName']
//  key cast ( dd07t.domvalue_l as ebstyp ) as PurchasingDocumentCategory,
    key cast (cast(substring(dd07t.domvalue_l ,1,1) as abap.char( 1 ) ) as ebstyp ) as PurchasingDocumentCategory,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,      
      @Consumption.hidden: true
      dd07t.domvalue_l as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast (dd07t.ddtext  as purchasingdocumentcategoryname preserving type ) as PurchasingDocumentCategoryName,
      _PurchasingDocumentCategory,
      _Language
}
where
      domname  = 'EBSTYP'
  and dd07t.as4local = 'A'
  and dd07t.as4vers = '0000'
```
