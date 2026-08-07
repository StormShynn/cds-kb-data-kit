---
name: I_CNSLDTNFUNDHIERARCHYT
description: "Cnsldtnfundhierarchyt"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
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
# I_CNSLDTNFUNDHIERARCHYT

**Cnsldtnfundhierarchyt**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_HierarchyText` | `Language` |  |  |
| `FinancialManagementArea` | ✓ | |  | `cast (left(_HierarchyText.HierarchyClass, 4 ) as fincs_financialmanagementarea preserving type )` |  |  |
| `CnsldtnFundHierarchy` | ✓ | |  | `cast(_HierarchyText.UniversalHierarchy as fincs_fundhierarchy preserving type )` |  |  |
| `ValidityEndDate` | ✓ | | `_HierarchyText` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_HierarchyText` | `ValidityStartDate` |  |  |
| `CnsldtnFundHierarchyText` |  | |  | `cast(_HierarchyText.UniversalHierarchyText as fincs_fundhierarchytext preserving type )` |  |  |
| `_FinancialManagementArea` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinancialManagementArea` | `I_CnsldtnFinManagementArea` | [1..1] |
| `_Hierarchy` | `I_CnsldtnFundHierarchy` | [1..1] |

## Source Code

```abap
@Analytics: {
//  dataCategory: #DIMENSION, // cannot be set for a text view entity
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata:{
  ignorePropagatedAnnotations:true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #M
  },
  representativeKey: 'CnsldtnFundHierarchy',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #LANGUAGE_DEPENDENT_TEXT,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE ],
  sapObjectNodeType.name: 'CnsldtnFundHierarchyText'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Fund Hierarchy - Text'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CnsldtnFundHierarchyT
  as select from P_CnsldtnUnivHierarchyText_3(P_HierarchyType : 'CS25', P_MasterDataType : 'RFUND' ) as _HierarchyText
  //  prevent exposure of result set in case the assigned business switch is disabled
    inner join   I_CnsldtnBusinessSwitch                                                             as _BusinessSwitch on  _BusinessSwitch.ConsolidationBusinessSwitch    = 'FINCS_ENABLE_PS_FIELDS'
                                                                                                                        and _BusinessSwitch.CnsldtnBusinessSwitchIsEnabled = 'X'
  association [1..1] to I_CnsldtnFinManagementArea as _FinancialManagementArea on  $projection.FinancialManagementArea = _FinancialManagementArea.FinancialManagementArea
  
  association [1..1] to I_CnsldtnFundHierarchy     as _Hierarchy               on  $projection.FinancialManagementArea = _Hierarchy.FinancialManagementArea
                                                                               and $projection.CnsldtnFundHierarchy    = _Hierarchy.CnsldtnFundHierarchy
                                                                               and $projection.ValidityEndDate         = _Hierarchy.ValidityEndDate

{

        @Semantics.language
        @ObjectModel.foreignKey.association: '_Language'
  key   _HierarchyText.Language                                                                           as Language,

        @Consumption.valueHelpDefinition: [{
                   entity: {
                     name: 'I_CnsldtnFinManagementAreaVH',
                     element: 'FinancialManagementArea'
                   }
                 }]
        @ObjectModel.foreignKey.association: '_FinancialManagementArea'
  key   cast (left(_HierarchyText.HierarchyClass, 4 ) as fincs_financialmanagementarea preserving type ) as FinancialManagementArea,

  key   cast(_HierarchyText.UniversalHierarchy as fincs_fundhierarchy preserving type )                   as CnsldtnFundHierarchy,

        @Semantics.businessDate.to: true
  key   _HierarchyText.ValidityEndDate,

        @Semantics.businessDate.from: true
        _HierarchyText.ValidityStartDate,

        @Semantics.text: true
        cast(_HierarchyText.UniversalHierarchyText as fincs_fundhierarchytext preserving type )           as CnsldtnFundHierarchyText,


        /* associations */
        _HierarchyText._Language,
        _FinancialManagementArea,
        _Hierarchy
};
```
