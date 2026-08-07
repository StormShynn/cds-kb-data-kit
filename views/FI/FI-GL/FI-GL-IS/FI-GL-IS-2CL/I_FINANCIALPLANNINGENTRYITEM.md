---
name: I_FINANCIALPLANNINGENTRYITEM
description: Financialplanningentryitem
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - item-level
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_FINANCIALPLANNINGENTRYITEM

**Financialplanningentryitem**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `FinancialPlanningReqTransSqnc` | ✓ | |  | `reqtsn` |
| `FinancialPlanningDataPacket` | ✓ | |  | `datapakid` |
| `FinancialPlanningEntryItem` | ✓ | |  | `record` |
| `ControllingArea` |  | |  | `kokrs` |
| `CompanyCode` |  | |  | `rbukrs` |
| `Ledger` |  | |  | `rldnr` |
| `GLAccount` |  | |  | `racct` |
| `ChartOfAccounts` |  | |  | `ktopl` |
| `FiscalYear` |  | |  | `gjahr` |
| `LedgerFiscalYear` |  | |  | `ryear` |
| `BusinessTransactionCategory` |  | |  | `bttype` |
| `BusinessTransactionType` |  | |  | `cast(bttype as fins_custbttype preserving type )` |
| `FinancialTransactionType` |  | |  | `rmvct` |
| `FinPlngEntryItemCreatedByUser` |  | |  | `usnam` |
| `FinPlngEntryItemCrtnDateTime` |  | |  | `cast(cast(substring(reqtsn,1,14) as abap.numc( 14 )) as fis_plan_item_creation_tstmp)` |
| `BusinessArea` |  | |  | `rbusa` |
| `ProfitCenter` |  | |  | `prctr` |
| `CostCenter` |  | |  | `rcntr` |
| `Project` |  | |  | `cast(ps_pspid as fis_project preserving type )` |
| `ProjectInternalID` |  | |  | `ps_prj_pnr` |
| `PartnerProjectInternalID` |  | |  | `pps_prj_pnr` |
| `WBSElement` |  | |  | `ps_posid` |
| `WBSElementInternalID` |  | |  | `ps_psp_pnr` |
| `PartnerWBSElementInternalID` |  | |  | `pps_psp_pnr` |
| `FunctionalArea` |  | |  | `rfarea` |
| `Segment` |  | |  | `segment` |
| `CostCtrActivityType` |  | |  | `lstar` |
| `CostAnalysisResource` |  | |  | `rsrce` |
| `WorkPackage` |  | |  | `cast( ps_posid as /cpd/plan_item_id )` |
| `WorkItem` |  | |  | `work_item_id` |
| `BillableControl` |  | |  | `bemot` |
| `IsLotSizeIndependent` |  | |  | `psknz` |
| `CostingLotSize` |  | |  | `} losgr` |
| `LotSizeUnit` |  | |  | `lsunit` |
| `PartnerCompanyCode` |  | |  | `cast(pbukrs as fis_partner_company_code preserving type)` |
| `OriginCostCenter` |  | |  | `ukostl` |
| `OriginCostCtrActivityType` |  | |  | `ulstar` |
| `OriginProfitCenter` |  | |  | `uprctr` |
| `PartnerBusinessArea` |  | |  | `sbusa` |
| `PartnerSegment` |  | |  | `psegment` |
| `PartnerProfitCenter` |  | |  | `pprctr` |
| `PartnerCostCenter` |  | |  | `scntr` |
| `PartnerProject` |  | |  | `pps_pspid` |
| `PartnerWBSElement` |  | |  | `pps_posid` |
| `PartnerFunctionalArea` |  | |  | `sfarea` |
| `PartnerCostCtrActivityType` |  | |  | `plstar` |
| `OrderID` |  | |  | `aufnr` |
| `PartnerOrder` |  | |  | `cast(paufnr as fis_par_aufnr_depre preserving type )` |
| `PartnerOrder_2` |  | |  | `cast(paufnr as fis_par_aufnr preserving type )` |
| `PartnerCompany` |  | |  | `rassc` |
| `ReferenceDocumentType` |  | |  | `awtyp` |
| `ReferenceDocumentContext` |  | |  | `aworg` |
| `ReferenceDocument` |  | |  | `awref` |
| `TransactionCurrency` |  | |  | `rwcur` |
| `AmountInTransactionCurrency` |  | |  | `} wsl` |
| `CompanyCodeCurrency` |  | |  | `rhcur` |
| `AmountInCompanyCodeCurrency` |  | |  | `} hsl` |
| `GlobalCurrency` |  | |  | `rkcur` |
| `AmountInGlobalCurrency` |  | |  | `} ksl` |
| `FunctionalCurrency` |  | |  | `rfccur` |
| `AmountInFunctionalCurrency` |  | |  | `} fcsl` |
| `FreeDefinedCurrency1` |  | |  | `rocur` |
| `AmountInFreeDefinedCurrency1` |  | |  | `} osl` |
| `FreeDefinedCurrency2` |  | |  | `rvcur` |
| `AmountInFreeDefinedCurrency2` |  | |  | `} vsl` |
| `FreeDefinedCurrency3` |  | |  | `rbcur` |
| `AmountInFreeDefinedCurrency3` |  | |  | `} bsl` |
| `FreeDefinedCurrency4` |  | |  | `rccur` |
| `AmountInFreeDefinedCurrency4` |  | |  | `} csl` |
| `FreeDefinedCurrency5` |  | |  | `rdcur` |
| `AmountInFreeDefinedCurrency5` |  | |  | `} dsl` |
| `FreeDefinedCurrency6` |  | |  | `recur` |
| `AmountInFreeDefinedCurrency6` |  | |  | `} esl` |
| `FreeDefinedCurrency7` |  | |  | `rfcur` |
| `AmountInFreeDefinedCurrency7` |  | |  | `} fsl` |
| `FreeDefinedCurrency8` |  | |  | `rgcur` |
| `AmountInFreeDefinedCurrency8` |  | |  | `} gsl` |
| `ControllingObjectCurrency` |  | |  | `rco_ocur` |
| `AmountInObjectCurrency` |  | |  | `} co_osl` |
| `FixedAmountInGlobalCrcy` |  | |  | `} kfsl` |
| `FixedAmountInCoCodeCrcy` |  | |  | `} hfsl` |
| `FixedAmountInTransCrcy` |  | |  | `} wfsl` |
| `CostSourceUnit` |  | |  | `rvunit` |
| `ValuationQuantity` |  | |  | `} vmsl` |
| `ValuationFixedQuantity` |  | |  | `} vmfsl` |
| `ReferenceQuantityUnit` |  | |  | `rrunit` |
| `ReferenceQuantity` |  | |  | `} rmsl` |
| `FiscalYearVariant` |  | |  | `periv` |
| `FiscalPeriod` |  | |  | `poper` |
| `FiscalYearPeriod` |  | |  | `fiscyearper` |
| `PostingDate` |  | |  | `cast( budat as fis_budat preserving type )` |
| `AssignmentReference` |  | |  | `zuonr` |
| `SubLedgerAcctLineItemType` |  | |  | `slalittype` |
| `SalesOrder` |  | |  | `kdauf` |
| `SalesOrderItem` |  | |  | `kdpos` |
| `SalesDocument` |  | |  | `cast(kdauf as vbeln_va preserving type)` |
| `SalesDocumentItem` |  | |  | `cast(kdpos as posnr_va preserving type)` |
| `Plant` |  | |  | `werks` |
| `Material` |  | |  | `matnr` |
| `Product` |  | |  | `cast (matnr as productnumber preserving type )` |
| `Customer` |  | |  | `kunnr` |
| `DocumentItemText` |  | |  | `sgtxt` |
| `ControllingObject` |  | |  | `cast( objnr as fis_objnr preserving type)` |
| `PlanningCategory` |  | |  | `category` |
| `AccountAssignmentType` |  | |  | `accasty` |
| `PartnerAccountAssignmentType` |  | |  | `paccasty` |
| `ControllingDebitCreditCode` |  | |  | `co_belkz` |
| `PersonnelNumber` |  | |  | `pernr` |
| `ServiceDocumentType` |  | |  | `service_doc_type` |
| `ServiceDocument` |  | |  | `service_doc_id` |
| `ServiceDocumentItem` |  | |  | `service_doc_item_id` |
| `ServiceContractType` |  | |  | `service_contract_type` |
| `ServiceContract` |  | |  | `service_contract_id` |
| `ServiceContractItem` |  | |  | `service_contract_item_id` |
| `ProjectNetwork` |  | |  | `nplnr` |
| `OffsettingAccount` |  | |  | `gkont` |
| `OffsettingAccountType` |  | |  | `cast( gkoar as fis_gkoar preserving type )` |
| `OffsettingChartOfAccounts` |  | |  | `case gkoar when 'D' then cast (' ' as fis_offsettingktopl preserving type ) when 'K' then cast (' ' as fis_offsettingktopl preserving type ) else cast( ktopl as fis_offsettingktopl preserving type ) end` |
| `IsStatisticalOrder` |  | |  | `cast( ( case when ( P_ACDOCP_COM.accasty != 'OR' and P_ACDOCP_COM.accasty != 'OP' and P_ACDOCP_COM.accasty != 'OV' ) and P_ACDOCP_COM.aufnr != '' then 'X' else ' ' end ) as fins_xaufnr_stat preserving type )` |
| `IsStatisticalCostCenter` |  | |  | `cast( ( case when ( P_ACDOCP_COM.accasty != 'KL' and P_ACDOCP_COM.accasty != 'KS' ) and P_ACDOCP_COM.rcntr != '' then 'X' else ' ' end ) as fins_xkostl_stat preserving type )` |
| `IsStatisticalSalesDocument` |  | |  | `cast( ( case when P_ACDOCP_COM.accasty != 'VB' and P_ACDOCP_COM.kdauf != '' then 'X' else ' ' end ) as fins_xkdpos_stat preserving type )` |
| `WBSIsStatisticalWBSElement` |  | |  | `cast( ( case when ( P_ACDOCP_COM.accasty != 'PR' ) and ( P_ACDOCP_COM.ps_psp_pnr != '00000000' ) then 'X' else ' ' end ) as fins_xps_posid_stat preserving type )` |
| `OriginOrder` |  | |  | `aufnr_org` |
| `BillingDocumentType` |  | |  | `fkart` |
| `SalesOrganization` |  | |  | `vkorg` |
| `DistributionChannel` |  | |  | `vtweg` |
| `Division` |  | |  | `spart` |
| `OrganizationDivision` |  | |  | `cast( spart as fis_spart preserving type )` |
| `SoldMaterial` |  | |  | `cast(matnr_copa as fis_sold_material preserving type )` |
| `SoldProduct` |  | |  | `cast (matnr_copa as fins_matnr_pa preserving type)` |
| `MaterialGroup` |  | |  | `matkl` |
| `SoldProductGroup` |  | |  | `cast (matkl as productgroup preserving type)` |
| `ProductGroup` |  | |  | `matkl_mm` |
| `CustomerGroup` |  | |  | `kdgrp` |
| `CustomerSupplierCountry` |  | |  | `land1` |
| `CustomerSupplierIndustry` |  | |  | `cast(brsch as fis_brsch preserving type )` |
| `SalesDistrict` |  | |  | `bzirk` |
| `BillToParty` |  | |  | `kunre` |
| `ShipToParty` |  | |  | `kunwe` |
| `CustomerSupplierCorporateGroup` |  | |  | `cast(konzs as fis_konzs preserving type )` |
| `FinancialManagementArea` |  | |  | `fikrs` |
| `Fund` |  | |  | `rfund` |
| `GrantID` |  | |  | `rgrant_nbr` |
| `BudgetPeriod` |  | |  | `rbudget_pd` |
| `SponsoredProgram` |  | |  | `rsponsored_prog` |
| `SponsoredClass` |  | |  | `rsponsored_class` |
| `GteeMBudgetValidityNumber` |  | |  | `rbdgt_vldty_nbr` |
| `BudgetProcess` |  | |  | `budget_process` |
| `BudgetingType` |  | |  | `budget_subcategory` |
| `BudgetDocWorkFlowStatus` |  | |  | `bdgt_doc_workflow_status` |
| `WorkCenterInternalID` |  | |  | `arbid` |
| `OrderOperation` |  | |  | `vornr` |
| `OrderItem` |  | |  | `aufps` |
| `PartnerOrderItem` |  | |  | `paufps` |
| `OrderSuboperation` |  | |  | `uvorn` |
| `Equipment` |  | |  | `equnr` |
| `FunctionalLocation` |  | |  | `tplnr` |
| `Assembly` |  | |  | `istru` |
| `MaintenanceActivityType` |  | |  | `cast(ilart as rsh_eam_maint_activity_type preserving type )` |
| `MaintenanceOrderPlanningCode` |  | |  | `plknz` |
| `MaintPriorityType` |  | |  | `artpr` |
| `MaintPriority` |  | |  | `priok` |
| `SuperiorOrder` |  | |  | `maufnr` |
| `OriginOrderOperation` |  | |  | `vornr_org` |
| `AssetDepreciationArea` |  | |  | `afabe` |
| `MasterFixedAsset` |  | |  | `anln1` |
| `FixedAsset` |  | |  | `anln2` |
| `AssetAcctTransClassfctn` |  | |  | `movcat` |
| `AssetClass` |  | |  | `anlkl` |
| `JointVenture` |  | |  | `vname` |
| `JointVentureEquityGroup` |  | |  | `cast( egrup as jv_egroup_cds preserving type )` |
| `JointVentureCostRecoveryCode` |  | |  | `cast( recid as jv_recind_cds preserving type )` |
| `JointVentureProductionDate` |  | |  | `cast( prodper as jv_prodper_cds preserving type )` |
| `Reservation` |  | |  | `rsnum` |
| `ReservationItem` |  | |  | `rspos` |
| `ReservationType` |  | |  | `rsart` |
| `MMServicePackage` |  | |  | `packno` |
| `MMServicePackageLine` |  | |  | `introw` |
| `REBusinessEntity` |  | |  | `SWENR` |
| `RealEstateBuilding` |  | |  | `SGENR` |
| `RealEstateProperty` |  | |  | `SGRNR` |
| `RERentalObject` |  | |  | `SMENR` |
| `RealEstateContract` |  | |  | `RECNNR` |
| `REServiceChargeKey` |  | |  | `snksl` |
| `RESettlementUnitID` |  | |  | `sempsl` |
| `SettlementReferenceDate` |  | |  | `dabrz` |
| `ProducedProduct` |  | |  | `pmatnr` |
| `CostEstimateValidityStartDate` |  | |  | `costg_from_date` |
| `CostEstimateValidityEndDate` |  | |  | `costg_to_date` |
| `CostOriginGroup` |  | |  | `hkgrp` |
| `AccrualObjectType` |  | |  | `acrobjtype` |
| `AccrualObjectLogicalSystem` |  | |  | `acrlogsys` |
| `AccrualObject` |  | |  | `acrobj_id` |
| `AccrualSubobject` |  | |  | `acrsobj_id` |
| `AccrualItemType` |  | |  | `acritmtype` |
| `AccrualReferenceObject` |  | |  | `acrrefobj_id` |
| `AccrualValueDate` |  | |  | `acrvaldat` |
| `PlanPriceInGlobalCurrency` |  | |  | `} kprice` |
| `PlanPriceInCompanyCodeCurrency` |  | |  | `} hprice` |
| `PlanPriceInTransactionCurrency` |  | |  | `} wprice` |
| `GLAccountAuthorizationGroup` |  | |  | `cast( '' as brgru)` |
| `CustomerBasicAuthorizationGrp` |  | |  | `cast( '' as brgru)` |
| `OrderType` |  | |  | `cast( '' as aufart)` |
| `SalesOrderType` |  | |  | `cast( '' as auart)` |
| `_CompanyCode` | | ✓ | | |
| `_FiscalYear` | | ✓ | | |
| `_LedgerFiscalYear` | | ✓ | | |
| `_FiscalPeriod` | | ✓ | | |
| `_FiscalYearPeriod` | | ✓ | | |
| `_LedgerFiscalYearForVariant` | | ✓ | | |
| `_FiscalPeriodForVariant` | | ✓ | | |
| `_FiscalYearPeriodForVariant` | | ✓ | | |
| `_FiscalYearVariant` | | ✓ | | |
| `_CalendarDate` | | ✓ | | |
| `_FiscalCalendarDate` | | ✓ | | |
| `_ControllingArea` | | ✓ | | |
| `_BusinessTransactionCategory` | | ✓ | | |
| `_BusinessTransactionType` | | ✓ | | |
| `_FinancialTransactionType` | | ✓ | | |
| `_TransactionCurrency` | | ✓ | | |
| `_CompanyCodeCurrency` | | ✓ | | |
| `_GlobalCurrency` | | ✓ | | |
| `_FunctionalCurrency` | | ✓ | | |
| `_FreeDefinedCurrency1` | | ✓ | | |
| `_FreeDefinedCurrency2` | | ✓ | | |
| `_FreeDefinedCurrency3` | | ✓ | | |
| `_FreeDefinedCurrency4` | | ✓ | | |
| `_FreeDefinedCurrency5` | | ✓ | | |
| `_FreeDefinedCurrency6` | | ✓ | | |
| `_FreeDefinedCurrency7` | | ✓ | | |
| `_FreeDefinedCurrency8` | | ✓ | | |
| `_ControllingObjectCurrency` | | ✓ | | |
| `_CostSourceUnit` | | ✓ | | |
| `_ReferenceQuantityUnit` | | ✓ | | |
| `_Segment` | | ✓ | | |
| `_ProfitCenter` | | ✓ | | |
| `_CurrentProfitCenter` | | ✓ | | |
| `_CostCenter` | | ✓ | | |
| `_CurrentCostCenter` | | ✓ | | |
| `_BusinessArea` | | ✓ | | |
| `_FunctionalArea` | | ✓ | | |
| `_CostCtrActivityType` | | ✓ | | |
| `_WBSElement` | | ✓ | | |
| `_WBSElementByInternalKey` | | ✓ | | |
| `_WBSElementBasicData` | | ✓ | | |
| `_PartnerWBSElementBasicData` | | ✓ | | |
| `_Project` | | ✓ | | |
| `_ProjectBasicData` | | ✓ | | |
| `_PartnerProjectBasicData` | | ✓ | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | |
| `_GLAccountInCompanyCode` | | ✓ | | |
| `_ChartOfAccounts` | | ✓ | | |
| `_Plant` | | ✓ | | |
| `_Ledger` | | ✓ | | |
| `_Customer` | | ✓ | | |
| `_CustomerCompany` | | ✓ | | |
| `_CustomerGroup` | | ✓ | | |
| `_Material` | | ✓ | | |
| `_MaterialGroup` | | ✓ | | |
| `_Product` | | ✓ | | |
| `_SoldProductGroup` | | ✓ | | |
| `_SoldProductGroup_2` | | ✓ | | |
| `_ProductGroup` | | ✓ | | |
| `_ProductGroup_2` | | ✓ | | |
| `_SoldMaterial` | | ✓ | | |
| `_SoldProduct` | | ✓ | | |
| `_SalesOrder` | | ✓ | | |
| `_SalesOrderItem` | | ✓ | | |
| `_SalesDocument` | | ✓ | | |
| `_SalesDocumentItem` | | ✓ | | |
| `_InternalOrder` | | ✓ | | |
| `_Order` | | ✓ | | |
| `_CostAnalysisResource` | | ✓ | | |
| `_WorkPackageWorkItem` | | ✓ | | |
| `_WorkPackage` | | ✓ | | |
| `_Employment` | | ✓ | | |
| `_PersonWorkAgreement_1` | | ✓ | | |
| `_PartnerCostCenter` | | ✓ | | |
| `_PartnerProfitCenter` | | ✓ | | |
| `_PartnerBusinessArea` | | ✓ | | |
| `_PartnerFunctionalArea` | | ✓ | | |
| `_PartnerCompanyCode` | | ✓ | | |
| `_PartnerSegment` | | ✓ | | |
| `_User` | | ✓ | | |
| `_PartnerCostCtrActivityType` | | ✓ | | |
| `_PartnerOrder` | | ✓ | | |
| `_PartnerOrder_2` | | ✓ | | |
| `_PartnerWBSElement` | | ✓ | | |
| `_PartnerProject` | | ✓ | | |
| `_PartnerCompany` | | ✓ | | |
| `_ControllingDebitCreditCode` | | ✓ | | |
| `_SalesOrganization` | | ✓ | | |
| `_DistributionChannel` | | ✓ | | |
| `_BillingDocumentType` | | ✓ | | |
| `_Division` | | ✓ | | |
| `_OrganizationDivision` | | ✓ | | |
| `_CustomerSupplierCountry` | | ✓ | | |
| `_SalesDistrict` | | ✓ | | |
| `_BillToParty` | | ✓ | | |
| `_ShipToParty` | | ✓ | | |
| `_CustomerSupplierIndustryText` | | ✓ | | |
| `_PlanningCategory` | | ✓ | | |
| `_WorkCenter` | | ✓ | | |
| `_BillableControl` | | ✓ | | |
| `_SemTagGLAccount` | | ✓ | | |
| `_FinancialManagementArea` | | ✓ | | |
| `_Fund` | | ✓ | | |
| `_Grant` | | ✓ | | |
| `_BudgetPeriod` | | ✓ | | |
| `_BudgetProcess` | | ✓ | | |
| `_BudgetingType` | | ✓ | | |
| `_MasterFixedAsset` | | ✓ | | |
| `_FixedAsset` | | ✓ | | |
| `_SubLedgerAccLineItemType` | | ✓ | | |
| `_Equipment` | | ✓ | | |
| `_FunctionalLocation` | | ✓ | | |
| `_Assembly` | | ✓ | | |
| `_MaintenanceActivityType` | | ✓ | | |
| `_LotSizeUnit` | | ✓ | | |
| `_OriginCostCenter` | | ✓ | | |
| `_OriginCostCtrActivityType` | | ✓ | | |
| `_OriginProfitCenter` | | ✓ | | |
| `_ProducedProduct` | | ✓ | | |
| `_ServiceDocumentType` | | ✓ | | |
| `_ServiceDocument` | | ✓ | | |
| `_ServiceDocumentItem` | | ✓ | | |
| `_ServiceContractType` | | ✓ | | |
| `_ServiceContract` | | ✓ | | |
| `_ServiceContractItem` | | ✓ | | |
| `_SponsoredClass` | | ✓ | | |
| `_SponsoredProgram` | | ✓ | | |
| `_AccountAssignmentType` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_LedgerFiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_FiscalPeriod` | `I_FiscalYearPeriodForCmpnyCode` | [0..1] |
| `_FiscalYearPeriod` | `I_FiscalCalYearPeriodForCoCode` | [0..1] |
| `_FiscalYearForVariant` | `I_FiscalYearForVariant` | [0..1] |
| `_LedgerFiscalYearForVariant` | `I_FiscalYearForVariant` | [0..1] |
| `_FiscalPeriodForVariant` | `I_FiscalPeriodForVariant` | [0..1] |
| `_FiscalYearPeriodForVariant` | `I_FiscalYearPeriodForVariant` | [0..1] |
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [1..1] |
| `_CalendarDate` | `I_CalendarDate` | [0..1] |
| `_FiscalCalendarDate` | `I_FiscalCalendarDate` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_BusinessTransactionCategory` | `I_BusinessTransactionCategory` | [0..1] |
| `_BusinessTransactionType` | `I_BusinessTransactionType` | [0..1] |
| `_FinancialTransactionType` | `I_FinancialTransactionType` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [1..1] |
| `_GlobalCurrency` | `I_Currency` | [0..1] |
| `_FunctionalCurrency` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency1` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency2` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency3` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency4` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency5` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency6` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency7` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency8` | `I_Currency` | [0..1] |
| `_ControllingObjectCurrency` | `I_Currency` | [0..1] |
| `_CostSourceUnit` | `I_UnitOfMeasure` | [0..1] |
| `_ReferenceQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_Segment` | `I_Segment` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_CurrentProfitCenter` | `I_ProfitCenter` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_CurrentCostCenter` | `I_CostCenter` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_CostCtrActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_WBSElement` | `I_WBSElement` | [0..1] |
| `_WBSElementByInternalKey` | `I_WBSElementByInternalKey` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_PartnerWBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_Project` | `I_Project` | [0..1] |
| `_ProjectBasicData` | `I_ProjectBasicData` | [0..1] |
| `_PartnerProjectBasicData` | `I_ProjectBasicData` | [0..1] |
| `_GLAccountInChartOfAccounts` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_GLAccountInCompanyCode` | `I_GLAccountInCompanyCode` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_Ledger` | `I_Ledger` | [1..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_CustomerCompany` | `I_CustomerCompany` | [0..1] |
| `_CustomerGroup` | `I_CustomerGroup` | [0..1] |
| `_Material` | `I_Material` | [0..1] |
| `_MaterialGroup` | `I_MaterialGroup` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_SoldProductGroup` | `I_ProductGroup` | [0..1] |
| `_SoldProductGroup_2` | `I_ProductGroup_2` | [0..1] |
| `_ProductGroup` | `I_ProductGroup` | [0..1] |
| `_ProductGroup_2` | `I_ProductGroup_2` | [0..1] |
| `_SoldMaterial` | `I_Material` | [0..1] |
| `_SoldProduct` | `I_Product` | [0..1] |
| `_SalesOrder` | `I_SalesOrder` | [0..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [0..1] |
| `_SalesDocument` | `I_SalesDocument` | [0..1] |
| `_SalesDocumentItem` | `I_SalesDocumentItem` | [0..1] |
| `_InternalOrder` | `I_InternalOrder` | [0..1] |
| `_Order` | `I_Order` | [0..1] |
| `_CostAnalysisResource` | `I_CostAnalysisResource` | [0..*] |
| `_WorkPackageWorkItem` | `I_WorkPackageWorkItem` | [0..1] |
| `_WorkPackage` | `I_WorkPackage` | [0..1] |
| `_Employment` | `I_Employment` | [0..1] |
| `_PersonWorkAgreement_1` | `I_PersonWorkAgreement_1` | [0..1] |
| `_PartnerCostCenter` | `I_CostCenter` | [0..*] |
| `_PartnerProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_PartnerBusinessArea` | `I_BusinessArea` | [0..1] |
| `_PartnerFunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_PartnerCompanyCode` | `I_CompanyCode` | [0..1] |
| `_PartnerSegment` | `I_Segment` | [0..1] |
| `_User` | `I_UserContactCard` | [0..1] |
| `_PartnerCostCtrActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_PartnerOrder` | `I_InternalOrder` | [0..1] |
| `_PartnerOrder_2` | `I_Order` | [0..1] |
| `_PartnerWBSElement` | `I_WBSElement` | [0..1] |
| `_PartnerProject` | `I_Project` | [0..1] |
| `_PartnerCompany` | `I_Partnercompany` | [0..1] |
| `_ControllingDebitCreditCode` | `I_ControllingDebitCreditCode` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_BillingDocumentType` | `I_BillingDocumentType` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_OrganizationDivision` | `I_Division` | [0..1] |
| `_CustomerSupplierCountry` | `I_Country` | [0..1] |
| `_SalesDistrict` | `I_SalesDistrict` | [0..1] |
| `_BillToParty` | `I_Customer` | [0..1] |
| `_ShipToParty` | `I_Customer` | [0..1] |
| `_CustomerSupplierIndustryText` | `I_CustomerSupplierIndustryText` | [0..*] |
| `_PlanningCategory` | `I_PlanningCategory` | [0..1] |
| `_Extension` | `E_FinancialPlanningEntryItem` | [1..1] |
| `_WorkCenter` | `I_WorkCenter` | [0..1] |
| `_BillableControl` | `I_BillableControl` | [0..1] |
| `_SemTagGLAccount` | `I_SemTagGLAccount` | [0..*] |
| `_FinancialManagementArea` | `I_FinancialManagementArea` | [0..1] |
| `_Fund` | `I_Fund` | [0..1] |
| `_Grant` | `I_Grant` | [0..1] |
| `_BudgetPeriod` | `I_BudgetPeriod` | [0..1] |
| `_BudgetProcess` | `I_BudgetProcess` | [0..1] |
| `_BudgetingType` | `I_BudgetingType` | [0..1] |
| `_MasterFixedAsset` | `I_MasterFixedAsset` | [0..1] |
| `_FixedAsset` | `I_FixedAsset` | [0..1] |
| `_SubLedgerAccLineItemType` | `I_SubLedgerAccLineItemType` | [0..1] |
| `_Equipment` | `I_Equipment` | [0..1] |
| `_FunctionalLocation` | `I_FunctionalLocation` | [0..1] |
| `_Assembly` | `I_Product` | [0..1] |
| `_MaintenanceActivityType` | `I_MaintenanceActivityType` | [0..1] |
| `_LotSizeUnit` | `I_UnitOfMeasure` | [0..1] |
| `_OriginCostCenter` | `I_CostCenter` | [0..*] |
| `_OriginCostCtrActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_OriginProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_ProducedProduct` | `I_Product` | [0..1] |
| `_ServiceDocumentType` | `I_ServiceDocumentType` | [0..1] |
| `_ServiceDocument` | `I_SrvcDocByDocumentType` | [0..1] |
| `_ServiceDocumentItem` | `I_SrvcDocItemByDocumentType` | [0..1] |
| `_ServiceContractType` | `I_ServiceDocumentType` | [0..1] |
| `_ServiceContract` | `I_SrvcDocByDocumentType` | [0..1] |
| `_ServiceContractItem` | `I_SrvcDocItemByDocumentType` | [0..1] |
| `_SponsoredClass` | `I_SponsoredClassCore` | [0..1] |
| `_SponsoredProgram` | `I_SponsoredProgramCore` | [0..1] |
| `_AccountAssignmentType` | `I_AccountAssignmentType` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @AccessControl: { authorizationCheck: #CHECK,
                  personalData.blocking: #('TRANSACTIONAL_DATA'),
                  privilegedAssociations: ['_User'] }
//@Analytics: { dataCategory: #CUBE, dataExtraction.enabled: true }
@Analytics: {
      dataCategory: #CUBE,
      dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          mapping:
            [
              {
                table: 'ACDOCP',
                role: #MAIN,
                viewElement: ['FinancialPlanningReqTransSqnc', 'FinancialPlanningDataPacket', 'FinancialPlanningEntryItem'],
                tableElement: ['reqtsn', 'datapakid', 'record']
              }
            ]
         }
      }
    }
