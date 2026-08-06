---
name: I_RACONTRMNGREVNCONTRTP
description: Racontrmngrevncontrtp
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-RA
  - interface-view
  - transactional-processing
  - component:FI-RA-2CL
  - lob:Finance
---
# I_RACONTRMNGREVNCONTRTP

**Racontrmngrevncontrtp**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `RevenueAccountingContract` | `RevenueAccountingContract` |
| `RevnAcctgContractDescription` | `RevnAcctgContractDescription` |
| `CompanyCode` | `CompanyCode` |
| `AccountingPrinciple` | `AccountingPrinciple` |
| `BusinessPartner` | `BusinessPartner` |
| `BusinessPartnerName` | `BusinessPartnerName` |
| `Customer` | `Customer` |
| `CustomerName` | `CustomerName` |
| `TotContractualPrcInSlsDocCrcy` | `TotContractualPrcInSlsDocCrcy` |
| `RAContrBalanceIsDfrrdRevn` | `RAContrBalanceIsDfrrdRevn` |
| `RAContrBalanceIsLiability` | `RAContrBalanceIsLiability` |
| `NumberOfPerformanceObligations` | `NumberOfPerformanceObligations` |
| `AllocEffctAmountInSalesDocCrcy` | `AllocEffctAmountInSalesDocCrcy` |
| `RevnContrAssetsImpairmentDate` | `RevnContrAssetsImpairmentDate` |
| `RAContractHasAssetsImpairment` | `RAContractHasAssetsImpairment` |
| `RevnAcctgContractStatus` | `RevnAcctgContractStatus` |
| `RevnAcctgContractStatusName` | `RevnAcctgContractStatusName` |
| `RAContractStatusCriticality` | `RAContractStatusCriticality` |
| `RAContractCompletionDate` | `RAContractCompletionDate` |
| `SalesDocumentCurrency` | `SalesDocumentCurrency` |
| `RevnAcctgSalesOrganization` | `RevnAcctgSalesOrganization` |
| `RAContractHasAllocationEffect` | `RAContractHasAllocationEffect` |
| `CreatedByUserDescription` | `CreatedByUserDescription` |
| `RevnAcctgContractCreationDate` | `RevnAcctgContractCreationDate` |
| `LastChangedByUserDescription` | `LastChangedByUserDescription` |
| `RAContractLastChangeDate` | `RAContractLastChangeDate` |
| `RAContractIsSoftDeleted` | `RAContractIsSoftDeleted` |
| `RAContrManualChgBusinessReason` | `RAContrManualChgBusinessReason` |
| `HasAttachment` | `HasAttachment` |
| `RAContractHasCompoundPerfOblgn` | `RAContractHasCompoundPerfOblgn` |
| `RAContractIsManuallyAllocated` | `RAContractIsManuallyAllocated` |
| `RAContrHasMnlPrcAllocConflict` | `RAContrHasMnlPrcAllocConflict` |
| `RAAttributeHasConflict` | `RAAttributeHasConflict` |
| `PerfOblgnHasSprdgConflict` | `PerfOblgnHasSprdgConflict` |
| `PerfOblgnHasManualSpreading` | `PerfOblgnHasManualSpreading` |
| `IsBusinessPurposeCompleted` | `IsBusinessPurposeCompleted` |
| `RAContractLastSavedDateTime` | `RAContractLastSavedDateTime` |
| `RAContractIsUniversal` | `RAContractIsUniversal` |
| `RAContrIsNotActvUnivRevnRecgn` | `RAContrIsNotActvUnivRevnRecgn` |
| `RAContractPostingMode` | `RAContractPostingMode` |
| `RAContractPostingModeName` | `RAContractPostingModeName` |
| `RARevnLbltyAssetCalcIsEnabled` | `RARevnLbltyAssetCalcIsEnabled` |
| `RARevenuePostIsEnabled` | `RARevenuePostIsEnabled` |
| `FiscalYear` | `FiscalYear` |
| `FiscalPeriod` | `FiscalPeriod` |
| `RevnAcctgContractCreatedByUser` | `RevnAcctgContractCreatedByUser` |
| `RAContractLastChangedByUsr` | `RAContractLastChangedByUsr` |
| `_PerformanceObligation` | *Association* |
| `_AccountingPrinciple` | *Association* |
| `_BusinessPartner` | *Association* |
| `_CompanyCode` | *Association* |
| `_RAContrMnlChgBusinessRsnText` | *Association* |
| `_SalesOrganization` | *Association* |

