---
name: I_FUNDEDPROGRAM
description: "Funded Program"
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDEDPROGRAM')/$value
semantic_en: "Funded Program"
semantic_vi: "Funded Program — CDS view giao diện dựa trên I_FundedProgramBasic."
keywords:
  - "Funded Program"
  - "funded"
  - "program"
  - "financial"
  - "management"
  - "area"
  - "validity"
  - "start"
  - "date"
  - "expiration"
tags:
  - PSM
  - component:PSM
  - interface-view
---
# I_FUNDEDPROGRAM

**Funded Program**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDEDPROGRAM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialManagementArea` | ✓ | |  |  | `CHAR(4)` | Financial Management Area |
| `FundedProgram` | ✓ | |  |  | `CHAR(24)` | Funded Program |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Funded Program Validity Start Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Funded Program Validity End Date |
| `FundedProgramExpirationDate` |  | |  |  | `DATS(8)` | Funded Program Expiration Date |
| `FundedProgramAuthznGrp` |  | |  |  | `CHAR(10)` | Funded Program Authorization Group |
| `FundedPgmFinMgmtAreaForAuthzn` |  | |  |  | `CHAR(4)` | FM Area for Auth Grp for Funded Program |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Funded Program Created by User |
| `CreationDate` |  | |  |  | `DATS(8)` | Funded Program Created on Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Funded Program Created at Time |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Funded Program Changed by User |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Funded Program Changed on Date |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Funded Program Changed at Time |
| `FundedProgramType` |  | |  |  | `CHAR(4)` | Funded Program Type |
| `_FinMgmtArea` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_FundedProgramType` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_FundedProgramHierarchyNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_FundedProgram` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDEDPROGRAM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDEDPROGRAM')/$value)*

```abap
@EndUserText.label: 'Funded Program'
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.internalName: #LOCAL
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_CreatedByUser', '_LastChangedByUser', '_FundedProgramHierarchyNode']
@ObjectModel.representativeKey: 'FundedProgram'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE]
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #S
}
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE 
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IFMFUNDEDPROG'
@AbapCatalog.preserveKey: true
define view I_FundedProgram
  as select from I_FundedProgramBasic
  
    association [1..1] to E_FundedProgram as _Extension  //do not expose this association in the projection list of the view 
       on  $projection.FinancialManagementArea  = _Extension.FinancialManagementArea
       and $projection.FundedProgram            = _Extension.FundedProgram  

{
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_FinMgmtAreaStdVH',
                     element: 'FinancialManagementArea' }
        }]
      @ObjectModel.foreignKey.association: '_FinMgmtArea'
  key FinancialManagementArea,     
      @ObjectModel.text.association: '_Text' 
      @ObjectModel.hierarchy.association: '_FundedProgramHierarchyNode'
  key FundedProgram,
      @Semantics.businessDate.from: true
      ValidityStartDate,
      @Semantics.businessDate.to: true
      ValidityEndDate,
      FundedProgramExpirationDate,
      @EndUserText.label: 'Funded Program Authorization Group'
      FundedProgramAuthznGrp,
      FundedPgmFinMgmtAreaForAuthzn,
      @Consumption.valueHelpDefinition: { entity: { name: 'I_BusinessUserVH', element: 'UserID' } }
      CreatedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      CreationTime,
      @Consumption.valueHelpDefinition: { entity: { name: 'I_BusinessUserVH', element: 'UserID' } }
      LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      LastChangeTime,
      @ObjectModel.foreignKey.association: '_FundedProgramType'
      FundedProgramType,

      _FinMgmtArea,
      _Text,
      _FundedProgramType,
      _CreatedByUser,
      _LastChangedByUser,
      _FundedProgramHierarchyNode      
}
```