@Analytics.technicalName: 'IFIFINPLNENTIT'
@EndUserText.label: 'Financial Planning Entry Item'
@Metadata: { ignorePropagatedAnnotations: true,
             allowExtensions:true }
//@ObjectModel.representativeKey: 'FinancialPlanningEntryItem' -- not possible as datatype is INT4
@ObjectModel: { usageType: { sizeCategory: #XL,
                             serviceQuality: #D,
                             dataClass: #MIXED },
                supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
                modelingPattern: #ANALYTICAL_CUBE } 
@VDM: { viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API }
@ObjectModel.sapObjectNodeType.name: 'FinancialPlanningEntryItem'
@AccessControl.auditFilter: #ENABLED

define view entity I_FinancialPlanningEntryItem
  as select from P_ACDOCP_COM

  association [1..1] to I_CompanyCode                  as _CompanyCode                  on  $projection.CompanyCode = _CompanyCode.CompanyCode
  // begin DO NOT USE these associations. Use Associations ForVariant instead
  association [0..1] to I_FiscalYearForCompanyCode     as _FiscalYear                   on  $projection.FiscalYear  = _FiscalYear.FiscalYear
                                                                                        and $projection.CompanyCode = _FiscalYear.CompanyCode
  association [0..1] to I_FiscalYearForCompanyCode     as _LedgerFiscalYear             on  $projection.LedgerFiscalYear = _LedgerFiscalYear.FiscalYear
                                                                                        and $projection.CompanyCode      = _LedgerFiscalYear.CompanyCode
  // association on FiscalYear for FiscalPeriod to avoid incompatible changes. Value FiscalYear and LedgerFiscalYear are identicalfor PlanningEntryItems
  association [0..1] to I_FiscalYearPeriodForCmpnyCode as _FiscalPeriod                 on  $projection.FiscalYear   = _FiscalPeriod.FiscalYear
                                                                                        and $projection.FiscalPeriod = _FiscalPeriod.FiscalPeriod
                                                                                        and $projection.CompanyCode  = _FiscalPeriod.CompanyCode
  association [0..1] to I_FiscalCalYearPeriodForCoCode as _FiscalYearPeriod             on  $projection.FiscalYearPeriod = _FiscalYearPeriod.FiscalYearPeriod
                                                                                        and $projection.CompanyCode      = _FiscalYearPeriod.CompanyCode
  // end
  association [0..1] to I_FiscalYearForVariant         as _FiscalYearForVariant         on  $projection.FiscalYear        = _FiscalYearForVariant.FiscalYear
                                                                                        and $projection.FiscalYearVariant = _FiscalYearForVariant.FiscalYearVariant  
  association [0..1] to I_FiscalYearForVariant         as _LedgerFiscalYearForVariant   on  $projection.LedgerFiscalYear  = _LedgerFiscalYearForVariant.FiscalYear
                                                                                        and $projection.FiscalYearVariant = _LedgerFiscalYearForVariant.FiscalYearVariant
  association [0..1] to I_FiscalPeriodForVariant       as _FiscalPeriodForVariant       on  $projection.LedgerFiscalYear  = _FiscalPeriodForVariant.FiscalYear
                                                                                        and $projection.FiscalPeriod      = _FiscalPeriodForVariant.FiscalPeriod
                                                                                        and $projection.FiscalYearVariant = _FiscalPeriodForVariant.FiscalYearVariant
  association [0..1] to I_FiscalYearPeriodForVariant   as _FiscalYearPeriodForVariant   on  $projection.FiscalYearPeriod  = _FiscalYearPeriodForVariant.FiscalYearPeriod
                                                                                        and $projection.FiscalYearVariant = _FiscalYearPeriodForVariant.FiscalYearVariant

  association [1..1] to I_FiscalYearVariant            as _FiscalYearVariant            on  $projection.FiscalYearVariant = _FiscalYearVariant.FiscalYearVariant
  association [0..1] to I_CalendarDate                 as _CalendarDate                 on  $projection.PostingDate = _CalendarDate.CalendarDate
  association [0..1] to I_FiscalCalendarDate           as _FiscalCalendarDate           on  $projection.PostingDate       = _FiscalCalendarDate.CalendarDate
                                                                                        and $projection.FiscalYearVariant = _FiscalCalendarDate.FiscalYearVariant
  association [0..1] to I_ControllingArea              as _ControllingArea              on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_BusinessTransactionCategory  as _BusinessTransactionCategory  on  $projection.BusinessTransactionCategory = _BusinessTransactionCategory.BusinessTransactionCategory
  association [0..1] to I_BusinessTransactionType      as _BusinessTransactionType      on  $projection.BusinessTransactionType = _BusinessTransactionType.BusinessTransactionType
  association [0..1] to I_FinancialTransactionType     as _FinancialTransactionType     on  $projection.FinancialTransactionType = _FinancialTransactionType.FinancialTransactionType
  association [0..1] to I_Currency                     as _TransactionCurrency          on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [1..1] to I_Currency                     as _CompanyCodeCurrency          on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [0..1] to I_Currency                     as _GlobalCurrency               on  $projection.GlobalCurrency = _GlobalCurrency.Currency
  association [0..1] to I_Currency                     as _FunctionalCurrency           on  $projection.FunctionalCurrency = _FunctionalCurrency.Currency  
  association [0..1] to I_Currency                     as _FreeDefinedCurrency1         on  $projection.FreeDefinedCurrency1 = _FreeDefinedCurrency1.Currency
  association [0..1] to I_Currency                     as _FreeDefinedCurrency2         on  $projection.FreeDefinedCurrency2 = _FreeDefinedCurrency2.Currency
  association [0..1] to I_Currency                     as _FreeDefinedCurrency3         on  $projection.FreeDefinedCurrency3 = _FreeDefinedCurrency3.Currency
  association [0..1] to I_Currency                     as _FreeDefinedCurrency4         on  $projection.FreeDefinedCurrency4 = _FreeDefinedCurrency4.Currency
  association [0..1] to I_Currency                     as _FreeDefinedCurrency5         on  $projection.FreeDefinedCurrency5 = _FreeDefinedCurrency5.Currency
  association [0..1] to I_Currency                     as _FreeDefinedCurrency6         on  $projection.FreeDefinedCurrency6 = _FreeDefinedCurrency6.Currency
  association [0..1] to I_Currency                     as _FreeDefinedCurrency7         on  $projection.FreeDefinedCurrency7 = _FreeDefinedCurrency7.Currency
  association [0..1] to I_Currency                     as _FreeDefinedCurrency8         on  $projection.FreeDefinedCurrency8 = _FreeDefinedCurrency8.Currency
  association [0..1] to I_Currency                     as _ControllingObjectCurrency    on  $projection.ControllingObjectCurrency = _ControllingObjectCurrency.Currency
  association [0..1] to I_UnitOfMeasure                as _CostSourceUnit               on  $projection.CostSourceUnit = _CostSourceUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _ReferenceQuantityUnit        on  $projection.ReferenceQuantityUnit = _ReferenceQuantityUnit.UnitOfMeasure
  association [0..1] to I_Segment                      as _Segment                      on  $projection.Segment = _Segment.Segment
  association [0..*] to I_ProfitCenter                 as _ProfitCenter                 on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                                        and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
  association [0..1] to I_ProfitCenter                 as _CurrentProfitCenter          on  $projection.ControllingArea            = _CurrentProfitCenter.ControllingArea
                                                                                        and $projection.ProfitCenter               = _CurrentProfitCenter.ProfitCenter
                                                                                        and _CurrentProfitCenter.ValidityStartDate <= $session.system_date
                                                                                        and _CurrentProfitCenter.ValidityEndDate   >= $session.system_date
  association [0..*] to I_CostCenter                   as _CostCenter                   on  $projection.ControllingArea = _CostCenter.ControllingArea
                                                                                        and $projection.CostCenter      = _CostCenter.CostCenter
  association [0..1] to I_CostCenter                   as _CurrentCostCenter            on  $projection.ControllingArea          = _CurrentCostCenter.ControllingArea
                                                                                        and $projection.CostCenter               = _CurrentCostCenter.CostCenter
                                                                                        and _CurrentCostCenter.ValidityStartDate <= $session.system_date
                                                                                        and _CurrentCostCenter.ValidityEndDate   >= $session.system_date
  association [0..1] to I_BusinessArea                 as _BusinessArea                 on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_FunctionalArea               as _FunctionalArea               on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea
  association [0..*] to I_CostCenterActivityType       as _CostCtrActivityType          on  $projection.ControllingArea     = _CostCtrActivityType.ControllingArea
                                                                                        and $projection.CostCtrActivityType = _CostCtrActivityType.CostCtrActivityType
  association [0..1] to I_WBSElement                   as _WBSElement                   on  $projection.WBSElement = _WBSElement.WBSElement
  association [0..1] to I_WBSElementByInternalKey      as _WBSElementByInternalKey      on  $projection.WBSElementInternalID = _WBSElementByInternalKey.WBSElementInternalID
  association [0..1] to I_WBSElementBasicData          as _WBSElementBasicData          on  $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID
//  association [0..1] to I_WBSElementBasicData          as _WBSElementInternalID         on  $projection.WBSElement = _WBSElementInternalID.WBSElement
  association [0..1] to I_WBSElementBasicData          as _PartnerWBSElementBasicData   on  $projection.PartnerWBSElementInternalID = _PartnerWBSElementBasicData.WBSElementInternalID

  association [0..1] to I_Project                      as _Project                      on  $projection.Project = _Project.Project
  association [0..1] to I_ProjectBasicData             as _ProjectBasicData             on  $projection.ProjectInternalID = _ProjectBasicData.ProjectInternalID
  association [0..1] to I_ProjectBasicData             as _PartnerProjectBasicData      on  $projection.PartnerProjectInternalID = _PartnerProjectBasicData.ProjectInternalID

  association [0..1] to I_GLAccountInChartOfAccounts   as _GLAccountInChartOfAccounts   on  $projection.ChartOfAccounts = _GLAccountInChartOfAccounts.ChartOfAccounts
                                                                                        and $projection.GLAccount       = _GLAccountInChartOfAccounts.GLAccount
  association [0..1] to I_GLAccountInCompanyCode       as _GLAccountInCompanyCode       on  $projection.CompanyCode = _GLAccountInCompanyCode.CompanyCode
                                                                                        and $projection.GLAccount   = _GLAccountInCompanyCode.GLAccount
  association [0..1] to I_ChartOfAccounts              as _ChartOfAccounts              on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts

  association [0..1] to I_Plant                        as _Plant                        on  $projection.Plant = _Plant.Plant
  //association[0..1] to I_WorkPackageWorkItem          as _WorkPackageWorkItem          on $projection.WorkItem                        = _WorkPackageWorkItem.WorkItem and
  //                                                                                        $projection.WorkPackage                     = _WorkPackageWorkItem.WorkPackage
  //association[0..1] to I_WorkPackage                  as _WorkPackage                  on $projection.WorkPackage                     = _WorkPackage.WorkPackage
  //
  association [1..1] to I_Ledger                       as _Ledger                       on  $projection.Ledger = _Ledger.Ledger
  association [0..1] to I_Customer                     as _Customer                     on  $projection.Customer = _Customer.Customer
  association [0..1] to I_CustomerCompany              as _CustomerCompany              on  $projection.Customer    = _CustomerCompany.Customer
                                                                                        and $projection.CompanyCode = _CustomerCompany.CompanyCode    
  association [0..1] to I_CustomerGroup                as _CustomerGroup                on  $projection.CustomerGroup = _CustomerGroup.CustomerGroup

  // deprecated
  association [0..1] to I_Material                     as _Material                     on  $projection.Material = _Material.Material //do not use any longer, use _Product
  // deprecated
  association [0..1] to I_MaterialGroup                as _MaterialGroup                on  $projection.MaterialGroup = _MaterialGroup.MaterialGroup //do not use any longer, use _ProductGroup
  association [0..1] to I_Product                      as _Product                      on  $projection.Product = _Product.Product
  association [0..1] to I_ProductGroup                 as _SoldProductGroup             on  $projection.SoldProductGroup = _SoldProductGroup.MaterialGroup
  association [0..1] to I_ProductGroup_2               as _SoldProductGroup_2           on  $projection.SoldProductGroup = _SoldProductGroup_2.ProductGroup
  association [0..1] to I_ProductGroup                 as _ProductGroup                 on  $projection.ProductGroup = _ProductGroup.MaterialGroup
  association [0..1] to I_ProductGroup_2               as _ProductGroup_2               on  $projection.ProductGroup = _ProductGroup_2.ProductGroup  

  // deprecated
  association [0..1] to I_Material                     as _SoldMaterial                 on  $projection.SoldMaterial = _SoldMaterial.Material //do not use any longer, use _SoldProduct
  association [0..1] to I_Product                      as _SoldProduct                  on  $projection.SoldProduct = _SoldProduct.Product

  // new association for product group of "moved" product to new V2 model of ProductGroup 
//  association [0..1] to I_ProductGroup_2               as _ProductGroup                 on  $projection.ProductGroup = _ProductGroup.ProductGroup

  association [0..1] to I_SalesOrder                   as _SalesOrder                   on  $projection.SalesOrder = _SalesOrder.SalesOrder
  association [0..1] to I_SalesOrderItem               as _SalesOrderItem               on  $projection.SalesOrder     = _SalesOrderItem.SalesOrder
                                                                                        and $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem
  association [0..1] to I_SalesDocument                as _SalesDocument                on  $projection.SalesDocument = _SalesDocument.SalesDocument
  association [0..1] to I_SalesDocumentItem            as _SalesDocumentItem            on  $projection.SalesDocument     = _SalesDocumentItem.SalesDocument
                                                                                        and $projection.SalesDocumentItem = _SalesDocumentItem.SalesDocumentItem
  // association[0..1] to I_Order                        as _Order                      on $projection.OrderID                         = _Order.OrderID
  association [0..1] to I_InternalOrder                as _InternalOrder                on  $projection.OrderID = _InternalOrder.InternalOrder
  association [0..1] to I_Order                        as _Order                        on  $projection.OrderID = _Order.OrderID
  association [0..*] to I_CostAnalysisResource         as _CostAnalysisResource         on  $projection.ControllingArea      = _CostAnalysisResource.ControllingArea
                                                                                        and $projection.CostAnalysisResource = _CostAnalysisResource.CostAnalysisResource
  association [0..1] to I_WorkPackageWorkItem          as _WorkPackageWorkItem          on  $projection.WorkItem    = _WorkPackageWorkItem.WorkItem
                                                                                        and $projection.WorkPackage = _WorkPackageWorkItem.WorkPackage
  association [0..1] to I_WorkPackage                  as _WorkPackage                  on  $projection.WorkPackage = _WorkPackage.WorkPackage
  association [0..1] to I_Employment                   as _Employment                   on  $projection.PersonnelNumber = _Employment.EmploymentInternalID
  association [0..1] to I_PersonWorkAgreement_1        as _PersonWorkAgreement_1        on  $projection.PersonnelNumber = _PersonWorkAgreement_1.PersonWorkAgreement   
  //association[0..1] to I_ReferenceDocumentType        as _ReferenceDocumentType         on $projection.ReferenceDocumentType          = _ReferenceDocumentType.ReferenceDocumentType
  //association[0..1] to I_ReferenceDocumentType        as _PredecessorReferenceDocType   on $projection.PredecessorReferenceDocType    = _PredecessorReferenceDocType.ReferenceDocumentType
  association [0..*] to I_CostCenter                   as _PartnerCostCenter            on  $projection.ControllingArea   = _PartnerCostCenter.ControllingArea
                                                                                        and $projection.PartnerCostCenter = _PartnerCostCenter.CostCenter
  association [0..*] to I_ProfitCenter                 as _PartnerProfitCenter          on  $projection.ControllingArea     = _PartnerProfitCenter.ControllingArea
                                                                                        and $projection.PartnerProfitCenter = _PartnerProfitCenter.ProfitCenter
  association [0..1] to I_BusinessArea                 as _PartnerBusinessArea          on  $projection.PartnerBusinessArea = _PartnerBusinessArea.BusinessArea
  association [0..1] to I_FunctionalArea               as _PartnerFunctionalArea        on  $projection.PartnerFunctionalArea = _PartnerFunctionalArea.FunctionalArea
  association [0..1] to I_CompanyCode                  as _PartnerCompanyCode           on  $projection.PartnerCompanyCode = _PartnerCompanyCode.CompanyCode
  association [0..1] to I_Segment                      as _PartnerSegment               on  $projection.PartnerSegment = _PartnerSegment.Segment
  association [0..1] to I_UserContactCard              as _User                         on  $projection.FinPlngEntryItemCreatedByUser = _User.ContactCardID
  //association[0..1] to I_ControllingObject            as _ControllingObject             on $projection.ControllingObject              = _ControllingObject.ControllingObject
  //association[0..1] to I_BusinessProcess              as _BusinessProcess               on $projection.ControllingArea                = _BusinessProcess.ControllingArea and
  //                                                                                         $projection.BusinessProcess                = _BusinessProcess.BusinessProcess
  //association[0..1] to I_ControllingObject            as _CostObject                    on $projection.CostObject                     = _CostObject.ControllingObject
  association [0..*] to I_CostCenterActivityType       as _PartnerCostCtrActivityType   on  $projection.ControllingArea            = _PartnerCostCtrActivityType.ControllingArea
                                                                                        and $projection.PartnerCostCtrActivityType = _PartnerCostCtrActivityType.CostCtrActivityType
  association [0..1] to I_InternalOrder                as _PartnerOrder                 on  $projection.PartnerOrder = _PartnerOrder.InternalOrder
  association [0..1] to I_Order                        as _PartnerOrder_2               on  $projection.PartnerOrder_2 = _PartnerOrder_2.OrderID
  //association[0..1] to I_OrderCategory                as _PartnerOrderCategory          on $projection.PartnerOrderCategory           = _PartnerOrderCategory.OrderCategory
  association [0..1] to I_WBSElement                   as _PartnerWBSElement            on  $projection.PartnerWBSElement = _PartnerWBSElement.WBSElement
  association [0..1] to I_Project                      as _PartnerProject               on  $projection.PartnerProject = _PartnerProject.Project
  association [0..1] to I_Partnercompany               as _PartnerCompany               on  $projection.PartnerCompany = _PartnerCompany.PartnerCompany
  //association[0..1] to I_SalesOrder                   as _PartnerSalesDocument          on $projection.PartnerSalesDocument           = _PartnerSalesDocument.SalesOrder
  //association[0..1] to I_SalesOrderItem               as _PartnerSalesDocumentItem      on $projection.PartnerSalesDocument           = _PartnerSalesDocumentItem.SalesOrder and
  //                                                                                         $projection.PartnerSalesDocumentItem       = _PartnerSalesDocumentItem.SalesOrderItem
  //association[0..1] to I_BusinessProcess              as _PartnerBusinessProcess        on $projection.ControllingArea                = _PartnerBusinessProcess.ControllingArea and
  //                                                                                         $projection.PartnerBusinessProcess         = _PartnerBusinessProcess.BusinessProcess
  association [0..1] to I_ControllingDebitCreditCode   as _ControllingDebitCreditCode   on  $projection.ControllingDebitCreditCode = _ControllingDebitCreditCode.ControllingDebitCreditCode
  association [0..1] to I_SalesOrganization            as _SalesOrganization            on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [0..1] to I_DistributionChannel          as _DistributionChannel          on  $projection.DistributionChannel = _DistributionChannel.DistributionChannel
  association [0..1] to I_BillingDocumentType          as _BillingDocumentType          on  $projection.BillingDocumentType = _BillingDocumentType.BillingDocumentType

  association [0..1] to I_Division                     as _Division                     on  $projection.Division = _Division.Division
  association [0..1] to I_Division                     as _OrganizationDivision         on  $projection.OrganizationDivision = _OrganizationDivision.Division
  //association[0..1] to I_Fund                         as _Fund                          on $projection.FinancialManagementArea        = _Fund.FinancialManagementArea and
  //                                                                                         $projection.Fund                           = _Fund.Fund
  //association[0..1] to I_Fund                         as _PartnerFund                   on $projection.FinancialManagementArea        = _PartnerFund.FinancialManagementArea and
  //                                                                                         $projection.PartnerFund                    = _PartnerFund.Fund
  //association[0..*] to I_FundsCenter                  as _FundsCenter                   on $projection.FinancialManagementArea        = _FundsCenter.FinancialManagementArea and
  //                                                                                         $projection.FundsCenter                    = _FundsCenter.FundsCenter
  //association[0..1] to I_ControllingObject            as _OriginSenderObject             on $projection.OriginSenderObject            =  _OriginSenderObject.ControllingObject
  //association[0..1] to I_ControllingObjectClass       as _ControllingObjectClass         on $projection.ControllingObjectClass        =  _ControllingObjectClass.ControllingObjectClass
  association [0..1] to I_Country                      as _CustomerSupplierCountry      on  $projection.CustomerSupplierCountry = _CustomerSupplierCountry.Country
  association [0..1] to I_SalesDistrict                as _SalesDistrict                on  $projection.SalesDistrict = _SalesDistrict.SalesDistrict
  association [0..1] to I_Customer                     as _BillToParty                  on  $projection.BillToParty = _BillToParty.Customer
  association [0..1] to I_Customer                     as _ShipToParty                  on  $projection.ShipToParty = _ShipToParty.Customer
  //association[0..1] to I_ControllingObjectClass       as _PartnerControllingObjectClass  on $projection.PartnerControllingObjectClass =  _PartnerControllingObjectClass.ControllingObjectClass
  //association[0..1] to I_OrderCategory                as _OrderCategory                  on $projection.OrderCategory                 =  _OrderCategory.OrderCategory
  //association[0..1] to I_NetworkActivity             as _RelatedNetworkActivity         on $projection.ProjectNetwork                =  _RelatedNetworkActivity.ProjectNetwork and
  //                                                                                          $projection.RelatedNetworkActivity        =  _RelatedNetworkActivity.NetworkActivity
  //association[0..1] to I_NetworkActivity             as _PartnerProjectNetworkActivity  on $projection.PartnerProjectNetwork         =  _PartnerProjectNetworkActivity.ProjectNetwork and
  //                                                                                          $projection.PartnerProjectNetworkActivity =  _PartnerProjectNetworkActivity.NetworkActivity
  //association[0..*] to I_CostOriginGroup              as _CostOriginGroup                on $projection.ControllingArea               = _CostOriginGroup.ControllingArea and
  // not contained in view                                                                    $projection.CostOriginType                = _CostOriginGroup.CostOriginType and
  //                                                                                          $projection.CostOriginGroup               = _CostOriginGroup.CostOriginGroup
  //association[0..1] to I_FinancialManagementArea      as _FinancialManagementArea        on $projection.FinancialManagementArea       = _FinancialManagementArea.FinancialManagementArea
  //association[0..1] to I_FundedProgram                as _FundedProgram                  on $projection.FinancialManagementArea       = _FundedProgram.FinancialManagementArea and
  //                                                                                          $projection.FundedProgram                 = _FundedProgram.FundedProgram
  //association[0..1] to I_OperatingConcern             as _OperatingConcern               on $projection.OperatingConcern              = _OperatingConcern.OperatingConcern
  //association[0..1] to I_ProjectNetwork               as _ProjectNetwork                 on $projection.ProjectNetwork                =  _ProjectNetwork.ProjectNetwork
  association [0..*] to I_CustomerSupplierIndustryText as _CustomerSupplierIndustryText on  $projection.CustomerSupplierIndustry = _CustomerSupplierIndustryText.Industry
  association [0..1] to I_PlanningCategory             as _PlanningCategory             on  $projection.PlanningCategory = _PlanningCategory.PlanningCategory
  association [1..1] to E_FinancialPlanningEntryItem   as _Extension                    on  $projection.FinancialPlanningReqTransSqnc = _Extension.FinancialPlanningReqTransSqnc
                                                                                        and $projection.FinancialPlanningDataPacket   = _Extension.FinancialPlanningDataPacket
                                                                                        and $projection.FinancialPlanningEntryItem    = _Extension.FinancialPlanningEntryItem
  association [0..1] to I_WorkCenter                   as _WorkCenter                   on  $projection.WorkCenterInternalID = _WorkCenter.WorkCenterInternalID
                                                                                        and _WorkCenter.WorkCenterTypeCode   = 'A'
  association [0..1] to I_BillableControl              as _BillableControl              on  $projection.BillableControl = _BillableControl.BillableControl

  association [0..*] to I_SemTagGLAccount              as _SemTagGLAccount              on  $projection.GLAccount       = _SemTagGLAccount.GLAccount
                                                                                        and $projection.ChartOfAccounts = _SemTagGLAccount.ChartOfAccounts
  association [0..1] to I_FinancialManagementArea      as _FinancialManagementArea      on  $projection.FinancialManagementArea = _FinancialManagementArea.FinancialManagementArea
  association [0..1] to I_Fund                         as _Fund                         on  $projection.FinancialManagementArea = _Fund.FinancialManagementArea
                                                                                        and $projection.Fund                    = _Fund.Fund
  association [0..1] to I_Grant                        as _Grant                        on  $projection.GrantID                 = _Grant.GrantID   
  association [0..1] to I_BudgetPeriod                 as _BudgetPeriod                 on  $projection.BudgetPeriod = _BudgetPeriod.BudgetPeriod
  association [0..1] to I_BudgetProcess                as _BudgetProcess                on  $projection.BudgetProcess = _BudgetProcess.BudgetProcess
  association [0..1] to I_BudgetingType                as _BudgetingType                on  $projection.BudgetingType = _BudgetingType.BudgetingType
  
  association [0..1] to I_MasterFixedAsset             as _MasterFixedAsset              on  $projection.CompanyCode      = _MasterFixedAsset.CompanyCode
                                                                                         and $projection.MasterFixedAsset = _MasterFixedAsset.MasterFixedAsset      
  association [0..1] to I_FixedAsset                   as _FixedAsset                    on  $projection.CompanyCode      = _FixedAsset.CompanyCode
                                                                                         and $projection.MasterFixedAsset = _FixedAsset.MasterFixedAsset
                                                                                         and $projection.FixedAsset       = _FixedAsset.FixedAsset   
  association [0..1] to I_SubLedgerAccLineItemType     as _SubLedgerAccLineItemType      on  $projection.SubLedgerAcctLineItemType  = _SubLedgerAccLineItemType.SubLedgerAcctLineItemType

  association [0..1] to I_Equipment                   as _Equipment                      on  $projection.Equipment                   = _Equipment.Equipment
  association [0..1] to I_FunctionalLocation          as _FunctionalLocation             on  $projection.FunctionalLocation          = _FunctionalLocation.FunctionalLocation
  association [0..1] to I_Product                     as _Assembly                       on  $projection.Assembly                   = _Assembly.Product
  association [0..1] to I_MaintenanceActivityType     as _MaintenanceActivityType        on  $projection.MaintenanceActivityType    = _MaintenanceActivityType.MaintenanceActivityType
  association [0..1] to I_UnitOfMeasure               as _LotSizeUnit                    on $projection.LotSizeUnit    =     _LotSizeUnit.UnitOfMeasure       

  association [0..*] to I_CostCenter                   as _OriginCostCenter              on  $projection.ControllingArea           = _OriginCostCenter.ControllingArea
                                                                                         and $projection.OriginCostCenter          = _OriginCostCenter.CostCenter
  association [0..*] to I_CostCenterActivityType       as _OriginCostCtrActivityType     on  $projection.ControllingArea           = _OriginCostCtrActivityType.ControllingArea
                                                                                         and $projection.OriginCostCtrActivityType = _OriginCostCtrActivityType.CostCtrActivityType
                                                                                         
  association [0..*] to I_ProfitCenter                 as _OriginProfitCenter            on  $projection.ControllingArea    = _OriginProfitCenter.ControllingArea
                                                                                         and $projection.OriginProfitCenter = _OriginProfitCenter.ProfitCenter                                                                                         
                                                                                         
  association [0..1] to I_Product                      as _ProducedProduct               on  $projection.ProducedProduct           = _ProducedProduct.Product
  
  
  association [0..1] to I_ServiceDocumentType          as _ServiceDocumentType           on  $projection.ServiceDocumentType        = _ServiceDocumentType.ServiceDocumentType

  association [0..1] to I_SrvcDocByDocumentType        as _ServiceDocument               on  $projection.ServiceDocumentType        = _ServiceDocument.ServiceDocumentType
                                                                                         and $projection.ServiceDocument            = _ServiceDocument.ServiceDocument

  association [0..1] to I_SrvcDocItemByDocumentType    as _ServiceDocumentItem           on  $projection.ServiceDocumentType        = _ServiceDocumentItem.ServiceDocumentType
                                                                                         and $projection.ServiceDocument            = _ServiceDocumentItem.ServiceDocument
                                                                                         and $projection.ServiceDocumentItem        = _ServiceDocumentItem.ServiceDocumentItem

  association [0..1] to I_ServiceDocumentType          as _ServiceContractType           on  $projection.ServiceContractType        = _ServiceContractType.ServiceDocumentType

  association [0..1] to I_SrvcDocByDocumentType        as _ServiceContract               on  $projection.ServiceContractType        = _ServiceContract.ServiceDocumentType
                                                                                         and $projection.ServiceContract            = _ServiceContract.ServiceDocument

  association [0..1] to I_SrvcDocItemByDocumentType    as _ServiceContractItem           on  $projection.ServiceContractType        = _ServiceContractItem.ServiceDocumentType
                                                                                         and $projection.ServiceContract            = _ServiceContractItem.ServiceDocument
                                                                                         and $projection.ServiceContractItem        = _ServiceContractItem.ServiceDocumentItem  
                                                                                         
  association [0..1] to I_SponsoredClassCore         as _SponsoredClass      on  $projection.SponsoredClass  = _SponsoredClass.SponsoredClass   
  
  association [0..1] to I_SponsoredProgramCore       as _SponsoredProgram    on  $projection.SponsoredProgram = _SponsoredProgram.SponsoredProgram  
  
  association [0..1]  to I_AccountAssignmentType    as _AccountAssignmentType            on  $projection.AccountAssignmentType = _AccountAssignmentType.AccountAssignmentType                                                                                    
                                                                                            
{
  key reqtsn                                                                                as FinancialPlanningReqTransSqnc,
  key datapakid                                                                             as FinancialPlanningDataPacket,
//      @DefaultAggregation: #NONE
  key record                                                                                as FinancialPlanningEntryItem,

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ControllingAreaStdVH',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.foreignKey.association: '_ControllingArea'
      kokrs                                                                                 as ControllingArea,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      @ObjectModel.foreignKey.association: '_CompanyCode'
      rbukrs                                                                                as CompanyCode,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_LedgerStdVH',
                     element: 'Ledger' }
        }]      
      @ObjectModel.foreignKey.association: '_Ledger'
      rldnr                                                                                 as Ledger,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_GLAccountStdVH',
                     element: 'GLAccount' }
        }]      
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      racct                                                                                 as GLAccount,
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      ktopl                                                                                 as ChartOfAccounts,

      @ObjectModel.foreignKey.association: '_FiscalYear'
      gjahr                                                                                 as FiscalYear,
      @ObjectModel.foreignKey.association: '_LedgerFiscalYearForVariant'
      ryear                                                                                 as LedgerFiscalYear,
      
