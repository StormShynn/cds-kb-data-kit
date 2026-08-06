---
name: I_CSGNMTANDSTOTAXPRPSL
description: Csgnmtandstotaxprpsl
app_component: FI-TXL-TGM
software_component: SAPSCORE
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ProposalTaxPostingIdentifier` | `TaxPropslHearder.ptxnr` |
| `CrossBorderTaxProposalCategory` | `TaxPropslHearder.ptxtype` |
| `CrossBorderTaxPrpslSubcategory` | `TaxPropslHearder.ptxsubtype` |
| `MaterialDocument` | `TaxPropslHearder.mblnr` |
| `MaterialDocumentYear` | `TaxPropslHearder.mjahr` |
| `NrOfMaterialDocumentHeaders` | `TaxPropslHearder.hdr_counter` |
| `OutboundDelivery` | `TaxPropslHearder.vbeln` |
| `TransactionCurrency` | `TaxPropslHearder.waerk` |
| `CompanyCode` | `TaxPropslHearder.bukrs` |
| `ReversedMaterialDocument` | `TaxPropslHearder.smbln` |
| `ReversedMaterialDocumentYear` | `TaxPropslHearder.sjahr` |
| `NrOfReversedMatlDocHeaders` | `TaxPropslHearder.cr_counter` |
| `MaterialDocPostgDate` | `TaxPropslHearder.budat` |
| `MaterialDocumentCreationDate` | `TaxPropslHearder.cpudt` |
| `MaterialDocCreationTime` | `TaxPropslHearder.cputm` |
| `Customer` | `TaxPropslHearder.kunnr` |
| `TaxDepartureCountry` | `TaxPropslHearder.otaxcnty` |
| `TaxDestinationCountry` | `TaxPropslHearder.itaxcnty` |
| `TaxPostingStatus` | `TaxPropslHearder.taxstatus` |
| `TaxPostingReverseCode` | `TaxPropslHearder.reversecode` |
| `TaxPostingCancelCode` | `TaxPropslHearder.cancelcode` |
| `JournalEntry` | `TaxPropslHearder.belnr` |
| `FiscalYear` | `cast(TaxPropslHearder.gjahr as fis_gjahr_no_conv preserving type)` |
| `PostingDate` | `TaxPropslHearder.fibudat` |
| `CustomerVATRegistration` | `TaxPropslHearder.stceg` |
| `DeptrCtryCoCodeVATRegnNumber` | `TaxPropslHearder.ostceg` |
| `DestCtryCoCodeVATRegnNumber` | `TaxPropslHearder.istceg` |
| `CreatedByUser` | `TaxPropslHearder.ernam` |
| `CreationDate` | `TaxPropslHearder.erdat` |
| `CreationTime` | `TaxPropslHearder.erzet` |
| `LastChangedByUser` | `TaxPropslHearder.upnam` |
| `LastChangeDate` | `TaxPropslHearder.updat` |
| `LastChangeTime` | `TaxPropslHearder.uptim` |
| `IncotermsPart1` | `TaxPropslHearder.inco1` |
| `AccountingExchangeRate` | `cast( TaxPropslHearder.kurrf as kurrf_not_converted preserving type )` |
| `DestinationCountry` | `TaxPropslHearder.land1` |
| `Region` | `TaxPropslHearder.regio` |
| `ForeignTradeStstclCurrency` | `TaxPropslHearder.grwcu` |
| `SalesOrganization` | `TaxPropslHearder.vkorg` |
| `IsIntrastatReportingRelevant` | `TaxPropslHearder.intra_rel` |
| `IsIntrastatReportingExcluded` | `TaxPropslHearder.intra_excl` |

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
