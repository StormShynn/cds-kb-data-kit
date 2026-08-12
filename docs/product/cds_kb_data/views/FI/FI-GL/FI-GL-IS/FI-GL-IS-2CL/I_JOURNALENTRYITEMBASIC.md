---
name: I_JOURNALENTRYITEMBASIC
description: "Journal Entry Item Basic"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYITEMBASIC')/$value
semantic_en: "Journal Entry Item Basic"
semantic_vi: "Journal Entry Item Basic — CDS view giao diện dựa trên I_JournalEntryItemCube."
keywords:
  - "journal"
  - "entry"
  - "item"
  - "basic"
  - "ledger"
  - "fiscal"
  - "year"
  - "name"
  - "account"
tags:
  - FI
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
---
# I_JOURNALENTRYITEMBASIC

**Journal Entry Item Basic**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYITEMBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `LedgerName` |  | |  |  | `CHAR(30)` | Ledger Name |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `GLAccountName` |  | |  |  | `CHAR(30)` | G/L Account Name |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Company Code Name |
| `CompanyCodePartnerCompany` |  | |  | `Company` | `CHAR(6)` | Company |
| `CompanyCodeCountry` |  | |  | `Country` | `CHAR(3)` | Country/Region Key |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CostCenterName` |  | |  |  | `CHAR(20)` | Cost Center Name |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ProfitCenterName` |  | |  |  | `CHAR(20)` | Description of Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `FunctionalAreaName` |  | |  |  | `CHAR(30)` | Functional Area Name |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `BusinessAreaName` |  | |  |  | `CHAR(30)` | Business Area Name |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ControllingAreaName` |  | |  |  | `CHAR(25)` | Controlling Area Name |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `SegmentName` |  | |  |  | `CHAR(50)` | Segment Name |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerCostCenterName` |  | |  |  | `CHAR(20)` | Partner Cost Center Name |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerProfitCenterName` |  | |  |  | `CHAR(50)` | Partner Profit Center Name |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerFunctionalAreaName` |  | |  |  | `CHAR(30)` | Partner Functional Area Name |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Partner Business Area |
| `PartnerBusinessAreaName` |  | |  |  | `CHAR(30)` | Partner Business Area Name |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `PartnerCompanyName` |  | |  |  | `CHAR(30)` | Company Name |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `PartnerSegmentName` |  | |  |  | `CHAR(50)` | Partner Segment Name |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PlantName` |  | |  |  | `CHAR(30)` | Plant Name |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerName` |  | |  |  | `CHAR(80)` | Name of Customer |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | Controlling Debit Credit Code |
| `Project` |  | |  |  | `CHAR(24)` | Project |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project External ID |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `ProjectDescription` |  | |  |  | `CHAR(40)` | Project Name |
| `WBSElement` |  | |  |  | `CHAR(24)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `WBSDescription` |  | |  |  | `CHAR(40)` | Work Breakdown Structure Element Name |
| `PartnerCompanyCode` |  | |  |  | `CHAR(4)` | Partner Company Code |
| `PartnerCompanyCodeName` |  | |  |  | `CHAR(25)` | Partner Company Code Name |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `CostCtrActivityTypeName` |  | |  |  | `CHAR(60)` | Activity Type Name |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `PartnerOrder` |  | |  |  | `CHAR(12)` | Partner Order (Deprecated) |
| `PartnerOrder_2` |  | |  |  | `CHAR(12)` | Partner Order |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerCostCtrActivityTypeName` |  | |  |  | `CHAR(60)` | Partner Activity Type Name |
| `PartnerProject` |  | |  |  | `CHAR(24)` | Partner Project |
| `PartnerProjectExternalID` |  | |  |  | `CHAR(24)` | Partner Project External ID |
| `PartnerProjectInternalID` |  | |  |  | `NUMC(8)` | Partner Project Internal ID |
| `PartnerProjectDescription` |  | |  | `cast( I_JournalEntryItemCube._PartnerProjectBasicData.ProjectDescription as fis_partner_project_descript )` | `CHAR(40)` | Partner Project Description (1st text line) |
| `PartnerWBSElement` |  | |  |  | `CHAR(24)` | Partner WBS Element |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `PartnerWBSElementInternalID` |  | |  |  | `NUMC(8)` | Partner WBS Element Internal ID |
| `PartnerWBSElementDescription` |  | |  | `cast( I_JournalEntryItemCube._PartnerWBSElementBasicData.WBSDescription as fis_partner_wbs_descript )` | `CHAR(40)` | Partner WBS Element Description |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `SalesOrganizationName` |  | |  |  | `CHAR(20)` | Sales Organization Name |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `DistributionChannelName` |  | |  |  | `CHAR(20)` | Distribution Channel Name |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `DivisionName` |  | |  |  | `CHAR(30)` | Name of Division |
| `SoldMaterial` |  | |  |  | `CHAR(40)` | Sold Material |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `SoldMaterialName` |  | |  |  | `CHAR(40)` | Sold Material Name |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Product Sold Group (Deprecated) |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `MaterialGroupName` |  | |  |  | `CHAR(20)` | Product Group Description |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `CustomerGroupName` |  | |  |  | `CHAR(30)` | Name of Customer Group |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierCountryName` |  | |  |  | `CHAR(50)` | Country/Region Name |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `CustomerSupplierIndustryName` |  | |  |  | `CHAR(20)` | Description of the Industry Key |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `SalesDistrictName` |  | |  |  | `CHAR(20)` | Name of the District |
| `_BusinessAreaText` | | ✓ | | | | |
| `_PartnerBusinessAreaText` | | ✓ | | | | |
| `_ChartOfAccountsText` | | ✓ | | | | |
| `_PartnerCompanyCodeText` | | ✓ | | | | |
| `_ControllingAreaText` | | ✓ | | | | |
| `_CustomerText` | | ✓ | | | | |
| `_GLAcctInChartOfAccountsText` | | ✓ | | | | |
| `_PartnerOrderText` | | ✓ | | | | |
| `_LedgerText` | | ✓ | | | | |
| `_SoldMaterialText` | | ✓ | | | | |
| `_PartnerProjectText` | | ✓ | | | | |
| `_ProjectText` | | ✓ | | | | |
| `_PartnerSegmentText` | | ✓ | | | | |
| `_SegmentText` | | ✓ | | | | |
| `_PartnerWBSElementText` | | ✓ | | | | |
| `_WBSElementText` | | ✓ | | | | |
| `_CostCenterText` | | ✓ | | | | |
| `_ProfitCenterText` | | ✓ | | | | |
| `_CostCenterActivityTypeText` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_PartnerOrderText_2` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_PartnerBusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_ChartOfAccountsText` | `I_ChartOfAccountsText` | [0..*] |
| `_PartnerCompanyCodeText` | `I_CompanyCode` | [0..1] |
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |
| `_CustomerText` | `I_Customer` | [0..1] |
| `_GLAcctInChartOfAccountsText` | `I_GLAccountText` | [0..*] |
| `_PartnerOrderText` | `I_InternalOrder` | [0..1] |
| `_LedgerText` | `I_LedgerText` | [0..*] |
| `_SoldMaterialText` | `I_MaterialText` | [0..*] |
| `_PartnerProjectText` | `I_Project` | [0..1] |
| `_ProjectText` | `I_Project` | [0..1] |
| `_PartnerSegmentText` | `I_SegmentText` | [0..*] |
| `_SegmentText` | `I_SegmentText` | [0..*] |
| `_PartnerWBSElementText` | `I_WBSElement` | [0..1] |
| `_WBSElementText` | `I_WBSElement` | [0..1] |
| `_CostCenterText` | `I_CostCenterText` | [0..*] |
| `_ProfitCenterText` | `I_ProfitCenterText` | [0..*] |
| `_CostCenterActivityTypeText` | `I_CostCenterActivityTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYITEMBASIC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYITEMBASIC')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @Analytics: { dataCategory: #CUBE }
@Analytics.technicalName: 'IFIJRNLBASIC' //, dataExtraction.enabled: true }
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Journal Entry Item Basic'
@OData.publish: true

