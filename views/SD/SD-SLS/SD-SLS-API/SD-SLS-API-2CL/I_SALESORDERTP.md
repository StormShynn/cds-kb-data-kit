---
name: I_SALESORDERTP
description: Sales OrderTP
app_component: SD-SLS-API-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-API
  - interface-view
  - transactional-processing
  - sales-order
  - component:SD-SLS-API-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDERTP

**Sales OrderTP**

| Property | Value |
|---|---|
| App Component | `SD-SLS-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesOrder` | `SalesOrder.SalesOrder` |
| `SalesOrderType` | `SalesOrder.SalesOrderType` |
| `SoldToParty` | `SalesOrder.SoldToParty` |
| `SalesOrganization` | `SalesOrder.SalesOrganization` |
| `DistributionChannel` | `SalesOrder.DistributionChannel` |
| `ReferenceDistributionChannel` | `SalesOrder.ReferenceDistributionChannel` |
| `OrganizationDivision` | `SalesOrder.OrganizationDivision` |
| `SalesOffice` | `SalesOrder.SalesOffice` |
| `SalesGroup` | `SalesOrder.SalesGroup` |
| `SalesDistrict` | `SalesOrder.SalesDistrict` |
| `PurchaseOrderByCustomer` | `SalesOrder.PurchaseOrderByCustomer` |
| `CustomerPurchaseOrderType` | `SalesOrder.CustomerPurchaseOrderType` |
| `CustomerPurchaseOrderDate` | `SalesOrder.CustomerPurchaseOrderDate` |
| `PurchaseOrderByShipToParty` | `SalesOrder.PurchaseOrderByShipToParty` |
| `CustomerGroup` | `SalesOrder.CustomerGroup` |
| `AdditionalCustomerGroup1` | `SalesOrder.AdditionalCustomerGroup1` |
| `AdditionalCustomerGroup2` | `SalesOrder.AdditionalCustomerGroup2` |
| `AdditionalCustomerGroup3` | `SalesOrder.AdditionalCustomerGroup3` |
| `AdditionalCustomerGroup4` | `SalesOrder.AdditionalCustomerGroup4` |
| `AdditionalCustomerGroup5` | `SalesOrder.AdditionalCustomerGroup5` |
| `SDDocumentReason` | `SalesOrder.SDDocumentReason` |
| `PricingDate` | `SalesOrder.PricingDate` |
| `ServicesRenderedDate` | `SalesOrder.ServicesRenderedDate` |
| `BillingDocumentDate` | `SalesOrder.BillingDocumentDate` |
| `SDPricingProcedure` | `SalesOrder.SDPricingProcedure` |
| `CustomerPriceGroup` | `SalesOrder.CustomerPriceGroup` |
| `PriceListType` | `SalesOrder.PriceListType` |
| `RequestedDeliveryDate` | `SalesOrder.RequestedDeliveryDate` |
| `DeliveryDateTypeRule` | `SalesOrder.DeliveryDateTypeRule` |
| `ShippingCondition` | `SalesOrder.ShippingCondition` |
| `CompleteDeliveryIsDefined` | `SalesOrder.CompleteDeliveryIsDefined` |
| `OrderCombinationIsAllowed` | `SalesOrder.OrderCombinationIsAllowed` |
| `SlsDocIsRlvtForProofOfDeliv` | `SalesOrder.SlsDocIsRlvtForProofOfDeliv` |
| `ShippingType` | `SalesOrder.ShippingType` |
| `ReceivingPoint` | `SalesOrder.ReceivingPoint` |
| `IncotermsClassification` | `SalesOrder.IncotermsClassification` |
| `IncotermsVersion` | `SalesOrder.IncotermsVersion` |
| `IncotermsLocation1` | `SalesOrder.IncotermsLocation1` |
| `IncotermsLocation2` | `SalesOrder.IncotermsLocation2` |
| `FixedValueDate` | `SalesOrder.FixedValueDate` |
| `TaxDepartureCountry` | `SalesOrder.TaxDepartureCountry` |
| `VATRegistrationCountry` | `SalesOrder.VATRegistrationCountry` |
| `HeaderBillingBlockReason` | `SalesOrder.HeaderBillingBlockReason` |
| `DeliveryBlockReason` | `SalesOrder.DeliveryBlockReason` |
| `SalesOrderApprovalReason` | `SalesOrder.SalesOrderApprovalReason` |
| `CustomerPaymentTerms` | `SalesOrder.CustomerPaymentTerms` |
| `BillingCompanyCode` | `SalesOrder.BillingCompanyCode` |
| `PaymentMethod` | `SalesOrder.PaymentMethod` |
| `CustomerAccountAssignmentGroup` | `SalesOrder.CustomerAccountAssignmentGroup` |
| `TransactionCurrency` | `SalesOrder.TransactionCurrency` |
| `AssignmentReference` | `SalesOrder.AssignmentReference` |
| `AccountingDocExternalReference` | `SalesOrder.AccountingDocExternalReference` |
| `TotalNetAmount` | `SalesOrder.TotalNetAmount` |
| `ReferenceSDDocument` | `SalesOrder.ReferenceSDDocument` |
| `CustomerCreditAccount` | `SalesOrder.CustomerCreditAccount` |
| `OverallSDProcessStatus` | `SalesOrder.OverallSDProcessStatus` |
| `OverallDeliveryBlockStatus` | `SalesOrder.OverallDeliveryBlockStatus` |
| `OverallBillingBlockStatus` | `SalesOrder.OverallBillingBlockStatus` |
| `OverallDeliveryStatus` | `SalesOrder.OverallDeliveryStatus` |
| `TotalCreditCheckStatus` | `SalesOrder.TotalCreditCheckStatus` |
| `OverallSDDocumentRejectionSts` | `SalesOrder.OverallSDDocumentRejectionSts` |
| `TotalBlockStatus` | `SalesOrder.TotalBlockStatus` |
| `HdrGeneralIncompletionStatus` | `SalesOrder.HdrGeneralIncompletionStatus` |
| `OvrlItmGeneralIncompletionSts` | `SalesOrder.OvrlItmGeneralIncompletionSts` |
| `OverallSDDocReferenceStatus` | `SalesOrder.OverallSDDocReferenceStatus` |
| `SalesDocApprovalStatus` | `SalesOrder.SalesDocApprovalStatus` |
| `OverallChmlCmplncStatus` | `SalesOrder.OverallChmlCmplncStatus` |
| `OverallDangerousGoodsStatus` | `SalesOrder.OverallDangerousGoodsStatus` |
| `OverallSafetyDataSheetStatus` | `SalesOrder.OverallSafetyDataSheetStatus` |
| `OverallTrdCmplncEmbargoSts` | `SalesOrder.OverallTrdCmplncEmbargoSts` |
| `OvrlTrdCmplncSnctndListChkSts` | `SalesOrder.OvrlTrdCmplncSnctndListChkSts` |
| `OvrlTrdCmplncLegalCtrlChkSts` | `SalesOrder.OvrlTrdCmplncLegalCtrlChkSts` |
| `SalesOrderDownPaymentStatus` | `SalesOrder.SalesOrderDownPaymentStatus` |
| `OverallOrdReltdBillgStatus` | `SalesOrder.OverallOrdReltdBillgStatus` |
| `BusinessSolutionOrder` | `SalesOrder.BusinessSolutionOrder` |
| `LastChangeDateTime` | `SalesOrder.LastChangeDateTime` |
| `SalesOrderDate` | `SalesOrder.SalesOrderDate` |
| `SalesOrderProcessingType` | `SalesOrder.SalesOrderProcessingType` |
| `ControllingArea` | `SalesOrder.ControllingArea` |
| `CreatedByUser` | `SalesOrder.CreatedByUser` |
| `CreationDate` | `SalesOrder.CreationDate` |
| `CreationTime` | `SalesOrder.CreationTime` |
| `SalesDocumentCreationDateTime` | `SalesOrder.SalesDocumentCreationDateTime` |
| `LastChangedByUser` | `SalesOrder.LastChangedByUser` |
| `LastChangeDate` | `SalesOrder.LastChangeDate` |
| `IsEUTriangularDeal` | `SalesOrder.IsEUTriangularDeal` |
| `ReferenceSDDocumentCategory` | `SalesOrder.ReferenceSDDocumentCategory` |
| `_Item` | *Association* |
| `_Partner` | *Association* |
| `_Text` | *Association* |
| `_PricingElement` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Sales Order - TP'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   sapObjectNodeType:{
      name: 'SalesOrder'},
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['SalesOrder']
 }
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'SDH', 
  dataSources: ['SalesOrder'],  
  quota: {
    maximumFields: 204,
    maximumBytes: 6800
  }  
} 
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

