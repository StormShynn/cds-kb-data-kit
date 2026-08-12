---
name: I_FUND
description: "This CDS view provides the master data for a fund, which can be used to answer the following business questions: What is the fund type? What is the frequency of fund?"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUND')/$value
semantic_en: "This CDS view provides the master data for a fund, which can be used to answer the following business questions: What is the fund type? What is the frequency of fund?"
semantic_vi: "Fund — CDS view giao diện dựa trên I_FundBasic."
keywords:
  - "Fund"
  - "fund"
  - "financial"
  - "management"
  - "area"
  - "customer"
  - "application"
  - "funds"
  - "created"
tags:
  - PSM
  - bo:businesspartner
  - component:PSM
  - interface-view
  - master-data
---
# I_FUND

**This CDS view provides the master data for a fund, which can be used to answer the following business questions: What is the fund type? What is the frequency of fund?**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUND')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialManagementArea` | ✓ | |  |  | `CHAR(4)` | Financial Management Area |
| `Fund` | ✓ | |  |  | `CHAR(10)` | Fund |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Account Number for Fund |
| `ApplicationOfFunds` |  | |  |  | `CHAR(16)` | Application of Funds |
| `FundCreatedBy` |  | |  |  | `CHAR(12)` | Fund Created by User |
| `FundCreatedAt` |  | |  |  | `DATS(8)` | Fund Created on Date |
| `LastChangeUser` |  | |  |  | `CHAR(12)` | Fund Last Changed by User |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Fund Last Changed on Date |
| `FundAuthznGrp` |  | |  |  | `CHAR(10)` | Fund Authorization Group |
| `FundFinMgmtAreaForAuthzn` |  | |  |  | `CHAR(4)` | FM Area for Auth Grp for Fund |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Fund Valid From |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Fund Valid To |
| `FundReversalDate` |  | |  |  | `DATS(8)` | Fund Reversal Date |
| `FundExpirationDate` |  | |  |  | `DATS(8)` | Fund Expiration Date |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
| `FundPeriodicity` |  | |  |  | `CHAR(10)` | Fund Frequency |
| `FundResponsibleUser` |  | |  |  | `CHAR(12)` | Responsible User for Fund |
| `_FundAuthznGrp` | | ✓ | | | | |
| `_FundType` | | ✓ | | | | |
| `_FinMgmtArea` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_ApplicationOfFund` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_FundPeriodicity` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_FundHierarchyNode` | | ✓ | | | | |
| `_FundToBudgetPeriod` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_Fund` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUND')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUND')/$value)*

```abap
@EndUserText.label: 'Fund'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true, internalName: #LOCAL }
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_CreatedByUser', '_LastChangedByUser']
@ObjectModel.representativeKey: 'Fund'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #L
}
@ObjectModel.sapObjectNodeType.name: 'Fund'
@Metadata.ignorePropagatedAnnotations:true
@Metadata.allowExtensions:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IFUND'
@AbapCatalog.preserveKey: true
define view I_Fund
  as select from I_FundBasic
  
     association [1..1] to E_Fund as _Extension  //do not expose this association in the projection list of the view 
       on  $projection.Fund                       = _Extension.Fund
       and $projection.FinancialManagementArea    = _Extension.FinancialManagementArea

{
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_FinMgmtAreaStdVH',
                     element: 'FinancialManagementArea' }
        }]
      @ObjectModel.foreignKey.association: '_FinMgmtArea'
  key FinancialManagementArea,

      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_FundHierarchyNode'
  key Fund,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Customer_VH',
                     element: 'Customer' }
        }]
      @ObjectModel.foreignKey.association: '_Customer'
      Customer,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ApplicationOfFund',
                     element: 'ApplicationOfFunds' },
          additionalBinding: [{ localElement: 'FinancialManagementArea',
                                element: 'FinancialManagementArea' }]
        }]
      @ObjectModel.foreignKey.association: '_ApplicationOfFund'
      ApplicationOfFunds,
      @Consumption.valueHelpDefinition: { entity: { name: 'I_BusinessUserVH', element: 'UserID' } }
      FundCreatedBy,
//      @ObjectModel.readOnly: true --> leads to ATC error    
      @Semantics.systemDate.createdAt: true
      FundCreatedAt,
//      @ObjectModel.readOnly: true --> leads to ATC error
      @Consumption.valueHelpDefinition: { entity: { name: 'I_BusinessUserVH', element: 'UserID' } }
      LastChangeUser,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      @Consumption.valueHelpDefinition: [
      { entity:  { name:    'I_FundAuthznGrp',
              element: 'FundAuthznGrp' }
      }]
      @ObjectModel.foreignKey.association: '_FundAuthznGrp'
      @EndUserText.label: 'Fund Authorization Group'
      FundAuthznGrp,
      FundFinMgmtAreaForAuthzn,
      @Semantics.businessDate.from: true
      ValidityStartDate,
      @Semantics.businessDate.to: true
      ValidityEndDate,
      FundReversalDate,
      FundExpirationDate,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_FundType',
                     element: 'FundType' },
          additionalBinding: [{ localElement: 'FinancialManagementArea',
                                element: 'FinancialManagementArea' }]
        }]
      @ObjectModel.foreignKey.association: '_FundType'
      FundType,
      @Consumption.valueHelpDefinition: [
       { entity:  { name:    'I_FundPeriodicity',
                    element: 'FundPeriodicity' }
       }]
      @ObjectModel.foreignKey.association: '_FundPeriodicity'
      FundPeriodicity,
      FundResponsibleUser,
      _FundAuthznGrp,
      _FundType,
      _FinMgmtArea,
      _Text,
      _ApplicationOfFund,
      _Customer,
      _FundPeriodicity,
      _CreatedByUser,
      _LastChangedByUser,
      _FundHierarchyNode,
      _FundToBudgetPeriod      

}
```
