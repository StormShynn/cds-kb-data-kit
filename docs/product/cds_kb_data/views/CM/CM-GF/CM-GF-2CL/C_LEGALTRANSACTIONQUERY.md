---
name: C_LEGALTRANSACTIONQUERY
description: "This CDS view provides the data to answer the following business questions: What is the total number of legal transaction with triggering object? What is the total number of expired legal transaction without triggeing objects? What is the total number of legal transactions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CM-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALTRANSACTIONQUERY')/$value
semantic_en: "This CDS view provides the data to answer the following business questions: What is the total number of legal transaction with triggering object? What is the total number of expired legal transaction without triggeing objects? What is the total number of legal transactions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Legal Transaction Header - Query — CDS view tiêu dùng dựa trên C_LegalTransactionCube."
keywords:
  - "Legal Transaction Header – Query"
  - "legal"
  - "transaction"
  - "header"
  - "query"
  - "title"
  - "cntnt"
  - "language"
  - "health"
tags:
  - CM
  - bo:companycode
  - CM-GF
  - CM-GF-2CL
  - component:CM-GF-2CL
  - consumption-view
  - transaction
---
# C_LEGALTRANSACTIONQUERY

**This CDS view provides the data to answer the following business questions: What is the total number of legal transaction with triggering object? What is the total number of expired legal transaction without triggeing objects? What is the total number of legal transactions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALTRANSACTIONQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LegalTransactionUUID` | ✓ | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LegalTransaction` |  | |  |  | `CHAR(10)` | Legal Transaction ID |
| `LegalTransactionTitle` |  | |  |  | `CHAR(128)` | Legal Transaction Name |
| `LglCntntMLanguage` |  | |  |  | `LANG(1)` | Language Key |
| `LegalTransactionHealth` |  | |  |  | `CHAR(4)` | Legal Transaction Status |
| `LglCntntMCreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreatedByName` |  | |  |  | `CHAR(80)` | Description of the Technical User Account |
| `LglCntntMCreatedDate` |  | |  |  | `DATS(8)` | Creation Date |
| `LglCntntMChangedByUser` |  | |  |  | `CHAR(12)` | Changed By User |
| `ChangedByName` |  | |  |  | `CHAR(80)` | Description of the Technical User Account |
| `LglCntntMProfile` |  | |  |  | `CHAR(10)` | Profile |
| `LglCntntMContext` |  | |  |  | `CHAR(5)` | Context ID |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `LglCntntMContextTitle` |  | |  |  | `CHAR(128)` | Legal Transaction Name |
| `LglCntntMFromDate` |  | |  |  | `DATS(8)` | Valid From |
| `LglCntntMToDate` |  | |  |  | `DATS(8)` | Valid From |
| `LglCntntMGovLawText` |  | |  |  | `CHAR(92)` | Governing Law Text |
| `LglCntntMAccessLvlName` |  | |  |  | `CHAR(40)` | Long Text |
| `LglCntntMMainOrgCoCode` |  | |  |  | `CHAR(10)` | Entity ID |
| `LglCntntMMainOrgSalesOrg` |  | |  |  | `CHAR(10)` | Entity ID |
| `LglCntntMMainOrgPurOrg` |  | |  |  | `CHAR(10)` | Entity ID |
| `LglCntntMMainOrg` |  | |  |  | `CHAR(10)` | Entity ID |
| `LegalTransactionHealthName` |  | |  |  | `CHAR(40)` | Long Text |
| `LglCntntMMainOrgType` |  | |  |  | `CHAR(2)` | Entity Technical Type |
| `LglCntntMEntityTypeName` |  | |  |  | `CHAR(40)` | Long Text |
| `LglCntntMEntityName` |  | |  |  | `CHAR(81)` |  |
| `LglCntntMMainOrgName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `LegalTransExpirationInDays` |  | |  |  | `INT4(10)` | Legal Transaction Expired In Days |
| `LglTransExpirationRangeDaysTxt` |  | |  |  | `CHAR(7)` |  |
| `LglCntntMRnwlTypeName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `LglCntntMLinkdObjTypeName` |  | |  |  | `CHAR(40)` | Long Text |
| `LegalTransTotNmbrOfFinalStatus` |  | |  |  | `INT4(10)` |  |
| `LegalTransTotNmbrOfOnTrackSts` |  | |  |  | `INT4(10)` |  |
| `TotalNumberOfLegalTransactions` |  | |  |  | `INT4(10)` | Total Numbers of Legal Transaction |
| `TotalNrOfActiveLglTransactions` |  | |  |  | `INT4(10)` |  |
| `TotNrOfLegalTransWithTrggrObj` |  | |  |  | `INT4(10)` |  |
| `LglTransTotNmbrOfAutoRenewed` |  | |  |  | `INT4(10)` |  |
| `LegalTransTerminationRangeCode` |  | |  |  | `CHAR(2)` | Days Range of Legal Transaction to be Terminated |
| `LegalTransRenewalRangeCode` |  | |  |  | `CHAR(2)` | Days Range of Legal Transaction Renewal |
| `LegalTransTotNmbrOfRenewed` |  | |  |  | `INT4(10)` | Total Number of Renewed Contracts |
| `TotNrOfExprdLglTransWthoutRnwl` |  | |  |  | `INT4(10)` | Total Number of Expired Contracts without Renewal |
| `LegalTransOnTrackStsPercent` |  | |  | `100` | `INT1(3)` |  |
| `LglTransExprdWthoutRnwlPercent` |  | |  | `cast( 100 as lcm_tot_lt_exprdwthoutrnwl_per )` | `DEC(5)` | % of Contracts Expired without Renewals |
| `LegalTransRenewedPercent` |  | |  | `cast( 100 as lcm_tot_lt_renewed_per )` | `DEC(5)` | % of Renewed Contracts |
| `_ChangedBy` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_CreatedBy` | | ✓ | | | | |
| `_LanguageText` | | ✓ | | | | |
| `_LegalTransactionHealthText` | | ✓ | | | | |
| `_LglCntntMMainOrgTypeText` | | ✓ | | | | |
| `_MainLegalTransactionEntity` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_SalesOrganizationText` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALTRANSACTIONQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALTRANSACTIONQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CLCMLTQUERY'
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
@OData.publish: true
@Metadata.ignorePropagatedAnnotations:true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'Legal Transaction Header - Query'
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
define view C_LegalTransactionQuery
  as select from C_LegalTransactionCube as LegalTransactionCube
{

      @Consumption.hidden: true
  key LegalTransactionUUID,

      @Consumption.filter : { selectionType: #SINGLE, multipleSelections: true }
      LegalTransaction,

      @Consumption.filter : { selectionType: #SINGLE, multipleSelections: true }
      @EndUserText.label: 'Legal Trasaction Title'
      LegalTransactionTitle,

      @Consumption.filter : { selectionType: #SINGLE, multipleSelections: true }
      LglCntntMLanguage,


      @Consumption.hidden: true
      @Semantics.text: true
      @EndUserText.label: 'Status ID'
      LegalTransactionHealth,

      LglCntntMCreatedByUser,

      @EndUserText.label: 'Created By Name'
      CreatedByName,

      LglCntntMCreatedDate,

      LglCntntMChangedByUser,

      @EndUserText.label: 'Changed By Name'
      ChangedByName,

      LglCntntMProfile,

      LglCntntMContext,

      CalendarYear,
      CalendarQuarter,
      CalendarMonth,

      @EndUserText.label: 'Context Title'
      LglCntntMContextTitle,

      @EndUserText.label: 'Legal Transaction Start Date'
      LglCntntMFromDate,

      @EndUserText.label: 'Legal Transaction End Date'
      LglCntntMToDate,

      @Semantics.text: true
      LglCntntMGovLawText,

      @EndUserText.label: 'Access Level'
      LglCntntMAccessLvlName,

      @AnalyticsDetails.query.display: #KEY_TEXT
      @EndUserText.label: 'Main Orgn. Company Code'
      LglCntntMMainOrgCoCode,

      @EndUserText.label: 'Main Orgn. Sales Org'
      @AnalyticsDetails.query.display: #KEY_TEXT
      LglCntntMMainOrgSalesOrg,

      @EndUserText.label: 'Main Orgn. Purchase Org'
      @AnalyticsDetails.query.display: #KEY_TEXT
      LglCntntMMainOrgPurOrg,

      @EndUserText.label: 'Main Organization ID'
      LglCntntMMainOrg,

      @EndUserText.label: 'Status'
      LegalTransactionHealthName,

      @EndUserText.label: 'Main Organization Type'
      LglCntntMMainOrgType,

      @EndUserText.label: 'Changed By'
      _ChangedBy,

      @EndUserText.label: 'Company Code'
      _CompanyCode,

      @EndUserText.label: 'Created By'
      _CreatedBy,

      @EndUserText.label: 'Language'
      @Semantics.text: true
      _LanguageText,

      @EndUserText.label: 'Status'
      @AnalyticsDetails.query.display: #KEY_TEXT
      _LegalTransactionHealthText,

      @EndUserText.label: 'Main Org Type'
      @AnalyticsDetails.query.display: #KEY_TEXT
      _LglCntntMMainOrgTypeText,

      @EndUserText.label: 'Legal Transaction Entity'
      _MainLegalTransactionEntity,

      @EndUserText.label: 'Purchase Organization ID'
      @AnalyticsDetails.query.display: #KEY_TEXT
      _PurchasingOrganization,

      @EndUserText.label: 'Sales Organization ID'
      @AnalyticsDetails.query.display: #KEY_TEXT
      _SalesOrganizationText,

      @EndUserText.label: 'Main Entity Type'
      @AnalyticsDetails.query.display: #KEY_TEXT
      LglCntntMEntityTypeName,

      @Semantics.text: true
      @EndUserText.label: 'Main Entity'
      LglCntntMEntityName,

      @EndUserText.label: 'Main Organization'
      @AnalyticsDetails.query.display: #KEY_TEXT
      LglCntntMMainOrgName,

      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'LglTransExpirationRangeDaysTxt'
      @EndUserText.label: 'Legal Transaction Expired (In Days)'
      LegalTransExpirationInDays,

      @EndUserText.label: 'Legal Transactions Expiring (In Days)'
      LglTransExpirationRangeDaysTxt,

      @EndUserText.label: 'Renewal Type'
      @Semantics.text: true
      LglCntntMRnwlTypeName,

      @EndUserText.label: 'Linked Object Type'
      @Semantics.text: true
      LglCntntMLinkdObjTypeName,

      @EndUserText.label: 'Total No. of Legal Transactions in Final Status'
      @DefaultAggregation: #SUM
      LegalTransTotNmbrOfFinalStatus,

      @EndUserText.label: 'Total No. of On Track Legal Transactions'
      @DefaultAggregation: #SUM
      LegalTransTotNmbrOfOnTrackSts,

      @EndUserText.label: 'Total No. of Legal Transactions'
      @DefaultAggregation: #SUM
      TotalNumberOfLegalTransactions,

      @EndUserText.label: 'Total No. of Active Legal Transactions'
      @DefaultAggregation: #SUM
      TotalNrOfActiveLglTransactions,

      @EndUserText.label: 'No. of Legal Transactions from other Origin'
      @DefaultAggregation: #SUM
      TotNrOfLegalTransWithTrggrObj,

      @EndUserText.label: 'No. of Auto-renewed Legal Transactions'
      @DefaultAggregation: #SUM
      LglTransTotNmbrOfAutoRenewed,

      @EndUserText.label: 'Legal Transactions Terminating (In Days)'
      LegalTransTerminationRangeCode,

      @EndUserText.label: 'Legal Transactions Renewing (In Days)'
      LegalTransRenewalRangeCode,

      @EndUserText.label: 'Total No. of Renewed Legal Transactions'
      @DefaultAggregation: #SUM
      LegalTransTotNmbrOfRenewed,

      @EndUserText.label: 'No. of Legal Transactions Expired without Renewals'
      @DefaultAggregation: #SUM
      TotNrOfExprdLglTransWthoutRnwl,

      @EndUserText.label: '% of Legal Transactions on Track'
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.decimals: 2
      @AnalyticsDetails.query.formula: 'NDIV0(  LegalTransTotNmbrOfOnTrackSts / TotalNumberOfLegalTransactions ) * 100'
      100                                           as LegalTransOnTrackStsPercent,

      @EndUserText.label: '% of Legal Transactions Expired without Renewals'
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.decimals: 2
      @AnalyticsDetails.query.formula: 'NDIV0(  TotNrOfExprdLglTransWthoutRnwl / TotalNumberOfLegalTransactions ) * 100'
      cast( 100 as lcm_tot_lt_exprdwthoutrnwl_per ) as LglTransExprdWthoutRnwlPercent,

      @EndUserText.label: '% of Renewed Legal Transactions'
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.decimals: 2
      @AnalyticsDetails.query.formula: 'NDIV0(  LegalTransTotNmbrOfRenewed / TotalNrOfActiveLglTransactions ) * 100'
      cast( 100 as lcm_tot_lt_renewed_per )         as LegalTransRenewedPercent
}
```
