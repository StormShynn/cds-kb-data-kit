---
name: I_OPERATIONALACCTGDOCTAXITEM
description: Operationalacctgdoctaxitem
app_component: FI-LOC-VAT-GEN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-VAT
  - interface-view
  - tax
  - item-level
  - component:FI-LOC-VAT-GEN
  - lob:Finance
---
# I_OPERATIONALACCTGDOCTAXITEM

**Operationalacctgdoctaxitem**

| Property | Value |
|---|---|
| App Component | `FI-LOC-VAT-GEN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |  |  |
| `AccountingDocument` | ✓ | |  |  |  |  |
| `FiscalYear` | ✓ | |  |  |  |  |
| `TaxItem` | ✓ | |  |  |  |  |
| `TaxItemUUID` | ✓ | |  |  |  |  |
| `TaxCode` |  | |  |  |  |  |
| `TaxBaseAmountInCoCodeCrcy` |  | |  | `cast( TaxBaseAmountInCoCodeCrcy as hwbas_shl)` |  |  |
| `TaxBaseAmountInTransCrcy` |  | |  | `cast( TaxBaseAmountInTransCrcy as fwbas_shl )` |  |  |
| `TaxAmountInCoCodeCrcy` |  | |  | `cast( TaxAmountInCoCodeCrcy as fis_mwsts )` |  |  |
| `TaxAmountInTransCrcy` |  | |  | `cast( TaxAmountInTransCrcy as wmwst_shl )` |  |  |
| `TransactionTypeDetermination` |  | |  |  |  |  |
| `TaxAmountInRptgCrcy` |  | |  | `cast ( case when TaxDataSource = '2' then TaxAmountInRptgCrcy else case when CompanyCodeCountry = ReportingCountry and CompanyCodeCurrency = ReportingCurrency then TaxAmountInCoCodeCrcy else TaxAmountInRptgCrcy end end as glo_tax_amount_rptg_crcy )` |  |  |
| `TaxBaseAmountInRptgCrcy` |  | |  | `cast ( case when TaxDataSource = '2' then TaxBaseAmountInRptgCrcy else case when CompanyCodeCountry = ReportingCountry and CompanyCodeCurrency = ReportingCurrency then TaxBaseAmountInCoCodeCrcy else TaxBaseAmountInRptgCrcy end end as glo_taxbase_amount_rptg_crcy )` |  |  |
| `ReportingCountry` |  | |  |  |  |  |
| `ReportingCurrency` |  | |  |  |  |  |
| `CompanyCodeCurrency` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `TaxDataSource` |  | |  |  |  |  |
| `DebitCreditCode` |  | |  |  |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |
| `_OperationalAcctgDocItem` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.allowExtensions:true
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Indirect Tax Items'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
    serviceQuality: #C,
    sizeCategory: #XXL,
    dataClass: #MIXED
}
@VDM.viewType: #COMPOSITE
@Analytics.dataCategory: #CUBE
@Analytics.internalName: #LOCAL
@ObjectModel.supportedCapabilities: 
   [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_PROVIDER ] 
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
define view entity I_OperationalAcctgDocTaxItem
  as select from P_BSET1
{
  key CompanyCode,
  key AccountingDocument,
  key FiscalYear,
  key TaxItem,  
  key TaxItemUUID,
      TaxCode,
      
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast( TaxBaseAmountInCoCodeCrcy as hwbas_shl) as TaxBaseAmountInCoCodeCrcy,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      cast( TaxBaseAmountInTransCrcy as fwbas_shl ) as TaxBaseAmountInTransCrcy,
            
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast( TaxAmountInCoCodeCrcy as fis_mwsts ) as TaxAmountInCoCodeCrcy,
      
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      cast( TaxAmountInTransCrcy as wmwst_shl ) as TaxAmountInTransCrcy,
      TransactionTypeDetermination,
      
      @Semantics.amount.currencyCode: 'ReportingCurrency'
      cast ( case
      when TaxDataSource = '2'
      then TaxAmountInRptgCrcy
      else
      case
          when CompanyCodeCountry = ReportingCountry and CompanyCodeCurrency = ReportingCurrency
          then TaxAmountInCoCodeCrcy
          else TaxAmountInRptgCrcy
      end 
      end as glo_tax_amount_rptg_crcy ) as TaxAmountInRptgCrcy,
      
      @Semantics.amount.currencyCode: 'ReportingCurrency'
      cast ( case
      when TaxDataSource = '2'
      then TaxBaseAmountInRptgCrcy
      else
      case
          when CompanyCodeCountry = ReportingCountry and CompanyCodeCurrency = ReportingCurrency
          then TaxBaseAmountInCoCodeCrcy
          else TaxBaseAmountInRptgCrcy
      end
      end as glo_taxbase_amount_rptg_crcy ) as TaxBaseAmountInRptgCrcy,

      ReportingCountry,
      ReportingCurrency,
      CompanyCodeCurrency,
      TransactionCurrency,
      
      TaxDataSource,
      DebitCreditCode,
      _CompanyCode,
      _JournalEntry,
      _OperationalAcctgDocItem,
      _CompanyCodeCurrency

}
```
