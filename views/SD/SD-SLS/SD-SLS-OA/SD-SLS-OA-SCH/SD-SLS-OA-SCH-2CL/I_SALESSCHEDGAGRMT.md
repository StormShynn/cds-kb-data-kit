---
name: I_SALESSCHEDGAGRMT
description: Salesschedgagrmt
app_component: SD-SLS-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - component:SD-SLS-OA-SCH-2CL
  - lob:Sales & Distribution
---
# I_SALESSCHEDGAGRMT

**Salesschedgagrmt**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesSchedulingAgreement` | `cast(SalesDocument as vdm_sales_schedg_agrmt preserving type)` |
| `SDDocumentCategory` | `SDDocumentCategory` |
| `SalesSchedgAgrmtType` | `cast(SalesDocumentType as vdm_sales_schedg_agrmt_type preserving type)` |
| `SalesSchedgAgrmtProcessingType` | `SalesDocumentProcessingType` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangedByUser` | `LastChangedByUser` |
| `CreationDate` | `CreationDate` |
| `CreationTime` | `CreationTime` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `SalesOrganization` | `SalesOrganization` |
| `DistributionChannel` | `DistributionChannel` |
| `OrganizationDivision` | `OrganizationDivision` |
| `SalesGroup` | `SalesGroup` |
| `SalesOffice` | `SalesOffice` |
| `SoldToParty` | `cast( SoldToParty as sd_schedg_agrmt_sold_to_party preserving type )` |
| `CustomerGroup` | `CustomerGroup` |
| `AdditionalCustomerGroup1` | `AdditionalCustomerGroup1` |
| `AdditionalCustomerGroup2` | `AdditionalCustomerGroup2` |
| `AdditionalCustomerGroup3` | `AdditionalCustomerGroup3` |
| `AdditionalCustomerGroup4` | `AdditionalCustomerGroup4` |
| `AdditionalCustomerGroup5` | `AdditionalCustomerGroup5` |
| `SalesSchedgAgrmtDate` | `SalesDocumentDate` |
| `SDDocumentReason` | `SDDocumentReason` |
| `PurchaseOrderByCustomer` | `PurchaseOrderByCustomer` |
| `CustomerPurchaseOrderType` | `CustomerPurchaseOrderType` |
| `CustomerPurchaseOrderDate` | `CustomerPurchaseOrderDate` |
| `CustomerPurchaseOrderSuplmnt` | `CustomerPurchaseOrderSuplmnt` |
| `SalesDistrict` | `SalesDistrict` |
| `TotalNetAmount` | `TotalNetAmount` |
| `TransactionCurrency` | `TransactionCurrency` |
| `PricingDate` | `PricingDate` |
| `PriceDetnExchangeRate` | `PriceDetnExchangeRate` |
| `SalesSchedgAgrmtCondition` | `SalesDocumentCondition` |
| `SDPricingProcedure` | `SDPricingProcedure` |
| `RequestedDeliveryDate` | `RequestedDeliveryDate` |
| `ShippingType` | `ShippingType` |
| `ShippingCondition` | `ShippingCondition` |
| `IncotermsClassification` | `IncotermsClassification` |
| `IncotermsTransferLocation` | `IncotermsTransferLocation` |
| `IncotermsLocation1` | `IncotermsLocation1` |
| `IncotermsLocation2` | `IncotermsLocation2` |
| `IncotermsVersion` | `IncotermsVersion` |
| `DeliveryBlockReason` | `DeliveryBlockReason` |
| `DelivSchedTypeMRPRlvnceCode` | `DelivSchedTypeMRPRlvnceCode` |
| `AgrmtValdtyStartDate` | `cast(AgrmtValdtyStartDate as sd_schedg_agrmt_valid_from preserving type )` |
| `AgrmtValdtyEndDate` | `cast(AgrmtValdtyEndDate as sd_schedg_agrmt_valid_to preserving type )` |
| `MatlUsageIndicator` | `MatlUsageIndicator` |
| `BillingCompanyCode` | `BillingCompanyCode` |
| `BillingDocumentDate` | `BillingDocumentDate` |
| `HeaderBillingBlockReason` | `HeaderBillingBlockReason` |
| `CustomerPaymentTerms` | `CustomerPaymentTerms` |
| `PaymentMethod` | `PaymentMethod` |
| `FiscalYear` | `FiscalYear` |
| `FiscalPeriod` | `FiscalPeriod` |
| `ExchangeRateDate` | `ExchangeRateDate` |
| `ExchangeRateType` | `ExchangeRateType` |
| `ControllingArea` | `ControllingArea` |
| `OverallSDProcessStatus` | `OverallSDProcessStatus` |
| `OverallSDDocumentRejectionSts` | `OverallSDDocumentRejectionSts` |
| `TotalBlockStatus` | `TotalBlockStatus` |
| `OverallDelivConfStatus` | `OverallDelivConfStatus` |
| `OverallTotalDeliveryStatus` | `OverallTotalDeliveryStatus` |
| `OverallDeliveryStatus` | `OverallDeliveryStatus` |
| `OverallDeliveryBlockStatus` | `OverallDeliveryBlockStatus` |
| `OverallBillingBlockStatus` | `OverallBillingBlockStatus` |
| `TotalCreditCheckStatus` | `TotalCreditCheckStatus` |
| `CentralCreditCheckStatus` | `CentralCreditCheckStatus` |
| `CentralCreditChkTechErrSts` | `CentralCreditChkTechErrSts` |
| `HdrGeneralIncompletionStatus` | `HdrGeneralIncompletionStatus` |
| `OverallPricingIncompletionSts` | `OverallPricingIncompletionSts` |
| `HeaderDelivIncompletionStatus` | `HeaderDelivIncompletionStatus` |
| `HeaderBillgIncompletionStatus` | `HeaderBillgIncompletionStatus` |
| `OvrlItmGeneralIncompletionSts` | `OvrlItmGeneralIncompletionSts` |
| `OvrlItmBillingIncompletionSts` | `OvrlItmBillingIncompletionSts` |
| `OvrlItmDelivIncompletionSts` | `OvrlItmDelivIncompletionSts` |
| `OverallTrdCmplncEmbargoSts` | `OverallTrdCmplncEmbargoSts` |
| `OvrlTrdCmplncSnctndListChkSts` | `OvrlTrdCmplncSnctndListChkSts` |
| `OvrlTrdCmplncLegalCtrlChkSts` | `OvrlTrdCmplncLegalCtrlChkSts` |
| `OverallChmlCmplncStatus` | `OverallChmlCmplncStatus` |
| `OverallDangerousGoodsStatus` | `OverallDangerousGoodsStatus` |
| `OverallSafetyDataSheetStatus` | `OverallSafetyDataSheetStatus` |
| `_Partner` | *Association* |
| `_PricingElement` | *Association* |
| `_Item` | *Association* |
| `_SalesSchedgAgrmtType` | *Association* |
| `_DelivSchedTypeMRPRlvnceCode` | *Association* |
| `_StandardPartner` | *Association* |
| `_SDDocumentCategory` | *Association* |
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
| `_SDDocumentReason` | *Association* |
| `_SalesDistrict` | *Association* |
| `_TransactionCurrency` | *Association* |
| `_ShippingType` | *Association* |
| `_ShippingCondition` | *Association* |
| `_IncotermsClassification` | *Association* |
| `_IncotermsVersion` | *Association* |
| `_DeliveryBlockReason` | *Association* |
| `_BillingCompanyCode` | *Association* |
| `_HeaderBillingBlockReason` | *Association* |
| `_CustomerPaymentTerms` | *Association* |
| `_ExchangeRateType` | *Association* |
| `_ControllingArea` | *Association* |
| `_OverallSDProcessStatus` | *Association* |
| `_OverallSDDocumentRejectionSts` | *Association* |
| `_TotalBlockStatus` | *Association* |
| `_OverallDelivConfStatus` | *Association* |
| `_OverallTotalDeliveryStatus` | *Association* |
| `_OverallDeliveryStatus` | *Association* |
| `_OverallDeliveryBlockStatus` | *Association* |
| `_OverallBillingBlockStatus` | *Association* |
| `_TotalCreditCheckStatus` | *Association* |
| `_CentralCreditCheckStatus` | *Association* |
| `_CentralCreditChkTechErrSts` | *Association* |
| `_HdrGeneralIncompletionStatus` | *Association* |
| `_OverallPricingIncompletionSts` | *Association* |
| `_HeaderDelivIncompletionStatus` | *Association* |
| `_HeaderBillgIncompletionStatus` | *Association* |
| `_OvrlItmGeneralIncompletionSts` | *Association* |
| `_OvrlItmBillingIncompletionSts` | *Association* |
| `_OvrlItmDelivIncompletionSts` | *Association* |
| `_OvrlTradeCmplncEmbargoStatus` | *Association* |
| `_OvTrdCmplncSnctndListChkSts` | *Association* |
| `_OvrlTrdCmplncLegalCtrlChkSts` | *Association* |
| `_OverallChmlCmplncStatus` | *Association* |
| `_OverallDangerousGoodsStatus` | *Association* |
| `_OvrlSftyDataSheetSts` | *Association* |
| `_CreatedByUser` | *Association* |
| `_LastChangedByUser` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Partner` | `I_SalesSchedgAgrmtPartner` | [1..*] |
| `_PricingElement` | `I_SalesSchedgAgrmtPrcgElement` | [0..*] |
| `_Item` | `I_SalesSchedgAgrmtItem` | [0..*] |
| `_SalesSchedgAgrmtType` | `I_SalesSchedgAgrmtType` | [0..1] |
| `_DelivSchedTypeMRPRlvnceCode` | `I_DelivSchedTypeMRPRlvnceCode` | [0..1] |
| `_Extension` | `E_SalesDocumentBasic` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sales Scheduling Agreement'
@VDM.viewType:#BASIC
@AbapCatalog: {
  sqlViewName: 'ISDSCHEDGAGRMT',
  preserveKey: true,
  compiler.compareFilter: true
}
@ObjectModel: {
   compositionRoot:   true,
   representativeKey: 'SalesSchedulingAgreement',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #L
   },
   supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ],
   modelingPattern: [ #ANALYTICAL_DIMENSION ]
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: [ '_CreatedByUser', '_LastChangedByUser']
}
@Analytics.dataCategory: #DIMENSION
@Metadata:{
    ignorePropagatedAnnotations: true,
    allowExtensions: true
}
@Analytics: {
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'vbak', role: #MAIN,
                    viewElement: ['SalesSchedulingAgreement'],
                    tableElement: ['vbeln']  },
                    
                {   filter: [{operator: #EQ, tableElement: 'posnr', value: '000000'}],
                    table: 'vbkd', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['SalesSchedulingAgreement'],
                    tableElement: ['vbeln']
                },   
                
                {   filter: [{operator: #EQ, tableElement: 'vposn', value: '000000'}],
                    table: 'veda', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['SalesSchedulingAgreement'],
                    tableElement: ['vbeln']
                }              
            ]
        }
    }
 }
@ObjectModel.sapObjectNodeType.name: 'SalesSchedulingAgreement'

define view I_SalesSchedgAgrmt
  as select from I_SalesDocument as SalesDocument

  //Associations
  association [1..*] to I_SalesSchedgAgrmtPartner     as _Partner                     on $projection.SalesSchedulingAgreement = _Partner.SalesSchedulingAgreement
  association [0..*] to I_SalesSchedgAgrmtPrcgElement as _PricingElement              on $projection.SalesSchedulingAgreement = _PricingElement.SalesSchedulingAgreement
  association [0..*] to I_SalesSchedgAgrmtItem        as _Item                        on $projection.SalesSchedulingAgreement = _Item.SalesSchedulingAgreement
  association [0..1] to I_SalesSchedgAgrmtType        as _SalesSchedgAgrmtType        on $projection.SalesSchedgAgrmtType = _SalesSchedgAgrmtType.SalesSchedgAgrmtType
  association [0..1] to I_DelivSchedTypeMRPRlvnceCode as _DelivSchedTypeMRPRlvnceCode on $projection.DelivSchedTypeMRPRlvnceCode = _DelivSchedTypeMRPRlvnceCode.DelivSchedTypeMRPRlvnceCode
  //Extensibility
  association [0..1] to E_SalesDocumentBasic          as _Extension                   on SalesDocument.SalesDocument = _Extension.SalesDocument

{
      //Key
  key cast(SalesDocument as vdm_sales_schedg_agrmt preserving type)             as SalesSchedulingAgreement,
      @ObjectModel.foreignKey.association: '_SDDocumentCategory'
      SDDocumentCategory,
      @ObjectModel.foreignKey.association: '_SalesSchedgAgrmtType'
      cast(SalesDocumentType as vdm_sales_schedg_agrmt_type preserving type)    as SalesSchedgAgrmtType,
      SalesDocumentProcessingType                                               as SalesSchedgAgrmtProcessingType,

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
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Customer_VH',
                     element: 'Customer' }
        }]
      @ObjectModel.foreignKey.association: '_SoldToParty'
      cast( SoldToParty as sd_schedg_agrmt_sold_to_party preserving type )      as SoldToParty,
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
      SalesDocumentDate                                                         as SalesSchedgAgrmtDate,
      @ObjectModel.foreignKey.association: '_SDDocumentReason'
      SDDocumentReason,
      PurchaseOrderByCustomer,
      CustomerPurchaseOrderType,
      CustomerPurchaseOrderDate,
      CustomerPurchaseOrderSuplmnt,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      SalesDistrict,

      //Pricing
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      TotalNetAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      TransactionCurrency,
      PricingDate,
      PriceDetnExchangeRate,
      SalesDocumentCondition                                                    as SalesSchedgAgrmtCondition,
      SDPricingProcedure,

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
      @ObjectModel.foreignKey.association: '_DeliveryBlockReason'
      DeliveryBlockReason,

      //Scheduling Agreement
      @ObjectModel.foreignKey.association: '_DelivSchedTypeMRPRlvnceCode'
      DelivSchedTypeMRPRlvnceCode,
      cast(AgrmtValdtyStartDate as sd_schedg_agrmt_valid_from preserving type ) as AgrmtValdtyStartDate,
      cast(AgrmtValdtyEndDate as sd_schedg_agrmt_valid_to preserving type )     as AgrmtValdtyEndDate,
      MatlUsageIndicator,

      //Billing
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      @ObjectModel.foreignKey.association: '_BillingCompanyCode'
      BillingCompanyCode,
      BillingDocumentDate,
      @ObjectModel.foreignKey.association: '_HeaderBillingBlockReason'
      HeaderBillingBlockReason,

      //Payment
      @ObjectModel.foreignKey.association: '_CustomerPaymentTerms'
      CustomerPaymentTerms,
      PaymentMethod,

      //Accounting
      FiscalYear,
      FiscalPeriod,
      ExchangeRateDate,
      @ObjectModel.foreignKey.association: '_ExchangeRateType'
      ExchangeRateType,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,

      //Status
      @ObjectModel.foreignKey.association: '_OverallSDProcessStatus'
      OverallSDProcessStatus,
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
      @ObjectModel.foreignKey.association: '_OverallBillingBlockStatus'
      OverallBillingBlockStatus,
      @ObjectModel.foreignKey.association: '_TotalCreditCheckStatus'
      TotalCreditCheckStatus,
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
      @ObjectModel.foreignKey.association: '_OvrlTradeCmplncEmbargoStatus'
      OverallTrdCmplncEmbargoSts,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_OvTrdCmplncSnctndListChkSts'
      OvrlTrdCmplncSnctndListChkSts,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_OvrlTrdCmplncLegalCtrlChkSts'
      OvrlTrdCmplncLegalCtrlChkSts,
      @ObjectModel.foreignKey.association: '_OverallChmlCmplncStatus'
      OverallChmlCmplncStatus,
      @ObjectModel.foreignKey.association: '_OverallDangerousGoodsStatus'
      OverallDangerousGoodsStatus,
      @ObjectModel.foreignKey.association: '_OvrlSftyDataSheetSts'
      OverallSafetyDataSheetStatus,
      
      //Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Item,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Partner,
      _StandardPartner,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _PricingElement,
      _SDDocumentCategory,
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
      _SDDocumentReason,
      _SalesDistrict,
      _TransactionCurrency,
      _ShippingType,
      _ShippingCondition,
      _IncotermsClassification,
      _IncotermsVersion,
      _DeliveryBlockReason,
      _BillingCompanyCode,
      _HeaderBillingBlockReason,
      _CustomerPaymentTerms,
      _ExchangeRateType,
      _ControllingArea,
      _OverallSDProcessStatus,
      _OverallSDDocumentRejectionSts,
      _TotalBlockStatus,
      _OverallDelivConfStatus,
      _OverallTotalDeliveryStatus,
      _OverallDeliveryStatus,
      _OverallDeliveryBlockStatus,
      _OverallBillingBlockStatus,
      _TotalCreditCheckStatus,
      _CentralCreditCheckStatus,
      _CentralCreditChkTechErrSts,
      _HdrGeneralIncompletionStatus,
      _OverallPricingIncompletionSts,
      _HeaderDelivIncompletionStatus,
      _HeaderBillgIncompletionStatus,
      _OvrlItmGeneralIncompletionSts,
      _OvrlItmBillingIncompletionSts,
      _OvrlItmDelivIncompletionSts,
      _OvrlTradeCmplncEmbargoStatus,
      _OvTrdCmplncSnctndListChkSts,
      _OvrlTrdCmplncLegalCtrlChkSts,
      _OverallChmlCmplncStatus,
      _OverallDangerousGoodsStatus,
      _OvrlSftyDataSheetSts,
      _CreatedByUser,
      _LastChangedByUser,
      _SalesSchedgAgrmtType,
      _DelivSchedTypeMRPRlvnceCode
}
where
     SalesDocument.SDDocumentCategory = 'E'
  or SalesDocument.SDDocumentCategory = 'F';
```
