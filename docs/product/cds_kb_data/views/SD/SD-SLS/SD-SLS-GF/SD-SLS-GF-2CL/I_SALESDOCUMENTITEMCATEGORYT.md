---
name: I_SALESDOCUMENTITEMCATEGORYT
description: "Salesdocumentitemcategoryt"
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - sales-document
  - document
  - item-level
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_SALESDOCUMENTITEMCATEGORYT

**Salesdocumentitemcategoryt**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDocumentItemCategory` | ✓ | |  | `pstyv` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `SalesDocumentItemCategoryName` |  | |  | `vtext` |  |  |
| `_SalesDocumentItemCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesDocumentItemCategory` | `I_SalesDocumentItemCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'SalesDocumentItemCategory'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, 
                                      #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'Category of Sales Document Item - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDSLSDOCITMCATT'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Metadata.ignorePropagatedAnnotations:true

define view I_SalesDocumentItemCategoryT
as
select from tvapt
association[0..1] to I_SalesDocumentItemCategory as _SalesDocumentItemCategory on $projection.SalesDocumentItemCategory = _SalesDocumentItemCategory.SalesDocumentItemCategory
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_SalesDocumentItemCategory'
    key pstyv as SalesDocumentItemCategory,

    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    vtext as SalesDocumentItemCategoryName,
    
    _SalesDocumentItemCategory,
    _Language
    
};
```
