---
name: I_CNSLDTNFINSRVCSPRODGRPHIERT
description: Cnsldtnfinsrvcsprodgrphiert
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
# I_CNSLDTNFINSRVCSPRODGRPHIERT

**Cnsldtnfinsrvcsprodgrphiert**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `_HierarchyText.Language` |
| key `CnsldtnFinSrvcsProdGroupHier` | `cast(_HierarchyText.UniversalHierarchy as fincs_finsrvcsprodgrphier preserving type )` |
| key `ValidityEndDate` | `_HierarchyText.ValidityEndDate` |
| `ValidityStartDate` | `_HierarchyText.ValidityStartDate` |
| `CnsldtnFinSrvcsProdGrpHierText` | `cast(_HierarchyText.UniversalHierarchyText as fincs_finsrvcsprodgrphiertext preserving type )` |
| `_Hierarchy` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_CnsldtnFinSrvcsProdGrpHier` | [1..1] |

## Source Code

```abap
@Analytics: {
//  dataCategory: #DIMENSION, // cannot be set for a text view entity
  internalName: #LOCAL,
  dataExtraction.enabled: true,
  technicalName: 'ICSFSPRDGRPHRYT'
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
  representativeKey: 'CnsldtnFinSrvcsProdGroupHier',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #LANGUAGE_DEPENDENT_TEXT,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE ],
  sapObjectNodeType.name: 'CnsldtnFinSrvcsProdGrpHierText'                        
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Fin Srvcs Prod Group Hier - Text'

define view entity I_CnsldtnFinSrvcsProdGrpHierT
  as select from P_CnsldtnUnivHierarchyText_3(P_HierarchyType : 'CS24', P_MasterDataType : 'FS_PRODUCT_GROUP' ) as _HierarchyText

  // prevent exposure of result set in case the assigned business switch is disabled
    inner join   I_CnsldtnBusinessSwitch                                                                        as _BusinessSwitch on  _BusinessSwitch.ConsolidationBusinessSwitch    = 'FINCS_ENABLE_FS_FIELDS'
                                                                                                                                   and _BusinessSwitch.CnsldtnBusinessSwitchIsEnabled = 'X'

  association [1..1] to I_CnsldtnFinSrvcsProdGrpHier as _Hierarchy on  $projection.CnsldtnFinSrvcsProdGroupHier = _Hierarchy.CnsldtnFinSrvcsProdGroupHier
                                                                   and $projection.ValidityEndDate              = _Hierarchy.ValidityEndDate
{
        @Semantics.language
        @ObjectModel.foreignKey.association: '_Language'
  key   _HierarchyText.Language,

        @ObjectModel.foreignKey.association: '_Hierarchy'
  key   cast(_HierarchyText.UniversalHierarchy as fincs_finsrvcsprodgrphier preserving type )         as CnsldtnFinSrvcsProdGroupHier,

        @Semantics.businessDate.to: true
  key   _HierarchyText.ValidityEndDate,

        @Semantics.businessDate.from: true
        _HierarchyText.ValidityStartDate,

        @Semantics.text: true
        cast(_HierarchyText.UniversalHierarchyText as fincs_finsrvcsprodgrphiertext preserving type ) as CnsldtnFinSrvcsProdGrpHierText,


        /* associations */
        _HierarchyText._Language,
        _Hierarchy
}
```
