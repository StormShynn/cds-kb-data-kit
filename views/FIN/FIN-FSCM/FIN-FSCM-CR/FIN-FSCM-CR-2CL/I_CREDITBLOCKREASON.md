---
name: I_CREDITBLOCKREASON
description: "Creditblockreason"
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CR
  - interface-view
  - credit
  - component:FIN-FSCM-CR-2CL
  - lob:Other
---
# I_CREDITBLOCKREASON

**Creditblockreason**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditAccountBlockReason` | ✓ | |  | `block_reason` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CreditBlockReasonText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'CreditManagement Block Reason'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'ICRDBLOCKREASN'
@AbapCatalog.compiler.compareFilter:true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE 
@Analytics.internalName:#LOCAL  
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'CreditAccountBlockReason'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'CreditAccountBlockReason'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE ]
define view I_CreditBlockReason
  as select from ukm_bl_reason
  association [0..*] to I_CreditBlockReasonText as _Text on $projection.CreditAccountBlockReason = _Text.CreditAccountBlockReason
{
      @ObjectModel.text.association: '_Text'
  key block_reason as CreditAccountBlockReason,
//      event_type,
      _Text
};
```
