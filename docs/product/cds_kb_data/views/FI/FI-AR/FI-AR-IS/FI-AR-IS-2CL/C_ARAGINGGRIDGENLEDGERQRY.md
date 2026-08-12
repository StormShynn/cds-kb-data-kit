---
name: C_ARAGINGGRIDGENLEDGERQRY
description: "This CDS view provides you with an overview of the overdue receivables and receivables that will become due in the future based on the key date you enter. You can use the CDS view for many different reports, such as creating an aggregated view of the receivables per overdue interval and future due interval for an account, or a drill down to individual open receivable items. This CDS view provides the data to answer the following business questions, for example: How high are the overall total receivables? Which customers have total receivables? What are the open receivable items for a customer? Note that this CDS view cannot be accessed directly using SQL or custom CDS views. It receives its data from the G/L Perspective of AR Aging Grid - Cube (I_ARAgingGridGenLedgerCube). It can be used in the View Browser key user app. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARAGINGGRIDGENLEDGERQRY')/$value
semantic_en: "This CDS view provides you with an overview of the overdue receivables and receivables that will become due in the future based on the key date you enter. You can use the CDS view for many different reports, such as creating an aggregated view of the receivables per overdue interval and future due interval for an account, or a drill down to individual open receivable items. This CDS view provides the data to answer the following business questions, for example: How high are the overall total receivables? Which customers have total receivables? What are the open receivable items for a customer? Note that this CDS view cannot be accessed directly using SQL or custom CDS views. It receives its data from the G/L Perspective of AR Aging Grid - Cube (I_ARAgingGridGenLedgerCube). It can be used in the View Browser key user app. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "C_ARAGINGGRIDGENLEDGERQRY — CDS view tiêu dùng dựa trên I_ARAgingGridGenLedgerCube."
keywords:
  - "araginggridgenledgerqry"
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
  - consumption-view
  - customer
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - lob:finance
---
# C_ARAGINGGRIDGENLEDGERQRY

