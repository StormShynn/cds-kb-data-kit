---
name: I_CNSLDTNPROFITCENTERHIERARCHY
description: "CNSLDTNProfit CenterHIERARCHY"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - profit-center
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:ProfitCenter
---
# I_CNSLDTNPROFITCENTERHIERARCHY

**CNSLDTNProfit CenterHIERARCHY**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingArea` | ✓ | |  |  |  |  |
| `ConsolidationPrftCtrHierarchy` | ✓ | |  | `cast(_Hierarchy.CnsldtnUniversalHierarchy as fincs_profitcenterhierarchy preserving type )` |  |  |
| `ValidityEndDate` | ✓ | | `_Hierarchy` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_Hierarchy` | `ValidityStartDate` |  |  |
| `LastChangedByUser` |  | | `_Hierarchy` | `LastChangedByUser` |  |  |
| `LastChangeDateTime` |  | | `_Hierarchy` | `LastChangeDateTime` |  |  |
| `_ControllingArea` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingArea` | `I_CnsldtnControllingArea` | [1..1] |
| `_Text` | `I_CnsldtnProfitCenterHierText` | [1..*] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'ICCPRFTCTRHNENH',
  compiler.compareFilter: true
  }
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
  }
@AccessControl:{
  authorizationCheck: #MANDATORY
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
  }
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #S},
  representativeKey: 'ConsolidationPrftCtrHierarchy',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'CnsldtnProfitCenterHierarchy'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Profit Center Hierarchy'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CnsldtnProfitCenterHierarchy
  as select from P_CnsldtnUnivHierarchy_3( P_HierarchyType: 'CS04', P_MasterDataType : 'PRCTR' ) as _Hierarchy

  association [1..1] to I_CnsldtnControllingArea      as _ControllingArea on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [1..*] to I_CnsldtnProfitCenterHierText as _Text            on  $projection.ControllingArea               = _Text.ControllingArea
                                                                          and $projection.ConsolidationPrftCtrHierarchy = _Text.ConsolidationPrftCtrHierarchy

{
        @ObjectModel.foreignKey.association: '_ControllingArea'
        @Consumption.valueHelpDefinition: [{
          entity: {
            name: 'I_CnsldtnControllingAreaVH',
            element: 'ControllingArea'
          }
        }]
        @Hierarchy.notAssignedNode.filter: true
  key   ControllingArea,

        @ObjectModel.text.association: '_Text'
  key   cast(_Hierarchy.CnsldtnUniversalHierarchy as fincs_profitcenterhierarchy preserving type ) as ConsolidationPrftCtrHierarchy,

        @Semantics.businessDate.to: true
  key   _Hierarchy.ValidityEndDate,

        @Semantics.businessDate.from: true
        _Hierarchy.ValidityStartDate,

        @Semantics.user.lastChangedBy: true
        _Hierarchy.LastChangedByUser,

        @Semantics.systemDateTime.lastChangedAt: true
        _Hierarchy.LastChangeDateTime,


        _Text,
        _ControllingArea
};
```