define root view entity I_SalesOrderTP
provider contract transactional_interface
  as projection on R_SalesOrderTP as SalesOrder  
{
  key SalesOrder.SalesOrder,

      SalesOrder.SalesOrderType,
      SalesOrder.SoldToParty,
      SalesOrder.SalesOrganization,
      SalesOrder.DistributionChannel,
      SalesOrder.ReferenceDistributionChannel,
      SalesOrder.OrganizationDivision,
      SalesOrder.SalesOffice,
      SalesOrder.SalesGroup,
      SalesOrder.SalesDistrict,
      SalesOrder.PurchaseOrderByCustomer,
      SalesOrder.CustomerPurchaseOrderType,
      SalesOrder.CustomerPurchaseOrderDate,
      SalesOrder.PurchaseOrderByShipToParty,
      SalesOrder.CustomerGroup,
      SalesOrder.AdditionalCustomerGroup1,
      SalesOrder.AdditionalCustomerGroup2,
      SalesOrder.AdditionalCustomerGroup3,
      SalesOrder.AdditionalCustomerGroup4,
      SalesOrder.AdditionalCustomerGroup5,
      SalesOrder.SDDocumentReason,
      SalesOrder.PricingDate,
      SalesOrder.ServicesRenderedDate,
      SalesOrder.BillingDocumentDate,
      SalesOrder.SDPricingProcedure,
      SalesOrder.CustomerPriceGroup,
      SalesOrder.PriceListType,
      SalesOrder.RequestedDeliveryDate,
      SalesOrder.DeliveryDateTypeRule,
      SalesOrder.ShippingCondition,
      SalesOrder.CompleteDeliveryIsDefined,
      SalesOrder.OrderCombinationIsAllowed,
      SalesOrder.SlsDocIsRlvtForProofOfDeliv,
      SalesOrder.ShippingType,
      SalesOrder.ReceivingPoint,
      SalesOrder.IncotermsClassification,
      SalesOrder.IncotermsVersion,
      SalesOrder.IncotermsLocation1,
      SalesOrder.IncotermsLocation2,
      SalesOrder.FixedValueDate, 
      SalesOrder.TaxDepartureCountry,
      SalesOrder.VATRegistrationCountry,     
      SalesOrder.HeaderBillingBlockReason,
      SalesOrder.DeliveryBlockReason,
      SalesOrder.SalesOrderApprovalReason,
      SalesOrder.CustomerPaymentTerms,
      SalesOrder.BillingCompanyCode,
      SalesOrder.PaymentMethod,
      SalesOrder.CustomerAccountAssignmentGroup,
      SalesOrder.TransactionCurrency,
      SalesOrder.AssignmentReference,
      SalesOrder.AccountingDocExternalReference,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesOrder.TotalNetAmount,

      SalesOrder.ReferenceSDDocument,
      SalesOrder.CustomerCreditAccount,
      SalesOrder.OverallSDProcessStatus,
      SalesOrder.OverallDeliveryBlockStatus,
      SalesOrder.OverallBillingBlockStatus,
      SalesOrder.OverallDeliveryStatus,
      SalesOrder.TotalCreditCheckStatus,
      SalesOrder.OverallSDDocumentRejectionSts,
      SalesOrder.TotalBlockStatus,
      SalesOrder.HdrGeneralIncompletionStatus,
      SalesOrder.OvrlItmGeneralIncompletionSts,
      SalesOrder.OverallSDDocReferenceStatus,
      SalesOrder.SalesDocApprovalStatus,
      SalesOrder.OverallChmlCmplncStatus,
      SalesOrder.OverallDangerousGoodsStatus,
      SalesOrder.OverallSafetyDataSheetStatus,
      SalesOrder.OverallTrdCmplncEmbargoSts,
      SalesOrder.OvrlTrdCmplncSnctndListChkSts,
      SalesOrder.OvrlTrdCmplncLegalCtrlChkSts,
      SalesOrder.SalesOrderDownPaymentStatus,
      SalesOrder.OverallOrdReltdBillgStatus,
      SalesOrder.BusinessSolutionOrder,
      SalesOrder.LastChangeDateTime,
      SalesOrder.SalesOrderDate,
      SalesOrder.SalesOrderProcessingType,
      SalesOrder.ControllingArea,
      SalesOrder.CreatedByUser,
      SalesOrder.CreationDate,
      SalesOrder.CreationTime,
      SalesOrder.SalesDocumentCreationDateTime,
      SalesOrder.LastChangedByUser,
      SalesOrder.LastChangeDate,
      SalesOrder.IsEUTriangularDeal,
      SalesOrder.ReferenceSDDocumentCategory,

      //Compositions
      _Item           : redirected to composition child I_SalesOrderItemTP,
      _Partner        : redirected to composition child I_SalesOrderPartnerTP,
      _Text           : redirected to composition child I_SalesOrderTextTP,
      _PricingElement : redirected to composition child I_SalesOrderPricingElementTP       
}
```
