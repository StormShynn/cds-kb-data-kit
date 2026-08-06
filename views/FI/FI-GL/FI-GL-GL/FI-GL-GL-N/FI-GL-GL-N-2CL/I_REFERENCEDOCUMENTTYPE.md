---
name: I_REFERENCEDOCUMENTTYPE
description: Referencedocumenttype
app_component: FI-GL-GL-N-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - document
  - component:FI-GL-GL-N-2CL
  - lob:Finance
---
# I_REFERENCEDOCUMENTTYPE

**Referencedocumenttype**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ReferenceDocumentType` | `cast(awtyp as fis_awtyp preserving type )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ReferenceDocumentTypeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Reference Document Type'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIREFDOCTYPE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'ReferenceDocumentType'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@ObjectModel.sapObjectNodeType.name: 'ReferenceDocumentType'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.buffering.numberOfKeyFields: 1
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#EXTRACTION_DATA_SOURCE,#ANALYTICAL_DIMENSION]
@Search.searchable: true
define view I_ReferenceDocumentType
  as select from ttyp
  association [0..*] to I_ReferenceDocumentTypeText as _Text on $projection.ReferenceDocumentType = _Text.ReferenceDocumentType
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  key cast(awtyp as fis_awtyp preserving type ) as ReferenceDocumentType,
      _Text

}
```
