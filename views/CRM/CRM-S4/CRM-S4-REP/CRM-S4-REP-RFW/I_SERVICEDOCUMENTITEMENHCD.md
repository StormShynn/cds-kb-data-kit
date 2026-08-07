---
name: I_SERVICEDOCUMENTITEMENHCD
description: Service DocumentUMENTITEMENHCD
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - service
  - document
  - item-level
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEDOCUMENTITEMENHCD

**Service DocumentUMENTITEMENHCD**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceObjectType` | ✓ | |  |  |  |  |
| `ServiceDocument` | ✓ | |  |  |  |  |
| `ServiceDocumentItem` | ✓ | |  |  |  |  |
| `ServiceDocumentDescription` |  | |  |  |  |  |
| `ServiceDocumentType` |  | |  |  |  |  |
| `ServiceDocumentItemPriority` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `ServicesRenderedDate` |  | |  |  |  |  |
| `SrvcDocItmPostingDateTime` |  | |  |  |  |  |
| `SrvcDocItmValdtyStartDateTime` |  | |  |  |  |  |
| `SrvcDocItmValdtyEndDateTime` |  | |  |  |  |  |
| `ServiceDocumentItemUUID` |  | |  |  |  |  |
| `ServiceDocumentItemCharUUID` |  | |  |  |  |  |
| `ServiceDocumentItemObjectType` |  | |  |  |  |  |
| `ServiceDocumentUUID` |  | |  |  |  |  |
| `ParentServiceDocumentItemUUID` |  | |  |  |  |  |
| `ServiceDocumentItemDescription` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `ServiceDocumentTemplateType` |  | |  |  |  |  |
| `ServiceDocItemCreationDateTime` |  | |  |  |  |  |
| `ServiceDocItemChangedDateTime` |  | |  |  |  |  |
| `ServiceDocItemCreationDate` |  | |  | `cast( tstmp_to_dats( ServiceDocItemCreationDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as crms4_created_on preserving type )` |  |  |
| `ServiceDocItemChangedDate` |  | |  | `cast( tstmp_to_dats( ServiceDocItemChangedDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as crms4_changed_on preserving type )` |  |  |
| `ServiceDocItemCreatedByUser` |  | |  |  |  |  |
| `ServiceDocItemChangedByUser` |  | |  |  |  |  |
| `OriginallyRequestedProduct` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `ServiceDocItemCategory` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `ResponsibleCostCenter` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `ProfitCenterDeterminationDate` |  | |  |  |  |  |
| `RefBusinessSolutionOrder` |  | |  |  |  |  |
| `RefBusinessSolutionOrderItem` |  | |  |  |  |  |
| `BusSolnOrdItemBundleProduct` |  | |  |  |  |  |
| `BusSolnOrdItemBundleItem` |  | |  |  |  |  |
| `SrvcDocItmRequestedQuantity` |  | |  |  |  |  |
| `InvoiceAmountInInvoiceDocCrcy` |  | |  |  |  |  |
| `InvoiceQuantity` |  | |  |  |  |  |
| `SrvcDocItmDeliveredQuantity` |  | |  |  |  |  |
| `SrvcDocItmReleasedQuantity` |  | |  |  |  |  |
| `CumulativeConfirmedQuantity` |  | |  |  |  |  |
| `SrvcDocItmReldAmtInTransCrcy` |  | |  |  |  |  |
| `SrvcDocItemCumulatedNetAmount` |  | |  |  |  |  |
| `SrvcDocItmOrdToBaseQtyNmrtr` |  | |  |  |  |  |
| `SrvcDocItmOrdToBaseQtyDnmntr` |  | |  |  |  |  |
| `OrderToBaseQuantityExponent` |  | |  |  |  |  |
| `ServiceDocItemQuantityUnit` |  | |  |  |  |  |
| `SrvcDocItemBaseQuantityUnit` |  | |  |  |  |  |
| `BillingDateTime` |  | |  |  |  |  |
| `BillingDocCreationDateTime` |  | |  |  |  |  |
| `BillingPlanTimeZone` |  | |  |  |  |  |
| `BillingPriceSourceName` |  | |  |  |  |  |
| `DocumentDescription` |  | |  | `cast( '' as abap.char( 16 ) )` |  |  |
| `SoldToPartyCountry` |  | |  |  |  |  |
| `SoldToPartyRegion` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `ServiceTeam` |  | |  |  |  |  |
| `ResponsibleEmployee` |  | |  |  |  |  |
| `ServiceEmployee` |  | |  |  |  |  |
| `ContactPerson` |  | |  |  |  |  |
| `PayerParty` |  | |  |  |  |  |
| `BillToParty` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `ServiceDocumentItemStatus` |  | |  |  |  |  |
| `ServiceDocumentItemHasError` |  | |  |  |  |  |
| `SrvcDocItmIsReleasedForBilling` |  | |  |  |  |  |
| `ServiceDocItemBillingStatus` |  | |  |  |  |  |
| `ServiceDocumentItemIsOpen` |  | |  |  |  |  |
| `SrvcDocItmDeliveryStatus` |  | |  |  |  |  |
| `SrvcDocItmGoodsIssueStatus` |  | |  |  |  |  |
| `ServiceDocumentItemIsReleased` |  | |  |  |  |  |
| `ServiceDocumentItemIsRejected` |  | |  |  |  |  |
| `SrvcDocItemIsWithdrawn` |  | |  |  |  |  |
| `SrvcDocItemConcurStatus` |  | |  |  |  |  |
| `ServiceDocumentItemIsQuotation` |  | |  |  |  |  |
| `SrvcDocItemTransferStatus` |  | |  |  |  |  |
| `MaintSrvcOrdExecutionStatus` |  | |  |  |  |  |
| `SrvcDocItemExecutionStatus` |  | |  |  |  |  |
| `ServiceDocumentItemQuantity` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `StatisticsCurrency` |  | |  |  |  |  |
| `ExchangeRateType` |  | |  |  |  |  |
| `ExchangeRateDate` |  | |  |  |  |  |
| `AccountingExchangeRate` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `SrvcSEPAMandateRelevance` |  | |  |  |  |  |
| `SEPAMandate` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `BillableControl` |  | |  |  |  |  |
| `VATRegistrationCountry` |  | |  |  |  |  |
| `ProductTaxClassification1` |  | |  |  |  |  |
| `ProductTaxClassification2` |  | |  |  |  |  |
| `ProductTaxClassification3` |  | |  |  |  |  |
| `ProductTaxClassification4` |  | |  |  |  |  |
| `ProductTaxClassification5` |  | |  |  |  |  |
| `ProductTaxClassification6` |  | |  |  |  |  |
| `ProductTaxClassification7` |  | |  |  |  |  |
| `ProductTaxClassification8` |  | |  |  |  |  |
| `ProductTaxClassification9` |  | |  |  |  |  |
| `ServiceDocumentItemNetAmount` |  | |  |  |  |  |
| `ServiceDocumentItemTaxAmount` |  | |  |  |  |  |
| `ServiceDocItemGrossAmount` |  | |  |  |  |  |
| `ServiceDocumentItemNetPrice` |  | |  |  |  |  |
| `BillingBlockReason` |  | |  |  |  |  |
| `SrvcDocItmBillingRelevance` |  | |  |  |  |  |
| `DynItemProcessorPrfl` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `SrvcMaterialPricingGroup` |  | |  |  |  |  |
| `MaterialPricingGroup_2` |  | |  |  |  |  |
| `ProductGroup1` |  | |  |  |  |  |
| `ProductGroup2` |  | |  |  |  |  |
| `ProductGroup3` |  | |  |  |  |  |
| `ProductGroup4` |  | |  |  |  |  |
| `ProductGroup5` |  | |  |  |  |  |
| `ProductHierarchy` |  | |  |  |  |  |
| `Industry` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `PurchaseOrderByShipToParty` |  | |  |  |  |  |
| `ServiceDocItemRejectionReason` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `AdditionalCustomerGroup1` |  | |  |  |  |  |
| `AdditionalCustomerGroup2` |  | |  |  |  |  |
| `AdditionalCustomerGroup3` |  | |  |  |  |  |
| `AdditionalCustomerGroup4` |  | |  |  |  |  |
| `AdditionalCustomerGroup5` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `ServiceSchema1Category1UUID` |  | |  |  |  |  |
| `ServiceSchema1Category2UUID` |  | |  |  |  |  |
| `ServiceSchema1Category3UUID` |  | |  |  |  |  |
| `ServiceSchema1Category4UUID` |  | |  |  |  |  |
| `ServiceSchema1Category5UUID` |  | |  |  |  |  |
| `ServiceSchema1Category6UUID` |  | |  |  |  |  |
| `ServiceSchema1Category7UUID` |  | |  |  |  |  |
| `ServiceSchema1Category8UUID` |  | |  |  |  |  |
| `ServiceSchema1Category9UUID` |  | |  |  |  |  |
| `ServiceSchema1Category10UUID` |  | |  |  |  |  |
| `SrvcCatztnSchema1` |  | |  |  |  |  |
| `SrvcCatztnSchemaCategory1` |  | |  |  |  |  |
| `ServiceSchema2Category1UUID` |  | |  |  |  |  |
| `ServiceSchema2Category2UUID` |  | |  |  |  |  |
| `ServiceSchema2Category3UUID` |  | |  |  |  |  |
| `ServiceSchema2Category4UUID` |  | |  |  |  |  |
| `ServiceSchema2Category5UUID` |  | |  |  |  |  |
| `ServiceSchema2Category6UUID` |  | |  |  |  |  |
| `ServiceSchema2Category7UUID` |  | |  |  |  |  |
| `ServiceSchema2Category8UUID` |  | |  |  |  |  |
| `ServiceSchema2Category9UUID` |  | |  |  |  |  |
| `ServiceSchema2Category10UUID` |  | |  |  |  |  |
| `SrvcCatztnSchema2` |  | |  |  |  |  |
| `SrvcCatztnSchemaCategory2` |  | |  |  |  |  |
| `SettlementPeriodRuleUUID` |  | |  |  |  |  |
| `BillingPlanBillingDateRuleUUID` |  | |  |  |  |  |
| `BillingPlanPriceDateRule` |  | |  |  |  |  |
| `BillingPlanIsFinalized` |  | |  |  |  |  |
| `SalesOrganizationOrgUnitID` |  | |  |  |  |  |
| `SalesOfficeOrgUnitID` |  | |  |  |  |  |
| `SalesGroupOrgUnitID` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `ResponsibleSalesOrganization` |  | |  |  |  |  |
| `ServiceOrganization` |  | |  |  |  |  |
| `ResponsibleServiceOrganization` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `RespyMgmtServiceTeam` |  | |  |  |  |  |
| `EnterpriseServiceOrganization` |  | |  |  |  |  |
| `EnterpriseProjectServiceOrg` |  | |  |  |  |  |
| `RequestedServiceStartDateTime` |  | |  |  |  |  |
| `RequestedServiceEndDateTime` |  | |  |  |  |  |
| `ServiceContrItemStartDateTime` |  | |  |  |  |  |
| `ServiceContrItemEndDateTime` |  | |  |  |  |  |
| `RequestedServiceStartDate` |  | |  | `tstmp_to_dats( RequestedServiceStartDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' )` |  |  |
| `RequestedServiceEndDate` |  | |  | `tstmp_to_dats( RequestedServiceEndDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' )` |  |  |
| `ServiceContractItemStartDate` |  | |  | `tstmp_to_dats( ServiceContrItemStartDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' )` |  |  |
| `ServiceContractItemEndDate` |  | |  | `tstmp_to_dats( ServiceContrItemEndDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' )` |  |  |
| `ServiceFirstResponseByDateTime` |  | |  |  |  |  |
| `ServiceFirstResponseByDate` |  | |  | `tstmp_to_dats( ServiceFirstResponseByDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' )` |  |  |
| `SrvcDocItemSLADueByDateTime` |  | |  |  |  |  |
| `SrvcDocItemSLADueByDate` |  | |  | `tstmp_to_dats( SrvcDocItemSLADueByDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' )` |  |  |
| `ActualServiceStartDateTime` |  | |  |  |  |  |
| `ActualServiceEndDateTime` |  | |  |  |  |  |
| `SrvcContrItemRnwlDuration` |  | |  |  |  |  |
| `SrvcContrItemRnwlDurationUnit` |  | |  |  |  |  |
| `SrvcContrItemExtensionDuration` |  | |  |  |  |  |
| `SrvcContrItemExtnDurationUnit` |  | |  |  |  |  |
| `PlannedServiceStartDateTime` |  | |  |  |  |  |
| `PlannedServiceEndDateTime` |  | |  |  |  |  |
| `PlannedServiceStartDate` |  | |  | `tstmp_to_dats( PlannedServiceStartDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' )` |  |  |
| `PlannedServiceEndDate` |  | |  | `tstmp_to_dats( PlannedServiceEndDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' )` |  |  |
| `SrvcDocItmTmeSliceStrtDteTme` |  | |  |  |  |  |
| `SrvcDocItmTmeSliceEndDteTme` |  | |  |  |  |  |
| `SrvcContrItemRenewalDateTime` |  | |  |  |  |  |
| `ActualServiceDuration` |  | |  |  |  |  |
| `ActualServiceDurationUnit` |  | |  |  |  |  |
| `ServiceWorkDuration` |  | |  |  |  |  |
| `ServiceWorkDuration_2` |  | |  |  |  |  |
| `ServiceWorkDurationUnit` |  | |  |  |  |  |
| `SrvcOrderConfirmationRelevance` |  | |  |  |  |  |
| `ServiceTransactionChargeType` |  | |  |  |  |  |
| `SrvcTransactionValuationType` |  | |  |  |  |  |
| `ResponseProfile` |  | |  |  |  |  |
| `ServiceProfile` |  | |  |  |  |  |
| `ServiceDuration` |  | |  |  |  |  |
| `ServiceDurationUnit` |  | |  |  |  |  |
| `TimeSheetOvertimeCategory` |  | |  |  |  |  |
| `MasterWarranty` |  | |  |  |  |  |
| `ContractAccount` |  | |  |  |  |  |
| `ItemOrderProbabilityInPercent` |  | |  |  |  |  |
| `QuotationIsAccepted` |  | |  |  |  |  |
| `ConfigurationNumber` |  | |  |  |  |  |
| `IncotermsPart1` |  | |  |  |  |  |
| `IncotermsPart2` |  | |  |  |  |  |
| `DeliveryPriority` |  | |  |  |  |  |
| `OrderCombinationIsAllowed` |  | |  |  |  |  |
| `PartialDeliveryIsAllowed` |  | |  |  |  |  |
| `CABillgCycle` |  | |  |  |  |  |
| `RevenueAccountingReference` |  | |  |  |  |  |
| `RevenueAccountingRefType` |  | |  |  |  |  |
| `ItemGrossWeight` |  | |  |  |  |  |
| `ItemNetWeight` |  | |  |  |  |  |
| `ItemWeightUnit` |  | |  |  |  |  |
| `ItemVolume` |  | |  |  |  |  |
| `ItemVolumeUnit` |  | |  |  |  |  |
| `MaterialPricingGroup` |  | |  |  |  |  |
| `CustomerPriceGroup` |  | |  |  |  |  |
| `DeliveryGroup` |  | |  |  |  |  |
| `DeliveryBlockReason` |  | |  |  |  |  |
| `RequestedDeliveryUTCDateTime` |  | |  | `RequestedDeliveryDateTime` |  |  |
| `ErlstConfirmedDeliveryDateTime` |  | |  |  |  |  |
| `LtstConfirmedDeliveryDateTime` |  | |  |  |  |  |
| `RequestedDeliveryDate` |  | |  | `tstmp_to_dats( RequestedDeliveryDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' )` |  |  |
| `SubscrpnOrdProdSelType` |  | |  |  |  |  |
| `SubscriptionContract` |  | |  |  |  |  |
| `SrvcTransChangeProcess` |  | |  |  |  |  |
| `SrvcTransChangeProcessType` |  | |  |  |  |  |
| `SrvcTransChgProcSourceItemUUID` |  | |  |  |  |  |
| `CustMgmtMasterAgreement` |  | |  |  |  |  |
| `CustMgmtMstrAgrmtItem` |  | |  |  |  |  |
| `SubscrpnContrActivationStatus` |  | |  |  |  |  |
| `SubscrpnContrTimeSliceStatus` |  | |  |  |  |  |
| `SharingContractID` |  | |  |  |  |  |
| `CrsCatalogMappingVersionNumber` |  | |  |  |  |  |
| `CustMgmtMstrAgrmtParentItem` |  | |  |  |  |  |
| `SubscrpnContractSharingGroupID` |  | |  |  |  |  |
| `CAPartnerSettlementRule` |  | |  |  |  |  |
| `ChangeProcessGroup` |  | |  |  |  |  |
| `BusSolutionQtnItemIsPhased` |  | |  |  |  |  |
| `BusSolnQtnItmPhasedPrdcssrItem` |  | |  |  |  |  |
| `SubscriptionContractItem` |  | |  |  |  |  |
| `SrvcDocItemWithdrawalReason` |  | |  |  |  |  |
| `SrvcDocItemRefundType` |  | |  |  |  |  |
| `SrvcDocItmRecrrgChrgNetAmount` |  | |  |  |  |  |
| `SubscrpnContrTrmsAreSpecified` |  | |  |  |  |  |
| `MidBillgCycExprtnIsAllowed` |  | |  |  |  |  |
| `SrvcDocItmRecrrgChrgTaxAmount` |  | |  |  |  |  |
| `SrvcDocItmRecrrgChrgGrossAmt` |  | |  |  |  |  |
| `SrvcDocItmRecrrgChrgDuration` |  | |  |  |  |  |
| `SrvcDocItmRecrrgChrgDurnUnit` |  | |  |  |  |  |
| `SubscriptionContractReference` |  | |  |  |  |  |
| `SubscriptionBillingCycle` |  | |  |  |  |  |
| `SubscrpnBillgRatePlanCharUUID` |  | |  |  |  |  |
| `SubscriptionContractExternalID` |  | |  |  |  |  |
| `SbscrShContrSvTrMtAgrItmUUID` |  | |  |  |  |  |
| `SbscrShContrSvTrMtAgrItmCstPrd` |  | |  |  |  |  |
| `SvTrMtAgrItmIsFxdConfign` |  | |  |  |  |  |
| `SubscrpnContrItmBillgPlnCyc` |  | |  |  |  |  |
| `SubscrpnOrdIsPending` |  | |  |  |  |  |
| `NrOfBillgCyclesBilledTogether` |  | |  |  |  |  |
| `ServiceDocumentItemCanclnParty` |  | |  |  |  |  |
| `ServiceDocumentItmCanclnReason` |  | |  |  |  |  |
| `SrvcDocItmCanclnProcedure` |  | |  |  |  |  |
| `ServiceDocumentRnwlDuration` |  | |  |  |  |  |
| `ServiceDocRnwlDurationUnit` |  | |  |  |  |  |
| `ServiceDocExtensionDuration` |  | |  |  |  |  |
| `ServiceDocExtnDurationUnit` |  | |  |  |  |  |
| `SrvcDocItemGracePeriod` |  | |  |  |  |  |
| `SrvcDocItemGracePeriodUnit` |  | |  |  |  |  |
| `SrvcDocItmGrcePerdEndDateTime` |  | |  |  |  |  |
| `SbscrContrItmBizValdStrtDteTme` |  | |  |  |  |  |
| `SbscrContrItmBizValdEndDteTme` |  | |  |  |  |  |
| `SubscrpnContrAutoRnwlIsActv` |  | |  |  |  |  |
| `ReferenceInHouseRepair` |  | |  |  |  |  |
| `ReferenceInHouseRepairItem` |  | |  |  |  |  |
| `RefInHouseRepairIsExisting` |  | |  |  |  |  |
| `SrvcDocItemCreditStatus` |  | |  |  |  |  |
| `SrvcDocItmBslnCostPostgStatus` |  | |  |  |  |  |
| `SrvcDocItmContinuousCostStatus` |  | |  |  |  |  |
| `SrvcDocItemIsUnplanned` |  | |  |  |  |  |
| `ShippingCondition` |  | |  |  |  |  |
| `SrvcDocSubitemOrigin` |  | |  |  |  |  |
| `SrvcDocItmAcctAssgmtObjectType` |  | |  |  |  |  |
| `SrvcDocItmAcctAssgmtObject` |  | |  |  |  |  |
| `SrvcDocItmGoodsIssueQuantity` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `SrvcDocItmPartReferenceItem` |  | |  |  |  |  |
| `SrvcDocItmApptRefObjectUUID` |  | |  |  |  |  |
| `SrvcDocItmApptReferenceItem` |  | |  |  |  |  |
| `SrvcDocItmRefObjReferenceItem` |  | |  |  |  |  |
| `_ServiceDocument` | | ✓ | | | | |
| `_ParentServiceDocItem` | | ✓ | | | | |
| `_ParentServiceDocItem_2` | | ✓ | | | | |
| `_ServiceDocItemRefObj` | | ✓ | | | | |
| `_ServiceDocItemMainRefObj` | | ✓ | | | | |
| `_ServiceDocLongText` | | ✓ | | | | |
| `_ServiceDocItemNote` | | ✓ | | | | |
| `_ServiceDocItemTypeSlsSttg` | | ✓ | | | | |
| `_ServiceDocItmPredecessor` | | ✓ | | | | |
| `_ServiceDocItmSuccessor` | | ✓ | | | | |
| `_ServiceDocItmPrdcssr_2` | | ✓ | | | | |
| `_ServiceDocItmSuccssr_2` | | ✓ | | | | |
| `_ServiceDocumentItemPrdcssr_3` | | ✓ | | | | |
| `_ServiceDocumentItemSuccssr_3` | | ✓ | | | | |
| `_SrvcMaterialPricingGroup` | | ✓ | | | | |
| `_CustMgmtPartner` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceDocItemPriority` | | ✓ | | | | |
| `_ServiceDocItemCategory` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_SrvcMgmtProductHierarchy` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_RespEmployee` | | ✓ | | | | |
| `_ServiceTeam` | | ✓ | | | | |
| `_ServiceEmployee` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_ServiceDocItemStatus` | | ✓ | | | | |
| `_SrvcDocItmLifecycleStatus` | | ✓ | | | | |
| `_ServiceDocItemHasError` | | ✓ | | | | |
| `_ServiceDocItemBillingStatus` | | ✓ | | | | |
| `_SrvcDocItemIsRelForBillgSts` | | ✓ | | | | |
| `_ServiceDocumentIsOpen` | | ✓ | | | | |
| `_SrvcDocItemTransferStatus` | | ✓ | | | | |
| `_BillingBlockReason` | | ✓ | | | | |
| `_SrvcDocItemBillgRlvnce` | | ✓ | | | | |
| `_BillingRequestItem` | | ✓ | | | | |
| `_ServiceProductList` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_BaseUnit_2` | | ✓ | | | | |
| `_SalesUnit` | | ✓ | | | | |
| `_WeightUnit` | | ✓ | | | | |
| `_VolumeUnit` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
| `_PaymentMethod` | | ✓ | | | | |
| `_SrvcSEPAMandateRelevance` | | ✓ | | | | |
| `_FixedPrice` | | ✓ | | | | |
| `_StatusObjItemStatus` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit_2` | | ✓ | | | | |
| `_SalesOfficeOrgUnit` | | ✓ | | | | |
| `_SalesOfficeOrgUnit_2` | | ✓ | | | | |
| `_SalesGroupOrgUnit` | | ✓ | | | | |
| `_SalesGroupOrgUnit_2` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_ServiceTeamHeader` | | ✓ | | | | |
| `_EnterpriseServiceOrg` | | ✓ | | | | |
| `_ServiceOrganizationOrgUnit` | | ✓ | | | | |
| `_ServiceOrganizationOrgUnit_2` | | ✓ | | | | |
| `_RespSrvcOrganizationOrgUnit` | | ✓ | | | | |
| `_RespSrvcOrganizationOrgUnit_2` | | ✓ | | | | |
| `_ServiceDocOvertimeCat` | | ✓ | | | | |
| `_Industry` | | ✓ | | | | |
| `_ServiceDocItemRejectionReason` | | ✓ | | | | |
| `_SoldToPartyRegion` | | ✓ | | | | |
| `_SoldToPartyCountry` | | ✓ | | | | |
| `_SettlementDateRule` | | ✓ | | | | |
| `_BillPlanDateRule` | | ✓ | | | | |
| `_ResponseProfile` | | ✓ | | | | |
| `_ServiceProfile` | | ✓ | | | | |
| `_TechResource` | | ✓ | | | | |
| `_MasterAgrmtItem` | | ✓ | | | | |
| `_BillableControl` | | ✓ | | | | |
| `_DeliveryBlockReason` | | ✓ | | | | |
| `_VATRegistrationCountry` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_MaterialPricingGroup_2` | | ✓ | | | | |
| `_AdditionalMaterialGroup1` | | ✓ | | | | |
| `_AdditionalMaterialGroup2` | | ✓ | | | | |
| `_AdditionalMaterialGroup3` | | ✓ | | | | |
| `_AdditionalMaterialGroup4` | | ✓ | | | | |
| `_AdditionalMaterialGroup5` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_AdditionalCustomerGroup1` | | ✓ | | | | |
| `_AdditionalCustomerGroup2` | | ✓ | | | | |
| `_AdditionalCustomerGroup3` | | ✓ | | | | |
| `_AdditionalCustomerGroup4` | | ✓ | | | | |
| `_AdditionalCustomerGroup5` | | ✓ | | | | |
| `_ActualServiceDurationUnit` | | ✓ | | | | |
| `_ServiceDurationUnit` | | ✓ | | | | |
| `_SrvcContrItemRnwlDurationUnit` | | ✓ | | | | |
| `_SrvcContrItemExtnDurationUnit` | | ✓ | | | | |
| `_SrvcDocItemCreditStatus` | | ✓ | | | | |
| `_SrvcDocItmBslnCostPostgStat` | | ✓ | | | | |
| `_SrvcDocItmContinuousCostStat` | | ✓ | | | | |
| `_SrvcDocExecutionStatus` | | ✓ | | | | |
| `_SrvcDocIsQuotation` | | ✓ | | | | |
| `_SrvcDocIsQuotation_2` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocument` | `I_ServiceDocumentEnhcd` | [1] |
| `_ParentServiceDocItem` | `I_ServiceDocumentItemEnhcd` | [1] |
| `_ParentServiceDocItem_2` | `I_ServiceDocumentItemEnhcd` | [1] |
| `_ServiceDocItemRefObj` | `I_ServiceDocumentRefObject` | [0..*] |
| `_ServiceDocItemMainRefObj` | `I_ServiceDocumentRefObject` | [0..1] |
| `_ServiceDocLongText` | `I_ServiceDocumentLongText` | [0..*] |
| `_ServiceDocItemNote` | `I_ServiceDocItemNote` | [1..*] |
| `_ServiceDocItemTypeSlsSttg` | `I_ServiceDocItemTypeSlsSttg` | [0..1] |
| `_ServiceDocItmPredecessor` | `I_ServiceDocumentItemPrdcssr` | [1] |
| `_ServiceDocItmSuccessor` | `I_ServiceDocumentItemSuccessor` | [0..*] |
| `_ServiceDocItmPrdcssr_2` | `I_ServiceDocumentItemPrdcssr_2` | [0..1] |
| `_ServiceDocItmSuccssr_2` | `I_ServiceDocumentItemSuccssr_2` | [0..*] |
| `_ServiceDocumentItemPrdcssr_3` | `I_ServiceDocumentItemPrdcssr_3` | [0..1] |
| `_ServiceDocumentItemSuccssr_3` | `I_ServiceDocumentItemSuccssr_3` | [0..*] |
| `_SrvcMaterialPricingGroup` | `I_MaterialPricingGroup` | [0..1] |
| `_ServiceDocItemExt` | `E_ServiceDocumentItem` | [0..1] |
| `_CustMgmtPartner` | `I_CustMgmtPartner` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Service Transaction Item Enhanced'
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AbapCatalog: {
  sqlViewName: 'ISERVDOCITMENHCD',
  compiler.compareFilter: true,
  preserveKey: true
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: ['_ServiceDocItemRefObj','_ServiceDocItemMainRefObj']
}
@ObjectModel: {
  representativeKey: 'ServiceDocumentItem',
  usageType: {
    dataClass:      #MIXED,
    serviceQuality: #C,
    sizeCategory:   #XXL
  },
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE
  ],
  modelingPattern: #ANALYTICAL_DIMENSION
}
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

define view I_ServiceDocumentItemEnhcd
  as select from I_ServiceDocumentItem
  association [1]    to I_ServiceDocumentEnhcd         as _ServiceDocument              on  $projection.ServiceObjectType = _ServiceDocument.ServiceObjectType
                                                                                        and $projection.ServiceDocument   = _ServiceDocument.ServiceDocument

  association [1]    to I_ServiceDocumentItemEnhcd     as _ParentServiceDocItem         on  $projection.ParentServiceDocumentItemUUID = _ParentServiceDocItem.ServiceDocumentItemUUID

  association [1]    to I_ServiceDocumentItemEnhcd     as _ParentServiceDocItem_2       on  $projection.ServiceObjectType             = _ParentServiceDocItem_2.ServiceObjectType
                                                                                        and $projection.ServiceDocument               = _ParentServiceDocItem_2.ServiceDocument
                                                                                        and $projection.ParentServiceDocumentItemUUID = _ParentServiceDocItem_2.ServiceDocumentItemUUID

  association [0..*] to I_ServiceDocumentRefObject     as _ServiceDocItemRefObj         on  $projection.ServiceObjectType   = _ServiceDocItemRefObj.ServiceObjectType
                                                                                        and $projection.ServiceDocument     = _ServiceDocItemRefObj.ServiceDocument
                                                                                        and $projection.ServiceDocumentItem = _ServiceDocItemRefObj.ServiceDocumentItem

  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_ServiceDocumentRefObject     as _ServiceDocItemMainRefObj     on  $projection.ServiceObjectType                    = _ServiceDocItemMainRefObj.ServiceObjectType
                                                                                        and $projection.ServiceDocument                      = _ServiceDocItemMainRefObj.ServiceDocument
                                                                                        and $projection.ServiceDocumentItem                  = _ServiceDocItemMainRefObj.ServiceDocumentItem
                                                                                        and _ServiceDocItemMainRefObj.SrvcRefObjIsMainObject = 'X'

  association [0..*] to I_ServiceDocumentLongText      as _ServiceDocLongText           on  $projection.ServiceObjectType          = _ServiceDocLongText.ServiceObjectType
                                                                                        and $projection.ServiceDocument            = _ServiceDocLongText.ServiceDocument
                                                                                        and $projection.ServiceDocumentItem        = _ServiceDocLongText.ServiceDocumentItem
                                                                                        and _ServiceDocLongText.TextObjectCategory = 'CRM_ORDERI'

  association [1..*] to I_ServiceDocItemNote           as _ServiceDocItemNote           on  $projection.ServiceDocumentItemUUID = _ServiceDocItemNote.ServiceDocumentItemUUID

  association [0..1] to I_ServiceDocItemTypeSlsSttg    as _ServiceDocItemTypeSlsSttg    on  $projection.ServiceDocItemCategory = _ServiceDocItemTypeSlsSttg.ServiceDocItemCategory

  association [1]    to I_ServiceDocumentItemPrdcssr   as _ServiceDocItmPredecessor     on  $projection.ServiceDocumentItemUUID       = _ServiceDocItmPredecessor.ServiceDocumentItemUUID
                                                                                        and $projection.ServiceDocumentItemObjectType = _ServiceDocItmPredecessor.ServiceDocumentItemObjectType
                                                                                        and _ServiceDocItmPredecessor.CharcLength     = 32

  association [0..*] to I_ServiceDocumentItemSuccessor as _ServiceDocItmSuccessor       on  $projection.ServiceDocumentItemUUID       = _ServiceDocItmSuccessor.ServiceDocumentItemUUID
                                                                                        and $projection.ServiceDocumentItemObjectType = _ServiceDocItmSuccessor.ServiceDocumentItemObjectType
                                                                                        and _ServiceDocItmSuccessor.CharcLength       = 32

  association [0..1] to I_ServiceDocumentItemPrdcssr_2 as _ServiceDocItmPrdcssr_2       on  $projection.ServiceDocumentItemCharUUID = _ServiceDocItmPrdcssr_2.ServiceDocumentItemCharUUID

  association [0..*] to I_ServiceDocumentItemSuccssr_2 as _ServiceDocItmSuccssr_2       on  $projection.ServiceDocumentItemCharUUID = _ServiceDocItmSuccssr_2.ServiceDocumentItemCharUUID

  association [0..1] to I_ServiceDocumentItemPrdcssr_3 as _ServiceDocumentItemPrdcssr_3 on  $projection.ServiceDocumentItemCharUUID = _ServiceDocumentItemPrdcssr_3.ServiceDocumentItemCharUUID

  association [0..*] to I_ServiceDocumentItemSuccssr_3 as _ServiceDocumentItemSuccssr_3 on  $projection.ServiceDocumentItemCharUUID = _ServiceDocumentItemSuccssr_3.ServiceDocumentItemCharUUID

  association [0..1] to I_MaterialPricingGroup         as _SrvcMaterialPricingGroup     on  $projection.SrvcMaterialPricingGroup = _SrvcMaterialPricingGroup.MaterialPricingGroup

  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }
  association [0..1] to I_StatusObjectUUIDStatus       as _SrvcDocItemUserStatus        on  $projection.ServiceDocumentItemUUID   = _SrvcDocItemUserStatus.StatusObjectUUID
                                                                                        and _SrvcDocItemUserStatus.IsUserStatus   = 'X'
                                                                                        and _SrvcDocItemUserStatus.StatusIsActive = 'X' */


  association [0..1] to E_ServiceDocumentItem          as _ServiceDocItemExt            on  $projection.ServiceObjectType   = _ServiceDocItemExt.ServiceCategory
                                                                                        and $projection.ServiceDocument     = _ServiceDocItemExt.ServiceOrderItem
                                                                                        and $projection.ServiceDocumentItem = _ServiceDocItemExt.ServiceLineExternalID

  association [0..*] to I_CustMgmtPartner              as _CustMgmtPartner              on  $projection.ServiceDocument             = _CustMgmtPartner.CustMgmtDocument
                                                                                        and $projection.ServiceObjectType           = _CustMgmtPartner.CustMgmtObjectType
                                                                                        and $projection.SrvcDocItmPartReferenceItem = _CustMgmtPartner.CustMgmtDocumentItem


  //  association [0..*] to I_SrvcDocumentItemLongText     as _ServiceDocItemLongText       on  $projection.ServiceObjectType    = _ServiceDocItemLongText.ServiceObjectType
  //                                                                                        and $projection.ServiceDocument      = _ServiceDocItemLongText.ServiceDocument
  //                                                                                        and $projection.ServiceDocumentItem  = _ServiceDocItemLongText.ServiceDocumentItem
  //                                                                                        and _ServiceDocItemLongText.Language = $session.system_language


{

      //Header Keys
      @ObjectModel.foreignKey.association: '_ServiceObjType'
  key ServiceObjectType,
      @ObjectModel.foreignKey.association: '_ServiceDocument'
  key ServiceDocument,
      @ObjectModel.text.element: 'ServiceDocumentItemDescription'
  key ServiceDocumentItem,

      // Header Details
      ServiceDocumentDescription,
      // Process Type is required for Search by Document Type view
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      ServiceDocumentType,
      ServiceDocumentItemPriority,
      PostingDate,
      ServicesRenderedDate,
      SrvcDocItmPostingDateTime,
      SrvcDocItmValdtyStartDateTime,
      SrvcDocItmValdtyEndDateTime,

      // Item Details
      ServiceDocumentItemUUID,
      ServiceDocumentItemCharUUID,
      ServiceDocumentItemObjectType,
      ServiceDocumentUUID,
      ParentServiceDocumentItemUUID,
      @Semantics.text: true
      ServiceDocumentItemDescription,
      Language,
      ServiceDocumentTemplateType,
      ServiceDocItemCreationDateTime,
      ServiceDocItemChangedDateTime,
      @Semantics.systemDate.createdAt: true
      cast( tstmp_to_dats( ServiceDocItemCreationDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' ) as crms4_created_on preserving type ) as ServiceDocItemCreationDate,
      @Semantics.systemDate.lastChangedAt: true
      cast( tstmp_to_dats( ServiceDocItemChangedDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' ) as crms4_changed_on preserving type ) as ServiceDocItemChangedDate,

      ServiceDocItemCreatedByUser,
      ServiceDocItemChangedByUser,
      OriginallyRequestedProduct,
      @ObjectModel.foreignKey.association: '_Product'
      Product,

      @ObjectModel.foreignKey.association: '_ServiceDocItemCategory'
      ServiceDocItemCategory,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      ProfitCenter,
      ResponsibleCostCenter,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,
      ProfitCenterDeterminationDate,
      RefBusinessSolutionOrder,
      RefBusinessSolutionOrderItem,
      BusSolnOrdItemBundleProduct,
      BusSolnOrdItemBundleItem,

      // Item - Cumulated Value
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      SrvcDocItmRequestedQuantity,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      InvoiceAmountInInvoiceDocCrcy,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      InvoiceQuantity,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      SrvcDocItmDeliveredQuantity,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      SrvcDocItmReleasedQuantity,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      CumulativeConfirmedQuantity,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      SrvcDocItmReldAmtInTransCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      SrvcDocItemCumulatedNetAmount,

      // Item - Product
      SrvcDocItmOrdToBaseQtyNmrtr,
      SrvcDocItmOrdToBaseQtyDnmntr,
      OrderToBaseQuantityExponent,
      @Semantics.unitOfMeasure:true
      ServiceDocItemQuantityUnit,
      @ObjectModel.foreignKey.association: '_BaseUnit_2'
      @Semantics.unitOfMeasure:true
      SrvcDocItemBaseQuantityUnit,

      // Billing Set
      BillingDateTime,
      BillingDocCreationDateTime,
      BillingPlanTimeZone,

      // Item Pricing
      BillingPriceSourceName,
      cast( '' as abap.char( 16 ) )                               as DocumentDescription,

      // Partner Details
      @ObjectModel.foreignKey.association: '_SoldToPartyCountry'
      SoldToPartyCountry,
      @ObjectModel.foreignKey.association: '_SoldToPartyRegion'
      SoldToPartyRegion,
      @ObjectModel.foreignKey.association: '_SoldToParty'
      SoldToParty,
      @ObjectModel.foreignKey.association: '_ServiceTeam'
      ServiceTeam,
      @ObjectModel.foreignKey.association: '_RespEmployee'
      ResponsibleEmployee,
      @ObjectModel.foreignKey.association: '_ServiceEmployee'
      ServiceEmployee,
      @ObjectModel.foreignKey.association: '_ContactPerson'
      ContactPerson,
      @ObjectModel.foreignKey.association: '_PayerParty'
      PayerParty,
      @ObjectModel.foreignKey.association: '_BillToParty'
      BillToParty,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      ShipToParty,

      // Status
      @ObjectModel.foreignKey.association: '_SrvcDocItmLifecycleStatus'
      ServiceDocumentItemStatus,
      @ObjectModel.foreignKey.association: '_ServiceDocItemHasError'
      ServiceDocumentItemHasError,
      @ObjectModel.foreignKey.association: '_SrvcDocItemIsRelForBillgSts'
      SrvcDocItmIsReleasedForBilling,
      @ObjectModel.foreignKey.association: '_ServiceDocItemBillingStatus'
      ServiceDocItemBillingStatus,
      @ObjectModel.foreignKey.association: '_ServiceDocumentIsOpen'
      ServiceDocumentItemIsOpen,
      SrvcDocItmDeliveryStatus,
      SrvcDocItmGoodsIssueStatus,
      ServiceDocumentItemIsReleased,
      ServiceDocumentItemIsRejected,
      @Semantics.booleanIndicator:true
      SrvcDocItemIsWithdrawn,
      SrvcDocItemConcurStatus,

      @ObjectModel.foreignKey.association: '_SrvcDocIsQuotation_2'
      ServiceDocumentItemIsQuotation,

      @ObjectModel.foreignKey.association: '_SrvcDocItemTransferStatus'
      SrvcDocItemTransferStatus,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'SrvcDocItemExecutionStatus'
      MaintSrvcOrdExecutionStatus,
      @ObjectModel.foreignKey.association: '_SrvcDocExecutionStatus'
      SrvcDocItemExecutionStatus,

      // Item - Schedule Line
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      ServiceDocumentItemQuantity,

      // Pricing Parameter Set
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      @Semantics.currencyCode:true
      TransactionCurrency,
      StatisticsCurrency,
      ExchangeRateType,
      ExchangeRateDate,
      AccountingExchangeRate,
      @ObjectModel.foreignKey.association: '_PaymentTerms'
      PaymentTerms,
      @ObjectModel.foreignKey.association: '_PaymentMethod'
      PaymentMethod,
      @ObjectModel.foreignKey.association: '_SrvcSEPAMandateRelevance'
      SrvcSEPAMandateRelevance,
      SEPAMandate,
      WBSElementInternalID,
      @ObjectModel.foreignKey.association: '_BillableControl'
      BillableControl,
      @ObjectModel.foreignKey.association: '_VATRegistrationCountry'
      VATRegistrationCountry,
      ProductTaxClassification1,
      ProductTaxClassification2,
      ProductTaxClassification3,
      ProductTaxClassification4,
      ProductTaxClassification5,
      ProductTaxClassification6,
      ProductTaxClassification7,
      ProductTaxClassification8,
      ProductTaxClassification9,

      // Item - Pricing
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocumentItemNetAmount,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocumentItemTaxAmount,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocItemGrossAmount,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocumentItemNetPrice,

      // Billing Set
      @ObjectModel.foreignKey.association: '_BillingBlockReason'
      BillingBlockReason,
      @ObjectModel.foreignKey.association: '_SrvcDocItemBillgRlvnce'
      SrvcDocItmBillingRelevance,
      DynItemProcessorPrfl,

      // Item Product
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'SrvcMaterialPricingGroup'
      @ObjectModel.foreignKey.association: '_ProductGroup'
      ProductGroup,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'MaterialPricingGroup_2'
      @ObjectModel.foreignKey.association: '_SrvcMaterialPricingGroup'
      SrvcMaterialPricingGroup,
      @ObjectModel.foreignKey.association: '_MaterialPricingGroup_2'
      MaterialPricingGroup_2,

      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup1'
      ProductGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup2'
      ProductGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup3'
      ProductGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup4'
      ProductGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup5'
      ProductGroup5,
      @ObjectModel.foreignKey.association: '_SrvcMgmtProductHierarchy'
      ProductHierarchy,

      // Item - Sales Set
      @ObjectModel.foreignKey.association: '_Industry'
      Industry,
      PurchaseOrderByCustomer,
      PurchaseOrderByShipToParty,
      @ObjectModel.foreignKey.association: '_ServiceDocItemRejectionReason'
      ServiceDocItemRejectionReason,
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
      Plant,

      // Service Subject
      ServiceSchema1Category1UUID,
      ServiceSchema1Category2UUID,
      ServiceSchema1Category3UUID,
      ServiceSchema1Category4UUID,
      ServiceSchema1Category5UUID,
      ServiceSchema1Category6UUID,
      ServiceSchema1Category7UUID,
      ServiceSchema1Category8UUID,
      ServiceSchema1Category9UUID,
      ServiceSchema1Category10UUID,
      SrvcCatztnSchema1,
      SrvcCatztnSchemaCategory1,

      ServiceSchema2Category1UUID,
      ServiceSchema2Category2UUID,
      ServiceSchema2Category3UUID,
      ServiceSchema2Category4UUID,
      ServiceSchema2Category5UUID,
      ServiceSchema2Category6UUID,
      ServiceSchema2Category7UUID,
      ServiceSchema2Category8UUID,
      ServiceSchema2Category9UUID,
      ServiceSchema2Category10UUID,
      SrvcCatztnSchema2,
      SrvcCatztnSchemaCategory2,

      // Item - Billing Plan
      SettlementPeriodRuleUUID,
      BillingPlanBillingDateRuleUUID,
      BillingPlanPriceDateRule,
      BillingPlanIsFinalized,

      // Organization Unit Set
      @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit_2'
      SalesOrganizationOrgUnitID,

      @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit_2'
      SalesOfficeOrgUnitID,

      @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit_2'
      SalesGroupOrgUnitID,

      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,

      @ObjectModel.foreignKey.association: '_Division'
      Division,
      ResponsibleSalesOrganization,
      @ObjectModel.foreignKey.association: '_ServiceOrganizationOrgUnit_2'
      ServiceOrganization,
      @ObjectModel.foreignKey.association: '_RespSrvcOrganizationOrgUnit_2'
      ResponsibleServiceOrganization,

      // Organizational units with the S/4 SD codes
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,

      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,

      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesGroup,

      // Service Organizational Units with S/4 Code
      RespyMgmtServiceTeam,

      @ObjectModel.foreignKey.association: '_EnterpriseServiceOrg'
      EnterpriseServiceOrganization,

      //Service Organization-Enterprise Project
      EnterpriseProjectServiceOrg,

      // Date
      RequestedServiceStartDateTime,
      RequestedServiceEndDateTime,
      ServiceContrItemStartDateTime,
      ServiceContrItemEndDateTime,

      tstmp_to_dats( RequestedServiceStartDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' )                                       as RequestedServiceStartDate,
      tstmp_to_dats( RequestedServiceEndDateTime,
                     abap_system_timezone( $session.client,'NULL' ),
                     $session.client,
                     'NULL' )                                     as RequestedServiceEndDate,
      tstmp_to_dats( ServiceContrItemStartDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' )                                       as ServiceContractItemStartDate,
      tstmp_to_dats( ServiceContrItemEndDateTime,
                     abap_system_timezone( $session.client,'NULL' ),
                     $session.client,
                     'NULL' )                                     as ServiceContractItemEndDate,

      ServiceFirstResponseByDateTime,

      tstmp_to_dats( ServiceFirstResponseByDateTime,
                     abap_system_timezone( $session.client,'NULL' ),
                     $session.client,
                     'NULL' )                                     as ServiceFirstResponseByDate,


      SrvcDocItemSLADueByDateTime,

      tstmp_to_dats( SrvcDocItemSLADueByDateTime,
                     abap_system_timezone( $session.client,'NULL' ),
                     $session.client,
                     'NULL' )                                     as SrvcDocItemSLADueByDate,

      ActualServiceStartDateTime,
      ActualServiceEndDateTime,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemRnwlDurationUnit'} }
      SrvcContrItemRnwlDuration,

      @ObjectModel.foreignKey.association: '_SrvcContrItemRnwlDurationUnit'
      @Semantics.unitOfMeasure:true
      SrvcContrItemRnwlDurationUnit,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemExtnDurationUnit'} }
      SrvcContrItemExtensionDuration,

      @ObjectModel.foreignKey.association: '_SrvcContrItemExtnDurationUnit'
      @Semantics.unitOfMeasure:true
      SrvcContrItemExtnDurationUnit,

      PlannedServiceStartDateTime,
      PlannedServiceEndDateTime,

      tstmp_to_dats( PlannedServiceStartDateTime,
                     abap_system_timezone( $session.client,'NULL' ),
                     $session.client,
                     'NULL' )                                     as PlannedServiceStartDate,

      tstmp_to_dats( PlannedServiceEndDateTime,
                     abap_system_timezone( $session.client,'NULL' ),
                     $session.client,
                     'NULL' )                                     as PlannedServiceEndDate,
      @Semantics.dateTime: true
      SrvcDocItmTmeSliceStrtDteTme,
      @Semantics.dateTime: true
      SrvcDocItmTmeSliceEndDteTme,
      @Semantics.dateTime: true
      SrvcContrItemRenewalDateTime,

      // Item - Service
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ActualServiceDurationUnit'} }
      ActualServiceDuration,
      @ObjectModel.foreignKey.association: '_ActualServiceDurationUnit'
      @Semantics.unitOfMeasure:true
      ActualServiceDurationUnit,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'ServiceWorkDuration_2'
      ServiceWorkDuration,
      ServiceWorkDuration_2,
      ServiceWorkDurationUnit,
      SrvcOrderConfirmationRelevance, // Despite the DB field name, this is not a boolean value
      ServiceTransactionChargeType,
      SrvcTransactionValuationType,

      @ObjectModel.foreignKey.association: '_ResponseProfile'
      ResponseProfile,

      @ObjectModel.foreignKey.association: '_ServiceProfile'
      ServiceProfile,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDurationUnit'} }
      ServiceDuration,

      @ObjectModel.foreignKey.association: '_ServiceDurationUnit'
      @Semantics.unitOfMeasure:true
      ServiceDurationUnit,

      @ObjectModel.foreignKey.association: '_ServiceDocOvertimeCat'
      TimeSheetOvertimeCategory,

      // Business Solution Quotation
      MasterWarranty,
      ContractAccount,
      ItemOrderProbabilityInPercent,
      QuotationIsAccepted,
      ConfigurationNumber,
      IncotermsPart1,
      IncotermsPart2,
      DeliveryPriority,
      OrderCombinationIsAllowed,
      PartialDeliveryIsAllowed,

      CABillgCycle,
      RevenueAccountingReference,
      RevenueAccountingRefType,

      //Volume & Weights
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemGrossWeight,
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemNetWeight,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_WeightUnit'
      ItemWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      ItemVolume,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_VolumeUnit'
      ItemVolumeUnit,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'CustomerPriceGroup'
      MaterialPricingGroup,
      CustomerPriceGroup,

      // Delivery details
      DeliveryGroup,
      @ObjectModel.foreignKey.association: '_deliveryBlockReason'
      DeliveryBlockReason,
      RequestedDeliveryDateTime                                   as RequestedDeliveryUTCDateTime,

      //      FirstConfdDeliveryDateTime,
      ErlstConfirmedDeliveryDateTime,

      // Last Confirmation Delivery Date,
      LtstConfirmedDeliveryDateTime,

      //   tstmp_to_dats( ConfirmedDeliveryDateTime,
      //      abap_system_timezone( $session.client,'NULL' ),
      //       $session.client,
      //       'NULL' )                                              as ConfirmedDeliveryDate,

      tstmp_to_dats( RequestedDeliveryDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' )                                       as RequestedDeliveryDate,

      // Item - Subscription specific data
      SubscrpnOrdProdSelType,
      SubscriptionContract,
      SrvcTransChangeProcess,
      SrvcTransChangeProcessType,
      SrvcTransChgProcSourceItemUUID,
      CustMgmtMasterAgreement,
      CustMgmtMstrAgrmtItem,
      SubscrpnContrActivationStatus,
      SubscrpnContrTimeSliceStatus,
      SharingContractID,
      CrsCatalogMappingVersionNumber,
      CustMgmtMstrAgrmtParentItem,
      SubscrpnContractSharingGroupID,
      CAPartnerSettlementRule,
      ChangeProcessGroup,
      BusSolutionQtnItemIsPhased,
      BusSolnQtnItmPhasedPrdcssrItem,
      SubscriptionContractItem,
      SrvcDocItemWithdrawalReason,
      SrvcDocItemRefundType,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      SrvcDocItmRecrrgChrgNetAmount,
      @Semantics.booleanIndicator: true
      SubscrpnContrTrmsAreSpecified,
      @Semantics.booleanIndicator : true
      MidBillgCycExprtnIsAllowed,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      SrvcDocItmRecrrgChrgTaxAmount,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      SrvcDocItmRecrrgChrgGrossAmt,
      SrvcDocItmRecrrgChrgDuration,
      SrvcDocItmRecrrgChrgDurnUnit,
      SubscriptionContractReference,
      SubscriptionBillingCycle,
      @Semantics.uuid
      SubscrpnBillgRatePlanCharUUID,
      SubscriptionContractExternalID,
      SbscrShContrSvTrMtAgrItmUUID,
      SbscrShContrSvTrMtAgrItmCstPrd,
      @Semantics.booleanIndicator: true
      SvTrMtAgrItmIsFxdConfign,
      SubscrpnContrItmBillgPlnCyc,
      @Semantics.booleanIndicator: true
      SubscrpnOrdIsPending,
      NrOfBillgCyclesBilledTogether,

      // Cancellation
      ServiceDocumentItemCanclnParty,
      ServiceDocumentItmCanclnReason,
      SrvcDocItmCanclnProcedure,

      // Auto renew
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDurationUnit'} }
      ServiceDocumentRnwlDuration,
      ServiceDocRnwlDurationUnit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDurationUnit'} }
      ServiceDocExtensionDuration,
      ServiceDocExtnDurationUnit,

      //biz and grace
      SrvcDocItemGracePeriod,
      SrvcDocItemGracePeriodUnit,
      SrvcDocItmGrcePerdEndDateTime,
      SbscrContrItmBizValdStrtDteTme,
      SbscrContrItmBizValdEndDteTme,


      // Subscription Contract
      SubscrpnContrAutoRnwlIsActv,

      // In-House Repair Reference
      ReferenceInHouseRepair,
      ReferenceInHouseRepairItem,
      RefInHouseRepairIsExisting,

      // Credit Status
      @ObjectModel.foreignKey.association: '_SrvcDocItemCreditStatus'
      SrvcDocItemCreditStatus,

      // Baseline Cost Posting Status
      SrvcDocItmBslnCostPostgStatus,

      // Cost Calculation Status for Continuous Planning
      SrvcDocItmContinuousCostStatus,

      //_SrvcDocItemUserStatus.StatusCode                           as UserStatus,

      SrvcDocItemIsUnplanned,

      //Shipping
      ShippingCondition,

      SrvcDocSubitemOrigin,
      SrvcDocItmAcctAssgmtObjectType,
      SrvcDocItmAcctAssgmtObject,
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      SrvcDocItmGoodsIssueQuantity,
      Batch,
      /* Associations */
      // Item Key Association
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ParentServiceDocItem_2'
      _ParentServiceDocItem,
      _ParentServiceDocItem_2,
      _ServiceDocItemRefObj,
      _ServiceDocItemMainRefObj,
      _ServiceDocItemNote,
      _ServiceDocLongText,
      _ServiceDocItemTypeSlsSttg,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ServiceDocItmPrdcssr_2'
      _ServiceDocItmPredecessor,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ServiceDocItmSuccssr_2'
      _ServiceDocItmSuccessor,
      _ServiceDocItmPrdcssr_2,
      _ServiceDocItmSuccssr_2,

      // Item Key Association
      _ServiceObjType,
      _ServiceDocument,

      // Header Details
      _ServiceDocumentType,
      _ServiceDocItemPriority,

      // Item Details
      _ServiceDocItemCategory,
      _ProfitCenter,
      _ControllingArea,
      _SrvcMgmtProductHierarchy,

      // Partner
      _SoldToParty,
      _RespEmployee,
      _ServiceTeam,
      _ServiceEmployee,
      _ContactPerson,
      _PayerParty,
      _BillToParty,
      _ShipToParty,

      // Status
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SrvcDocItmLifecycleStatus'
      _ServiceDocItemStatus,
      _SrvcDocItmLifecycleStatus,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocItemHasError,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocItemBillingStatus,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SrvcDocItemIsRelForBillgSts,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocumentIsOpen,
      _SrvcDocItemTransferStatus,

      // Billing Set
      _BillingBlockReason,
      _SrvcDocItemBillgRlvnce,
      _BillingRequestItem,
      _ServiceProductList,

      // Item - Product
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_BaseUnit_2'
      _BaseUnit,
      _BaseUnit_2,
      _SalesUnit,
      _WeightUnit,
      _VolumeUnit,
      _TransactionCurrency,
      _PaymentTerms,
      _PaymentMethod,
      _SrvcSEPAMandateRelevance,
      _FixedPrice,
      _StatusObjItemStatus,

      // Organization Unit Set
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesOrganizationOrgUnit_2'
      _SalesOrganizationOrgUnit,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SalesOrganizationOrgUnit_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesOfficeOrgUnit_2'
      _SalesOfficeOrgUnit,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SalesOfficeOrgUnit_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesGroupOrgUnit_2'
      _SalesGroupOrgUnit,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SalesGroupOrgUnit_2,

      _SalesOrganization,
      _SalesOffice,
      _SalesGroup,
      _Division,
      _DistributionChannel,
      _ServiceTeamHeader,
      _EnterpriseServiceOrg,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ServiceOrganizationOrgUnit_2'
      _ServiceOrganizationOrgUnit,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceOrganizationOrgUnit_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_RespSrvcOrganizationOrgUnit_2'
      _RespSrvcOrganizationOrgUnit,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _RespSrvcOrganizationOrgUnit_2,

      _ServiceDocOvertimeCat,
      _Industry,
      _ServiceDocItemRejectionReason,
      _SoldToPartyRegion,
      _SoldToPartyCountry,
      _SettlementDateRule,
      _BillPlanDateRule,
      _ResponseProfile,
      _ServiceProfile,
      _TechResource,
      _MasterAgrmtItem,
      _BillableControl,
      _DeliveryBlockReason,
      _VATRegistrationCountry,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SrvcMaterialPricingGroup'
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ProductGroup,
      _Product,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_MaterialPricingGroup_2'
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SrvcMaterialPricingGroup,
      _MaterialPricingGroup_2,
      _AdditionalMaterialGroup1,
      _AdditionalMaterialGroup2,
      _AdditionalMaterialGroup3,
      _AdditionalMaterialGroup4,
      _AdditionalMaterialGroup5,
      _CustomerGroup,
      _AdditionalCustomerGroup1,
      _AdditionalCustomerGroup2,
      _AdditionalCustomerGroup3,
      _AdditionalCustomerGroup4,
      _AdditionalCustomerGroup5,

      // Item - Service Associations
      _ActualServiceDurationUnit,
      _ServiceDurationUnit,
      _SrvcContrItemRnwlDurationUnit,
      _SrvcContrItemExtnDurationUnit,
      _ServiceDocumentItemPrdcssr_3,
      _ServiceDocumentItemSuccssr_3,

      // Credit status associtation
      _SrvcDocItemCreditStatus,

      // Baseline Cost Posting status
      _SrvcDocItmBslnCostPostgStat,

      // Continuous Cost Calculation Status
      _SrvcDocItmContinuousCostStat,

      _SrvcDocExecutionStatus,

      //_SrvcDocItemUserStatus

      //RAP : Inheritance of complex set
      SrvcDocItmPartReferenceItem,
      SrvcDocItmApptRefObjectUUID,
      SrvcDocItmApptReferenceItem,
      SrvcDocItmRefObjReferenceItem,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SrvcDocIsQuotation_2'
      _SrvcDocIsQuotation,

      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SrvcDocIsQuotation_2,

      //For ESH long text search
      //      _ServiceDocItemLongText
      _CustMgmtPartner
}
```
