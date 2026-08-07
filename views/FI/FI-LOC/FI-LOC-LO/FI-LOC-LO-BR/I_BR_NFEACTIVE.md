---
name: I_BR_NFEACTIVE
description: BR Nfeactive
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFEACTIVE

**BR Nfeactive**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BR_NotaFiscal` | ✓ | |  | `docnum` |
| `BR_NFeDocumentStatus` |  | |  | `docsta` |
| `BR_NFIsCanceled` |  | |  | `cancel` |
| `Region` |  | |  | `regio` |
| `BR_NFeIssueYear` |  | |  | `cast(NFeActive.nfyear as logbr_year preserving type)` |
| `BR_NFeIssueMonth` |  | |  | `nfmonth` |
| `BR_NFeAccessKeyCNPJOrCPF` |  | |  | `stcd1` |
| `BR_NFeModel` |  | |  | `cast(NFeActive.model as logbr_model preserving type)` |
| `BR_NFeSeries` |  | |  | `cast(NFeActive.serie as logbr_nf_series preserving type)` |
| `BR_NFeNumber` |  | |  | `cast(NFeActive.nfnum9 as logbr_nfnum9 preserving type)` |
| `BR_NFeRandomNumber` |  | |  | `cast(ltrim(NFeActive.docnum9, '0') as logbr_docnum9 preserving type)` |
| `BR_NFeCheckDigit` |  | |  | `cast(NFeActive.cdv as logbr_checkdigit preserving type)` |
| `BR_NFAuthznProtocolNumber` |  | |  | `authcod` |
| `BR_NFAuthznProtocolNumber16` |  | |  | `authcod16` |
| `BR_NFActionRequestedCode` |  | |  | `action_requ` |
| `BR_NFEnvironmentType` |  | |  | `tpamb` |
| `BR_NFAuthenticationDate` |  | |  | `cast(NFeActive.authdate as logbr_authdate preserving type )` |
| `BR_NFAuthenticationTime` |  | |  | `cast(NFeActive.authtime as logbr_authtime preserving type )` |
| `IssuingType` |  | |  | `cast(NFeActive.tpemis as logbr_nfe_tpemis preserving type)` |
| `_BR_IssuingType` | | ✓ | | |
| `_BR_NFeModel` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_IssuingType` | `I_BR_IssuingType` | [0..1] |
| `_BR_NFeModel` | `I_BR_NFModel` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRNFEACTIVE'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Brazil Electronic Nota Fiscal Active'
@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AbapCatalog.preserveKey:true 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true

define view I_BR_NFeActive
  as select from j_1bnfe_active as NFeActive
  association [0..1] to I_BR_IssuingType as _BR_IssuingType on _BR_IssuingType.IssuingType = $projection.IssuingType
  association [0..1] to I_BR_NFModel     as _BR_NFeModel on _BR_NFeModel.BR_NFModel = $projection.BR_NFeModel
{
  key NFeActive.docnum as BR_NotaFiscal,
  NFeActive.docsta as BR_NFeDocumentStatus,  
  NFeActive.cancel as BR_NFIsCanceled,  
  NFeActive.regio as Region,  
  cast(NFeActive.nfyear as logbr_year preserving type) as BR_NFeIssueYear,
  NFeActive.nfmonth as BR_NFeIssueMonth,
  NFeActive.stcd1 as BR_NFeAccessKeyCNPJOrCPF,
  cast(NFeActive.model as logbr_model preserving type) as BR_NFeModel,
  cast(NFeActive.serie as logbr_nf_series preserving type)  as BR_NFeSeries, 
  cast(NFeActive.nfnum9 as logbr_nfnum9 preserving type) as BR_NFeNumber,
  cast(ltrim(NFeActive.docnum9, '0') as logbr_docnum9 preserving type) as BR_NFeRandomNumber,
  cast(NFeActive.cdv as logbr_checkdigit preserving type) as BR_NFeCheckDigit,
  NFeActive.authcod as BR_NFAuthznProtocolNumber,
  NFeActive.authcod16 as BR_NFAuthznProtocolNumber16,
  NFeActive.action_requ as BR_NFActionRequestedCode,
  NFeActive.tpamb as BR_NFEnvironmentType,
  cast(NFeActive.authdate as logbr_authdate preserving type ) as BR_NFAuthenticationDate,
  cast(NFeActive.authtime as logbr_authtime preserving type ) as BR_NFAuthenticationTime,
  cast(NFeActive.tpemis as logbr_nfe_tpemis preserving type) as IssuingType,
  _BR_IssuingType,
  _BR_NFeModel
}
```
