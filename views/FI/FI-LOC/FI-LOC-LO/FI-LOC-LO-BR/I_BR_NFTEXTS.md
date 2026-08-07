---
name: I_BR_NFTEXTS
description: BR Nftexts
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
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFTEXTS

**BR Nftexts**

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
| `BR_NotaFiscalItem` | ✓ | |  | `itmnum` |
| `BR_NFTextType` | ✓ | |  | `type` |
| `BR_NFTextSequenceNumber` | ✓ | |  | `counter` |
| `BR_NFText` |  | |  | `text` |
| `BR_NFTaxPartnerTextID` |  | |  | `textid` |
| `_BR_NFTextType` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFTextType` | `I_BR_NFTextType` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRNFTEXTS'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Brazil Nota Fiscal Messages'
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
define view I_BR_NFTexts
  as select from logbr_nf_texts
  association [0..1] to I_BR_NFTextType as _BR_NFTextType on _BR_NFTextType.BR_NFTextType = $projection.BR_NFTextType
{
  key docnum  as BR_NotaFiscal,
  key itmnum  as BR_NotaFiscalItem,
      @ObjectModel.foreignKey.association: '_BR_NFTextType'
  key type    as BR_NFTextType,
  key counter as BR_NFTextSequenceNumber,
      text    as BR_NFText,
      textid  as BR_NFTaxPartnerTextID,
      _BR_NFTextType
}
```
