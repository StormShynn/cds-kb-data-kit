---
name: I_SALESQUOTATION
description: Salesquotation
app_component: SD-SLS-QUT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-QUT
  - interface-view
  - sales-quotation
  - component:SD-SLS-QUT-2CL
  - lob:Sales & Distribution
---
# I_SALESQUOTATION

**Salesquotation**

| Property | Value |
|---|---|
| App Component | `SD-SLS-QUT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesQuotation` | ✓ | |  | `cast(SalesDocument as sales_quotation preserving type )` |  |  |
| `SalesQuotationType` |  | |  | `SalesDocumentType` |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
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
| `SalesQuotationDate` |  | |  | `SalesDocumentDate` |  |  |
| `ServicesRenderedDate` |  | |  |  |  |  |
| `SDDocumentReason` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `CustomerPurchaseOrderType` |  | |  |  |  |  |
| `CustomerPurchaseOrderDate` |  | |  |  |  |  |
| `CustomerPurchaseOrderSuplmnt` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `ProductCatalog` |  | |  |  |  |  |
| `BindingPeriodValidityStartDate` |  | |  |  |  |  |
| `BindingPeriodValidityEndDate` |  | |  |  |  |  |
| `HdrOrderProbabilityInPercent` |  | |  |  |  |  |
| `TotalNetAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `PricingDate` |  | |  |  |  |  |
| `RetailPromotion` |  | |  |  |  |  |
| `PriceDetnExchangeRate` |  | |  |  |  |  |
| `SalesQuotationCondition` |  | |  | `SalesDocumentCondition` |  |  |
| `SDPricingProcedure` |  | |  |  |  |  |
| `RequestedDeliveryDate` |  | |  |  |  |  |
| `ShippingType` |  | |  |  |  |  |
| `ShippingCondition` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `CustomerPriceGroup` |  | |  |  |  |  |
| `PriceListType` |  | |  |  |  |  |
| `CompleteDeliveryIsDefined` |  | |  |  |  |  |
| `DeliveryBlockReason` |  | |  |  |  |  |
| `SalesQuotationApprovalReason` |  | |  | `SalesDocApprovalReason` |  |  |
| `BillingDocumentDate` |  | |  |  |  |  |
| `BillingCompanyCode` |  | |  |  |  |  |
| `HeaderBillingBlockReason` |  | |  |  |  |  |
| `CustomerPaymentTerms` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `FixedValueDate` |  | |  |  |  |  |
| `AdditionalValueDays` |  | |  |  |  |  |
| `CustomerTaxClassification1` |  | |  |  |  |  |
| `CustomerTaxClassification2` |  | |  |  |  |  |
| `CustomerTaxClassification3` |  | |  |  |  |  |
| `CustomerTaxClassification4` |  | |  |  |  |  |
| `CustomerTaxClassification5` |  | |  |  |  |  |
| `CustomerTaxClassification6` |  | |  |  |  |  |
| `CustomerTaxClassification7` |  | |  |  |  |  |
| `CustomerTaxClassification8` |  | |  |  |  |  |
| `CustomerTaxClassification9` |  | |  |  |  |  |
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
| `CustomerCreditAccount` |  | |  |  |  |  |
| `ReferenceSDDocument` |  | |  |  |  |  |
| `ReferenceSDDocumentCategory` |  | |  |  |  |  |
| `OverallSDProcessStatus` |  | |  |  |  |  |
| `OverallSDDocumentRejectionSts` |  | |  |  |  |  |
| `TotalBlockStatus` |  | |  |  |  |  |
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
| `HeaderBillgIncompletionStatus` |  | |  |  |  |  |
| `OvrlItmGeneralIncompletionSts` |  | |  |  |  |  |
| `OvrlItmBillingIncompletionSts` |  | |  |  |  |  |
| `SalesDocApprovalStatus` |  | |  |  |  |  |
| `OverallChmlCmplncStatus` |  | |  |  |  |  |
| `OverallDangerousGoodsStatus` |  | |  |  |  |  |
| `OverallSafetyDataSheetStatus` |  | |  |  |  |  |
| `OverallTrdCmplncEmbargoSts` |  | |  |  |  |  |
| `_BusinessAreaText` | | ✓ | | | | |
| `_CostCenterBusinessAreaText` | | ✓ | | | | |
| `_CreditControlAreaText` | | ✓ | | | | |
| `_Item` | | ✓ | | | | |
| `_SalesQuotationType` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_PricingElement` | | ✓ | | | | |
| `_SalesQuotationApprovalReason` | | ✓ | | | | |
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
| `_ShippingType` | | ✓ | | | | |
| `_ShippingCondition` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_IncotermsVersion` | | ✓ | | | | |
| `_DeliveryBlockReason` | | ✓ | | | | |
| `_BillingCompanyCode` | | ✓ | | | | |
| `_HeaderBillingBlockReason` | | ✓ | | | | |
| `_CustomerPaymentTerms` | | ✓ | | | | |
| `_ExchangeRateType` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_CustomerAccountAssgmtGroup` | | ✓ | | | | |
| `_CostCenterBusinessArea` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_ReferenceSDDocumentCategory` | | ✓ | | | | |
| `_OverallSDProcessStatus` | | ✓ | | | | |
| `_OverallSDDocumentRejectionSts` | | ✓ | | | | |
| `_TotalBlockStatus` | | ✓ | | | | |
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
| `_HeaderBillgIncompletionStatus` | | ✓ | | | | |
| `_OvrlItmGeneralIncompletionSts` | | ✓ | | | | |
| `_OvrlItmBillingIncompletionSts` | | ✓ | | | | |
| `_OvrlTradeCmplncEmbargoStatus` | | ✓ | | | | |
| `_SalesDocApprovalStatus` | | ✓ | | | | |
| `_SDPricingProcedure` | | ✓ | | | | |
| `_CustomerPriceGroup` | | ✓ | | | | |
| `_OverallChmlCmplncStatus` | | ✓ | | | | |
| `_OverallDangerousGoodsStatus` | | ✓ | | | | |
| `_OvrlSftyDataSheetSts` | | ✓ | | | | |
| `_CustomerCreditAccount` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_CostCenterBusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_CreditControlAreaText` | `I_CreditControlAreaText` | [0..*] |
| `_Item` | `I_SalesQuotationItem` | [0..*] |
| `_SalesQuotationType` | `I_SalesQuotationType` | [0..1] |
| `_Partner` | `I_SalesQuotationPartner` | [1..*] |
| `_PricingElement` | `I_SalesQuotationPrcgElmnt` | [0..*] |
| `_SalesQuotationApprovalReason` | `I_SlsQtanApprovalReason` | [0..1] |
| `_Extension` | `E_SalesDocumentBasic` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sales Quotation'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: [ '_CreatedByUser', '_LastChangedByUser', '_BusinessAreaText','_CostCenterBusinessAreaText','_CreditControlAreaText']
}
@AbapCatalog: {
  preserveKey: true,
  sqlViewName: 'ISDSLSQTAN',
  compiler.compareFilter: true
}
@ObjectModel: {
  compositionRoot: true,
  representativeKey: 'SalesQuotation',
  usageType: {
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #B,
    sizeCategory:   #L
   },
   supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ],
   modelingPattern: [ #ANALYTICAL_DIMENSION ]  
}
 
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataCategory:#DIMENSION
@Metadata.allowExtensions:true
@ObjectModel.sapObjectNodeType.name: 'SalesQuotation'   

