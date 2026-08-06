---
name: I_LGLCNTNTMDOCSTAMPAPI01
description: Lglcntntmdocstampapi 01
app_component: CM-DOC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-DOC
  - interface-view
  - component:CM-DOC-2CL
  - lob:Other
---
# I_LGLCNTNTMDOCSTAMPAPI01

**Lglcntntmdocstampapi 01**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `LglCntntMDocumentStamp` | `LglCntntMDocumentStamp` |
| `_LglCntntMDocStampTextAPI01` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LglCntntMDocStampTextAPI01` | `I_LglCntntMDocStampTextAPI01` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ILCMDOCSTMP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType : #BASIC
@ObjectModel: {
  representativeKey: 'LglCntntMDocumentStamp',
  sapObjectNodeType.name: 'LegalStamp',
  usageType.serviceQuality: #A,
  usageType.sizeCategory: #S,
  usageType.dataClass:  #CUSTOMIZING
}
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #NONE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Document Stamp Name'

define view I_LglCntntMDocStampAPI01
  as select from I_LglCntntMDocStamp
  association [0..*] to I_LglCntntMDocStampTextAPI01 as _LglCntntMDocStampTextAPI01 on $projection.LglCntntMDocumentStamp = _LglCntntMDocStampTextAPI01.LglCntntMDocumentStamp
{
      @ObjectModel.text.association: '_LglCntntMDocStampTextAPI01'
  key LglCntntMDocumentStamp,

      _LglCntntMDocStampTextAPI01
}
```
