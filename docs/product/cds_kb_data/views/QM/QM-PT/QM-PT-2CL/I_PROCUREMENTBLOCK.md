---
name: I_PROCUREMENTBLOCK
description: "Procurementblock"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_PROCUREMENTBLOCK

**Procurementblock**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProcurementBlock` | ✓ | |  | `sperrfkt` |  |  |
| `_ProcurementBlockText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProcurementBlockText` | `I_ProcurementBlockText` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Procurement Block'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel: {
    representativeKey: 'ProcurementBlock',
    usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }
}
@Analytics.technicalName: 'IPROCMTBLOCK'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_ProcurementBlock as select from tq04a 

  association [1..*] to I_ProcurementBlockText as _ProcurementBlockText
            on $projection.ProcurementBlock    = _ProcurementBlockText.ProcurementBlock

{
  key tq04a.sperrfkt as ProcurementBlock, 
//  tq04a.bestellung   as ProcmtBlockPurOrdIsBlocked, 
//  tq04a.anfrage      as ProcmtBlockQtanReqIsBlocked, 
//  tq04a.bzgquelle    as ProcmtBlockSourceDetnIsBlocked, 
//  tq04a.wesperr      as ProcmtBlockGoodsRcptIsBlocked,
  
  /* Associations */
  _ProcurementBlockText 
}
```