@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA') 
@ObjectModel: {
                usageType: { sizeCategory: #XXL,
                             dataClass:  #MIXED,
                             serviceQuality: #D },
                supportedCapabilities: [#ANALYTICAL_PROVIDER],
                modelingPattern: #ANALYTICAL_CUBE }
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true 

//--[ GENERATED:012:GFBfhxvv7kY4nR8NYqBCGW
@AccessControl.privilegedAssociations: ['_BusinessAreaText','_PartnerBusinessAreaText','_ChartOfAccountsText','_PartnerCompanyCodeText','_ControllingAreaText','_CustomerText','_GLAcctInChartOfAccountsText','_PartnerOrderText','_PartnerOrderText_2','_LedgerText','_SoldMaterialText','_PartnerProjectText','_ProjectText','_PartnerSegmentText','_SegmentText','_PartnerWBSElementText','_WBSElementText']
// ]--GENERATED

define view entity I_JournalEntryItemBasic
                                                                                  
as select from I_JournalEntryItemCube as I_JournalEntryItemCube
  //--[ GENERATED:012:GFBfhxvv7kY4nR8NYqBCGW
  association [0..*] to I_BusinessAreaText      as _BusinessAreaText on   $projection.BusinessArea = _BusinessAreaText.BusinessArea
  association [0..*] to I_BusinessAreaText      as _PartnerBusinessAreaText on   $projection.PartnerBusinessArea = _PartnerBusinessAreaText.BusinessArea
  association [0..*] to I_ChartOfAccountsText      as _ChartOfAccountsText on   $projection.ChartOfAccounts = _ChartOfAccountsText.ChartOfAccounts
  association [0..1] to I_CompanyCode      as _PartnerCompanyCodeText on   $projection.PartnerCompanyCode = _PartnerCompanyCodeText.CompanyCode
  association [0..1] to I_ControllingArea      as _ControllingAreaText on   $projection.ControllingArea = _ControllingAreaText.ControllingArea
  association [0..1] to I_Customer      as _CustomerText on   $projection.Customer = _CustomerText.Customer
  association [0..*] to I_GLAccountText      as _GLAcctInChartOfAccountsText on   $projection.ChartOfAccounts = _GLAcctInChartOfAccountsText.ChartOfAccounts
                                                                                 and   $projection.GLAccount = _GLAcctInChartOfAccountsText.GLAccount
  association [0..1] to I_InternalOrder      as _PartnerOrderText on   $projection.PartnerOrder = _PartnerOrderText.InternalOrder
  association [0..*] to I_LedgerText      as _LedgerText on   $projection.Ledger = _LedgerText.Ledger
  association [0..*] to I_MaterialText      as _SoldMaterialText on   $projection.SoldMaterial = _SoldMaterialText.Material
  association [0..1] to I_Project      as _PartnerProjectText on   $projection.PartnerProject = _PartnerProjectText.Project
  association [0..1] to I_Project      as _ProjectText on   $projection.Project = _ProjectText.Project
  association [0..*] to I_SegmentText      as _PartnerSegmentText on   $projection.PartnerSegment = _PartnerSegmentText.Segment
  association [0..*] to I_SegmentText      as _SegmentText on   $projection.Segment = _SegmentText.Segment
  association [0..1] to I_WBSElement      as _PartnerWBSElementText on   $projection.PartnerWBSElement = _PartnerWBSElementText.WBSElement
  association [0..1] to I_WBSElement      as _WBSElementText on   $projection.WBSElement = _WBSElementText.WBSElement
  
    association [0..*] to I_CostCenterText as _CostCenterText
      on  $projection.ControllingArea = _CostCenterText.ControllingArea
      and $projection.CostCenter      = _CostCenterText.CostCenter
      and _CostCenterText.ValidityStartDate <= $session.system_date
      and _CostCenterText.ValidityEndDate   >= $session.system_date

  association [0..*] to I_ProfitCenterText as _ProfitCenterText
      on  $projection.ControllingArea = _ProfitCenterText.ControllingArea
      and $projection.ProfitCenter      = _ProfitCenterText.ProfitCenter
      and _ProfitCenterText.ValidityStartDate <= $session.system_date
      and _ProfitCenterText.ValidityEndDate   >= $session.system_date
 
  association [0..*] to I_CostCenterActivityTypeText as _CostCenterActivityTypeText
      on  $projection.ControllingArea = _CostCenterActivityTypeText.ControllingArea
      and $projection.CostCtrActivityType = _CostCenterActivityTypeText.CostCtrActivityType
      and _CostCenterActivityTypeText.ValidityEndDate   >= $session.system_date
  
  // ]--GENERATED
  

//association [1..1] to E_JournalEntryItem      as _Extension                  on $projection.SourceLedger       = _Extension.SourceLedger
//                                                                            and $projection.CompanyCode        = _Extension.CompanyCode
//                                                                            and $projection.FiscalYear         = _Extension.FiscalYear
//                                                                            and $projection.AccountingDocument = _Extension.AccountingDocument
//                                                                            and $projection.LedgerGLLineItem   = _Extension.LedgerGLLineItem
 

{
//@ObjectModel.foreignKey.association: '_SourceLedger'      
//key SourceLedger,

@ObjectModel.foreignKey.association: '_LedgerFiscalYearForVariant'
@Semantics.fiscal.year: true
I_JournalEntryItemCube.LedgerFiscalYear,   //RYEAR

      //--[ GENERATED:012:GFBfhxvv7kY4nR8NYqBCGW
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_LedgerStdVH',
                     element: 'Ledger' }
        }]
      @ObjectModel.text.association: '_LedgerText'
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_Ledger'      
I_JournalEntryItemCube.Ledger,             //RLDNR
I_JournalEntryItemCube.LedgerName, 

      //--[ GENERATED:012:GFBfhxvv7kY4nR8NYqBCGW
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_GLAcctInChtOfAcctsStdVH',
                     element: 'GLAccount' },
          additionalBinding: [{ localElement: 'ChartOfAccounts',
                                element: 'ChartOfAccounts' }]
        }]
      @ObjectModel.text.association: '_GLAcctInChartOfAccountsText'
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
I_JournalEntryItemCube.GLAccount,          //RACCT
I_JournalEntryItemCube.GLAccountName,
//cast( _GLAccountInChartOfAccounts._Text[1: Language = $session.system_language].GLAccountLongName as fis_txt50_skat ) as GLAccountLongName,

      //--[ GENERATED:012:GFBfhxvv7kY4nR8NYqBCGW
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_CompanyCode'
CompanyCode,        //RBUKRS
CompanyCodeName,
I_JournalEntryItemCube._CompanyCode.Company as CompanyCodePartnerCompany,
I_JournalEntryItemCube._CompanyCode.Country as CompanyCodeCountry,


