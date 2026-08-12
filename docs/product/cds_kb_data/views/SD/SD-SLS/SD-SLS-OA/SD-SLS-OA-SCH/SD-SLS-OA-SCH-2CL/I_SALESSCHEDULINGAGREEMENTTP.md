---
name: I_SALESSCHEDULINGAGREEMENTTP
description: "Salesschedulingagreementtp"
app_component: SD-SLS-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - transactional-processing
  - component:SD-SLS-OA-SCH-2CL
  - lob:Sales & Distribution
---
# I_SALESSCHEDULINGAGREEMENTTP

**Salesschedulingagreementtp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesSchedulingAgreement` | ✓ | |  |  |  |  |
| `SalesSchedgAgrmtType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `AgrmtValdtyStartDate` |  | |  |  |  |  |
| `AgrmtValdtyEndDate` |  | |  |  |  |  |
| `SalesSchedgAgrmtDate` |  | |  |  |  |  |
| `SDDocumentReason` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `CustomerPaymentTerms` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `PricingDate` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `SalesDocumentCreationDateTime` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `OverallSDDocumentRejectionSts` |  | |  |  |  |  |
| `OverallSDProcessStatus` |  | |  |  |  |  |
| `DelivSchedTypeMRPRlvnceCode` |  | |  |  |  |  |
| `MatlUsageIndicator` |  | |  |  |  |  |
| `TotalNetAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_PricingElement` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Sales Scheduling Agreement - TP' 

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   sapObjectNodeType.name: 'SalesSchedulingAgreement',
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['SalesSchedulingAgreement']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@AbapCatalog.extensibility: {
  extensible: true,
  dataSources: ['SalesSchedulingAgreement'],  
  elementSuffix: 'SDH',
  quota: {
    maximumFields: 204, 
    maximumBytes: 6800
  }  
} 

define root view entity I_SalesSchedulingAgreementTP 
provider contract transactional_interface
  as projection on R_SalesSchedgAgrmtTP as SalesSchedulingAgreement 
{
  key SalesSchedulingAgreement.SalesSchedulingAgreement,
      SalesSchedulingAgreement.SalesSchedgAgrmtType,
      SalesSchedulingAgreement.SalesOrganization,
      SalesSchedulingAgreement.DistributionChannel,
      SalesSchedulingAgreement.OrganizationDivision,
      SalesSchedulingAgreement.SoldToParty,
      SalesSchedulingAgreement.CustomerGroup,
      SalesSchedulingAgreement.PurchaseOrderByCustomer,
      SalesSchedulingAgreement.AgrmtValdtyStartDate,
      SalesSchedulingAgreement.AgrmtValdtyEndDate,
      SalesSchedulingAgreement.SalesSchedgAgrmtDate,
      SalesSchedulingAgreement.SDDocumentReason,
      SalesSchedulingAgreement.IncotermsClassification,
      SalesSchedulingAgreement.IncotermsTransferLocation,
      SalesSchedulingAgreement.IncotermsLocation1,
      SalesSchedulingAgreement.IncotermsLocation2,
      SalesSchedulingAgreement.IncotermsVersion,
      SalesSchedulingAgreement.CustomerPaymentTerms,
      SalesSchedulingAgreement.PaymentMethod,
      SalesSchedulingAgreement.PricingDate,
      SalesSchedulingAgreement.SalesGroup,
      SalesSchedulingAgreement.SalesOffice,
      SalesSchedulingAgreement.SalesDistrict,
      SalesSchedulingAgreement.CreatedByUser,
      SalesSchedulingAgreement.LastChangedByUser,
      SalesSchedulingAgreement.SalesDocumentCreationDateTime,
      SalesSchedulingAgreement.CreationDate,
      SalesSchedulingAgreement.CreationTime,
      SalesSchedulingAgreement.LastChangeDate,
      SalesSchedulingAgreement.LastChangeDateTime,
      SalesSchedulingAgreement.OverallSDDocumentRejectionSts,
      SalesSchedulingAgreement.OverallSDProcessStatus,
      SalesSchedulingAgreement.DelivSchedTypeMRPRlvnceCode,
      SalesSchedulingAgreement.MatlUsageIndicator,
       
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesSchedulingAgreement.TotalNetAmount,
      SalesSchedulingAgreement.TransactionCurrency,
    
      //Compositions
      _Item           : redirected to composition child I_SlsSchedulingAgreementItemTP,
      _Partner        : redirected to composition child I_SlsSchedgAgrmtPartnerTP,
      _Text           : redirected to composition child I_SlsSchedgAgrmtTextTP,
      _PricingElement : redirected to composition child I_SlsSchedgAgrmtPrcgElmntTP
}
```
