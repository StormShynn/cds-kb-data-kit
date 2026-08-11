---
name: C_LEGALTRANSACTIONCUBE
description: "This CDS view provides the data to answer the following business questions: What is the total number of legal transaction with triggering object? What is the total number of expired legal transaction without triggeing objects? What is the total number of legal transactions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CM-GF-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALTRANSACTIONCUBE')/$value
semantic_en: "This CDS view provides the data to answer the following business questions: What is the total number of legal transaction with triggering object? What is the total number of expired legal transaction without triggeing objects? What is the total number of legal transactions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "LT SAP Analytics Cloud - Cube — CDS view tiêu dùng dựa trên P_LegalTransactionCube."
keywords:
  - "Legal Transaction Header - Analytics Cube"
  - "sap"
  - "analytics"
  - "cloud"
  - "cube"
  - "legal"
  - "transaction"
  - "title"
  - "health"
  - "cntnt"
  - "language"
tags:
  - CM
  - bo:companycode
  - CM-GF
  - CM-GF-2CL
  - component:CM-GF-2CL
  - consumption-view
  - transaction
---
# C_LEGALTRANSACTIONCUBE

**This CDS view provides the data to answer the following business questions: What is the total number of legal transaction with triggering object? What is the total number of expired legal transaction without triggeing objects? What is the total number of legal transactions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALTRANSACTIONCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LegalTransactionUUID` | ✓ | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LegalTransaction` |  | |  |  | `CHAR(10)` | Legal Transaction ID |
| `LegalTransactionTitle` |  | |  |  | `CHAR(128)` | Legal Transaction Name |
| `LegalTransactionHealth` |  | |  |  | `CHAR(4)` | Legal Transaction Status |
| `LglCntntMLanguage` |  | |  |  | `LANG(1)` | Language Key |
| `LglCntntMCreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreatedByName` |  | |  |  | `CHAR(80)` | Description of the Technical User Account |
| `LglCntntMCreatedDate` |  | |  |  | `DATS(8)` | Creation Date |
| `LglCntntMChangedByUser` |  | |  |  | `CHAR(12)` | Changed By User |
| `ChangedByName` |  | |  |  | `CHAR(80)` | Description of the Technical User Account |
| `LglCntntMChangedUTCDateTime` |  | |  |  | `DEC(21)` | Changed UTC Date Time |
| `LglCntntMProfile` |  | |  |  | `CHAR(10)` | Profile |
| `LegalTransactionSource` |  | |  |  | `CHAR(3)` | LT Integration source |
| `LglCntntMRtntnPerdStartDate` |  | |  |  | `DATS(8)` | Start of Retention Period |
| `LglCntntMContext` |  | |  |  | `CHAR(5)` | Context ID |
| `LglCntntMContextTitle` |  | |  |  | `CHAR(128)` | Legal Transaction Name |
| `LglCntntMFromDate` |  | |  |  | `DATS(8)` | Valid From |
| `LglCntntMToDate` |  | |  |  | `DATS(8)` | Valid From |
| `LglCntntMGovLaw` |  | |  |  | `CHAR(7)` | Governing Law |
| `LglCntntMGovLawText` |  | |  |  | `CHAR(92)` | Governing Law Text |
| `LegalTransExpirationInDays` |  | |  |  | `INT4(10)` | Legal Transaction Expired In Days |
| `CalendarYear` |  | | `_CalendarDate` | `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | | `_CalendarDate` | `CalendarQuarter` | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` |  | | `_CalendarDate` | `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `LglTransExpirationRangeDaysTxt` |  | |  | `case when LegalTransExpirationInDays >= 0 and LegalTransExpirationInDays <= 30 then '0 - 30' when LegalTransExpirationInDays > 30 and LegalTransExpirationInDays <= 60 then '31 - 60' when LegalTransExpirationInDays > 60 then '> 60' else '#' end` | `CHAR(7)` |  |
| `LglCntntMMainOrg` |  | |  | `case when LglCntntMMainOrgType = '04' then LglCntntMMainOrgSalesOrg when LglCntntMMainOrgType = '05' then LglCntntMMainOrgPurOrg else LglCntntMMainOrgCoCode end` | `CHAR(10)` | Entity ID |
| `LglTransAccessLvl` |  | |  |  | `CHAR(4)` | Access Level |
| `LglCntntMAccessLvlName` |  | |  |  | `CHAR(40)` | Long Text |
| `LglCntntMMainOrgType` |  | |  |  | `CHAR(2)` | Entity Technical Type |
| `LglCntntMMainOrgCoCode` |  | |  |  | `CHAR(10)` | Entity ID |
| `LglCntntMMainOrgSalesOrg` |  | |  |  | `CHAR(10)` | Entity ID |
| `SalesOrganizationName` |  | |  |  | `CHAR(20)` | Sales Organization Description |
| `LglCntntMMainOrgPurOrg` |  | |  |  | `CHAR(10)` | Entity ID |
| `LglCntntMIntegrationType` |  | |  |  | `CHAR(4)` | Integration Variant |
| `LegalTransactionHealthName` |  | |  |  | `CHAR(40)` | Long Text |
| `LglCntntMMainOrgTypeName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `LglCntntMEntityType` |  | |  |  | `CHAR(4)` | Entity Type |
| `LglCntntMEntityTypeName` |  | |  |  | `CHAR(40)` | Long Text |
| `LglCntntMEntity` |  | |  |  | `CHAR(10)` | Entity ID |
| `LglCntntMEntityName` |  | | `_LegalTrEntityAggr` | `LglCntntMEntityName` | `CHAR(81)` |  |
| `LglCntntMMainOrgName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `LglCntntMRnwlTypeName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `LglCntntMLinkdObjTypeName` |  | |  |  | `CHAR(40)` | Long Text |
| `LegalTransTotNmbrOfFinalStatus` |  | |  |  | `INT4(10)` |  |
| `LegalTransTotNrOfOpenStatus` |  | |  |  | `INT4(10)` |  |
| `LegalTransTotNmbrOfOnTrackSts` |  | |  |  | `INT4(10)` |  |
| `TotalNumberOfLegalTransactions` |  | |  |  | `INT4(10)` | Total Numbers of Legal Transaction |
| `TotalNrOfActiveLglTransactions` |  | |  |  | `INT4(10)` |  |
| `LglTransTotNmbrOfAutoRenewed` |  | |  |  | `INT4(10)` |  |
| `TotNrOfLegalTransWithTrggrObj` |  | |  | `case when LglCntntMLinkdObjTypeName is not initial then cast (1 as abap.int4(10) ) else cast (0 as abap.int4(10) ) end` | `INT4(10)` |  |
| `LegalTransTerminationRangeCode` |  | |  | `case when LegalTransTerminationInDays >= 0 and LegalTransTerminationInDays <= 30 then cast('30' as lcm_termn_range_in_days ) when LegalTransTerminationInDays > 30 and LegalTransTerminationInDays <= 60 then cast('60' as lcm_termn_range_in_days ) when LegalTransTerminationInDays > 60 then cast('GT' as lcm_termn_range_in_days ) else cast('#' as lcm_termn_range_in_days ) end` | `CHAR(2)` | Days Range of Legal Transaction to be Terminated |
| `LegalTransRenewalRangeCode` |  | |  | `case when LegalTransRenewalInDays >= 0 and LegalTransRenewalInDays <= 30 then cast('30' as lcm_rnwl_range_in_days ) when LegalTransRenewalInDays > 30 and LegalTransRenewalInDays <= 60 then cast('60' as lcm_rnwl_range_in_days ) when LegalTransRenewalInDays > 60 then cast('GT' as lcm_rnwl_range_in_days ) else cast('#' as lcm_rnwl_range_in_days ) end` | `CHAR(2)` | Days Range of Legal Transaction Renewal |
| `TotNrOfExprdLglTransWthoutRnwl` |  | |  |  | `INT4(10)` | Total Number of Expired Contracts without Renewal |
| `LegalTransTotNmbrOfRenewed` |  | |  |  | `INT4(10)` | Total Number of Renewed Contracts |
| `_ChangedBy` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_CreatedBy` | | ✓ | | | | |
| `_LanguageText` | | ✓ | | | | |
| `_LegalTransactionHealthText` | | ✓ | | | | |
| `_LglCntntMGovLawText` | | ✓ | | | | |
| `_LglCntntMMainOrgTypeText` | | ✓ | | | | |
| `_MainLegalTransactionEntity` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesOrganizationText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extenstion` | `E_LegalTransaction` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALTRANSACTIONCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALTRANSACTIONCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CLCMLTCUBE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck:#CHECK
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@VDM.viewType: #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations:true
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'LT SAP Analytics Cloud - Cube'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Analytics.internalName:#LOCAL

