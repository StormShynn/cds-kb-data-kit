---
name: I_CUSTOMERRETURNTP
description: "Customerreturntp"
app_component: SD-SLS-RE-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerReturn` | ✓ | |  |  |  |  |
| `CustomerReturnType` |  | |  |  |  |  |
| `CustomerReturnDate` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `CustomerPurchaseOrderType` |  | |  |  |  |  |
| `CustomerPurchaseOrderDate` |  | |  |  |  |  |
| `SDDocumentReason` |  | |  |  |  |  |
| `PricingDate` |  | |  |  |  |  |
| `RequestedDeliveryDate` |  | |  |  |  |  |
| `TotalNetAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `HeaderBillingBlockReason` |  | |  |  |  |  |
| `DeliveryBlockReason` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `CustomerPaymentTerms` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `CustomerReturnApprovalReason` |  | |  |  |  |  |
| `SalesDocApprovalStatus` |  | |  |  |  |  |
| `ReferenceSDDocument` |  | |  |  |  |  |
| `ReferenceSDDocumentCategory` |  | |  |  |  |  |
| `RetsMgmtProcess` |  | |  |  |  |  |
| `RetsMgmtLogProcgStatus` |  | |  |  |  |  |
| `RetsMgmtCompnProcgStatus` |  | |  |  |  |  |
| `RetsMgmtProcessingStatus` |  | |  |  |  |  |
| `OverallSDProcessStatus` |  | |  |  |  |  |
| `TotalCreditCheckStatus` |  | |  |  |  |  |
| `OverallSDDocumentRejectionSts` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_PricingElement` | | ✓ | | | | |

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
