---
name: I_CSGNMTANDSTOTXPRPSLTAXITEM
description: "Csgnmtandstotxprpsltaxitem"
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProposalTaxPostingIdentifier` | ✓ | |  | `ptxnr` |  |  |
| `ProposalTaxPostingItem` | ✓ | |  | `ptxit` |  |  |
| `ProposalTaxPostingTaxItem` | ✓ | |  | `subno` |  |  |
| `TransactionCurrency` |  | | `_TaxProposalHeader` | `TransactionCurrency` |  |  |
| `TaxBaseAmountInTransCrcy` |  | |  | `taxbas` |  |  |
| `TaxCode` |  | |  | `taxcode` |  |  |
| `ConditionType` |  | |  | `conditiontype` |  |  |
| `AccountKeyForGLAccount` |  | |  | `accountkey` |  |  |
| `TaxProposalTaxationDate` |  | |  | `taxdate` |  |  |
| `TaxRate` |  | |  | `taxrate` |  |  |
| `TaxAmountInTransCrcy` |  | |  | `taxamt` |  |  |
| `TaxCountry` |  | |  | `taxcountry` |  |  |
| `TaxRateValidityStartDate` |  | |  | `txdat_from` |  |  |
| `CompanyCode` |  | | `_TaxProposalHeader` | `CompanyCode` |  |  |
| `_TaxProposalHeader` | | ✓ | | | | |

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
