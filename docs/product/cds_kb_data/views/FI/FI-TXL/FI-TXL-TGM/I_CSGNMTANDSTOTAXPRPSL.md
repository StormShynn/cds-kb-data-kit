---
name: I_CSGNMTANDSTOTAXPRPSL
description: "Csgnmtandstotaxprpsl"
app_component: FI-TXL-TGM
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
  - FI-TXL
  - FI-TXL-TGM
  - interface-view
  - tax
  - component:FI-TXL-TGM
  - lob:Finance
---
# I_CSGNMTANDSTOTAXPRPSL

**Csgnmtandstotaxprpsl**

| Property | Value |
|---|---|
| App Component | `FI-TXL-TGM` |
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
| `ProposalTaxPostingIdentifier` | ✓ | |  | `ptxnr` |  |  |
| `CrossBorderTaxProposalCategory` |  | |  | `ptxtype` |  |  |
| `CrossBorderTaxPrpslSubcategory` |  | |  | `ptxsubtype` |  |  |
| `MaterialDocument` |  | |  | `mblnr` |  |  |
| `MaterialDocumentYear` |  | |  | `mjahr` |  |  |
| `NrOfMaterialDocumentHeaders` |  | |  | `hdr_counter` |  |  |
| `OutboundDelivery` |  | |  | `vbeln` |  |  |
| `TransactionCurrency` |  | |  | `waerk` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `ReversedMaterialDocument` |  | |  | `smbln` |  |  |
| `ReversedMaterialDocumentYear` |  | |  | `sjahr` |  |  |
| `NrOfReversedMatlDocHeaders` |  | |  | `cr_counter` |  |  |
| `MaterialDocPostgDate` |  | |  | `budat` |  |  |
| `MaterialDocumentCreationDate` |  | |  | `cpudt` |  |  |
| `MaterialDocCreationTime` |  | |  | `cputm` |  |  |
| `Customer` |  | |  | `kunnr` |  |  |
| `TaxDepartureCountry` |  | |  | `otaxcnty` |  |  |
| `TaxDestinationCountry` |  | |  | `itaxcnty` |  |  |
| `TaxPostingStatus` |  | |  | `taxstatus` |  |  |
| `TaxPostingReverseCode` |  | |  | `reversecode` |  |  |
| `TaxPostingCancelCode` |  | |  | `cancelcode` |  |  |
| `JournalEntry` |  | |  | `belnr` |  |  |
| `FiscalYear` |  | |  | `cast(TaxPropslHearder.gjahr as fis_gjahr_no_conv preserving type)` |  |  |
| `PostingDate` |  | |  | `fibudat` |  |  |
| `CustomerVATRegistration` |  | |  | `stceg` |  |  |
| `DeptrCtryCoCodeVATRegnNumber` |  | |  | `ostceg` |  |  |
| `DestCtryCoCodeVATRegnNumber` |  | |  | `istceg` |  |  |
| `CreatedByUser` |  | |  | `ernam` |  |  |
| `CreationDate` |  | |  | `erdat` |  |  |
| `CreationTime` |  | |  | `erzet` |  |  |
| `LastChangedByUser` |  | |  | `upnam` |  |  |
| `LastChangeDate` |  | |  | `updat` |  |  |
| `LastChangeTime` |  | |  | `uptim` |  |  |
| `IncotermsPart1` |  | |  | `inco1` |  |  |
| `AccountingExchangeRate` |  | |  | `cast( TaxPropslHearder.kurrf as kurrf_not_converted preserving type )` |  |  |
| `DestinationCountry` |  | |  | `land1` |  |  |
| `Region` |  | |  | `regio` |  |  |
| `ForeignTradeStstclCurrency` |  | |  | `grwcu` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `IsIntrastatReportingRelevant` |  | |  | `intra_rel` |  |  |
| `IsIntrastatReportingExcluded` |  | |  | `intra_excl` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ITAXPRPSLHEAD'
@AbapCatalog.preserveKey:true
@VDM.viewType: #BASIC
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Tax Proposal Posting Header'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:[
  #CDS_MODELING_DATA_SOURCE,
  #CDS_MODELING_ASSOCIATION_TARGET,
  #SQL_DATA_SOURCE,
  #EXTRACTION_DATA_SOURCE
]
@Analytics.dataExtraction.enabled:true
@ObjectModel.sapObjectNodeType.name: 'ConsignmentAndSTOTaxProposal'
define view I_CsgnmtAndSTOTaxPrpsl
  as select from ptxph as TaxPropslHearder
{

  key TaxPropslHearder.ptxnr                                                as ProposalTaxPostingIdentifier,
      TaxPropslHearder.ptxtype                                              as CrossBorderTaxProposalCategory,
      TaxPropslHearder.ptxsubtype                                           as CrossBorderTaxPrpslSubcategory,
      TaxPropslHearder.mblnr                                                as MaterialDocument, //
      TaxPropslHearder.mjahr                                                as MaterialDocumentYear, //
      TaxPropslHearder.hdr_counter                                          as NrOfMaterialDocumentHeaders,
      TaxPropslHearder.vbeln                                                as OutboundDelivery, //
      @Semantics.currencyCode:true
      TaxPropslHearder.waerk                                                as TransactionCurrency, //
      TaxPropslHearder.bukrs                                                as CompanyCode, //
      TaxPropslHearder.smbln                                                as ReversedMaterialDocument, //
      TaxPropslHearder.sjahr                                                as ReversedMaterialDocumentYear, //
      TaxPropslHearder.cr_counter                                           as NrOfReversedMatlDocHeaders,
      TaxPropslHearder.budat                                                as MaterialDocPostgDate,
      TaxPropslHearder.cpudt                                                as MaterialDocumentCreationDate, //
      @Semantics.systemTime.createdAt:true
      TaxPropslHearder.cputm                                                as MaterialDocCreationTime,
      TaxPropslHearder.kunnr                                                as Customer, //
      TaxPropslHearder.otaxcnty                                             as TaxDepartureCountry, //
      TaxPropslHearder.itaxcnty                                             as TaxDestinationCountry, //
      TaxPropslHearder.taxstatus                                            as TaxPostingStatus,
      TaxPropslHearder.reversecode                                          as TaxPostingReverseCode,
      TaxPropslHearder.cancelcode                                           as TaxPostingCancelCode,
      TaxPropslHearder.belnr                                                as JournalEntry, //
      //For fixing ATC priority 4 - POC_ANNOTA GFNC conv. exit doesn't match '' of GFN default data element
      cast(TaxPropslHearder.gjahr as fis_gjahr_no_conv preserving type) as FiscalYear,      
      //TaxPropslHearder.gjahr                                                as FiscalYear, //
      TaxPropslHearder.fibudat                                              as PostingDate, //
      TaxPropslHearder.stceg                                                as CustomerVATRegistration, //
      TaxPropslHearder.ostceg                                               as DeptrCtryCoCodeVATRegnNumber,
      TaxPropslHearder.istceg                                               as DestCtryCoCodeVATRegnNumber,
      TaxPropslHearder.ernam                                                as CreatedByUser,
      TaxPropslHearder.erdat                                                as CreationDate,
      TaxPropslHearder.erzet                                                as CreationTime,
      TaxPropslHearder.upnam                                                as LastChangedByUser,
      TaxPropslHearder.updat                                                as LastChangeDate,
      TaxPropslHearder.uptim                                                as LastChangeTime,
      TaxPropslHearder.inco1                                                as IncotermsPart1, //
      cast( TaxPropslHearder.kurrf as kurrf_not_converted preserving type ) as AccountingExchangeRate, //
      TaxPropslHearder.land1                                                as DestinationCountry, // same value with field itaxcnty
      TaxPropslHearder.regio                                                as Region, //
      @Semantics.currencyCode:true
      TaxPropslHearder.grwcu                                                as ForeignTradeStstclCurrency,
      TaxPropslHearder.vkorg                                                as SalesOrganization,
      TaxPropslHearder.intra_rel                                            as IsIntrastatReportingRelevant, //
      TaxPropslHearder.intra_excl                                           as IsIntrastatReportingExcluded //
      //TaxPropslHearder.lfdat       as GoodsArrivalDate
}
```
