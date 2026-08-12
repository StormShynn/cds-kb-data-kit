---
name: I_FINANCIALTRANSACTIONNPV
description: "Financialtransactionnpv"
app_component: FIN-FSCM-TRM-MR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-MR-2CL
  - lob:Other
---
# I_FINANCIALTRANSACTIONNPV

**Financialtransactionnpv**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-MR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |  |  |
| `FinancialTransaction` | ✓ | |  |  |  |  |
| `FinancialTransactionNPVType` | ✓ | |  |  |  |  |
| `NetPresentValueValidityDate` | ✓ | |  |  |  |  |
| `NetPresentValueAmountInNPVCrcy` |  | |  |  |  |  |
| `NetPresentValueCurrency` |  | |  |  |  |  |
| `IntrinsicValueAmountInNPVCrcy` |  | |  |  |  |  |
| `TimeValueAmountInNPVCrcy` |  | |  |  |  |  |
| `CleanPriceAmountInNPVCrcy` |  | |  |  |  |  |
| `IncomingNPVAmountInNPVCrcy` |  | |  |  |  |  |
| `OutgoingNPVAmountInNPVCrcy` |  | |  |  |  |  |
| `RiskFreeNPVAmountInNPVCrcy` |  | |  |  |  |  |
| `CreditValueAdjmtAmtInNPVCrcy` |  | |  |  |  |  |
| `DebitValueAdjmtAmtInNPVCrcy` |  | |  |  |  |  |
| `_FinancialTransaction` | | ✓ | | | | |
| `_NPVType` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Financial Transaction Net Present Value'
@ObjectModel.usageType:{
  serviceQuality: #B,
  sizeCategory: #M,
  dataClass: #TRANSACTIONAL }
@ObjectModel.modelingPattern: #ANALYTICAL_FACT  
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]  
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true

define view entity I_FinancialTransactionNPV
  as select from R_FinancialTransactionNPV
 
{
  key CompanyCode,
  key FinancialTransaction,
  key FinancialTransactionNPVType,
  key NetPresentValueValidityDate,
      @Semantics.amount.currencyCode: 'NetPresentValueCurrency'
      NetPresentValueAmountInNPVCrcy,
      NetPresentValueCurrency,
      @Semantics.amount.currencyCode: 'NetPresentValueCurrency'
      IntrinsicValueAmountInNPVCrcy,
      @Semantics.amount.currencyCode: 'NetPresentValueCurrency'
      TimeValueAmountInNPVCrcy,
      @Semantics.amount.currencyCode: 'NetPresentValueCurrency'
      CleanPriceAmountInNPVCrcy,
      @Semantics.amount.currencyCode: 'NetPresentValueCurrency'
      IncomingNPVAmountInNPVCrcy,
      @Semantics.amount.currencyCode: 'NetPresentValueCurrency'
      OutgoingNPVAmountInNPVCrcy,
      @Semantics.amount.currencyCode: 'NetPresentValueCurrency'
      RiskFreeNPVAmountInNPVCrcy,
      @Semantics.amount.currencyCode: 'NetPresentValueCurrency'
      CreditValueAdjmtAmtInNPVCrcy,
      @Semantics.amount.currencyCode: 'NetPresentValueCurrency'
      DebitValueAdjmtAmtInNPVCrcy,
      _FinancialTransaction,
      _NPVType,
      _CompanyCode 
}
```
