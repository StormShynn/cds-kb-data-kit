---
name: I_RACONTRMNGREVNCONTRTP
description: "Racontrmngrevncontrtp"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RevenueAccountingContract` | ✓ | |  |  |  |  |
| `RevnAcctgContractDescription` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `AccountingPrinciple` |  | |  |  |  |  |
| `BusinessPartner` |  | |  |  |  |  |
| `BusinessPartnerName` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `CustomerName` |  | |  |  |  |  |
| `TotContractualPrcInSlsDocCrcy` |  | |  |  |  |  |
| `RAContrBalanceIsDfrrdRevn` |  | |  |  |  |  |
| `RAContrBalanceIsLiability` |  | |  |  |  |  |
| `NumberOfPerformanceObligations` |  | |  |  |  |  |
| `AllocEffctAmountInSalesDocCrcy` |  | |  |  |  |  |
| `RevnContrAssetsImpairmentDate` |  | |  |  |  |  |
| `RAContractHasAssetsImpairment` |  | |  |  |  |  |
| `RevnAcctgContractStatus` |  | |  |  |  |  |
| `RevnAcctgContractStatusName` |  | |  |  |  |  |
| `RAContractStatusCriticality` |  | |  |  |  |  |
| `RAContractCompletionDate` |  | |  |  |  |  |
| `SalesDocumentCurrency` |  | |  |  |  |  |
| `RevnAcctgSalesOrganization` |  | |  |  |  |  |
| `RAContractHasAllocationEffect` |  | |  |  |  |  |
| `CreatedByUserDescription` |  | |  |  |  |  |
| `RevnAcctgContractCreationDate` |  | |  |  |  |  |
| `LastChangedByUserDescription` |  | |  |  |  |  |
| `RAContractLastChangeDate` |  | |  |  |  |  |
| `RAContractIsSoftDeleted` |  | |  |  |  |  |
| `RAContrManualChgBusinessReason` |  | |  |  |  |  |
| `HasAttachment` |  | |  |  |  |  |
| `RAContractHasCompoundPerfOblgn` |  | |  |  |  |  |
| `RAContractIsManuallyAllocated` |  | |  |  |  |  |
| `RAContrHasMnlPrcAllocConflict` |  | |  |  |  |  |
| `RAAttributeHasConflict` |  | |  |  |  |  |
| `PerfOblgnHasSprdgConflict` |  | |  |  |  |  |
| `PerfOblgnHasManualSpreading` |  | |  |  |  |  |
| `IsBusinessPurposeCompleted` |  | |  |  |  |  |
| `RAContractLastSavedDateTime` |  | |  |  |  |  |
| `RAContractIsUniversal` |  | |  |  |  |  |
| `RAContrIsNotActvUnivRevnRecgn` |  | |  |  |  |  |
| `RAContractPostingMode` |  | |  |  |  |  |
| `RAContractPostingModeName` |  | |  |  |  |  |
| `RARevnLbltyAssetCalcIsEnabled` |  | |  |  |  |  |
| `RARevenuePostIsEnabled` |  | |  |  |  |  |
| `FiscalYear` |  | |  |  |  |  |
| `FiscalPeriod` |  | |  |  |  |  |
| `RevnAcctgContractCreatedByUser` |  | |  |  |  |  |
| `RAContractLastChangedByUsr` |  | |  |  |  |  |
| `_PerformanceObligation` | | ✓ | | | | |
| `_AccountingPrinciple` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_RAContrMnlChgBusinessRsnText` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |

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
