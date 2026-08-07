---
name: I_CNSLDTNTASKLOGITEMDATAINPUT
description: "Cnsldtntasklogitemdatainput"
app_component: FIN-CS-COR-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-COR
  - interface-view
  - item-level
  - component:FIN-CS-COR-IS-2CL
  - lob:Other
---
# I_CNSLDTNTASKLOGITEMDATAINPUT

**Cnsldtntasklogitemdatainput**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CnsldtnTaskLogUUID` | ✓ | |  | `cnsldtnlognumber` |  |  |
| `CnsldtnTaskLogItemUUID` | ✓ | |  | `cnsldtnlogitemnumber` |  |  |
| `CnsldtnTaskLogItemType` |  | |  | `cnsldtnlineitemtype` |  |  |
| `AssignmentReference` |  | |  | `assignmentreference` |  |  |
| `PostingFiscalYear` |  | |  | `fiscalyear` |  |  |
| `ConsolidationDocumentNumber` |  | |  | `cast(cnsldtndocumentnumber as fincs_docnr preserving type)` |  |  |
| `ConsolidationVersion` |  | |  | `cnsldtnversion` |  |  |
| `CnsldtnJrnlEntryAmtLoclCrcy` |  | |  | `cast(cnsldtnlocalcurrency as fincs_lcurr_doc preserving type)` |  |  |
| `CnsldtnJrnlEntryAmtInLoclCrcy` |  | |  | `cast(amountincnsldtnlocalcrcy as fincs_lc_doc preserving type)` |  |  |
| `CnsldtnJrnlEntryAmtGrpCrcy` |  | |  | `cast(cnsldtngroupcurrency as fincs_gcurr_doc preserving type)` |  |  |
| `CnsldtnJrnlEntryAmtInGrpCrcy` |  | |  | `cast(amountincnsldtngroupcrcy as fincs_gc_doc preserving type)` |  |  |
| `CnsldtnJrnlEntryAmtTransCrcy` |  | |  | `cast(transactioncurrency as fincs_tcurr_doc preserving type)` |  |  |
| `CnsldtnJrnlEntryAmtInTransCrcy` |  | |  | `cast(amountintransactioncurrency as fincs_tc_doc preserving type)` |  |  |
| `CnsldtnJrnlEntryQtyBaseUnit` |  | |  | `cast(baseunit as fincs_base_unit_doc preserving type)` |  |  |
| `CnsldtnJrnlEntryQtyInBsUnt` |  | |  | `cast(quantityinbaseunit as fincs_quan_doc preserving type)` |  |  |
| `CnsldtnTriggeringAmtLoclCrcy` |  | |  | `cast(cnsldtnlocalcurrency as fincs_lcurr_tri preserving type)` |  |  |
| `CnsldtnTriggeringAmtInLoclCrcy` |  | |  | `cast(amountincnsldtnlocalcrcy as fincs_lc_tri preserving type)` |  |  |
| `CnsldtnTriggeringAmtGrpCrcy` |  | |  | `cast(cnsldtngroupcurrency as fincs_gcurr_tri preserving type)` |  |  |
| `CnsldtnTriggeringAmtInGrpCrcy` |  | |  | `cast(amountincnsldtngroupcrcy as fincs_gc_tri preserving type)` |  |  |
| `CnsldtnTriggeringAmtTransCrcy` |  | |  | `cast(transactioncurrency as fincs_tcurr_tri preserving type)` |  |  |
| `CnsldtnTriggeringAmtInTC` |  | |  | `cast(amountintransactioncurrency as fincs_tc_tri preserving type)` |  |  |
| `CnsldtnTriggeringQtyBaseUnit` |  | |  | `cast(baseunit as fincs_base_unit_tri preserving type)` |  |  |
| `CnsldtnTriggeringQtyInBsUnt` |  | |  | `cast(quantityinbaseunit as fincs_quan_tri preserving type)` |  |  |
| `ConsolidationUnit` |  | |  | `cast(cnsldtnunit as fincs_consolidationunit preserving type)` |  |  |
| `ConsolidationChartOfAccounts` |  | |  | `cast(cnsldtnchartofaccounts as fincs_conschartofaccounts preserving type)` |  |  |
| `CnsldtnFinancialStatementItem` |  | |  | `cast(cnsldtnfinstmntitm as fincs_md_finstatementitem preserving type)` |  |  |
| `PartnerConsolidationUnit` |  | |  | `cast(cnsldtnpartnerunit as fincs_consolidationunit preserving type)` |  |  |
| `ConsolidationGroup` |  | |  | `cast(cnsldtngroup as fincs_md_congr preserving type)` |  |  |
| `CompanyCode` |  | |  | `companycode` |  |  |
| `SubItemCategory` |  | |  | `cast(cnsldtnfinstmntsubitmcat as fincs_subitemcategory preserving type)` |  |  |
| `SubItem` |  | |  | `cast(cnsldtnfinstmntsubitm as fincs_subitem preserving type)` |  |  |
| `PostingLevel` |  | |  | `cast(cnsldtnpostinglevel as fincs_postinglevel preserving type)` |  |  |
| `ConsolidationApportionment` |  | |  | `cast(cnsldtnapportionment as fincs_apportionment preserving type)` |  |  |
| `CurrencyConversionsDiffType` |  | |  | `cast(cnsldtncrcycnvrsndifftype as fincs_currencycnvrsnsdifftype preserving type)` |  |  |
| `ConsolidationDocumentType` |  | |  | `cast(cnsldtndocumenttype as fincs_documenttype preserving type)` |  |  |
| `InvesteeConsolidationUnit` |  | |  | `cast(cnsldtninvesteeunit as fincs_consolidationunit preserving type)` |  |  |
| `InvestmentActivityType` |  | |  | `cast(cnsldtninvmtactivitytype as fincs_coiac preserving type)` |  |  |
| `InvestmentActivity` |  | |  | `cast(cnsldtninvmtactivity as fincs_coinr preserving type)` |  |  |
| `PostingDate` |  | |  | `postingdate` |  |  |
| `PartnerCostCenter` |  | |  | `cast(partnercostcenter as fincs_skost preserving type)` |  |  |
| `FinancialTransactionType` |  | |  | `cast(financialtransactiontype as fincs_financialtransactiontype preserving type)` |  |  |
| `CustomerGroup` |  | |  | `cast(customergroup as fincs_customergroup preserving type)` |  |  |
| `CnsldtnTskLgItmRowNmbr` |  | |  | `raw_rowid` |  |  |
| `FiscalPeriod` |  | |  | `fiscalperiod` |  |  |
| `FinancialServicesBranch` |  | |  | `cast(branch_id as fincs_financialservicesbranch preserving type)` |  |  |
| `GHGScope2CalculationMethod` |  | |  | `cast(ghgscp2calcmeth as fincs_ghgscp2calculationmethod preserving type)` |  |  |
| `CashLedgerAccount` |  | |  | `re_account` |  |  |
| `CnsldtnCashLedgerChartOfAccts` |  | |  | `cast(re_ktopl as fincs_re_ktopl preserving type)` |  |  |
| `GHGScope2ContractualInstrument` |  | |  | `cast(ghgscp2contrinstr as fincs_ghgscp2cntrctlinstrument preserving type)` |  |  |
| `CustomerSupplierCountry` |  | |  | `customersuppliercountry` |  |  |
| `FinancialDataSource` |  | |  | `cast(datasource_id as fincs_financialdatasource preserving type)` |  |  |
| `CnsldtnLogHeaderDateTime` |  | |  | `logdate` |  |  |
| `Fund` |  | |  | `rfund` |  |  |
| `GHGCategory` |  | |  | `cast(ghgcategory as fincs_ghgcategory preserving type)` |  |  |
| `GHGScope` |  | |  | `cast(ghgscope as fincs_ghgscope preserving type)` |  |  |
| `GrantID` |  | |  | `rgrant_nbr` |  |  |
| `SustainabilityModeOfTransport` |  | |  | `cast(susmodeoftransport as fincs_sustmodeoftransport preserving type)` |  |  |
| `FinancialServicesProductGroup` |  | |  | `fs_product_group` |  |  |
| `SoldProduct` |  | |  | `soldproduct` |  |  |
| `SoldProductGroup` |  | |  | `soldproductgroup` |  |  |
| `WBSElementExternalID` |  | |  | `cast(wbselement as ps_posid_edit preserving type)` |  |  |
| `ConsolidationLedger` |  | |  | `cnsldtnledger` |  |  |
| `CnsldtnGroupJrnlEntry` |  | |  | `cast(entryid as fincs_group_jrnl_entry)` |  |  |
| `ConsolidationPostingItem` |  | |  | `cnsldtnpostingitem` |  |  |
| `BillingDocumentType` |  | |  | `cast(billingdocumenttype as fincs_billingdocumenttype preserving type)` |  |  |
| `BillToParty` |  | |  | `billtoparty` |  |  |
| `BusinessArea` |  | |  | `cast(businessarea as fincs_businessarea preserving type)` |  |  |
| `ChartOfAccounts` |  | |  | `chartofaccounts` |  |  |
| `Customer` |  | |  | `cast(customer as fincs_customer preserving type)` |  |  |
| `Material` |  | |  | `cast(material as fincs_material preserving type )` |  |  |
| `Plant` |  | |  | `cast(plant as fincs_plant preserving type )` |  |  |
| `Segment` |  | |  | `cast(segment as fincs_segment preserving type)` |  |  |
| `CnsldtnTaskLogItemLatestRecord` |  | |  | `latest_indi` |  |  |
| `CnsldtnTskLgNode` |  | |  | `node` |  |  |
| `CnsldtnTskLgParNode` |  | |  | `parentnode` |  |  |
| `ConsolidationAcquisitionPeriod` |  | |  | `cnsldtnacquisitionperiod` |  |  |
| `ConsolidationAcquisitionYear` |  | |  | `cnsldtnacquisitionyear` |  |  |
| `ConsolidationDimension` |  | |  | `cnsldtndimension` |  |  |
| `ControllingArea` |  | |  | `cast(controllingarea as fincs_controllingarea preserving type)` |  |  |
| `CostCenter` |  | |  | `cast(costcenter as fincs_costcenter preserving type)` |  |  |
| `CustomerSupplierCorporateGroup` |  | |  | `customersuppliercorporategroup` |  |  |
| `CustomerSupplierIndustry` |  | |  | `customersupplierindustry` |  |  |
| `DistributionChannel` |  | |  | `cast(distributionchannel as fincs_distributionchannel preserving type)` |  |  |
| `FinancialManagementArea` |  | |  | `cast(fikrs as fincs_financialmanagementarea preserving type)` |  |  |
| `FunctionalArea` |  | |  | `cast(functionalarea as fincs_functionalarea preserving type)` |  |  |
| `GLAccount` |  | |  | `glaccount` |  |  |
| `MaterialGroup` |  | |  | `cast(materialgroup as fincs_materialgroup preserving type)` |  |  |
| `OrderID` |  | |  | `cast(orderid as fincs_order preserving type)` |  |  |
| `Division` |  | |  | `cast(organizationdivision as fincs_division preserving type)` |  |  |
| `PartnerBusinessArea` |  | |  | `cast(partnerbusinessarea as fincs_businessarea preserving type)` |  |  |
| `PartnerCompany` |  | |  | `cast(partnercompany as fis_rassc preserving type)` |  |  |
| `PartnerFunctionalArea` |  | |  | `cast(partnerfunctionalarea as fis_sfkber preserving type)` |  |  |
| `PartnerProfitCenter` |  | |  | `cast(partnerprofitcenter as fincs_partnerprofitcenter preserving type )` |  |  |
| `PartnerSegment` |  | |  | `cast(partnersegment as fincs_psegment preserving type)` |  |  |
| `PartnerWBSElementExternalID` |  | |  | `cast(partnerwbselement as fis_par_psp_pnr_ext preserving type)` |  |  |
| `ProfitCenter` |  | |  | `cast(profitcenter as fincs_profitcenter preserving type )` |  |  |
| `SalesDistrict` |  | |  | `cast(salesdistrict as fincs_salesdistrict preserving type)` |  |  |
| `SalesOrganization` |  | |  | `cast(salesorganization as fincs_salesorganization preserving type)` |  |  |
| `ShipToParty` |  | |  | `shiptoparty` |  |  |
| `Supplier` |  | |  | `cast(supplier as fincs_supplier preserving type)` |  |  |
| `GHGDataQualityCharacteristic` |  | |  | `cast(ghgdtaqltycharc as fincs_ghgdtaqltycharc preserving type)` |  |  |
| `GHGEnergyClassification` |  | |  | `cast(ghgenergyclass as fincs_ghgenergyclassification preserving type)` |  |  |
| `GHGEnergyMix` |  | |  | `cast(ghgenergymix as fincs_ghgenergymix preserving type)` |  |  |
| `GHGEnergySourcingType` |  | |  | `cast(ghgengysrcgtype as fincs_ghgenergysourcingtype preserving type)` |  |  |
| `WBSElementInternalID` |  | |  | `cast(wbselementinternalid as ps_s4_pspnr preserving type)` |  |  |
| `ProjectExternalID` |  | |  | `cast(project as ps_pspid_edit preserving type)` |  |  |
| `CnsldtnAdhocItem` |  | |  | `adhocitem` |  |  |
| `CnsldtnAdhocSet` |  | |  | `adhocset` |  |  |
| `CnsldtnAdhocSetItem` |  | |  | `adhocsetitem` |  |  |
| `_CnsldtnVersion` | | ✓ | | | | |
| `_CnsldtnJrnlEntryAmtLoclCrcy` | | ✓ | | | | |
| `_CnsldtnJrnlEntryAmtGrpCrcy` | | ✓ | | | | |
| `_CnsldtnJrnlEntryAmtTransCrcy` | | ✓ | | | | |
| `_CnsldtnJrnlEntryQtyBaseUnit` | | ✓ | | | | |
| `_CnsldtnTriggeringAmtLoclCrcy` | | ✓ | | | | |
| `_CnsldtnTriggeringAmtGrpCrcy` | | ✓ | | | | |
| `_CnsldtnTriggeringAmtTransCrcy` | | ✓ | | | | |
| `_CnsldtnTriggeringQtyBaseUnit` | | ✓ | | | | |
| `_CnsldtnUnit` | | ✓ | | | | |
| `_CnsldtnChartOfAccounts` | | ✓ | | | | |
| `_CnsldtnFSItem` | | ✓ | | | | |
| `_CnsldtnUnitPartner` | | ✓ | | | | |
| `_CnsldtnGroup` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_CnsldtnSubitemCategory` | | ✓ | | | | |
| `_CnsldtnSubItem` | | ✓ | | | | |
| `_CnsldtnPostingLevel` | | ✓ | | | | |
| `_CnsldtnApportionment` | | ✓ | | | | |
| `_CnsldtnCrcyCnvrsnDiffType` | | ✓ | | | | |
| `_CnsldtnDocumentType` | | ✓ | | | | |
| `_CnsldtnUnitInvestee` | | ✓ | | | | |
| `_CnsldtnInvmtActy` | | ✓ | | | | |
| `_CnsldtnFinTransType` | | ✓ | | | | |
| `_CnsldtnCustomerGroup` | | ✓ | | | | |
| `_CnsldtnGHGScp2CalcMethod` | | ✓ | | | | |
| `_CnsldtnCashLedgerAccount` | | ✓ | | | | |
| `_CnsldtnCashLedgerChartOfAccts` | | ✓ | | | | |
| `_CnsldtnGHGScp2CntrctlInstr` | | ✓ | | | | |
| `_CnsldtnCountry` | | ✓ | | | | |
| `_CnsldtnGHGCategory` | | ✓ | | | | |
| `_CnsldtnGHGScope` | | ✓ | | | | |
| `_CnsldtnSustModeOfTransport` | | ✓ | | | | |
| `_CnsldtnProduct` | | ✓ | | | | |
| `_CnsldtnProductGroup` | | ✓ | | | | |
| `_CnsldtnBillingDocumentType` | | ✓ | | | | |
| `_CnsldtnBusinessArea` | | ✓ | | | | |
| `_CnsldtnCustomer` | | ✓ | | | | |
| `_CnsldtnMaterial` | | ✓ | | | | |
| `_CnsldtnPlant` | | ✓ | | | | |
| `_CnsldtnSegment` | | ✓ | | | | |
| `_CnsldtnTaskLogItemType` | | ✓ | | | | |
| `_CnsldtnDimension` | | ✓ | | | | |
| `_CnsldtnControllingArea` | | ✓ | | | | |
| `_CnsldtnCostCenter` | | ✓ | | | | |
| `_CnsldtnDistributionChannel` | | ✓ | | | | |
| `_CnsldtnFinancialDataSource` | | ✓ | | | | |
| `_CnsldtnFinManagementArea` | | ✓ | | | | |
| `_CnsldtnFinServicesBranch` | | ✓ | | | | |
| `_CnsldtnFunctionalArea` | | ✓ | | | | |
| `_CnsldtnFund` | | ✓ | | | | |
| `_CnsldtnGrant` | | ✓ | | | | |
| `_CnsldtnMaterialGroup` | | ✓ | | | | |
| `_CnsldtnOrder` | | ✓ | | | | |
| `_CnsldtnDivision` | | ✓ | | | | |
| `_CnsldtnBusinessAreaPartner` | | ✓ | | | | |
| `_CnsldtnFunctionalAreaPartner` | | ✓ | | | | |
| `_CnsldtnProfitCenterPartner` | | ✓ | | | | |
| `_CnsldtnSegmentPartner` | | ✓ | | | | |
| `_CnsldtnProfitCenter` | | ✓ | | | | |
| `_CnsldtnSalesDistrict` | | ✓ | | | | |
| `_CnsldtnSalesOrganization` | | ✓ | | | | |
| `_CnsldtnSupplier` | | ✓ | | | | |
| `_CnsldtnGHGDtaQltyCharc` | | ✓ | | | | |
| `_CnsldtnGHGEngyClassification` | | ✓ | | | | |
| `_CnsldtnGHGEnergyMix` | | ✓ | | | | |
| `_CnsldtnGHGEnergySourcingType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnVersion` | `I_CnsldtnVersion` | [0..1] |
| `_CnsldtnJrnlEntryAmtLoclCrcy` | `I_Currency` | [0..1] |
| `_CnsldtnJrnlEntryAmtGrpCrcy` | `I_Currency` | [0..1] |
| `_CnsldtnJrnlEntryAmtTransCrcy` | `I_Currency` | [0..1] |
| `_CnsldtnJrnlEntryQtyBaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_CnsldtnTriggeringAmtLoclCrcy` | `I_Currency` | [0..1] |
| `_CnsldtnTriggeringAmtGrpCrcy` | `I_Currency` | [0..1] |
| `_CnsldtnTriggeringAmtTransCrcy` | `I_Currency` | [0..1] |
| `_CnsldtnTriggeringQtyBaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_CnsldtnUnit` | `I_CnsldtnUnit_4` | [0..1] |
| `_CnsldtnChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [0..1] |
| `_CnsldtnFSItem` | `I_CnsldtnFSItem_2` | [0..1] |
| `_CnsldtnUnitPartner` | `I_CnsldtnUnit_4` | [0..1] |
| `_CnsldtnGroup` | `I_CnsldtnGroup_3` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_CnsldtnSubitemCategory` | `I_CnsldtnSubitemCategory_2` | [0..1] |
| `_CnsldtnSubItem` | `I_CnsldtnSubitem_2` | [0..1] |
| `_CnsldtnPostingLevel` | `I_CnsldtnPostingLevel` | [0..1] |
| `_CnsldtnApportionment` | `I_CnsldtnApportionment` | [0..1] |
| `_CnsldtnCrcyCnvrsnDiffType` | `I_CnsldtnCrcyCnvrsnDiffType` | [0..1] |
| `_CnsldtnDocumentType` | `I_CnsldtnDocumentType_2` | [0..1] |
| `_CnsldtnUnitInvestee` | `I_CnsldtnUnit_4` | [0..1] |
| `_CnsldtnInvmtActy` | `I_CnsldtnInvmtActy` | [0..1] |
| `_CnsldtnFinTransType` | `I_CnsldtnFinTransType` | [0..1] |
| `_CnsldtnCustomerGroup` | `I_CnsldtnCustomerGroup` | [0..1] |
| `_CnsldtnGHGScp2CalcMethod` | `I_CnsldtnGHGScp2CalcMethod` | [0..1] |
| `_CnsldtnCashLedgerAccount` | `I_CnsldtnGLAccount_2` | [0..1] |
| `_CnsldtnCashLedgerChartOfAccts` | `I_CnsldtnGLChartOfAccounts` | [0..1] |
| `_CnsldtnGHGScp2CntrctlInstr` | `I_CnsldtnGHGScp2CntrctlInstr` | [0..1] |
| `_CnsldtnCountry` | `I_CnsldtnCountry` | [0..1] |
| `_CnsldtnGHGCategory` | `I_CnsldtnGHGCategory` | [0..1] |
| `_CnsldtnGHGScope` | `I_CnsldtnGHGScope` | [0..1] |
| `_CnsldtnSustModeOfTransport` | `I_CnsldtnSustModeOfTransport` | [0..1] |
| `_CnsldtnProduct` | `I_CnsldtnProduct` | [0..1] |
| `_CnsldtnProductGroup` | `I_CnsldtnProductGroup` | [0..1] |
| `_CnsldtnBillingDocumentType` | `I_CnsldtnBillingDocumentType` | [0..1] |
| `_CnsldtnBusinessArea` | `I_CnsldtnBusinessArea` | [0..1] |
| `_CnsldtnCustomer` | `I_CnsldtnCustomer` | [0..1] |
| `_CnsldtnMaterial` | `I_CnsldtnMaterial` | [0..1] |
| `_CnsldtnPlant` | `I_CnsldtnPlant` | [0..1] |
| `_CnsldtnSegment` | `I_CnsldtnSegment` | [0..1] |
| `_CnsldtnTaskLogItemType` | `I_CnsldtnTaskLogItemType` | [0..1] |
| `_CnsldtnDimension` | `I_CnsldtnDimension` | [0..1] |
| `_CnsldtnControllingArea` | `I_CnsldtnControllingArea` | [0..1] |
| `_CnsldtnCostCenter` | `I_CnsldtnCostCenter` | [0..1] |
| `_CnsldtnDistributionChannel` | `I_CnsldtnDistributionChannel` | [0..1] |
| `_CnsldtnFinancialDataSource` | `I_CnsldtnFinancialDataSource` | [0..1] |
| `_CnsldtnFinManagementArea` | `I_CnsldtnFinManagementArea` | [0..1] |
| `_CnsldtnFinServicesBranch` | `I_CnsldtnFinServicesBranch` | [0..1] |
| `_CnsldtnFunctionalArea` | `I_CnsldtnFunctionalArea` | [0..1] |
| `_CnsldtnFund` | `I_CnsldtnFund` | [0..1] |
| `_CnsldtnGrant` | `I_CnsldtnGrant` | [0..1] |
| `_CnsldtnMaterialGroup` | `I_CnsldtnMaterialGroup` | [0..1] |
| `_CnsldtnOrder` | `I_CnsldtnOrder` | [0..1] |
| `_CnsldtnDivision` | `I_CnsldtnDivision` | [0..1] |
| `_CnsldtnBusinessAreaPartner` | `I_CnsldtnBusinessArea` | [0..1] |
| `_CnsldtnFunctionalAreaPartner` | `I_CnsldtnFunctionalArea` | [0..1] |
| `_CnsldtnProfitCenterPartner` | `I_CnsldtnProfitCenter` | [0..1] |
| `_CnsldtnSegmentPartner` | `I_CnsldtnSegment` | [0..1] |
| `_CnsldtnProfitCenter` | `I_CnsldtnProfitCenter` | [0..1] |
| `_CnsldtnSalesDistrict` | `I_CnsldtnSalesDistrict` | [0..1] |
| `_CnsldtnSalesOrganization` | `I_CnsldtnSalesOrganization` | [0..1] |
| `_CnsldtnSupplier` | `I_CnsldtnSupplier` | [0..1] |
| `_CnsldtnGHGDtaQltyCharc` | `I_CnsldtnGHGDtaQltyCharc` | [0..1] |
| `_CnsldtnGHGEngyClassification` | `I_CnsldtnGHGEngyClassification` | [0..1] |
| `_CnsldtnGHGEnergyMix` | `I_CnsldtnGHGEnergyMix` | [0..1] |
| `_CnsldtnGHGEnergySourcingType` | `I_CnsldtnGHGEnergySourcingType` | [0..1] |
| `_Extension` | `E_CnsldtnTaskLogItemDataInput` | [1..1] |

