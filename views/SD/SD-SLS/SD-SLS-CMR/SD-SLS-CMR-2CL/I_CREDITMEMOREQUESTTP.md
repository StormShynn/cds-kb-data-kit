---
name: I_CREDITMEMOREQUESTTP
description: Creditmemorequesttp
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
  - credit
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# I_CREDITMEMOREQUESTTP

**Creditmemorequesttp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CreditMemoRequest` | `CreditMemoRequest.CreditMemoRequest` |
| `CreditMemoRequestType` | `CreditMemoRequest.CreditMemoRequestType` |
| `CreditMemoRequestDate` | `CreditMemoRequest.CreditMemoRequestDate` |
| `ControllingArea` | `CreditMemoRequest.ControllingArea` |
| `SoldToParty` | `CreditMemoRequest.SoldToParty` |
| `CustomerName` | `CreditMemoRequest.CustomerName` |
| `SalesOrganization` | `CreditMemoRequest.SalesOrganization` |
| `DistributionChannel` | `CreditMemoRequest.DistributionChannel` |
| `OrganizationDivision` | `CreditMemoRequest.OrganizationDivision` |
| `ReferenceDistributionChannel` | `CreditMemoRequest.ReferenceDistributionChannel` |
| `SalesOffice` | `CreditMemoRequest.SalesOffice` |
| `SalesGroup` | `CreditMemoRequest.SalesGroup` |
| `SalesDistrict` | `CreditMemoRequest.SalesDistrict` |
| `PurchaseOrderByCustomer` | `CreditMemoRequest.PurchaseOrderByCustomer` |
| `CustomerPurchaseOrderType` | `CreditMemoRequest.CustomerPurchaseOrderType` |
| `CustomerPurchaseOrderDate` | `CreditMemoRequest.CustomerPurchaseOrderDate` |
| `CustomerGroup` | `CreditMemoRequest.CustomerGroup` |
| `SDDocumentReason` | `CreditMemoRequest.SDDocumentReason` |
| `PricingDate` | `CreditMemoRequest.PricingDate` |
| `TotalNetAmount` | `CreditMemoRequest.TotalNetAmount` |
| `TransactionCurrency` | `CreditMemoRequest.TransactionCurrency` |
| `HeaderBillingBlockReason` | `CreditMemoRequest.HeaderBillingBlockReason` |
| `SDPricingProcedure` | `CreditMemoRequest.SDPricingProcedure` |
| `IncotermsClassification` | `CreditMemoRequest.IncotermsClassification` |
| `IncotermsVersion` | `CreditMemoRequest.IncotermsVersion` |
| `IncotermsLocation1` | `CreditMemoRequest.IncotermsLocation1` |
| `IncotermsLocation2` | `CreditMemoRequest.IncotermsLocation2` |
| `CustomerPaymentTerms` | `CreditMemoRequest.CustomerPaymentTerms` |
| `BillingCompanyCode` | `CreditMemoRequest.BillingCompanyCode` |
| `PaymentMethod` | `CreditMemoRequest.PaymentMethod` |
| `BillingDocumentDate` | `CreditMemoRequest.BillingDocumentDate` |
| `ServicesRenderedDate` | `CreditMemoRequest.ServicesRenderedDate` |
| `ReferenceSDDocument` | `CreditMemoRequest.ReferenceSDDocument` |
| `ReferenceSDDocumentCategory` | `CreditMemoRequest.ReferenceSDDocumentCategory` |
| `CreatedByUser` | `CreditMemoRequest.CreatedByUser` |
| `CreationDate` | `CreditMemoRequest.CreationDate` |
| `CreationTime` | `CreditMemoRequest.CreationTime` |
| `SalesDocumentCreationDateTime` | `CreditMemoRequest.SalesDocumentCreationDateTime` |
| `LastChangedByUser` | `CreditMemoRequest.LastChangedByUser` |
| `LastChangeDateTime` | `CreditMemoRequest.LastChangeDateTime` |
| `CreditMemoReqApprovalReason` | `CreditMemoRequest.CreditMemoReqApprovalReason` |
| `SalesDocApprovalStatus` | `CreditMemoRequest.SalesDocApprovalStatus` |
| `OverallBillingBlockStatus` | `CreditMemoRequest.OverallBillingBlockStatus` |
| `OverallSDProcessStatus` | `CreditMemoRequest.OverallSDProcessStatus` |
| `OverallSDDocumentRejectionSts` | `CreditMemoRequest.OverallSDDocumentRejectionSts` |
| `OverallOrdReltdBillgStatus` | `CreditMemoRequest.OverallOrdReltdBillgStatus` |
| `TotalBlockStatus` | `CreditMemoRequest.TotalBlockStatus` |
| `HdrGeneralIncompletionStatus` | `CreditMemoRequest.HdrGeneralIncompletionStatus` |
| `OvrlItmGeneralIncompletionSts` | `CreditMemoRequest.OvrlItmGeneralIncompletionSts` |
| `OverallSDDocReferenceStatus` | `CreditMemoRequest.OverallSDDocReferenceStatus` |
| `_Item` | *Association* |
| `_Partner` | *Association* |
| `_Text` | *Association* |
| `_PricingElement` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Credit Memo Request - TP'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  sapObjectNodeType:{
        name: 'CreditMemoRequest'
   },
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['CreditMemoRequest']
 }
 
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'SDH', 
  dataSources: ['CreditMemoRequest'],  
  quota: {
    maximumFields: 204,
    maximumBytes: 6800
  }  
}

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

define root view entity I_CreditMemoRequestTP
  provider contract transactional_interface
  as projection on R_CreditMemoRequestTP as CreditMemoRequest
{
  key CreditMemoRequest.CreditMemoRequest,  
  
      CreditMemoRequest.CreditMemoRequestType,
      CreditMemoRequest.CreditMemoRequestDate,
      CreditMemoRequest.ControllingArea,
      CreditMemoRequest.SoldToParty,
      CreditMemoRequest.CustomerName,
      CreditMemoRequest.SalesOrganization,
      CreditMemoRequest.DistributionChannel,
      CreditMemoRequest.OrganizationDivision,
      CreditMemoRequest.ReferenceDistributionChannel,
      CreditMemoRequest.SalesOffice,
      CreditMemoRequest.SalesGroup,
      CreditMemoRequest.SalesDistrict,
      
      CreditMemoRequest.PurchaseOrderByCustomer,
      CreditMemoRequest.CustomerPurchaseOrderType,
      CreditMemoRequest.CustomerPurchaseOrderDate,
      CreditMemoRequest.CustomerGroup,
      CreditMemoRequest.SDDocumentReason,
      CreditMemoRequest.PricingDate,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CreditMemoRequest.TotalNetAmount,
      CreditMemoRequest.TransactionCurrency,
      CreditMemoRequest.HeaderBillingBlockReason,
      CreditMemoRequest.SDPricingProcedure,
      CreditMemoRequest.IncotermsClassification,
      CreditMemoRequest.IncotermsVersion,
      CreditMemoRequest.IncotermsLocation1,
      CreditMemoRequest.IncotermsLocation2,
      CreditMemoRequest.CustomerPaymentTerms,
      CreditMemoRequest.BillingCompanyCode,
      CreditMemoRequest.PaymentMethod,
      CreditMemoRequest.BillingDocumentDate,
      CreditMemoRequest.ServicesRenderedDate,
      CreditMemoRequest.ReferenceSDDocument,
      CreditMemoRequest.ReferenceSDDocumentCategory,
      
      CreditMemoRequest.CreatedByUser,
      @Consumption.hidden: true
      CreditMemoRequest.CreationDate,
      CreditMemoRequest.CreationTime,
      CreditMemoRequest.SalesDocumentCreationDateTime,
      CreditMemoRequest.LastChangedByUser,
      @Consumption.hidden: true
      CreditMemoRequest.LastChangeDateTime,
      CreditMemoRequest.CreditMemoReqApprovalReason,
      
      //Status
      CreditMemoRequest.SalesDocApprovalStatus,
      CreditMemoRequest.OverallBillingBlockStatus,
      CreditMemoRequest.OverallSDProcessStatus,
      CreditMemoRequest.OverallSDDocumentRejectionSts,
      CreditMemoRequest.OverallOrdReltdBillgStatus,
      CreditMemoRequest.TotalBlockStatus,
      CreditMemoRequest.HdrGeneralIncompletionStatus,
      CreditMemoRequest.OvrlItmGeneralIncompletionSts,
      CreditMemoRequest.OverallSDDocReferenceStatus,
      
      //Compositions
      _Item    : redirected to composition child        I_CreditMemoRequestItemTP,
      _Partner    : redirected to composition child     I_CreditMemoRequestPartnerTP,
      _Text    : redirected to composition child        I_CreditMemoRequestTextTP,
      _PricingElement : redirected to composition child I_CrdtMemoReqPrcgElmntTP 
  
}
```