@ObjectModel.foreignKey.association: '_BusinessTransactionCategory'
bttype as BusinessTransactionCategory,      
@ObjectModel.foreignKey.association: '_BusinessTransactionType'
cast(bttype as fins_custbttype preserving type ) as BusinessTransactionType,                                      // this is not 100% correct ;  Type = CBTTYPE (not in ACDOCP)
 
      @ObjectModel.foreignKey.association: '_FinancialTransactionType'
      rmvct                                                                                 as FinancialTransactionType,

      usnam                                                                                 as FinPlngEntryItemCreatedByUser,
      cast(cast(substring(reqtsn,1,14) as abap.numc( 14 )) as fis_plan_item_creation_tstmp) as FinPlngEntryItemCrtnDateTime,

      ////////////////////////////////////////////////////////////////////////////////////
      // G/L additional account assignments
      ////////////////////////////////////////////////////////////////////////////////////

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_BusinessAreaStdVH',
                     element: 'BusinessArea' }
        }]
      @ObjectModel.foreignKey.association: '_BusinessArea'
      rbusa                                                                                 as BusinessArea,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProfitCenterStdVH',
                     element: 'ProfitCenter' }
        }]      
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      prctr                                                                                 as ProfitCenter,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CostCenterStdVH',
                     element: 'CostCenter' }
        }]      
      @ObjectModel.foreignKey.association: '_CostCenter'
      rcntr                                                                                 as CostCenter,
      @ObjectModel.foreignKey.association: '_Project'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'ProjectInternalID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'ProjectInternalID'
      cast(ps_pspid as fis_project preserving type )                                        as Project,
      ps_prj_pnr                                                                            as ProjectInternalID,
      @ObjectModel.foreignKey.association: '_PartnerProjectBasicData'
      pps_prj_pnr                                                                           as PartnerProjectInternalID,

      @ObjectModel.foreignKey.association: '_WBSElement'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'WBSElementInternalID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'WBSElementInternalID'
      ps_posid                                                                              as WBSElement,
      //@ObjectModel.foreignKey.association: '_WBSElementByInternalKey'
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_WBSElementBasicDataStdVH',
                           element: 'WBSElementInternalID' }
              }]      
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
//      _WBSElementInternalID.WBSElementInternalID                                            as WBSElementInternalID,
      ps_psp_pnr                                                                            as WBSElementInternalID,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_WBSElementBasicDataStdVH',
                           element: 'WBSElementInternalID' }
              }]      
      @ObjectModel.foreignKey.association: '_PartnerWBSElementBasicData'
