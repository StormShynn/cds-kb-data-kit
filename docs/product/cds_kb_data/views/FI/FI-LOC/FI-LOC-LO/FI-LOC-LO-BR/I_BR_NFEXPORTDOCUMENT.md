---
name: I_BR_NFEXPORTDOCUMENT
description: "BR Nfexportdocument"
semantic_vi: "View BR Nfexportdocument hiển thị dữ liệu về tài liệu xuất khẩu cho mục đích thuế Brazil, được sử dụng để báo cáo và theo dõi các giao dịch xuất khẩu."
keywords:
  - "export document"
  - "tài liệu xuất khẩu"
  - "brazil tax"
  - "đối tượng xuất khẩu"
  - "giao dịch xuất khẩu"
  - "cds view"
  - "view br nfexportdocument"
  - "fi-loc-lo-br"
  - "fi"
  - "fi-loc"
  - "fi-loc-lo"
  - "interface-view"
semantic_en: "The BR Nfexportdocument view exposes export document data for Brazilian tax purposes, used to report and track export transactions."
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
