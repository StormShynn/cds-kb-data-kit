---
name: I_ACCOUNTINGDOCUMENTTYPETEXT
description: "Accounting DocumentUMENTTYPETEXT"
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
  - accounting-document
  - document
  - text
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_ACCOUNTINGDOCUMENTTYPETEXT

**Accounting DocumentUMENTTYPETEXT**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AccountingDocumentType` | ✓ | |  | `cast ( blart as farp_blart preserving type )` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `AccountingDocumentTypeName` |  | |  | `cast ( ltext as farp_ltext_003t preserving type )` |  |  |
| `_DocumentType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DocumentType` | `I_AccountingDocumentType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Accounting Document Type - Text'
@VDM.viewType: #BASIC
@Analytics:{
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'AccountingDocumentType'
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.sqlViewName: 'IFIACCDOCTYPET'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: {
  dataClass: #CUSTOMIZING,
  serviceQuality: #A,
  sizeCategory: #S
}
@AbapCatalog.buffering:{
  status: #ACTIVE,
  type: #GENERIC,
  numberOfKeyFields: 1
}
@Search.searchable: true
@AbapCatalog.preserveKey:true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#LANGUAGE_DEPENDENT_TEXT,#EXTRACTION_DATA_SOURCE]
define view I_AccountingDocumentTypeText as select from t003t

  association [1..1] to I_AccountingDocumentType as _DocumentType on $projection.AccountingDocumentType = _DocumentType.AccountingDocumentType
  
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
 
  key cast ( blart as farp_blart preserving type ) as AccountingDocumentType,

  @Semantics.language
  @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,

  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  @Semantics.text
  cast ( ltext as farp_ltext_003t preserving type ) as AccountingDocumentTypeName,
  
  _DocumentType,
  _Language
    
};
```
