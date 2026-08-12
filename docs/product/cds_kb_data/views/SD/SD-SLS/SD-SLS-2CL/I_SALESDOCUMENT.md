---
name: I_SALESDOCUMENT
description: "Salesdocument"
app_component: SD-SLS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - interface-view
  - sales-document
  - document
  - component:SD-SLS-2CL
  - lob:Sales & Distribution
---
# I_SALESDOCUMENT

**Salesdocument**

| Property | Value |
|---|---|
| App Component | `SD-SLS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDocument` | ✓ | |  |  |  |  |
| `SDDocumentCategory` |  | |  |  |  |  |
| `SalesDocumentType` |  | |  |  |  |  |
| `SalesDocumentProcessingType` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `LastCustomerContactDate` |  | |  |  |  |  |
| `SenderBusinessSystemName` |  | |  |  |  |  |
| `ExternalDocumentID` |  | |  |  |  |  |
| `ExternalDocLastChangeDateTime` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `CustomerGroup` |  | |  | `kdgrp` |  |  |
| `AdditionalCustomerGroup1` |  | |  |  |  |  |
| `AdditionalCustomerGroup2` |  | |  |  |  |  |
| `AdditionalCustomerGroup3` |  | |  |  |  |  |
| `AdditionalCustomerGroup4` |  | |  |  |  |  |
| `AdditionalCustomerGroup5` |  | |  |  |  |  |
| `SlsDocIsRlvtForProofOfDeliv` |  | |  | `cast( vbkd.podkz as vdm_sd_proof_of_delivery_rlvt preserving type )` |  |  |
| `CreditControlArea` |  | |  |  |  |  |
| `CustomerRebateAgreement` |  | |  |  |  |  |
| `SalesDocumentDate` |  | |  |  |  |  |
| `ServicesRenderedDate` |  | |  | `cast( vbkd.fbuda as vdm_sd_services_rendered_date preserving type )` |  |  |
| `SDDocumentReason` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  | `bstkd` |  |  |
| `PurchaseOrderByShipToParty` |  | |  | `cast (vbkd.bstkd_e as sd_purchase_order_by_shipto preserving type )` |  |  |
| `CustPurOrdDateByShipToParty` |  | |  | `cast(vbkd.bstdk_e as sd_po_date_by_shipto preserving type )` |  |  |
| `CustPurOrdTypeByShipToParty` |  | |  | `cast (vbkd.bsark_e as sd_po_type_by_shipto preserving type )` |  |  |
| `SDDocumentCollectiveNumber` |  | |  |  |  |  |
| `CustomerPurchaseOrderType` |  | |  |  |  |  |
| `CustomerPurchaseOrderDate` |  | |  |  |  |  |
| `CustomerPurchaseOrderSuplmnt` |  | |  |  |  |  |
| `SalesDistrict` |  | |  | `bzirk` |  |  |
| `StatisticsCurrency` |  | |  |  |  |  |
| `ProductCatalog` |  | |  | `wminr` |  |  |
| `RetsMgmtProcess` |  | |  |  |  |  |
| `NextCreditCheckDate` |  | |  |  |  |  |
| `BindingPeriodValidityStartDate` |  | |  |  |  |  |
| `BindingPeriodValidityEndDate` |  | |  |  |  |  |
| `HdrOrderProbabilityInPercent` |  | |  |  |  |  |
| `SalesContractSignedDate` |  | |  | `vuntdat` |  |  |
| `ContractPartnerCanclnDocDate` |  | |  | `vbedkue` |  |  |
| `NmbrOfSalesContractValdtyPerd` |  | |  | `vlaufz` |  |  |
| `SalesContractValidityPerdUnit` |  | |  | `vlauez` |  |  |
| `SalesContractValidityPerdCat` |  | |  | `vlaufk` |  |  |
| `SlsContractCanclnReqRcptDate` |  | |  | `veindat` |  |  |
| `RequestedCancellationDate` |  | |  | `vwundat` |  |  |
| `SalesContractCanclnParty` |  | |  | `vkuepar` |  |  |
| `SalesContractCanclnReason` |  | |  | `vkuegru` |  |  |
| `SalesContractCanclnProcedure` |  | |  | `vkuesch` |  |  |
| `EquipmentInstallationDate` |  | |  | `vinsdat` |  |  |
| `EquipmentDeliveryAccptcDate` |  | |  | `vabndat` |  |  |
| `EquipmentDismantlingDate` |  | |  | `vdemdat` |  |  |
| `SalesContractFollowUpAction` |  | |  | `vaktsch` |  |  |
| `SlsContractFollowUpActionDate` |  | |  | `vasda` |  |  |
| `CanclnDocByContrPartner` |  | |  | `vbelkue` |  |  |
| `MasterSalesContract` |  | |  |  |  |  |
| `SchedulingAgreementProfileCode` |  | |  |  |  |  |
| `DelivSchedTypeMRPRlvnceCode` |  | |  |  |  |  |
| `AgrmtValdtyStartDate` |  | |  |  |  |  |
| `AgrmtValdtyEndDate` |  | |  |  |  |  |
| `MatlUsageIndicator` |  | |  |  |  |  |
| `TotalNetAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `PricingDate` |  | |  | `prsdt` |  |  |
| `RetailPromotion` |  | |  | `waktion` |  |  |
| `PriceDetnExchangeRate` |  | |  | `cast(vbkd.kursk as kursk_not_converted preserving type)` |  |  |
| `SalesDocumentCondition` |  | |  |  |  |  |
| `SDPricingProcedure` |  | |  |  |  |  |
| `CustomerPriceGroup` |  | |  | `konda` |  |  |
| `PriceListType` |  | |  | `pltyp` |  |  |
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
| `ShippingType` |  | |  | `vsart` |  |  |
| `ReceivingPoint` |  | |  | `empst` |  |  |
| `ShippingCondition` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  | `inco1` |  |  |
| `IncotermsTransferLocation` |  | |  | `inco2` |  |  |
| `IncotermsLocation1` |  | |  | `inco2_l` |  |  |
| `IncotermsLocation2` |  | |  | `inco3_l` |  |  |
| `IncotermsVersion` |  | |  | `incov` |  |  |
| `CompleteDeliveryIsDefined` |  | |  |  |  |  |
| `OrderCombinationIsAllowed` |  | |  | `cast( vbkd.kzazu as vdm_sd_order_combination_ind preserving type )` |  |  |
| `DeliveryBlockReason` |  | |  |  |  |  |
| `FashionCancelDate` |  | |  |  |  |  |
| `BillingPlan` |  | |  | `fplnr` |  |  |
| `BillingDocumentDate` |  | |  | `fkdat` |  |  |
| `BillingCompanyCode` |  | |  |  |  |  |
| `HeaderBillingBlockReason` |  | |  |  |  |  |
| `SalesDocApprovalReason` |  | |  |  |  |  |
| `CustomerPaymentTerms` |  | |  | `zterm` |  |  |
| `PaymentMethod` |  | |  | `zlsch` |  |  |
| `FixedValueDate` |  | |  | `valdt` |  |  |
| `AdditionalValueDays` |  | |  | `valtg` |  |  |
| `ContractAccount` |  | |  | `vkont` |  |  |
| `FiscalYear` |  | |  | `gjahr` |  |  |
| `FiscalPeriod` |  | |  | `poper` |  |  |
| `ExchangeRateDate` |  | |  | `kursk_dat` |  |  |
| `ExchangeRateType` |  | |  |  |  |  |
| `AccountingExchangeRate` |  | |  | `kurrf` |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `CustomerAccountAssignmentGroup` |  | |  | `cast( vbkd.ktgrd as sd_account_assgmt_group_cust preserving type )` |  |  |
| `CostCenterBusinessArea` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `ControllingObject` |  | |  |  |  |  |
| `AssignmentReference` |  | |  |  |  |  |
| `PaymentPlan` |  | |  |  |  |  |
| `CustomerCreditAccount` |  | |  |  |  |  |
| `ControllingAreaCurrency` |  | |  |  |  |  |
| `ReleasedCreditAmount` |  | |  |  |  |  |
| `CreditBlockReleaseDate` |  | |  |  |  |  |
| `NextShippingDate` |  | |  |  |  |  |
| `ReferenceSDDocument` |  | |  |  |  |  |
| `AccountingDocExternalReference` |  | |  |  |  |  |
| `ReferenceSDDocumentCategory` |  | |  |  |  |  |
| `SalesItemProposalDescription` |  | |  |  |  |  |
| `SalesDocumentDescription` |  | |  |  |  |  |
| `CorrespncExternalReference` |  | |  |  |  |  |
| `CorrespncExtRefByShipToParty` |  | |  | `ihrez_e` |  |  |
| `EntProjTypeCustomerProject` |  | |  |  |  |  |
| `BusinessSolutionOrder` |  | |  |  |  |  |
| `SlsContrAutoAssgmtIDForSlsOrd` |  | |  |  |  |  |
| `SlsContrPrtnAuthznForRelOrd` |  | |  |  |  |  |
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
| `ContractManualCompletion` |  | |  |  |  |  |
| `OverallChmlCmplncStatus` |  | |  |  |  |  |
| `OverallDangerousGoodsStatus` |  | |  |  |  |  |
| `OverallSafetyDataSheetStatus` |  | |  |  |  |  |
| `SalesDocApprovalStatus` |  | |  |  |  |  |
| `ContractDownPaymentStatus` |  | |  |  |  |  |
| `OverallTrdCmplncEmbargoSts` |  | |  |  |  |  |
| `OvrlTrdCmplncSnctndListChkSts` |  | |  |  |  |  |
| `OvrlTrdCmplncLegalCtrlChkSts` |  | |  |  |  |  |
| `SlsDocOvrlSupplyBlockStatus` |  | |  |  |  |  |
| `DeliveryDateTypeRule` |  | |  |  |  |  |
| `OmniChnlSalesPromotionStatus` |  | |  |  |  |  |
| `AlternativePricingDate` |  | |  |  |  |  |
| `IsEUTriangularDeal` |  | |  |  |  |  |
| `_BusinessAreaText` | | ✓ | | | | |
| `_CostCenterBusinessAreaText` | | ✓ | | | | |
| `_CreditControlAreaText` | | ✓ | | | | |
| `_Item` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_StandardPartner` | | ✓ | | | | |
| `_PricingElement` | | ✓ | | | | |
| `_BillingPlan` | | ✓ | | | | |
| `_PrecedingProcFlowDoc` | | ✓ | | | | |
| `_SubsequentProcFlowDoc` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_CustPurOrdTypeByShipToParty` | | ✓ | | | | |
| `_SalesContractValidityPerdUnit` | | ✓ | | | | |
| `_SalesContractValidityPerdCat` | | ✓ | | | | |
| `_SalesContractCanclnParty` | | ✓ | | | | |
| `_SalesContractCanclnReason` | | ✓ | | | | |
| `_SalesContractFollowUpAction` | | ✓ | | | | |
| `_ShippingType` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_IncotermsVersion` | | ✓ | | | | |
| `_CustomerPaymentTerms` | | ✓ | | | | |
| `_CustomerAccountAssgmtGroup` | | ✓ | | | | |
| `_CustomerPriceGroup` | | ✓ | | | | |
| `_PriceListType` | | ✓ | | | | |
| `_SDDocumentCategory` | | ✓ | | | | |
| `_SalesDocumentType` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_OrganizationDivision` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_AdditionalCustomerGroup1` | | ✓ | | | | |
| `_AdditionalCustomerGroup2` | | ✓ | | | | |
| `_AdditionalCustomerGroup3` | | ✓ | | | | |
| `_AdditionalCustomerGroup4` | | ✓ | | | | |
| `_AdditionalCustomerGroup5` | | ✓ | | | | |
| `_CreditControlArea` | | ✓ | | | | |
| `_SDDocumentReason` | | ✓ | | | | |
| `_CustomerPurchaseOrderType` | | ✓ | | | | |
| `_StatisticsCurrency` | | ✓ | | | | |
| `_RetsMgmtProcess` | | ✓ | | | | |
| `_DelivSchedTypeMRPRlvnceCode` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_ShippingCondition` | | ✓ | | | | |
| `_DeliveryBlockReason` | | ✓ | | | | |
| `_BillingCompanyCode` | | ✓ | | | | |
| `_HeaderBillingBlockReason` | | ✓ | | | | |
| `_SalesDocApprovalReason` | | ✓ | | | | |
| `_ExchangeRateType` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_CostCenterBusinessArea` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_SDPricingProcedure` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_ControllingObject` | | ✓ | | | | |
| `_ReferenceSDDocumentCategory` | | ✓ | | | | |
| `_EngagementProjectItem` | | ✓ | | | | |
| `_SalesArea` | | ✓ | | | | |
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
| `_DownPaymentStatus` | | ✓ | | | | |
| `_OvrlTradeCmplncEmbargoStatus` | | ✓ | | | | |
| `_OvTrdCmplncSnctndListChkSts` | | ✓ | | | | |
| `_OvrlTrdCmplncLegalCtrlChkSts` | | ✓ | | | | |
| `_OmniChnlSalesPromotionStatus` | | ✓ | | | | |
| `_SlsDocOvrlSupplyBlockStatus` | | ✓ | | | | |
| `_CustomerCreditAccount` | | ✓ | | | | |
| `_ControllingAreaCurrency` | | ✓ | | | | |
| `_DeliveryDateTypeRule` | | ✓ | | | | |
| `_SolutionOrder` | | ✓ | | | | |
| `_TaxDepartureCountry` | | ✓ | | | | |
| `_VATRegistrationCountry` | | ✓ | | | | |
| `_SlsContrPrtnAuthznForOrd` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_CostCenterBusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_CreditControlAreaText` | `I_CreditControlAreaText` | [0..*] |
| `_Item` | `I_SalesDocumentItem` | [0..*] |
| `_Partner` | `I_SalesDocumentPartner` | [1..*] |
| `_StandardPartner` | `I_SalesDocumentStandardPartner` | [1..1] |
| `_PricingElement` | `I_SalesDocumentPricingElement` | [0..*] |
| `_BillingPlan` | `I_SalesDocumentBillingPlan` | [0..1] |
| `_PrecedingProcFlowDoc` | `I_SalesDocumentPrecdgProcFlow` | [0..*] |
| `_SubsequentProcFlowDoc` | `I_SalesDocumentSubsqntProcFlow` | [0..*] |
| `_CustomerGroup` | `I_CustomerGroup` | [0..1] |
| `_SalesDistrict` | `I_SalesDistrict` | [0..1] |
| `_CustPurOrdTypeByShipToParty` | `I_CustomerPurchaseOrderType` | [0..1] |
| `_SalesContractValidityPerdUnit` | `I_SalesContrValdtyPerdUnit` | [0..1] |
| `_SalesContractValidityPerdCat` | `I_SlsContractValidityPerdCat` | [0..1] |
| `_SalesContractCanclnParty` | `I_SalesContractCanclnParty` | [0..1] |
| `_SalesContractCanclnReason` | `I_SalesContractCanclnReason` | [0..1] |
| `_SalesContractFollowUpAction` | `I_SalesContractFollowUpAction` | [0..1] |
| `_ShippingType` | `I_ShippingType` | [0..1] |
| `_IncotermsClassification` | `I_IncotermsClassification` | [0..1] |
| `_IncotermsVersion` | `I_IncotermsVersion` | [0..1] |
| `_CustomerPaymentTerms` | `I_CustomerPaymentTerms` | [0..1] |
| `_CustomerAccountAssgmtGroup` | `I_CustomerAccountAssgmtGroup` | [0..1] |
| `_CustomerPriceGroup` | `I_CustomerPriceGroup` | [0..1] |
| `_PriceListType` | `I_PriceListType` | [0..1] |
| `_Extension` | `E_SalesDocumentBasic` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sales Document'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: [ '_CreatedByUser', '_LastChangedByUser', '_BusinessAreaText', '_CostCenterBusinessAreaText', '_CreditControlAreaText']
}
@AbapCatalog: {
  sqlViewName: 'ISDSALESDOC',
  compiler.compareFilter: true
}
@ObjectModel: {
   compositionRoot: true,
   representativeKey: 'SalesDocument',
   sapObjectNodeType.name: 'SalesDocument',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #L
   },
   supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
   modelingPattern: [ #ANALYTICAL_DIMENSION ]
}
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true

define view I_SalesDocument
  as select from           I_SalesDocumentBasic as SalesDocumentBasic
    left outer to one join vbkd on  SalesDocumentBasic.SalesDocument = vbkd.vbeln
                                and vbkd.posnr                       = '000000'
    left outer to one join veda on  SalesDocumentBasic.SalesDocument = veda.vbeln
                                and veda.vposn                       = '000000'
  //Association
  association [0..*] to I_BusinessAreaText             as _BusinessAreaText              on  $projection.BusinessArea = _BusinessAreaText.BusinessArea
  association [0..*] to I_BusinessAreaText             as _CostCenterBusinessAreaText    on  $projection.CostCenterBusinessArea = _CostCenterBusinessAreaText.BusinessArea
  association [0..*] to I_CreditControlAreaText        as _CreditControlAreaText         on  $projection.CreditControlArea = _CreditControlAreaText.CreditControlArea

  association [0..*] to I_SalesDocumentItem            as _Item                          on  $projection.SalesDocument = _Item.SalesDocument
  association [1..*] to I_SalesDocumentPartner         as _Partner                       on  $projection.SalesDocument = _Partner.SalesDocument
  association [1..1] to I_SalesDocumentStandardPartner as _StandardPartner               on  $projection.SalesDocument = _StandardPartner.SalesDocument
  association [0..*] to I_SalesDocumentPricingElement  as _PricingElement                on  $projection.SalesDocument = _PricingElement.SalesDocument
  association [0..1] to I_SalesDocumentBillingPlan     as _BillingPlan                   on  $projection.SalesDocument = _BillingPlan.SalesDocument
                                                                                         and $projection.BillingPlan   = _BillingPlan.BillingPlan
  association [0..*] to I_SalesDocumentPrecdgProcFlow  as _PrecedingProcFlowDoc          on  _PrecedingProcFlowDoc.SalesDocument = $projection.SalesDocument

  association [0..*] to I_SalesDocumentSubsqntProcFlow as _SubsequentProcFlowDoc         on  _SubsequentProcFlowDoc.SalesDocument = $projection.SalesDocument

  association [0..1] to I_CustomerGroup                as _CustomerGroup                 on  $projection.CustomerGroup = _CustomerGroup.CustomerGroup
  association [0..1] to I_SalesDistrict                as _SalesDistrict                 on  $projection.SalesDistrict = _SalesDistrict.SalesDistrict
  association [0..1] to I_CustomerPurchaseOrderType    as _CustPurOrdTypeByShipToParty   on  $projection.CustPurOrdTypeByShipToParty = _CustPurOrdTypeByShipToParty.CustomerPurchaseOrderType
  association [0..1] to I_SalesContrValdtyPerdUnit     as _SalesContractValidityPerdUnit on  $projection.SalesContractValidityPerdUnit = _SalesContractValidityPerdUnit.SalesContractValidityPerdUnit
  association [0..1] to I_SlsContractValidityPerdCat   as _SalesContractValidityPerdCat  on  $projection.SalesContractValidityPerdCat = _SalesContractValidityPerdCat.SalesContractValidityPerdCat
  association [0..1] to I_SalesContractCanclnParty     as _SalesContractCanclnParty      on  $projection.SalesContractCanclnParty = _SalesContractCanclnParty.SalesContractCanclnParty
  association [0..1] to I_SalesContractCanclnReason    as _SalesContractCanclnReason     on  $projection.SalesContractCanclnReason = _SalesContractCanclnReason.SalesContractCanclnReason
  association [0..1] to I_SalesContractFollowUpAction  as _SalesContractFollowUpAction   on  $projection.SalesContractFollowUpAction = _SalesContractFollowUpAction.SalesContractFollowUpAction
  association [0..1] to I_ShippingType                 as _ShippingType                  on  $projection.ShippingType = _ShippingType.ShippingType
  association [0..1] to I_IncotermsClassification      as _IncotermsClassification       on  $projection.IncotermsClassification = _IncotermsClassification.IncotermsClassification
  association [0..1] to I_IncotermsVersion             as _IncotermsVersion              on  $projection.IncotermsVersion = _IncotermsVersion.IncotermsVersion
  association [0..1] to I_CustomerPaymentTerms         as _CustomerPaymentTerms          on  $projection.CustomerPaymentTerms = _CustomerPaymentTerms.CustomerPaymentTerms
  association [0..1] to I_CustomerAccountAssgmtGroup   as _CustomerAccountAssgmtGroup    on  $projection.CustomerAccountAssignmentGroup = _CustomerAccountAssgmtGroup.CustomerAccountAssignmentGroup
  association [0..1] to I_CustomerPriceGroup           as _CustomerPriceGroup            on  $projection.CustomerPriceGroup = _CustomerPriceGroup.CustomerPriceGroup
  association [0..1] to I_PriceListType                as _PriceListType                 on  $projection.PriceListType = _PriceListType.PriceListType

  //Extensibility
  association [0..1] to E_SalesDocumentBasic           as _Extension                     on  SalesDocumentBasic.SalesDocument = _Extension.SalesDocument

{
      //Key
  key SalesDocument,

      //Category
      @ObjectModel.foreignKey.association: '_SDDocumentCategory'
      SDDocumentCategory,
      @ObjectModel.foreignKey.association: '_SalesDocumentType'
      SalesDocumentType,
      SalesDocumentProcessingType,

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
      LastCustomerContactDate,
      SenderBusinessSystemName,
      ExternalDocumentID,
      ExternalDocLastChangeDateTime,

      //Organization
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
      vbkd.kdgrp                                                          as CustomerGroup,
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
      cast( vbkd.podkz as vdm_sd_proof_of_delivery_rlvt preserving type ) as SlsDocIsRlvtForProofOfDeliv,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CreditControlAreaStdVH',
                     element: 'CreditControlArea' }
        }]
      @ObjectModel.text.association: '_CreditControlAreaText'
      @ObjectModel.foreignKey.association: '_CreditControlArea'
      CreditControlArea,
      CustomerRebateAgreement,
      SalesDocumentDate,
      cast( vbkd.fbuda as vdm_sd_services_rendered_date preserving type ) as ServicesRenderedDate,
      @ObjectModel.foreignKey.association: '_SDDocumentReason'
      SDDocumentReason,
      vbkd.bstkd                                                          as PurchaseOrderByCustomer,
      cast (vbkd.bstkd_e as sd_purchase_order_by_shipto preserving type ) as PurchaseOrderByShipToParty,
      @Analytics.internalName: #LOCAL
      cast(vbkd.bstdk_e as sd_po_date_by_shipto preserving type )         as CustPurOrdDateByShipToParty,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CustPurOrdTypeByShipToParty'
      cast (vbkd.bsark_e as sd_po_type_by_shipto preserving type )        as CustPurOrdTypeByShipToParty,

      SDDocumentCollectiveNumber,
      @ObjectModel.foreignKey.association: '_CustomerPurchaseOrderType'
      CustomerPurchaseOrderType,
      CustomerPurchaseOrderDate,
      CustomerPurchaseOrderSuplmnt,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      vbkd.bzirk                                                          as SalesDistrict,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_StatisticsCurrency'
      StatisticsCurrency,
      vbkd.wminr                                                          as ProductCatalog,
      //--[ GENERATED:012:GlBfhyFV7kY4hGXbseDAyW
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_RetsMgmtProcessStdVH',
                     element: 'RetsMgmtProcess' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_RetsMgmtProcess'
      RetsMgmtProcess,
      NextCreditCheckDate,

      //Quotation
      BindingPeriodValidityStartDate,
      BindingPeriodValidityEndDate,
      HdrOrderProbabilityInPercent,

      //Contract
      veda.vuntdat                                                        as SalesContractSignedDate,
      veda.vbedkue                                                        as ContractPartnerCanclnDocDate,
      veda.vlaufz                                                         as NmbrOfSalesContractValdtyPerd,
      @ObjectModel.foreignKey.association: '_SalesContractValidityPerdUnit'
      veda.vlauez                                                         as SalesContractValidityPerdUnit,
      @ObjectModel.foreignKey.association: '_SalesContractValidityPerdCat'
      veda.vlaufk                                                         as SalesContractValidityPerdCat,
      veda.veindat                                                        as SlsContractCanclnReqRcptDate,
      veda.vwundat                                                        as RequestedCancellationDate,
      @ObjectModel.foreignKey.association: '_SalesContractCanclnParty'
      veda.vkuepar                                                        as SalesContractCanclnParty,
      @ObjectModel.foreignKey.association: '_SalesContractCanclnReason'
      veda.vkuegru                                                        as SalesContractCanclnReason,
      veda.vkuesch                                                        as SalesContractCanclnProcedure,
      veda.vinsdat                                                        as EquipmentInstallationDate,
      veda.vabndat                                                        as EquipmentDeliveryAccptcDate,
      veda.vdemdat                                                        as EquipmentDismantlingDate,
      @ObjectModel.foreignKey.association: '_SalesContractFollowUpAction'
      veda.vaktsch                                                        as SalesContractFollowUpAction,
      veda.vasda                                                          as SlsContractFollowUpActionDate,
      veda.vbelkue                                                        as CanclnDocByContrPartner,
      @Analytics.internalName: #LOCAL
      MasterSalesContract,

      //SchedulingAgreement
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'DelivSchedTypeMRPRlvnceCode'
      SchedulingAgreementProfileCode,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_DelivSchedTypeMRPRlvnceCode'
      DelivSchedTypeMRPRlvnceCode,
      AgrmtValdtyStartDate,
      AgrmtValdtyEndDate,

      //Material Usage Indicator
      MatlUsageIndicator,

      //Pricing
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      TotalNetAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      TransactionCurrency,
      vbkd.prsdt                                                          as PricingDate,
      vbkd.waktion                                                        as RetailPromotion,
      cast(vbkd.kursk as kursk_not_converted preserving type)             as PriceDetnExchangeRate,
      SalesDocumentCondition,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SDPricingProcedure'
      SDPricingProcedure,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CustomerPriceGroup'
      vbkd.konda                                                          as CustomerPriceGroup,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PriceListType'
      vbkd.pltyp                                                          as PriceListType,

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
      @ObjectModel.foreignKey.association: '_ShippingType'
      vbkd.vsart                                                          as ShippingType,
      vbkd.empst                                                          as ReceivingPoint,
      @ObjectModel.foreignKey.association: '_ShippingCondition'
      ShippingCondition,
      @ObjectModel.foreignKey.association: '_IncotermsClassification'
      vbkd.inco1                                                          as IncotermsClassification,
      vbkd.inco2                                                          as IncotermsTransferLocation,
      vbkd.inco2_l                                                        as IncotermsLocation1,
      vbkd.inco3_l                                                        as IncotermsLocation2,
      @ObjectModel.foreignKey.association: '_IncotermsVersion'
      vbkd.incov                                                          as IncotermsVersion,
      CompleteDeliveryIsDefined,
      cast( vbkd.kzazu as vdm_sd_order_combination_ind preserving type )  as OrderCombinationIsAllowed,
      @ObjectModel.foreignKey.association: '_DeliveryBlockReason'
      DeliveryBlockReason,

      //Fashion
      FashionCancelDate,

      //Billing
      //cast( vbkd.fplnr as tds_bplan_id preserving type )      as BillingPlan,
      vbkd.fplnr                                                          as BillingPlan,
      vbkd.fkdat                                                          as BillingDocumentDate,

      //--[ GENERATED:012:GlBfhyFV7kY4hGXbseDAyW
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_BillingCompanyCode'
      BillingCompanyCode,
      @ObjectModel.foreignKey.association: '_HeaderBillingBlockReason'
      HeaderBillingBlockReason,

      //Approval Management
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SalesDocApprovalReason'
      SalesDocApprovalReason,

      //Payment
      @ObjectModel.foreignKey.association: '_CustomerPaymentTerms'
      vbkd.zterm                                                          as CustomerPaymentTerms,
      vbkd.zlsch                                                          as PaymentMethod,
      vbkd.valdt                                                          as FixedValueDate,
      vbkd.valtg                                                          as AdditionalValueDays,

      //Accounting
      vbkd.vkont                                                          as ContractAccount,
      vbkd.gjahr                                                          as FiscalYear,
      vbkd.poper                                                          as FiscalPeriod,
      vbkd.kursk_dat                                                      as ExchangeRateDate,
      @ObjectModel.foreignKey.association: '_ExchangeRateType'
      ExchangeRateType,
      vbkd.kurrf                                                          as AccountingExchangeRate,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_BusinessAreaStdVH',
                     element: 'BusinessArea' }
        }]
      @ObjectModel.text.association: '_BusinessAreaText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_BusinessArea'
      BusinessArea,
      @ObjectModel.foreignKey.association: '_CustomerAccountAssgmtGroup'
      cast( vbkd.ktgrd as sd_account_assgmt_group_cust preserving type )  as CustomerAccountAssignmentGroup,
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
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,
      OrderID,
      //--[ GENERATED:012:GlBfhyFV7kY4hGXbseDAyW
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ControllingObjectStdVH',
                     element: 'ControllingObject' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ControllingObject'
      ControllingObject,
      AssignmentReference,
      PaymentPlan,

      //Credit Block
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Customer_VH',
                     element: 'Customer' }
        }]
      @ObjectModel.foreignKey.association: '_CustomerCreditAccount'
      CustomerCreditAccount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ControllingAreaCurrency'
      ControllingAreaCurrency,
      @Semantics.amount.currencyCode: 'ControllingAreaCurrency'
      ReleasedCreditAmount,
      CreditBlockReleaseDate,
      NextShippingDate,

      //Reference
      ReferenceSDDocument,
      @Analytics.internalName: #LOCAL
      AccountingDocExternalReference,

      @ObjectModel.foreignKey.association: '_ReferenceSDDocumentCategory'
      ReferenceSDDocumentCategory,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'SalesDocumentDescription'
      SalesItemProposalDescription,
      @Analytics.internalName: #LOCAL
      SalesDocumentDescription,
      CorrespncExternalReference,
      vbkd.ihrez_e                                                        as CorrespncExtRefByShipToParty,
      EntProjTypeCustomerProject,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_BusinessSolutionOrderStdVH',
                     element: 'BusinessSolutionOrder' }
        }]
      @ObjectModel.foreignKey.association: '_SolutionOrder'
      @Analytics.internalName: #LOCAL
      BusinessSolutionOrder,

      SlsContrAutoAssgmtIDForSlsOrd,
      SlsContrPrtnAuthznForRelOrd,
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
      ContractManualCompletion,
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
      ContractDownPaymentStatus,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_OvrlTradeCmplncEmbargoStatus'
      OverallTrdCmplncEmbargoSts,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_OvTrdCmplncSnctndListChkSts'
      OvrlTrdCmplncSnctndListChkSts,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_OvrlTrdCmplncLegalCtrlChkSts'
      OvrlTrdCmplncLegalCtrlChkSts,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SlsDocOvrlSupplyBlockStatus'
      SlsDocOvrlSupplyBlockStatus,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_DeliveryDateTypeRule'
      DeliveryDateTypeRule,
      @API.element.releaseState: #DEPRECATED
      OmniChnlSalesPromotionStatus,
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
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _BillingPlan,
      _SDDocumentCategory,
      _SalesDocumentType,
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
      _CustPurOrdTypeByShipToParty,
      _SalesDistrict,
      _StatisticsCurrency,
      _RetsMgmtProcess,
      _SalesContractValidityPerdUnit,
      _SalesContractValidityPerdCat,
      _SalesContractCanclnParty,
      _SalesContractCanclnReason,
      _SalesContractFollowUpAction,
      _DelivSchedTypeMRPRlvnceCode,
      _TransactionCurrency,
      _ShippingType,
      _ShippingCondition,
      _IncotermsClassification,
      _IncotermsVersion,
      _DeliveryBlockReason,
      _BillingCompanyCode,
      _HeaderBillingBlockReason,
      _SalesDocApprovalReason,
      _CustomerPaymentTerms,
      _ExchangeRateType,
      _BusinessArea,
      _CustomerAccountAssgmtGroup,
      _CostCenterBusinessArea,
      _CostCenter,
      _SDPricingProcedure,
      _CustomerPriceGroup,
      _PriceListType,
      _ControllingArea,
      _ControllingObject,
      _ReferenceSDDocumentCategory,
      _EngagementProjectItem,
      _SalesArea,

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
      _DownPaymentStatus,
      _OvrlTradeCmplncEmbargoStatus,
      _OvTrdCmplncSnctndListChkSts,
      _OvrlTrdCmplncLegalCtrlChkSts,
      @API.element.releaseState: #DEPRECATED
      _OmniChnlSalesPromotionStatus,
      _SlsDocOvrlSupplyBlockStatus,
      @Consumption.hidden: true
      _BusinessAreaText,
      @Consumption.hidden: true
      _CostCenterBusinessAreaText,
      @Consumption.hidden: true
      _CreditControlAreaText,
      _CustomerCreditAccount,
      _ControllingAreaCurrency,
      _DeliveryDateTypeRule,
      _SolutionOrder,
      _TaxDepartureCountry,
      _VATRegistrationCountry,
      _PrecedingProcFlowDoc,
      _SubsequentProcFlowDoc,
      _SlsContrPrtnAuthznForOrd
};
```
