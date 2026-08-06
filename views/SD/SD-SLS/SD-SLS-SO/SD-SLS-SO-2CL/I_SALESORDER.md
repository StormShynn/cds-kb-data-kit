---
name: I_SALESORDER
description: Sales Order
app_component: SD-SLS-SO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-SO
  - interface-view
  - sales-order
  - component:SD-SLS-SO-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDER

**Sales Order**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesOrder` | `cast(SalesDocument as vdm_sales_order preserving type)` |
| `SalesOrderType` | `cast( SalesDocumentType as sales_order_type preserving type )` |
| `SalesOrderProcessingType` | `SalesDocumentProcessingType` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangedByUser` | `LastChangedByUser` |
| `CreationDate` | `CreationDate` |
| `CreationTime` | `CreationTime` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `SenderBusinessSystemName` | `SenderBusinessSystemName` |
| `ExternalDocumentID` | `ExternalDocumentID` |
| `ExternalDocLastChangeDateTime` | `ExternalDocLastChangeDateTime` |
| `SalesOrganization` | `SalesOrganization` |
| `DistributionChannel` | `DistributionChannel` |
| `OrganizationDivision` | `OrganizationDivision` |
| `SalesGroup` | `SalesGroup` |
| `SalesOffice` | `SalesOffice` |
| `SoldToParty` | `SoldToParty` |
| `CustomerGroup` | `CustomerGroup` |
| `AdditionalCustomerGroup1` | `AdditionalCustomerGroup1` |
| `AdditionalCustomerGroup2` | `AdditionalCustomerGroup2` |
| `AdditionalCustomerGroup3` | `AdditionalCustomerGroup3` |
| `AdditionalCustomerGroup4` | `AdditionalCustomerGroup4` |
| `AdditionalCustomerGroup5` | `AdditionalCustomerGroup5` |
| `SlsDocIsRlvtForProofOfDeliv` | `SlsDocIsRlvtForProofOfDeliv` |
| `CreditControlArea` | `CreditControlArea` |
| `CustomerRebateAgreement` | `CustomerRebateAgreement` |
| `SalesOrderDate` | `SalesDocumentDate` |
| `ServicesRenderedDate` | `ServicesRenderedDate` |
| `SDDocumentReason` | `SDDocumentReason` |
| `PurchaseOrderByCustomer` | `PurchaseOrderByCustomer` |
| `PurchaseOrderByShipToParty` | `PurchaseOrderByShipToParty` |
| `SDDocumentCollectiveNumber` | `SDDocumentCollectiveNumber` |
| `CustomerPurchaseOrderType` | `CustomerPurchaseOrderType` |
| `CustomerPurchaseOrderDate` | `CustomerPurchaseOrderDate` |
| `CustomerPurchaseOrderSuplmnt` | `CustomerPurchaseOrderSuplmnt` |
| `SalesDistrict` | `SalesDistrict` |
| `StatisticsCurrency` | `StatisticsCurrency` |
| `ProductCatalog` | `ProductCatalog` |
| `NextCreditCheckDate` | `NextCreditCheckDate` |
| `LastCustomerContactDate` | `LastCustomerContactDate` |
| `TotalNetAmount` | `TotalNetAmount` |
| `TransactionCurrency` | `TransactionCurrency` |
| `PricingDate` | `PricingDate` |
| `PriceDetnExchangeRate` | `PriceDetnExchangeRate` |
| `RetailPromotion` | `RetailPromotion` |
| `SalesOrderCondition` | `SalesDocumentCondition` |
| `SDPricingProcedure` | `SDPricingProcedure` |
| `CustomerPriceGroup` | `CustomerPriceGroup` |
| `PriceListType` | `PriceListType` |
| `BillingPlan` | `BillingPlan` |
| `CustomerTaxClassification1` | `CustomerTaxClassification1` |
| `CustomerTaxClassification2` | `CustomerTaxClassification2` |
| `CustomerTaxClassification3` | `CustomerTaxClassification3` |
| `CustomerTaxClassification4` | `CustomerTaxClassification4` |
| `CustomerTaxClassification5` | `CustomerTaxClassification5` |
| `CustomerTaxClassification6` | `CustomerTaxClassification6` |
| `CustomerTaxClassification7` | `CustomerTaxClassification7` |
| `CustomerTaxClassification8` | `CustomerTaxClassification8` |
| `CustomerTaxClassification9` | `CustomerTaxClassification9` |
| `TaxDepartureCountry` | `TaxDepartureCountry` |
| `VATRegistrationCountry` | `VATRegistrationCountry` |
| `RequestedDeliveryDate` | `RequestedDeliveryDate` |
| `DeliveryDateTypeRule` | `DeliveryDateTypeRule` |
| `ShippingType` | `ShippingType` |
| `ShippingCondition` | `ShippingCondition` |
| `ReceivingPoint` | `ReceivingPoint` |
| `IncotermsClassification` | `IncotermsClassification` |
| `IncotermsTransferLocation` | `IncotermsTransferLocation` |
| `IncotermsLocation1` | `IncotermsLocation1` |
| `IncotermsLocation2` | `IncotermsLocation2` |
| `IncotermsVersion` | `IncotermsVersion` |
| `CompleteDeliveryIsDefined` | `CompleteDeliveryIsDefined` |
| `OrderCombinationIsAllowed` | `OrderCombinationIsAllowed` |
| `DeliveryBlockReason` | `DeliveryBlockReason` |
| `FashionCancelDate` | `FashionCancelDate` |
| `SalesOrderApprovalReason` | `SalesDocApprovalReason` |
| `BillingDocumentDate` | `BillingDocumentDate` |
| `BillingCompanyCode` | `BillingCompanyCode` |
| `HeaderBillingBlockReason` | `HeaderBillingBlockReason` |
| `CustomerPaymentTerms` | `CustomerPaymentTerms` |
| `PaymentMethod` | `PaymentMethod` |
| `FixedValueDate` | `FixedValueDate` |
| `FiscalYear` | `FiscalYear` |
| `FiscalPeriod` | `FiscalPeriod` |
| `ExchangeRateDate` | `ExchangeRateDate` |
| `ExchangeRateType` | `ExchangeRateType` |
| `AccountingExchangeRate` | `AccountingExchangeRate` |
| `BusinessArea` | `BusinessArea` |
| `CustomerAccountAssignmentGroup` | `CustomerAccountAssignmentGroup` |
| `CostCenterBusinessArea` | `CostCenterBusinessArea` |
| `CostCenter` | `CostCenter` |
| `ControllingArea` | `ControllingArea` |
| `OrderID` | `OrderID` |
| `ControllingObject` | `ControllingObject` |
| `AssignmentReference` | `AssignmentReference` |
| `PaymentPlan` | `PaymentPlan` |
| `ContractAccount` | `ContractAccount` |
| `AdditionalValueDays` | `AdditionalValueDays` |
| `CustomerCreditAccount` | `CustomerCreditAccount` |
| `ReferenceSDDocument` | `ReferenceSDDocument` |
| `ReferenceSDDocumentCategory` | `ReferenceSDDocumentCategory` |
| `CorrespncExternalReference` | `CorrespncExternalReference` |
| `CorrespncExtRefByShipToParty` | `CorrespncExtRefByShipToParty` |
| `AccountingDocExternalReference` | `AccountingDocExternalReference` |
| `EntProjTypeCustomerProject` | `EntProjTypeCustomerProject` |
| `BusinessSolutionOrder` | `BusinessSolutionOrder` |
| `SlsContrAutoAssgmtIDForSlsOrd` | `SlsContrAutoAssgmtIDForSlsOrd` |
| `OverallSDProcessStatus` | `OverallSDProcessStatus` |
| `OverallPurchaseConfStatus` | `OverallPurchaseConfStatus` |
| `OverallSDDocumentRejectionSts` | `OverallSDDocumentRejectionSts` |
| `TotalBlockStatus` | `TotalBlockStatus` |
| `OverallDelivConfStatus` | `OverallDelivConfStatus` |
| `OverallTotalDeliveryStatus` | `OverallTotalDeliveryStatus` |
| `OverallDeliveryStatus` | `OverallDeliveryStatus` |
| `OverallDeliveryBlockStatus` | `OverallDeliveryBlockStatus` |
| `OverallOrdReltdBillgStatus` | `OverallOrdReltdBillgStatus` |
| `OverallBillingBlockStatus` | `OverallBillingBlockStatus` |
| `OverallTotalSDDocRefStatus` | `OverallTotalSDDocRefStatus` |
| `OverallSDDocReferenceStatus` | `OverallSDDocReferenceStatus` |
| `TotalCreditCheckStatus` | `TotalCreditCheckStatus` |
| `MaxDocValueCreditCheckStatus` | `MaxDocValueCreditCheckStatus` |
| `PaymentTermCreditCheckStatus` | `PaymentTermCreditCheckStatus` |
| `FinDocCreditCheckStatus` | `FinDocCreditCheckStatus` |
| `ExprtInsurCreditCheckStatus` | `ExprtInsurCreditCheckStatus` |
| `PaytAuthsnCreditCheckSts` | `PaytAuthsnCreditCheckSts` |
| `CentralCreditCheckStatus` | `CentralCreditCheckStatus` |
| `CentralCreditChkTechErrSts` | `CentralCreditChkTechErrSts` |
| `HdrGeneralIncompletionStatus` | `HdrGeneralIncompletionStatus` |
| `OverallPricingIncompletionSts` | `OverallPricingIncompletionSts` |
| `HeaderDelivIncompletionStatus` | `HeaderDelivIncompletionStatus` |
| `HeaderBillgIncompletionStatus` | `HeaderBillgIncompletionStatus` |
| `OvrlItmGeneralIncompletionSts` | `OvrlItmGeneralIncompletionSts` |
| `OvrlItmBillingIncompletionSts` | `OvrlItmBillingIncompletionSts` |
| `OvrlItmDelivIncompletionSts` | `OvrlItmDelivIncompletionSts` |
| `OverallChmlCmplncStatus` | `OverallChmlCmplncStatus` |
| `OverallDangerousGoodsStatus` | `OverallDangerousGoodsStatus` |
| `OverallSafetyDataSheetStatus` | `OverallSafetyDataSheetStatus` |
| `SalesDocApprovalStatus` | `SalesDocApprovalStatus` |
| `OverallTrdCmplncEmbargoSts` | `OverallTrdCmplncEmbargoSts` |
| `OvrlTrdCmplncSnctndListChkSts` | `OvrlTrdCmplncSnctndListChkSts` |
| `OvrlTrdCmplncLegalCtrlChkSts` | `OvrlTrdCmplncLegalCtrlChkSts` |
| `SalesOrderDownPaymentStatus` | `ContractDownPaymentStatus` |
| `OmniChnlSalesPromotionStatus` | `OmniChnlSalesPromotionStatus` |
| `SlsDocOvrlSupplyBlockStatus` | `SlsDocOvrlSupplyBlockStatus` |
| `AlternativePricingDate` | `AlternativePricingDate` |
| `IsEUTriangularDeal` | `IsEUTriangularDeal` |
| `_BusinessAreaText` | *Association* |
| `_CostCenterBusinessAreaText` | *Association* |
| `_CreditControlAreaText` | *Association* |
| `_Item` | *Association* |
| `_SalesOrderType` | *Association* |
| `_Partner` | *Association* |
| `_PricingElement` | *Association* |
| `_BillingPlan` | *Association* |
| `_SalesOrderApprovalReason` | *Association* |
| `_PrecedingProcFlowDoc` | *Association* |
| `_SubsequentProcFlowDoc` | *Association* |
| `_StandardPartner` | *Association* |
| `_SDPricingProcedure` | *Association* |
| `_CustomerPriceGroup` | *Association* |
| `_PriceListType` | *Association* |
| `_CreatedByUser` | *Association* |
| `_LastChangedByUser` | *Association* |
| `_SalesOrganization` | *Association* |
| `_DistributionChannel` | *Association* |
| `_OrganizationDivision` | *Association* |
| `_SalesGroup` | *Association* |
| `_SalesOffice` | *Association* |
| `_SoldToParty` | *Association* |
| `_CustomerGroup` | *Association* |
| `_AdditionalCustomerGroup1` | *Association* |
| `_AdditionalCustomerGroup2` | *Association* |
| `_AdditionalCustomerGroup3` | *Association* |
| `_AdditionalCustomerGroup4` | *Association* |
| `_AdditionalCustomerGroup5` | *Association* |
| `_CreditControlArea` | *Association* |
| `_SDDocumentReason` | *Association* |
| `_CustomerPurchaseOrderType` | *Association* |
| `_SalesDistrict` | *Association* |
| `_TransactionCurrency` | *Association* |
| `_StatisticsCurrency` | *Association* |
| `_ShippingType` | *Association* |
| `_ShippingCondition` | *Association* |
| `_IncotermsClassification` | *Association* |
| `_IncotermsVersion` | *Association* |
| `_DeliveryBlockReason` | *Association* |
| `_DeliveryDateTypeRule` | *Association* |
| `_BillingCompanyCode` | *Association* |
| `_HeaderBillingBlockReason` | *Association* |
| `_CustomerPaymentTerms` | *Association* |
| `_ExchangeRateType` | *Association* |
| `_BusinessArea` | *Association* |
| `_CustomerAccountAssgmtGroup` | *Association* |
| `_CostCenterBusinessArea` | *Association* |
| `_CostCenter` | *Association* |
| `_ControllingArea` | *Association* |
| `_ControllingObject` | *Association* |
| `_CustomerCreditAccount` | *Association* |
| `_ReferenceSDDocumentCategory` | *Association* |
| `_SolutionOrder` | *Association* |
| `_OverallSDProcessStatus` | *Association* |
| `_OverallPurchaseConfStatus` | *Association* |
| `_OverallSDDocumentRejectionSts` | *Association* |
| `_TotalBlockStatus` | *Association* |
| `_OverallDelivConfStatus` | *Association* |
| `_OverallTotalDeliveryStatus` | *Association* |
| `_OverallDeliveryStatus` | *Association* |
| `_OverallDeliveryBlockStatus` | *Association* |
| `_OverallOrdReltdBillgStatus` | *Association* |
| `_OverallBillingBlockStatus` | *Association* |
| `_OverallTotalSDDocRefStatus` | *Association* |
| `_OverallSDDocReferenceStatus` | *Association* |
| `_TotalCreditCheckStatus` | *Association* |
| `_MaxDocValueCreditCheckStatus` | *Association* |
| `_PaymentTermCreditCheckStatus` | *Association* |
| `_FinDocCreditCheckStatus` | *Association* |
| `_ExprtInsurCreditCheckStatus` | *Association* |
| `_PaytAuthsnCreditCheckSts` | *Association* |
| `_CentralCreditCheckStatus` | *Association* |
| `_CentralCreditChkTechErrSts` | *Association* |
| `_HdrGeneralIncompletionStatus` | *Association* |
| `_OverallPricingIncompletionSts` | *Association* |
| `_HeaderDelivIncompletionStatus` | *Association* |
| `_HeaderBillgIncompletionStatus` | *Association* |
| `_OvrlItmGeneralIncompletionSts` | *Association* |
| `_OvrlItmBillingIncompletionSts` | *Association* |
| `_OvrlItmDelivIncompletionSts` | *Association* |
| `_OverallChmlCmplncStatus` | *Association* |
| `_OverallDangerousGoodsStatus` | *Association* |
| `_OvrlSftyDataSheetSts` | *Association* |
| `_SalesDocApprovalStatus` | *Association* |
| `_OvrlTradeCmplncEmbargoStatus` | *Association* |
| `_OvTrdCmplncSnctndListChkSts` | *Association* |
| `_OvrlTrdCmplncLegalCtrlChkSts` | *Association* |
| `_OmniChnlSalesPromotionStatus` | *Association* |
| `_DownPaymentStatus` | *Association* |
| `_SlsDocOvrlSupplyBlockStatus` | *Association* |
| `_EngagementProjectItem` | *Association* |
| `_TaxDepartureCountry` | *Association* |
| `_VATRegistrationCountry` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_CostCenterBusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_CreditControlAreaText` | `I_CreditControlAreaText` | [0..*] |
| `_Item` | `I_SalesOrderItem` | [0..*] |
| `_SalesOrderType` | `I_SalesOrderType` | [0..1] |
| `_Partner` | `I_SalesOrderPartner` | [1..*] |
| `_PricingElement` | `I_SalesOrderPricingElement` | [0..*] |
| `_BillingPlan` | `I_SalesOrderBillingPlan` | [0..1] |
| `_SalesOrderApprovalReason` | `I_SalesOrderApprovalReason` | [0..1] |
| `_PrecedingProcFlowDoc` | `I_SalesOrderPrecdgProcFlow` | [0..*] |
| `_SubsequentProcFlowDoc` | `I_SalesOrderSubsqntProcFlow` | [0..*] |
| `_Extension` | `E_SalesDocumentBasic` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sales Order'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: [ '_CreatedByUser', '_LastChangedByUser', '_BusinessAreaText','_CostCenterBusinessAreaText','_CreditControlAreaText'  ]
}
@AbapCatalog: {
  preserveKey: true,
  sqlViewName: 'ISDSALESORDER',
  compiler.compareFilter: true
}
@ObjectModel: {
   compositionRoot:   true,
   representativeKey: 'SalesOrder',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #L
   },
   supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ],
   modelingPattern: [ #ANALYTICAL_DIMENSION ]
}
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@ObjectModel.sapObjectNodeType.name: 'SalesOrder'

@Analytics: {
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'vbak', role: #MAIN,
                    viewElement: ['SalesOrder'],
                    tableElement: ['vbeln']  },

                {   filter: [{operator: #EQ, tableElement: 'posnr', value: '000000'}],
                    table: 'vbkd', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['SalesOrder'],
                    tableElement: ['vbeln']
                },

                {   filter: [{operator: #EQ, tableElement: 'vposn', value: '000000'}],
                    table: 'veda', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['SalesOrder'],
                    tableElement: ['vbeln']
                }
            ]
        }
    }
 }

define view I_SalesOrder
  as select from I_SalesDocument as SalesDocument
  //Associations

  //--[ GENERATED:012:E6ExH29r7kY4iE3VJ}6T4m
  association [0..*] to I_BusinessAreaText          as _BusinessAreaText           on  $projection.BusinessArea = _BusinessAreaText.BusinessArea
  association [0..*] to I_BusinessAreaText          as _CostCenterBusinessAreaText on  $projection.CostCenterBusinessArea = _CostCenterBusinessAreaText.BusinessArea
  association [0..*] to I_CreditControlAreaText     as _CreditControlAreaText      on  $projection.CreditControlArea = _CreditControlAreaText.CreditControlArea
  // ]--GENERATED
  association [0..*] to I_SalesOrderItem            as _Item                       on  $projection.SalesOrder = _Item.SalesOrder
  association [0..1] to I_SalesOrderType            as _SalesOrderType             on  $projection.SalesOrderType = _SalesOrderType.SalesOrderType
  association [1..*] to I_SalesOrderPartner         as _Partner                    on  $projection.SalesOrder = _Partner.SalesOrder
  association [0..*] to I_SalesOrderPricingElement  as _PricingElement             on  $projection.SalesOrder = _PricingElement.SalesOrder

  association [0..1] to I_SalesOrderBillingPlan     as _BillingPlan                on  $projection.SalesOrder  = _BillingPlan.SalesOrder
                                                                                   and $projection.BillingPlan = _BillingPlan.BillingPlan

  association [0..1] to I_SalesOrderApprovalReason  as _SalesOrderApprovalReason   on  $projection.SalesOrderApprovalReason = _SalesOrderApprovalReason.SalesOrderApprovalReason

  association [0..*] to I_SalesOrderPrecdgProcFlow  as _PrecedingProcFlowDoc       on  _PrecedingProcFlowDoc.SalesOrder = $projection.SalesOrder

  association [0..*] to I_SalesOrderSubsqntProcFlow as _SubsequentProcFlowDoc      on  _SubsequentProcFlowDoc.SalesOrder = $projection.SalesOrder

  //Extensibility
  association [0..1] to E_SalesDocumentBasic        as _Extension                  on  SalesDocument.SalesDocument = _Extension.SalesDocument

{
      //Key
  key cast(SalesDocument as vdm_sales_order preserving type)        as SalesOrder,

      //Category
      @ObjectModel.foreignKey.association: '_SalesOrderType'
      cast( SalesDocumentType as sales_order_type preserving type ) as SalesOrderType,
      SalesDocumentProcessingType                                   as SalesOrderProcessingType,

      //Admin
      CreatedByUser,
      LastChangedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      @Semantics.systemTime.createdAt: true
      CreationTime,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      SenderBusinessSystemName,
      ExternalDocumentID,
      ExternalDocLastChangeDateTime,

      // Organization
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      @ObjectModel.foreignKey.association: '_OrganizationDivision'
      OrganizationDivision,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesGroup,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,

      //Sales
      //--[ GENERATED:012:E6ExH29r7kY4iE3VJ}6T4m
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Customer_VH',
                     element: 'Customer' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_SoldToParty'
      SoldToParty,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      CustomerGroup,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup1'
      AdditionalCustomerGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup2'
      AdditionalCustomerGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup3'
      AdditionalCustomerGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup4'
      AdditionalCustomerGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup5'
      AdditionalCustomerGroup5,
      SlsDocIsRlvtForProofOfDeliv,
      //--[ GENERATED:012:E6ExH29r7kY4iE3VJ}6T4m
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CreditControlAreaStdVH',
                     element: 'CreditControlArea' }
        }]
      @ObjectModel.text.association: '_CreditControlAreaText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_CreditControlArea'
      CreditControlArea,
      CustomerRebateAgreement,
      SalesDocumentDate                                             as SalesOrderDate,
      ServicesRenderedDate,
      @ObjectModel.foreignKey.association: '_SDDocumentReason'
      SDDocumentReason,
      PurchaseOrderByCustomer,
      PurchaseOrderByShipToParty,
      SDDocumentCollectiveNumber,
      @ObjectModel.foreignKey.association: '_CustomerPurchaseOrderType'
      CustomerPurchaseOrderType,
      CustomerPurchaseOrderDate,
      CustomerPurchaseOrderSuplmnt,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      SalesDistrict,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_StatisticsCurrency'
      StatisticsCurrency,
      ProductCatalog,
      NextCreditCheckDate,
      LastCustomerContactDate,

      //Pricing
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      TotalNetAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      TransactionCurrency,
      PricingDate,
      PriceDetnExchangeRate,
      RetailPromotion,
      SalesDocumentCondition                                        as SalesOrderCondition,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SDPricingProcedure'
      SDPricingProcedure,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CustomerPriceGroup'
      CustomerPriceGroup,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PriceListType'
      PriceListType,

      BillingPlan,

      CustomerTaxClassification1,
      CustomerTaxClassification2,
      CustomerTaxClassification3,
      CustomerTaxClassification4,
      CustomerTaxClassification5,
      CustomerTaxClassification6,
      CustomerTaxClassification7,
      CustomerTaxClassification8,
      CustomerTaxClassification9,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_TaxDepartureCountry'
      TaxDepartureCountry,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_VATRegistrationCountry'
      VATRegistrationCountry,

      //Shipping
      RequestedDeliveryDate,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_DeliveryDateTypeRule'
      DeliveryDateTypeRule,
      @ObjectModel.foreignKey.association: '_ShippingType'
      ShippingType,
      @ObjectModel.foreignKey.association: '_ShippingCondition'
      ShippingCondition,
      ReceivingPoint,
      @ObjectModel.foreignKey.association: '_IncotermsClassification'
      IncotermsClassification,
      IncotermsTransferLocation,
      IncotermsLocation1,
      IncotermsLocation2,
      @ObjectModel.foreignKey.association: '_IncotermsVersion'
      IncotermsVersion,
      CompleteDeliveryIsDefined,
      OrderCombinationIsAllowed,
      @ObjectModel.foreignKey.association: '_DeliveryBlockReason'
      DeliveryBlockReason,

      //Fashion
      FashionCancelDate,

      //Approval Management
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SalesOrderApprovalReason'
      SalesDocApprovalReason                                        as SalesOrderApprovalReason,

      //Billing
      BillingDocumentDate,
      //--[ GENERATED:012:E6ExH29r7kY4iE3VJ}6T4m
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_BillingCompanyCode'
      BillingCompanyCode,
      @ObjectModel.foreignKey.association: '_HeaderBillingBlockReason'
      HeaderBillingBlockReason,

      //Payment
      @ObjectModel.foreignKey.association: '_CustomerPaymentTerms'
      CustomerPaymentTerms,
      PaymentMethod,
      FixedValueDate,

      //Accounting
      FiscalYear,
      FiscalPeriod,
      ExchangeRateDate,
      @ObjectModel.foreignKey.association: '_ExchangeRateType'
      ExchangeRateType,
      AccountingExchangeRate,
      //--[ GENERATED:012:E6ExH29r7kY4iE3VJ}6T4m
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_BusinessAreaStdVH',
                     element: 'BusinessArea' }
        }]
      @ObjectModel.text.association: '_BusinessAreaText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_BusinessArea'
      BusinessArea,
      @ObjectModel.foreignKey.association: '_CustomerAccountAssgmtGroup'
      CustomerAccountAssignmentGroup,
      //--[ GENERATED:012:E6ExH29r7kY4iE3VJ}6T4m
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_BusinessAreaStdVH',
                     element: 'BusinessArea' }
        }]
      @ObjectModel.text.association: '_CostCenterBusinessAreaText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_CostCenterBusinessArea'
      CostCenterBusinessArea,
      CostCenter,
      //--[ GENERATED:012:E6ExH29r7kY4iE3VJ}6T4m
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ControllingAreaStdVH',
                     element: 'ControllingArea' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,
      OrderID,
      //--[ GENERATED:012:E6ExH29r7kY4iE3VJ}6T4m
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ControllingObjectStdVH',
                     element: 'ControllingObject' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ControllingObject'
      ControllingObject,
      AssignmentReference,
      PaymentPlan,
      ContractAccount,
      AdditionalValueDays,

      //Credit Block
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CustomerCreditAccount'
      CustomerCreditAccount,

      //Reference
      ReferenceSDDocument,
      @ObjectModel.foreignKey.association: '_ReferenceSDDocumentCategory'
      ReferenceSDDocumentCategory,
      CorrespncExternalReference,
      CorrespncExtRefByShipToParty,
      @Analytics.internalName: #LOCAL
      AccountingDocExternalReference,
      EntProjTypeCustomerProject,
      @Analytics.internalName: #LOCAL
      @Consumption.valueHelpDefinition: [
       { entity:  { name:    'I_BusinessSolutionOrderStdVH',
                    element: 'BusinessSolutionOrder' }
       }]
      @ObjectModel.foreignKey.association: '_SolutionOrder'
      BusinessSolutionOrder,

      SlsContrAutoAssgmtIDForSlsOrd,

      //Status
      @ObjectModel.foreignKey.association: '_OverallSDProcessStatus'
      OverallSDProcessStatus,
      @ObjectModel.foreignKey.association: '_OverallPurchaseConfStatus'
      OverallPurchaseConfStatus,
      @ObjectModel.foreignKey.association: '_OverallSDDocumentRejectionSts'
      OverallSDDocumentRejectionSts,
      @ObjectModel.foreignKey.association: '_TotalBlockStatus'
      TotalBlockStatus,
      @ObjectModel.foreignKey.association: '_OverallDelivConfStatus'
      OverallDelivConfStatus,
      @ObjectModel.foreignKey.association: '_OverallTotalDeliveryStatus'
      OverallTotalDeliveryStatus,
      @ObjectModel.foreignKey.association: '_OverallDeliveryStatus'
      OverallDeliveryStatus,
      @ObjectModel.foreignKey.association: '_OverallDeliveryBlockStatus'
      OverallDeliveryBlockStatus,
      @ObjectModel.foreignKey.association: '_OverallOrdReltdBillgStatus'
      OverallOrdReltdBillgStatus,
      @ObjectModel.foreignKey.association: '_OverallBillingBlockStatus'
      OverallBillingBlockStatus,
      @ObjectModel.foreignKey.association: '_OverallTotalSDDocRefStatus'
      OverallTotalSDDocRefStatus,
      @ObjectModel.foreignKey.association: '_OverallSDDocReferenceStatus'
      OverallSDDocReferenceStatus,
      @ObjectModel.foreignKey.association: '_TotalCreditCheckStatus'
      TotalCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_MaxDocValueCreditCheckStatus'
      MaxDocValueCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_PaymentTermCreditCheckStatus'
      PaymentTermCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_FinDocCreditCheckStatus'
      FinDocCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_ExprtInsurCreditCheckStatus'
      ExprtInsurCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_PaytAuthsnCreditCheckSts'
      PaytAuthsnCreditCheckSts,
      @ObjectModel.foreignKey.association: '_CentralCreditCheckStatus'
      CentralCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_CentralCreditChkTechErrSts'
      CentralCreditChkTechErrSts,
      @ObjectModel.foreignKey.association: '_HdrGeneralIncompletionStatus'
      HdrGeneralIncompletionStatus,
      @ObjectModel.foreignKey.association: '_OverallPricingIncompletionSts'
      OverallPricingIncompletionSts,
      @ObjectModel.foreignKey.association: '_HeaderDelivIncompletionStatus'
      HeaderDelivIncompletionStatus,
      @ObjectModel.foreignKey.association: '_HeaderBillgIncompletionStatus'
      HeaderBillgIncompletionStatus,
      @ObjectModel.foreignKey.association: '_OvrlItmGeneralIncompletionSts'
      OvrlItmGeneralIncompletionSts,
      @ObjectModel.foreignKey.association: '_OvrlItmBillingIncompletionSts'
      OvrlItmBillingIncompletionSts,
      @ObjectModel.foreignKey.association: '_OvrlItmDelivIncompletionSts'
      OvrlItmDelivIncompletionSts,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_OverallChmlCmplncStatus'
      OverallChmlCmplncStatus,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_OverallDangerousGoodsStatus'
      OverallDangerousGoodsStatus,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_OvrlSftyDataSheetSts'
      OverallSafetyDataSheetStatus,
      @ObjectModel.foreignKey.association: '_SalesDocApprovalStatus'
      SalesDocApprovalStatus,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_OvrlTradeCmplncEmbargoStatus'
      OverallTrdCmplncEmbargoSts,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_OvTrdCmplncSnctndListChkSts'
      OvrlTrdCmplncSnctndListChkSts,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_OvrlTrdCmplncLegalCtrlChkSts'
      OvrlTrdCmplncLegalCtrlChkSts,
      @ObjectModel.foreignKey.association: '_DownPaymentStatus'
      ContractDownPaymentStatus                                     as SalesOrderDownPaymentStatus,
      @API.element.releaseState: #DEPRECATED
      @ObjectModel.foreignKey.association: '_OmniChnlSalesPromotionStatus'
      OmniChnlSalesPromotionStatus,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SlsDocOvrlSupplyBlockStatus'
      SlsDocOvrlSupplyBlockStatus,
      @API.element.releaseState: #DEPRECATED
      AlternativePricingDate,
      IsEUTriangularDeal,

      //Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Item,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Partner,
      _StandardPartner,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _PricingElement,
      _BillingPlan,
      _SDPricingProcedure,
      _CustomerPriceGroup,
      _PriceListType,
      _SalesOrderType,
      _CreatedByUser,
      _LastChangedByUser,
      _SalesOrganization,
      _DistributionChannel,
      _OrganizationDivision,
      _SalesGroup,
      _SalesOffice,
      _SoldToParty,
      _CustomerGroup,
      _AdditionalCustomerGroup1,
      _AdditionalCustomerGroup2,
      _AdditionalCustomerGroup3,
      _AdditionalCustomerGroup4,
      _AdditionalCustomerGroup5,
      _CreditControlArea,
      _SDDocumentReason,
      _CustomerPurchaseOrderType,
      _SalesDistrict,
      _TransactionCurrency,
      _StatisticsCurrency,
      _ShippingType,
      _ShippingCondition,
      _IncotermsClassification,
      _IncotermsVersion,
      _DeliveryBlockReason,
      _DeliveryDateTypeRule,
      _BillingCompanyCode,
      _HeaderBillingBlockReason,
      _SalesOrderApprovalReason,
      _CustomerPaymentTerms,
      _ExchangeRateType,
      _BusinessArea,
      _CustomerAccountAssgmtGroup,
      _CostCenterBusinessArea,
      _CostCenter,
      _ControllingArea,
      _ControllingObject,
      _CustomerCreditAccount,
      _ReferenceSDDocumentCategory,
      _SolutionOrder,
      //Status
      _OverallSDProcessStatus,
      _OverallPurchaseConfStatus,
      _OverallSDDocumentRejectionSts,
      _TotalBlockStatus,
      _OverallDelivConfStatus,
      _OverallTotalDeliveryStatus,
      _OverallDeliveryStatus,
      _OverallDeliveryBlockStatus,
      _OverallOrdReltdBillgStatus,
      _OverallBillingBlockStatus,
      _OverallTotalSDDocRefStatus,
      _OverallSDDocReferenceStatus,
      _TotalCreditCheckStatus,
      _MaxDocValueCreditCheckStatus,
      _PaymentTermCreditCheckStatus,
      _FinDocCreditCheckStatus,
      _ExprtInsurCreditCheckStatus,
      _PaytAuthsnCreditCheckSts,
      _CentralCreditCheckStatus,
      _CentralCreditChkTechErrSts,
      _HdrGeneralIncompletionStatus,
      _OverallPricingIncompletionSts,
      _HeaderDelivIncompletionStatus,
      _HeaderBillgIncompletionStatus,
      _OvrlItmGeneralIncompletionSts,
      _OvrlItmBillingIncompletionSts,
      _OvrlItmDelivIncompletionSts,
      _OverallChmlCmplncStatus,
      _OverallDangerousGoodsStatus,
      _OvrlSftyDataSheetSts,
      _SalesDocApprovalStatus,
      _OvrlTradeCmplncEmbargoStatus,
      _OvTrdCmplncSnctndListChkSts,
      _OvrlTrdCmplncLegalCtrlChkSts,
      @API.element.releaseState: #DEPRECATED
      _OmniChnlSalesPromotionStatus,
      _DownPaymentStatus,
      _SlsDocOvrlSupplyBlockStatus,
      _EngagementProjectItem,
      //--[ GENERATED:012:E6ExH29r7kY4iE3VJ}6T4m
      @Consumption.hidden: true
      _BusinessAreaText,
      @Consumption.hidden: true
      _CostCenterBusinessAreaText,
      @Consumption.hidden: true
      _CreditControlAreaText,
      // ]--GENERATED
      _TaxDepartureCountry,
      _VATRegistrationCountry,
      _PrecedingProcFlowDoc,
      _SubsequentProcFlowDoc
}
where
  SalesDocument.SDDocumentCategory = 'C';
```
