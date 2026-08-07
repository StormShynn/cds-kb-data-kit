---
name: I_ARAGINGGRIDGENLEDGERCUBE
description: "This CDS view provides you with an overview of the overdue receivables and receivables that will become due in the future based on the key date you enter. You can use the CDS view for many different reports, such as creating an aggregated view of the receivables per overdue interval and future due interval for an account, or a drill down to individual open receivable items. This CDS view provides the data to answer the following business questions, for example: How high are the overall total receivables? Which customers have total receivables? What are the open receivable items for a customer? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views. This CDS view can be used in the Custom CDS Views key user app. Recommendation If you use this CDS view to build custom CDS views, only add master data fields."
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARAGINGGRIDGENLEDGERCUBE')/$value
semantic_en: "This CDS view provides you with an overview of the overdue receivables and receivables that will become due in the future based on the key date you enter. You can use the CDS view for many different reports, such as creating an aggregated view of the receivables per overdue interval and future due interval for an account, or a drill down to individual open receivable items. This CDS view provides the data to answer the following business questions, for example: How high are the overall total receivables? Which customers have total receivables? What are the open receivable items for a customer? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views. This CDS view can be used in the Custom CDS Views key user app. Recommendation If you use this CDS view to build custom CDS views, only add master data fields."
semantic_vi: "I_ARAGINGGRIDGENLEDGERCUBE — CDS view tổng hợp dựa trên P_ARAgingIntervalAssignment."
keywords:
  - "araginggridgenledgercube"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
  - "ledger"
  - "line"
  - "item"
tags:
  - FI
  - account
  - bo:businesspartner
  - component:FI-AR-IS-2CL
  - customer
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - interface-view
  - lob:finance
  - master-data
---
# I_ARAGINGGRIDGENLEDGERCUBE

