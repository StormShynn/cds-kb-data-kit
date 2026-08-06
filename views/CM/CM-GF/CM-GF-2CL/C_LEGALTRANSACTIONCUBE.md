---
name: C_LEGALTRANSACTIONCUBE
description: This CDS view provides the data to answer the following business questions: What is the total number of legal transaction with triggering object? What is the total number of expired legal transaction without triggeing objects? What is the total number of legal transactions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CM-GF-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALTRANSACTIONCUBE')/$value
semantic_en: This CDS view provides the data to answer the following business questions: What is the total number of legal transaction with triggering object? What is the total number of expired legal transaction without triggeing objects? What is the total number of legal transactions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - Legal Transaction Header - Analytics Cube
tags:
  - CM
  - bo:companycode
  - CM-GF
  - CM-GF-2CL
  - component:CM-GF-2CL
  - consumption-view
  - transaction
  - metadata-only
---
# C_LEGALTRANSACTIONCUBE

**This CDS view provides the data to answer the following business questions: What is the total number of legal transaction with triggering object? What is the total number of expired legal transaction without triggeing objects? What is the total number of legal transactions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALTRANSACTIONCUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `LegalTransactionUUID` | `RAW(16)` | Universal Unique Identifier |
| `LegalTransaction` | `CHAR(10)` | Legal Transaction ID |
| `LegalTransactionTitle` | `CHAR(128)` | Legal Transaction Name |
| `LegalTransactionHealth` | `CHAR(4)` | Legal Transaction Status |
| `LglCntntMLanguage` | `LANG(1)` | Language Key |
| `LglCntntMCreatedByUser` | `CHAR(12)` | Created By |
| `CreatedByName` | `CHAR(80)` | Description of the Technical User Account |
| `LglCntntMCreatedDate` | `DATS(8)` | Creation Date |
| `LglCntntMChangedByUser` | `CHAR(12)` | Changed By User |
| `ChangedByName` | `CHAR(80)` | Description of the Technical User Account |
| `LglCntntMChangedUTCDateTime` | `DEC(21)` | Changed UTC Date Time |
| `LglCntntMProfile` | `CHAR(10)` | Profile |
| `LegalTransactionSource` | `CHAR(3)` | LT Integration source |
| `LglCntntMRtntnPerdStartDate` | `DATS(8)` | Start of Retention Period |
| `LglCntntMContext` | `CHAR(5)` | Context ID |
| `LglCntntMContextTitle` | `CHAR(128)` | Legal Transaction Name |
| `LglCntntMFromDate` | `DATS(8)` | Valid From |
| `LglCntntMToDate` | `DATS(8)` | Valid From |
| `LglCntntMGovLaw` | `CHAR(7)` | Governing Law |
| `LglCntntMGovLawText` | `CHAR(92)` | Governing Law Text |
| `LegalTransExpirationInDays` | `INT4(10)` | Legal Transaction Expired In Days |
| `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `LglTransExpirationRangeDaysTxt` | `CHAR(7)` |  |
| `LglCntntMMainOrg` | `CHAR(10)` | Entity ID |
| `LglTransAccessLvl` | `CHAR(4)` | Access Level |
| `LglCntntMAccessLvlName` | `CHAR(40)` | Long Text |
| `LglCntntMMainOrgType` | `CHAR(2)` | Entity Technical Type |
| `LglCntntMMainOrgCoCode` | `CHAR(10)` | Entity ID |
| `LglCntntMMainOrgSalesOrg` | `CHAR(10)` | Entity ID |
| `SalesOrganizationName` | `CHAR(20)` | Sales Organization Description |
| `LglCntntMMainOrgPurOrg` | `CHAR(10)` | Entity ID |
| `LglCntntMIntegrationType` | `CHAR(4)` | Integration Variant |
| `LegalTransactionHealthName` | `CHAR(40)` | Long Text |
| `LglCntntMMainOrgTypeName` | `CHAR(60)` | Short Text for Fixed Values |
| `LglCntntMEntityType` | `CHAR(4)` | Entity Type |
| `LglCntntMEntityTypeName` | `CHAR(40)` | Long Text |
| `LglCntntMEntity` | `CHAR(10)` | Entity ID |
| `LglCntntMEntityName` | `CHAR(81)` |  |
| `LglCntntMMainOrgName` | `CHAR(25)` | Name of Company Code or Company |
| `LglCntntMRnwlTypeName` | `CHAR(60)` | Short Text for Fixed Values |
| `LglCntntMLinkdObjTypeName` | `CHAR(40)` | Long Text |
| `LegalTransTotNmbrOfFinalStatus` | `INT4(10)` |  |
| `LegalTransTotNrOfOpenStatus` | `INT4(10)` |  |
| `LegalTransTotNmbrOfOnTrackSts` | `INT4(10)` |  |
| `TotalNumberOfLegalTransactions` | `INT4(10)` | Total Numbers of Legal Transaction |
| `TotalNrOfActiveLglTransactions` | `INT4(10)` |  |
| `LglTransTotNmbrOfAutoRenewed` | `INT4(10)` |  |
| `TotNrOfLegalTransWithTrggrObj` | `INT4(10)` |  |
| `LegalTransTerminationRangeCode` | `CHAR(2)` | Days Range of Legal Transaction to be Terminated |
| `LegalTransRenewalRangeCode` | `CHAR(2)` | Days Range of Legal Transaction Renewal |
| `TotNrOfExprdLglTransWthoutRnwl` | `INT4(10)` | Total Number of Expired Contracts without Renewal |
| `LegalTransTotNmbrOfRenewed` | `INT4(10)` | Total Number of Renewed Contracts |