## Source Code

```abap
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData.blocking: #NOT_REQUIRED }

@EndUserText.label: 'Consolidation Task Log Item Data Input'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                sapObjectNodeType.name: 'CnsldtnTaskLogItemDataInput',
                supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass:      #TRANSACTIONAL,
                             serviceQuality: #C,
                             sizeCategory:   #XL } }

@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #BASIC }

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */

define view entity I_CnsldtnTaskLogItemDataInput
  as select from fincs_log_item01

  association [0..1] to I_CnsldtnVersion             as _CnsldtnVersion                on $projection.ConsolidationVersion = _CnsldtnVersion.ConsolidationVersion
  association [0..1] to I_Currency                   as _CnsldtnJrnlEntryAmtLoclCrcy   on $projection.CnsldtnJrnlEntryAmtLoclCrcy = _CnsldtnJrnlEntryAmtLoclCrcy.Currency
  association [0..1] to I_Currency                   as _CnsldtnJrnlEntryAmtGrpCrcy    on $projection.CnsldtnJrnlEntryAmtGrpCrcy = _CnsldtnJrnlEntryAmtGrpCrcy.Currency
  association [0..1] to I_Currency                   as _CnsldtnJrnlEntryAmtTransCrcy  on $projection.CnsldtnJrnlEntryAmtTransCrcy = _CnsldtnJrnlEntryAmtTransCrcy.Currency
  association [0..1] to I_UnitOfMeasure              as _CnsldtnJrnlEntryQtyBaseUnit   on $projection.CnsldtnJrnlEntryQtyBaseUnit = _CnsldtnJrnlEntryQtyBaseUnit.UnitOfMeasure
  association [0..1] to I_Currency                   as _CnsldtnTriggeringAmtLoclCrcy  on $projection.CnsldtnTriggeringAmtLoclCrcy = _CnsldtnTriggeringAmtLoclCrcy.Currency
  association [0..1] to I_Currency                   as _CnsldtnTriggeringAmtGrpCrcy   on $projection.CnsldtnTriggeringAmtGrpCrcy = _CnsldtnTriggeringAmtGrpCrcy.Currency
  association [0..1] to I_Currency                   as _CnsldtnTriggeringAmtTransCrcy on $projection.CnsldtnTriggeringAmtTransCrcy = _CnsldtnTriggeringAmtTransCrcy.Currency
  association [0..1] to I_UnitOfMeasure              as _CnsldtnTriggeringQtyBaseUnit  on $projection.CnsldtnTriggeringQtyBaseUnit = _CnsldtnTriggeringQtyBaseUnit.UnitOfMeasure
  association [0..1] to I_CnsldtnUnit_4              as _CnsldtnUnit                   on $projection.ConsolidationUnit = _CnsldtnUnit.ConsolidationUnit
  association [0..1] to I_CnsldtnChartOfAccounts     as _CnsldtnChartOfAccounts        on $projection.ConsolidationChartOfAccounts = _CnsldtnChartOfAccounts.ConsolidationChartOfAccounts
  association [0..1] to I_CnsldtnFSItem_2            as _CnsldtnFSItem                 on $projection.ConsolidationChartOfAccounts = _CnsldtnFSItem.ConsolidationChartOfAccounts and $projection.CnsldtnFinancialStatementItem = _CnsldtnFSItem.CnsldtnFinancialStatementItem
  association [0..1] to I_CnsldtnUnit_4              as _CnsldtnUnitPartner            on $projection.PartnerConsolidationUnit = _CnsldtnUnitPartner.ConsolidationUnit
  association [0..1] to I_CnsldtnGroup_3             as _CnsldtnGroup                  on $projection.ConsolidationGroup = _CnsldtnGroup.ConsolidationGroup
  association [0..1] to I_CompanyCode                as _CompanyCode                   on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_CnsldtnSubitemCategory_2   as _CnsldtnSubitemCategory        on $projection.SubItemCategory = _CnsldtnSubitemCategory.CnsldtnSubitemCategory
  association [0..1] to I_CnsldtnSubitem_2           as _CnsldtnSubItem                on $projection.SubItemCategory = _CnsldtnSubItem.CnsldtnSubitemCategory and $projection.SubItem = _CnsldtnSubItem.CnsldtnSubitem
  association [0..1] to I_CnsldtnPostingLevel        as _CnsldtnPostingLevel           on $projection.PostingLevel = _CnsldtnPostingLevel.PostingLevel
  association [0..1] to I_CnsldtnApportionment       as _CnsldtnApportionment          on $projection.ConsolidationApportionment = _CnsldtnApportionment.ConsolidationApportionment
  association [0..1] to I_CnsldtnCrcyCnvrsnDiffType  as _CnsldtnCrcyCnvrsnDiffType     on $projection.CurrencyConversionsDiffType = _CnsldtnCrcyCnvrsnDiffType.CurrencyConversionsDiffType
  association [0..1] to I_CnsldtnDocumentType_2      as _CnsldtnDocumentType           on $projection.ConsolidationDocumentType = _CnsldtnDocumentType.ConsolidationDocumentType
  association [0..1] to I_CnsldtnUnit_4              as _CnsldtnUnitInvestee           on $projection.InvesteeConsolidationUnit = _CnsldtnUnitInvestee.ConsolidationUnit
  association [0..1] to I_CnsldtnInvmtActy           as _CnsldtnInvmtActy              on $projection.InvestmentActivityType = _CnsldtnInvmtActy.InvestmentActivityType
  association [0..1] to I_CnsldtnFinTransType        as _CnsldtnFinTransType           on $projection.FinancialTransactionType = _CnsldtnFinTransType.FinancialTransactionType
  association [0..1] to I_CnsldtnCustomerGroup       as _CnsldtnCustomerGroup          on $projection.CustomerGroup = _CnsldtnCustomerGroup.CustomerGroup
  association [0..1] to I_CnsldtnGHGScp2CalcMethod   as _CnsldtnGHGScp2CalcMethod      on $projection.GHGScope2CalculationMethod = _CnsldtnGHGScp2CalcMethod.GHGScope2CalculationMethod
  association [0..1] to I_CnsldtnGLAccount_2         as _CnsldtnCashLedgerAccount      on $projection.CnsldtnCashLedgerChartOfAccts = _CnsldtnCashLedgerAccount.ChartOfAccounts and $projection.CashLedgerAccount = _CnsldtnCashLedgerAccount.GLAccount
  association [0..1] to I_CnsldtnGLChartOfAccounts   as _CnsldtnCashLedgerChartOfAccts on $projection.CnsldtnCashLedgerChartOfAccts = _CnsldtnCashLedgerChartOfAccts.ChartOfAccounts
  association [0..1] to I_CnsldtnGHGScp2CntrctlInstr as _CnsldtnGHGScp2CntrctlInstr    on $projection.GHGScope2ContractualInstrument = _CnsldtnGHGScp2CntrctlInstr.GHGScope2ContractualInstrument
  association [0..1] to I_CnsldtnCountry             as _CnsldtnCountry                on $projection.CustomerSupplierCountry = _CnsldtnCountry.Country
  association [0..1] to I_CnsldtnGHGCategory         as _CnsldtnGHGCategory            on $projection.GHGCategory = _CnsldtnGHGCategory.GHGCategory
  association [0..1] to I_CnsldtnGHGScope            as _CnsldtnGHGScope               on $projection.GHGScope = _CnsldtnGHGScope.GHGScope
  association [0..1] to I_CnsldtnSustModeOfTransport as _CnsldtnSustModeOfTransport    on $projection.SustainabilityModeOfTransport = _CnsldtnSustModeOfTransport.SustainabilityModeOfTransport
  association [0..1] to I_CnsldtnProduct             as _CnsldtnProduct                on $projection.SoldProduct = _CnsldtnProduct.Product
  association [0..1] to I_CnsldtnProductGroup        as _CnsldtnProductGroup           on $projection.SoldProductGroup = _CnsldtnProductGroup.ProductGroup
  association [0..1] to I_CnsldtnBillingDocumentType as _CnsldtnBillingDocumentType    on $projection.BillingDocumentType = _CnsldtnBillingDocumentType.BillingDocumentType
  association [0..1] to I_CnsldtnBusinessArea        as _CnsldtnBusinessArea           on $projection.BusinessArea = _CnsldtnBusinessArea.BusinessArea
  association [0..1] to I_CnsldtnCustomer            as _CnsldtnCustomer               on $projection.Customer = _CnsldtnCustomer.Customer
  association [0..1] to I_CnsldtnMaterial            as _CnsldtnMaterial               on $projection.Material = _CnsldtnMaterial.Material
  association [0..1] to I_CnsldtnPlant               as _CnsldtnPlant                  on $projection.Plant = _CnsldtnPlant.Plant
  association [0..1] to I_CnsldtnSegment             as _CnsldtnSegment                on $projection.Segment = _CnsldtnSegment.Segment
  association [0..1] to I_CnsldtnTaskLogItemType     as _CnsldtnTaskLogItemType        on $projection.CnsldtnTaskLogItemType = _CnsldtnTaskLogItemType.CnsldtnTaskLogItemType
  association [0..1] to I_CnsldtnDimension           as _CnsldtnDimension              on $projection.ConsolidationDimension = _CnsldtnDimension.ConsolidationDimension
  association [0..1] to I_CnsldtnControllingArea     as _CnsldtnControllingArea        on $projection.ControllingArea = _CnsldtnControllingArea.ControllingArea
  association [0..1] to I_CnsldtnCostCenter          as _CnsldtnCostCenter             on $projection.CostCenter = _CnsldtnCostCenter.CostCenter and $projection.ControllingArea = _CnsldtnCostCenter.ControllingArea
  association [0..1] to I_CnsldtnDistributionChannel as _CnsldtnDistributionChannel    on $projection.DistributionChannel = _CnsldtnDistributionChannel.DistributionChannel
  association [0..1] to I_CnsldtnFinancialDataSource as _CnsldtnFinancialDataSource    on $projection.FinancialDataSource = _CnsldtnFinancialDataSource.FinancialDataSource
  association [0..1] to I_CnsldtnFinManagementArea   as _CnsldtnFinManagementArea      on $projection.FinancialManagementArea = _CnsldtnFinManagementArea.FinancialManagementArea
  association [0..1] to I_CnsldtnFinServicesBranch   as _CnsldtnFinServicesBranch      on $projection.FinancialServicesBranch = _CnsldtnFinServicesBranch.FinancialServicesBranch
  association [0..1] to I_CnsldtnFunctionalArea      as _CnsldtnFunctionalArea         on $projection.FunctionalArea = _CnsldtnFunctionalArea.FunctionalArea
  association [0..1] to I_CnsldtnFund                as _CnsldtnFund                   on $projection.Fund = _CnsldtnFund.Fund and $projection.FinancialManagementArea = _CnsldtnFund.FinancialManagementArea
  association [0..1] to I_CnsldtnGrant               as _CnsldtnGrant                  on $projection.GrantID = _CnsldtnGrant.GrantID
  association [0..1] to I_CnsldtnMaterialGroup       as _CnsldtnMaterialGroup          on $projection.MaterialGroup = _CnsldtnMaterialGroup.MaterialGroup
  association [0..1] to I_CnsldtnOrder               as _CnsldtnOrder                  on $projection.OrderID = _CnsldtnOrder.OrderID
  association [0..1] to I_CnsldtnDivision            as _CnsldtnDivision               on $projection.Division = _CnsldtnDivision.Division
  association [0..1] to I_CnsldtnBusinessArea        as _CnsldtnBusinessAreaPartner    on $projection.PartnerBusinessArea = _CnsldtnBusinessAreaPartner.BusinessArea
  association [0..1] to I_CnsldtnFunctionalArea      as _CnsldtnFunctionalAreaPartner  on $projection.PartnerFunctionalArea = _CnsldtnFunctionalAreaPartner.FunctionalArea
  association [0..1] to I_CnsldtnProfitCenter        as _CnsldtnProfitCenterPartner    on $projection.PartnerProfitCenter = _CnsldtnProfitCenterPartner.ProfitCenter and $projection.ControllingArea = _CnsldtnProfitCenterPartner.ControllingArea
  association [0..1] to I_CnsldtnSegment             as _CnsldtnSegmentPartner         on $projection.PartnerSegment = _CnsldtnSegmentPartner.Segment
  association [0..1] to I_CnsldtnProfitCenter        as _CnsldtnProfitCenter           on $projection.ProfitCenter = _CnsldtnProfitCenter.ProfitCenter and $projection.ControllingArea = _CnsldtnProfitCenter.ControllingArea
  association [0..1] to I_CnsldtnSalesDistrict       as _CnsldtnSalesDistrict          on $projection.SalesDistrict = _CnsldtnSalesDistrict.SalesDistrict
  association [0..1] to I_CnsldtnSalesOrganization   as _CnsldtnSalesOrganization      on $projection.SalesOrganization = _CnsldtnSalesOrganization.SalesOrganization
  association [0..1] to I_CnsldtnSupplier            as _CnsldtnSupplier               on $projection.Supplier = _CnsldtnSupplier.Supplier
  association [0..1] to I_CnsldtnGHGDtaQltyCharc       as _CnsldtnGHGDtaQltyCharc       on $projection.GHGDataQualityCharacteristic = _CnsldtnGHGDtaQltyCharc.GHGDataQualityCharacteristic
  association [0..1] to I_CnsldtnGHGEngyClassification as _CnsldtnGHGEngyClassification on $projection.GHGEnergyClassification = _CnsldtnGHGEngyClassification.GHGEnergyClassification
  association [0..1] to I_CnsldtnGHGEnergyMix          as _CnsldtnGHGEnergyMix          on $projection.GHGEnergyMix = _CnsldtnGHGEnergyMix.GHGEnergyMix
  association [0..1] to I_CnsldtnGHGEnergySourcingType as _CnsldtnGHGEnergySourcingType on $projection.GHGEnergySourcingType = _CnsldtnGHGEnergySourcingType.GHGEnergySourcingType

  //do not expose this association in the projection list of the view
  association [1..1] to E_CnsldtnTaskLogItemDataInput as _Extension                    on $projection.CnsldtnTaskLogUUID = _Extension.CnsldtnTaskLogUUID and $projection.CnsldtnTaskLogItemUUID = _Extension.CnsldtnTaskLogItemUUID

/*
  association [0..*] to I_CnsldtnTaskLogItemTypeT      as _CnsldtnTaskLogItemTypeT     on $projection.CnsldtnTaskLogItemType = _CnsldtnTaskLogItemTypeT.CnsldtnTaskLogItemType
  association [0..*] to I_CnsldtnUnitText_4            as _CnsldtnUnitText             on $projection.ConsolidationUnit = _CnsldtnUnitText.ConsolidationUnit
  association [0..*] to I_CnsldtnFinancialDataSourceT  as _CnsldtnFinancialDataSourceT on $projection.FinancialDataSource = _CnsldtnFinancialDataSourceT.FinancialDataSource
  association [0..*] to I_CnsldtnFinManagementAreaT    as _CnsldtnFinManagementAreaT   on $projection.FinancialManagementArea = _CnsldtnFinManagementAreaT.FinancialManagementArea
  association [0..*] to I_CnsldtnFinServicesBranchT    as _CnsldtnFinServicesBranchT   on $projection.FinancialServicesBranch = _CnsldtnFinServicesBranchT.FinancialServicesBranch
  association [0..*] to I_CnsldtnFSItemText_2          as _CnsldtnFSItemText           on $projection.ConsolidationChartOfAccounts = _CnsldtnFSItemText.ConsolidationChartOfAccounts and $projection.CnsldtnFinancialStatementItem = _CnsldtnFSItemText.CnsldtnFinancialStatementItem
  association [0..*] to I_CnsldtnFundT                 as _CnsldtnFundT                on $projection.Fund = _CnsldtnFundT.Fund and $projection.FinancialManagementArea = _CnsldtnFundT.FinancialManagementArea
  association [0..*] to I_CnsldtnGHGCategoryT          as _CnsldtnGHGCategoryT         on $projection.GHGCategory = _CnsldtnGHGCategoryT.GHGCategory
  association [0..*] to I_CnsldtnGHGScp2CalcMethodT    as _CnsldtnGHGScp2CalcMethodT   on $projection.GHGScope2CalculationMethod = _CnsldtnGHGScp2CalcMethodT.GHGScope2CalculationMethod
  association [0..*] to I_CnsldtnGHGScopeT             as _CnsldtnGHGScopeT            on $projection.GHGScope = _CnsldtnGHGScopeT.GHGScope
  association [0..*] to I_CnsldtnGHGScp2CntrctlInstrT  as _CnsldtnGHGScp2CntrctlInstrT on $projection.GHGScope2ContractualInstrument = _CnsldtnGHGScp2CntrctlInstrT.GHGScope2ContractualInstrument
  association [0..*] to I_CnsldtnGrantT                as _CnsldtnGrantT               on $projection.GrantID = _CnsldtnGrantT.GrantID
  association [0..*] to I_CnsldtnUnitText_4            as _CnsldtnUnitTextPartner      on $projection.ConsolidationUnit = _CnsldtnUnitTextPartner.ConsolidationUnit
  association [0..*] to I_CnsldtnSubitemCategoryText_2 as _CnsldtnSubitemCategoryText  on $projection.SubItemCategory = _CnsldtnSubitemCategoryText.CnsldtnSubitemCategory
  association [0..*] to I_CnsldtnSubitemText_2         as _CnsldtnSubitemText          on $projection.SubItemCategory = _CnsldtnSubitemText.CnsldtnSubitemCategory and $projection.SubItem = _CnsldtnSubitemText.CnsldtnSubitem
  association [0..*] to I_CnsldtnSustModeOfTransportT  as _CnsldtnSustModeOfTransportT on $projection.SustainabilityModeOfTransport = _CnsldtnSustModeOfTransportT.SustainabilityModeOfTransport
*/  
{
  key cnsldtnlognumber                                                                 as CnsldtnTaskLogUUID,
  key cnsldtnlogitemnumber                                                             as CnsldtnTaskLogItemUUID,

      @ObjectModel.foreignKey.association: '_CnsldtnTaskLogItemType'
      cnsldtnlineitemtype                                                              as CnsldtnTaskLogItemType,
      
      assignmentreference                                                              as AssignmentReference,
      fiscalyear                                                                       as PostingFiscalYear,
      cast(cnsldtndocumentnumber as fincs_docnr preserving type)                       as ConsolidationDocumentNumber,

      @ObjectModel: { foreignKey.association: '_CnsldtnVersion',
                      sapObjectNodeTypeReference: 'ConsolidationVersion' }
      cnsldtnversion                                                                   as ConsolidationVersion,

      @ObjectModel.foreignKey.association: '_CnsldtnJrnlEntryAmtLoclCrcy'
//      @ObjectModel.sapObjectNodeTypeReference: 'Currency'
      cast(cnsldtnlocalcurrency as fincs_lcurr_doc preserving type)                    as CnsldtnJrnlEntryAmtLoclCrcy,

      @Semantics.amount.currencyCode: 'CnsldtnJrnlEntryAmtLoclCrcy'
      cast(amountincnsldtnlocalcrcy as fincs_lc_doc preserving type)                   as CnsldtnJrnlEntryAmtInLoclCrcy,

      @ObjectModel.foreignKey.association: '_CnsldtnJrnlEntryAmtGrpCrcy'
//      @ObjectModel.sapObjectNodeTypeReference: 'Currency'
      cast(cnsldtngroupcurrency as fincs_gcurr_doc preserving type)                    as CnsldtnJrnlEntryAmtGrpCrcy,

      @Semantics.amount.currencyCode: 'CnsldtnJrnlEntryAmtGrpCrcy'
      cast(amountincnsldtngroupcrcy as fincs_gc_doc preserving type)                   as CnsldtnJrnlEntryAmtInGrpCrcy,

      @ObjectModel.foreignKey.association: '_CnsldtnJrnlEntryAmtTransCrcy'
//      @ObjectModel.sapObjectNodeTypeReference: 'Currency'
      cast(transactioncurrency as fincs_tcurr_doc preserving type)                     as CnsldtnJrnlEntryAmtTransCrcy,

      @Semantics.amount.currencyCode: 'CnsldtnJrnlEntryAmtTransCrcy'
      cast(amountintransactioncurrency as fincs_tc_doc preserving type)                as CnsldtnJrnlEntryAmtInTransCrcy,

      @ObjectModel.foreignKey.association: '_CnsldtnJrnlEntryQtyBaseUnit'
//      @ObjectModel.sapObjectNodeTypeReference: 'UnitOfMeasure'
      cast(baseunit as fincs_base_unit_doc preserving type)                            as CnsldtnJrnlEntryQtyBaseUnit,

      @Semantics.quantity.unitOfMeasure: 'CnsldtnJrnlEntryQtyBaseUnit'
      cast(quantityinbaseunit as fincs_quan_doc preserving type)                       as CnsldtnJrnlEntryQtyInBsUnt,

      @ObjectModel.foreignKey.association: '_CnsldtnTriggeringAmtLoclCrcy'
//      @ObjectModel.sapObjectNodeTypeReference: 'Currency'
      cast(cnsldtnlocalcurrency as fincs_lcurr_tri preserving type)                    as CnsldtnTriggeringAmtLoclCrcy,

      @Semantics.amount.currencyCode: 'CnsldtnTriggeringAmtLoclCrcy'
      cast(amountincnsldtnlocalcrcy as fincs_lc_tri preserving type)                   as CnsldtnTriggeringAmtInLoclCrcy,

      @ObjectModel.foreignKey.association: '_CnsldtnTriggeringAmtGrpCrcy'
//      @ObjectModel.sapObjectNodeTypeReference: 'Currency'
      cast(cnsldtngroupcurrency as fincs_gcurr_tri preserving type)                    as CnsldtnTriggeringAmtGrpCrcy,

      @Semantics.amount.currencyCode: 'CnsldtnTriggeringAmtGrpCrcy'
      cast(amountincnsldtngroupcrcy as fincs_gc_tri preserving type)                   as CnsldtnTriggeringAmtInGrpCrcy,

      @ObjectModel.foreignKey.association: '_CnsldtnTriggeringAmtTransCrcy'
//      @ObjectModel.sapObjectNodeTypeReference: 'Currency'
      cast(transactioncurrency as fincs_tcurr_tri preserving type)                     as CnsldtnTriggeringAmtTransCrcy,

      @Semantics.amount.currencyCode: 'CnsldtnTriggeringAmtTransCrcy'
      cast(amountintransactioncurrency as fincs_tc_tri preserving type)                as CnsldtnTriggeringAmtInTC,

      @ObjectModel.foreignKey.association: '_CnsldtnTriggeringQtyBaseUnit'
//      @ObjectModel.sapObjectNodeTypeReference: 'UnitOfMeasure'
      cast(baseunit as fincs_base_unit_tri preserving type)                            as CnsldtnTriggeringQtyBaseUnit,

      @Semantics.quantity.unitOfMeasure: 'CnsldtnTriggeringQtyBaseUnit'
      cast(quantityinbaseunit as fincs_quan_tri preserving type)                       as CnsldtnTriggeringQtyInBsUnt,

      @ObjectModel: { foreignKey.association: '_CnsldtnUnit',
                      sapObjectNodeTypeReference: 'ConsolidationUnit' }
      cast(cnsldtnunit as fincs_consolidationunit preserving type)                     as ConsolidationUnit,

      @ObjectModel: { foreignKey.association: '_CnsldtnChartOfAccounts',
                      sapObjectNodeTypeReference: 'ConsolidationChartOfAccounts' }
      cast(cnsldtnchartofaccounts as fincs_conschartofaccounts preserving type)        as ConsolidationChartOfAccounts,

      @ObjectModel: { foreignKey.association: '_CnsldtnFSItem',
                      sapObjectNodeTypeReference: 'CnsldtnFinancialStatementItem' }
      cast(cnsldtnfinstmntitm as fincs_md_finstatementitem preserving type)            as CnsldtnFinancialStatementItem,

      @ObjectModel: { foreignKey.association: '_CnsldtnUnitPartner',
                      sapObjectNodeTypeReference: 'ConsolidationUnit' }
      cast(cnsldtnpartnerunit as fincs_consolidationunit preserving type)              as PartnerConsolidationUnit,

      @ObjectModel: { foreignKey.association: '_CnsldtnGroup',
                      sapObjectNodeTypeReference: 'ConsolidationGroup' }
      cast(cnsldtngroup as fincs_md_congr preserving type)                             as ConsolidationGroup,

      @ObjectModel: { foreignKey.association: '_CompanyCode',
                      sapObjectNodeTypeReference: 'CompanyCode' }
      companycode                                                                      as CompanyCode,

      @ObjectModel: { foreignKey.association: '_CnsldtnSubitemCategory',
                      sapObjectNodeTypeReference: 'ConsolidationSubitemCategory' }
      cast(cnsldtnfinstmntsubitmcat as fincs_subitemcategory preserving type)          as SubItemCategory,

      @ObjectModel.foreignKey.association: '_CnsldtnSubItem'
//      @ObjectModel.sapObjectNodeTypeReference: 'ConsolidationSubitem'
      cast(cnsldtnfinstmntsubitm as fincs_subitem preserving type)                     as SubItem,

      @ObjectModel: { foreignKey.association: '_CnsldtnPostingLevel',
                      sapObjectNodeTypeReference: 'ConsolidationPostingLevel' }
      cast(cnsldtnpostinglevel as fincs_postinglevel preserving type)                  as PostingLevel,

      @ObjectModel: { foreignKey.association: '_CnsldtnApportionment',
                      sapObjectNodeTypeReference: 'ConsolidationApportionment' }
      cast(cnsldtnapportionment as fincs_apportionment preserving type)                as ConsolidationApportionment,

      @ObjectModel: { foreignKey.association: '_CnsldtnCrcyCnvrsnDiffType',
                      sapObjectNodeTypeReference: 'CnsldtnCrcyConversionDiffType' }
      cast(cnsldtncrcycnvrsndifftype as fincs_currencycnvrsnsdifftype preserving type) as CurrencyConversionsDiffType,

      @ObjectModel: { foreignKey.association: '_CnsldtnDocumentType',
                      sapObjectNodeTypeReference: 'ConsolidationDocumentType' }
      cast(cnsldtndocumenttype as fincs_documenttype preserving type)                  as ConsolidationDocumentType,

      @ObjectModel.foreignKey.association: '_CnsldtnUnitInvestee'
//      @ObjectModel.sapObjectNodeTypeReference: 'ConsolidationUnit'
      cast(cnsldtninvesteeunit as fincs_consolidationunit preserving type)             as InvesteeConsolidationUnit,

      @ObjectModel: { foreignKey.association: '_CnsldtnInvmtActy',
                      sapObjectNodeTypeReference: 'CnsldtnInvestmentActivityType' }
      cast(cnsldtninvmtactivitytype as fincs_coiac preserving type)                    as InvestmentActivityType,

      cast(cnsldtninvmtactivity as fincs_coinr preserving type)                        as InvestmentActivity,

      postingdate                                                                      as PostingDate,

//      @ObjectModel.sapObjectNodeTypeReference: 'CnsldtnCostCenter'
      cast(partnercostcenter as fincs_skost preserving type)                           as PartnerCostCenter,

      @ObjectModel: { foreignKey.association: '_CnsldtnFinTransType',
                      sapObjectNodeTypeReference: 'CnsldtnFinTransactionType' }
      cast(financialtransactiontype as fincs_financialtransactiontype preserving type) as FinancialTransactionType,

      @ObjectModel: { foreignKey.association: '_CnsldtnCustomerGroup',
                      sapObjectNodeTypeReference: 'CnsldtnCustomerGroup' }
      cast(customergroup as fincs_customergroup preserving type)                       as CustomerGroup,

      raw_rowid                                                                        as CnsldtnTskLgItmRowNmbr,
      fiscalperiod                                                                     as FiscalPeriod,
      
      @ObjectModel: { foreignKey.association: '_CnsldtnFinServicesBranch',
                      sapObjectNodeTypeReference: 'CnsldtnFinancialServicesBranch' }
      cast(branch_id as fincs_financialservicesbranch preserving type)                 as FinancialServicesBranch,

      @ObjectModel: { foreignKey.association: '_CnsldtnGHGScp2CalcMethod',
                      sapObjectNodeTypeReference: 'CnsldtnGHGScp2CalcMethod' }
      cast(ghgscp2calcmeth as fincs_ghgscp2calculationmethod preserving type)          as GHGScope2CalculationMethod,

      @ObjectModel.foreignKey.association: '_CnsldtnCashLedgerAccount'
//      @ObjectModel.sapObjectNodeTypeReference: 'CnsldtnGLAccount'
      re_account                                                                       as CashLedgerAccount,

      @ObjectModel.foreignKey.association: '_CnsldtnCashLedgerChartOfAccts'
//      @ObjectModel.sapObjectNodeTypeReference: 'CnsldtnGLChartOfAccounts'
      cast(re_ktopl as fincs_re_ktopl preserving type)                                 as CnsldtnCashLedgerChartOfAccts,

      @ObjectModel: { foreignKey.association: '_CnsldtnGHGScp2CntrctlInstr',
                      sapObjectNodeTypeReference: 'CnsldtnGHGScp2CntrctlInstr' }
      cast(ghgscp2contrinstr as fincs_ghgscp2cntrctlinstrument preserving type)        as GHGScope2ContractualInstrument,

      @ObjectModel.foreignKey.association: '_CnsldtnCountry'
//      @ObjectModel.sapObjectNodeTypeReference: 'CnsldtnCountry'
      customersuppliercountry                                                          as CustomerSupplierCountry,

      @ObjectModel: { foreignKey.association: '_CnsldtnFinancialDataSource',
                      sapObjectNodeTypeReference: 'CnsldtnFinancialDataSource' }
      cast(datasource_id as fincs_financialdatasource preserving type)                 as FinancialDataSource,
      
      logdate                                                                          as CnsldtnLogHeaderDateTime,
      
      @ObjectModel.foreignKey.association: '_CnsldtnFund'
      rfund                                                                            as Fund,

      @ObjectModel: { foreignKey.association: '_CnsldtnGHGCategory',
                      sapObjectNodeTypeReference: 'CnsldtnGreenhouseGasCategory' }
      cast(ghgcategory as fincs_ghgcategory preserving type)                           as GHGCategory,

      @ObjectModel: { foreignKey.association: '_CnsldtnGHGScope',
                      sapObjectNodeTypeReference: 'CnsldtnGreenhouseGasScope' }
      cast(ghgscope as fincs_ghgscope preserving type)                                 as GHGScope,

      @ObjectModel: { foreignKey.association: '_CnsldtnGrant',
                      sapObjectNodeTypeReference: 'CnsldtnGrant' }
      rgrant_nbr                                                                       as GrantID,

      @ObjectModel: { foreignKey.association: '_CnsldtnSustModeOfTransport',
                      sapObjectNodeTypeReference: 'CnsldtnSustModeOfTransport' }
      cast(susmodeoftransport as fincs_sustmodeoftransport preserving type)            as SustainabilityModeOfTransport,

      fs_product_group                                                                 as FinancialServicesProductGroup,

      @ObjectModel.foreignKey.association: '_CnsldtnProduct'
//      @ObjectModel.sapObjectNodeTypeReference: 'CnsldtnProduct'
      soldproduct                                                                      as SoldProduct,

      @ObjectModel.foreignKey.association: '_CnsldtnProductGroup'
//      @ObjectModel.sapObjectNodeTypeReference: 'CnsldtnProductGroup'
      soldproductgroup                                                                 as SoldProductGroup,

      cast(wbselement as ps_posid_edit preserving type)                                as WBSElementExternalID,
      cnsldtnledger                                                                    as ConsolidationLedger,
      cast(entryid as fincs_group_jrnl_entry)                                          as CnsldtnGroupJrnlEntry,
      cnsldtnpostingitem                                                               as ConsolidationPostingItem,

      @ObjectModel: { foreignKey.association: '_CnsldtnBillingDocumentType',
                      sapObjectNodeTypeReference: 'CnsldtnBillingDocumentType' }
      cast(billingdocumenttype as fincs_billingdocumenttype preserving type)           as BillingDocumentType,
      
      billtoparty                                                                      as BillToParty,
      
      @ObjectModel: { foreignKey.association: '_CnsldtnBusinessArea',
                      sapObjectNodeTypeReference: 'CnsldtnBusinessArea' }
      cast(businessarea as fincs_businessarea preserving type)                         as BusinessArea,
      
      chartofaccounts                                                                  as ChartOfAccounts,
      
      @ObjectModel.foreignKey.association: '_CnsldtnCustomer'
      cast(customer as fincs_customer preserving type)                                 as Customer,
      
      @ObjectModel: { foreignKey.association: '_CnsldtnMaterial',
                      sapObjectNodeTypeReference: 'CnsldtnMaterial' }
      cast(material as fincs_material preserving type )                                as Material,
      
      @ObjectModel: { foreignKey.association: '_CnsldtnPlant',
                      sapObjectNodeTypeReference: 'CnsldtnPlant' }
      cast(plant as fincs_plant preserving type )                                      as Plant,
      
      @ObjectModel: { foreignKey.association: '_CnsldtnSegment',
                      sapObjectNodeTypeReference: 'CnsldtnSegment' }
      cast(segment as fincs_segment preserving type)                                   as Segment,
      
      latest_indi                                                                      as CnsldtnTaskLogItemLatestRecord,
      node                                                                             as CnsldtnTskLgNode,
      parentnode                                                                       as CnsldtnTskLgParNode,
      cnsldtnacquisitionperiod                                                         as ConsolidationAcquisitionPeriod,
      cnsldtnacquisitionyear                                                           as ConsolidationAcquisitionYear,
      
      @ObjectModel.foreignKey.association: '_CnsldtnDimension'
      cnsldtndimension                                                                 as ConsolidationDimension,
      
      @ObjectModel: { foreignKey.association: '_CnsldtnControllingArea',
                      sapObjectNodeTypeReference: 'CnsldtnControllingArea' }
      cast(controllingarea as fincs_controllingarea preserving type)                   as ControllingArea,
      
      @ObjectModel: { foreignKey.association: '_CnsldtnCostCenter',
                      sapObjectNodeTypeReference: 'CnsldtnCostCenter' }
      cast(costcenter as fincs_costcenter preserving type)                             as CostCenter,
      
      customersuppliercorporategroup                                                   as CustomerSupplierCorporateGroup,
      customersupplierindustry                                                         as CustomerSupplierIndustry,
      
      @ObjectModel: { foreignKey.association: '_CnsldtnDistributionChannel',
                      sapObjectNodeTypeReference: 'CnsldtnDistributionChannel' }
      cast(distributionchannel as fincs_distributionchannel preserving type)           as DistributionChannel,
      
      @ObjectModel: { foreignKey.association: '_CnsldtnFinManagementArea',
                      sapObjectNodeTypeReference: 'CnsldtnFinancialManagementArea' }
      cast(fikrs as fincs_financialmanagementarea preserving type)                     as FinancialManagementArea,
      
      @ObjectModel: { foreignKey.association: '_CnsldtnFunctionalArea',
                      sapObjectNodeTypeReference: 'CnsldtnFunctionalArea' }
      cast(functionalarea as fincs_functionalarea preserving type)                     as FunctionalArea,
            
      glaccount                                                                        as GLAccount,
      
      @ObjectModel: { foreignKey.association: '_CnsldtnMaterialGroup',
                      sapObjectNodeTypeReference: 'CnsldtnMaterialGroup' }
      cast(materialgroup as fincs_materialgroup preserving type)                       as MaterialGroup,
      
      @ObjectModel.foreignKey.association: '_CnsldtnOrder'
      cast(orderid as fincs_order preserving type)                                     as OrderID,
      
      @ObjectModel: { foreignKey.association: '_CnsldtnDivision',
                      sapObjectNodeTypeReference: 'CnsldtnDivision' }
      cast(organizationdivision as fincs_division preserving type)                     as Division,
      
      @ObjectModel.foreignKey.association: '_CnsldtnBusinessAreaPartner'
      cast(partnerbusinessarea as fincs_businessarea preserving type)                  as PartnerBusinessArea,
      
      cast(partnercompany as fis_rassc preserving type)                                as PartnerCompany,

      @ObjectModel.foreignKey.association: '_CnsldtnFunctionalAreaPartner'
      cast(partnerfunctionalarea as fis_sfkber preserving type)                        as PartnerFunctionalArea,

      @ObjectModel.foreignKey.association: '_CnsldtnProfitCenterPartner'
      cast(partnerprofitcenter as fincs_partnerprofitcenter preserving type )          as PartnerProfitCenter,
      
      @ObjectModel.foreignKey.association: '_CnsldtnSegmentPartner'
      cast(partnersegment as fincs_psegment preserving type)                           as PartnerSegment,
      
      cast(partnerwbselement as fis_par_psp_pnr_ext preserving type)                   as PartnerWBSElementExternalID,
      
      @ObjectModel: { foreignKey.association: '_CnsldtnProfitCenter',
                      sapObjectNodeTypeReference: 'CnsldtnProfitCenter' }
      cast(profitcenter as fincs_profitcenter preserving type )                        as ProfitCenter,
      
      @ObjectModel: { foreignKey.association: '_CnsldtnSalesDistrict',
                      sapObjectNodeTypeReference: 'CnsldtnSalesDistrict' }
      cast(salesdistrict as fincs_salesdistrict preserving type)                       as SalesDistrict,
      
      @ObjectModel.foreignKey.association: '_CnsldtnSalesOrganization'
      cast(salesorganization as fincs_salesorganization preserving type)               as SalesOrganization,
      
      shiptoparty                                                                      as ShipToParty,
      
      @ObjectModel.foreignKey.association: '_CnsldtnSupplier'
      cast(supplier as fincs_supplier preserving type)                                 as Supplier,
      
      @ObjectModel.foreignKey.association: '_CnsldtnGHGDtaQltyCharc'
      cast(ghgdtaqltycharc as fincs_ghgdtaqltycharc preserving type)                   as GHGDataQualityCharacteristic,

      @ObjectModel.foreignKey.association: '_CnsldtnGHGEngyClassification'
      cast(ghgenergyclass as fincs_ghgenergyclassification preserving type)            as GHGEnergyClassification,

      @ObjectModel.foreignKey.association: '_CnsldtnGHGEnergyMix'
      cast(ghgenergymix as fincs_ghgenergymix preserving type)                         as GHGEnergyMix,

      @ObjectModel.foreignKey.association: '_CnsldtnGHGEnergySourcingType'
      cast(ghgengysrcgtype as fincs_ghgenergysourcingtype preserving type)             as GHGEnergySourcingType,
      
      cast(wbselementinternalid as ps_s4_pspnr preserving type)                        as WBSElementInternalID,
      cast(project as ps_pspid_edit preserving type)                                   as ProjectExternalID,
      
      adhocitem                                                                        as CnsldtnAdhocItem,
      adhocset                                                                         as CnsldtnAdhocSet,
      adhocsetitem                                                                     as CnsldtnAdhocSetItem,
      
      _CnsldtnVersion,
      _CnsldtnJrnlEntryAmtLoclCrcy,
      _CnsldtnJrnlEntryAmtGrpCrcy,
      _CnsldtnJrnlEntryAmtTransCrcy,
      _CnsldtnJrnlEntryQtyBaseUnit,
      _CnsldtnTriggeringAmtLoclCrcy,
      _CnsldtnTriggeringAmtGrpCrcy,
      _CnsldtnTriggeringAmtTransCrcy,
      _CnsldtnTriggeringQtyBaseUnit,
      _CnsldtnUnit,
      _CnsldtnChartOfAccounts,
      _CnsldtnFSItem,
      _CnsldtnUnitPartner,
      _CnsldtnGroup,
      _CompanyCode,
      _CnsldtnSubitemCategory,
      _CnsldtnSubItem,
      _CnsldtnPostingLevel,
      _CnsldtnApportionment,
      _CnsldtnCrcyCnvrsnDiffType,
      _CnsldtnDocumentType,
      _CnsldtnUnitInvestee,
      _CnsldtnInvmtActy,
      _CnsldtnFinTransType,
      _CnsldtnCustomerGroup,
      _CnsldtnGHGScp2CalcMethod,
      _CnsldtnCashLedgerAccount,
      _CnsldtnCashLedgerChartOfAccts,
      _CnsldtnGHGScp2CntrctlInstr,
      _CnsldtnCountry,
      _CnsldtnGHGCategory,
      _CnsldtnGHGScope,
      _CnsldtnSustModeOfTransport,
      _CnsldtnProduct,
      _CnsldtnProductGroup,
      _CnsldtnBillingDocumentType,
      _CnsldtnBusinessArea,
      _CnsldtnCustomer,
      _CnsldtnMaterial,
      _CnsldtnPlant,
      _CnsldtnSegment,
      _CnsldtnTaskLogItemType,
      _CnsldtnDimension,
      _CnsldtnControllingArea,
      _CnsldtnCostCenter,
      _CnsldtnDistributionChannel,
      _CnsldtnFinancialDataSource,
      _CnsldtnFinManagementArea,
      _CnsldtnFinServicesBranch,
      _CnsldtnFunctionalArea,
      _CnsldtnFund,
      _CnsldtnGrant,
      _CnsldtnMaterialGroup,
      _CnsldtnOrder,
      _CnsldtnDivision,
      _CnsldtnBusinessAreaPartner,
      _CnsldtnFunctionalAreaPartner,
      _CnsldtnProfitCenterPartner,
      _CnsldtnSegmentPartner,
      _CnsldtnProfitCenter,
      _CnsldtnSalesDistrict,
      _CnsldtnSalesOrganization,
      _CnsldtnSupplier,
      _CnsldtnGHGDtaQltyCharc,
      _CnsldtnGHGEngyClassification,
      _CnsldtnGHGEnergyMix,
      _CnsldtnGHGEnergySourcingType
/*      
      // texts
      _CnsldtnTaskLogItemTypeT,
      _CnsldtnUnitText,
      _CnsldtnFinancialDataSourceT,
      _CnsldtnFinManagementAreaT,
      _CnsldtnFinServicesBranchT,
      _CnsldtnFSItemText,
      _CnsldtnFundT,
      _CnsldtnGHGCategoryT,
      _CnsldtnGHGScp2CalcMethodT,
      _CnsldtnGHGScopeT,
      _CnsldtnGHGScp2CntrctlInstrT,
      _CnsldtnGrantT,
      _CnsldtnUnitTextPartner,
      _CnsldtnSubitemCategoryText,
      _CnsldtnSubitemText,
      _CnsldtnSustModeOfTransportT
*/      
}
```