///////////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_00  Unified Journal Entry: Transaction, Currencies, Units
///////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////
// .INCLUDE  ACDOC_SI_GL_ACCAS Unified Journal Entry: G/L additional account assignments
////////////////////////////////////////////////////////////////////////////////////
      //--[ GENERATED:012:GFBfhxvv7kY4nR8NYqBCGW
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_CostCenterStdVH',
                     element: 'CostCenter' },
          additionalBinding: [{ localElement: 'ControllingArea',
                                element: 'ControllingArea' }]
        }]
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_CostCenter'
@ObjectModel.text.association: '_CostCenterText'
I_JournalEntryItemCube.CostCenter,         //RCNTR
I_JournalEntryItemCube.CostCenterName,
 
      //--[ GENERATED:012:GFBfhxvv7kY4nR8NYqBCGW
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ProfitCenterStdVH',
                     element: 'ProfitCenter' },
          additionalBinding: [{ localElement: 'ControllingArea',
                                element: 'ControllingArea' }]
        }]
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_ProfitCenter'
@ObjectModel.text.association: '_ProfitCenterText'
I_JournalEntryItemCube.ProfitCenter,      //PRCTR
I_JournalEntryItemCube.ProfitCenterName,

@ObjectModel.foreignKey.association: '_FunctionalArea'
I_JournalEntryItemCube.FunctionalArea,     //RFAREA
I_JournalEntryItemCube.FunctionalAreaName,

      //--[ GENERATED:012:GFBfhxvv7kY4nR8NYqBCGW
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_BusinessAreaStdVH',
                     element: 'BusinessArea' }
        }]
      @ObjectModel.text.association: '_BusinessAreaText'
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_BusinessArea'
I_JournalEntryItemCube.BusinessArea,       //RBUSA
I_JournalEntryItemCube.BusinessAreaName,

      //--[ GENERATED:012:GFBfhxvv7kY4nR8NYqBCGW
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ControllingArea',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.text.association: '_ControllingAreaText'
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_ControllingArea'
I_JournalEntryItemCube.ControllingArea,    //KOKRS
I_JournalEntryItemCube.ControllingAreaName,

      //--[ GENERATED:012:GFBfhxvv7kY4nR8NYqBCGW
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_SegmentStdVH',
                     element: 'Segment' }
        }]
      @ObjectModel.text.association: '_SegmentText'
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_Segment'
I_JournalEntryItemCube.Segment,            //SEGMENT
I_JournalEntryItemCube.SegmentName,

      //--[ GENERATED:012:GFBfhxvv7kY4nR8NYqBCGW
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_CostCenterStdVH',
                     element: 'CostCenter' },
          additionalBinding: [{ localElement: 'ControllingArea',
                                element: 'ControllingArea' }]
        }]
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_PartnerCostCenter'
//@ObjectModel.text.association: '_CostCenterText'
I_JournalEntryItemCube.PartnerCostCenter,  //SCNTR
I_JournalEntryItemCube.PartnerCostCenterName,

      //--[ GENERATED:012:GFBfhxvv7kY4nR8NYqBCGW
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ProfitCenterStdVH',
                     element: 'ProfitCenter' },
          additionalBinding: [{ localElement: 'ControllingArea',
                                element: 'ControllingArea' }]
        }]
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_PartnerProfitCenter'
//@ObjectModel.text.association: '_ProfitCenterText'
I_JournalEntryItemCube.PartnerProfitCenter,    //PPRCTR
I_JournalEntryItemCube.PartnerProfitCenterName,