@Analytics: {
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'vbak', role: #MAIN,
                    viewElement: ['SalesQuotation'],
                    tableElement: ['vbeln']  },
                    
                {   filter: [{operator: #EQ, tableElement: 'posnr', value: '000000'}],
                    table: 'vbkd', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['SalesQuotation'],
                    tableElement: ['vbeln']
                },   
                
                {   filter: [{operator: #EQ, tableElement: 'vposn', value: '000000'}],
                    table: 'veda', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['SalesQuotation'],
                    tableElement: ['vbeln']
                }              
            ]
        }
    }
 }

define view I_SalesQuotation
  as select from I_SalesDocument as SalesDocument


  //--[ GENERATED:012:GFBfhxvv7jY4oziNhuJJl0
  association [0..*] to I_BusinessAreaText        as _BusinessAreaText             on $projection.BusinessArea = _BusinessAreaText.BusinessArea
  association [0..*] to I_BusinessAreaText        as _CostCenterBusinessAreaText   on $projection.CostCenterBusinessArea = _CostCenterBusinessAreaText.BusinessArea
  association [0..*] to I_CreditControlAreaText   as _CreditControlAreaText        on $projection.CreditControlArea = _CreditControlAreaText.CreditControlArea
  // ]--GENERATED
  association [0..*] to I_SalesQuotationItem      as _Item                         on $projection.SalesQuotation = _Item.SalesQuotation
  association [0..1] to I_SalesQuotationType      as _SalesQuotationType           on $projection.SalesQuotationType = _SalesQuotationType.SalesQuotationType
  association [1..*] to I_SalesQuotationPartner   as _Partner                      on $projection.SalesQuotation = _Partner.SalesQuotation
  association [0..*] to I_SalesQuotationPrcgElmnt as _PricingElement               on $projection.SalesQuotation = _PricingElement.SalesQuotation
  association [0..1] to I_SlsQtanApprovalReason   as _SalesQuotationApprovalReason on $projection.SalesQuotationApprovalReason = _SalesQuotationApprovalReason.SalesQuotationApprovalReason

  //Extensibility
  association [0..1] to E_SalesDocumentBasic      as _Extension                    on SalesDocument.SalesDocument = _Extension.SalesDocument

