---
name: I_LGLCNTNTMDOCSTATUSAPI01
description: Lglcntntmdocstatusapi 01
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
  - status
  - component:CM-DOC-2CL
  - lob:Other
---
# I_LGLCNTNTMDOCSTATUSAPI01

**Lglcntntmdocstatusapi 01**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InternalDocumentStatus` | ✓ | |  |  |  |  |
| `_LglCntntMDocStatusTextAPI01` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LglCntntMDocStatusTextAPI01` | `I_LglCntntMDocStatusTextAPI01` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ILCMDOCSTS'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType : #BASIC
@ObjectModel: {
  representativeKey: 'InternalDocumentStatus',
  sapObjectNodeType.name: 'LegalDocumentStatus',
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

@EndUserText.label: 'Document Status'

define view I_LglCntntMDocStatusAPI01
  as select from I_LglCntntMDocStatus
  association [0..*] to I_LglCntntMDocStatusTextAPI01 as _LglCntntMDocStatusTextAPI01 on $projection.InternalDocumentStatus = _LglCntntMDocStatusTextAPI01.InternalDocumentStatus
{
      @ObjectModel.text.association: '_LglCntntMDocStatusTextAPI01'
  key InternalDocumentStatus,

      _LglCntntMDocStatusTextAPI01
}
```