//      cast( '' as fco_par_psp_pnr )                                                         as PartnerWBSElementInternalID,
      pps_psp_pnr                                                                           as PartnerWBSElementInternalID,  
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      rfarea                                                                                as FunctionalArea,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_SegmentStdVH',
                     element: 'Segment' }
        }]      
      @ObjectModel.foreignKey.association: '_Segment'
      segment                                                                               as Segment,
      @ObjectModel.foreignKey.association: '_CostCtrActivityType'
      lstar                                                                                 as CostCtrActivityType,
      @ObjectModel.foreignKey.association: '_CostAnalysisResource'
      rsrce                                                                                 as CostAnalysisResource,
      @ObjectModel.foreignKey.association: '_WorkPackage'
      cast( ps_posid as /cpd/plan_item_id )                                                 as WorkPackage,
      @ObjectModel.foreignKey.association: '_WorkPackageWorkItem'
      work_item_id                                                                          as WorkItem,
      bemot                                                                                 as BillableControl,
      psknz                                                                                 as IsLotSizeIndependent,
//      @DefaultAggregation: #NONE
      @Semantics: { quantity : {unitOfMeasure: 'LotSizeUnit'} }      
      losgr                                                                                 as CostingLotSize,
      @Analytics.internalName: #LOCAL 
      @ObjectModel.foreignKey.association: '_LotSizeUnit'
      lsunit                                                                                as LotSizeUnit,
      @ObjectModel.foreignKey.association: '_PartnerCompanyCode'
      cast(pbukrs as fis_partner_company_code preserving type)                              as PartnerCompanyCode,
      @Analytics.internalName: #LOCAL 
      @ObjectModel.foreignKey.association: '_OriginCostCenter'
      ukostl                                                                                as OriginCostCenter,
      @Analytics.internalName: #LOCAL 
      @ObjectModel.foreignKey.association: '_OriginCostCtrActivityType'
      ulstar                                                                                as OriginCostCtrActivityType,
      @Analytics.internalName: #LOCAL 
      @ObjectModel.foreignKey.association: '_OriginProfitCenter'      
      uprctr                                                                                as OriginProfitCenter,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_BusinessAreaStdVH',
                     element: 'BusinessArea' }
        }]      
      @ObjectModel.foreignKey.association: '_PartnerBusinessArea'
      sbusa                                                                                 as PartnerBusinessArea,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_SegmentStdVH',
                     element: 'Segment' }
        }]            
      @ObjectModel.foreignKey.association: '_PartnerSegment'
      psegment                                                                              as PartnerSegment,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProfitCenterStdVH',
                     element: 'ProfitCenter' }
        }]      
      @ObjectModel.foreignKey.association: '_PartnerProfitCenter'
      pprctr                                                                                as PartnerProfitCenter,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CostCenterStdVH',
                     element: 'CostCenter' }
        }]      
      @ObjectModel.foreignKey.association: '_PartnerCostCenter'
      scntr                                                                                 as PartnerCostCenter,
      @ObjectModel.foreignKey.association: '_PartnerProject'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'PartnerProjectInternalID'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'PartnerProjectInternalID'
      pps_pspid                                                                             as PartnerProject,
      @ObjectModel.foreignKey.association: '_PartnerWBSElement'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'PartnerWBSElementInternalID'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'PartnerWBSElementInternalID'
      pps_posid                                                                             as PartnerWBSElement, 
      @ObjectModel.foreignKey.association: '_PartnerFunctionalArea'
      sfarea                                                                                as PartnerFunctionalArea,
      @ObjectModel.foreignKey.association: '_PartnerCostCtrActivityType'
      plstar                                                                                as PartnerCostCtrActivityType,      
      @ObjectModel.foreignKey.association: '_Order'
      aufnr                                                                                 as OrderID,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'PartnerOrder_2'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'PartnerOrder_2'          
      @ObjectModel.foreignKey.association: '_PartnerOrder'
      cast(paufnr as fis_par_aufnr_depre preserving type )                                  as PartnerOrder,
      @Analytics.internalName: #LOCAL    
      @ObjectModel.foreignKey.association: '_PartnerOrder_2'
      cast(paufnr as fis_par_aufnr preserving type )                                        as PartnerOrder_2,    
      @ObjectModel.foreignKey.association: '_PartnerCompany'
      rassc                                                                                 as PartnerCompany,

      ////////////////////////////////////////////////////////////////////////////////////
      // .INCLUDE  ACDOC_SI_00 Universal Journal Entry: Transaction
      ////////////////////////////////////////////////////////////////////////////////////

      awtyp                                                                                 as ReferenceDocumentType,
      aworg                                                                                 as ReferenceDocumentContext,
      awref                                                                                 as ReferenceDocument,

      /////////////////////////////////////////////////////////////////////////////////////
      // Value Fields
      /////////////////////////////////////////////////////////////////////////////////////

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      rwcur                                                                                 as TransactionCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      wsl                                                                                   as AmountInTransactionCurrency,

      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      rhcur                                                                                 as CompanyCodeCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      hsl                                                                                   as AmountInCompanyCodeCurrency,

      @ObjectModel.foreignKey.association: '_GlobalCurrency'
      rkcur                                                                                 as GlobalCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      ksl                                                                                   as AmountInGlobalCurrency,
      
      // Functional Currency
      @ObjectModel.foreignKey.association: '_FunctionalCurrency'
      rfccur as FunctionalCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      fcsl as AmountInFunctionalCurrency,      

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency1'
      rocur                                                                                 as FreeDefinedCurrency1,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      osl                                                                                   as AmountInFreeDefinedCurrency1,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency2'
      rvcur                                                                                 as FreeDefinedCurrency2,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      vsl                                                                                   as AmountInFreeDefinedCurrency2,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency3'
      rbcur                                                                                 as FreeDefinedCurrency3,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      bsl                                                                                   as AmountInFreeDefinedCurrency3,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency4'
      rccur                                                                                 as FreeDefinedCurrency4,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      csl                                                                                   as AmountInFreeDefinedCurrency4,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency5'
      rdcur                                                                                 as FreeDefinedCurrency5,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      dsl                                                                                   as AmountInFreeDefinedCurrency5,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency6'
      recur                                                                                 as FreeDefinedCurrency6,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      esl                                                                                   as AmountInFreeDefinedCurrency6,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency7'
      rfcur                                                                                 as FreeDefinedCurrency7,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      fsl                                                                                   as AmountInFreeDefinedCurrency7,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency8'
      rgcur                                                                                 as FreeDefinedCurrency8,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      gsl                                                                                   as AmountInFreeDefinedCurrency8,

      rco_ocur                                                                              as ControllingObjectCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'ControllingObjectCurrency'} }
      co_osl                                                                                as AmountInObjectCurrency,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      kfsl                                                                                  as FixedAmountInGlobalCrcy,
      
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      hfsl as FixedAmountInCoCodeCrcy,      
      
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }      
      wfsl as FixedAmountInTransCrcy,      

      //@ObjectModel.foreignKey.association: '_BaseUnit'
      //@Semantics.unitOfMeasure:true
      //runit as BaseUnit,

      @ObjectModel.foreignKey.association: '_CostSourceUnit'
      rvunit                                                                                as CostSourceUnit,
      
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }    
      vmsl as ValuationQuantity, 

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }      
      vmfsl as ValuationFixedQuantity,            
      
      @ObjectModel.foreignKey.association: '_ReferenceQuantityUnit'
      rrunit as ReferenceQuantityUnit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ReferenceQuantityUnit'} }
      rmsl as ReferenceQuantity,      

      /////////////////////////////////////////////////////////////////////////////
      // Mandatory fields for G/L
      ////////////////////////////////////////////////////////////////////////////

      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      @Semantics.fiscal.yearVariant: true
      periv                                                                                 as FiscalYearVariant,
      @ObjectModel.foreignKey.association: '_FiscalPeriodForVariant'
      @Semantics.fiscal.period: true
      poper                                                                                 as FiscalPeriod,
      @ObjectModel.foreignKey.association: '_FiscalYearPeriodForVariant'
      @Semantics.fiscal.yearPeriod: true
      fiscyearper                                                                           as FiscalYearPeriod,
      cast( budat as fis_budat preserving type ) as PostingDate,  
      
      zuonr as AssignmentReference,    
      
      @Analytics.internalName: #LOCAL 
      @ObjectModel.foreignKey.association: '_SubLedgerAccLineItemType'
      slalittype as SubLedgerAcctLineItemType,

      ////////////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_GEN  Fields for several subledgers
      ///////////////////////////////////////////////////////////////////////////

      @ObjectModel.foreignKey.association: '_SalesOrder'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'SalesDocument'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'SalesDocument'      
      kdauf                                                                                 as SalesOrder,
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'SalesDocumentItem'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'SalesDocumentItem'        
      kdpos                                                                                 as SalesOrderItem,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_SalesDocumentStdVH',
                     element: 'SalesDocument' }
        }]      
      @ObjectModel.foreignKey.association: '_SalesDocument'
      cast(kdauf as vbeln_va preserving type)                                               as SalesDocument,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_SalesDocumentItemStdVH',
                     element: 'SalesDocumentItem' }
        }]      
      @ObjectModel.foreignKey.association: '_SalesDocumentItem'
      cast(kdpos as posnr_va preserving type)                                               as SalesDocumentItem,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_PlantStdVH',
                     element: 'Plant' }
        }]      
      @ObjectModel.foreignKey.association: '_Plant'
      werks                                                                                 as Plant,
      @ObjectModel.foreignKey.association: '_Material'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'Product'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'Product'
      matnr                                                                                 as Material,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProductStdVH',
                     element: 'Product' }
        }]      
      @ObjectModel.foreignKey.association: '_Product'
      cast (matnr as productnumber preserving type )                                        as Product,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Customer_VH',
                     element: 'Customer' }
        }]      
      @ObjectModel.foreignKey.association: '_Customer'
      kunnr                                                                                 as Customer,
      sgtxt                                                                                 as DocumentItemText,

      ////////////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_CO  Unified Journal Entry: CO fields
      ///////////////////////////////////////////////////////////////////////////
      
      cast( objnr as fis_objnr preserving type)                                             as ControllingObject,

      @ObjectModel.foreignKey.association: '_PlanningCategory'
      category                                                                              as PlanningCategory,
      @Analytics.internalName: #LOCAL    
      @ObjectModel.foreignKey.association: '_AccountAssignmentType'      
      accasty                                                                               as AccountAssignmentType,
      paccasty                                                                              as PartnerAccountAssignmentType,
      @ObjectModel.foreignKey.association: '_ControllingDebitCreditCode'
      co_belkz                                                                              as ControllingDebitCreditCode,
      @ObjectModel.foreignKey.association: '_Employment'
      pernr                                                                                 as PersonnelNumber,
      
      @Analytics.internalName: #LOCAL      
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      service_doc_type   as ServiceDocumentType,
      @Analytics.internalName: #LOCAL      
      @ObjectModel.foreignKey.association: '_ServiceDocument'
      service_doc_id    as ServiceDocument,
      @Analytics.internalName: #LOCAL    
      @ObjectModel.foreignKey.association: '_ServiceDocumentItem'
      service_doc_item_id   as ServiceDocumentItem,

      @Analytics.internalName: #LOCAL 
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_ServiceContractTypeStdVH',
                           element: 'ServiceDocumentType' }
              }]      
      @ObjectModel.foreignKey.association: '_ServiceContractType'
      service_contract_type    as ServiceContractType,
      @Analytics.internalName: #LOCAL 
      @ObjectModel.foreignKey.association: '_ServiceContract'
      service_contract_id     as ServiceContract,
      @Analytics.internalName: #LOCAL 
      @ObjectModel.foreignKey.association: '_ServiceContractItem'
      service_contract_item_id  as ServiceContractItem,
      
      nplnr  as ProjectNetwork,
      
      gkont  as OffsettingAccount,
      cast( gkoar as fis_gkoar preserving type ) as OffsettingAccountType,
      case gkoar
        when 'D' then cast ('    ' as fis_offsettingktopl preserving type )
        when 'K' then cast ('    ' as fis_offsettingktopl preserving type )
        else cast( ktopl as fis_offsettingktopl preserving type ) 
      end   as OffsettingChartOfAccounts,                  
            
      //@Semantics.booleanIndicator 
      cast( ( case when ( P_ACDOCP_COM.accasty != 'OR' and P_ACDOCP_COM.accasty != 'OP' and P_ACDOCP_COM.accasty != 'OV' ) and P_ACDOCP_COM.aufnr != ''    
             then 'X'
             else ' '            
        end )
      as fins_xaufnr_stat preserving type ) as IsStatisticalOrder,  

      //@Semantics.booleanIndicator 
      cast( ( case when ( P_ACDOCP_COM.accasty != 'KL' and P_ACDOCP_COM.accasty != 'KS' ) and P_ACDOCP_COM.rcntr != ''    
             then 'X' 
             else ' '        
        end )
      as fins_xkostl_stat preserving type ) as IsStatisticalCostCenter,
  
      //@Semantics.booleanIndicator 
      cast( ( case when P_ACDOCP_COM.accasty != 'VB' and P_ACDOCP_COM.kdauf != ''   
             then 'X' 
             else ' '             
        end )
      as fins_xkdpos_stat preserving type ) as IsStatisticalSalesDocument,

      //@Semantics.booleanIndicator 
      cast( ( case when ( P_ACDOCP_COM.accasty != 'PR' ) and ( P_ACDOCP_COM.ps_psp_pnr != '00000000' ) 
             then 'X' 
             else ' '         
        end )
      as fins_xps_posid_stat preserving type ) as WBSIsStatisticalWBSElement,  
      
