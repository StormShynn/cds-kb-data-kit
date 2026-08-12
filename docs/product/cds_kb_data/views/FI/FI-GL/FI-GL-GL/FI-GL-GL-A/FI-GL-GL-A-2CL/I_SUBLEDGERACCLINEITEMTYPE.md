---
name: I_SUBLEDGERACCLINEITEMTYPE
description: "Subledgeracclineitemtype"
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - item-level
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_SUBLEDGERACCLINEITEMTYPE

**Subledgeracclineitemtype**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SubLedgerAcctLineItemType` | ✓ | |  | `slalittype` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SubLedgerAccLineItemTypeT` | [0..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @Analytics: { dataCategory: #DIMENSION, 
              dataExtraction.enabled: true }
@Analytics.technicalName: 'IFISLACCLITYP'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'SubLedger Account LineItem Type'
@ObjectModel: { representativeKey: 'SubLedgerAcctLineItemType',
                sapObjectNodeType.name: 'SubledgerAccountLineItemType', 
                usageType: { sizeCategory: #S,
                            dataClass:  #MASTER,
                            serviceQuality: #A },
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY],
                modelingPattern: #ANALYTICAL_DIMENSION }                              
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true  
@VDM: {lifecycle.contract.type: #PUBLIC_LOCAL_API,
       viewType: #BASIC }

define view entity I_SubLedgerAccLineItemType as select from finsts_slalitty 

association [0..*] to I_SubLedgerAccLineItemTypeT as _Text on $projection.SubLedgerAcctLineItemType = _Text.SubLedgerAcctLineItemType

{
  @ObjectModel.text.association: '_Text'
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8 
  @Search.ranking: #HIGH
  key finsts_slalitty.slalittype as SubLedgerAcctLineItemType,

  _Text
}
```
