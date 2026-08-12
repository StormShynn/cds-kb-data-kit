---
name: I_ITEMGDSMVTINCOMPLETIONSTS
description: "Itemgdsmvtincompletionsts"
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - item-level
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_ITEMGDSMVTINCOMPLETIONSTS

**Itemgdsmvtincompletionsts**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ItemGdsMvtIncompletionSts` | ✓ | |  | `substring(dd07l.domvalue_l, 1, 1)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ItemGdsMvtIncompletionStsT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'ItemGdsMvtIncompletionSts'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Item Goods Movement Incompletion Status'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: false }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDITGDMVINLSTS'
@Metadata.ignorePropagatedAnnotations:true
@Metadata.allowExtensions: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #ANALYTICAL_DIMENSION ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@ObjectModel.sapObjectNodeType.name: 'ItemGdsMvtIncompletionSts'

define view I_ItemGdsMvtIncompletionSts
as select from dd07l 

association [0..*] to I_ItemGdsMvtIncompletionStsT as _Text on $projection.ItemGdsMvtIncompletionSts = _Text.ItemGdsMvtIncompletionSts
{
    @ObjectModel.text.association: '_Text'
    key substring(dd07l.domvalue_l, 1, 1) as ItemGdsMvtIncompletionSts,
   
    _Text  
}
where (dd07l.domname = 'STATV') and (dd07l.as4local = 'A');
```