aufnr_org as OriginOrder,       

      //////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_COPA  Unified Journal Entry: CO-PA fields
      //////////////////////////////////////////////////////////////////////

      @ObjectModel.foreignKey.association: '_BillingDocumentType'
      fkart                                                                                 as BillingDocumentType,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      vkorg                                                                                 as SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      vtweg                                                                                 as DistributionChannel,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'OrganizationDivision'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'OrganizationDivision'
      @ObjectModel.foreignKey.association: '_Division'
      spart                                                                                 as Division,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_OrganizationDivision'
      cast( spart as fis_spart preserving type )                                            as OrganizationDivision,
      @ObjectModel.foreignKey.association: '_SoldMaterial'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'SoldProduct'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'SoldProduct'
      cast(matnr_copa as fis_sold_material preserving type )                                as SoldMaterial,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProductStdVH',
                     element: 'Product' }
        }]      
      @ObjectModel.foreignKey.association: '_SoldProduct'
      cast (matnr_copa as fins_matnr_pa preserving type)                                    as SoldProduct,
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'SoldProductGroup'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'SoldProductGroup'
      matkl                                                                                 as MaterialGroup,
      @ObjectModel.foreignKey.association: '_SoldProductGroup'
      cast (matkl as productgroup preserving type)                                          as SoldProductGroup,
      @Analytics.internalName: #LOCAL     
      @ObjectModel.foreignKey.association: '_ProductGroup_2'
      matkl_mm                                                                              as ProductGroup,   
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      kdgrp                                                                                 as CustomerGroup,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CountryVH',
                     element: 'Country' }
        }]      
      @ObjectModel.foreignKey.association: '_CustomerSupplierCountry'
      land1                                                                                 as CustomerSupplierCountry,     
      cast(brsch as fis_brsch preserving type )                                             as CustomerSupplierIndustry,     
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      bzirk                                                                                 as SalesDistrict,
      @Consumption.valueHelpDefinition: [
       { entity:  { name:    'I_Customer_VH',
                    element: 'Customer' }
       }]      
      @ObjectModel.foreignKey.association: '_BillToParty'
      kunre                                                                                 as BillToParty,
      @Consumption.valueHelpDefinition: [
       { entity:  { name:    'I_Customer_VH',
                    element: 'Customer' }
       }]      
      @ObjectModel.foreignKey.association: '_ShipToParty'
      kunwe                                                                                 as ShipToParty,
      cast(konzs as fis_konzs preserving type )                                             as CustomerSupplierCorporateGroup,

      //////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_PS  Universal Journal Entry: Fields for Public Sector
      //////////////////////////////////////////////////////////////////////

      @ObjectModel.foreignKey.association: '_FinancialManagementArea'
      fikrs                                                                                 as FinancialManagementArea,
      @ObjectModel.foreignKey.association: '_Fund'
      rfund                                                                                 as Fund,
      @Analytics.internalName: #LOCAL 
      @ObjectModel.foreignKey.association: '_Grant'
      rgrant_nbr                                                                            as GrantID,
      @ObjectModel.foreignKey.association: '_BudgetPeriod'
      rbudget_pd                                                                            as BudgetPeriod,
      
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_SponsoredProgram'
rsponsored_prog as SponsoredProgram,