{
       //Key
  key  cast(SalesDocument as sales_quotation preserving type ) as  SalesQuotation,

       //Category    
       @ObjectModel.foreignKey.association: '_SalesQuotationType'
       SalesDocumentType                                       as  SalesQuotationType,

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
       //--[ GENERATED:012:GFBfhxvv7jY4oziNhuJJl0
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
       //--[ GENERATED:012:GFBfhxvv7jY4oziNhuJJl0
       @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_CreditControlAreaStdVH',
                      element: 'CreditControlArea' }
         }]
       @ObjectModel.text.association: '_CreditControlAreaText'
       // ]--GENERATED
       @ObjectModel.foreignKey.association: '_CreditControlArea'
       CreditControlArea,
       CustomerRebateAgreement,
       SalesDocumentDate                                       as  SalesQuotationDate,
       ServicesRenderedDate,
       @ObjectModel.foreignKey.association: '_SDDocumentReason'
       SDDocumentReason,
       PurchaseOrderByCustomer,
       @ObjectModel.foreignKey.association: '_CustomerPurchaseOrderType'
       CustomerPurchaseOrderType,
       CustomerPurchaseOrderDate,
       CustomerPurchaseOrderSuplmnt,
       @ObjectModel.foreignKey.association: '_SalesDistrict'
       SalesDistrict,
       ProductCatalog,

       //Quotation
       BindingPeriodValidityStartDate,
       BindingPeriodValidityEndDate,
       HdrOrderProbabilityInPercent,

       //Pricing
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'TransactionCurrency'
       TotalNetAmount,
       @Semantics.currencyCode: true
       @ObjectModel.foreignKey.association: '_TransactionCurrency'
       TransactionCurrency,
       PricingDate,
       RetailPromotion,
       PriceDetnExchangeRate,
       SalesDocumentCondition                                  as  SalesQuotationCondition,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_SDPricingProcedure'
       SDPricingProcedure,
      
       //Shipping
       RequestedDeliveryDate,
       @ObjectModel.foreignKey.association: '_ShippingType'
       ShippingType,
       @ObjectModel.foreignKey.association: '_ShippingCondition'
       ShippingCondition,
       @ObjectModel.foreignKey.association: '_IncotermsVersion'
       IncotermsVersion,
       @ObjectModel.foreignKey.association: '_IncotermsClassification'
       IncotermsClassification,
       IncotermsTransferLocation,
       IncotermsLocation1,
       IncotermsLocation2,
       @ObjectModel.foreignKey.association: '_CustomerPriceGroup'
       CustomerPriceGroup, 
       PriceListType,
       CompleteDeliveryIsDefined,
       @ObjectModel.foreignKey.association: '_DeliveryBlockReason'
       DeliveryBlockReason,

       //Approval Management
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_SalesQuotationApprovalReason'
       SalesDocApprovalReason                                  as  SalesQuotationApprovalReason,

       //Billing
       BillingDocumentDate,
       //--[ GENERATED:012:GFBfhxvv7jY4oziNhuJJl0
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
       
       //Tax Classfication
       CustomerTaxClassification1,
       CustomerTaxClassification2,
       CustomerTaxClassification3,
       CustomerTaxClassification4,
       CustomerTaxClassification5,
       CustomerTaxClassification6,
       CustomerTaxClassification7,
       CustomerTaxClassification8,
       CustomerTaxClassification9,
       
       //Accounting
       FiscalYear,
       FiscalPeriod,
       ExchangeRateDate,
       @ObjectModel.foreignKey.association: '_ExchangeRateType'
       ExchangeRateType,
       //--[ GENERATED:012:GFBfhxvv7jY4oziNhuJJl0
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
       //--[ GENERATED:012:GFBfhxvv7jY4oziNhuJJl0
       @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_BusinessAreaStdVH',
                      element: 'BusinessArea' }
         }]
       @ObjectModel.text.association: '_CostCenterBusinessAreaText'
       // ]--GENERATED
       @ObjectModel.foreignKey.association: '_CostCenterBusinessArea'
       CostCenterBusinessArea,
       CostCenter,
       @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ControllingAreaStdVH',
                     element: 'ControllingArea' }
        }]
       @ObjectModel.foreignKey.association: '_ControllingArea'
       ControllingArea,
       OrderID,
       
       //Credit Block
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_CustomerCreditAccount'
       CustomerCreditAccount,

       //Reference
       ReferenceSDDocument,
       @ObjectModel.foreignKey.association: '_ReferenceSDDocumentCategory'
       ReferenceSDDocumentCategory,

       //Status
       @ObjectModel.foreignKey.association: '_OverallSDProcessStatus'
       OverallSDProcessStatus,
       @ObjectModel.foreignKey.association: '_OverallSDDocumentRejectionSts'
       OverallSDDocumentRejectionSts,
       @ObjectModel.foreignKey.association: '_TotalBlockStatus'
       TotalBlockStatus,
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
       @ObjectModel.foreignKey.association: '_HeaderBillgIncompletionStatus'
       HeaderBillgIncompletionStatus,
       @ObjectModel.foreignKey.association: '_OvrlItmGeneralIncompletionSts'
       OvrlItmGeneralIncompletionSts,
       @ObjectModel.foreignKey.association: '_OvrlItmBillingIncompletionSts'
       OvrlItmBillingIncompletionSts,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_SalesDocApprovalStatus'
       SalesDocApprovalStatus,
       @ObjectModel.foreignKey.association: '_OverallChmlCmplncStatus'
       OverallChmlCmplncStatus,
       @ObjectModel.foreignKey.association: '_OverallDangerousGoodsStatus'
       OverallDangerousGoodsStatus,
       @ObjectModel.foreignKey.association: '_OvrlSftyDataSheetSts'
       OverallSafetyDataSheetStatus,
       @ObjectModel.foreignKey.association: '_OvrlTradeCmplncEmbargoStatus'
       OverallTrdCmplncEmbargoSts,
      
       //Associations
       @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
       _Item,
       @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
       _Partner,
       _StandardPartner,
       @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
       _PricingElement,
       _SalesQuotationType,
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
       _ShippingType,
       _ShippingCondition,
       _IncotermsClassification,
       _IncotermsVersion,
       _DeliveryBlockReason,
       _BillingCompanyCode,
       _HeaderBillingBlockReason,
       _SalesQuotationApprovalReason,
       _CustomerPaymentTerms,
       _ExchangeRateType,
       _BusinessArea,
       _CustomerAccountAssgmtGroup,
       _CostCenterBusinessArea,
       _CostCenter,
       _ControllingArea,
       _ReferenceSDDocumentCategory,
       _OverallSDProcessStatus,
       _OverallSDDocumentRejectionSts,
       _TotalBlockStatus,
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
       _HeaderBillgIncompletionStatus,
       _OvrlItmGeneralIncompletionSts,
       _OvrlItmBillingIncompletionSts,
       _OvrlTradeCmplncEmbargoStatus,
       _SalesDocApprovalStatus,
       _SDPricingProcedure,
       _CustomerPriceGroup,
       _OverallChmlCmplncStatus,
       _OverallDangerousGoodsStatus,
       _OvrlSftyDataSheetSts,
       //--[ GENERATED:012:GFBfhxvv7jY4oziNhuJJl0
       @Consumption.hidden: true
       _BusinessAreaText,
       @Consumption.hidden: true
       _CostCenterBusinessAreaText,
       @Consumption.hidden: true
       _CreditControlAreaText,
       _CustomerCreditAccount
       // ]--GENERATED


}
where
  SDDocumentCategory = 'B';
```
