---
name: I_DEBITMEMOREQUESTTP
description: "Debitmemorequesttp"
app_component: SD-SLS-CMR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-CMR
  - interface-view
  - transactional-processing
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# I_DEBITMEMOREQUESTTP

**Debitmemorequesttp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DebitMemoRequest` | ✓ | |  |  |  |  |
| `DebitMemoRequestType` |  | |  |  |  |  |
| `DebitMemoRequestDate` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `CustomerName` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `ReferenceDistributionChannel` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `CustomerPurchaseOrderType` |  | |  |  |  |  |
| `CustomerPurchaseOrderDate` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `SDDocumentReason` |  | |  |  |  |  |
| `PricingDate` |  | |  |  |  |  |
| `TotalNetAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `HeaderBillingBlockReason` |  | |  |  |  |  |
| `SDPricingProcedure` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `CustomerPaymentTerms` |  | |  |  |  |  |
| `BillingCompanyCode` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `BillingDocumentDate` |  | |  |  |  |  |
| `ServicesRenderedDate` |  | |  |  |  |  |
| `ReferenceSDDocument` |  | |  |  |  |  |
| `ReferenceSDDocumentCategory` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `SalesDocumentCreationDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `DebitMemoReqApprovalReason` |  | |  |  |  |  |
| `SalesDocApprovalStatus` |  | |  |  |  |  |
| `OverallBillingBlockStatus` |  | |  |  |  |  |
| `OverallSDProcessStatus` |  | |  |  |  |  |
| `OverallSDDocumentRejectionSts` |  | |  |  |  |  |
| `OverallOrdReltdBillgStatus` |  | |  |  |  |  |
| `TotalBlockStatus` |  | |  |  |  |  |
| `HdrGeneralIncompletionStatus` |  | |  |  |  |  |
| `OvrlItmGeneralIncompletionSts` |  | |  |  |  |  |
| `OverallSDDocReferenceStatus` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_PricingElement` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@EndUserText.label: 'Debit Memo Request - TP'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   sapObjectNodeType:{
        name: 'DebitMemoRequest'
   },
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['DebitMemoRequest']
 }
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'SDH', 
  dataSources: ['DebitMemoRequest'],  
  quota: {
    maximumFields: 204,
    maximumBytes: 6800
  }  
} 
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define root view entity I_DebitMemoRequestTP 
  provider contract transactional_interface
  as projection on R_DebitMemoRequestTP as DebitMemoRequest
{
  key DebitMemoRequest.DebitMemoRequest,
  
      DebitMemoRequest.DebitMemoRequestType,
      DebitMemoRequest.DebitMemoRequestDate,
      DebitMemoRequest.ControllingArea,
      DebitMemoRequest.SoldToParty,
      DebitMemoRequest.CustomerName,
      DebitMemoRequest.SalesOrganization,
      DebitMemoRequest.DistributionChannel,
      DebitMemoRequest.OrganizationDivision,
      DebitMemoRequest.ReferenceDistributionChannel,
      DebitMemoRequest.SalesOffice,
      DebitMemoRequest.SalesGroup,
      DebitMemoRequest.SalesDistrict,
      DebitMemoRequest.PurchaseOrderByCustomer,
      DebitMemoRequest.CustomerPurchaseOrderType,
      DebitMemoRequest.CustomerPurchaseOrderDate,
      DebitMemoRequest.CustomerGroup,
      DebitMemoRequest.SDDocumentReason,
      DebitMemoRequest.PricingDate,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      DebitMemoRequest.TotalNetAmount,
      DebitMemoRequest.TransactionCurrency,
      DebitMemoRequest.HeaderBillingBlockReason,
      DebitMemoRequest.SDPricingProcedure,
      DebitMemoRequest.IncotermsClassification,
      DebitMemoRequest.IncotermsVersion,
      DebitMemoRequest.IncotermsLocation1,
      DebitMemoRequest.IncotermsLocation2,
      DebitMemoRequest.CustomerPaymentTerms,
      DebitMemoRequest.BillingCompanyCode,
      DebitMemoRequest.PaymentMethod,
      DebitMemoRequest.BillingDocumentDate,
      DebitMemoRequest.ServicesRenderedDate,
      DebitMemoRequest.ReferenceSDDocument,
      DebitMemoRequest.ReferenceSDDocumentCategory,
      DebitMemoRequest.CreatedByUser,
      @Consumption.hidden: true
      DebitMemoRequest.CreationDate,
      DebitMemoRequest.CreationTime,
      DebitMemoRequest.SalesDocumentCreationDateTime,
      DebitMemoRequest.LastChangedByUser,
      @Consumption.hidden: true
      DebitMemoRequest.LastChangeDateTime,
      DebitMemoRequest.DebitMemoReqApprovalReason,
      
      //Status
      DebitMemoRequest.SalesDocApprovalStatus,
      DebitMemoRequest.OverallBillingBlockStatus,
      DebitMemoRequest.OverallSDProcessStatus,
      DebitMemoRequest.OverallSDDocumentRejectionSts,
      DebitMemoRequest.OverallOrdReltdBillgStatus,
      DebitMemoRequest.TotalBlockStatus,
      DebitMemoRequest.HdrGeneralIncompletionStatus,
      DebitMemoRequest.OvrlItmGeneralIncompletionSts,
      DebitMemoRequest.OverallSDDocReferenceStatus,
      
      //Compositions
      _Item           : redirected to composition child I_DebitMemoRequestItemTP,
      _Partner        : redirected to composition child I_DebitMemoRequestPartnerTP,
      _Text           : redirected to composition child I_DebitMemoRequestTextTP,
      _PricingElement : redirected to composition child I_DebitMemoReqPrgElmTP 
}
```
