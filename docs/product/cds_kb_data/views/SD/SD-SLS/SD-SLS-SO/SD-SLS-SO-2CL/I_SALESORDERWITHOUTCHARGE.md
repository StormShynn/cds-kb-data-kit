---
name: I_SALESORDERWITHOUTCHARGE
description: "Sales OrderWITHOUTCHARGE"
app_component: SD-SLS-SO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_SALESORDERWITHOUTCHARGE

**Sales OrderWITHOUTCHARGE**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrderWithoutCharge` | ✓ | |  | `cast(SalesDocument as sales_order_without_charge preserving type)` |  |  |
| `SalesOrderWithoutChargeType` |  | |  | `cast( SalesDocumentType as sd_slsord_without_charge_type preserving type )` |  |  |
| `SalesOrderWthoutChrgProcgType` |  | |  | `SalesDocumentProcessingType` |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  | `cast(LastChangeDateTime as vdm_lastchangedon)` |  |  |
| `LastCustomerContactDate` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `AdditionalCustomerGroup1` |  | |  |  |  |  |
| `AdditionalCustomerGroup2` |  | |  |  |  |  |
| `AdditionalCustomerGroup3` |  | |  |  |  |  |
| `AdditionalCustomerGroup4` |  | |  |  |  |  |
| `AdditionalCustomerGroup5` |  | |  |  |  |  |
| `CreditControlArea` |  | |  |  |  |  |
| `CustomerRebateAgreement` |  | |  |  |  |  |
| `SalesOrderWithoutChargeDate` |  | |  | `SalesDocumentDate` |  |  |
| `ServicesRenderedDate` |  | |  |  |  |  |
| `SDDocumentReason` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `PurchaseOrderByShipToParty` |  | |  |  |  |  |
| `SDDocumentCollectiveNumber` |  | |  |  |  |  |
| `CustomerPurchaseOrderType` |  | |  |  |  |  |
| `CustomerPurchaseOrderDate` |  | |  |  |  |  |
| `CustomerPurchaseOrderSuplmnt` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `ProductCatalog` |  | |  |  |  |  |
| `SchedulingAgreementProfileCode` |  | |  |  |  |  |
| `AgrmtValdtyStartDate` |  | |  | `cast(AgrmtValdtyStartDate as sd_sowoc_valid_from)` |  |  |
| `AgrmtValdtyEndDate` |  | |  | `cast(AgrmtValdtyEndDate as sd_sowoc_valid_to)` |  |  |
| `TotalNetAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `StatisticsCurrency` |  | |  |  |  |  |
| `PricingDate` |  | |  |  |  |  |
| `RetailPromotion` |  | |  |  |  |  |
| `SalesOrderWthoutChrgCondition` |  | |  | `SalesDocumentCondition` |  |  |
| `SDPricingProcedure` |  | |  |  |  |  |
| `CustomerPriceGroup` |  | |  |  |  |  |
| `RequestedDeliveryDate` |  | |  |  |  |  |
| `ShippingType` |  | |  |  |  |  |
| `ShippingCondition` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `CompleteDeliveryIsDefined` |  | |  |  |  |  |
| `OrderCombinationIsAllowed` |  | |  |  |  |  |
| `DeliveryBlockReason` |  | |  |  |  |  |
| `DeliveryDateTypeRule` |  | |  |  |  |  |
| `SlsOrdWthoutChrgApprvlReason` |  | |  | `cast(SalesDocApprovalReason as sd_sowoc_approval_reason)` |  |  |
| `BillingDocumentDate` |  | |  |  |  |  |
| `BillingCompanyCode` |  | |  |  |  |  |
| `HeaderBillingBlockReason` |  | |  |  |  |  |
| `CustomerPaymentTerms` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `FixedValueDate` |  | |  |  |  |  |
| `AdditionalValueDays` |  | |  |  |  |  |
| `FiscalYear` |  | |  |  |  |  |
| `FiscalPeriod` |  | |  |  |  |  |
| `ExchangeRateDate` |  | |  |  |  |  |
| `ExchangeRateType` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `CustomerAccountAssignmentGroup` |  | |  |  |  |  |
| `CostCenterBusinessArea` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `ControllingObject` |  | |  |  |  |  |
| `ReferenceSDDocument` |  | |  |  |  |  |
| `AccountingDocExternalReference` |  | |  |  |  |  |
| `ReferenceSDDocumentCategory` |  | |  |  |  |  |
| `CorrespncExternalReference` |  | |  |  |  |  |
| `OverallSDProcessStatus` |  | |  |  |  |  |
| `OverallPurchaseConfStatus` |  | |  |  |  |  |
| `OverallSDDocumentRejectionSts` |  | |  |  |  |  |
| `TotalBlockStatus` |  | |  |  |  |  |
| `OverallDelivConfStatus` |  | |  |  |  |  |
| `OverallTotalDeliveryStatus` |  | |  |  |  |  |
| `SlsDocOvrlSupplyBlockStatus` |  | |  |  |  |  |
| `OverallDeliveryStatus` |  | |  |  |  |  |
| `OverallDeliveryBlockStatus` |  | |  |  |  |  |
| `OverallOrdReltdBillgStatus` |  | |  |  |  |  |
| `OverallBillingBlockStatus` |  | |  |  |  |  |
| `OverallTotalSDDocRefStatus` |  | |  |  |  |  |
| `OverallSDDocReferenceStatus` |  | |  |  |  |  |
| `TotalCreditCheckStatus` |  | |  |  |  |  |
| `MaxDocValueCreditCheckStatus` |  | |  |  |  |  |
| `PaymentTermCreditCheckStatus` |  | |  |  |  |  |
| `FinDocCreditCheckStatus` |  | |  |  |  |  |
| `ExprtInsurCreditCheckStatus` |  | |  |  |  |  |
| `PaytAuthsnCreditCheckSts` |  | |  |  |  |  |
| `CentralCreditCheckStatus` |  | |  |  |  |  |
| `CentralCreditChkTechErrSts` |  | |  |  |  |  |
| `HdrGeneralIncompletionStatus` |  | |  |  |  |  |
| `OverallPricingIncompletionSts` |  | |  |  |  |  |
| `HeaderDelivIncompletionStatus` |  | |  |  |  |  |
| `HeaderBillgIncompletionStatus` |  | |  |  |  |  |
| `OvrlItmGeneralIncompletionSts` |  | |  |  |  |  |
| `OvrlItmBillingIncompletionSts` |  | |  |  |  |  |
| `OvrlItmDelivIncompletionSts` |  | |  |  |  |  |
| `OverallChmlCmplncStatus` |  | |  |  |  |  |
| `OverallDangerousGoodsStatus` |  | |  |  |  |  |
| `OverallSafetyDataSheetStatus` |  | |  |  |  |  |
| `SalesDocApprovalStatus` |  | |  |  |  |  |
| `OverallTrdCmplncEmbargoSts` |  | |  |  |  |  |
| `OvrlTrdCmplncSnctndListChkSts` |  | |  |  |  |  |
| `OvrlTrdCmplncLegalCtrlChkSts` |  | |  |  |  |  |
| `_BusinessAreaText` | | ✓ | | | | |
| `_CostCenterBusinessAreaText` | | ✓ | | | | |
| `_CreditControlAreaText` | | ✓ | | | | |
| `_Item` | | ✓ | | | | |
| `_SalesOrderWithoutChargeType` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_PricingElement` | | ✓ | | | | |
| `_SlsOrdWthoutChrgApprvlReason` | | ✓ | | | | |
| `_StandardPartner` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_OrganizationDivision` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_SDPricingProcedure` | | ✓ | | | | |
| `_CustomerPriceGroup` | | ✓ | | | | |
| `_AdditionalCustomerGroup1` | | ✓ | | | | |
| `_AdditionalCustomerGroup2` | | ✓ | | | | |
| `_AdditionalCustomerGroup3` | | ✓ | | | | |
| `_AdditionalCustomerGroup4` | | ✓ | | | | |
| `_AdditionalCustomerGroup5` | | ✓ | | | | |
| `_CreditControlArea` | | ✓ | | | | |
| `_SDDocumentReason` | | ✓ | | | | |
| `_CustomerPurchaseOrderType` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_StatisticsCurrency` | | ✓ | | | | |
| `_ShippingType` | | ✓ | | | | |
| `_ShippingCondition` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_IncotermsVersion` | | ✓ | | | | |
| `_DeliveryBlockReason` | | ✓ | | | | |
| `_DeliveryDateTypeRule` | | ✓ | | | | |
| `_BillingCompanyCode` | | ✓ | | | | |
| `_HeaderBillingBlockReason` | | ✓ | | | | |
| `_CustomerPaymentTerms` | | ✓ | | | | |
| `_ExchangeRateType` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_CustomerAccountAssgmtGroup` | | ✓ | | | | |
| `_CostCenterBusinessArea` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_ControllingObject` | | ✓ | | | | |
| `_ReferenceSDDocumentCategory` | | ✓ | | | | |
| `_OverallSDProcessStatus` | | ✓ | | | | |
| `_OverallPurchaseConfStatus` | | ✓ | | | | |
| `_OverallSDDocumentRejectionSts` | | ✓ | | | | |
| `_TotalBlockStatus` | | ✓ | | | | |
| `_OverallDelivConfStatus` | | ✓ | | | | |
| `_OverallTotalDeliveryStatus` | | ✓ | | | | |
| `_OverallDeliveryStatus` | | ✓ | | | | |
| `_OverallDeliveryBlockStatus` | | ✓ | | | | |
| `_SlsDocOvrlSupplyBlockStatus` | | ✓ | | | | |
| `_OverallOrdReltdBillgStatus` | | ✓ | | | | |
| `_OverallBillingBlockStatus` | | ✓ | | | | |
| `_OverallTotalSDDocRefStatus` | | ✓ | | | | |
| `_OverallSDDocReferenceStatus` | | ✓ | | | | |
| `_TotalCreditCheckStatus` | | ✓ | | | | |
| `_MaxDocValueCreditCheckStatus` | | ✓ | | | | |
| `_PaymentTermCreditCheckStatus` | | ✓ | | | | |
| `_FinDocCreditCheckStatus` | | ✓ | | | | |
| `_ExprtInsurCreditCheckStatus` | | ✓ | | | | |
| `_PaytAuthsnCreditCheckSts` | | ✓ | | | | |
| `_CentralCreditCheckStatus` | | ✓ | | | | |
| `_CentralCreditChkTechErrSts` | | ✓ | | | | |
| `_HdrGeneralIncompletionStatus` | | ✓ | | | | |
| `_OverallPricingIncompletionSts` | | ✓ | | | | |
| `_HeaderDelivIncompletionStatus` | | ✓ | | | | |
| `_HeaderBillgIncompletionStatus` | | ✓ | | | | |
| `_OvrlItmGeneralIncompletionSts` | | ✓ | | | | |
| `_OvrlItmBillingIncompletionSts` | | ✓ | | | | |
| `_OvrlItmDelivIncompletionSts` | | ✓ | | | | |
| `_OverallChmlCmplncStatus` | | ✓ | | | | |
| `_OverallDangerousGoodsStatus` | | ✓ | | | | |
| `_OvrlSftyDataSheetSts` | | ✓ | | | | |
| `_SalesDocApprovalStatus` | | ✓ | | | | |
| `_OvrlTradeCmplncEmbargoStatus` | | ✓ | | | | |
| `_OvTrdCmplncSnctndListChkSts` | | ✓ | | | | |
| `_OvrlTrdCmplncLegalCtrlChkSts` | | ✓ | | | | |
| `_EngagementProjectItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_CostCenterBusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_CreditControlAreaText` | `I_CreditControlAreaText` | [0..*] |
| `_Item` | `I_SalesOrderWithoutChargeItem` | [0..*] |
| `_SalesOrderWithoutChargeType` | `I_SalesOrderWithoutChargeType` | [0..1] |
| `_Partner` | `I_SlsOrdWthoutChrgPartner` | [1..*] |
| `_PricingElement` | `I_SlsOrdWthoutChrgPrcgElmnt` | [0..*] |
| `_SlsOrdWthoutChrgApprvlReason` | `I_SlsOrdWthoutChrgApprvlReason` | [0..1] |
| `_Extension` | `E_SalesDocumentBasic` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sales Order Without Charge'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: [ '_CreatedByUser', '_LastChangedByUser'
//--[ GENERATED:012:E6ExH29r7jY4iqcxJjdFY0
,'_BusinessAreaText','_CostCenterBusinessAreaText','_CreditControlAreaText'
// ]--GENERATED
]
}
@AbapCatalog: {
  sqlViewName: 'ISDSOWTHOCHRG',
  compiler.compareFilter: true
}
@ObjectModel: {
   compositionRoot: true,
   representativeKey: 'SalesOrderWithoutCharge',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #XL
   },
   supportedCapabilities: [ #ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
}

@Metadata.allowExtensions: true
@ObjectModel.sapObjectNodeType.name: 'SalesOrderWithoutCharge'   
@Metadata.ignorePropagatedAnnotations: true

@Analytics: {
    dataCategory:#DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'vbak', role: #MAIN,
                    viewElement: ['SalesOrderWithoutCharge'],
                    tableElement: ['vbeln']  },
                    
                {   filter: [{operator: #EQ, tableElement: 'posnr', value: '000000'}],
                    table: 'vbkd', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['SalesOrderWithoutCharge'],
                    tableElement: ['vbeln']
                },   
                
                {   filter: [{operator: #EQ, tableElement: 'vposn', value: '000000'}],
                    table: 'veda', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['SalesOrderWithoutCharge'],
                    tableElement: ['vbeln']
                }              
            ]
        }
    }
 }

define view I_SalesOrderWithoutCharge
  as select from I_SalesDocument as SalesDocument

  //Associations

  //--[ GENERATED:012:E6ExH29r7jY4iqcxJjdFY0
  association [0..*] to I_BusinessAreaText            as _BusinessAreaText            on $projection.BusinessArea = _BusinessAreaText.BusinessArea
  association [0..*] to I_BusinessAreaText            as _CostCenterBusinessAreaText  on $projection.CostCenterBusinessArea = _CostCenterBusinessAreaText.BusinessArea
  association [0..*] to I_CreditControlAreaText       as _CreditControlAreaText       on $projection.CreditControlArea = _CreditControlAreaText.CreditControlArea
  // ]--GENERATED
  association [0..*] to I_SalesOrderWithoutChargeItem as _Item                        on $projection.SalesOrderWithoutCharge = _Item.SalesOrderWithoutCharge
  association [0..1] to I_SalesOrderWithoutChargeType as _SalesOrderWithoutChargeType on $projection.SalesOrderWithoutChargeType = _SalesOrderWithoutChargeType.SalesOrderWithoutChargeType
  association [1..*] to I_SlsOrdWthoutChrgPartner     as _Partner                     on $projection.SalesOrderWithoutCharge = _Partner.SalesOrderWithoutCharge
  association [0..*] to I_SlsOrdWthoutChrgPrcgElmnt   as _PricingElement              on $projection.SalesOrderWithoutCharge = _PricingElement.SalesOrderWithoutCharge     
  association [0..1] to I_SlsOrdWthoutChrgApprvlReason as _SlsOrdWthoutChrgApprvlReason on $projection.SlsOrdWthoutChrgApprvlReason = _SlsOrdWthoutChrgApprvlReason.SlsOrdWthoutChrgApprvlReason
  //Extensibility
  association [0..1] to E_SalesDocumentBasic          as _Extension                   on $projection.SalesOrderWithoutCharge = _Extension.SalesDocument

{
      // Key
  key cast(SalesDocument as sales_order_without_charge preserving type)           as SalesOrderWithoutCharge,

      //Category
      @ObjectModel.foreignKey.association: '_SalesOrderWithoutChargeType'
      cast( SalesDocumentType as sd_slsord_without_charge_type preserving type )  as SalesOrderWithoutChargeType,
      SalesDocumentProcessingType                                                 as SalesOrderWthoutChrgProcgType,

      //Admin
      CreatedByUser,
      LastChangedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      CreationTime,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      @Semantics.systemDateTime.lastChangedAt: true
      cast(LastChangeDateTime as vdm_lastchangedon)                               as LastChangeDateTime,
      LastCustomerContactDate,

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
      //--[ GENERATED:012:E6ExH29r7jY4iqcxJjdFY0
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
      //--[ GENERATED:012:E6ExH29r7jY4iqcxJjdFY0
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CreditControlAreaStdVH',
                     element: 'CreditControlArea' }
        }]
      @ObjectModel.text.association: '_CreditControlAreaText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_CreditControlArea'
      CreditControlArea,
      CustomerRebateAgreement,
      SalesDocumentDate                                                           as SalesOrderWithoutChargeDate,
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
      ProductCatalog,

      //SchedulingAgreement
      //@VDM.lifecycle.status: #DEPRECATED
      //@VDM.lifecycle.successor: 'DelivSchedTypeMRPRlvnceCode'
      SchedulingAgreementProfileCode,
      cast(AgrmtValdtyStartDate as sd_sowoc_valid_from)                           as AgrmtValdtyStartDate,
      cast(AgrmtValdtyEndDate as sd_sowoc_valid_to)                               as AgrmtValdtyEndDate,


      //Pricing
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      TotalNetAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      TransactionCurrency,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_StatisticsCurrency'
      StatisticsCurrency,
      PricingDate,
      RetailPromotion,
      SalesDocumentCondition                                                      as SalesOrderWthoutChrgCondition,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SDPricingProcedure'
      SDPricingProcedure, 
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CustomerPriceGroup'
      CustomerPriceGroup,                                                 

      //Shipping
      RequestedDeliveryDate,
      @ObjectModel.foreignKey.association: '_ShippingType'
      ShippingType,
      @ObjectModel.foreignKey.association: '_ShippingCondition'
      ShippingCondition,
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
      DeliveryDateTypeRule,

      //Approval Management
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SlsOrdWthoutChrgApprvlReason'
      cast(SalesDocApprovalReason as sd_sowoc_approval_reason)                    as SlsOrdWthoutChrgApprvlReason,

      //Billing
      BillingDocumentDate,
      //--[ GENERATED:012:E6ExH29r7jY4iqcxJjdFY0
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
      AdditionalValueDays,

      //Accounting
      FiscalYear,
      FiscalPeriod,
      ExchangeRateDate,
      @ObjectModel.foreignKey.association: '_ExchangeRateType'
      ExchangeRateType,
      //--[ GENERATED:012:E6ExH29r7jY4iqcxJjdFY0
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
      //--[ GENERATED:012:E6ExH29r7jY4iqcxJjdFY0
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_BusinessAreaStdVH',
                     element: 'BusinessArea' }
        }]
      @ObjectModel.text.association: '_CostCenterBusinessAreaText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_CostCenterBusinessArea'
      CostCenterBusinessArea,
      //Delete because I_costcenter view no catagory annotation @ObjectModel.foreignKey.association: '_CostCenter'
      CostCenter,
      //--[ GENERATED:012:E6ExH29r7jY4iqcxJjdFY0
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ControllingAreaStdVH',
                     element: 'ControllingArea' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,
      OrderID,
      //--[ GENERATED:012:E6ExH29r7jY4iqcxJjdFY0
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ControllingObjectStdVH',
                     element: 'ControllingObject' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ControllingObject'
      ControllingObject,

      //Reference
      ReferenceSDDocument,
      @Feature: 'FTGL_SD_SLS_ACCDOCEXTERNALREF'
      @Analytics.internalName: #LOCAL
      AccountingDocExternalReference,
      @ObjectModel.foreignKey.association: '_ReferenceSDDocumentCategory'
      ReferenceSDDocumentCategory,
      CorrespncExternalReference,

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
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SlsDocOvrlSupplyBlockStatus'
      SlsDocOvrlSupplyBlockStatus,
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
      @Analytics.internalName: #LOCAL
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
      

      //Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Item,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Partner,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _PricingElement,       
      _StandardPartner,
      _SalesOrderWithoutChargeType,
      _CreatedByUser,
      _LastChangedByUser,
      _SalesOrganization,
      _DistributionChannel,
      _OrganizationDivision,
      _SalesGroup,
      _SalesOffice,
      _SoldToParty,
      _CustomerGroup,
      _SDPricingProcedure,       
      _CustomerPriceGroup,    
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
      //_RetailPromotion, Pending in spec
      _ShippingType,
      _ShippingCondition,
      _IncotermsClassification,
      _IncotermsVersion,
      _DeliveryBlockReason,
      _DeliveryDateTypeRule,
      _SlsOrdWthoutChrgApprvlReason,
      _BillingCompanyCode,
      _HeaderBillingBlockReason,
      _CustomerPaymentTerms,
      //_PaymentMethod, Not in SD
      _ExchangeRateType,
      _BusinessArea,
      _CustomerAccountAssgmtGroup,
      _CostCenterBusinessArea,
      _CostCenter,
      _ControllingArea,
      _ControllingObject,
      //_ReferenceSDDocument, ? in spec 
      _ReferenceSDDocumentCategory,
      //Status   
      _OverallSDProcessStatus,
      _OverallPurchaseConfStatus,
      _OverallSDDocumentRejectionSts,
      _TotalBlockStatus,
      _OverallDelivConfStatus,
      _OverallTotalDeliveryStatus,
      _OverallDeliveryStatus,
      _OverallDeliveryBlockStatus,
      _SlsDocOvrlSupplyBlockStatus,
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
      _EngagementProjectItem,
      //--[ GENERATED:012:E6ExH29r7jY4iqcxJjdFY0
      @Consumption.hidden: true
      _BusinessAreaText,
      @Consumption.hidden: true
      _CostCenterBusinessAreaText,
      @Consumption.hidden: true
      _CreditControlAreaText
      // ]--GENERATED

}
where
  SalesDocument.SDDocumentCategory = 'I';
```
