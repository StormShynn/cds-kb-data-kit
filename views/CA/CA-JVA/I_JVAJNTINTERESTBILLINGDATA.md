---
name: I_JVAJNTINTERESTBILLINGDATA
description: Jvajntinterestbillingdata
app_component: CA-JVA
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-JVA
  - interface-view
  - billing
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JVAJNTINTERESTBILLINGDATA

**Jvajntinterestbillingdata**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |
| `FiscalYear` | ✓ | |  |  |
| `AccountingDocument` | ✓ | |  |  |
| `LedgerGLLineItem` | ✓ | |  |  |
| `Ledger` | ✓ | |  | `SourceLedger` |
| `PostingDate` |  | |  |  |
| `FiscalPeriod` |  | |  |  |
| `LedgerFiscalYear` |  | |  |  |
| `FiscalYearVariant` |  | |  |  |
| `JointVenture` |  | |  |  |
| `JointVentureName` |  | |  | `coalesce( _JointVentureDesc[1:Language = $session.system_language].JointVentureName, JVItem._JointVentureDesc[1:Language = $session.system_language].JointVentureName )` |
| `JointVentureEquityGroup` |  | |  |  |
| `JointVentureCostRecoveryCode` |  | |  |  |
| `JointVenturePartner` |  | |  |  |
| `TransactionCurrency` |  | |  |  |
| `AmountInTransactionCurrency` |  | |  | `} JVItem.AmountInTransactionCurrency` |
| `CompanyCodeCurrency` |  | |  |  |
| `AmountInCompanyCodeCurrency` |  | |  | `} JVItem.AmountInCompanyCodeCurrency` |
| `GlobalCurrency` |  | |  |  |
| `AmountInGlobalCurrency` |  | |  | `} JVItem.AmountInGlobalCurrency` |
| `FunctionalCurrency` |  | |  |  |
| `AmountInFunctionalCurrency` |  | |  | `} JVItem.AmountInFunctionalCurrency` |
| `FreeDefinedCurrency1` |  | |  |  |
| `AmountInFreeDefinedCurrency1` |  | |  | `} JVItem.AmountInFreeDefinedCurrency1` |
| `FreeDefinedCurrency2` |  | |  |  |
| `AmountInFreeDefinedCurrency2` |  | |  | `} JVItem.AmountInFreeDefinedCurrency2` |
| `FreeDefinedCurrency3` |  | |  |  |
| `AmountInFreeDefinedCurrency3` |  | |  | `} JVItem.AmountInFreeDefinedCurrency3` |
| `FreeDefinedCurrency4` |  | |  |  |
| `AmountInFreeDefinedCurrency4` |  | |  | `} JVItem. AmountInFreeDefinedCurrency4` |
| `FreeDefinedCurrency5` |  | |  |  |
| `AmountInFreeDefinedCurrency5` |  | |  | `} JVItem.AmountInFreeDefinedCurrency5` |
| `FreeDefinedCurrency6` |  | |  |  |
| `AmountInFreeDefinedCurrency6` |  | |  | `} JVItem.AmountInFreeDefinedCurrency6` |
| `FreeDefinedCurrency7` |  | |  |  |
| `AmountInFreeDefinedCurrency7` |  | |  | `} JVItem.AmountInFreeDefinedCurrency7` |
| `FreeDefinedCurrency8` |  | |  |  |
| `AmountInFreeDefinedCurrency8` |  | |  | `} JVItem.AmountInFreeDefinedCurrency8` |
| `JVAFundingCurrency1` |  | |  | `cast( JVItem.JVAFundingCurrency as jv_fundcur preserving type )` |
| `AmountInJVAFundingCurrency` |  | |  | `} cast( JVItem.AmountInJVAFundingCurrency as jv_fundamt preserving type )` |
| `JVAExpenditureType` |  | |  |  |
| `JVAProjIsAuthzdForCptlExpndtr` |  | |  |  |
| `JntVntrAuthznForExpndtrObject` |  | |  | `cast( _WBSElementBasicData.WBSElementExternalID as jv_afenum_cds )` |
| `CostCenter` |  | |  |  |
| `CostCenterName` |  | | `_CostCenterText` | `CostCenterName` |
| `ControllingArea` |  | |  |  |
| `ChartOfAccounts` |  | |  |  |
| `WBSElementExternalID` |  | |  |  |
| `WBSDescription` |  | |  |  |
| `WBSElementInternalID` |  | |  |  |
| `OrderID` |  | |  |  |
| `SuperiorOrder` |  | |  |  |
| `AssetTransactionType` |  | |  |  |
| `GLAccount` |  | |  |  |
| `JntIntrstBillgClass` |  | |  |  |
| `JntIntrstBillgSubClass` |  | |  |  |
| `JntIntrstBillgSubClass2` |  | |  |  |
| `JntVntrCostTypeText` |  | |  |  |
| `JntIntrstBillgCostObjectType` |  | |  |  |
| `JntVntrSuspenseStatusText` |  | |  | `cast( case when BillIndex.JntIntrstBillgClass is not initial and BillIndex.JntIntrstBillgSubClass is not initial and BillIndex.JntIntrstBillgSubClass2 is not initial then concat( concat( BillIndex.JntIntrstBillgClass, '/' ), concat( concat( BillIndex.JntIntrstBillgSubClass,'/' ), BillIndex.JntIntrstBillgSubClass2 ) ) when BillIndex.JntIntrstBillgClass is not initial and BillIndex.JntIntrstBillgSubClass is not initial then concat( concat( BillIndex.JntIntrstBillgClass, '/' ), BillIndex.JntIntrstBillgSubClass ) when BillIndex.JntIntrstBillgClass is not initial then BillIndex.JntIntrstBillgClass else ' ' end as abap.char(33) )` |
| `_FiscalPeriod` |  | |  | `_FiscalPeriodCompanyCode` |
| `_WBSElementBasicDataText` |  | |  | `_WBSElementBasicData` |
| `_JournalEntry` | | ✓ | | |
| `_CostCenter` | | ✓ | | |
| `_CostCenterText` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_JournalEntry` | `I_JournalEntry` | [1..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_CostCenterText` | `I_CostCenterText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVAJIBD'
@AbapCatalog.compiler.compareFilter: true
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData.blocking: #REQUIRED }
@VDM.viewType: #COMPOSITE
@ObjectModel:{
  usageType.serviceQuality: #D,
  usageType.sizeCategory: #XXL,
  usageType.dataClass: #MIXED,
  supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #UI_PROVIDER_PROJECTION_SOURCE ],
  modelingPattern: #NONE
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status : #NOT_ALLOWED
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'JVA Joint Interest Billing Report'

define view I_JVAJntInterestBillingData

  as select distinct from  I_JVALineItemCube           as JVItem

    left outer to one join I_JVABillingIndexYearPeriod as BillIndex on  BillIndex.CompanyCode                  =  JVItem.CompanyCode
                                                                    and BillIndex.JointVenture                 =  JVItem.JointVenture
                                                                    and BillIndex.JointVentureEquityGroup      =  JVItem.JointVentureEquityGroup
                                                                    and BillIndex.JointVenturePartner          =  JVItem.JointVenturePartner
                                                                    and BillIndex.JointVentureCostRecoveryCode =  JVItem.JointVentureCostRecoveryCode
                                                                    and BillIndex.GLAccount                    =  JVItem.GLAccount
                                                                    and BillIndex.CostCenter                   =  JVItem.CostCenter
                                                                    and BillIndex.OrderID                      =  JVItem.OrderID
                                                                    and BillIndex.WBSElementInternalID         =  JVItem.WBSElementInternalID
                                                                    and BillIndex.ProfitCenter                 =  JVItem.ProfitCenter
                                                                    and BillIndex.MasterFixedAsset             =  JVItem.MasterFixedAsset
                                                                    and BillIndex.FixedAsset                   =  JVItem.FixedAsset
                                                                    and BillIndex.AssetTransactionType         =  JVItem.AssetTransactionType
                                                                    and BillIndex.FiscalYearPeriod             <= JVItem.FiscalYearPeriod
                                                                    and BillIndex.NextFiscalYearPeriod         >  JVItem.FiscalYearPeriod

  association [1..1] to I_JournalEntry   as _JournalEntry   on  _JournalEntry.CompanyCode        = $projection.CompanyCode
                                                            and _JournalEntry.FiscalYear         = $projection.FiscalYear
                                                            and _JournalEntry.AccountingDocument = $projection.AccountingDocument

  association [0..*] to I_CostCenter     as _CostCenter     on  _CostCenter.ControllingArea = $projection.ControllingArea
                                                            and _CostCenter.CostCenter      = $projection.CostCenter
                                                            and _CostCenter.CompanyCode     = $projection.CompanyCode

  association [0..*] to I_CostCenterText as _CostCenterText on  _CostCenterText.ControllingArea = $projection.ControllingArea
                                                            and _CostCenterText.CostCenter      = $projection.CostCenter
                                                            and _CostCenterText.Language        = $session.system_language

{
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @ObjectModel.text.element: ['CompanyCodeName']
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_JointVentureCompanyCodeVH',
                           element: 'CompanyCode' }
              }]
  key JVItem.CompanyCode,

      @ObjectModel.foreignKey.association: '_FiscalYear'
  key JVItem.FiscalYear,

      @ObjectModel.foreignKey.association: '_JournalEntry'
  key JVItem.AccountingDocument                                                                    as AccountingDocument,

  key JVItem.LedgerGLLineItem,

      //@ObjectModel.foreignKey.association: '_Ledger'
  key JVItem.SourceLedger                                                                          as Ledger,

      JVItem.PostingDate,

      @ObjectModel.foreignKey.association: '_FiscalPeriod'
      @Semantics.fiscal.period: true
      JVItem.FiscalPeriod,

      @ObjectModel.foreignKey.association: '_LedgerFiscalYearForVariant'
      JVItem.LedgerFiscalYear,
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      JVItem.FiscalYearVariant,

      @Semantics.text: true
      JVItem._CompanyCode[ Language = $session.system_language ].CompanyCodeName,

      @ObjectModel.foreignKey.association: '_JointVentureMasterFld'
      @ObjectModel: { text.association: '_JointVentureDesc' }
      @ObjectModel.text.element: ['JointVentureName']
      @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JntVntrValueHelp',
                           element: 'JointVenture' }
              }]
      JVItem.JointVenture,

      @EndUserText.label: 'Joint Venture Name '
      coalesce( _JointVentureDesc[1:Language = $session.system_language].JointVentureName,
                JVItem._JointVentureDesc[1:Language = $session.system_language].JointVentureName ) as JointVentureName,


      @ObjectModel.foreignKey.association: '_JntVntrEquityGrp'
      @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JntVntrEquityGroupValueHelp',
                           element: 'JntOpgAgrmtEquityGrp' }
              }]
      @ObjectModel.text.element: [ 'JntOpgAgrmtEquityGrpText' ]
      JVItem.JointVentureEquityGroup,

      @ObjectModel.foreignKey.association: '_JntVntrRecoveryInd'
      JVItem.JointVentureCostRecoveryCode,

      @ObjectModel.foreignKey.association: '_JntVntrBusinessPartner'
       @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JointVenturePartnerValueHelp',
                           element: 'JointVenturePartner' }
              }]      
       JVItem.JointVenturePartner,


      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      JVItem.TransactionCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      JVItem.AmountInTransactionCurrency,

      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      JVItem.CompanyCodeCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      JVItem.AmountInCompanyCodeCurrency,


      @ObjectModel.foreignKey.association: '_GlobalCurrency'
      @Semantics.currencyCode:true
      JVItem.GlobalCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      JVItem.AmountInGlobalCurrency,


      @ObjectModel.foreignKey.association: '_FunctionalCurrency'
      @Semantics.currencyCode:true
      JVItem.FunctionalCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      JVItem.AmountInFunctionalCurrency,


      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency1'
      @Semantics.currencyCode:true
      JVItem.FreeDefinedCurrency1,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      JVItem.AmountInFreeDefinedCurrency1,


      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency2'
      @Semantics.currencyCode:true
      JVItem.FreeDefinedCurrency2,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      JVItem.AmountInFreeDefinedCurrency2,


      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency3'
      @Semantics.currencyCode:true
      JVItem.FreeDefinedCurrency3,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      JVItem.AmountInFreeDefinedCurrency3,


      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency4'
      @Semantics.currencyCode:true
      JVItem.FreeDefinedCurrency4,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      JVItem. AmountInFreeDefinedCurrency4,


      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency5'
      @Semantics.currencyCode:true
      JVItem.FreeDefinedCurrency5,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      JVItem.AmountInFreeDefinedCurrency5,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency6'
      @Semantics.currencyCode:true
      JVItem.FreeDefinedCurrency6,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      JVItem.AmountInFreeDefinedCurrency6,


      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency7'
      @Semantics.currencyCode:true
      JVItem.FreeDefinedCurrency7,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      JVItem.AmountInFreeDefinedCurrency7,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency8'
      @Semantics.currencyCode:true
      JVItem.FreeDefinedCurrency8,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      JVItem.AmountInFreeDefinedCurrency8,


      @EndUserText.label: 'JVA Funding Currency'
      cast( JVItem.JVAFundingCurrency as jv_fundcur preserving type )                              as JVAFundingCurrency1,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'JVAFundingCurrency1'} }
      @EndUserText.label: 'Amount in JVA Funding Currency'
      cast( JVItem.AmountInJVAFundingCurrency as jv_fundamt preserving type )                      as AmountInJVAFundingCurrency,


      BillIndex.JVAExpenditureType,
      BillIndex.JVAProjIsAuthzdForCptlExpndtr,

      cast( _WBSElementBasicData.WBSElementExternalID as jv_afenum_cds )                           as JntVntrAuthznForExpndtrObject,
      @Consumption.valueHelpDefinition: [
      { entity:  { name:    'I_CostCenterStdVH',
               element: 'CostCenter' }
      }]
      @ObjectModel.foreignKey.association: '_CostCenter'
      @ObjectModel.text.element: ['CostCenterName']
      @ObjectModel.text.association: '_CostCenterText'
      JVItem.CostCenter,

      @Semantics.text: true
      _CostCenterText.CostCenterName,

      @ObjectModel.foreignKey.association: '_ControllingArea'
      JVItem.ControllingArea,

      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      JVItem.ChartOfAccounts,

      @ObjectModel.foreignKey.association: '_WBSElementExternalID'
      @ObjectModel.text.element: ['WBSDescription']
      JVItem.WBSElementExternalID,

      @Semantics.text: true
      JVItem._WBSElementBasicData.WBSDescription,

      @ObjectModel.foreignKey.association: '_WBSElementInternalID'
      JVItem.WBSElementInternalID,

      @ObjectModel.foreignKey.association: '_Order'
      JVItem.OrderID,

      JVItem.SuperiorOrder,

      JVItem.AssetTransactionType,

      @Consumption.valueHelpDefinition: [
      { entity:  { name:    'I_GLAccountStdVH',
               element: 'GLAccount' }
      }]
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      @ObjectModel.text.association: '_GLAccountTxt'
      @ObjectModel.text.element: ['GLAccountName']
      JVItem.GLAccount,

      JVItem._GLAccountTxt[ Language = $session.system_language ].GLAccountName,

      BillIndex.JntIntrstBillgClass,
      BillIndex.JntIntrstBillgSubClass,
      BillIndex.JntIntrstBillgSubClass2,
      BillIndex.JntVntrCostTypeText,
      BillIndex.JntIntrstBillgCostObjectType,

      @EndUserText.label: 'Joint venture suspense status text'
      cast( case when BillIndex.JntIntrstBillgClass     is not initial and
                      BillIndex.JntIntrstBillgSubClass  is not initial and
                      BillIndex.JntIntrstBillgSubClass2 is not initial then
                   concat( concat( BillIndex.JntIntrstBillgClass, '/' ),
                                   concat( concat( BillIndex.JntIntrstBillgSubClass,'/' ),
                                                   BillIndex.JntIntrstBillgSubClass2 ) )
                 when BillIndex.JntIntrstBillgClass     is not initial and
                      BillIndex.JntIntrstBillgSubClass  is not initial then
                   concat( concat( BillIndex.JntIntrstBillgClass, '/' ),
                                   BillIndex.JntIntrstBillgSubClass )
                 when BillIndex.JntIntrstBillgClass is not initial then
                   BillIndex.JntIntrstBillgClass
           else ' '
      end as abap.char(33) )                                                                       as JntVntrSuspenseStatusText,

      JVItem._CompanyCode,
      JVItem._CompanyCodeText,
      JVItem._ControllingArea,
      JVItem._ControllingAreaText,
      JVItem._ChartOfAccounts,
      JVItem._FiscalYear,
      JVItem._FiscalPeriodCompanyCode,
      JVItem._FiscalPeriodCompanyCode                                                              as _FiscalPeriod,
      JVItem._LedgerFiscalYearForVariant,
      JVItem._FiscalYearVariant,
      _JournalEntry,
      _CostCenter,
      _CostCenterText,
      JVItem._JointVentureDesc,
      JVItem._Order,
      JVItem._JointVentureMasterFld,
      JVItem._GLAccountTxt,
      JVItem._GLAccountInChartOfAccounts,
      JVItem._JntVntrEquityGrp,
      JVItem._JntVntrRecoveryInd,
      JVItem._JntVntrBusinessPartner,
      JVItem._TransactionCurrency,
      JVItem._CompanyCodeCurrency,
      JVItem._WBSElementBasicData,
      JVItem._WBSElementBasicData                                                                  as _WBSElementBasicDataText,
      JVItem._WBSElementInternalID,
      JVItem._WBSElementExternalID,
      JVItem._WBSElementExternalIDText,
      JVItem._WBSElementInternalIDText,
      JVItem._GlobalCurrency,
      JVItem._FunctionalCurrency,
      JVItem._FreeDefinedCurrency1,
      JVItem._FreeDefinedCurrency2,
      JVItem._FreeDefinedCurrency3,
      JVItem._FreeDefinedCurrency4,
      JVItem._FreeDefinedCurrency5,
      JVItem._FreeDefinedCurrency6,
      JVItem._FreeDefinedCurrency7,
      JVItem._FreeDefinedCurrency8,
      @UI.hidden: true
      JVItem._JntVntrEquityGrp._JntVntrEquityGrpText[1:Language = $session.system_language].JntOpgAgrmtEquityGrpText 
}

where
  JVItem.JntVntrRcvryCodeIsRlvtToBillg = 'X'
```
