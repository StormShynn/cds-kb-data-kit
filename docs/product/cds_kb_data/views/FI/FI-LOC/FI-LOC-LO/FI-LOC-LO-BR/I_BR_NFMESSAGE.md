---
name: I_BR_NFMESSAGE
description: "This CDS view provides the prerequisites for answering business questions about relevant aspects of nota fiscal message data."
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFMESSAGE')/$value
semantic_en: "This CDS view provides the prerequisites for answering business questions about relevant aspects of nota fiscal message data."
semantic_vi: "Brazil Nota Fiscal Messages — CDS view giao diện dựa trên j_1bnfftx."
keywords:
  - "brazil"
  - "nota"
  - "fiscal"
  - "messages"
  - "message"
  - "sequence"
  - "number"
  - "line"
  - "text"
  - "manual"
tags:
  - FI
  - bo:companycode
  - component:FI-LOC-LO-BR
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-BR
  - interface-view
  - lob:finance
  - lob:logistics general
---
# I_BR_NFMESSAGE

**This CDS view provides the prerequisites for answering business questions about relevant aspects of nota fiscal message data.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFMESSAGE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_NotaFiscal` | ✓ | |  | `docnum` | `NUMC(10)` | Document Number |
| `BR_NFMessageSequenceNumber` | ✓ | |  | `seqnum` | `NUMC(2)` | Sequence number |
| `BR_NFMessageLineNumber` | ✓ | |  | `linnum` | `NUMC(2)` | Line Number |
| `BR_NFMessageText` |  | |  | `message` | `CHAR(72)` | Message |
| `BR_NFMessageIsManual` |  | |  | `cast(manual as logbr_nfmanualmessage preserving type)` | `CHAR(1)` | Manual |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFMESSAGE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFMESSAGE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBRNFMESSAGE'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Brazil Nota Fiscal Messages'
@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey:true 

define view I_BR_NFMessage 
  as select from j_1bnfftx
{
  key docnum as BR_NotaFiscal,
  key seqnum as BR_NFMessageSequenceNumber,
  key linnum as BR_NFMessageLineNumber,
  message as BR_NFMessageText,
  cast(manual as logbr_nfmanualmessage preserving type) as BR_NFMessageIsManual
}
```
