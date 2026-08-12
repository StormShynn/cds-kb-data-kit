---
name: I_SALESDOCUMENTTYPETEXT
description: "Salesdocumenttypetext"
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
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_SALESDOCUMENTTYPETEXT

**Salesdocumenttypetext**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDocumentType` | ✓ | |  | `auart` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `SalesDocumentTypeName` |  | |  | `bezei` |  |  |
| `_SalesDocumentType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesDocumentType` | `I_SalesDocumentType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'SalesDocumentType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, 
                                      #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'Sales Document Type - Text'
@VDM.viewType: #BASIC
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDSALESDOCTYPET'
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Metadata.ignorePropagatedAnnotations:true

define view I_SalesDocumentTypeText
as select from
tvakt
association[0..1] to I_SalesDocumentType as _SalesDocumentType on $projection.SalesDocumentType = _SalesDocumentType.SalesDocumentType
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{  
    @ObjectModel.foreignKey.association: '_SalesDocumentType'
    key auart as SalesDocumentType,

    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Search: {
      defaultSearchElement: true,
      fuzzinessThreshold: 0.9,
      ranking: #LOW }
    @Semantics.text: true
    --cast(bezei as salesdocumenttypename) as SalesDocumentTypeName,  --AT03.04.19 label Sales Document Type Description
    bezei as SalesDocumentTypeName,                                   --AT03.04.19 as it was before...
    
    _SalesDocumentType,
    _Language
};
```