@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_SponsoredClass'
rsponsored_class as SponsoredClass,                 
      
      rbdgt_vldty_nbr as GteeMBudgetValidityNumber,         
      
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_BudgetProcess'
      budget_process                                                                        as BudgetProcess,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_BudgetingType'
      budget_subcategory                                                                    as BudgetingType,
      
      bdgt_doc_workflow_status as BudgetDocWorkFlowStatus,

      //////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_LOG  Universal Journal Entry: Fields for Logistics
      //////////////////////////////////////////////////////////////////////

      arbid                                                                                 as WorkCenterInternalID,
      vornr                                                                                 as OrderOperation,
      aufps                                                                                 as OrderItem,
      paufps                                                                                as PartnerOrderItem,
      
      //////////////////////////////////////////////////
      // .INCLUDE  ACDOC_SI_LOG_ACT:  New Fields  PM  //
      //////////////////////////////////////////////////
      //  @ObjectModel.foreignKey.association: '_MaintenanceOrderSubOperation'      // Triangle Condition 
      uvorn                as OrderSuboperation,     
      @ObjectModel.foreignKey.association: '_Equipment'          
      equnr                as Equipment,
      @ObjectModel.foreignKey.association: '_FunctionalLocation'
      tplnr                as FunctionalLocation, 
      @ObjectModel.foreignKey.association: '_Assembly'
      istru                as Assembly, 
      @ObjectModel.foreignKey.association: '_MaintenanceActivityType'
      cast(ilart as rsh_eam_maint_activity_type preserving type ) as MaintenanceActivityType,
      //@ObjectModel.foreignKey.association: '_MaintOrdPlngDegreeCode'
      plknz                as MaintenanceOrderPlanningCode,
      //@ObjectModel.foreignKey.association: '_PMNotificationPriorityType'
      artpr                as MaintPriorityType,
      //@ObjectModel.foreignKey.association: '_PMNotificationPriority'
      priok                as MaintPriority,
      //@ObjectModel.foreignKey.association: '_SuperiorOrder'
      maufnr               as SuperiorOrder,
      
      vornr_org as OriginOrderOperation, 
      
      /////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_FAA  Unified Journal Entry: Fields for Asset Accounting
      /////////////////////////////////////////////////////////////////////////          
      afabe   as AssetDepreciationArea,
      @Analytics.internalName: #LOCAL 
      @ObjectModel.foreignKey.association: '_MasterFixedAsset'
      anln1   as MasterFixedAsset,
      @Analytics.internalName: #LOCAL 
      @ObjectModel.foreignKey.association: '_FixedAsset'
      anln2   as FixedAsset,
      movcat  as AssetAcctTransClassfctn,
      anlkl   as AssetClass,  
      
      
