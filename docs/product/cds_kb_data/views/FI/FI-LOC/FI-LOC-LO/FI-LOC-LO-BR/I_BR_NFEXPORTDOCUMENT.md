---
name: I_BR_NFEXPORTDOCUMENT
description: "BR Nfexportdocument"
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - document
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFEXPORTDOCUMENT

**BR Nfexportdocument**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_NotaFiscal` | ✓ | |  | `docnum` |  |  |
| `BR_NotaFiscalItem` | ✓ | |  | `itmnum` |  |  |
| `BR_NFItemExprtSqncNumber` | ✓ | |  | `cast(j_1bnfe_export.exp_seq as logbr_nfe_expseq preserving type)` |  |  |
| `BaseUnit` |  | | `_BR_NFItemBaseUnit` | `BaseUnit` |  |  |
| `BR_NFItemExprtRegNumber` |  | |  | `cast(j_1bnfe_export.nre as logbr_nfe_nre preserving type)` |  |  |
| `BR_NFItemExprtNFeAccessKey` |  | |  | `cast(j_1bnfe_export.chnfe as logbr_nfe_chnfe preserving type)` |  |  |
| `BR_NFItemExportRealQty` |  | |  | `cast(j_1bnfe_export.qexport as logbr_nfe_qexport preserving type)` |  |  |
| `BR_NFItmExprtDrwbkConcession` |  | |  | `cast('' as j_1bnfe_exp_draw_back)` |  |  |
| `BR_NFExportDrawbackConcession` |  | |  | `cast(j_1bnfe_export.ndraw as logbr_nfe_exp_draw_back preserving type)` |  |  |
| `_BR_NotaFiscalItem` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFItemBaseUnit` | `I_BR_NFItemBaseUnit` | [1..1] |
| `_BR_NotaFiscalItem` | `I_BR_NFItem` | [1..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRNFITEMEXPORT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Brazil Nota Fiscal Export Document'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.modelingPattern: #NONE

define view I_BR_NFExportDocument
  as select from j_1bnfe_export
  association [1..1] to I_BR_NFItemBaseUnit as _BR_NFItemBaseUnit on $projection.BR_NotaFiscalItem = _BR_NFItemBaseUnit.BR_NotaFiscalItem
                                                                 and $projection.BR_NotaFiscal = _BR_NFItemBaseUnit.BR_NotaFiscal
  association [1..1] to I_BR_NFItem         as _BR_NotaFiscalItem on $projection.BR_NotaFiscalItem = _BR_NotaFiscalItem.BR_NotaFiscalItem
                                                                 and $projection.BR_NotaFiscal = _BR_NotaFiscalItem.BR_NotaFiscal                                                                 
  association [1..1] to I_UnitOfMeasure     as _BaseUnit          on $projection.BaseUnit = _BaseUnit.UnitOfMeasure
{
  key j_1bnfe_export.docnum                                                 as BR_NotaFiscal,
  key j_1bnfe_export.itmnum                                                 as BR_NotaFiscalItem,
  key cast(j_1bnfe_export.exp_seq as logbr_nfe_expseq preserving type)      as BR_NFItemExprtSqncNumber,

      @Semantics.unitOfMeasure:true
      _BR_NFItemBaseUnit.BaseUnit                                           as BaseUnit,
      _BR_NotaFiscalItem,
      _BaseUnit,

      cast(j_1bnfe_export.nre as logbr_nfe_nre preserving type)             as BR_NFItemExprtRegNumber,
      cast(j_1bnfe_export.chnfe as logbr_nfe_chnfe preserving type)         as BR_NFItemExprtNFeAccessKey,
      @Semantics.quantity.unitOfMeasure:'BaseUnit'
      @Aggregation.default:#SUM
      cast(j_1bnfe_export.qexport as logbr_nfe_qexport preserving type)     as BR_NFItemExportRealQty,
      
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'BR_NFExportDrawbackConcession'
      cast('' as j_1bnfe_exp_draw_back) as BR_NFItmExprtDrwbkConcession,
      cast(j_1bnfe_export.ndraw as logbr_nfe_exp_draw_back preserving type) as BR_NFExportDrawbackConcession
      
}
```
