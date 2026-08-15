---
name: I_BR_NFIMPORTDOCUMENT
description: "BR Nfimportdocument"
semantic_vi: "View BR Nfimportdocument hiển thị thông tin về các tài liệu nhập khẩu, bao gồm chi tiết thông quan hải quan và loại khai báo, có thể được sử dụng để theo dõi và quản lý các giao dịch nhập khẩu."
keywords:
  - "import document"
  - "tài liệu nhập khẩu"
  - "customs clearance"
  - "thông quan hải quan"
  - "import transaction"
  - "giao dịch nhập khẩu"
  - "sap fi"
  - "fi-loc-lo-br"
semantic_en: "The BR Nfimportdocument view exposes information about imported documents, including customs clearance details and declaration types, which can be used to track and manage import transactions."
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
# I_BR_NFIMPORTDOCUMENT

**BR Nfimportdocument**

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
| `BR_NFImportDocument` | ✓ | |  | `cast(NFImportDocument.ndi as logbr_nfimportdocument preserving type)` |  |  |
| `BR_NFImportDocRegistrationDate` |  | |  | `cast(NFImportDocument.ddi as logbr_nfregistrationdate preserving type)` |  |  |
| `BR_NFCustomsClearanceDesc` |  | |  | `cast(NFImportDocument.xlocdesemb as logbr_customsclearance preserving type)` |  |  |
| `BR_NFCustomsClearanceTaxRegion` |  | |  | `cast(NFImportDocument.ufdesemb as logbr_impdoc_clearance_region preserving type)` |  |  |
| `BR_NFCustomsClearanceDate` |  | |  | `cast(NFImportDocument.ddesemb as logbr_impdoc_clearance_date preserving type)` |  |  |
| `BR_NFExporter` |  | |  | `cast(NFImportDocument.cexportador as logbr_nfe_exporter_code preserving type)` |  |  |
| `BR_NFImportDeclarationType` |  | |  | `cast(NFImportDocument.cod_doc_imp as logbr_declarationtype preserving type)` |  |  |
| `BR_NFImpDocMeansOfTransport` |  | |  | `transport_mode` |  |  |
| `BR_NFMaritimeFreightAmount` |  | |  | `maritime_freight` |  |  |
| `BR_NFIntermediateMode` |  | |  | `intermediate_mode` |  |  |
| `BR_NFBuyerRequesterCNPJ` |  | |  | `cast(case when NFImportDocument.cnpj > '99999999999999' then '00000000000000' else NFImportDocument.cnpj end as logbr_cnpj_numc )` |  |  |
| `BR_NFBuyerRequesterCNPJ_2` |  | |  | `cast(NFImportDocument.cnpj as logbr_imp_cnpj preserving type)` |  |  |
| `BR_NFThirdPartyRegion` |  | |  | `regio` |  |  |
| `BR_NFIsMaritimeFrtInTotalAmt` |  | |  | `cast(NFImportDocument.mfreight_nftotal as logbr_nfmaritimefreightnntotal preserving type)` |  |  |
| `BR_CPFBuyer` |  | |  | `cast(NFImportDocument.cpf as logbr_imp_cpf preserving type)` |  |  |
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
@AbapCatalog.sqlViewName: 'IBRIMPORTDOC'
@AbapCatalog.compiler.compareFilter: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Brazil Nota Fiscal Import Document'
@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.modelingPattern: #NONE

define view I_BR_NFImportDocument
  as select from j_1bnfimport_di as NFImportDocument

  association [1..1] to I_Currency              as _SalesDocumentCurrency on $projection.SalesDocumentCurrency = _SalesDocumentCurrency.Currency
  association [1..1] to I_BR_NFDocumentCurrency as _BR_NFDocumentCurrency on $projection.BR_NotaFiscal = _BR_NFDocumentCurrency.BR_NotaFiscal
  association [1..1] to I_BR_NFDocument         as _BR_NotaFiscal         on $projection.BR_NotaFiscal = _BR_NotaFiscal.BR_NotaFiscal
{
  key NFImportDocument.docnum                                                                   as BR_NotaFiscal,
  key cast(NFImportDocument.ndi as logbr_nfimportdocument preserving type)                      as BR_NFImportDocument,
      cast(NFImportDocument.ddi as logbr_nfregistrationdate preserving type)                    as BR_NFImportDocRegistrationDate,
      cast(NFImportDocument.xlocdesemb as logbr_customsclearance preserving type)               as BR_NFCustomsClearanceDesc,
      cast(NFImportDocument.ufdesemb as logbr_impdoc_clearance_region preserving type)          as BR_NFCustomsClearanceTaxRegion,
      cast(NFImportDocument.ddesemb as logbr_impdoc_clearance_date preserving type)             as BR_NFCustomsClearanceDate,
      cast(NFImportDocument.cexportador as logbr_nfe_exporter_code preserving type)             as BR_NFExporter,
      cast(NFImportDocument.cod_doc_imp as logbr_declarationtype preserving type)               as BR_NFImportDeclarationType,
      NFImportDocument.transport_mode                                                           as BR_NFImpDocMeansOfTransport,

      @Aggregation.default:#SUM
      NFImportDocument.maritime_freight                                                         as BR_NFMaritimeFreightAmount,
      NFImportDocument.intermediate_mode                                                        as BR_NFIntermediateMode,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'BR_NFBuyerRequesterCNPJ_2'
      @API.element.decommissioningPlannedForYearMonth: '2026-07'
      cast(case
        when NFImportDocument.cnpj > '99999999999999'
          then '00000000000000'
        else NFImportDocument.cnpj end as logbr_cnpj_numc )                                     as BR_NFBuyerRequesterCNPJ,      
      cast(NFImportDocument.cnpj as logbr_imp_cnpj preserving type)                             as BR_NFBuyerRequesterCNPJ_2,
      NFImportDocument.regio                                                                    as BR_NFThirdPartyRegion,
      cast(NFImportDocument.mfreight_nftotal as logbr_nfmaritimefreightnntotal preserving type) as BR_NFIsMaritimeFrtInTotalAmt,
      cast(NFImportDocument.cpf as logbr_imp_cpf preserving type)                               as BR_CPFBuyer,

      @Semantics.currencyCode:true
      _BR_NFDocumentCurrency.SalesDocumentCurrency                                                      as SalesDocumentCurrency,
      _BR_NotaFiscal,
      _SalesDocumentCurrency
}
```
