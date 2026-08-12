---
name: I_FINPLANNINGENTRYITEMCUBE
description: "Finplanningentryitemcube"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - analytical
  - item-level
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_FINPLANNINGENTRYITEMCUBE

**Finplanningentryitemcube**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialPlanningDataPacket` | ✓ | |  |  |  |  |
| `FinancialPlanningEntryItem` | ✓ | |  |  |  |  |
| `FinancialPlanningReqTransSqnc` | ✓ | |  |  |  |  |
| `AccountAssignmentType` |  | |  |  |  |  |
| `BillToParty` |  | |  |  |  |  |
| `BillToPartyName` |  | |  | `cast( I_FinancialPlanningEntryItem._BillToParty.CustomerName as bill_to_name preserving type)` |  |  |
| `BillingDocumentType` |  | |  |  |  |  |
| `BudgetingType` |  | |  |  |  |  |
| `BudgetPeriod` |  | |  |  |  |  |
| `BudgetProcess` |  | |  |  |  |  |
| `BudgetDocWorkFlowStatus` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `BusinessAreaName` |  | |  | `cast( _BusinessArea._Text[1: Language = $session.system_language].BusinessAreaName as fis_busarea_name preserving type )` |  |  |
| `BusinessTransactionCategory` |  | |  |  |  |  |
| `BusinessTransactionType` |  | |  |  |  |  |
| `ChartOfAccounts` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `CompanyCodeName` |  | |  | `cast( I_FinancialPlanningEntryItem._CompanyCode.CompanyCodeName as fis_butxt preserving type )` |  |  |
| `CompanyCodeCurrency` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `ControllingAreaName` |  | |  | `cast( I_FinancialPlanningEntryItem._ControllingArea.ControllingAreaName as fis_bezei preserving type )` |  |  |
| `ControllingDebitCreditCode` |  | |  | `cast( I_FinancialPlanningEntryItem.ControllingDebitCreditCode as fis_co_belkz_no_conv preserving type )` |  |  |
| `CostAnalysisResource` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `CostCenterName` |  | |  | `_CostCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].CostCenterName` |  |  |
| `CostCtrActivityType` |  | |  |  |  |  |
| `CostCtrActivityTypeName` |  | |  | `cast( _CostCtrActivityType[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].CostCtrActivityTypeName as fis_lstar_text )` |  |  |
| `CostSourceUnit` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `CustomerName` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `CustomerGroupName` |  | |  | `cast( _CustomerGroup._Text[1: Language = $session.system_language].CustomerGroupName as fis_customergroup_name )` |  |  |
| `CustomerSupplierCorporateGroup` |  | |  |  |  |  |
| `CustomerSupplierCountry` |  | |  |  |  |  |
| `CustomerSupplierCountryName` |  | |  | `cast( _CustomerSupplierCountry._Text[1: Language = $session.system_language].CountryName as fis_customersupplier_country )` |  |  |
| `CustomerSupplierIndustry` |  | |  |  |  |  |
| `CustomerSupplierIndustryName` |  | |  | `cast( _CustomerSupplierIndustryText[1: Language = $session.system_language].CustomerSupplierIndustryName as fis_customersupplier_industry preserving type )` |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `DistributionChannelName` |  | |  | `cast( _DistributionChannel._Text[1: Language = $session.system_language].DistributionChannelName as fis_distributionchannel_name preserving type )` |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `DivisionName` |  | |  | `cast( _OrganizationDivision._Text[1: Language = $session.system_language].DivisionName as fis_division_name )` |  |  |
| `FinancialTransactionType` |  | |  |  |  |  |
| `FinancialManagementArea` |  | |  |  |  |  |
| `FiscalPeriod` |  | |  |  |  |  |
| `FiscalYear` |  | |  |  |  |  |
| `FiscalYearPeriod` |  | |  |  |  |  |
| `FiscalYearVariant` |  | |  |  |  |  |
| `FreeDefinedCurrency1` |  | |  |  |  |  |
| `FreeDefinedCurrency2` |  | |  |  |  |  |
| `FreeDefinedCurrency3` |  | |  |  |  |  |
| `FreeDefinedCurrency4` |  | |  |  |  |  |
| `FreeDefinedCurrency5` |  | |  |  |  |  |
| `FreeDefinedCurrency6` |  | |  |  |  |  |
| `FreeDefinedCurrency7` |  | |  |  |  |  |
| `FreeDefinedCurrency8` |  | |  |  |  |  |
| `FunctionalArea` |  | |  |  |  |  |
| `Fund` |  | |  |  |  |  |
| `FunctionalAreaName` |  | |  | `cast( _FunctionalArea._Text[1: Language = $session.system_language].FunctionalAreaName as fis_funcarea_name )` |  |  |
| `GLAccount` |  | |  |  |  |  |
| `GLAccountName` |  | |  | `cast( _GLAccountInChartOfAccounts._Text[1: Language = $session.system_language].GLAccountName as fis_txt30_skat )` |  |  |
| `GLAccountLongName` |  | |  | `cast( _GLAccountInChartOfAccounts._Text[1: Language = $session.system_language].GLAccountLongName as fis_txt50_skat )` |  |  |
| `FunctionalCurrency` |  | |  |  |  |  |
| `GlobalCurrency` |  | |  |  |  |  |
| `GrantID` |  | |  |  |  |  |
| `Ledger` |  | |  |  |  |  |
| `LedgerName` |  | |  | `_Ledger._Text[1: Language = $session.system_language].LedgerName` |  |  |
| `LedgerFiscalYear` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `MaterialName` |  | |  | `_Material._Text[1: Language = $session.system_language].MaterialName` |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `MaterialGroupName` |  | |  | `_MaterialGroup._Text[1: Language = $session.system_language].MaterialGroupName` |  |  |
| `Product` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `ProductGroupName` |  | |  | `_ProductGroup_2._ProductGroupText[1: Language = $session.system_language].ProductGroupName` |  |  |
| `ControllingObjectCurrency` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `OrderItem` |  | |  |  |  |  |
| `PartnerAccountAssignmentType` |  | |  |  |  |  |
| `PartnerBusinessArea` |  | |  |  |  |  |
| `PartnerBusinessAreaName` |  | |  | `cast( _PartnerBusinessArea._Text[1: Language = $session.system_language].BusinessAreaName as fis_partner_busarea_name preserving type )` |  |  |
| `PartnerCompany` |  | |  |  |  |  |
| `PartnerCompanyName` |  | |  | `cast( _PartnerCompany[1: Language = $session.system_language].CompanyName as fis_rcomp_name preserving type )` |  |  |
| `PartnerCompanyCode` |  | |  |  |  |  |
| `PartnerCompanyCodeName` |  | |  | `cast( I_FinancialPlanningEntryItem._PartnerCompanyCode.CompanyCodeName as fis_partner_company_code_name preserving type )` |  |  |
| `PartnerCostCenter` |  | |  |  |  |  |
| `PartnerCostCenterName` |  | |  | `cast( _PartnerCostCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].CostCenterName as fis_partner_kostl_name preserving type)` |  |  |
| `PartnerCostCtrActivityType` |  | |  |  |  |  |
| `PartnerCostCtrActivityTypeName` |  | |  | `cast( _PartnerCostCtrActivityType[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].CostCtrActivityTypeName as fis_partner_activity_type_name )` |  |  |
| `PartnerFunctionalArea` |  | |  |  |  |  |
| `PartnerFunctionalAreaName` |  | |  | `cast( _PartnerFunctionalArea._Text[1: Language = $session.system_language].FunctionalAreaName as fis_partner_funcarea_name )` |  |  |
| `PartnerOrder` |  | |  |  |  |  |
| `PartnerOrder_2` |  | |  |  |  |  |
| `PartnerProfitCenter` |  | |  |  |  |  |
| `PartnerProfitCenterName` |  | |  | `cast( _PartnerProfitCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].ProfitCenterName as fis_partner_prctr_name )` |  |  |
| `PartnerProject` |  | |  |  |  |  |
| `PartnerProjectDescription` |  | |  | `cast( I_FinancialPlanningEntryItem._PartnerProjectBasicData.ProjectDescription as fis_partner_project_descript preserving type )` |  |  |
| `PartnerSegment` |  | |  |  |  |  |
| `PartnerSegmentName` |  | |  | `cast( _PartnerSegment._Text[1: Language = $session.system_language].SegmentName as fis_partner_segment_name preserving type )` |  |  |
| `PartnerWBSElement` |  | |  |  |  |  |
| `PartnerWBSElementDescription` |  | |  | `cast( I_FinancialPlanningEntryItem._PartnerWBSElementBasicData.WBSDescription as fis_partner_wbs_descript preserving type )` |  |  |
| `PersonnelNumber` |  | |  |  |  |  |
| `IsStatisticalOrder` |  | |  |  |  |  |
| `IsStatisticalCostCenter` |  | |  |  |  |  |
| `IsStatisticalSalesDocument` |  | |  |  |  |  |
| `WBSIsStatisticalWBSElement` |  | |  |  |  |  |
| `PlanningCategory` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `PlantName` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `ServiceDocumentType` |  | |  |  |  |  |
| `ServiceDocument` |  | |  |  |  |  |
| `ServiceDocumentItem` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `ProfitCenterName` |  | |  | `_ProfitCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].ProfitCenterName` |  |  |
| `Project` |  | |  |  |  |  |
| `ProjectInternalID` |  | |  |  |  |  |
| `ProjectExternalID` |  | |  | `cast( I_FinancialPlanningEntryItem._ProjectBasicData.ProjectExternalID as fis_projectext_no_conv preserving type )` |  |  |
| `PartnerProjectInternalID` |  | |  |  |  |  |
| `PartnerProjectExternalID` |  | |  | `ProjectExternalID` |  |  |
| `ProjectDescription` |  | |  | `cast( I_FinancialPlanningEntryItem._ProjectBasicData.ProjectDescription as fis_project_description preserving type )` |  |  |
| `ReferenceDocument` |  | |  |  |  |  |
| `ReferenceDocumentContext` |  | |  |  |  |  |
| `ReferenceDocumentType` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `SalesDistrictName` |  | |  | `_SalesDistrict._Text[1: Language = $session.system_language].SalesDistrictName` |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `SalesDocument` |  | |  |  |  |  |
| `SalesDocumentItem` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `SalesOrganizationName` |  | |  | `cast( _SalesOrganization._Text[1: Language = $session.system_language].SalesOrganizationName as fis_sales_organization_name preserving type )` |  |  |
| `Segment` |  | |  |  |  |  |
| `SegmentName` |  | |  | `_Segment._Text[1: Language = $session.system_language].SegmentName` |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `ShipToPartyName` |  | |  | `cast( I_FinancialPlanningEntryItem._ShipToParty.CustomerName as ship_to_name preserving type )` |  |  |
| `SoldMaterial` |  | |  |  |  |  |
| `SoldMaterialName` |  | |  | `cast( _SoldMaterial._Text[1: Language = $session.system_language].MaterialName as fis_matnr_copa_name preserving type )` |  |  |
| `SoldProduct` |  | |  |  |  |  |
| `SoldProductName` |  | |  | `cast( _SoldProduct._Text[1: Language = $session.system_language].ProductName as fis_matnr_copa_name preserving type)` |  |  |
| `SoldProductGroup` |  | |  |  |  |  |
| `SoldProductGroupName` |  | |  | `_SoldProductGroup._Text[1: Language = $session.system_language].MaterialGroupName` |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `WBSElement` |  | |  |  |  |  |
| `WBSElementExternalID` |  | |  | `cast( I_FinancialPlanningEntryItem._WBSElementBasicData.WBSElementExternalID as fis_wbsext_no_conv preserving type )` |  |  |
| `PartnerWBSElementInternalID` |  | |  |  |  |  |
| `PartnerWBSElementExternalID` |  | |  | `WBSElementExternalID` |  |  |
| `WBSElementDescription` |  | |  | `WBSDescription` |  |  |
| `WorkItem` |  | |  |  |  |  |
| `WorkPackage` |  | |  |  |  |  |
| `WorkCenter` |  | |  |  |  |  |
| `WorkCenterInternalID` |  | |  |  |  |  |
| `OrderOperation` |  | |  |  |  |  |
| `BillableControl` |  | |  |  |  |  |
| `IsLotSizeIndependent` |  | |  |  |  |  |
| `SubLedgerAcctLineItemType` |  | |  |  |  |  |
| `AssetDepreciationArea` |  | |  |  |  |  |
| `MasterFixedAsset` |  | |  |  |  |  |
| `FixedAsset` |  | |  |  |  |  |
| `AssetAcctTransClassfctn` |  | |  |  |  |  |
| `AssetClass` |  | |  |  |  |  |
| `CalendarYear` |  | |  |  |  |  |
| `CalendarQuarter` |  | |  |  |  |  |
| `CalendarYearQuarter` |  | |  | `YearQuarter` |  |  |
| `CalendarMonth` |  | |  |  |  |  |
| `CalendarYearMonth` |  | |  | `YearMonth` |  |  |
| `CalendarWeek` |  | |  |  |  |  |
| `CalendarYearWeek` |  | |  | `YearWeek` |  |  |
| `FiscalQuarter` |  | |  |  |  |  |
| `FiscalWeek` |  | |  |  |  |  |
| `FiscalYearQuarter` |  | |  |  |  |  |
| `FiscalYearWeek` |  | |  |  |  |  |
| `AmountInTransactionCurrency` |  | |  |  |  |  |
| `AmountInCompanyCodeCurrency` |  | |  |  |  |  |
| `AmountInGlobalCurrency` |  | |  |  |  |  |
| `AmountInFunctionalCurrency` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency1` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency2` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency3` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency4` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency5` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency6` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency7` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency8` |  | |  |  |  |  |
| `AmountInObjectCurrency` |  | |  |  |  |  |
| `FixedAmountInGlobalCrcy` |  | |  |  |  |  |
| `FixedAmountInCoCodeCrcy` |  | |  |  |  |  |
| `FixedAmountInTransCrcy` |  | |  |  |  |  |
| `ValuationQuantity` |  | |  |  |  |  |
| `ValuationFixedQuantity` |  | |  |  |  |  |
| `ReferenceQuantityUnit` |  | |  |  |  |  |
| `ReferenceQuantity` |  | |  |  |  |  |
| `SponsoredProgram` |  | |  |  |  |  |
| `SponsoredClass` |  | |  |  |  |  |
| `GteeMBudgetValidityNumber` |  | |  |  |  |  |
| `REBusinessEntity` |  | |  |  |  |  |
| `RealEstateBuilding` |  | |  |  |  |  |
| `RealEstateProperty` |  | |  |  |  |  |
| `RERentalObject` |  | |  |  |  |  |
| `RealEstateContract` |  | |  |  |  |  |
| `REServiceChargeKey` |  | |  |  |  |  |
| `RESettlementUnitID` |  | |  |  |  |  |
| `SettlementReferenceDate` |  | |  |  |  |  |
| `GLAccountAuthorizationGroup` |  | |  |  |  |  |
| `CustomerBasicAuthorizationGrp` |  | |  |  |  |  |
| `OrderType` |  | |  |  |  |  |
| `SalesOrderType` |  | |  |  |  |  |
| `_ControllingAreaText` | | ✓ | | | | |
| `_CalendarMonth` | | ✓ | | | | |
| `_CalendarQuarter` | | ✓ | | | | |
| `_CalendarYearMonth` | | ✓ | | | | |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_WBSElementExternalIDText` | | ✓ | | | | |
| `_PartnerWBSElementExternalID` | | ✓ | | | | |
| `_PartnerWBSElemntExtrnalIDText` | | ✓ | | | | |
| `_PartnerProjectExternalID` | | ✓ | | | | |
| `_PartnerProjctExtrnalIDText` | | ✓ | | | | |
| `_ProjectExternalID` | | ✓ | | | | |
| `_ProjectExternalIDText` | | ✓ | | | | |
| `_MasterFixedAsset` | | ✓ | | | | |
| `_FixedAsset` | | ✓ | | | | |
| `_SubLedgerAccLineItemType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |
| `_CalendarMonth` | `I_CalendarMonth` | [1..1] |
| `_CalendarQuarter` | `I_CalendarQuarter` | [1..1] |
| `_CalendarYearMonth` | `I_YearMonth` | [1..1] |
| `_WBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_WBSElementExternalIDText` | `I_WBSElementByExternalID` | [0..1] |
| `_PartnerWBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_PartnerWBSElemntExtrnalIDText` | `I_WBSElementByExternalID` | [0..1] |
| `_PartnerProjectExternalID` | `I_ProjectByExternalID` | [0..1] |
| `_PartnerProjctExtrnalIDText` | `I_ProjectByExternalID` | [0..1] |
| `_ProjectExternalID` | `I_ProjectByExternalID` | [0..1] |
| `_ProjectExternalIDText` | `I_ProjectByExternalID` | [0..1] |
| `_Extension` | `E_FinancialPlanningEntryItem` | [1..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @Metadata.allowExtensions:true
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
//@Analytics: { dataCategory: #CUBE, dataExtraction.enabled: true }
@Analytics: { dataCategory: #CUBE }
@Analytics.technicalName: 'IFIFINPLNENTITC'
//@OData.publish: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@EndUserText.label: 'Financial Planning Entry Item - Cube'
@AccessControl.personalData.blocking: #REQUIRED

//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@AccessControl.privilegedAssociations: ['_ControllingAreaText']
// ]--GENERATED
@AccessControl.auditFilter: #ENABLED

define view entity I_FinPlanningEntryItemCube
  as select from I_FinancialPlanningEntryItem as I_FinancialPlanningEntryItem

  
  //--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
  association [0..1] to I_ControllingArea            as _ControllingAreaText           on   $projection.ControllingArea = _ControllingAreaText.ControllingArea
  // ]--GENERATED
//  association [0..1] to I_WBSElement                 as _WBSElement        on  $projection.WBSElement = _WBSElement.WBSElement
  association [1..1] to I_CalendarMonth              as _CalendarMonth                 on  $projection.CalendarMonth = _CalendarMonth.CalendarMonth
  association [1..1] to I_CalendarQuarter            as _CalendarQuarter               on  $projection.CalendarQuarter = _CalendarQuarter.CalendarQuarter
  association [1..1] to I_YearMonth                  as _CalendarYearMonth             on  $projection.CalendarYearMonth = _CalendarYearMonth.YearMonth
  association [0..1] to I_WBSElementByExternalID     as _WBSElementExternalID          on  $projection.WBSElementExternalID = _WBSElementExternalID.WBSElementExternalID
  association [0..1] to I_WBSElementByExternalID     as _WBSElementExternalIDText      on  $projection.WBSElementExternalID = _WBSElementExternalIDText.WBSElementExternalID
  association [0..1] to I_WBSElementByExternalID     as _PartnerWBSElementExternalID   on  $projection.PartnerWBSElementExternalID = _PartnerWBSElementExternalID.WBSElementExternalID
  association [0..1] to I_WBSElementByExternalID     as _PartnerWBSElemntExtrnalIDText on  $projection.PartnerWBSElementExternalID = _PartnerWBSElemntExtrnalIDText.WBSElementExternalID
  association [0..1] to I_ProjectByExternalID        as _PartnerProjectExternalID      on  $projection.PartnerProjectExternalID   = _PartnerProjectExternalID.ProjectExternalID  
  association [0..1] to I_ProjectByExternalID        as _PartnerProjctExtrnalIDText    on  $projection.PartnerProjectExternalID   = _PartnerProjctExtrnalIDText.ProjectExternalID 
  
  association [0..1] to I_ProjectByExternalID        as _ProjectExternalID             on  $projection.ProjectExternalID = _ProjectExternalID.ProjectExternalID
  association [0..1] to I_ProjectByExternalID        as _ProjectExternalIDText         on  $projection.ProjectExternalID = _ProjectExternalIDText.ProjectExternalID
  
  association [1..1] to E_FinancialPlanningEntryItem as _Extension                     on  $projection.FinancialPlanningReqTransSqnc = _Extension.FinancialPlanningReqTransSqnc
                                                                                       and $projection.FinancialPlanningDataPacket   = _Extension.FinancialPlanningDataPacket
                                                                                       and $projection.FinancialPlanningEntryItem    = _Extension.FinancialPlanningEntryItem
                                                                                                                                                     
{
  key I_FinancialPlanningEntryItem.FinancialPlanningDataPacket,
  key I_FinancialPlanningEntryItem.FinancialPlanningEntryItem,
  key I_FinancialPlanningEntryItem.FinancialPlanningReqTransSqnc,

      @Analytics.internalName: #LOCAL    
      @ObjectModel.foreignKey.association: '_AccountAssignmentType'
      I_FinancialPlanningEntryItem.AccountAssignmentType,
      I_FinancialPlanningEntryItem.BillToParty,
      cast( I_FinancialPlanningEntryItem._BillToParty.CustomerName as bill_to_name preserving type)                                                                                                                                                                                    as BillToPartyName,
      I_FinancialPlanningEntryItem.BillingDocumentType,
      I_FinancialPlanningEntryItem.BudgetingType,
      I_FinancialPlanningEntryItem.BudgetPeriod,
      I_FinancialPlanningEntryItem.BudgetProcess,
      I_FinancialPlanningEntryItem.BudgetDocWorkFlowStatus,
      I_FinancialPlanningEntryItem.BusinessArea,
      cast( _BusinessArea._Text[1: Language = $session.system_language].BusinessAreaName as fis_busarea_name preserving type )                                                                                                                             as BusinessAreaName,
      I_FinancialPlanningEntryItem.BusinessTransactionCategory,
      I_FinancialPlanningEntryItem.BusinessTransactionType,
      I_FinancialPlanningEntryItem.ChartOfAccounts,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CompanyCode'
      I_FinancialPlanningEntryItem.CompanyCode,
      cast( I_FinancialPlanningEntryItem._CompanyCode.CompanyCodeName as fis_butxt preserving type )                                                                                                                                                                    as CompanyCodeName,
      I_FinancialPlanningEntryItem.CompanyCodeCurrency,
      //--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ControllingArea',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.text.association: '_ControllingAreaText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ControllingArea'      
      I_FinancialPlanningEntryItem.ControllingArea,
      cast( I_FinancialPlanningEntryItem._ControllingArea.ControllingAreaName as fis_bezei preserving type )                                                                                                                                                            as ControllingAreaName,
      cast( I_FinancialPlanningEntryItem.ControllingDebitCreditCode as fis_co_belkz_no_conv preserving type ) as ControllingDebitCreditCode,
      I_FinancialPlanningEntryItem.CostAnalysisResource,
      //--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_CostCenterStdVH',
                     element: 'CostCenter' },
          additionalBinding: [{ localElement: 'ControllingArea',
                                element: 'ControllingArea' }]
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_CostCenter'
//      @ObjectModel.text.element: ['CostCenterName'] 
      I_FinancialPlanningEntryItem.CostCenter,
      _CostCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].CostCenterName                                                                    as CostCenterName,
      I_FinancialPlanningEntryItem.CostCtrActivityType,
      cast( _CostCtrActivityType[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].CostCtrActivityTypeName as fis_lstar_text )                        as CostCtrActivityTypeName,
      I_FinancialPlanningEntryItem.CostSourceUnit,
      I_FinancialPlanningEntryItem.Customer,
      I_FinancialPlanningEntryItem._Customer.CustomerName                                                                                                                                                                                                               as CustomerName,
      I_FinancialPlanningEntryItem.CustomerGroup,
      cast( _CustomerGroup._Text[1: Language = $session.system_language].CustomerGroupName as fis_customergroup_name )                                                                                                                     as CustomerGroupName,
      I_FinancialPlanningEntryItem.CustomerSupplierCorporateGroup,
      I_FinancialPlanningEntryItem.CustomerSupplierCountry,
      cast( _CustomerSupplierCountry._Text[1: Language = $session.system_language].CountryName as fis_customersupplier_country )                                                                                                           as CustomerSupplierCountryName,
      I_FinancialPlanningEntryItem.CustomerSupplierIndustry,
      cast( _CustomerSupplierIndustryText[1: Language = $session.system_language].CustomerSupplierIndustryName as fis_customersupplier_industry preserving type ) as CustomerSupplierIndustryName,
      I_FinancialPlanningEntryItem.DistributionChannel,
      cast( _DistributionChannel._Text[1: Language = $session.system_language].DistributionChannelName  as fis_distributionchannel_name preserving type )                                                                                                  as DistributionChannelName,
      I_FinancialPlanningEntryItem.OrganizationDivision,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'OrganizationDivision'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'OrganizationDivision'
      I_FinancialPlanningEntryItem.Division,
//      @API.element.releaseState: #DEPRECATED
//      @API.element.successor:    'OrganizationDivisionName'
//      @VDM.lifecycle.status:     #DEPRECATED
//      @VDM.lifecycle.successor:  'OrganizationDivisionName'
      cast( _OrganizationDivision._Text[1: Language = $session.system_language].DivisionName as fis_division_name )                                                                                                                        as DivisionName,
//      cast( _OrganizationDivision._Text[1: Language = $session.system_language].DivisionName as fis_orgdivision_name )                                                                                                                     as OrganizationDivisionName,
      I_FinancialPlanningEntryItem.FinancialTransactionType,
      I_FinancialPlanningEntryItem.FinancialManagementArea,
      I_FinancialPlanningEntryItem.FiscalPeriod,
      I_FinancialPlanningEntryItem.FiscalYear,
      I_FinancialPlanningEntryItem.FiscalYearPeriod,
      I_FinancialPlanningEntryItem.FiscalYearVariant,
      I_FinancialPlanningEntryItem.FreeDefinedCurrency1,
      I_FinancialPlanningEntryItem.FreeDefinedCurrency2,
      I_FinancialPlanningEntryItem.FreeDefinedCurrency3,
      I_FinancialPlanningEntryItem.FreeDefinedCurrency4,
      I_FinancialPlanningEntryItem.FreeDefinedCurrency5,
      I_FinancialPlanningEntryItem.FreeDefinedCurrency6,
      I_FinancialPlanningEntryItem.FreeDefinedCurrency7,
      I_FinancialPlanningEntryItem.FreeDefinedCurrency8,
      I_FinancialPlanningEntryItem.FunctionalArea,
      I_FinancialPlanningEntryItem.Fund,
      cast( _FunctionalArea._Text[1: Language = $session.system_language].FunctionalAreaName as fis_funcarea_name )                                                                                                                        as FunctionalAreaName,
      I_FinancialPlanningEntryItem.GLAccount,
      cast( _GLAccountInChartOfAccounts._Text[1: Language = $session.system_language].GLAccountName as fis_txt30_skat )                                                                                                                    as GLAccountName,
      cast( _GLAccountInChartOfAccounts._Text[1: Language = $session.system_language].GLAccountLongName as fis_txt50_skat )                                                                                                                as GLAccountLongName,
      I_FinancialPlanningEntryItem.FunctionalCurrency,      
      I_FinancialPlanningEntryItem.GlobalCurrency,
      I_FinancialPlanningEntryItem.GrantID,
      I_FinancialPlanningEntryItem.Ledger,
      _Ledger._Text[1: Language = $session.system_language].LedgerName                                                                                                                                                                     as LedgerName,
      I_FinancialPlanningEntryItem.LedgerFiscalYear,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'Product'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'Product'
      I_FinancialPlanningEntryItem.Material,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'ProductName'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'ProductName'
      _Material._Text[1: Language = $session.system_language].MaterialName                                                                                                                                                                 as MaterialName,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'SoldProductGroup'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'SoldProductGroup'
      I_FinancialPlanningEntryItem.MaterialGroup,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'SoldProductGroupName'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'SoldProductGroupName'
      _MaterialGroup._Text[1: Language = $session.system_language].MaterialGroupName                                                                                                                                                       as MaterialGroupName,

      I_FinancialPlanningEntryItem.Product,
      _Product._Text[1: Language = $session.system_language].ProductName,    
      I_FinancialPlanningEntryItem.ProductGroup,
      //_ProductGroup._Text[1: Language = $session.system_language].MaterialGroupName                                                                                                                                                        as ProductGroupName,
      _ProductGroup_2._ProductGroupText[1: Language = $session.system_language].ProductGroupName  as ProductGroupName,   //analog to I_JournalEntryItemCube
      I_FinancialPlanningEntryItem.ControllingObjectCurrency,
      I_FinancialPlanningEntryItem.OrderID,      
      I_FinancialPlanningEntryItem.OrderItem,
      I_FinancialPlanningEntryItem.PartnerAccountAssignmentType,
      I_FinancialPlanningEntryItem.PartnerBusinessArea,
      cast( _PartnerBusinessArea._Text[1: Language = $session.system_language].BusinessAreaName as fis_partner_busarea_name preserving type )                                                                                                              as PartnerBusinessAreaName,
      I_FinancialPlanningEntryItem.PartnerCompany,
      cast( _PartnerCompany[1: Language = $session.system_language].CompanyName as fis_rcomp_name preserving type )                                                                                                                                        as PartnerCompanyName,
      I_FinancialPlanningEntryItem.PartnerCompanyCode,
      cast( I_FinancialPlanningEntryItem._PartnerCompanyCode.CompanyCodeName as fis_partner_company_code_name preserving type )                                                                                                                                         as PartnerCompanyCodeName,
      I_FinancialPlanningEntryItem.PartnerCostCenter,
      cast( _PartnerCostCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].CostCenterName as fis_partner_kostl_name preserving type)                            as PartnerCostCenterName,
      I_FinancialPlanningEntryItem.PartnerCostCtrActivityType,
      cast( _PartnerCostCtrActivityType[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].CostCtrActivityTypeName as fis_partner_activity_type_name ) as PartnerCostCtrActivityTypeName,
      I_FinancialPlanningEntryItem.PartnerFunctionalArea,
      cast( _PartnerFunctionalArea._Text[1: Language = $session.system_language].FunctionalAreaName as fis_partner_funcarea_name )                                                                                                         as PartnerFunctionalAreaName,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'PartnerOrder_2'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'PartnerOrder_2'      
      I_FinancialPlanningEntryItem.PartnerOrder,
      I_FinancialPlanningEntryItem.PartnerOrder_2,
      I_FinancialPlanningEntryItem.PartnerProfitCenter,
      cast( _PartnerProfitCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].ProfitCenterName as fis_partner_prctr_name )                       as PartnerProfitCenterName,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'PartnerProjectExternalID'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'PartnerProjectExternalID'     
      I_FinancialPlanningEntryItem.PartnerProject,
      cast( I_FinancialPlanningEntryItem._PartnerProjectBasicData.ProjectDescription as fis_partner_project_descript preserving type )                                                                                                                                                  as PartnerProjectDescription,
      I_FinancialPlanningEntryItem.PartnerSegment,
      cast( _PartnerSegment._Text[1: Language = $session.system_language].SegmentName as fis_partner_segment_name preserving type )                                                                                                                        as PartnerSegmentName,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'PartnerWBSElementExternalID'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'PartnerWBSElementExternalID'
      I_FinancialPlanningEntryItem.PartnerWBSElement,
      cast( I_FinancialPlanningEntryItem._PartnerWBSElementBasicData.WBSDescription as fis_partner_wbs_descript preserving type )                                                                                                                                                       as PartnerWBSElementDescription,
      I_FinancialPlanningEntryItem.PersonnelNumber,
      IsStatisticalOrder,
      IsStatisticalCostCenter,
      IsStatisticalSalesDocument,
      WBSIsStatisticalWBSElement,
      I_FinancialPlanningEntryItem.PlanningCategory,
      I_FinancialPlanningEntryItem.Plant,
      I_FinancialPlanningEntryItem._Plant.PlantName                                                                                                                                                                                                                     as PlantName,
      I_FinancialPlanningEntryItem.PostingDate,

      I_FinancialPlanningEntryItem.ServiceDocumentType,
      I_FinancialPlanningEntryItem.ServiceDocument,
      I_FinancialPlanningEntryItem.ServiceDocumentItem,

      //--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ProfitCenterStdVH',
                     element: 'ProfitCenter' },
          additionalBinding: [{ localElement: 'ControllingArea',
                                element: 'ControllingArea' }]
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      I_FinancialPlanningEntryItem.ProfitCenter,
      _ProfitCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].ProfitCenterName                                                                as ProfitCenterName,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'ProjectExternalID'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'ProjectExternalID'     
      I_FinancialPlanningEntryItem.Project,
      @Analytics.internalName: #LOCAL    
      @ObjectModel.foreignKey.association: '_ProjectBasicData'
      ProjectInternalID,
      @Analytics.internalName: #LOCAL    
      @ObjectModel.foreignKey.association: '_ProjectExternalID'
cast( I_FinancialPlanningEntryItem._ProjectBasicData.ProjectExternalID  as fis_projectext_no_conv preserving type ) as ProjectExternalID,
      @Analytics.internalName: #LOCAL    
      @ObjectModel.foreignKey.association: '_PartnerProjectBasicData'     
      PartnerProjectInternalID,
      @Analytics.internalName: #LOCAL    
      @ObjectModel.foreignKey.association: '_PartnerProjectExternalID'
      I_FinancialPlanningEntryItem._PartnerProjectBasicData.ProjectExternalID                                                                                                                                                                                          as PartnerProjectExternalID,
      cast( I_FinancialPlanningEntryItem._ProjectBasicData.ProjectDescription as fis_project_description preserving type )                                                                                                                                                             as ProjectDescription,
      I_FinancialPlanningEntryItem.ReferenceDocument,
      I_FinancialPlanningEntryItem.ReferenceDocumentContext,
      I_FinancialPlanningEntryItem.ReferenceDocumentType,
      I_FinancialPlanningEntryItem.SalesDistrict,
      _SalesDistrict._Text[1: Language = $session.system_language].SalesDistrictName                                                                                                                                                       as SalesDistrictName,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'SalesDocument'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'SalesDocument'
      I_FinancialPlanningEntryItem.SalesOrder,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'SalesDocumentItem'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'SalesDocumentItem'
      I_FinancialPlanningEntryItem.SalesOrderItem,
      I_FinancialPlanningEntryItem.SalesDocument,
      I_FinancialPlanningEntryItem.SalesDocumentItem,      
      I_FinancialPlanningEntryItem.SalesOrganization,
      cast( _SalesOrganization._Text[1: Language = $session.system_language].SalesOrganizationName as fis_sales_organization_name preserving type )                                                                                                        as SalesOrganizationName,
      I_FinancialPlanningEntryItem.Segment,
      _Segment._Text[1: Language = $session.system_language].SegmentName                                                                                                                                                                   as SegmentName,
      I_FinancialPlanningEntryItem.ShipToParty,
      cast( I_FinancialPlanningEntryItem._ShipToParty.CustomerName as ship_to_name preserving type )                                                                                                                                                                                    as ShipToPartyName,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'SoldProduct'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'SoldProduct'
      I_FinancialPlanningEntryItem.SoldMaterial,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'SoldProductName'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'SoldProductName'
      cast( _SoldMaterial._Text[1: Language = $session.system_language].MaterialName as fis_matnr_copa_name preserving type )                                                                                                                              as SoldMaterialName,
      I_FinancialPlanningEntryItem.SoldProduct,
      cast( _SoldProduct._Text[1: Language = $session.system_language].ProductName as fis_matnr_copa_name preserving type)                                                                                                                                as SoldProductName,
      I_FinancialPlanningEntryItem.SoldProductGroup,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'SoldProductGroupName'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'SoldProductGroupName'
      _SoldProductGroup._Text[1: Language = $session.system_language].MaterialGroupName                                                                                                                                                    as SoldProductGroupName,
      I_FinancialPlanningEntryItem.TransactionCurrency,
      @Analytics.internalName: #LOCAL    
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      I_FinancialPlanningEntryItem.WBSElementInternalID,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'WBSElementExternalID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'WBSElementExternalID'
      I_FinancialPlanningEntryItem.WBSElement                                                                                                                                                                                              as WBSElement,
      @Analytics.internalName: #LOCAL    
      @ObjectModel.foreignKey.association: '_WBSElementExternalID'
cast( I_FinancialPlanningEntryItem._WBSElementBasicData.WBSElementExternalID as fis_wbsext_no_conv preserving type ) as WBSElementExternalID,
       @Analytics.internalName: #LOCAL    
      @ObjectModel.foreignKey.association: '_PartnerWBSElementBasicData'    
      PartnerWBSElementInternalID,
      @Analytics.internalName: #LOCAL    
      @ObjectModel.foreignKey.association: '_PartnerWBSElementExternalID'
      I_FinancialPlanningEntryItem._PartnerWBSElementBasicData.WBSElementExternalID                                                                                                                                                                                     as PartnerWBSElementExternalID,
      I_FinancialPlanningEntryItem._WBSElementBasicData.WBSDescription                                                                                                                                                                                                  as WBSElementDescription,
      I_FinancialPlanningEntryItem.WorkItem,
      I_FinancialPlanningEntryItem.WorkPackage,
      I_FinancialPlanningEntryItem._WorkCenter.WorkCenter                                                                                                                                                                                                               as WorkCenter,
      I_FinancialPlanningEntryItem.WorkCenterInternalID,
      I_FinancialPlanningEntryItem.OrderOperation,
      I_FinancialPlanningEntryItem.BillableControl,
      I_FinancialPlanningEntryItem.IsLotSizeIndependent,
      
      @Analytics.internalName: #LOCAL 
      @ObjectModel.foreignKey.association: '_SubLedgerAccLineItemType'
      SubLedgerAcctLineItemType,

      AssetDepreciationArea,
      @Analytics.internalName: #LOCAL 
      @ObjectModel.foreignKey.association: '_MasterFixedAsset'
      MasterFixedAsset,
      @Analytics.internalName: #LOCAL 
      @ObjectModel.foreignKey.association: '_FixedAsset'
      FixedAsset,
      AssetAcctTransClassfctn,
      AssetClass,         

      I_FinancialPlanningEntryItem._CalendarDate.CalendarYear                                                                                                                                                                                                           as CalendarYear,
      @ObjectModel.foreignKey.association: '_CalendarQuarter'
      I_FinancialPlanningEntryItem._CalendarDate.CalendarQuarter                                                                                                                                                                                                        as CalendarQuarter,
      I_FinancialPlanningEntryItem._CalendarDate.YearQuarter                                                                                                                                                                                                            as CalendarYearQuarter,
      @ObjectModel.foreignKey.association: '_CalendarMonth'
      I_FinancialPlanningEntryItem._CalendarDate.CalendarMonth                                                                                                                                                                                                          as CalendarMonth,
      @ObjectModel.foreignKey.association: '_CalendarYearMonth'
      I_FinancialPlanningEntryItem._CalendarDate.YearMonth                                                                                                                                                                                                              as CalendarYearMonth,
      I_FinancialPlanningEntryItem._CalendarDate.CalendarWeek                                                                                                                                                                                                           as CalendarWeek,
      I_FinancialPlanningEntryItem._CalendarDate.YearWeek                                                                                                                                                                                                               as CalendarYearWeek,
      I_FinancialPlanningEntryItem._FiscalCalendarDate.FiscalQuarter                                                                                                                                                                                                    as FiscalQuarter,
      I_FinancialPlanningEntryItem._FiscalCalendarDate.FiscalWeek                                                                                                                                                                                                       as FiscalWeek,
      I_FinancialPlanningEntryItem._FiscalCalendarDate.FiscalYearQuarter                                                                                                                                                                                                as FiscalYearQuarter,
      I_FinancialPlanningEntryItem._FiscalCalendarDate.FiscalYearWeek                                                                                                                                                                                                   as FiscalYearWeek,

      // Amounts and quantities
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      I_FinancialPlanningEntryItem.AmountInTransactionCurrency,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      I_FinancialPlanningEntryItem.AmountInCompanyCodeCurrency,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_FinancialPlanningEntryItem.AmountInGlobalCurrency,
      
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      I_FinancialPlanningEntryItem.AmountInFunctionalCurrency,        

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      I_FinancialPlanningEntryItem.AmountInFreeDefinedCurrency1,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      I_FinancialPlanningEntryItem.AmountInFreeDefinedCurrency2,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      I_FinancialPlanningEntryItem.AmountInFreeDefinedCurrency3,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      I_FinancialPlanningEntryItem.AmountInFreeDefinedCurrency4,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      I_FinancialPlanningEntryItem.AmountInFreeDefinedCurrency5,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      I_FinancialPlanningEntryItem.AmountInFreeDefinedCurrency6,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      I_FinancialPlanningEntryItem.AmountInFreeDefinedCurrency7,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      I_FinancialPlanningEntryItem.AmountInFreeDefinedCurrency8,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'ControllingObjectCurrency'} }
      I_FinancialPlanningEntryItem.AmountInObjectCurrency,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_FinancialPlanningEntryItem.FixedAmountInGlobalCrcy,
      
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      I_FinancialPlanningEntryItem.FixedAmountInCoCodeCrcy, 
      
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }      
      I_FinancialPlanningEntryItem.FixedAmountInTransCrcy,           

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      I_FinancialPlanningEntryItem.ValuationQuantity,
      
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }      
      I_FinancialPlanningEntryItem.ValuationFixedQuantity,        
      
      @Analytics.internalName: #LOCAL 
      @ObjectModel.foreignKey.association: '_ReferenceQuantityUnit'
      I_FinancialPlanningEntryItem.ReferenceQuantityUnit,
      @Analytics.internalName: #LOCAL 
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ReferenceQuantityUnit'} }
      I_FinancialPlanningEntryItem.ReferenceQuantity,     
      
      
SponsoredProgram,
SponsoredClass,                    
GteeMBudgetValidityNumber,         
      
      
///////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOCP_SI_RE   ACDOCP: Fields for Real Estate
///////////////////////////////////////////////////////////////////////  
REBusinessEntity,
RealEstateBuilding,
RealEstateProperty,
RERentalObject,
RealEstateContract, 
REServiceChargeKey,
RESettlementUnitID,
SettlementReferenceDate,       
      

      /* Associations */
      I_FinancialPlanningEntryItem._BillableControl,
      I_FinancialPlanningEntryItem._BillToParty,
      I_FinancialPlanningEntryItem._BillingDocumentType,
      I_FinancialPlanningEntryItem._BudgetingType,
      I_FinancialPlanningEntryItem._BudgetPeriod,
      I_FinancialPlanningEntryItem._BudgetProcess,
      I_FinancialPlanningEntryItem._BusinessArea,
      I_FinancialPlanningEntryItem._BusinessTransactionType,
      I_FinancialPlanningEntryItem._CalendarDate,
      I_FinancialPlanningEntryItem._ChartOfAccounts,
      I_FinancialPlanningEntryItem._CompanyCode,
      I_FinancialPlanningEntryItem._CompanyCodeCurrency,
      I_FinancialPlanningEntryItem._ControllingArea,
      I_FinancialPlanningEntryItem._ControllingDebitCreditCode,
      I_FinancialPlanningEntryItem._CostAnalysisResource,
      @Consumption.filter.businessDate.at : true
      I_FinancialPlanningEntryItem._CostCenter,
      @Consumption.filter.businessDate.at : true
      I_FinancialPlanningEntryItem._ProfitCenter,  
      @Consumption.filter.businessDate.at : true    
      I_FinancialPlanningEntryItem._CostCtrActivityType,
      I_FinancialPlanningEntryItem._CostSourceUnit,
      I_FinancialPlanningEntryItem._AccountAssignmentType,
      I_FinancialPlanningEntryItem._CurrentCostCenter,
      I_FinancialPlanningEntryItem._CurrentProfitCenter,
      I_FinancialPlanningEntryItem._Customer,
      I_FinancialPlanningEntryItem._CustomerGroup,
      I_FinancialPlanningEntryItem._CustomerSupplierCountry,
      I_FinancialPlanningEntryItem._DistributionChannel,
      I_FinancialPlanningEntryItem._OrganizationDivision,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_OrganizationDivision'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_OrganizationDivision'
      I_FinancialPlanningEntryItem._Division,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_PersonWorkAgreement_1'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_PersonWorkAgreement_1'
      I_FinancialPlanningEntryItem._Employment,
      I_FinancialPlanningEntryItem._PersonWorkAgreement_1,
      I_FinancialPlanningEntryItem._FinancialManagementArea,
      I_FinancialPlanningEntryItem._FinancialTransactionType,
      I_FinancialPlanningEntryItem._FiscalCalendarDate,
      I_FinancialPlanningEntryItem._FiscalPeriodForVariant,
      I_FinancialPlanningEntryItem._FiscalYear,
      I_FinancialPlanningEntryItem._FiscalYearPeriodForVariant,
      I_FinancialPlanningEntryItem._FiscalYearVariant,
      I_FinancialPlanningEntryItem._FreeDefinedCurrency1,
      I_FinancialPlanningEntryItem._FreeDefinedCurrency2,
      I_FinancialPlanningEntryItem._FreeDefinedCurrency3,
      I_FinancialPlanningEntryItem._FreeDefinedCurrency4,
      I_FinancialPlanningEntryItem._FreeDefinedCurrency5,
      I_FinancialPlanningEntryItem._FreeDefinedCurrency6,
      I_FinancialPlanningEntryItem._FreeDefinedCurrency7,
      I_FinancialPlanningEntryItem._FreeDefinedCurrency8,
      I_FinancialPlanningEntryItem._FunctionalArea,
      I_FinancialPlanningEntryItem._Fund,      
      I_FinancialPlanningEntryItem._Grant,      
      I_FinancialPlanningEntryItem._GLAccountInChartOfAccounts,
      I_FinancialPlanningEntryItem._GLAccountInCompanyCode,
      I_FinancialPlanningEntryItem._GlobalCurrency,
      I_FinancialPlanningEntryItem._FunctionalCurrency,
      I_FinancialPlanningEntryItem._InternalOrder,
      I_FinancialPlanningEntryItem._Ledger,
      I_FinancialPlanningEntryItem._LedgerFiscalYearForVariant,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_Product'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_Product'
      I_FinancialPlanningEntryItem._Material,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_SoldProductGroup_2'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_SoldProductGroup_2'
      I_FinancialPlanningEntryItem._MaterialGroup,
      I_FinancialPlanningEntryItem._SoldProductGroup_2,      
      I_FinancialPlanningEntryItem._ProductGroup_2,      
      I_FinancialPlanningEntryItem._Order,
      I_FinancialPlanningEntryItem._PartnerBusinessArea,
      I_FinancialPlanningEntryItem._PartnerCompany,
      I_FinancialPlanningEntryItem._PartnerCompanyCode,
      @Consumption.filter.businessDate.at : true
      I_FinancialPlanningEntryItem._PartnerCostCenter,
      @Consumption.filter.businessDate.at : true
      I_FinancialPlanningEntryItem._PartnerCostCtrActivityType,
      I_FinancialPlanningEntryItem._PartnerFunctionalArea,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_PartnerOrder_2'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  '_PartnerOrder_2'
      I_FinancialPlanningEntryItem._PartnerOrder,
      I_FinancialPlanningEntryItem._PartnerOrder_2,
      @Consumption.filter.businessDate.at : true
      I_FinancialPlanningEntryItem._PartnerProfitCenter,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_PartnerProjectExternalID'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  '_PartnerProjectExternalID'
      I_FinancialPlanningEntryItem._PartnerProject,
      I_FinancialPlanningEntryItem._PartnerProjectBasicData,      
      _PartnerProjectExternalID,
      _PartnerProjctExtrnalIDText,      
      I_FinancialPlanningEntryItem._PartnerSegment,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_PartnerWBSElementExternalID'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  '_PartnerWBSElementExternalID'
      I_FinancialPlanningEntryItem._PartnerWBSElement,
      I_FinancialPlanningEntryItem._PartnerWBSElementBasicData, 
      _PartnerWBSElementExternalID,
      _PartnerWBSElemntExtrnalIDText,
      I_FinancialPlanningEntryItem._PlanningCategory,
      I_FinancialPlanningEntryItem._Plant,
      I_FinancialPlanningEntryItem._Product,
      I_FinancialPlanningEntryItem._ProductGroup,        
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_ProjectExternalID'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  '_ProjectExternalID'
      I_FinancialPlanningEntryItem._Project,
      I_FinancialPlanningEntryItem._ProjectBasicData, 
      _ProjectExternalID,
      _ProjectExternalIDText,
      I_FinancialPlanningEntryItem._ReferenceQuantityUnit,
      I_FinancialPlanningEntryItem._SalesDistrict,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_SalesDocument'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_SalesDocument'
      I_FinancialPlanningEntryItem._SalesOrder,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_SalesDocumentItem'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_SalesDocumentItem'
      I_FinancialPlanningEntryItem._SalesOrderItem,
      I_FinancialPlanningEntryItem._SalesDocument,
      I_FinancialPlanningEntryItem._SalesDocumentItem,      
      I_FinancialPlanningEntryItem._SalesOrganization,
      I_FinancialPlanningEntryItem._Segment,
      I_FinancialPlanningEntryItem._ShipToParty,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_SoldProduct'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_SoldProduct'
      I_FinancialPlanningEntryItem._SoldMaterial,
      I_FinancialPlanningEntryItem._SoldProduct,
      I_FinancialPlanningEntryItem._SoldProductGroup,      
      I_FinancialPlanningEntryItem._TransactionCurrency,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_WBSElementExternalID'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  '_WBSElementExternalID'
      I_FinancialPlanningEntryItem._WBSElement,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_WBSElementBasicData'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasicData'
      I_FinancialPlanningEntryItem._WBSElementByInternalKey,
      I_FinancialPlanningEntryItem._WBSElementBasicData,
      _WBSElementExternalID,
      _WBSElementExternalIDText,
      I_FinancialPlanningEntryItem._WorkPackage,
      I_FinancialPlanningEntryItem._WorkPackageWorkItem,
      _CalendarMonth,
      _CalendarQuarter,
      _CalendarYearMonth,

_MasterFixedAsset,
_FixedAsset,
_SubLedgerAccLineItemType,

      // Just for Authorization Check!!! DO NOT USE!!! WILL BE DEPRECATED!!!
      @API.element.releaseState: #DEPRECATED
      //@API.element.successor:    ''
      @VDM.lifecycle.status:    #DEPRECATED
      //@VDM.lifecycle.successor: ''
      GLAccountAuthorizationGroup,
      @API.element.releaseState: #DEPRECATED
      //@API.element.successor:    ''
      @VDM.lifecycle.status:    #DEPRECATED
      //@VDM.lifecycle.successor: ''
      CustomerBasicAuthorizationGrp,
      @API.element.releaseState: #DEPRECATED
      //@API.element.successor:    ''
      @VDM.lifecycle.status:    #DEPRECATED
      //@VDM.lifecycle.successor: ''
      OrderType,
      @API.element.releaseState: #DEPRECATED
      //@API.element.successor:    ''
      @VDM.lifecycle.status:    #DEPRECATED
      //@VDM.lifecycle.successor: ''
      SalesOrderType   ,
      //--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
      @Consumption.hidden: true
      _ControllingAreaText
      // ]--GENERATED



      //_Extension  Extensions must be local

}
```
