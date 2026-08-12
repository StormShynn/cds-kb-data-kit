---
name: I_SALESORDER
description: "Sales Order"
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
# I_SALESORDER

**Sales Order**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrder` | ✓ | |  | `cast(SalesDocument as vdm_sales_order preserving type)` |  |  |
| `SalesOrderType` |  | |  | `cast( SalesDocumentType as sales_order_type preserving type )` |  |  |
| `SalesOrderProcessingType` |  | |  | `SalesDocumentProcessingType` |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `SenderBusinessSystemName` |  | |  |  |  |  |
| `ExternalDocumentID` |  | |  |  |  |  |
| `ExternalDocLastChangeDateTime` |  | |  |  |  |  |
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
| `SlsDocIsRlvtForProofOfDeliv` |  | |  |  |  |  |
| `CreditControlArea` |  | |  |  |  |  |
| `CustomerRebateAgreement` |  | |  |  |  |  |
| `SalesOrderDate` |  | |  | `SalesDocumentDate` |  |  |
| `ServicesRenderedDate` |  | |  |  |  |  |
| `SDDocumentReason` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `PurchaseOrderByShipToParty` |  | |  |  |  |  |
| `SDDocumentCollectiveNumber` |  | |  |  |  |  |
| `CustomerPurchaseOrderType` |  | |  |  |  |  |
| `CustomerPurchaseOrderDate` |  | |  |  |  |  |
| `CustomerPurchaseOrderSuplmnt` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `StatisticsCurrency` |  | |  |  |  |  |
| `ProductCatalog` |  | |  |  |  |  |
| `NextCreditCheckDate` |  | |  |  |  |  |
| `LastCustomerContactDate` |  | |  |  |  |  |
| `TotalNetAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `PricingDate` |  | |  |  |  |  |
| `PriceDetnExchangeRate` |  | |  |  |  |  |
| `RetailPromotion` |  | |  |  |  |  |
| `SalesOrderCondition` |  | |  | `SalesDocumentCondition` |  |  |
| `SDPricingProcedure` |  | |  |  |  |  |
| `CustomerPriceGroup` |  | |  |  |  |  |
| `PriceListType` |  | |  |  |  |  |
| `BillingPlan` |  | |  |  |  |  |
| `CustomerTaxClassification1` |  | |  |  |  |  |
| `CustomerTaxClassification2` |  | |  |  |  |  |
| `CustomerTaxClassification3` |  | |  |  |  |  |
| `CustomerTaxClassification4` |  | |  |  |  |  |
| `CustomerTaxClassification5` |  | |  |  |  |  |
| `CustomerTaxClassification6` |  | |  |  |  |  |
| `CustomerTaxClassification7` |  | |  |  |  |  |
| `CustomerTaxClassification8` |  | |  |  |  |  |
| `CustomerTaxClassification9` |  | |  |  |  |  |
| `TaxDepartureCountry` |  | |  |  |  |  |
| `VATRegistrationCountry` |  | |  |  |  |  |
| `RequestedDeliveryDate` |  | |  |  |  |  |
| `DeliveryDateTypeRule` |  | |  |  |  |  |
| `ShippingType` |  | |  |  |  |  |
| `ShippingCondition` |  | |  |  |  |  |
| `ReceivingPoint` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `CompleteDeliveryIsDefined` |  | |  |  |  |  |
| `OrderCombinationIsAllowed` |  | |  |  |  |  |
| `DeliveryBlockReason` |  | |  |  |  |  |
| `FashionCancelDate` |  | |  |  |  |  |
| `SalesOrderApprovalReason` |  | |  | `SalesDocApprovalReason` |  |  |
| `BillingDocumentDate` |  | |  |  |  |  |
| `BillingCompanyCode` |  | |  |  |  |  |
| `HeaderBillingBlockReason` |  | |  |  |  |  |
| `CustomerPaymentTerms` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `FixedValueDate` |  | |  |  |  |  |
| `FiscalYear` |  | |  |  |  |  |
| `FiscalPeriod` |  | |  |  |  |  |
| `ExchangeRateDate` |  | |  |  |  |  |
| `ExchangeRateType` |  | |  |  |  |  |
| `AccountingExchangeRate` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `CustomerAccountAssignmentGroup` |  | |  |  |  |  |
| `CostCenterBusinessArea` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `ControllingObject` |  | |  |  |  |  |
| `AssignmentReference` |  | |  |  |  |  |
| `PaymentPlan` |  | |  |  |  |  |
| `ContractAccount` |  | |  |  |  |  |
| `AdditionalValueDays` |  | |  |  |  |  |
| `CustomerCreditAccount` |  | |  |  |  |  |
| `ReferenceSDDocument` |  | |  |  |  |  |
| `ReferenceSDDocumentCategory` |  | |  |  |  |  |
| `CorrespncExternalReference` |  | |  |  |  |  |
| `CorrespncExtRefByShipToParty` |  | |  |  |  |  |
| `AccountingDocExternalReference` |  | |  |  |  |  |
| `EntProjTypeCustomerProject` |  | |  |  |  |  |
| `BusinessSolutionOrder` |  | |  |  |  |  |
| `SlsContrAutoAssgmtIDForSlsOrd` |  | |  |  |  |  |
| `OverallSDProcessStatus` |  | |  |  |  |  |
| `OverallPurchaseConfStatus` |  | |  |  |  |  |
| `OverallSDDocumentRejectionSts` |  | |  |  |  |  |
| `TotalBlockStatus` |  | |  |  |  |  |
| `OverallDelivConfStatus` |  | |  |  |  |  |
| `OverallTotalDeliveryStatus` |  | |  |  |  |  |
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
| `SalesOrderDownPaymentStatus` |  | |  | `ContractDownPaymentStatus` |  |  |
| `OmniChnlSalesPromotionStatus` |  | |  |  |  |  |
| `SlsDocOvrlSupplyBlockStatus` |  | |  |  |  |  |
| `AlternativePricingDate` |  | |  |  |  |  |
| `IsEUTriangularDeal` |  | |  |  |  |  |
| `_BusinessAreaText` | | ✓ | | | | |
| `_CostCenterBusinessAreaText` | | ✓ | | | | |
| `_CreditControlAreaText` | | ✓ | | | | |
| `_Item` | | ✓ | | | | |
| `_SalesOrderType` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_PricingElement` | | ✓ | | | | |
| `_BillingPlan` | | ✓ | | | | |
| `_SalesOrderApprovalReason` | | ✓ | | | | |
| `_PrecedingProcFlowDoc` | | ✓ | | | | |
| `_SubsequentProcFlowDoc` | | ✓ | | | | |
| `_StandardPartner` | | ✓ | | | | |
| `_SDPricingProcedure` | | ✓ | | | | |
| `_CustomerPriceGroup` | | ✓ | | | | |
| `_PriceListType` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_OrganizationDivision` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
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
| `_CustomerCreditAccount` | | ✓ | | | | |
| `_ReferenceSDDocumentCategory` | | ✓ | | | | |
| `_SolutionOrder` | | ✓ | | | | |
| `_OverallSDProcessStatus` | | ✓ | | | | |
| `_OverallPurchaseConfStatus` | | ✓ | | | | |
| `_OverallSDDocumentRejectionSts` | | ✓ | | | | |
| `_TotalBlockStatus` | | ✓ | | | | |
| `_OverallDelivConfStatus` | | ✓ | | | | |
| `_OverallTotalDeliveryStatus` | | ✓ | | | | |
| `_OverallDeliveryStatus` | | ✓ | | | | |
| `_OverallDeliveryBlockStatus` | | ✓ | | | | |
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
| `_OmniChnlSalesPromotionStatus` | | ✓ | | | | |
| `_DownPaymentStatus` | | ✓ | | | | |
| `_SlsDocOvrlSupplyBlockStatus` | | ✓ | | | | |
| `_EngagementProjectItem` | | ✓ | | | | |
| `_TaxDepartureCountry` | | ✓ | | | | |
| `_VATRegistrationCountry` | | ✓ | | | | |

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