@ObjectModel.foreignKey.association: '_PartnerFunctionalArea'
I_JournalEntryItemCube.PartnerFunctionalArea,  //SFAREA
I_JournalEntryItemCube.PartnerFunctionalAreaName,

      //--[ GENERATED:012:GFBfhxvv7kY4nR8NYqBCGW
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_BusinessAreaStdVH',
                     element: 'BusinessArea' }
        }]
      @ObjectModel.text.association: '_PartnerBusinessAreaText'
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_PartnerBusinessArea'
I_JournalEntryItemCube.PartnerBusinessArea,    //SBUSA
I_JournalEntryItemCube.PartnerBusinessAreaName,

@ObjectModel.foreignKey.association: '_PartnerCompany'
I_JournalEntryItemCube.PartnerCompany,         //RASSC
I_JournalEntryItemCube.PartnerCompanyName,


      //--[ GENERATED:012:GFBfhxvv7kY4nR8NYqBCGW
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_SegmentStdVH',
                     element: 'Segment' }
        }]
      @ObjectModel.text.association: '_PartnerSegmentText'
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_PartnerSegment'
I_JournalEntryItemCube.PartnerSegment,         //PSEGMENT
I_JournalEntryItemCube.PartnerSegmentName,


/////////////////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_VALUE_DATA Unified Journal Entry: Value Fields
/////////////////////////////////////////////////////////////////////////////////////

