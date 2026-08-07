---
name: I_SUPPLIERCONFCATEGORYTEXT
description: Supplierconfcategorytext
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
  - supplier
  - text
  - component:MM
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# I_SUPPLIERCONFCATEGORYTEXT

**Supplierconfcategorytext**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplierConfirmationCategory` | ✓ | |  | `ebtyp` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `SupplierConfCategoryName` |  | |  | `ebtxt` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'IMMSUPLRCONFT'
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: ['SupplierConfirmationCategory']
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Supplier Confirmation Category - Text'
@ObjectModel.sapObjectNodeType.name: 'SupplierConfirmationCatText'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
define view I_SupplierConfCategoryText 
    as select from t163f
    
    association [0..1] to I_Language as _Language on $projection.Language = _Language.Language 
{
    key ebtyp                                               as SupplierConfirmationCategory,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras                                               as Language,
    
    @Semantics.text: true
    ebtxt                                                   as SupplierConfCategoryName,
    
    _Language 
}
```
