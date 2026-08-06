---
name: I_DEBITMEMOREQUESTTP
description: Debitmemorequesttp
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

| Field | Data Source |
|---|---|
| key `DebitMemoRequest` | `DebitMemoRequest.DebitMemoRequest` |
| `DebitMemoRequestType` | `DebitMemoRequest.DebitMemoRequestType` |
| `DebitMemoRequestDate` | `DebitMemoRequest.DebitMemoRequestDate` |
| `ControllingArea` | `DebitMemoRequest.ControllingArea` |
| `SoldToParty` | `DebitMemoRequest.SoldToParty` |
| `CustomerName` | `DebitMemoRequest.CustomerName` |
| `SalesOrganization` | `DebitMemoRequest.SalesOrganization` |
| `DistributionChannel` | `DebitMemoRequest.DistributionChannel` |
| `OrganizationDivision` | `DebitMemoRequest.OrganizationDivision` |
| `ReferenceDistributionChannel` | `DebitMemoRequest.ReferenceDistributionChannel` |
| `SalesOffice` | `DebitMemoRequest.SalesOffice` |
| `SalesGroup` | `DebitMemoRequest.SalesGroup` |
| `SalesDistrict` | `DebitMemoRequest.SalesDistrict` |
| `PurchaseOrderByCustomer` | `DebitMemoRequest.PurchaseOrderByCustomer` |
| `CustomerPurchaseOrderType` | `DebitMemoRequest.CustomerPurchaseOrderType` |
| `CustomerPurchaseOrderDate` | `DebitMemoRequest.CustomerPurchaseOrderDate` |
| `CustomerGroup` | `DebitMemoRequest.CustomerGroup` |
| `SDDocumentReason` | `DebitMemoRequest.SDDocumentReason` |
| `PricingDate` | `DebitMemoRequest.PricingDate` |
| `TotalNetAmount` | `DebitMemoRequest.TotalNetAmount` |
| `TransactionCurrency` | `DebitMemoRequest.TransactionCurrency` |
| `HeaderBillingBlockReason` | `DebitMemoRequest.HeaderBillingBlockReason` |
| `SDPricingProcedure` | `DebitMemoRequest.SDPricingProcedure` |
| `IncotermsClassification` | `DebitMemoRequest.IncotermsClassification` |
| `IncotermsVersion` | `DebitMemoRequest.IncotermsVersion` |
| `IncotermsLocation1` | `DebitMemoRequest.IncotermsLocation1` |
| `IncotermsLocation2` | `DebitMemoRequest.IncotermsLocation2` |
| `CustomerPaymentTerms` | `DebitMemoRequest.CustomerPaymentTerms` |
| `BillingCompanyCode` | `DebitMemoRequest.BillingCompanyCode` |
| `PaymentMethod` | `DebitMemoRequest.PaymentMethod` |
| `BillingDocumentDate` | `DebitMemoRequest.BillingDocumentDate` |
| `ServicesRenderedDate` | `DebitMemoRequest.ServicesRenderedDate` |
| `ReferenceSDDocument` | `DebitMemoRequest.ReferenceSDDocument` |
| `ReferenceSDDocumentCategory` | `DebitMemoRequest.ReferenceSDDocumentCategory` |
| `CreatedByUser` | `DebitMemoRequest.CreatedByUser` |
| `CreationDate` | `DebitMemoRequest.CreationDate` |
| `CreationTime` | `DebitMemoRequest.CreationTime` |
| `SalesDocumentCreationDateTime` | `DebitMemoRequest.SalesDocumentCreationDateTime` |
| `LastChangedByUser` | `DebitMemoRequest.LastChangedByUser` |
| `LastChangeDateTime` | `DebitMemoRequest.LastChangeDateTime` |
| `DebitMemoReqApprovalReason` | `DebitMemoRequest.DebitMemoReqApprovalReason` |
| `SalesDocApprovalStatus` | `DebitMemoRequest.SalesDocApprovalStatus` |
| `OverallBillingBlockStatus` | `DebitMemoRequest.OverallBillingBlockStatus` |
| `OverallSDProcessStatus` | `DebitMemoRequest.OverallSDProcessStatus` |
| `OverallSDDocumentRejectionSts` | `DebitMemoRequest.OverallSDDocumentRejectionSts` |
| `OverallOrdReltdBillgStatus` | `DebitMemoRequest.OverallOrdReltdBillgStatus` |
| `TotalBlockStatus` | `DebitMemoRequest.TotalBlockStatus` |
| `HdrGeneralIncompletionStatus` | `DebitMemoRequest.HdrGeneralIncompletionStatus` |
| `OvrlItmGeneralIncompletionSts` | `DebitMemoRequest.OvrlItmGeneralIncompletionSts` |
| `OverallSDDocReferenceStatus` | `DebitMemoRequest.OverallSDDocReferenceStatus` |
| `_Item` | *Association* |
| `_Partner` | *Association* |
| `_Text` | *Association* |
| `_PricingElement` | *Association* |

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
