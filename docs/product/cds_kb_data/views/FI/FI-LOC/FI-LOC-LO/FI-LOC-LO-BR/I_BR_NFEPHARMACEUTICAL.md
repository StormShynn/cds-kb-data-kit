---
name: I_BR_NFEPHARMACEUTICAL
description: "BR Nfepharmaceutical"
semantic_vi: "View I_BR_NFEPHARMACEUTICAL hiển thị thông tin dược phẩm liên quan đến hóa đơn thuế Brazil, hữu ích cho các ứng dụng tài chính và logistics."
keywords:
  - "pharmaceutical"
  - "brazilian tax invoice"
  - "đơn thuế brazil"
  - "financial"
  - "logistics"
  - "fi"
  - "fi-loc"
  - "fi-loc-lo"
  - "interface-view"
  - "component:fi-loc-lo-br"
  - "lob:finance"
semantic_en: "The I_BR_NFEPHARMACEUTICAL view exposes pharmaceutical information related to Brazilian tax invoices, useful for financial and logistics applications."
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
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFEPHARMACEUTICAL

**BR Nfepharmaceutical**

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
| `BR_ANVISACode` |  | |  | `cast(cprodanvisa as logbr_anvisa_code preserving type)` |  |  |
| `MedicineConsumerMaxPrice` |  | |  | `cast(vpmc as logbr_consumermaxprice)` |  |  |
| `BR_ANVISAExemptionReasonText` |  | |  | `cast(exemp_reason as logbr_exemp_reason preserving type)` |  |  |
| `SalesDocumentCurrency` |  | | `_BR_NFDocumentCurrency` | `SalesDocumentCurrency` |  |  |
| `_SalesDocumentCurrency` | | ✓ | | | | |
| `_BR_NotaFiscal` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesDocumentCurrency` | `I_Currency` | [1..1] |
| `_BR_NFDocumentCurrency` | `I_BR_NFDocumentCurrency` | [1..1] |
| `_BR_NotaFiscal` | `I_BR_NFDocument` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRNFEPHARMA'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Brazil Nota Fiscal Pharma Items'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.modelingPattern: #NONE


define view I_BR_NFePharmaceutical
  as select from j_1bnfepharma

  association [1..1] to I_Currency              as _SalesDocumentCurrency on $projection.SalesDocumentCurrency = _SalesDocumentCurrency.Currency
  association [1..1] to I_BR_NFDocumentCurrency as _BR_NFDocumentCurrency on $projection.BR_NotaFiscal = _BR_NFDocumentCurrency.BR_NotaFiscal
  association [1..1] to I_BR_NFDocument         as _BR_NotaFiscal         on $projection.BR_NotaFiscal = _BR_NotaFiscal.BR_NotaFiscal  
{
  key docnum                                                   as BR_NotaFiscal,
  key itmnum                                                   as BR_NotaFiscalItem,
      cast(cprodanvisa as logbr_anvisa_code preserving type)   as BR_ANVISACode,

      @Aggregation.default:#SUM
      cast(vpmc as logbr_consumermaxprice)                     as MedicineConsumerMaxPrice,

      cast(exemp_reason as logbr_exemp_reason preserving type) as BR_ANVISAExemptionReasonText,

      //Currency for MedicineConsumerMaxPrice
      @Semantics.currencyCode:true
      _BR_NFDocumentCurrency.SalesDocumentCurrency                     as SalesDocumentCurrency,

      _SalesDocumentCurrency,
      _BR_NotaFiscal

}
```
