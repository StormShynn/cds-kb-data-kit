---
name: I_BR_NFAGRICULTUREDEFENSIVE
description: "Brazil Nota Fiscal Agriculture Defensive"
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFAGRICULTUREDEFENSIVE')/$value
semantic_en: "Brazil Nota Fiscal Agriculture Defensive"
semantic_vi: "Brazil Nota Fiscal Agriculture Defensive — CDS view giao diện dựa trên j_1bnfagri_defen."
keywords:
  - "brazil"
  - "nota"
  - "fiscal"
  - "agriculture"
  - "defensive"
  - "sequence"
  - "number"
  - "prescription"
  - "technical"
  - "responsible"
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
# I_BR_NFAGRICULTUREDEFENSIVE

**Brazil Nota Fiscal Agriculture Defensive**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFAGRICULTUREDEFENSIVE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_NotaFiscal` | ✓ | |  | `docnum` | `NUMC(10)` | Document Number |
| `BR_AgricultureSequenceNumber` | ✓ | |  | `counter` | `NUMC(4)` | Counter |
| `BR_PrescriptionNumber` |  | |  | `cast(nreceituario as logbr_nreceituario preserving type)` | `CHAR(30)` | Prescription Number |
| `BR_TechnicalResponsibleCPF` |  | |  | `cast(cpfresptec as logbr_cpfresptec preserving type)` | `NUMC(11)` | Responsible Technician's CPF |
| `_BR_NotaFiscal` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NotaFiscal` | `I_BR_NFDocument` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFAGRICULTUREDEFENSIVE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFAGRICULTUREDEFENSIVE')/$value)*

```abap
@EndUserText.label: 'Brazil Nota Fiscal Agriculture Defensive'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #BASIC
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.modelingPattern: #NONE
define view entity I_BR_NFAgricultureDefensive as 
  select from j_1bnfagri_defen 
  
  association [1..1] to I_BR_NFDocument             as _BR_NotaFiscal            on  $projection.BR_NotaFiscal = _BR_NotaFiscal.BR_NotaFiscal
{
  
  key docnum as BR_NotaFiscal,
  key counter as BR_AgricultureSequenceNumber,
  cast(nreceituario as logbr_nreceituario preserving type) as BR_PrescriptionNumber,
  cast(cpfresptec as logbr_cpfresptec preserving type) as BR_TechnicalResponsibleCPF,
  
  _BR_NotaFiscal
}
```