**This CDS view provides you with an overview of the overdue receivables and receivables that will become due in the future based on the key date you enter. You can use the CDS view for many different reports, such as creating an aggregated view of the receivables per overdue interval and future due interval for an account, or a drill down to individual open receivable items. This CDS view provides the data to answer the following business questions, for example: How high are the overall total receivables? Which customers have total receivables? What are the open receivable items for a customer? Note that this CDS view cannot be accessed directly using SQL or custom CDS views. It receives its data from the G/L Perspective of AR Aging Grid - Cube (I_ARAgingGridGenLedgerCube). It can be used in the View Browser key user app. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARAGINGGRIDGENLEDGERQRY')/$value) |

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
| `CustomerCountry` |  | |  |  | `CHAR(3)` | Customer Country/Region |
| `CustomerRegion` |  | |  |  | `CHAR(3)` | Region (Customer) |
| `AccountingClerk` |  | |  |  | `CHAR(2)` | Accounting Clerk |
| `ReconciliationAccount` |  | |  |  | `CHAR(10)` | Reconciliation Account in General Ledger |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `CustomerClassification` |  | |  |  | `CHAR(2)` | Customer Classification |
| `CustomerCorporateGroup` |  | |  |  | `CHAR(10)` | Customer Corporate Group |
| `CustomerAccountNote` |  | |  |  | `CHAR(30)` | Memo |
| `Reference1IDByBusinessPartner` |  | |  |  | `CHAR(12)` | ID of Reference 1 by Business Partner |
| `Reference2IDByBusinessPartner` |  | |  |  | `CHAR(12)` | ID of Reference 2 by Business Partner |
| `Reference3IDByBusinessPartner` |  | |  |  | `CHAR(20)` | ID of Reference 3 by Business Partner |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `CompanyCodeCountry` |  | |  |  | `CHAR(3)` | Company Code Country/Region |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `OverdueIntvl7AmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Amount in 7th Overdue Period (Company Currency) |
| `OverdueIntvl6AmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Amount in 6th Overdue Period (Company Currency) |
| `OverdueIntvl5AmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Amount in 5th Overdue Period (Company Currency) |
| `OverdueIntvl4AmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Amount in 4th Overdue Period (Company Currency) |
| `OverdueIntvl3AmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Amount in 3rd Overdue Period (Company Currency) |
| `OverdueIntvl2AmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Amount in 2nd Overdue Period (Company Currency) |
| `OverdueIntvl1AmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Amount in 1st Overdue Period (Company Currency) |
| `DueAtKeyDateAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Amount in Company Currency due at Key Date |
| `FutureDueIntvl1AmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Amount in 1st Future Due Period (Company Currency) |
| `FutureDueIntvl2AmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Amount in 2nd Future Due Period (Company Currency) |
| `FutureDueIntvl3AmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Amount in 3rd Future Due Period (Company Currency) |
| `FutureDueIntvl4AmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Amount in 4th Future Due Period (Company Currency) |
| `OverdueAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Overdue Amount in Company Currency |
| `NotOverdueAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Not Overdue Amount in Company Currency |
| `FutureDueAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Future Due Amount in Company Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Total Open Receivables Amount in Company Currency |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARAGINGGRIDGENLEDGERQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARAGINGGRIDGENLEDGERQRY')/$value)*

```abap
@ObjectModel:    { usageType.serviceQuality:      #D,
                   usageType.sizeCategory:        #XXL,
                   usageType.dataClass:           #MIXED,
                   supportedCapabilities:         [ #ANALYTICAL_QUERY, #KEY_USER_COPYING_TEMPLATE ],
                   modelingPattern:               #ANALYTICAL_QUERY }

@EndUserText:    { label:                         'G/L Perspective of AR Aging Grid - Query' }

@Analytics:      { query:                         true,
                   settings.maxProcessingEffort:  #HIGH,
                   variableCheck.implementedBy:   'ABAP:CL_FAR_AGINGGRID_CCCRCY_CHECK' }

//Syntax without curly brackets is required by Key User App Custom Analytical Queries
@OData.publish: false

@VDM:            { viewType:                      #CONSUMPTION }

@AccessControl:  { authorizationCheck:            #PRIVILEGED_ONLY }

@Metadata:       { ignorePropagatedAnnotations:   true,
                   allowExtensions:               true }

@AbapCatalog:    { sqlViewName:                    'CARGRIDGLQUERY',
                   compiler.compareFilter:         true,
                   buffering.status:               #NOT_ALLOWED }

@ClientHandling: { algorithm:                      #SESSION_VARIABLE }

define view C_ARAgingGridGenLedgerQry
  with parameters

    //_____________________________________________   PARAMETERS   ______________________________________________________________

    @Semantics.businessDate.at: true
    @Environment.systemField: #SYSTEM_DATE
    @AnalyticsDetails.query.variableSequence: 20
    P_KeyDate                 : vdm_v_key_date,

    @Consumption.defaultValue: '30'
    @AnalyticsDetails.query.variableSequence: 30
    P_OverdueInterval1Days    : far_overdue_interval1,

    @Consumption.defaultValue: '60'
    @AnalyticsDetails.query.variableSequence: 40
    P_OverdueInterval2Days    : far_overdue_interval2,

    @Consumption.defaultValue: '90'
    @AnalyticsDetails.query.variableSequence: 50
    P_OverdueInterval3Days    : far_overdue_interval3,

    @Consumption.defaultValue: '120'
    @AnalyticsDetails.query.variableSequence: 60
    P_OverdueInterval4Days    : far_overdue_interval4,

    @Consumption.defaultValue: '150'
    @AnalyticsDetails.query.variableSequence: 70
    P_OverdueInterval5Days    : far_overdue_interval5,

    @Consumption.defaultValue: '180'
    @AnalyticsDetails.query.variableSequence: 80
    P_OverdueInterval6Days    : far_overdue_interval6,

    @Consumption.defaultValue: '30'
    @AnalyticsDetails.query.variableSequence: 110
    P_FutureDueInterval1Days  : far_future_due_interval1,

    @Consumption.defaultValue: '60'
    @AnalyticsDetails.query.variableSequence: 120
    P_FutureDueInterval2Days  : far_future_due_interval2,

    @Consumption.defaultValue: '90'
    @AnalyticsDetails.query.variableSequence: 130
    P_FutureDueInterval3Days  : far_future_due_interval3,

    @Consumption.hidden: true
    @Consumption.derivation: { lookupEntity: 'F_LeadingLedger', resultElement: 'Ledger'}
    P_LeadingLedger           : fins_ledger,

    @Consumption.derivation: {
        lookupEntity: 'F_ARAgingGridOverdueIntvl1Lbl',
        resultElement: 'OverdueIntervalLabel',
        binding: [{ targetParameter: 'P_OverdueInterval1Days', type: #PARAMETER, value: 'P_OverdueInterval1Days' }]
    }
    @Consumption.hidden: true
    P_OverdueInterval1Label   : far_araginggrid_interval_label,

    @Consumption.derivation: {
        lookupEntity: 'F_ARAgingGridOverdueIntvl2Lbl',
        resultElement: 'OverdueIntervalLabel',
        binding: [{ targetParameter: 'P_OverdueInterval1Days', type: #PARAMETER, value: 'P_OverdueInterval1Days' },
                  { targetParameter: 'P_OverdueInterval2Days', type: #PARAMETER, value: 'P_OverdueInterval2Days' }]
    }
    @Consumption.hidden: true
    P_OverdueInterval2Label   : far_araginggrid_interval_label,

    @Consumption.derivation: {
        lookupEntity: 'F_ARAgingGridOverdueIntvl3Lbl',
        resultElement: 'OverdueIntervalLabel',
        binding: [{ targetParameter: 'P_OverdueInterval2Days', type: #PARAMETER, value: 'P_OverdueInterval2Days' },
                  { targetParameter: 'P_OverdueInterval3Days', type: #PARAMETER, value: 'P_OverdueInterval3Days' }]
    }
    @Consumption.hidden: true
    P_OverdueInterval3Label   : far_araginggrid_interval_label,

    @Consumption.derivation: {
        lookupEntity: 'F_ARAgingGridOverdueIntvl4Lbl',
        resultElement: 'OverdueIntervalLabel',
        binding: [{ targetParameter: 'P_OverdueInterval3Days', type: #PARAMETER, value: 'P_OverdueInterval3Days' },
                  { targetParameter: 'P_OverdueInterval4Days', type: #PARAMETER, value: 'P_OverdueInterval4Days' }]
    }
    @Consumption.hidden: true
    P_OverdueInterval4Label   : far_araginggrid_interval_label,

    @Consumption.derivation: {
        lookupEntity: 'F_ARAgingGridOverdueIntvl5Lbl',
        resultElement: 'OverdueIntervalLabel',
        binding: [{ targetParameter: 'P_OverdueInterval4Days', type: #PARAMETER, value: 'P_OverdueInterval4Days' },
                  { targetParameter: 'P_OverdueInterval5Days', type: #PARAMETER, value: 'P_OverdueInterval5Days' }]
    }
    @Consumption.hidden: true
    P_OverdueInterval5Label   : far_araginggrid_interval_label,

    @Consumption.derivation: {
        lookupEntity: 'F_ARAgingGridOverdueIntvl6Lbl',
        resultElement: 'OverdueIntervalLabel',
        binding: [{ targetParameter: 'P_OverdueInterval5Days', type: #PARAMETER, value: 'P_OverdueInterval5Days' },
                  { targetParameter: 'P_OverdueInterval6Days', type: #PARAMETER, value: 'P_OverdueInterval6Days' }]
    }
    @Consumption.hidden: true
    P_OverdueInterval6Label   : far_araginggrid_interval_label,

    @Consumption.derivation: {
        lookupEntity: 'F_ARAgingGridOverdueIntvl7Lbl',
        resultElement: 'OverdueIntervalLabel',
        binding: [{ targetParameter: 'P_OverdueInterval6Days', type: #PARAMETER, value: 'P_OverdueInterval6Days' }]
    }
    @Consumption.hidden: true
    P_OverdueInterval7Label   : far_araginggrid_interval_label,

    @Consumption.derivation: {
        lookupEntity: 'F_ARAgingGridFutrDueIntvl1Lbl',
        resultElement: 'FutureDueIntervalLabel',
        binding: [{ targetParameter: 'P_FutureDueInterval1Days', type: #PARAMETER, value: 'P_FutureDueInterval1Days' }]
    }
    @Consumption.hidden: true
    P_FutureDueInterval1Label : far_araginggrid_interval_label,

    @Consumption.derivation: {
        lookupEntity: 'F_ARAgingGridFutrDueIntvl2Lbl',
        resultElement: 'FutureDueIntervalLabel',
        binding: [{ targetParameter: 'P_FutureDueInterval1Days', type: #PARAMETER, value: 'P_FutureDueInterval1Days' },
                  { targetParameter: 'P_FutureDueInterval2Days', type: #PARAMETER, value: 'P_FutureDueInterval2Days' }]
    }
    @Consumption.hidden: true
    P_FutureDueInterval2Label : far_araginggrid_interval_label,

    @Consumption.derivation: {
        lookupEntity: 'F_ARAgingGridFutrDueIntvl3Lbl',
        resultElement: 'FutureDueIntervalLabel',
        binding: [{ targetParameter: 'P_FutureDueInterval2Days', type: #PARAMETER, value: 'P_FutureDueInterval2Days' },
                  { targetParameter: 'P_FutureDueInterval3Days', type: #PARAMETER, value: 'P_FutureDueInterval3Days' }]
    }
    @Consumption.hidden: true
    P_FutureDueInterval3Label : far_araginggrid_interval_label,

    @Consumption.derivation: {
        lookupEntity: 'F_ARAgingGridFutrDueIntvl4Lbl',
        resultElement: 'FutureDueIntervalLabel',
        binding: [{ targetParameter: 'P_FutureDueInterval3Days', type: #PARAMETER, value: 'P_FutureDueInterval3Days' }]
    }
    @Consumption.hidden: true
    P_FutureDueInterval4Label : far_araginggrid_interval_label

  as select from I_ARAgingGridGenLedgerCube( P_KeyDate:                   $parameters.P_KeyDate,
                                             P_OverdueInterval1Days:      $parameters.P_OverdueInterval1Days,
                                             P_OverdueInterval2Days:      $parameters.P_OverdueInterval2Days,
                                             P_OverdueInterval3Days:      $parameters.P_OverdueInterval3Days,
                                             P_OverdueInterval4Days:      $parameters.P_OverdueInterval4Days,
                                             P_OverdueInterval5Days:      $parameters.P_OverdueInterval5Days,
                                             P_OverdueInterval6Days:      $parameters.P_OverdueInterval6Days,
                                             P_FutureDueInterval1Days:    $parameters.P_FutureDueInterval1Days,
                                             P_FutureDueInterval2Days:    $parameters.P_FutureDueInterval2Days,
                                             P_FutureDueInterval3Days:    $parameters.P_FutureDueInterval3Days,
                                             P_LeadingLedger:             $parameters.P_LeadingLedger )
{

      //_____________________________________________   DIMENSIONS   ______________________________________________________________

      @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
      @AnalyticsDetails.query.variableSequence: 10
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.totals: #SHOW
      @AnalyticsDetails.query.resultValueHelpSource: #DIMENSION
  key CompanyCode,

      @AnalyticsDetails.query.axis: #FREE
  key FiscalYear,

      @AnalyticsDetails.query.axis: #FREE
  key AccountingDocument,

      @AnalyticsDetails.query.axis: #FREE
  key LedgerGLLineItem,

      @AnalyticsDetails.query.axis: #FREE
      AccountingDocumentItem,

      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #ROWS
      Customer,

      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      GLAccount,

      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      SpecialGLCode,

      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      ProfitCenter,

      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      FunctionalArea,

      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      BusinessArea,

      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      Segment,

      @AnalyticsDetails.query.axis: #FREE
      BillingDocument,

      @AnalyticsDetails.query.axis: #FREE
      AssignmentReference,

      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      CustomerCountry,

      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      CustomerRegion,

      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      AccountingClerk,

      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      ReconciliationAccount,

      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      CustomerAccountGroup,

      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      CustomerClassification,

      @AnalyticsDetails.query.axis: #FREE
      CustomerCorporateGroup,

      @AnalyticsDetails.query.axis: #FREE
      CustomerAccountNote,

      @AnalyticsDetails.query.axis: #FREE
      Reference1IDByBusinessPartner,

      @AnalyticsDetails.query.axis: #FREE
      Reference2IDByBusinessPartner,

      @AnalyticsDetails.query.axis: #FREE
      Reference3IDByBusinessPartner,

      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      PaymentMethod,

      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      CompanyCodeCurrency,

      // Published due to VDM ATC check QRD2
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      FinancialAccountType,

      // Published due to VDM ATC check QRD2
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      CompanyCodeCountry,

      // Published due to VDM ATC check QRD2
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      ControllingArea,

      // Published due to VDM ATC check QRD2
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      ChartOfAccounts,

      //_____________________________________________   MEASURES   __________________________________________________________

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @AnalyticsDetails.query.axis:#COLUMNS
      @Consumption.dynamicLabel: { label : '&1' ,
                             binding : [ { index : 1 , parameter : 'P_OverdueInterval7Label'  } ] }
      OverdueIntvl7AmtInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @AnalyticsDetails.query.axis:#COLUMNS
      @Consumption.dynamicLabel: { label : '&1' ,
                             binding : [ { index : 1 , parameter : 'P_OverdueInterval6Label'  } ] }
      OverdueIntvl6AmtInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @AnalyticsDetails.query.axis:#COLUMNS
      @Consumption.dynamicLabel: { label : '&1' ,
                             binding : [ { index : 1 , parameter : 'P_OverdueInterval5Label'  } ] }
      OverdueIntvl5AmtInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @AnalyticsDetails.query.axis:#COLUMNS
      @Consumption.dynamicLabel: { label : '&1' ,
                             binding : [ { index : 1 , parameter : 'P_OverdueInterval4Label'  } ] }
      OverdueIntvl4AmtInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @AnalyticsDetails.query.axis:#COLUMNS
      @Consumption.dynamicLabel: { label : '&1' ,
                             binding : [ { index : 1 , parameter : 'P_OverdueInterval3Label'  } ] }
      OverdueIntvl3AmtInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @AnalyticsDetails.query.axis:#COLUMNS
      @Consumption.dynamicLabel: { label : '&1' ,
                             binding : [ { index : 1 , parameter : 'P_OverdueInterval2Label'  } ] }
      OverdueIntvl2AmtInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @AnalyticsDetails.query.axis:#COLUMNS
      @Consumption.dynamicLabel: { label : '&1' ,
                             binding : [ { index : 1 , parameter : 'P_OverdueInterval1Label'  } ] }
      OverdueIntvl1AmtInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @AnalyticsDetails.query.axis:#COLUMNS
      DueAtKeyDateAmtInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @AnalyticsDetails.query.axis:#COLUMNS
      @Consumption.dynamicLabel: { label : '&1' ,
                             binding : [ { index : 1 , parameter : 'P_FutureDueInterval1Label'  } ] }
      FutureDueIntvl1AmtInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @AnalyticsDetails.query.axis:#COLUMNS
      @Consumption.dynamicLabel: { label : '&1' ,
                             binding : [ { index : 1 , parameter : 'P_FutureDueInterval2Label'  } ] }
      FutureDueIntvl2AmtInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @AnalyticsDetails.query.axis:#COLUMNS
      @Consumption.dynamicLabel: { label : '&1' ,
                             binding : [ { index : 1 , parameter : 'P_FutureDueInterval3Label'  } ] }
      FutureDueIntvl3AmtInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @AnalyticsDetails.query.axis:#COLUMNS
      @Consumption.dynamicLabel: { label : '&1' ,
                             binding : [ { index : 1 , parameter : 'P_FutureDueInterval4Label'  } ] }
      FutureDueIntvl4AmtInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @AnalyticsDetails.query.axis: #COLUMNS
      OverdueAmtInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @AnalyticsDetails.query.axis: #COLUMNS
      NotOverdueAmtInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @AnalyticsDetails.query.axis: #COLUMNS
      FutureDueAmtInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @AnalyticsDetails.query.axis: #COLUMNS
      AmountInCompanyCodeCurrency
}
```
