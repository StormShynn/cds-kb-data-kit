---
name: I_CABILLGDOCUMENTITEMTYPETEXT
description: Cabillgdocumentitemtypetext
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - text-view
  - document
  - text
  - item-level
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGDOCUMENTITEMTYPETEXT

**Cabillgdocumentitemtypetext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABillgDocumentItemType` | ✓ | | `_CABillgDocumentItemTypeText` | `CAInvcgDocumentItemType` |  |  |
| `Language` | ✓ | | `_CABillgDocumentItemTypeText` | `Language` |  |  |
| `CABillgDocumentItemTypeText` |  | | `_CABillgDocumentItemTypeText` | `CAInvcgDocItemTypeText` |  |  |
| `_CABillgDocumentItemType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgDocumentItemType` | `I_CABillgDocumentItemType` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'ICABillgDocumentItemTypeText'
@EndUserText.label: 'Abrechnungspositionsarten - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CABillgDocumentItemType',
  sapObjectNodeType.name: 'ContrAcctgBillgDocItemTypeText',
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #LANGUAGE_DEPENDENT_TEXT,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC

define view entity I_CABillgDocumentItemTypeText
  as select from I_CAInvcgDocItemTypeCustText as _CABillgDocumentItemTypeText
  
  association [1..1] to I_CABillgDocumentItemType as _CABillgDocumentItemType on $projection.CABillgDocumentItemType = _CABillgDocumentItemType.CABillgDocumentItemType
{
      @ObjectModel.foreignKey.association: '_CABillgDocumentItemType'
  key _CABillgDocumentItemTypeText.CAInvcgDocumentItemType as CABillgDocumentItemType,
      @Semantics.language:true
      @ObjectModel.foreignKey.association: '_Language'
  key _CABillgDocumentItemTypeText.Language,
      @Semantics.text: true
      _CABillgDocumentItemTypeText.CAInvcgDocItemTypeText  as CABillgDocumentItemTypeText,
      
      _CABillgDocumentItemType,
      _Language
}
```