@ObjectModel.foreignKey.association: '_TransactionCurrency'
I_JournalEntryItemCube.TransactionCurrency as TransactionCurrency,    //RWCUR
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } I_JournalEntryItemCube.AmountInTransactionCurrency, //WSL

@ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
I_JournalEntryItemCube.CompanyCodeCurrency as CompanyCodeCurrency,    //RHCUR

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } I_JournalEntryItemCube.AmountInCompanyCodeCurrency, //HSL 

@ObjectModel.foreignKey.association: '_GlobalCurrency'      
I_JournalEntryItemCube.GlobalCurrency as GlobalCurrency,         //RKCUR

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }  I_JournalEntryItemCube.AmountInGlobalCurrency, //KSL

@ObjectModel.foreignKey.association: '_CostSourceUnit'
I_JournalEntryItemCube.CostSourceUnit as CostSourceUnit,         //RVUNIT
//@Aggregation.default: #SUM
//@Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }  ValuationQuantity,

/////////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_FIX  Unified Journal Entry: Mandatory fields for G/L
////////////////////////////////////////////////////////////////////////////
@ObjectModel.foreignKey.association: '_FiscalPeriod'
@Semantics.fiscal.period: true
I_JournalEntryItemCube.FiscalPeriod,       //POPER
@ObjectModel.foreignKey.association: '_FiscalYearVariant'      
@Semantics.fiscal.yearVariant: true
I_JournalEntryItemCube.FiscalYearVariant,  //PERIV
@ObjectModel.foreignKey.association: '_FiscalYearPeriod'
@Semantics.fiscal.yearPeriod: true
I_JournalEntryItemCube.FiscalYearPeriod,   //FISCYEARPER

      //--[ GENERATED:012:GFBfhxvv7kY4nR8NYqBCGW
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ChartOfAccountsStdVH',
                     element: 'ChartOfAccounts' }
        }]
      @ObjectModel.text.association: '_ChartOfAccountsText'
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_ChartOfAccounts'
I_JournalEntryItemCube.ChartOfAccounts,    //KTOPL


///////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_GEN  Unified Journal Entry: Fields for several subledgers
//////////////////////////////////////////////////////////////////////////

@ObjectModel.foreignKey.association: '_Plant'
I_JournalEntryItemCube.Plant,              //WERKS
I_JournalEntryItemCube.PlantName,

      //--[ GENERATED:012:GFBfhxvv7kY4nR8NYqBCGW
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_Customer_VH',
                     element: 'Customer' }
        }]
      @ObjectModel.text.association: '_CustomerText'
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_Customer'
I_JournalEntryItemCube.Customer,           //KUNNR
I_JournalEntryItemCube.CustomerName,