define view C_LegalTransactionCube
  as select from P_LegalTransactionCube
  //Extension
  association [1..1] to E_LegalTransaction as _Extenstion on $projection.LegalTransactionUUID = _Extenstion.LegalTransactionUUID
{
  key LegalTransactionUUID,
      LegalTransaction,
      LegalTransactionTitle,
      @ObjectModel.text.element:  [ 'LegalTransactionHealthName' ]
      LegalTransactionHealth,
      LglCntntMLanguage,
      LglCntntMCreatedByUser,
      CreatedByName,
      LglCntntMCreatedDate,
      LglCntntMChangedByUser,
      ChangedByName,
      LglCntntMChangedUTCDateTime,
      LglCntntMProfile,
      LegalTransactionSource,
      LglCntntMRtntnPerdStartDate,
      LglCntntMContext,
      LglCntntMContextTitle,
      LglCntntMFromDate,
      LglCntntMToDate,
      LglCntntMGovLaw,
      LglCntntMGovLawText,
      LegalTransExpirationInDays,
      _CalendarDate.CalendarYear             as CalendarYear,
      _CalendarDate.CalendarQuarter          as CalendarQuarter,
      _CalendarDate.CalendarMonth            as CalendarMonth,

      case
        when LegalTransExpirationInDays >= 0 and LegalTransExpirationInDays <= 30 then
         '0 - 30'
        when LegalTransExpirationInDays > 30 and LegalTransExpirationInDays <= 60 then
          '31 - 60'
        when LegalTransExpirationInDays > 60 then
          '> 60'
        else '#'
        end                                  as LglTransExpirationRangeDaysTxt,

      case when LglCntntMMainOrgType = '04'
      then LglCntntMMainOrgSalesOrg
      when LglCntntMMainOrgType = '05'
      then LglCntntMMainOrgPurOrg
      else LglCntntMMainOrgCoCode
      end                                    as LglCntntMMainOrg,

      LglTransAccessLvl,
      LglCntntMAccessLvlName,
      LglCntntMMainOrgType,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      LglCntntMMainOrgCoCode,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      LglCntntMMainOrgSalesOrg,
      SalesOrganizationName,
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      LglCntntMMainOrgPurOrg,
      LglCntntMIntegrationType,
      LegalTransactionHealthName,
      LglCntntMMainOrgTypeName,
      LglCntntMEntityType,
      LglCntntMEntityTypeName,
      LglCntntMEntity,
      _LegalTrEntityAggr.LglCntntMEntityName as LglCntntMEntityName,
      //LglCntntMEntityName,
      LglCntntMMainOrgName,
      LglCntntMRnwlTypeName,
      LglCntntMLinkdObjTypeName,
      @DefaultAggregation: #SUM
      LegalTransTotNmbrOfFinalStatus,
      @DefaultAggregation: #SUM
      LegalTransTotNrOfOpenStatus,
      @DefaultAggregation: #SUM
      LegalTransTotNmbrOfOnTrackSts,
      @DefaultAggregation: #SUM
      TotalNumberOfLegalTransactions,
      @DefaultAggregation: #SUM
      TotalNrOfActiveLglTransactions,
      @DefaultAggregation: #SUM
      LglTransTotNmbrOfAutoRenewed,

      @DefaultAggregation: #SUM
      case
       when LglCntntMLinkdObjTypeName is not initial     then
         cast (1 as abap.int4(10) )
       else
         cast (0 as abap.int4(10) )
       end                                   as TotNrOfLegalTransWithTrggrObj,

      case
        when LegalTransTerminationInDays >= 0 and LegalTransTerminationInDays <= 30 then
         cast('30' as lcm_termn_range_in_days )
        when LegalTransTerminationInDays > 30 and LegalTransTerminationInDays <= 60 then
          cast('60' as lcm_termn_range_in_days )
        when LegalTransTerminationInDays > 60 then
          cast('GT' as lcm_termn_range_in_days )
        else
          cast('#' as lcm_termn_range_in_days )
        end                                  as LegalTransTerminationRangeCode,

      case
        when LegalTransRenewalInDays >= 0 and LegalTransRenewalInDays <= 30 then
         cast('30' as lcm_rnwl_range_in_days )
        when LegalTransRenewalInDays > 30 and LegalTransRenewalInDays <= 60 then
          cast('60' as lcm_rnwl_range_in_days )
        when LegalTransRenewalInDays > 60 then
          cast('GT' as lcm_rnwl_range_in_days )
        else
          cast('#' as lcm_rnwl_range_in_days )
        end                                  as LegalTransRenewalRangeCode,

      @DefaultAggregation: #SUM
      TotNrOfExprdLglTransWthoutRnwl,

      @DefaultAggregation: #SUM
      LegalTransTotNmbrOfRenewed,

      _ChangedBy,
      _CompanyCode,
      _CreatedBy,
      _LanguageText,
      _LegalTransactionHealthText,
      _LglCntntMGovLawText,
      _LglCntntMMainOrgTypeText,
      _MainLegalTransactionEntity,
      _PurchasingOrganization,
      _SalesOrganization,
      _SalesOrganizationText
}
```
