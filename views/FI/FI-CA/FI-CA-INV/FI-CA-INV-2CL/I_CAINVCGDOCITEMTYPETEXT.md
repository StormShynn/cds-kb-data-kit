---
name: I_CAINVCGDOCITEMTYPETEXT
description: Cainvcgdocitemtypetext
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
  - text
  - item-level
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINVCGDOCITEMTYPETEXT

**Cainvcgdocitemtypetext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CAInvcgDocumentItemType` | ✓ | | `_CAInvcgDocItemType0Text` | `CAInvcgDocumentItemType` |
| `Language` | ✓ | | `_CAInvcgDocItemType0Text` | `Language` |
| `CAInvcgDocItemTypeText` |  | | `_CAInvcgDocItemType0Text` | `CAInvcgDocItemTypeText` |
| `_CAInvcgDocItemType` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgDocItemType` | `I_CAInvcgDocItemType` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
//@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Fakturapositionsarten - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CAInvcgDocumentItemType',
  sapObjectNodeType.name: 'ContrAcctgInvcgDocItemTypeText',
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
@VDM.viewType: #COMPOSITE

define view entity I_CAInvcgDocItemTypeText
  as select from I_CAInvcgDocItemType0Text as _CAInvcgDocItemType0Text

  association [0..1] to I_CAInvcgDocItemType as _CAInvcgDocItemType on $projection.CAInvcgDocumentItemType = _CAInvcgDocItemType.CAInvcgDocumentItemType
{
      @ObjectModel.foreignKey.association: '_CAInvcgDocItemType'
  key _CAInvcgDocItemType0Text.CAInvcgDocumentItemType,
      @Semantics.language:true
      @ObjectModel.foreignKey.association: '_Language'
  key _CAInvcgDocItemType0Text.Language,
      @Semantics.text: true
      _CAInvcgDocItemType0Text.CAInvcgDocItemTypeText,

      _CAInvcgDocItemType,
      _Language
}
where
  CAInvcgDocumentItemType like '0%'
union select from I_CAInvcgDocItemTypeCustText as _CAInvcgDocItemTypeCustText

association [0..1] to I_CAInvcgDocItemType as _CAInvcgDocItemType on $projection.CAInvcgDocumentItemType = _CAInvcgDocItemType.CAInvcgDocumentItemType
{
  key _CAInvcgDocItemTypeCustText.CAInvcgDocumentItemType,
  key _CAInvcgDocItemTypeCustText.Language,
      _CAInvcgDocItemTypeCustText.CAInvcgDocItemTypeText,
      _CAInvcgDocItemType,
      _Language
}
where
  CAInvcgDocumentItemType <> '0INVBILL'
```
