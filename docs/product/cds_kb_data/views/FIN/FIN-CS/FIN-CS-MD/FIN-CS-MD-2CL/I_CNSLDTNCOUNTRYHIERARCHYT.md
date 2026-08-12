---
name: I_CNSLDTNCOUNTRYHIERARCHYT
description: "Cnsldtncountryhierarchyt"
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
  - country
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNCOUNTRYHIERARCHYT

**Cnsldtncountryhierarchyt**

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
| `ConsolidationCountryHierarchy` | ✓ | |  | `cast(_HierarchyText.UniversalHierarchy as fincs_countryhierarchy preserving type )` |  |  |
| `ValidityEndDate` | ✓ | | `_HierarchyText` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_HierarchyText` | `ValidityStartDate` |  |  |
| `CnsldtnCountryHierarchyText` |  | |  | `cast(_HierarchyText.UniversalHierarchyText as fincs_countryhierarchytext preserving type )` |  |  |
| `_Hierarchy` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_CnsldtnCountryHierarchy` | [1..1] |

## Source Code

```abap
@Analytics: {
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
  representativeKey: 'ConsolidationCountryHierarchy',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #LANGUAGE_DEPENDENT_TEXT,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE ],
  sapObjectNodeType.name: 'CnsldtnCountryHierarchyText'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Country/Region Hierarchy - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnCountryHierarchyT
  as select from P_CnsldtnUnivHierarchyText_3(P_HierarchyType : 'CS14', P_MasterDataType : 'LAND1' ) as _HierarchyText

  association [1..1] to I_CnsldtnCountryHierarchy as _Hierarchy on  $projection.ConsolidationCountryHierarchy = _Hierarchy.ConsolidationCountryHierarchy
                                                                and $projection.ValidityEndDate               = _Hierarchy.ValidityEndDate
{
        @Semantics.language
        @ObjectModel.foreignKey.association: '_Language'
  key   _HierarchyText.Language,

        @ObjectModel.foreignKey.association: '_Hierarchy'
  key   cast(_HierarchyText.UniversalHierarchy as fincs_countryhierarchy preserving type )         as ConsolidationCountryHierarchy,

        @Semantics.businessDate.to: true
  key   _HierarchyText.ValidityEndDate,

        @Semantics.businessDate.from: true
        _HierarchyText.ValidityStartDate,

        @Semantics.text: true
        cast(_HierarchyText.UniversalHierarchyText as fincs_countryhierarchytext preserving type ) as CnsldtnCountryHierarchyText,

        _Language,
        _Hierarchy
}
```