///////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_JVA  Unified Journal Entry: Fields for Joint Venture Accounting
///////////////////////////////////////////////////////////////////////      
      vname                                              as JointVenture,
      cast( egrup as jv_egroup_cds preserving type )     as JointVentureEquityGroup,
      cast( recid as jv_recind_cds preserving type )     as JointVentureCostRecoveryCode,
      cast( prodper as jv_prodper_cds preserving type )  as JointVentureProductionDate,
      

///////////////////////////////////////////////////////////////////////
// .INCLUDE  ACDOCP_SI_EAM  ACDOCP: Fields for EAM (maintenace orders)
///////////////////////////////////////////////////////////////////////
rsnum as Reservation,
rspos as ReservationItem ,
rsart as ReservationType,
packno as MMServicePackage,
introw as MMServicePackageLine,


///////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOCP_SI_RE   ACDOCP: Fields for Real Estate
///////////////////////////////////////////////////////////////////////  
SWENR as REBusinessEntity,
SGENR as RealEstateBuilding,
SGRNR as RealEstateProperty,
SMENR as RERentalObject,
RECNNR as RealEstateContract, 
snksl as REServiceChargeKey,
sempsl as RESettlementUnitID,
dabrz as SettlementReferenceDate, 


///////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOCP_SI_MCE   ACDOCP: Fields for material cost estimate
///////////////////////////////////////////////////////////////////////  
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_ProducedProduct'
pmatnr          as ProducedProduct,
costg_from_date as CostEstimateValidityStartDate,
costg_to_date   as CostEstimateValidityEndDate,
hkgrp           as CostOriginGroup,


