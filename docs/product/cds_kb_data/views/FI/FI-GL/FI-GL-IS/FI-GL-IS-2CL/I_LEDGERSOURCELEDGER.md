---
name: I_LEDGERSOURCELEDGER
description: "Ledgersourceledger"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_LEDGERSOURCELEDGER

**Ledgersourceledger**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  | `rldnr` |  |  |
| `SourceLedger` | ✓ | |  | `rldnr_pers` |  |  |
| `_Ledger` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Ledger` | `I_Ledger` | [1..1] |
| `_Text` | `I_LedgerText` | [0..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'SourceLedger'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@ObjectModel.usageType: {
  dataClass: #CUSTOMIZING,
  serviceQuality: #A,
  sizeCategory: #S
}
@EndUserText.label: 'Mapping between Ledger and Source Ledger'

@Analytics.internalName: #LOCAL
@Analytics: { 
      dataCategory: #DIMENSION, 
      dataExtraction.enabled: true  }
@Analytics.technicalName: 'IFILDRSRCLDR'

@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.sapObjectNodeType.name: 'Ledger' 

define view entity I_LedgerSourceLedger as select from finsc_ledger_rep 
  association [1..1] to I_Ledger     as _Ledger on $projection.Ledger = _Ledger.Ledger
  association [0..*] to I_LedgerText as _Text   on $projection.Ledger = _Text.Ledger
{
      @ObjectModel.foreignKey.association: '_Ledger'
      @ObjectModel.text.association: '_Text'
  key finsc_ledger_rep.rldnr      as Ledger,
  key finsc_ledger_rep.rldnr_pers as SourceLedger,
  
      _Ledger,
      _Text    
}
```
