---
name: I_SALESINQUIRY
description: Salesinquiry
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
  - component:SD-SLS-QUT-2CL
  - lob:Sales & Distribution
---
# I_SALESINQUIRY

**Salesinquiry**

| Property | Value |
|---|---|
| App Component | `SD-SLS-QUT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesInquiry` | `cast(SalesDocument as sales_inquiry preserving type )` |
| `SalesInquiryType` | `SalesDocumentType` |
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
| `SoldToParty` | `SoldToParty` |
| `CustomerGroup` | `CustomerGroup` |
| `AdditionalCustomerGroup1` | `AdditionalCustomerGroup1` |
| `AdditionalCustomerGroup2` | `AdditionalCustomerGroup2` |
| `AdditionalCustomerGroup3` | `AdditionalCustomerGroup3` |
| `AdditionalCustomerGroup4` | `AdditionalCustomerGroup4` |
| `AdditionalCustomerGroup5` | `AdditionalCustomerGroup5` |
| `SalesInquiryDate` | `SalesDocumentDate` |
| `SDDocumentReason` | `SDDocumentReason` |
| `PurchaseOrderByCustomer` | `PurchaseOrderByCustomer` |
| `CustomerPurchaseOrderType` | `CustomerPurchaseOrderType` |
| `CustomerPurchaseOrderDate` | `CustomerPurchaseOrderDate` |
| `SalesDistrict` | `SalesDistrict` |
| `ProductCatalog` | `ProductCatalog` |
| `BindingPeriodValidityStartDate` | `cast(BindingPeriodValidityStartDate as inquiry_valid_from preserving type )` |
| `BindingPeriodValidityEndDate` | `cast(BindingPeriodValidityEndDate as inquiry_valid_to preserving type )` |
| `HdrOrderProbabilityInPercent` | `HdrOrderProbabilityInPercent` |
| `TotalNetAmount` | `TotalNetAmount` |
| `TransactionCurrency` | `TransactionCurrency` |
| `PricingDate` | `PricingDate` |
| `RetailPromotion` | `RetailPromotion` |
| `PriceDetnExchangeRate` | `PriceDetnExchangeRate` |
| `SalesInquiryCondition` | `SalesDocumentCondition` |
| `IncotermsClassification` | `IncotermsClassification` |
| `IncotermsTransferLocation` | `IncotermsTransferLocation` |
| `IncotermsLocation1` | `IncotermsLocation1` |
| `IncotermsLocation2` | `IncotermsLocation2` |
| `IncotermsVersion` | `IncotermsVersion` |
| `BillingDocumentDate` | `BillingDocumentDate` |
| `BillingCompanyCode` | `BillingCompanyCode` |
| `HeaderBillingBlockReason` | `HeaderBillingBlockReason` |
| `CustomerPaymentTerms` | `CustomerPaymentTerms` |
| `PaymentMethod` | `PaymentMethod` |
| `FixedValueDate` | `FixedValueDate` |
| `AdditionalValueDays` | `AdditionalValueDays` |
| `FiscalYear` | `FiscalYear` |
| `FiscalPeriod` | `FiscalPeriod` |
| `ExchangeRateDate` | `ExchangeRateDate` |
| `ExchangeRateType` | `ExchangeRateType` |
| `BusinessArea` | `BusinessArea` |
| `CustomerAccountAssignmentGroup` | `CustomerAccountAssignmentGroup` |
| `CostCenterBusinessArea` | `CostCenterBusinessArea` |
| `CostCenter` | `CostCenter` |
| `ControllingArea` | `ControllingArea` |
| `OrderID` | `OrderID` |
| `ReferenceSDDocument` | `ReferenceSDDocument` |
| `ReferenceSDDocumentCategory` | `ReferenceSDDocumentCategory` |
| `OverallSDProcessStatus` | `OverallSDProcessStatus` |
| `OverallSDDocumentRejectionSts` | `OverallSDDocumentRejectionSts` |
| `TotalBlockStatus` | `TotalBlockStatus` |
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
| `HeaderBillgIncompletionStatus` | `HeaderBillgIncompletionStatus` |
| `OvrlItmGeneralIncompletionSts` | `OvrlItmGeneralIncompletionSts` |
| `OvrlItmBillingIncompletionSts` | `OvrlItmBillingIncompletionSts` |
| `_Item` | *Association* |
| `_SalesInquiryType` | *Association* |
| `_Partner` | *Association* |
| `_StandardPartner` | *Association* |
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
| `_SDDocumentReason` | *Association* |
| `_SalesDistrict` | *Association* |
| `_TransactionCurrency` | *Association* |
| `_IncotermsClassification` | *Association* |
| `_IncotermsVersion` | *Association* |
| `_BillingCompanyCode` | *Association* |
| `_HeaderBillingBlockReason` | *Association* |
| `_CustomerPaymentTerms` | *Association* |
| `_ExchangeRateType` | *Association* |
| `_BusinessArea` | *Association* |
| `_CustomerAccountAssgmtGroup` | *Association* |
| `_CostCenterBusinessArea` | *Association* |
| `_CostCenter` | *Association* |
| `_ControllingArea` | *Association* |
| `_ReferenceSDDocumentCategory` | *Association* |
| `_OverallSDProcessStatus` | *Association* |
| `_OverallSDDocumentRejectionSts` | *Association* |
| `_TotalBlockStatus` | *Association* |
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
| `_HeaderBillgIncompletionStatus` | *Association* |
| `_OvrlItmGeneralIncompletionSts` | *Association* |
| `_OvrlItmBillingIncompletionSts` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Item` | `I_SalesInquiryItem` | [0..*] |
| `_SalesInquiryType` | `I_SalesInquiryType` | [0..1] |
| `_Extension` | `E_SalesDocumentBasic` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.compositionRoot: true
@ObjectModel.representativeKey: 'SalesInquiry'
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.supportedCapabilities: [#EXTRACTION_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@EndUserText.label: 'Sales Inquiry'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@AccessControl.privilegedAssociations: [ '_Partner', '_CreatedByUser', '_LastChangedByUser' ]
@AbapCatalog.sqlViewName: 'ISDSLSINQY'
@AbapCatalog.compiler.compareFilter: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@Analytics: {
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'vbak', role: #MAIN,
                    viewElement: ['SalesInquiry'],
                    tableElement: ['vbeln']  },
                    
                {   filter: [{operator: #EQ, tableElement: 'posnr', value: '000000'}],
                    table: 'vbkd', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['SalesInquiry'],
                    tableElement: ['vbeln']
                },   
                
                {   filter: [{operator: #EQ, tableElement: 'vposn', value: '000000'}],
                    table: 'veda', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['SalesInquiry'],
                    tableElement: ['vbeln']
                }              
            ]
        }
    }
 }
@ObjectModel.sapObjectNodeType.name: 'SalesInquiry'
define view I_SalesInquiry
  as select from I_SalesDocument
  
  //Associations
  association [0..*] to I_SalesInquiryItem as _Item             on $projection.SalesInquiry = _Item.SalesInquiry
  association [0..1] to I_SalesInquiryType as _SalesInquiryType on $projection.SalesInquiryType = _SalesInquiryType.SalesInquiryType
  //Extensibility
  association [0..1] to E_SalesDocumentBasic as _Extension      on $projection.SalesInquiry = _Extension.SalesDocument
  
  
{
      //Key
  key cast(SalesDocument as sales_inquiry preserving type ) as SalesInquiry,

      //Category
      @ObjectModel.foreignKey.association: '_SalesInquiryType'
      SalesDocumentType                                     as SalesInquiryType,

      //Admin
      CreatedByUser,
      LastChangedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      CreationTime,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,

      //Org
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
      SalesDocumentDate                                     as SalesInquiryDate,
      @ObjectModel.foreignKey.association: '_SDDocumentReason'
      SDDocumentReason,
      PurchaseOrderByCustomer,
      CustomerPurchaseOrderType,
      CustomerPurchaseOrderDate,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      SalesDistrict,
      ProductCatalog,

      //Validity      
      cast(BindingPeriodValidityStartDate as inquiry_valid_from preserving type ) as BindingPeriodValidityStartDate,
      cast(BindingPeriodValidityEndDate as inquiry_valid_to preserving type ) as BindingPeriodValidityEndDate,
      HdrOrderProbabilityInPercent,

      //Amount
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      TotalNetAmount,
      
      //Currency
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      TransactionCurrency,
      
      //Pricing
      PricingDate,
      RetailPromotion,
      PriceDetnExchangeRate,
      SalesDocumentCondition                                as SalesInquiryCondition,

      //Shipping
      @ObjectModel.foreignKey.association: '_IncotermsClassification'
      IncotermsClassification,
      IncotermsTransferLocation,
      IncotermsLocation1,
      IncotermsLocation2,
      @ObjectModel.foreignKey.association: '_IncotermsVersion'
      IncotermsVersion,

      //Billing
      BillingDocumentDate,
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
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
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_BusinessAreaStdVH',
                     element: 'BusinessArea' }
        }]
      @ObjectModel.foreignKey.association: '_BusinessArea'
      BusinessArea,
      @ObjectModel.foreignKey.association: '_CustomerAccountAssgmtGroup'
      CustomerAccountAssignmentGroup,
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_BusinessAreaStdVH',
                     element: 'BusinessArea' }
        }]
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


      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Item,
      _Partner,
      _StandardPartner,
      _SalesInquiryType,
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
      _SDDocumentReason,
      _SalesDistrict,
      _TransactionCurrency,
      _IncotermsClassification,
      _IncotermsVersion,
      _BillingCompanyCode,
      _HeaderBillingBlockReason,
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
      _OvrlItmBillingIncompletionSts

}
where SDDocumentCategory = 'A';
```