/////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_FI  Unified Journal Entry: Fields for FI subledgers
/////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_FAA  Unified Journal Entry: Fields for Asset Accounting
/////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_ML Unified Journal Entry: Fields for Material Ledger
//////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_CFIN   Unified Journal Entry: Fields for Central Finance
//////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////
//  .INCLUDE  ACDOC_SI_CO  Unified Journal Entry: CO fields
///////////////////////////////////////////////////////////////////////////
I_JournalEntryItemCube.ControllingDebitCreditCode, //CO_BELKZ

      //--[ GENERATED:012:GFBfhxvv7kY4nR8NYqBCGW
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ProjectStdVH',
                     element: 'Project' }
        }]
      @ObjectModel.text.association: '_ProjectText'
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_Project' 
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'ProjectExternalID'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  'ProjectExternalID'       
I_JournalEntryItemCube.Project,            //PS_PSPID
I_JournalEntryItemCube.ProjectExternalID,
I_JournalEntryItemCube.ProjectInternalID,

@Semantics.text: true
I_JournalEntryItemCube._ProjectBasicData.ProjectDescription as ProjectDescription,

      //--[ GENERATED:012:GFBfhxvv7kY4nR8NYqBCGW
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_WBSElementStdVH',
                     element: 'WBSElement' }
        }]
      @ObjectModel.text.association: '_WBSElementText'
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_WBSElement'   
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'WBSElementExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'WBSElementExternalID'   
I_JournalEntryItemCube.WBSElement,         //PS_POSID
I_JournalEntryItemCube.WBSElementExternalID,
I_JournalEntryItemCube.WBSElementInternalID,

@Semantics.text: true
I_JournalEntryItemCube._WBSElementBasicData.WBSDescription as WBSDescription,


      //--[ GENERATED:012:GFBfhxvv7kY4nR8NYqBCGW
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      @ObjectModel.text.association: '_PartnerCompanyCodeText'
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_PartnerCompanyCode'
I_JournalEntryItemCube.PartnerCompanyCode, //PBUKRS
I_JournalEntryItemCube.PartnerCompanyCodeName,


@ObjectModel.foreignKey.association: '_CostCtrActivityType'
@ObjectModel.text.association: '_CostCenterActivityTypeText'
I_JournalEntryItemCube.CostCtrActivityType, //LSTAR    
I_JournalEntryItemCube.CostCtrActivityTypeName,

@ObjectModel.foreignKey.association: '_Order' 
I_JournalEntryItemCube.OrderID,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'PartnerOrder_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'PartnerOrder_2'      
//--[ GENERATED:012:GFBfhxvv7kY4nR8NYqBCGW
@Consumption.valueHelpDefinition: [ 
  { entity:  { name:    'I_InternalOrderStdVH',
               element: 'InternalOrder' }
  }]
@ObjectModel.text.association: '_PartnerOrderText'
// ]--GENERATED
@ObjectModel.foreignKey.association: '_PartnerOrder'
I_JournalEntryItemCube.PartnerOrder,       //PAUFNR
@ObjectModel.foreignKey.association: '_PartnerOrder_2'
I_JournalEntryItemCube.PartnerOrder_2,

      //--[ GENERATED:012:GFBfhxvv7kY4nR8NYqBCGW
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_CostCenterActivityTypeStdVH',
                     element: 'CostCtrActivityType' },
          additionalBinding: [{ localElement: 'ControllingArea',
                                element: 'ControllingArea' }]
        }]
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_PartnerCostCtrActivityType'
//@ObjectModel.text.association: '_CostCenterActivityTypeText'
I_JournalEntryItemCube.PartnerCostCtrActivityType, //PLSTAR
I_JournalEntryItemCube.PartnerCostCtrActivityTypeName,

      //--[ GENERATED:012:GFBfhxvv7kY4nR8NYqBCGW
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ProjectStdVH',
                     element: 'Project' }
        }]
      @ObjectModel.text.association: '_PartnerProjectText'
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_PartnerProject'
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'PartnerProjectExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'PartnerProjectExternalID'
I_JournalEntryItemCube.PartnerProject,             //PPS_PSPID
I_JournalEntryItemCube.PartnerProjectExternalID,
I_JournalEntryItemCube.PartnerProjectInternalID,

cast( I_JournalEntryItemCube._PartnerProjectBasicData.ProjectDescription as fis_partner_project_descript ) as PartnerProjectDescription,

      //--[ GENERATED:012:GFBfhxvv7kY4nR8NYqBCGW
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_WBSElementStdVH',
                     element: 'WBSElement' }
        }]
      @ObjectModel.text.association: '_PartnerWBSElementText'
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_PartnerWBSElement'
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'PartnerWBSElementExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'PartnerWBSElementExternalID'
I_JournalEntryItemCube.PartnerWBSElement,          //PPS_POSID
I_JournalEntryItemCube.PartnerWBSElementExternalID,
I_JournalEntryItemCube.PartnerWBSElementInternalID,

