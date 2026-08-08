---
name: I_LEDGER
description: "Ledger"
app_component: FI-GL-GL-A-2CL
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
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_LEDGER

**Ledger**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  | `rldnr` |  |  |
| `IsLeadingLedger` |  | |  | `xleading` |  |  |
| `LedgerApplication` |  | |  | `appl` |  |  |
| `LedgerSubApplication` |  | |  | `subappl` |  |  |
| `AccountingValuationView` |  | |  | `valutyp` |  |  |
| `LedgerType` |  | |  | `ledger_type` |  |  |
| `ExtensionLedgerType` |  | |  | `ext_ledger_type` |  |  |
| `ReferenceLedger` |  | |  | `fallback_ledger` |  |  |
| `TechnicalLedger` |  | |  | `tech_ledger` |  |  |
| `_PredictionLedger` | | ✓ | | | | |
| `_LedgerType` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PredictionLedger` | `I_PredictionLedger` | [0..1] |
| `_LedgerType` | `I_LedgerType` | [0..1] |
| `_Text` | `I_LedgerText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Ledger'
@Analytics: { 
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true 
}
@Metadata.allowExtensions:true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFILEDGER'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'Ledger'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: {
  dataClass: #CUSTOMIZING,
  serviceQuality: #A,
  sizeCategory: #S
}
@AbapCatalog.buffering:{
  status: #ACTIVE,
  type: #FULL
}
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET,#SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name: 'Ledger'

define view I_Ledger  
as select from
finsc_ledger inner join finsc_actve_appl on  finsc_ledger.appl    = finsc_actve_appl.appl
                                         and finsc_ledger.subappl = finsc_actve_appl.subappl  
association [0..1] to I_PredictionLedger   as _PredictionLedger on $projection.Ledger = _PredictionLedger.PredictionLedger    
association [0..1] to I_LedgerType         as _LedgerType       on $projection.LedgerType = _LedgerType.LedgerType                                     
association [0..*] to I_LedgerText         as _Text             on $projection.Ledger = _Text.Ledger

{
   @ObjectModel.text.association: '_Text'
    key rldnr as Ledger,
    
  
    finsc_ledger.xleading as IsLeadingLedger,
    
    finsc_ledger.appl as LedgerApplication,
    
    finsc_ledger.subappl as LedgerSubApplication,
    
    finsc_ledger.valutyp as AccountingValuationView,
    
    finsc_ledger.ledger_type as LedgerType,
    
    finsc_ledger.ext_ledger_type as ExtensionLedgerType,
    
    finsc_ledger.fallback_ledger as ReferenceLedger,
    
    @Consumption.hidden: true    
    finsc_ledger.tech_ledger as TechnicalLedger,
    
     
    _LedgerType,
    _PredictionLedger,
    _Text
};
```
