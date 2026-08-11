---
name: I_GRPRPTGSELFOREXTENSION
description: "Group Reporting Unified Selection"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRPRPTGSELFOREXTENSION')/$value
semantic_en: "Group Reporting Unified Selection"
semantic_vi: "Group Reporting Unified Selection — CDS view tổng hợp dựa trên I_CnsldtnGroupJrnlEntryItem."
keywords:
  - "Group Reporting Unified Selection"
  - "group"
  - "reporting"
  - "unified"
  - "selection"
  - "consolidation"
  - "ledger"
  - "dimension"
  - "fiscal"
  - "year"
  - "cnsldtn"
  - "jrnl"
  - "entry"
  - "item"
tags:
  - FIN
  - bo:companycode
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
---
# I_GRPRPTGSELFOREXTENSION

**Group Reporting Unified Selection**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRPRPTGSELFOREXTENSION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationLedger` | ✓ | |  |  | `CHAR(2)` | Ledger |
| `ConsolidationDimension` | ✓ | |  |  | `CHAR(2)` | Dimension |
| `FiscalYear` | ✓ | |  | `cast( FiscalYear as fis_gjahr_no_conv preserving type )` | `NUMC(4)` | Fiscal Year |
| `CnsldtnGroupJrnlEntry` | ✓ | |  |  | `CHAR(10)` | Group Journal Entry |
| `CnsldtnGroupJrnlEntryItem` | ✓ | |  |  | `CHAR(6)` | Group Journal Entry Item |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_CnsldtnGroupJrnlEntryItem` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRPRPTGSELFOREXTENSION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRPRPTGSELFOREXTENSION')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType:{
    sizeCategory: #XL,
    serviceQuality: #D,
    dataClass: #MIXED},
  modelingPattern: #NONE,                                    
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE
                         ]
  }
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Group Reporting Unified Selection'

// this view is used to provide metadata for group journal entry extension fields
// those fields are also resolved against this view during the simulation

define view entity I_GrpRptgSelForExtension
  as select from I_CnsldtnGroupJrnlEntryItem

  association [1..1] to E_CnsldtnGroupJrnlEntryItem as _Extension on  $projection.ConsolidationLedger       = _Extension.ConsolidationLedger
                                                                  and $projection.ConsolidationDimension    = _Extension.ConsolidationDimension
                                                                  and $projection.FiscalYear                = _Extension.FiscalYear
                                                                  and $projection.CnsldtnGroupJrnlEntry     = _Extension.CnsldtnGroupJrnlEntry
                                                                  and $projection.CnsldtnGroupJrnlEntryItem = _Extension.CnsldtnGroupJrnlEntryItem
{

  key ConsolidationLedger,
  key ConsolidationDimension,
  key cast( FiscalYear as fis_gjahr_no_conv preserving type ) as FiscalYear,
  key CnsldtnGroupJrnlEntry,
  key CnsldtnGroupJrnlEntryItem
  
}
```
