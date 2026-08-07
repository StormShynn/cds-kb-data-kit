---
name: I_FRTCOSTALLOCDOCTP
description: Frtcostallocdoctp
app_component: LO-AB
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-AB
  - interface-view
  - transactional-processing
  - component:LO-AB
  - lob:Logistics General
---
# I_FRTCOSTALLOCDOCTP

**Frtcostallocdoctp**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `FreightCostAllocationDocument` |  | |  | `, useAsTemplate: true }] } key FreightCostAllocationDocument` |
| `SettlmtDocType` |  | |  | `, useAsTemplate: true }] } SettlmtDocType` |
| `SettlmtDocCat` |  | |  |  |
| `SettlmtProcessType` |  | |  | `, useAsTemplate: true }] } SettlmtProcessType` |
| `SettlmtProcessCat` |  | |  | `, useAsTemplate: true }] } SettlmtProcessCat` |
| `PostingDate` |  | |  |  |
| `FrtCostAllocAcctgTransfSts` |  | |  | `, useAsTemplate: true }] } FrtCostAllocAcctgTransfSts` |
| `DocumentDate` |  | |  |  |
| `DocumentReferenceID` |  | |  |  |
| `AssignmentReference` |  | |  |  |
| `SettlmtApplSts` |  | |  | `, useAsTemplate: true }] } SettlmtApplSts` |
| `SettlmtApplStsGrp` |  | |  |  |
| `PricingProcedure` |  | |  |  |
| `PricingDocument` |  | |  |  |
| `CompanyCode` |  | |  | `, useAsTemplate: true }] } CompanyCode` |
| `PurchasingOrganization` |  | |  |  |
| `PurchasingGroup` |  | |  |  |
| `SalesOrganization` |  | |  |  |
| `DistributionChannel` |  | |  |  |
| `Division` |  | |  |  |
| `SalesOffice` |  | |  |  |
| `SalesGroup` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `CreationDate` |  | |  |  |
| `CreationTime` |  | |  |  |
| `LastChangeDate` |  | |  |  |
| `FrtCostAllocDocCurrency` |  | |  | `, useAsTemplate: true }] } FrtCostAllocDocCurrency` |
| `ExchangeRate` |  | |  |  |
| `ExchangeRateType` |  | |  |  |
| `ExchangeRateIsFixed` |  | |  |  |
| `ExchangeRateDate` |  | |  |  |
| `FrtCostAllocDocTotGrossAmount` |  | |  |  |
| `FrtCostAllocDocTotalNetAmount` |  | |  |  |
| `FrtCostAllocDocIsReversed` |  | |  |  |
| `RvsdFrtCostAllocDoc` |  | |  | `, useAsTemplate: true }] } RvsdFrtCostAllocDoc` |
| `FrtCostAllocDocActivityReason` |  | |  |  |
| `SettlmtClassificationCat` |  | |  |  |
| `FiscalPeriod` |  | |  |  |
| `FrtCostAllocDocIncmpltnsRsn` |  | |  |  |
| `FrtCostAllocBusProcCat` |  | |  | `, useAsTemplate: true }] } FrtCostAllocBusProcCat` |
| `JournalEntryCreationDate` |  | |  |  |
| `JournalEntryCreationTime` |  | |  |  |
| `_FrtCostAllocItm` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Freight Cost Allocation Document - TP'   
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #NOT_REQUIRED 
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  sapObjectNodeType:{
      name: 'FreightCostAllocationDocument'},
      usageType:{
          serviceQuality: #B,
          sizeCategory: #XXL,
          dataClass: #TRANSACTIONAL
  },
     semanticKey: ['FreightCostAllocationDocument'],
  modelingPattern:       #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'SMH',
  dataSources: ['FreightCostAllocationDocument'],
  quota: {
    maximumFields: 204, //This is calculated with formula - 2* <Customer Percentage from SCFD_REGISTRY> * <max number of fields in SCFD_REGISTRY>
    maximumBytes: 4080  //This is calculated with formula - 2* <Customer Percentage from SCFD_REGISTRY> * <number of chars as defined in SCFD_REGISTRY>
  }
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

define root view entity I_FrtCostAllocDocTP
  provider contract transactional_interface
  as projection on R_FrtCostAllocDocTP as FreightCostAllocationDocument
{
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_FrtCostAllocDocStdVH', element: 'FreightCostAllocationDocument' }, useAsTemplate: true }]
      }
  key FreightCostAllocationDocument,
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_FrtCostAllocDocTypeVH', element: 'SettlmtDocType' }, useAsTemplate: true }]
      }
      SettlmtDocType,
      SettlmtDocCat, 
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SettlmtProcessTypeStdVH', element: 'SettlmtProcessType' }, useAsTemplate: true }]
      }     
      SettlmtProcessType, 
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SettlmtProcessCat', element: 'SettlmtProcessCat' }, useAsTemplate: true }]
      }
      SettlmtProcessCat,
      PostingDate,
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_FrtCostAllocAcctgTransfSts', element: 'FrtCostAllocAcctgTransfSts' }, useAsTemplate: true }]
      }
      FrtCostAllocAcctgTransfSts,
      DocumentDate,
      DocumentReferenceID,
      AssignmentReference,
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SettlmtApplStsStdVH', element: 'SettlmtApplSts' }, useAsTemplate: true }]
      }      
      SettlmtApplSts, 
      SettlmtApplStsGrp,
      /* Pricing */
      PricingProcedure,
      PricingDocument,
      /* Organizational Data */
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' }, useAsTemplate: true }]
      }
      CompanyCode,
      PurchasingOrganization,
      PurchasingGroup,
      SalesOrganization,
      DistributionChannel,
      Division,
      SalesOffice,
      SalesGroup,
      /* Administrative Data */
      CreatedByUser,
      CreationDate,
      CreationTime,
      LastChangeDate,
      /* Currency and Exchange Rate */
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CurrencyStdVH', element: 'Currency' }, useAsTemplate: true }]
      }  
      FrtCostAllocDocCurrency,
      ExchangeRate,
      ExchangeRateType,
      ExchangeRateIsFixed,
      ExchangeRateDate,
      /* Amount fields */
      @Semantics.amount.currencyCode: 'FrtCostAllocDocCurrency'
      FrtCostAllocDocTotGrossAmount,
      @Semantics.amount.currencyCode: 'FrtCostAllocDocCurrency'
      FrtCostAllocDocTotalNetAmount,
      /* Reversal Information */
      FrtCostAllocDocIsReversed,
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_FrtCostAllocDocStdVH', element: 'FreightCostAllocationDocument' }, useAsTemplate: true }]
      }
      RvsdFrtCostAllocDoc,
      FrtCostAllocDocActivityReason,
      SettlmtClassificationCat,
      FiscalPeriod,
      FrtCostAllocDocIncmpltnsRsn,
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_FrtCostAllocBusProcCat', element: 'FrtCostAllocBusProcCat' }, useAsTemplate: true }]
      }    
      FrtCostAllocBusProcCat,
      /* Journal Entry */
      JournalEntryCreationDate,
      JournalEntryCreationTime,

      //Compositions
      _FrtCostAllocItm : redirected to composition child I_FrtCostAllocItmTP
        
}
```
