---
name: I_CADOCCTNREFTYPE
description: "Cadocctnreftype"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CADOCCTNREFTYPE

**Cadocctnreftype**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CADocumentContainerRefType` | ✓ | |  | `refty` |  |  |
| `CADocumentContainerRefCategory` |  | |  | `refcat` |  |  |
| `_DocCtnRefTypeText` | | ✓ | | | | |
| `_DocCtnRefCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DocCtnRefTypeText` | `I_CADocCtnRefTypeText` | [1..*] |
| `_DocCtnRefCat` | `I_CADocCtnRefCat` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed : true

@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Document Container Reference Type'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CADocumentContainerRefType',
                sapObjectNodeType.name: 'ContrAcctgDocContainerRefType',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CADocCtnRefType
  as select from tfkdcr

  association [1..*] to I_CADocCtnRefTypeText as _DocCtnRefTypeText on $projection.CADocumentContainerRefType = _DocCtnRefTypeText.CADocumentContainerRefType
  association [0..1] to I_CADocCtnRefCat      as _DocCtnRefCat      on $projection.CADocumentContainerRefCategory = _DocCtnRefCat.CADocumentContainerRefCategory

{
      @ObjectModel.text.association: '_DocCtnRefTypeText'
  key refty  as CADocumentContainerRefType,

      @ObjectModel.foreignKey.association: '_DocCtnRefCat'
      refcat as CADocumentContainerRefCategory,

      _DocCtnRefTypeText,
      _DocCtnRefCat
}
```
