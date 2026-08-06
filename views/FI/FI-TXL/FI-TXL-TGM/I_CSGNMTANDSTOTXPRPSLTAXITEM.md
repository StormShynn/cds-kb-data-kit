---
name: I_CSGNMTANDSTOTXPRPSLTAXITEM
description: Csgnmtandstotxprpsltaxitem
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
  - item-level
  - component:FI-TXL-TGM
  - lob:Finance
---
# I_CSGNMTANDSTOTXPRPSLTAXITEM

**Csgnmtandstotxprpsltaxitem**

| Property | Value |
|---|---|
| App Component | `FI-TXL-TGM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ProposalTaxPostingIdentifier` | `TaxPropslTax.ptxnr` |
| key `ProposalTaxPostingItem` | `TaxPropslTax.ptxit` |
| key `ProposalTaxPostingTaxItem` | `TaxPropslTax.subno` |
| `TransactionCurrency` | `_TaxProposalHeader.TransactionCurrency` |
| `TaxBaseAmountInTransCrcy` | `} TaxPropslTax.taxbas` |
| `TaxCode` | `TaxPropslTax.taxcode` |
| `ConditionType` | `TaxPropslTax.conditiontype` |
| `AccountKeyForGLAccount` | `TaxPropslTax.accountkey` |
| `TaxProposalTaxationDate` | `TaxPropslTax.taxdate` |
| `TaxRate` | `TaxPropslTax.taxrate` |
| `TaxAmountInTransCrcy` | `} TaxPropslTax.taxamt` |
| `TaxCountry` | `TaxPropslTax.taxcountry` |
| `TaxRateValidityStartDate` | `TaxPropslTax.txdat_from` |
| `CompanyCode` | `_TaxProposalHeader.CompanyCode` |
| `_TaxProposalHeader` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TaxProposalHeader` | `I_CsgnmtAndSTOTaxPrpsl` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ITAXPRPSLTAXITEM'
@AbapCatalog.preserveKey:true
@VDM.viewType: #BASIC
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Tax Proposal Posting Tax Data'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:[
  #CDS_MODELING_DATA_SOURCE,
  #CDS_MODELING_ASSOCIATION_TARGET,
  #SQL_DATA_SOURCE,
  #EXTRACTION_DATA_SOURCE
]
@Analytics.dataExtraction.enabled:true
@ObjectModel.sapObjectNodeType.name: 'ConsignmentAndSTOTaxProposal'
define view I_CsgnmtAndSTOTxPrpslTaxItem
  as select from ptxptax as TaxPropslTax
  association [1..1] to I_CsgnmtAndSTOTaxPrpsl as _TaxProposalHeader on $projection.ProposalTaxPostingIdentifier = _TaxProposalHeader.ProposalTaxPostingIdentifier

{
  key TaxPropslTax.ptxnr                     as ProposalTaxPostingIdentifier,
  key TaxPropslTax.ptxit                     as ProposalTaxPostingItem,
  key TaxPropslTax.subno                     as ProposalTaxPostingTaxItem,
      @Semantics.currencyCode: true
      _TaxProposalHeader.TransactionCurrency as TransactionCurrency,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      TaxPropslTax.taxbas                    as TaxBaseAmountInTransCrcy, //
      TaxPropslTax.taxcode                   as TaxCode,
      TaxPropslTax.conditiontype             as ConditionType, //
      TaxPropslTax.accountkey                as AccountKeyForGLAccount, //
      TaxPropslTax.taxdate                   as TaxProposalTaxationDate,
      //@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      TaxPropslTax.taxrate                   as TaxRate,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      TaxPropslTax.taxamt                    as TaxAmountInTransCrcy,
      //TaxPropslTax.is_input_tax             as IsInputTax,
      TaxPropslTax.taxcountry                as TaxCountry,
      TaxPropslTax.txdat_from                as TaxRateValidityStartDate,
      //TaxPropslTax.condcalctype              as ConditionCalculationTypeShort,
      _TaxProposalHeader.CompanyCode         as CompanyCode,
      _TaxProposalHeader

}
```
