---
name: I_SALESDOCUMENTITEMTYPETEXT
description: "Salesdocumentitemtypetext"
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - text-view
  - sales-document
  - document
  - text
  - item-level
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_SALESDOCUMENTITEMTYPETEXT

**Salesdocumentitemtypetext**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDocumentItemType` | ✓ | |  | `SUBSTRING(dd07t.domvalue_l, 1, 1)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `SalesDocumentItemTypeName` |  | |  | `ddtext` |  |  |
| `_SalesDocumentItemType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesDocumentItemType` | `I_SalesDocumentItemType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'SalesDocumentItemType'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S 
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, 
                                      #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'Type of Sales Document Item - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDDOCITEMTYPT'
@Metadata.ignorePropagatedAnnotations:true

define view I_SalesDocumentItemTypeText
as select from dd07t

association[0..1] to I_SalesDocumentItemType as _SalesDocumentItemType on $projection.SalesDocumentItemType = _SalesDocumentItemType.SalesDocumentItemType
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_SalesDocumentItemType'
    key SUBSTRING(dd07t.domvalue_l, 1, 1) as SalesDocumentItemType,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key ddlanguage as Language,
    
    @Semantics.text: true
    ddtext as SalesDocumentItemTypeName,
    
    //Associations
    _SalesDocumentItemType,
    _Language
} 
where (domname = 'POSAR') and (as4local = 'A');
```
