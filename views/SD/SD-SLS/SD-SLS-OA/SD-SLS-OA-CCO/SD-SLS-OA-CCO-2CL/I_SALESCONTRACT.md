---
name: I_SALESCONTRACT
description: "Salescontract"
app_component: SD-SLS-OA-CCO-2CL
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
  - sales-contract
  - contract
  - component:SD-SLS-OA-CCO-2CL
  - lob:Sales & Distribution
---
# I_SALESCONTRACT

**Salescontract**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-CCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesContract` | ✓ | |  | `cast(SalesDocument as sales_contract preserving type)` |  |  |
| `SalesContractType` |  | |  | `cast(SalesDocumentType as sales_contract_type preserving type )` |  |  |
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
| `SalesContractDate` |  | |  | `SalesDocumentDate` |  |  |
| `ServicesRenderedDate` |  | |  |  |  |  |
| `SDDocumentReason` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `PurchaseOrderByShipToParty` |  | |  |  |  |  |
| `CustomerPurchaseOrderType` |  | |  |  |  |  |
| `CustomerPurchaseOrderDate` |  | |  |  |  |  |
| `CustomerPurchaseOrderSuplmnt` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `ProductCatalog` |  | |  |  |  |  |
| `SalesDocumentDescription` |  | |  | `cast(SalesDocumentDescription as tdd_sls_contr_desc preserving type)` |  |  |
| `SalesContractSignedDate` |  | |  |  |  |  |
| `ContractPartnerCanclnDocDate` |  | |  |  |  |  |
| `NmbrOfSalesContractValdtyPerd` |  | |  |  |  |  |
| `SalesContractValidityPerdUnit` |  | |  |  |  |  |
| `SalesContractValidityPerdCat` |  | |  |  |  |  |
| `SalesContractValidityStartDate` |  | |  | `AgrmtValdtyStartDate` |  |  |
| `SalesContractValidityEndDate` |  | |  | `AgrmtValdtyEndDate` |  |  |
| `SlsContractCanclnReqRcptDate` |  | |  |  |  |  |
| `RequestedCancellationDate` |  | |  |  |  |  |
| `SalesContractCanclnParty` |  | |  |  |  |  |
| `SalesContractCanclnReason` |  | |  |  |  |  |
| `SalesContractCanclnProcedure` |  | |  |  |  |  |
| `EquipmentInstallationDate` |  | |  |  |  |  |
| `EquipmentDeliveryAccptcDate` |  | |  |  |  |  |
| `EquipmentDismantlingDate` |  | |  |  |  |  |
| `SalesContractFollowUpAction` |  | |  |  |  |  |
| `SlsContractFollowUpActionDate` |  | |  |  |  |  |
| `CanclnDocByContrPartner` |  | |  |  |  |  |
| `MasterSalesContract` |  | |  |  |  |  |
| `SlsContrPrtnAuthznForRelOrd` |  | |  |  |  |  |
| `TotalNetAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `PricingDate` |  | |  |  |  |  |
| `SDPricingProcedure` |  | |  |  |  |  |
| `CustomerPriceGroup` |  | |  |  |  |  |
| `RetailPromotion` |  | |  |  |  |  |
| `PriceDetnExchangeRate` |  | |  |  |  |  |
| `SalesContractCondition` |  | |  | `SalesDocumentCondition` |  |  |
| `PriceListType` |  | |  |  |  |  |
| `TaxDepartureCountry` |  | |  |  |  |  |
| `VATRegistrationCountry` |  | |  |  |  |  |
| `ShippingCondition` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `CompleteDeliveryIsDefined` |  | |  |  |  |  |
| `ShippingType` |  | |  |  |  |  |
| `BillingDocumentDate` |  | |  |  |  |  |
| `BillingCompanyCode` |  | |  |  |  |  |
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
| `AssignmentReference` |  | |  |  |  |  |
| `ReferenceSDDocument` |  | |  |  |  |  |
| `ReferenceSDDocumentCategory` |  | |  |  |  |  |
| `AccountingDocExternalReference` |  | |  |  |  |  |
| `OverallSDProcessStatus` |  | |  |  |  |  |
| `OverallSDDocumentRejectionSts` |  | |  |  |  |  |
| `TotalBlockStatus` |  | |  |  |  |  |
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
| `ContractDownPaymentStatus` |  | |  |  |  |  |
| `SalesDocApprovalStatus` |  | |  |  |  |  |
| `SalesContractApprovalReason` |  | |  | `SalesDocApprovalReason` |  |  |
| `ContractManualCompletion` |  | |  |  |  |  |
| `OverallBillingBlockStatus` |  | |  |  |  |  |
| `HeaderBillingBlockReason` |  | |  |  |  |  |
| `OverallChmlCmplncStatus` |  | |  |  |  |  |
| `OverallDangerousGoodsStatus` |  | |  |  |  |  |
| `OverallSafetyDataSheetStatus` |  | |  |  |  |  |
| `OverallTrdCmplncEmbargoSts` |  | |  |  |  |  |
| `OvrlTrdCmplncSnctndListChkSts` |  | |  |  |  |  |
| `OvrlTrdCmplncLegalCtrlChkSts` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |
| `_SalesContractType` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_MasterSalesContract` | | ✓ | | | | |
| `_BusinessAreaText` | | ✓ | | | | |
| `_CostCenterBusinessAreaText` | | ✓ | | | | |
| `_CreditControlAreaText` | | ✓ | | | | |
| `_SalesContractApprovalReason` | | ✓ | | | | |
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
| `_SalesContractValidityPerdUnit` | | ✓ | | | | |
| `_SalesContractValidityPerdCat` | | ✓ | | | | |
| `_SalesContractCanclnParty` | | ✓ | | | | |
| `_SalesContractCanclnReason` | | ✓ | | | | |
| `_SalesContractFollowUpAction` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_IncotermsVersion` | | ✓ | | | | |
| `_BillingCompanyCode` | | ✓ | | | | |
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
| `_DownPaymentStatus` | | ✓ | | | | |
| `_SalesDocApprovalStatus` | | ✓ | | | | |
| `_ShippingCondition` | | ✓ | | | | |
| `_SDPricingProcedure` | | ✓ | | | | |
| `_CustomerPriceGroup` | | ✓ | | | | |
| `_PriceListType` | | ✓ | | | | |
| `_OverallBillingBlockStatus` | | ✓ | | | | |
| `_HeaderBillingBlockReason` | | ✓ | | | | |
| `_OverallChmlCmplncStatus` | | ✓ | | | | |
| `_OverallDangerousGoodsStatus` | | ✓ | | | | |
| `_OvrlSftyDataSheetSts` | | ✓ | | | | |
| `_OvrlTradeCmplncEmbargoStatus` | | ✓ | | | | |
| `_OvTrdCmplncSnctndListChkSts` | | ✓ | | | | |
| `_OvrlTrdCmplncLegalCtrlChkSts` | | ✓ | | | | |
| `_TaxDepartureCountry` | | ✓ | | | | |
| `_VATRegistrationCountry` | | ✓ | | | | |
| `_ShippingType` | | ✓ | | | | |
| `_SlsContrPrtnAuthznForOrd` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Item` | `I_SalesContractItem` | [0..*] |
| `_SalesContractType` | `I_SalesContractType` | [0..1] |
| `_Partner` | `I_SalesContractPartner` | [0..*] |
| `_MasterSalesContract` | `I_SalesDocument` | [0..1] |
| `_BusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_CostCenterBusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_CreditControlAreaText` | `I_CreditControlAreaText` | [0..*] |
| `_SalesContractApprovalReason` | `I_SalesContractApprovalReason` | [0..1] |
| `_Extension` | `E_SalesDocumentBasic` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sales Contract'
@AbapCatalog:{
    sqlViewName: 'ISDSALESCONTRACT',
    compiler.compareFilter: true
}
@ObjectModel:{
    compositionRoot: true,
    representativeKey: 'SalesContract',
    usageType:{
        dataClass: #TRANSACTIONAL,
        serviceQuality: #B,
        sizeCategory: #M
         },
    supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE],
    modelingPattern: #ANALYTICAL_DIMENSION
}
@AccessControl:{
    authorizationCheck:#CHECK,
      personalData.blocking: #('TRANSACTIONAL_DATA'),
      privilegedAssociations: [ '_Partner', '_CreatedByUser', '_LastChangedByUser', '_BusinessAreaText','_CostCenterBusinessAreaText','_CreditControlAreaText' ]
}
@VDM.viewType: #BASIC
@Analytics.dataCategory:#DIMENSION
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'SalesContract'       

@Analytics: {
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'vbak', role: #MAIN,
                    viewElement: ['SalesContract'],
                    tableElement: ['vbeln']  },
                    
                {   filter: [{operator: #EQ, tableElement: 'posnr', value: '000000'}],
                    table: 'vbkd', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['SalesContract'],
                    tableElement: ['vbeln']
                },   
                
                {   filter: [{operator: #EQ, tableElement: 'vposn', value: '000000'}],
                    table: 'veda', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['SalesContract'],
                    tableElement: ['vbeln']
                }              
            ]
        }
    }
 }


define view I_SalesContract
  as select from I_SalesDocument as SalesDocument
  //Associations
  association [0..*] to I_SalesContractItem           as _Item                        on $projection.SalesContract = _Item.SalesContract
  association [0..1] to I_SalesContractType           as _SalesContractType           on $projection.SalesContractType = _SalesContractType.SalesContractType
  association [0..*] to I_SalesContractPartner        as _Partner                     on $projection.SalesContract = _Partner.SalesContract
  association [0..1] to I_SalesDocument               as _MasterSalesContract         on $projection.MasterSalesContract = _MasterSalesContract.SalesDocument

  //VH adoption - 1805 CL
  association [0..*] to I_BusinessAreaText            as _BusinessAreaText            on $projection.BusinessArea = _BusinessAreaText.BusinessArea
  association [0..*] to I_BusinessAreaText            as _CostCenterBusinessAreaText  on $projection.CostCenterBusinessArea = _CostCenterBusinessAreaText.BusinessArea
  association [0..*] to I_CreditControlAreaText       as _CreditControlAreaText       on $projection.CreditControlArea = _CreditControlAreaText.CreditControlArea
  association [0..1] to I_SalesContractApprovalReason as _SalesContractApprovalReason on $projection.SalesContractApprovalReason = _SalesContractApprovalReason.SalesContractApprovalReason


  //Extensibility
  association [0..1] to E_SalesDocumentBasic          as _Extension                   on SalesDocument.SalesDocument = _Extension.SalesDocument

{
      //Key
  key cast(SalesDocument as sales_contract preserving type)           as SalesContract,

      //Category
      @ObjectModel.foreignKey.association: '_SalesContractType'
      cast(SalesDocumentType as sales_contract_type preserving type ) as SalesContractType,

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

      @Consumption.valueHelpDefinition: [
       { entity:  { name:    'I_CreditControlAreaStdVH',
                    element: 'CreditControlArea' }
       }]
      @ObjectModel.text.association: '_CreditControlAreaText'
      @ObjectModel.foreignKey.association: '_CreditControlArea'
      CreditControlArea,
      CustomerRebateAgreement,
      SalesDocumentDate                                               as SalesContractDate,
      ServicesRenderedDate,
      @ObjectModel.foreignKey.association: '_SDDocumentReason'
      SDDocumentReason,
      PurchaseOrderByCustomer,
      PurchaseOrderByShipToParty,
      CustomerPurchaseOrderType,
      CustomerPurchaseOrderDate,
      CustomerPurchaseOrderSuplmnt,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      SalesDistrict,
      ProductCatalog,
      cast(SalesDocumentDescription as tdd_sls_contr_desc preserving type) as SalesDocumentDescription,
      
      //Contract
      SalesContractSignedDate,
      ContractPartnerCanclnDocDate,
      NmbrOfSalesContractValdtyPerd,
      @ObjectModel.foreignKey.association: '_SalesContractValidityPerdUnit'
      SalesContractValidityPerdUnit,
      @ObjectModel.foreignKey.association: '_SalesContractValidityPerdCat'
      SalesContractValidityPerdCat,
      AgrmtValdtyStartDate                                            as SalesContractValidityStartDate,
      AgrmtValdtyEndDate                                              as SalesContractValidityEndDate,
      SlsContractCanclnReqRcptDate,
      RequestedCancellationDate,
      @ObjectModel.foreignKey.association: '_SalesContractCanclnParty'
      SalesContractCanclnParty,
      @ObjectModel.foreignKey.association: '_SalesContractCanclnReason'
      SalesContractCanclnReason,
      SalesContractCanclnProcedure,
      EquipmentInstallationDate,
      EquipmentDeliveryAccptcDate,
      EquipmentDismantlingDate,
      @ObjectModel.foreignKey.association: '_SalesContractFollowUpAction'
      SalesContractFollowUpAction,
      SlsContractFollowUpActionDate,
      CanclnDocByContrPartner,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_MasterSalesContract'
      MasterSalesContract,
      @ObjectModel.foreignKey.association: '_SlsContrPrtnAuthznForOrd'
      SlsContrPrtnAuthznForRelOrd,

      //Pricing
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      TotalNetAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      TransactionCurrency,
      PricingDate,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SDPricingProcedure'
      SDPricingProcedure,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CustomerPriceGroup'
      CustomerPriceGroup,
      RetailPromotion,
      PriceDetnExchangeRate,
      SalesDocumentCondition                                          as SalesContractCondition,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PriceListType'
      PriceListType,
      
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_TaxDepartureCountry'
      TaxDepartureCountry,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_VATRegistrationCountry'
      VATRegistrationCountry,

      //Shipping
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
      @ObjectModel.foreignKey.association: '_ShippingType'
      ShippingType,

      //Billing
      BillingDocumentDate,
      @Consumption.valueHelpDefinition: [
      { entity:  { name:    'I_CompanyCodeStdVH',
                   element: 'CompanyCode' }
      }]
      @ObjectModel.foreignKey.association: '_BillingCompanyCode'
      BillingCompanyCode,

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
      @ObjectModel.text.association: '_BusinessAreaText'
      @ObjectModel.foreignKey.association: '_BusinessArea'
      BusinessArea,
      @ObjectModel.foreignKey.association: '_CustomerAccountAssgmtGroup'
      CustomerAccountAssignmentGroup,
      @Consumption.valueHelpDefinition: [
       { entity:  { name:    'I_BusinessAreaStdVH',
                    element: 'BusinessArea' }
       }]
      @ObjectModel.text.association: '_CostCenterBusinessAreaText'
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
      AssignmentReference,

      //Reference
      ReferenceSDDocument,
      @ObjectModel.foreignKey.association: '_ReferenceSDDocumentCategory'
      ReferenceSDDocumentCategory,
      @Analytics.internalName: #LOCAL
      AccountingDocExternalReference,

      //Status
      @ObjectModel.foreignKey.association: '_OverallSDProcessStatus'
      OverallSDProcessStatus,
      @ObjectModel.foreignKey.association: '_OverallSDDocumentRejectionSts'
      OverallSDDocumentRejectionSts,
      @ObjectModel.foreignKey.association: '_TotalBlockStatus'
      TotalBlockStatus,
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
      @ObjectModel.foreignKey.association: '_DownPaymentStatus'
      ContractDownPaymentStatus,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SalesDocApprovalStatus'
      SalesDocApprovalStatus,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SalesContractApprovalReason'
      SalesDocApprovalReason                                          as SalesContractApprovalReason,
      ContractManualCompletion,

      @ObjectModel.foreignKey.association: '_OverallBillingBlockStatus'
      OverallBillingBlockStatus,
      @ObjectModel.foreignKey.association: '_HeaderBillingBlockReason'
      HeaderBillingBlockReason,

      // Product Compliance Status
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_OverallChmlCmplncStatus'
      OverallChmlCmplncStatus,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_OverallDangerousGoodsStatus'
      OverallDangerousGoodsStatus,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_OvrlSftyDataSheetSts'
      OverallSafetyDataSheetStatus,

      //Trade Compliance Status
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_OvrlTradeCmplncEmbargoStatus'
      OverallTrdCmplncEmbargoSts,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_OvTrdCmplncSnctndListChkSts'
      OvrlTrdCmplncSnctndListChkSts,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_OvrlTrdCmplncLegalCtrlChkSts'
      OvrlTrdCmplncLegalCtrlChkSts,

      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Item,
      _Partner,
      _StandardPartner,
      _SalesContractType,
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
      _SalesContractValidityPerdUnit,
      _SalesContractValidityPerdCat,
      _SalesContractCanclnParty,
      _SalesContractCanclnReason,
      _SalesContractFollowUpAction,
      _MasterSalesContract,
      _TransactionCurrency,
      //Todo:SalesContractCondition,
      _IncotermsClassification,
      _IncotermsVersion,
      _BillingCompanyCode,
      _CustomerPaymentTerms,
      //Todo: _PaymentMethod,
      _ExchangeRateType,
      _BusinessArea,
      _CustomerAccountAssgmtGroup,
      _CostCenterBusinessArea,
      _CostCenter,
      _ControllingArea,
      //Todo: ReferenceSDDocument,
      _ReferenceSDDocumentCategory,
      _OverallSDProcessStatus,
      _OverallSDDocumentRejectionSts,
      _TotalBlockStatus,
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
      _DownPaymentStatus,
      _SalesDocApprovalStatus,
      _SalesContractApprovalReason,
      _ShippingCondition,
      _SDPricingProcedure,
      _CustomerPriceGroup,
      _PriceListType,
      _OverallBillingBlockStatus,
      _HeaderBillingBlockReason,
      _OverallChmlCmplncStatus,
      _OverallDangerousGoodsStatus,
      _OvrlSftyDataSheetSts,
      _OvrlTradeCmplncEmbargoStatus,
      _OvTrdCmplncSnctndListChkSts,
      _OvrlTrdCmplncLegalCtrlChkSts,
      //VH
      @Consumption.hidden: true
      _BusinessAreaText,
      @Consumption.hidden: true
      _CostCenterBusinessAreaText,
      @Consumption.hidden: true
      _CreditControlAreaText,
      _TaxDepartureCountry,
      _VATRegistrationCountry,
      _ShippingType,
      _SlsContrPrtnAuthznForOrd
}
where
  SDDocumentCategory = 'G';
```