**This CDS view provides you with an overview of the overdue receivables and receivables that will become due in the future based on the key date you enter. You can use the CDS view for many different reports, such as creating an aggregated view of the receivables per overdue interval and future due interval for an account, or a drill down to individual open receivable items. This CDS view provides the data to answer the following business questions, for example: How high are the overall total receivables? Which customers have total receivables? What are the open receivable items for a customer? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views. This CDS view can be used in the Custom CDS Views key user app. Recommendation If you use this CDS view to build custom CDS views, only add master data fields.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARAGINGGRIDGENLEDGERCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `BillingDocument` |  | |  |  | `CHAR(10)` | Billing Document |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Reference |
| `CustomerClassification` |  | |  |  | `CHAR(2)` | Customer Classification |
| `CustomerAccountNote` |  | | `_CustomerCompany` | `CustomerAccountNote` | `CHAR(30)` | Memo |
| `CustomerCorporateGroup` |  | |  | `cast( CustomerCorporateGroup as far_konzs preserving type )` | `CHAR(10)` | Customer Corporate Group |
| `Reference1IDByBusinessPartner` |  | |  |  | `CHAR(12)` | ID of Reference 1 by Business Partner |
| `Reference2IDByBusinessPartner` |  | |  |  | `CHAR(12)` | ID of Reference 2 by Business Partner |
| `Reference3IDByBusinessPartner` |  | |  |  | `CHAR(20)` | ID of Reference 3 by Business Partner |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ChartOfAccounts` |  | |  | `cast( ChartOfAccounts as fis_ktopl preserving type )` | `CHAR(4)` | Chart of Accounts |
| `CustomerCountry` |  | |  | `cast( CustomerCountry as fis_customer_country preserving type )` | `CHAR(3)` | Customer Country/Region |
| `CustomerRegion` |  | |  | `cast( CustomerRegion as far_regio preserving type )` | `CHAR(3)` | Region (Customer) |
| `ReconciliationAccount` |  | |  | `cast( _CustomerCompany.ReconciliationAccount as farp_akont preserving type )` | `CHAR(10)` | Reconciliation Account in General Ledger |
| `CustomerAccountGroup` |  | |  | `cast( CustomerAccountGroup as farp_ktokd preserving type )` | `CHAR(4)` | Customer Account Group |
| `AccountingClerk` |  | |  | `cast( _CustomerCompany.AccountingClerk as farp_busab preserving type )` | `CHAR(2)` | Accounting Clerk |
| `CompanyCodeCountry` |  | |  | `cast( CompanyCodeCountry as fis_company_code_country preserving type )` | `CHAR(3)` | Company Code Country/Region |
| `CustomerBasicAuthorizationGrp` |  | |  | `cast( CustomerBasicAuthorizationGrp as fis_customer_basic_auth_grp preserving type )` | `CHAR(4)` | Customer Basic Authorization Group |
| `CustomerFinsAuthorizationGrp` |  | |  | `cast( _CustomerCompany.AuthorizationGroup as fis_customer_fins_auth_grp preserving type )` | `CHAR(4)` | Customer Financials Authorization Group |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `OverdueIntvl7AmtInCoCodeCrcy` |  | |  | `cast( OverdueIntvl7AmtInCoCodeCrcy as far_overdue_intvl7_amt_inccrcy preserving type )` | `CURR(23)` | Amount in 7th Overdue Period (Company Currency) |
| `OverdueIntvl6AmtInCoCodeCrcy` |  | |  | `cast( OverdueIntvl6AmtInCoCodeCrcy as far_overdue_intvl6_amt_inccrcy preserving type )` | `CURR(23)` | Amount in 6th Overdue Period (Company Currency) |
| `OverdueIntvl5AmtInCoCodeCrcy` |  | |  | `cast( OverdueIntvl5AmtInCoCodeCrcy as far_overdue_intvl5_amt_inccrcy preserving type )` | `CURR(23)` | Amount in 5th Overdue Period (Company Currency) |
| `OverdueIntvl4AmtInCoCodeCrcy` |  | |  | `cast( OverdueIntvl4AmtInCoCodeCrcy as far_overdue_intvl4_amt_inccrcy preserving type )` | `CURR(23)` | Amount in 4th Overdue Period (Company Currency) |
| `OverdueIntvl3AmtInCoCodeCrcy` |  | |  | `cast( OverdueIntvl3AmtInCoCodeCrcy as far_overdue_intvl3_amt_inccrcy preserving type )` | `CURR(23)` | Amount in 3rd Overdue Period (Company Currency) |
| `OverdueIntvl2AmtInCoCodeCrcy` |  | |  | `cast( OverdueIntvl2AmtInCoCodeCrcy as far_overdue_intvl2_amt_inccrcy preserving type )` | `CURR(23)` | Amount in 2nd Overdue Period (Company Currency) |
| `OverdueIntvl1AmtInCoCodeCrcy` |  | |  | `cast( OverdueIntvl1AmtInCoCodeCrcy as far_overdue_intvl1_amt_inccrcy preserving type )` | `CURR(23)` | Amount in 1st Overdue Period (Company Currency) |
| `FutureDueIntvl4AmtInCoCodeCrcy` |  | |  | `cast( FutureDueIntvl4AmtInCoCodeCrcy as far_futrdue_intvl4_amt_inccrcy preserving type )` | `CURR(23)` | Amount in 4th Future Due Period (Company Currency) |
| `FutureDueIntvl3AmtInCoCodeCrcy` |  | |  | `cast( FutureDueIntvl3AmtInCoCodeCrcy as far_futrdue_intvl3_amt_inccrcy preserving type )` | `CURR(23)` | Amount in 3rd Future Due Period (Company Currency) |
| `FutureDueIntvl2AmtInCoCodeCrcy` |  | |  | `cast( FutureDueIntvl2AmtInCoCodeCrcy as far_futrdue_intvl2_amt_inccrcy preserving type )` | `CURR(23)` | Amount in 2nd Future Due Period (Company Currency) |
| `FutureDueIntvl1AmtInCoCodeCrcy` |  | |  | `cast( FutureDueIntvl1AmtInCoCodeCrcy as far_futrdue_intvl1_amt_inccrcy preserving type )` | `CURR(23)` | Amount in 1st Future Due Period (Company Currency) |
| `DueAtKeyDateAmtInCoCodeCrcy` |  | |  | `cast( DueAtKeyDateAmtInCoCodeCrcy as farp_due_at_keydte_amt_cccrcy preserving type )` | `CURR(23)` | Amount in Company Currency due at Key Date |
| `OverdueAmtInCoCodeCrcy` |  | |  | `cast( OverdueAmtInCoCodeCrcy as farp_overdue_amt_cocode_crcy preserving type )` | `CURR(23)` | Overdue Amount in Company Currency |
| `NotOverdueAmtInCoCodeCrcy` |  | |  | `cast( NotOverdueAmtInCoCodeCrcy as farp_not_overdue_amt_cccrcy preserving type )` | `CURR(23)` | Not Overdue Amount in Company Currency |
| `FutureDueAmtInCoCodeCrcy` |  | |  | `cast( FutureDueAmtInCoCodeCrcy as farp_future_amt_cocode_crcy preserving type )` | `CURR(23)` | Future Due Amount in Company Currency |
| `AmountInCompanyCodeCurrency` |  | |  | `cast( AmountInCompanyCodeCurrency as farp_total_amount_cocode_crcy preserving type )` | `CURR(23)` | Total Open Receivables Amount in Company Currency |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `NetDueDate` |  | |  | `cast( NetDueDate as farp_netdt preserving type )` | `DATS(8)` | Due Date for Net Payment |
| `_FiscalYear` | | ✓ | | | | |
| `_AccountingClerk` | | ✓ | | | | |
| `_ReconciliationAccount` | | ✓ | | | | |
| `_CustomerAccountGroup` | | ✓ | | | | |
| `_PaymentMethod` | | ✓ | | | | |
| `_CustomerCountry` | | ✓ | | | | |
| `_CustomerRegion` | | ✓ | | | | |
| `_CustomerCompany` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |
| `_SpecialGLCode` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_CustomerClassification` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_CompanyCodeCountry` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_AccountingClerk` | `I_AccountingClerk` | [0..1] |
| `_ReconciliationAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_CustomerAccountGroup` | `I_CustomerAccountGroup` | [0..1] |
| `_PaymentMethod` | `I_PaymentMethod` | [0..1] |
| `_CustomerCountry` | `I_Country` | [0..1] |
| `_CustomerRegion` | `I_Region` | [0..1] |
| `_CustomerCompany` | `I_CustomerCompany` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARAGINGGRIDGENLEDGERCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARAGINGGRIDGENLEDGERCUBE')/$value)*

