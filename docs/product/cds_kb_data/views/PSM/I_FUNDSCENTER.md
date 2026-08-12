---
name: I_FUNDSCENTER
description: "Funds Center"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDSCENTER')/$value
semantic_en: "Funds Center"
semantic_vi: "Funds Center — CDS view giao diện (master data) dựa trên I_FundsCenterBasic."
keywords:
  - "Funds Center"
  - "funds"
  - "center"
  - "financial"
  - "management"
  - "area"
  - "validity"
  - "date"
  - "start"
  - "created"
  - "user"
tags:
  - PSM
  - component:PSM
  - interface-view
---
# I_FUNDSCENTER

**Funds Center**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDSCENTER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialManagementArea` | ✓ | |  |  | `CHAR(4)` | Financial Management Area |
| `FundsCenter` | ✓ | |  |  | `CHAR(16)` | Funds Center |
| `ValidityEndDate` | ✓ | |  |  | `DATS(8)` | Funds Center Validity End Date |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Funds Center Validity Start Date |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Funds Center Created by User |
| `CreationDate` |  | |  |  | `DATS(8)` | Funds Center Created on Date |
| `LastChangeUser` |  | |  |  | `CHAR(12)` | Funds Center Last Changed by User |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Funds Center Last Changed on Date |
| `FundsCenterExpirationDate` |  | |  |  | `DATS(8)` | Funds Center Expiration Date |
| `FundsCenterResponsible` |  | |  |  | `CHAR(12)` | Funds Center Manager in Organization Model |
| `FundsCenterManager` |  | |  |  | `CHAR(12)` | Funds Center Manager |
| `FundsCenterResponsibleName` |  | |  |  | `CHAR(20)` | Name of Person Responsible |
| `FundsCenterDefaultFund` |  | |  |  | `CHAR(10)` | Default Fund Value in a Funds Center |
| `FundsCenterAuthznGrp` |  | |  |  | `CHAR(10)` | Funds Center Authorization Group |
| `FndsCenterFinMgmtAreaForAuthzn` |  | |  |  | `CHAR(4)` | FM Area for Auth Grp for Funds Center |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `_FinMgmtArea` | | ✓ | | | | |
| `_Fund` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_FundsCenterManager` | | ✓ | | | | |
| `_FundsCenterHierarchyNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_FundsCenter` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDSCENTER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDSCENTER')/$value)*

```abap
@EndUserText.label: 'Funds Center'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true, internalName: #LOCAL }
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_CreatedByUser', '_LastChangedByUser', '_FundsCenterHierarchyNode']
@ObjectModel: {
  representativeKey: 'FundsCenter',
  usageType: { 
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #M
  },
  supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]
}
@ObjectModel.sapObjectNodeType.name: 'FundsCenter'
@Metadata.ignorePropagatedAnnotations:true
@Metadata.allowExtensions:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IFUNDSCENTER'
@AbapCatalog.preserveKey: true
define view I_FundsCenter
  as select from I_FundsCenterBasic

    association [1..1] to E_FundsCenter as _Extension  //do not expose this association in the projection list of the view 
       on  $projection.FinancialManagementArea  = _Extension.FinancialManagementArea
       and $projection.FundsCenter              = _Extension.FundsCenter
       and $projection.ValidityEndDate          = _Extension.ValidityEndDate

{
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_FinMgmtAreaStdVH',
                     element: 'FinancialManagementArea' }
        }]
      @ObjectModel.foreignKey.association: '_FinMgmtArea'
  key FinancialManagementArea,
      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_FundsCenterHierarchyNode'
  key FundsCenter,
      @Semantics.businessDate.to: true
  key ValidityEndDate,
      @Semantics.businessDate.from: true
      ValidityStartDate,
      @Consumption.valueHelpDefinition: { entity: { name: 'I_BusinessUserVH', element: 'UserID' } }
      CreatedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      @Consumption.valueHelpDefinition: { entity: { name: 'I_BusinessUserVH', element: 'UserID' } }
      LastChangeUser,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate, 
      FundsCenterExpirationDate,   
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'FundsCenterManager'
      FundsCenterResponsible,
      FundsCenterManager,
      FundsCenterResponsibleName,
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_FundStdVH',
                     element: 'Fund' },
          additionalBinding: [{ localElement: 'FinancialManagementArea',
                                element: 'FinancialManagementArea' }]
        }]
      @ObjectModel.foreignKey.association: '_Fund'
      FundsCenterDefaultFund,
      @EndUserText.label          : 'Funds Center Authorization Group'
      FundsCenterAuthznGrp,
      FndsCenterFinMgmtAreaForAuthzn,
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_BusinessAreaStdVH',
                     element: 'BusinessArea' }
        }]
      @ObjectModel.foreignKey.association: '_BusinessArea'
      BusinessArea,
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ProfitCenterStdVH',
                     element: 'ProfitCenter' }
        }]
//      @ObjectModel.foreignKey.association: '_ProfitCenter'
      ProfitCenter,

      _FinMgmtArea,
      _Fund,
      _Text,
      _CompanyCode,
      _BusinessArea,
      _CreatedByUser,
      _LastChangedByUser,
      _FundsCenterManager,
      _FundsCenterHierarchyNode
 //     _ProfitCenter        
      
}
```
