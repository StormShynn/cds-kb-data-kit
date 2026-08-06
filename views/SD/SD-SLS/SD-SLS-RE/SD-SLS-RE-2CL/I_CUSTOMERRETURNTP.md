---
name: I_CUSTOMERRETURNTP
description: Customerreturntp
app_component: SD-SLS-RE-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-RE
  - interface-view
  - transactional-processing
  - customer
  - component:SD-SLS-RE-2CL
  - lob:Sales & Distribution
  - bo:Customer
---
# I_CUSTOMERRETURNTP

**Customerreturntp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-RE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CustomerReturn` | `CustomerReturn.CustomerReturn` |
| `CustomerReturnType` | `CustomerReturn.CustomerReturnType` |
| `CustomerReturnDate` | `CustomerReturn.CustomerReturnDate` |
| `SoldToParty` | `CustomerReturn.SoldToParty` |
| `SalesOrganization` | `CustomerReturn.SalesOrganization` |
| `DistributionChannel` | `CustomerReturn.DistributionChannel` |
| `OrganizationDivision` | `CustomerReturn.OrganizationDivision` |
| `SalesOffice` | `CustomerReturn.SalesOffice` |
| `SalesGroup` | `CustomerReturn.SalesGroup` |
| `SalesDistrict` | `CustomerReturn.SalesDistrict` |
| `CreatedByUser` | `CustomerReturn.CreatedByUser` |
| `CreationDate` | `CustomerReturn.CreationDate` |
| `LastChangeDate` | `CustomerReturn.LastChangeDate` |
| `LastChangeDateTime` | `CustomerReturn.LastChangeDateTime` |
| `PurchaseOrderByCustomer` | `CustomerReturn.PurchaseOrderByCustomer` |
| `CustomerPurchaseOrderType` | `CustomerReturn.CustomerPurchaseOrderType` |
| `CustomerPurchaseOrderDate` | `CustomerReturn.CustomerPurchaseOrderDate` |
| `SDDocumentReason` | `CustomerReturn.SDDocumentReason` |
| `PricingDate` | `CustomerReturn.PricingDate` |
| `RequestedDeliveryDate` | `CustomerReturn.RequestedDeliveryDate` |
| `TotalNetAmount` | `CustomerReturn.TotalNetAmount` |
| `TransactionCurrency` | `CustomerReturn.TransactionCurrency` |
| `HeaderBillingBlockReason` | `CustomerReturn.HeaderBillingBlockReason` |
| `DeliveryBlockReason` | `CustomerReturn.DeliveryBlockReason` |
| `IncotermsClassification` | `CustomerReturn.IncotermsClassification` |
| `IncotermsTransferLocation` | `CustomerReturn.IncotermsTransferLocation` |
| `IncotermsLocation1` | `CustomerReturn.IncotermsLocation1` |
| `IncotermsLocation2` | `CustomerReturn.IncotermsLocation2` |
| `IncotermsVersion` | `CustomerReturn.IncotermsVersion` |
| `CustomerPaymentTerms` | `CustomerReturn.CustomerPaymentTerms` |
| `PaymentMethod` | `CustomerReturn.PaymentMethod` |
| `CustomerReturnApprovalReason` | `CustomerReturn.CustomerReturnApprovalReason` |
| `SalesDocApprovalStatus` | `CustomerReturn.SalesDocApprovalStatus` |
| `ReferenceSDDocument` | `CustomerReturn.ReferenceSDDocument` |
| `ReferenceSDDocumentCategory` | `CustomerReturn.ReferenceSDDocumentCategory` |
| `RetsMgmtProcess` | `CustomerReturn.RetsMgmtProcess` |
| `RetsMgmtLogProcgStatus` | `CustomerReturn.RetsMgmtLogProcgStatus` |
| `RetsMgmtCompnProcgStatus` | `CustomerReturn.RetsMgmtCompnProcgStatus` |
| `RetsMgmtProcessingStatus` | `CustomerReturn.RetsMgmtProcessingStatus` |
| `OverallSDProcessStatus` | `CustomerReturn.OverallSDProcessStatus` |
| `TotalCreditCheckStatus` | `CustomerReturn.TotalCreditCheckStatus` |
| `OverallSDDocumentRejectionSts` | `CustomerReturn.OverallSDDocumentRejectionSts` |
| `_Item` | *Association* |
| `_Partner` | *Association* |
| `_Text` | *Association* |
| `_PricingElement` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Returns Order - TP'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   sapObjectNodeType:{
        name: 'CustomerReturn'
   },
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['CustomerReturn']
 }
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'SDH', 
  dataSources: ['CustomerReturn'],  
  quota: {
    maximumFields: 204,
    maximumBytes: 6800
  }  
} 
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

define root view entity I_CustomerReturnTP
  provider contract transactional_interface
  as projection on R_CustomerReturnTP as CustomerReturn  
{
  key CustomerReturn.CustomerReturn,

      CustomerReturn.CustomerReturnType,     
      CustomerReturn.CustomerReturnDate,     
      CustomerReturn.SoldToParty,
      CustomerReturn.SalesOrganization,
      CustomerReturn.DistributionChannel,
      CustomerReturn.OrganizationDivision,
      CustomerReturn.SalesOffice,
      CustomerReturn.SalesGroup,
      CustomerReturn.SalesDistrict,

      CustomerReturn.CreatedByUser,
      CustomerReturn.CreationDate,
      CustomerReturn.LastChangeDate,
      CustomerReturn.LastChangeDateTime,
      CustomerReturn.PurchaseOrderByCustomer,
      CustomerReturn.CustomerPurchaseOrderType,
      CustomerReturn.CustomerPurchaseOrderDate,
      CustomerReturn.SDDocumentReason,
      CustomerReturn.PricingDate,
      CustomerReturn.RequestedDeliveryDate,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CustomerReturn.TotalNetAmount,
      CustomerReturn.TransactionCurrency,
      CustomerReturn.HeaderBillingBlockReason,
      CustomerReturn.DeliveryBlockReason,
      CustomerReturn.IncotermsClassification,
      CustomerReturn.IncotermsTransferLocation,
      CustomerReturn.IncotermsLocation1,
      CustomerReturn.IncotermsLocation2,
      CustomerReturn.IncotermsVersion,
      CustomerReturn.CustomerPaymentTerms,
      CustomerReturn.PaymentMethod,
      CustomerReturn.CustomerReturnApprovalReason,
      CustomerReturn.SalesDocApprovalStatus,
      CustomerReturn.ReferenceSDDocument,
      CustomerReturn.ReferenceSDDocumentCategory,
      CustomerReturn.RetsMgmtProcess,
      CustomerReturn.RetsMgmtLogProcgStatus,
      CustomerReturn.RetsMgmtCompnProcgStatus,
      CustomerReturn.RetsMgmtProcessingStatus,
      
      //Status
      CustomerReturn.OverallSDProcessStatus,
      CustomerReturn.TotalCreditCheckStatus,
      CustomerReturn.OverallSDDocumentRejectionSts,

      //Compositions
      _Item           : redirected to composition child I_CustomerReturnItemTP,
      _Partner        : redirected to composition child I_CustomerReturnPartnerTP,
      _Text           : redirected to composition child I_CustomerReturnTextTP,
      _PricingElement : redirected to composition child I_CustRetPricingElementTP  
}
```
