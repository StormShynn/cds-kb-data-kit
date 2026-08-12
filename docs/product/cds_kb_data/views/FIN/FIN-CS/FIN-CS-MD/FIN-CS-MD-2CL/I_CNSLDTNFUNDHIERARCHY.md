---
name: I_CNSLDTNFUNDHIERARCHY
description: "Cnsldtnfundhierarchy"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFUNDHIERARCHY

**Cnsldtnfundhierarchy**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialManagementArea` | ✓ | |  | `cast (left(_Hierarchy.HierarchyClass, 4 ) as fincs_financialmanagementarea preserving type )` |  |  |
| `CnsldtnFundHierarchy` | ✓ | |  | `cast(_Hierarchy.UniversalHierarchy as fincs_fundhierarchy preserving type )` |  |  |
| `ValidityEndDate` | ✓ | | `_Hierarchy` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_Hierarchy` | `ValidityStartDate` |  |  |
| `LastChangedByUser` |  | | `_Hierarchy` | `LastChangedByUser` |  |  |
| `LastChangeDateTime` |  | | `_Hierarchy` | `LastChangeDateTime` |  |  |
| `_FinancialManagementArea` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinancialManagementArea` | `I_CnsldtnFinManagementArea` | [1..1] |
| `_Text` | `I_CnsldtnFundHierarchyT` | [0..*] |

## Source Code

```abap
@Analytics: {
//  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #S
  },
  representativeKey: 'CnsldtnFundHierarchy',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'CnsldtnFundHierarchy'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Fund Hierarchy'
define view entity I_CnsldtnFundHierarchy
  as select from P_CnsldtnUnivHierarchy_3(P_HierarchyType : 'CS25', P_MasterDataType : 'RFUND' ) as _Hierarchy

  //  prevent exposure of result set in case the assigned business switch is disabled
    inner join   I_CnsldtnBusinessSwitch                                                         as _BusinessSwitch on  _BusinessSwitch.ConsolidationBusinessSwitch    = 'FINCS_ENABLE_PS_FIELDS'
                                                                                                                    and _BusinessSwitch.CnsldtnBusinessSwitchIsEnabled = 'X'


  association [1..1] to I_CnsldtnFinManagementArea as _FinancialManagementArea on  $projection.FinancialManagementArea = _FinancialManagementArea.FinancialManagementArea

  association [0..*] to I_CnsldtnFundHierarchyT    as _Text                    on  $projection.FinancialManagementArea = _Text.FinancialManagementArea
                                                                               and $projection.CnsldtnFundHierarchy    = _Text.CnsldtnFundHierarchy
{
       @Consumption.valueHelpDefinition: [{
         entity: {
           name: 'I_CnsldtnFinManagementAreaVH',
           element: 'FinancialManagementArea'
         }
       }]
       @ObjectModel.foreignKey.association: '_FinancialManagementArea'
       @Hierarchy.notAssignedNode.filter: true     
  key  cast (left(_Hierarchy.HierarchyClass, 4  ) as fincs_financialmanagementarea preserving type ) as FinancialManagementArea,

       @ObjectModel.text.association: '_Text'
  key  cast(_Hierarchy.UniversalHierarchy as fincs_fundhierarchy preserving type )                   as CnsldtnFundHierarchy,

       @Semantics.businessDate.to: true
  key  _Hierarchy.ValidityEndDate,

       @Semantics.businessDate.from: true
       _Hierarchy.ValidityStartDate,

       @Semantics.user.lastChangedBy: true
       _Hierarchy.LastChangedByUser,

       @Semantics.systemDateTime.lastChangedAt: true
       _Hierarchy.LastChangeDateTime,


       /* associations */
       _FinancialManagementArea,
       _Text
}
```