///////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_ACR STRU  0 0 Universal Journal Entry: Fields for Accrual object
///////////////////////////////////////////////////////////////////////
acrobjtype   as AccrualObjectType,
acrlogsys    as AccrualObjectLogicalSystem,
acrobj_id    as AccrualObject,
acrsobj_id   as AccrualSubobject,
acritmtype   as AccrualItemType,
acrrefobj_id as AccrualReferenceObject,
acrvaldat    as AccrualValueDate,


      //////////////////////////////////////////////////////////////////////
      //  Fields not in ACDOCA
      //////////////////////////////////////////////////////////////////////

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      kprice                                                                                as PlanPriceInGlobalCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      hprice                                                                                as PlanPriceInCompanyCodeCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      wprice                                                                                as PlanPriceInTransactionCurrency,

      //////////////////////////////////////////////////////////////////////
      //  Associations
      //////////////////////////////////////////////////////////////////////

      _Ledger,
      _CompanyCode,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   '_LedgerFiscalYearForVariant'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_LedgerFiscalYearForVariant'      
      _LedgerFiscalYear,
//      @API.element.releaseState: #DEPRECATED  // not possible as foreign key association can't be changed 
//      @API.element.successor:   '_FiscalYearForVariant'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_FiscalYearForVariant'      
      _FiscalYear,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   '_FiscalPeriodForVariant'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_FiscalPeriodForVariant'
      _FiscalPeriod,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   '_FiscalYearPeriodForVariant'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_FiscalYearPeriodForVariant'
      _FiscalYearPeriod,
      _FiscalYearVariant,
      _LedgerFiscalYearForVariant,
      _FiscalPeriodForVariant,
      _FiscalYearPeriodForVariant,
      _CalendarDate,
      _FiscalCalendarDate,
      _ControllingArea,
      _GLAccountInCompanyCode,
      _GLAccountInChartOfAccounts,
      _BusinessTransactionCategory,
      _BusinessTransactionType,
      _FinancialTransactionType,
      _TransactionCurrency,
      _CompanyCodeCurrency,
      _GlobalCurrency,
      _FunctionalCurrency,
      _FreeDefinedCurrency1,
      _FreeDefinedCurrency2,
      _FreeDefinedCurrency3,
      _FreeDefinedCurrency4,
      _FreeDefinedCurrency5,
      _FreeDefinedCurrency6,
      _FreeDefinedCurrency7,
      _FreeDefinedCurrency8,
      _ControllingObjectCurrency,
      //_BaseUnit,
      _CostSourceUnit,
      _ReferenceQuantityUnit,
      _LotSizeUnit,
      _Segment,
      _ProfitCenter,
      _CurrentProfitCenter,
      _CostCenter,
      _CurrentCostCenter,
      _AccountAssignmentType,      
      _BusinessArea,
      _FunctionalArea,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   '_WBSElementBasicData'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_WBSElementBasicData'
      _WBSElement,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   '_WBSElementBasicData'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_WBSElementBasicData'
      _WBSElementByInternalKey,
      _WBSElementBasicData,
      _PartnerWBSElementBasicData,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   '_ProjectBasicData'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_ProjectBasicData'
      _Project,
      _ProjectBasicData,
      _PartnerProjectBasicData,
      _CostCtrActivityType,
      _CostAnalysisResource,
      _WorkPackageWorkItem,
      _WorkPackage,
      _InternalOrder,
      _Order,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SalesDocument'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SalesDocument'
      _SalesOrder,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SalesDocumentItem'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SalesDocumentItem'
      _SalesOrderItem,
      _SalesDocument,
      _SalesDocumentItem,
      _PartnerCompany,
      _PartnerCompanyCode,
      _PartnerSegment,
      _PartnerProfitCenter,
      _PartnerCostCenter,
      _PartnerBusinessArea,
      _PartnerFunctionalArea,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   '_PartnerWBSElementBasicData'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_PartnerWBSElementBasicData'
      _PartnerWBSElement,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   '_PartnerProjectBasicData'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_PartnerProjectBasicData'
      _PartnerProject,
      _PartnerCostCtrActivityType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_PartnerOrder_2'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_PartnerOrder_2'
      _PartnerOrder,
      _PartnerOrder_2,
      _ChartOfAccounts,
      _ControllingDebitCreditCode,
//@API.element.releaseState: #DEPRECATED
//@API.element.successor:    '_PersonWorkAgreement_1'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_PersonWorkAgreement_1'
      _Employment,
      _PersonWorkAgreement_1,
      _Customer,
      _CustomerCompany,
      _CustomerGroup,
      _Plant,
      _BillingDocumentType,
      _SalesOrganization,
      _DistributionChannel,
      _OrganizationDivision,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_OrganizationDivision'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_OrganizationDivision'
      _Division,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_Product'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_Product'
      _Material,
      _Product,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SoldProductGroup_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SoldProductGroup_2'
      _MaterialGroup,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_ProductGroup_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_ProductGroup_2'
      _ProductGroup,
      _ProductGroup_2,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SoldProduct'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SoldProduct'
      _SoldMaterial,
      _SoldProduct,
//@API.element.releaseState: #DEPRECATED
//@API.element.successor:    '_SoldProductGroup_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SoldProductGroup_2'
      _SoldProductGroup,
      _SoldProductGroup_2,
      _CustomerSupplierCountry,
      _CustomerSupplierIndustryText,
      _SalesDistrict,
      _BillToParty,
      _ShipToParty,
      _PlanningCategory,
      _WorkCenter,
      _BillableControl,
      _SemTagGLAccount,
      _FinancialManagementArea,
      _Fund,
      _Grant,
      _BudgetPeriod,
      _BudgetingType,
      _BudgetProcess,
      _User,
_MasterFixedAsset,
_FixedAsset,
_SubLedgerAccLineItemType,   
_Equipment,
_FunctionalLocation,
_Assembly,
_MaintenanceActivityType,

_OriginCostCenter,
_OriginCostCtrActivityType,
_OriginProfitCenter,
_ProducedProduct,

_ServiceDocumentType,
_ServiceDocument,
_ServiceDocumentItem,
_ServiceContract,
_ServiceContractItem,
_ServiceContractType,

_SponsoredProgram,
_SponsoredClass,   

      // Just for Authorization Check!!! DO NOT USE!!! WILL BE DEPRECATED!!!
@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
      cast( '' as brgru)                                                                    as GLAccountAuthorizationGroup,
@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
      cast( '' as brgru)                                                                    as CustomerBasicAuthorizationGrp,
@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
      cast( '' as aufart)                                                                   as OrderType,
@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
      cast( '' as auart)                                                                    as SalesOrderType

      //_Extension  Extensions must be local


}
```
