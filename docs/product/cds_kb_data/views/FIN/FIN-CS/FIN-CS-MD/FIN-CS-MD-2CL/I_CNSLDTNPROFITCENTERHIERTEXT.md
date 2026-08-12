---
name: I_CNSLDTNPROFITCENTERHIERTEXT
description: "CNSLDTNProfit CenterHIERTEXT"
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
  - text-view
  - profit-center
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:ProfitCenter
---
# I_CNSLDTNPROFITCENTERHIERTEXT

**CNSLDTNProfit CenterHIERTEXT**

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
| `ControllingArea` | ✓ | |  |  |  |  |
| `ConsolidationPrftCtrHierarchy` | ✓ | |  | `cast(_HierarchyText.CnsldtnUniversalHierarchy as fincs_profitcenterhierarchy preserving type )` |  |  |
| `ValidityEndDate` | ✓ | | `_HierarchyText` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_HierarchyText` | `ValidityStartDate` |  |  |
| `CnsldtnProfitCenterHierText` |  | | `_HierarchyText` | `UniversalHierarchyText` |  |  |
| `_ControllingArea` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingArea` | `I_CnsldtnControllingArea` | [1..1] |
| `_Hierarchy` | `I_CnsldtnProfitCenterHierarchy` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCPRFTCTRHRYT',
  compiler.compareFilter: true
  }
@Analytics: {
  dataExtraction.enabled: true
  }
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #L },
  dataCategory: #TEXT,
  representativeKey: 'ConsolidationPrftCtrHierarchy',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnProfitCenterHierText'                        
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Cnsldtn Profit Center Hierarchy - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CnsldtnProfitCenterHierText
  as select from P_CnsldtnUnivHierarchyText_3( P_HierarchyType: 'CS04', P_MasterDataType : 'PRCTR' ) as _HierarchyText

  association [1..1] to I_CnsldtnControllingArea       as _ControllingArea on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [1..1] to I_CnsldtnProfitCenterHierarchy as _Hierarchy       on  $projection.ControllingArea               = _Hierarchy.ControllingArea
                                                                           and $projection.ConsolidationPrftCtrHierarchy = _Hierarchy.ConsolidationPrftCtrHierarchy
                                                                           and $projection.ValidityEndDate               = _Hierarchy.ValidityEndDate

{
        @Semantics.language
        @ObjectModel.foreignKey.association: '_Language'
  key   _HierarchyText.Language,

        @ObjectModel.foreignKey.association: '_ControllingArea'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnControllingAreaVH',
          element: 'ControllingArea'
        }
      }]
  key   ControllingArea,

  key   cast(_HierarchyText.CnsldtnUniversalHierarchy as fincs_profitcenterhierarchy preserving type ) as ConsolidationPrftCtrHierarchy,

        @Semantics.businessDate.to: true
  key   _HierarchyText.ValidityEndDate,

        @Semantics.businessDate.from: true
        _HierarchyText.ValidityStartDate,

        @Semantics.text
        _HierarchyText.UniversalHierarchyText                                                          as CnsldtnProfitCenterHierText,


        _Language,
        _ControllingArea,
        _Hierarchy
};
```
