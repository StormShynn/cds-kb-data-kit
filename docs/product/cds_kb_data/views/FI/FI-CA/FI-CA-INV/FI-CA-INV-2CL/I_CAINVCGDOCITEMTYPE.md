---
name: I_CAINVCGDOCITEMTYPE
description: "Cainvcgdocitemtype"
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - item-level
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINVCGDOCITEMTYPE

**Cainvcgdocitemtype**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvcgDocumentItemType` | ✓ | | `_CAInvcgDocItemType0` | `CAInvcgDocumentItemType` |  |  |
| `_CAInvcgDocItemTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgDocItemTypeText` | `I_CAInvcgDocItemTypeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Fakturapositionsarten'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CAInvcgDocumentItemType',
  sapObjectNodeType.name: 'ContrAcctgInvcgDocItemType',
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #COMPOSITE
define view entity I_CAInvcgDocItemType
  as select from I_CAInvcgDocItemType0 as _CAInvcgDocItemType0
  association [0..*] to I_CAInvcgDocItemTypeText as _CAInvcgDocItemTypeText on $projection.CAInvcgDocumentItemType = _CAInvcgDocItemTypeText.CAInvcgDocumentItemType
{
      @ObjectModel.text.association: '_CAInvcgDocItemTypeText'
  key _CAInvcgDocItemType0.CAInvcgDocumentItemType,
      _CAInvcgDocItemTypeText
}
where
  CAInvcgDocumentItemType like '0%'
union select from I_CAInvcgDocItemTypeCust as _CAInvcgDocItemTypeCust
association [0..*] to I_CAInvcgDocItemTypeText as _CAInvcgDocItemTypeText on $projection.CAInvcgDocumentItemType = _CAInvcgDocItemTypeText.CAInvcgDocumentItemType
{
//      @ObjectModel.text.association: '_CAInvcgDocItemTypeText'
  key _CAInvcgDocItemTypeCust.CAInvcgDocumentItemType,
      _CAInvcgDocItemTypeText
}
where
  CAInvcgDocumentItemType <> '0INVBILL'
```