@Semantics.text: true
cast( I_JournalEntryItemCube._PartnerWBSElementBasicData.WBSDescription as fis_partner_wbs_descript ) as PartnerWBSElementDescription,


//////////////////////////////////////////////////////////////////////
//  .INCLUDE  ACDOC_SI_COPA  Unified Journal Entry: CO-PA fields
//////////////////////////////////////////////////////////////////////
//@ObjectModel.foreignKey.association: '_BillingDocumentType' 
//BillingDocumentType,
@ObjectModel.foreignKey.association: '_SalesOrganization' 
I_JournalEntryItemCube.SalesOrganization,          //VKORG
I_JournalEntryItemCube.SalesOrganizationName,

@ObjectModel.foreignKey.association: '_DistributionChannel' 
I_JournalEntryItemCube.DistributionChannel,        //VTWEG
I_JournalEntryItemCube.DistributionChannelName,


@ObjectModel.foreignKey.association: '_Division' 
I_JournalEntryItemCube.OrganizationDivision,      //SPART
I_JournalEntryItemCube.DivisionName,

      //--[ GENERATED:012:GFBfhxvv7kY4nR8NYqBCGW
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_MaterialStdVH',
                     element: 'Material' }
        }]
      @ObjectModel.text.association: '_SoldMaterialText'
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_SoldMaterial'
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'SoldProduct'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'SoldProduct'
I_JournalEntryItemCube.SoldMaterial,
I_JournalEntryItemCube.SoldProduct,

I_JournalEntryItemCube.SoldMaterialName,

      //--[ GENERATED:012:GFBfhxvv7kY4nR8NYqBCGW
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ProductGroupVH',
                     element: 'ProductGroup' }
        }]
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_MaterialGroup'
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'SoldProductGroup'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'SoldProductGroup'
I_JournalEntryItemCube.MaterialGroup,
I_JournalEntryItemCube.SoldProductGroup,

I_JournalEntryItemCube.MaterialGroupName,

@ObjectModel.foreignKey.association: '_CustomerGroup'
I_JournalEntryItemCube.CustomerGroup,              //KDGRP
I_JournalEntryItemCube.CustomerGroupName,

@ObjectModel.foreignKey.association: '_CustomerSupplierCountry'
I_JournalEntryItemCube.CustomerSupplierCountry,    //LAND1
I_JournalEntryItemCube.CustomerSupplierCountryName,

//@ObjectModel.foreignKey.association: '_CustomerSupplierIndustry'
I_JournalEntryItemCube.CustomerSupplierIndustry,   //BRSCH
I_JournalEntryItemCube.CustomerSupplierIndustryName,

@ObjectModel.foreignKey.association: '_SalesDistrict'
I_JournalEntryItemCube.SalesDistrict,              //BZIRK
I_JournalEntryItemCube.SalesDistrictName,


//////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_PS  Unified Journal Entry: Fields for Public Sector
/////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_JVA  Unified Journal Entry: Fields for Joint Venture Accounting
///////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_RE STRU  0 0 Unified Journal Entry: Fields for Real Estate
///////////////////////////////////////////////////////////////////////



I_JournalEntryItemCube._CompanyCode,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_FiscalPeriodForVariant'
@VDM.lifecycle.status:    #DEPRECATED 
@VDM.lifecycle.successor: '_FiscalPeriodForVariant'
I_JournalEntryItemCube._FiscalPeriod,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_FiscalYearPeriodForVariant'
@VDM.lifecycle.status:    #DEPRECATED 
@VDM.lifecycle.successor: '_FiscalYearPeriodForVariant'
I_JournalEntryItemCube._FiscalYearPeriod,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_LedgerFiscalYearForVariant'
@VDM.lifecycle.status:    #DEPRECATED 
@VDM.lifecycle.successor: '_LedgerFiscalYearForVariant'
I_JournalEntryItemCube._LedgerFiscalYear,
I_JournalEntryItemCube._FiscalYearVariant,
I_JournalEntryItemCube._FiscalPeriodForVariant,
I_JournalEntryItemCube._FiscalYearPeriodForVariant,
I_JournalEntryItemCube._LedgerFiscalYearForVariant,
I_JournalEntryItemCube._ControllingArea,
I_JournalEntryItemCube._TransactionCurrency,
I_JournalEntryItemCube._CompanyCodeCurrency,
I_JournalEntryItemCube._GlobalCurrency,
I_JournalEntryItemCube._CostSourceUnit,
I_JournalEntryItemCube._Segment,
@Consumption.filter.businessDate.at: true
I_JournalEntryItemCube._ProfitCenter,
@Consumption.hidden: true
_ProfitCenterText,
@Consumption.filter.businessDate.at: true
_CostCenter,
@Consumption.hidden: true
_CostCenterText,

