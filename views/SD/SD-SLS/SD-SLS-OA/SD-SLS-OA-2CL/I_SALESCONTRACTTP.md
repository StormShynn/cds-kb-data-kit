---
name: I_SALESCONTRACTTP
description: Salescontracttp
app_component: SD-SLS-OA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - transactional-processing
  - sales-contract
  - contract
  - component:SD-SLS-OA-2CL
  - lob:Sales & Distribution
---
# I_SALESCONTRACTTP

**Salescontracttp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesContract` | ✓ | |  |  |  |  |
| `SalesContractType` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `SDDocumentReason` |  | |  |  |  |  |
| `PricingDate` |  | |  |  |  |  |
| `SalesContractValidityStartDate` |  | |  |  |  |  |
| `SalesContractValidityEndDate` |  | |  |  |  |  |
| `SalesContractValidityPerdCat` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `SalesContractApprovalReason` |  | |  |  |  |  |
| `CustomerPaymentTerms` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `TotalNetAmount` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `OverallSDProcessStatus` |  | |  |  |  |  |
| `SalesDocApprovalStatus` |  | |  |  |  |  |
| `SalesContractDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_PricingElement` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Sales Contract - TP'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   sapObjectNodeType.name: 'SalesContract',
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['SalesContract']
 }

@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'SDH',
  dataSources: ['SalesContract'],
  quota: {
    maximumFields: 204,
    maximumBytes: 6800
  }
}

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

define root view entity I_SalesContractTP
  provider contract transactional_interface
  as projection on R_SalesContractTP as SalesContract
{
  key   SalesContract.SalesContract,

        SalesContract.SalesContractType,
        SalesContract.SoldToParty,
        SalesContract.SalesOrganization,
        SalesContract.DistributionChannel,
        SalesContract.OrganizationDivision,
        SalesContract.SalesOffice,
        SalesContract.SalesGroup,
        SalesContract.SalesDistrict,
        SalesContract.PurchaseOrderByCustomer,
        SalesContract.CustomerGroup,
        SalesContract.SDDocumentReason,
        SalesContract.PricingDate,

        SalesContract.SalesContractValidityStartDate,
        SalesContract.SalesContractValidityEndDate,
        SalesContract.SalesContractValidityPerdCat,

        SalesContract.IncotermsClassification,
        SalesContract.IncotermsVersion,
        SalesContract.IncotermsLocation1,
        SalesContract.IncotermsLocation2,
        SalesContract.IncotermsTransferLocation,

        SalesContract.SalesContractApprovalReason,
        SalesContract.CustomerPaymentTerms,
        SalesContract.PaymentMethod,

        SalesContract.TransactionCurrency,
        @Semantics.amount.currencyCode: 'TransactionCurrency'
        SalesContract.TotalNetAmount,
        SalesContract.LastChangeDateTime,

        SalesContract.OverallSDProcessStatus,
        SalesContract.SalesDocApprovalStatus,

        SalesContract.SalesContractDate,
        SalesContract.CreatedByUser,
        SalesContract.CreationDate,
        SalesContract.CreationTime,
        SalesContract.LastChangedByUser,

        //Compositions
        _Item           : redirected to composition child I_SalesContractItemTP,
        //        _Partner        : redirected to composition child I_SalesContractPartnerTP,
        _Text           : redirected to composition child I_SalesContractTextTP,
        _PricingElement : redirected to composition child I_SlsContrPricingElementTP

}
```