```abap
@Analytics:      { dataCategory:                #CUBE,
                   dataExtraction.enabled:      false,
                   internalName:                #LOCAL }                 

@Metadata:       { ignorePropagatedAnnotations: true,
                   allowExtensions:             true }
             
@ObjectModel:    { usageType.serviceQuality:    #D,
                   usageType.sizeCategory:      #XXL,
                   usageType.dataClass:         #MIXED,
                   supportedCapabilities:       [ #ANALYTICAL_PROVIDER, #CDS_MODELING_DATA_SOURCE ],
                   modelingPattern:             #ANALYTICAL_CUBE }

@AccessControl:  { authorizationCheck:          #MANDATORY,
                   personalData.blocking:       #REQUIRED }
                   
@OData:          { publish:                     false }

@AbapCatalog:    { viewEnhancementCategory:    [#PROJECTION_LIST] }

@EndUserText:    { label:                       'G/L Perspective of AR Aging Grid - Cube' }

@VDM:            { viewType:                    #COMPOSITE, 
                   lifecycle.contract.type:     #PUBLIC_LOCAL_API }
                   
@Search:         { searchable:                  false }

@Consumption:    { dbHints:                     ['NO_SUBPLAN_SHARING', 'JOIN_THRU_UNION', 'USE_HEX_PLAN'] }

define view entity I_ARAgingGridGenLedgerCube
  with parameters
  
    P_KeyDate                      : vdm_v_key_date,
    P_OverdueInterval1Days         : far_overdue_interval1,
    P_OverdueInterval2Days         : far_overdue_interval2,
    P_OverdueInterval3Days         : far_overdue_interval3,
    P_OverdueInterval4Days         : far_overdue_interval4,
    P_OverdueInterval5Days         : far_overdue_interval5,
    P_OverdueInterval6Days         : far_overdue_interval6,
    P_FutureDueInterval1Days       : far_future_due_interval1,
    P_FutureDueInterval2Days       : far_future_due_interval2,
    P_FutureDueInterval3Days       : far_future_due_interval3,
    P_LeadingLedger                : fins_ledger
        
  as select from P_ARAgingIntervalAssignment(P_KeyDate:                $parameters.P_KeyDate,
                                             P_LeadingLedger:          $parameters.P_LeadingLedger,
                                             P_OverdueInterval1Days:   $parameters.P_OverdueInterval1Days,
                                             P_OverdueInterval2Days:   $parameters.P_OverdueInterval2Days,
                                             P_OverdueInterval3Days:   $parameters.P_OverdueInterval3Days,
                                             P_OverdueInterval4Days:   $parameters.P_OverdueInterval4Days,
                                             P_OverdueInterval5Days:   $parameters.P_OverdueInterval5Days,
                                             P_OverdueInterval6Days:   $parameters.P_OverdueInterval6Days,
                                             P_FutureDueInterval1Days: $parameters.P_FutureDueInterval1Days,
                                             P_FutureDueInterval2Days: $parameters.P_FutureDueInterval2Days,
                                             P_FutureDueInterval3Days: $parameters.P_FutureDueInterval3Days)
                                                 
    association [0..1] to I_FiscalYearForCompanyCode   as _FiscalYear                 on  $projection.FiscalYear  = _FiscalYear.FiscalYear
                                                                                      and $projection.CompanyCode = _FiscalYear.CompanyCode
                                                                                      
    association [0..1] to I_AccountingClerk            as _AccountingClerk            on  _AccountingClerk.CompanyCode     = $projection.CompanyCode
                                                                                      and _AccountingClerk.AccountingClerk = $projection.AccountingClerk                                                                                 
    
    association [0..1] to I_GLAccountInChartOfAccounts as _ReconciliationAccount      on  _ReconciliationAccount.ChartOfAccounts = $projection.ChartOfAccounts
                                                                                      and _ReconciliationAccount.GLAccount       = $projection.ReconciliationAccount                                                                                  
                                                                                      
    association [0..1] to I_CustomerAccountGroup       as _CustomerAccountGroup       on  _CustomerAccountGroup.CustomerAccountGroup = $projection.CustomerAccountGroup
                                                                                      
    association [0..1] to I_PaymentMethod              as _PaymentMethod              on  _PaymentMethod.PaymentMethod = $projection.PaymentMethod
                                                                                      and _PaymentMethod.Country       = $projection.CompanyCodeCountry
                                                                                      
    association [0..1] to I_Country                    as _CustomerCountry            on  _CustomerCountry.Country = $projection.CustomerCountry
  
    association [0..1] to I_Region                     as _CustomerRegion             on  _CustomerRegion.Region  = $projection.CustomerRegion
                                                                                      and _CustomerRegion.Country = $projection.CustomerCountry
                                                                                      
    association [0..1] to I_CustomerCompany            as _CustomerCompany            on  _CustomerCompany.CompanyCode = $projection.CompanyCode
                                                                                      and _CustomerCompany.Customer    = $projection.Customer                                                                                    
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode,
      @ObjectModel.foreignKey.association: '_FiscalYear'
  key FiscalYear,
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key AccountingDocument,
  key LedgerGLLineItem,

      AccountingDocumentItem,

      @ObjectModel.foreignKey.association: '_Customer'
      Customer,
      
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      GLAccount,
      
      @ObjectModel.foreignKey.association: '_SpecialGLCode'
      SpecialGLCode,
      
//    @ObjectModel.foreignKey.association: '_CurrentProfitCenter' // Is not supported due to $Session.system_date in join condition
//    @ObjectModel.foreignKey.association: '_ProfitCenter' // Issue with SADL, see comment in I_ARJrnlEntrItmAgingGrid 
      ProfitCenter,
      
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      FunctionalArea,

      @ObjectModel.foreignKey.association: '_BusinessArea'
      BusinessArea,
      
      @ObjectModel.foreignKey.association: '_Segment'
      Segment,
      
      BillingDocument,
      AssignmentReference,
                  
      @ObjectModel.foreignKey.association: '_CustomerClassification'
      CustomerClassification,                                                
      
      _CustomerCompany.CustomerAccountNote,                                            
      cast( CustomerCorporateGroup as far_konzs preserving type )                                     as CustomerCorporateGroup,                                                
      
      Reference1IDByBusinessPartner,
      Reference2IDByBusinessPartner,
      Reference3IDByBusinessPartner,
           
      @ObjectModel.foreignKey.association: '_PaymentMethod'
      PaymentMethod,
      
      //needed in association _specialglcode, due to this has to be part of selection list
      @ObjectModel.foreignKey.association: '_FinancialAccountType' 
      FinancialAccountType,
      
      //needed in association _currentprofitcenter, due to this has to be part of selection list
      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,
      
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      cast( ChartOfAccounts as fis_ktopl preserving type )                                            as ChartOfAccounts,
      
      @ObjectModel.foreignKey.association: '_CustomerCountry' 
      cast( CustomerCountry as fis_customer_country preserving type )                                 as CustomerCountry,
      
      @ObjectModel.foreignKey.association: '_CustomerRegion'
      cast( CustomerRegion as far_regio preserving type )                                             as CustomerRegion,
      
      @ObjectModel.foreignKey.association: '_ReconciliationAccount'
      cast( _CustomerCompany.ReconciliationAccount as farp_akont preserving type )                    as ReconciliationAccount,
      
      @ObjectModel.foreignKey.association: '_CustomerAccountGroup'
      cast( CustomerAccountGroup as farp_ktokd preserving type )                                      as CustomerAccountGroup,
      
      @ObjectModel.foreignKey.association: '_AccountingClerk'
      cast( _CustomerCompany.AccountingClerk as farp_busab preserving type )                          as AccountingClerk,
      
      //needed in association _paymentmethod, due to this has to be part of selection list
      @ObjectModel.foreignKey.association: '_CompanyCodeCountry'
      cast( CompanyCodeCountry as fis_company_code_country preserving type )                          as CompanyCodeCountry,
      
      cast( CustomerBasicAuthorizationGrp       as fis_customer_basic_auth_grp preserving type )      as CustomerBasicAuthorizationGrp,
      cast( _CustomerCompany.AuthorizationGroup as fis_customer_fins_auth_grp  preserving type )      as CustomerFinsAuthorizationGrp,
      
      CompanyCodeCurrency,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast( OverdueIntvl7AmtInCoCodeCrcy as far_overdue_intvl7_amt_inccrcy preserving type )          as OverdueIntvl7AmtInCoCodeCrcy,
     
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast( OverdueIntvl6AmtInCoCodeCrcy as far_overdue_intvl6_amt_inccrcy preserving type )          as OverdueIntvl6AmtInCoCodeCrcy,
      
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast( OverdueIntvl5AmtInCoCodeCrcy as far_overdue_intvl5_amt_inccrcy preserving type )          as OverdueIntvl5AmtInCoCodeCrcy,
         
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast( OverdueIntvl4AmtInCoCodeCrcy as far_overdue_intvl4_amt_inccrcy preserving type )          as OverdueIntvl4AmtInCoCodeCrcy,
      
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast( OverdueIntvl3AmtInCoCodeCrcy as far_overdue_intvl3_amt_inccrcy preserving type )          as OverdueIntvl3AmtInCoCodeCrcy,
      
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast( OverdueIntvl2AmtInCoCodeCrcy as far_overdue_intvl2_amt_inccrcy preserving type )          as OverdueIntvl2AmtInCoCodeCrcy,
      
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast( OverdueIntvl1AmtInCoCodeCrcy as far_overdue_intvl1_amt_inccrcy preserving type )          as OverdueIntvl1AmtInCoCodeCrcy,
       
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast( FutureDueIntvl4AmtInCoCodeCrcy as far_futrdue_intvl4_amt_inccrcy preserving type )        as FutureDueIntvl4AmtInCoCodeCrcy,
      
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast( FutureDueIntvl3AmtInCoCodeCrcy as far_futrdue_intvl3_amt_inccrcy preserving type )        as FutureDueIntvl3AmtInCoCodeCrcy,
      
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast( FutureDueIntvl2AmtInCoCodeCrcy as far_futrdue_intvl2_amt_inccrcy preserving type )        as FutureDueIntvl2AmtInCoCodeCrcy,
      
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast( FutureDueIntvl1AmtInCoCodeCrcy as far_futrdue_intvl1_amt_inccrcy preserving type )        as FutureDueIntvl1AmtInCoCodeCrcy,
      
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast( DueAtKeyDateAmtInCoCodeCrcy as farp_due_at_keydte_amt_cccrcy preserving type )            as DueAtKeyDateAmtInCoCodeCrcy,
      
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast( OverdueAmtInCoCodeCrcy as farp_overdue_amt_cocode_crcy preserving type )                  as OverdueAmtInCoCodeCrcy,
      
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast( NotOverdueAmtInCoCodeCrcy as farp_not_overdue_amt_cccrcy preserving type )                as NotOverdueAmtInCoCodeCrcy,
      
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast( FutureDueAmtInCoCodeCrcy as farp_future_amt_cocode_crcy preserving type )                 as FutureDueAmtInCoCodeCrcy,
      
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast( AmountInCompanyCodeCurrency as farp_total_amount_cocode_crcy preserving type )            as AmountInCompanyCodeCurrency,
      
      @Analytics.internalName: #LOCAL  
      DocumentDate,
      @Analytics.internalName: #LOCAL
      PostingDate,
      @Analytics.internalName: #LOCAL
      cast( NetDueDate as farp_netdt preserving type )                                                as NetDueDate,
             
      _Customer,
      _CompanyCode,
      _JournalEntry,
      _SpecialGLCode,
      _FinancialAccountType,
      _ChartOfAccounts,
      _GLAccountInChartOfAccounts,
      _ProfitCenter,
      _FiscalYear,
      _AccountingClerk,
      _ReconciliationAccount,
      _CustomerAccountGroup,
      _CustomerClassification,
      _PaymentMethod,
      _CustomerCountry,
      _CustomerRegion,
      _CustomerCompany,
      _CurrentProfitCenter,
      _CompanyCodeCountry,
      _ControllingArea,
      _FunctionalArea,
      _BusinessArea,
      _Segment  
}
```