@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_WBSElementExternalID'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_WBSElementExternalID'
I_JournalEntryItemCube._WBSElement,
I_JournalEntryItemCube._WBSElementExternalID,

@API.element.releaseState: #DEPRECATED
@API.element.successor:   '_ProjectExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_ProjectExternalID'
I_JournalEntryItemCube._Project,
I_JournalEntryItemCube._ProjectExternalID,

I_JournalEntryItemCube._BusinessArea,
I_JournalEntryItemCube._FunctionalArea,
I_JournalEntryItemCube._GLAccountInChartOfAccounts,
//_GLAccountInCompanyCode,
I_JournalEntryItemCube._ChartOfAccounts,
I_JournalEntryItemCube._Plant,
I_JournalEntryItemCube._Ledger,

I_JournalEntryItemCube._Division,

I_JournalEntryItemCube._Customer,
I_JournalEntryItemCube._CustomerGroup,

I_JournalEntryItemCube._CustomerSupplierCountry,
//_CustomerSupplierIndustry,

@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SoldProductGroup_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SoldProductGroup_2'
I_JournalEntryItemCube._MaterialGroup,
I_JournalEntryItemCube._SoldProductGroup_2,  

I_JournalEntryItemCube._InternalOrder,
I_JournalEntryItemCube._Order,

@Consumption.filter.businessDate.at: true
I_JournalEntryItemCube._PartnerCostCenter,
@Consumption.filter.businessDate.at: true
I_JournalEntryItemCube._PartnerProfitCenter,
I_JournalEntryItemCube._PartnerBusinessArea,
I_JournalEntryItemCube._PartnerFunctionalArea,
I_JournalEntryItemCube._PartnerCompanyCode,
I_JournalEntryItemCube._PartnerSegment,
I_JournalEntryItemCube._PartnerCompany,

@Consumption.filter.businessDate.at: true
I_JournalEntryItemCube._CostCtrActivityType,
@Consumption.hidden: true
_CostCenterActivityTypeText,
@Consumption.filter.businessDate.at: true
I_JournalEntryItemCube._PartnerCostCtrActivityType,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_PartnerOrder_2'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_PartnerOrder_2'
I_JournalEntryItemCube._PartnerOrder,
I_JournalEntryItemCube._PartnerOrder_2,

@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_PartnerWBSElementExternalID'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_PartnerWBSElementExternalID'
I_JournalEntryItemCube._PartnerWBSElement,
I_JournalEntryItemCube._PartnerWBSElementExternalID,

@API.element.releaseState: #DEPRECATED
@API.element.successor:   '_PartnerProjectExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_PartnerProjectExternalID'
I_JournalEntryItemCube._PartnerProject,
I_JournalEntryItemCube._PartnerProjectExternalID,

I_JournalEntryItemCube._SalesOrganization,
I_JournalEntryItemCube._DistributionChannel,
I_JournalEntryItemCube._SalesDistrict,

@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SoldProduct'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SoldProduct'
I_JournalEntryItemCube._SoldMaterial,
I_JournalEntryItemCube._SoldProduct,

      //--[ GENERATED:012:GFBfhxvv7kY4nR8NYqBCGW
      @Consumption.hidden: true
      _BusinessAreaText,
      @Consumption.hidden: true
      _PartnerBusinessAreaText,
      @Consumption.hidden: true
      _ChartOfAccountsText,
      @Consumption.hidden: true
      _PartnerCompanyCodeText,
      @Consumption.hidden: true
      _ControllingAreaText,
      @Consumption.hidden: true
      _CustomerText,
      @Consumption.hidden: true
      _GLAcctInChartOfAccountsText,
      @Consumption.hidden: true     
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_PartnerOrderText_2'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_PartnerOrderText_2'
      _PartnerOrderText,
      @Consumption.hidden: true
      _PartnerOrderText_2,
      @Consumption.hidden: true
      _LedgerText,
      @Consumption.hidden: true
      _SoldMaterialText,
      @Consumption.hidden: true
      _PartnerProjectText,
      @Consumption.hidden: true
      _ProjectText,
      @Consumption.hidden: true
      _PartnerSegmentText,
      @Consumption.hidden: true
      _SegmentText,
      @Consumption.hidden: true
      _PartnerWBSElementText,
      @Consumption.hidden: true
      _WBSElementText
      // ]--GENERATED


//_Extension  Extensions must be local
}
```