## Source Code

```abap
@AccessControl:{ 
  authorizationCheck: #MANDATORY,
  personalData.blocking: #REQUIRED }

@EndUserText.label: 'Revenue Contract - TP'

@Metadata.ignorePropagatedAnnotations: true

@Search.searchable: true

@ObjectModel:  { 
  sapObjectNodeType.name: 'RevenueAccountingContract',
  usageType: { sizeCategory: #XXL, serviceQuality: #C, dataClass: #TRANSACTIONAL },
  supportedCapabilities: [ #TRANSACTIONAL_PROVIDER ],
  modelingPattern: #TRANSACTIONAL_INTERFACE }

@AbapCatalog.extensibility: {
  extensible: true,
  dataSources: [ 'RAContract' ],
  elementSuffix: 'RCH',
  quota: { maximumFields: 200,    // this is calculated with formula - 2* <Customer Percentage from SCFD_REGISTRY> * <max number of fields in SCFD_REGISTRY>
           maximumBytes: 2200 } } // this is calculated with formula - 2* <Customer Percentage from SCFD_REGISTRY> * <number of chars as defined in SCFD_REGISTRY>
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL }

define root view entity I_RAContrMngRevnContrTP
  provider contract transactional_interface
  as projection on R_RAContrMngRevnContrTP as RAContract

{
  key RevenueAccountingContract,

      RevnAcctgContractDescription,

      CompanyCode,


      AccountingPrinciple,


      BusinessPartner,

      BusinessPartnerName,


      Customer,

      CustomerName,

      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      TotContractualPrcInSlsDocCrcy,

      RAContrBalanceIsDfrrdRevn,
      RAContrBalanceIsLiability,
      NumberOfPerformanceObligations,

      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      AllocEffctAmountInSalesDocCrcy,

      RevnContrAssetsImpairmentDate,


      RAContractHasAssetsImpairment,


      RevnAcctgContractStatus,

      RevnAcctgContractStatusName,
      RAContractStatusCriticality,


      RAContractCompletionDate,

      SalesDocumentCurrency,

      RevnAcctgSalesOrganization,

      RAContractHasAllocationEffect,

      CreatedByUserDescription,


      RevnAcctgContractCreationDate,

      LastChangedByUserDescription,
      
      RAContractLastChangeDate,

      RAContractIsSoftDeleted,

      RAContrManualChgBusinessReason,

      HasAttachment,

      RAContractHasCompoundPerfOblgn,

      RAContractIsManuallyAllocated,

      RAContrHasMnlPrcAllocConflict,
      RAAttributeHasConflict,
      PerfOblgnHasSprdgConflict,

      PerfOblgnHasManualSpreading,

      IsBusinessPurposeCompleted,
      RAContractLastSavedDateTime,

      RAContractIsUniversal,

      // Flag to hide the URR section
      RAContrIsNotActvUnivRevnRecgn,

      RAContractPostingMode,

      RAContractPostingModeName,
      RARevnLbltyAssetCalcIsEnabled,
      RARevenuePostIsEnabled,
      FiscalYear,
      FiscalPeriod,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      RevnAcctgContractCreatedByUser,


      RAContractLastChangedByUsr,


      /* Associations */
      _PerformanceObligation : redirected to composition child I_RAPerfOblgnMngRevnContrTP,

      _AccountingPrinciple,
      _BusinessPartner,
      _CompanyCode,
      _RAContrMnlChgBusinessRsnText,
      _SalesOrganization
}
```
