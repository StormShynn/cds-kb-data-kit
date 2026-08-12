---
name: I_CNSLDTNSUPPLIERHIERARCHYT
description: "Cnsldtnsupplierhierarchyt"
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
  - supplier
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:Supplier
---
# I_CNSLDTNSUPPLIERHIERARCHYT

**Cnsldtnsupplierhierarchyt**

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
| `ConsolidationSupplierHierarchy` | ✓ | |  | `cast(_HierarchyText.UniversalHierarchy as fincs_supplierhierarchy preserving type )` |  |  |
| `ValidityEndDate` | ✓ | | `_HierarchyText` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_HierarchyText` | `ValidityStartDate` |  |  |
| `CnsldtnSupplierHierarchyText` |  | |  | `cast(_HierarchyText.UniversalHierarchyText as fincs_supplierhierarchytext preserving type )` |  |  |
| `_Hierarchy` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_CnsldtnSupplierHierarchy` | [1..1] |

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
  representativeKey: 'ConsolidationSupplierHierarchy',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #LANGUAGE_DEPENDENT_TEXT,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE ],
  sapObjectNodeType.name: 'CnsldtnSupplierHierarchyText'                        
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Supplier Hierarchy - Text'

define view entity I_CnsldtnSupplierHierarchyT
  as select from P_CnsldtnUnivHierarchyText_3(P_HierarchyType : 'CS09', P_MasterDataType : 'LIFNR' ) as _HierarchyText

  association [1..1] to I_CnsldtnSupplierHierarchy as _Hierarchy on  $projection.ConsolidationSupplierHierarchy = _Hierarchy.ConsolidationSupplierHierarchy
                                                                 and $projection.ValidityEndDate                = _Hierarchy.ValidityEndDate
{
        @Semantics.language
        @ObjectModel.foreignKey.association: '_Language'
  key   _HierarchyText.Language,

        @ObjectModel.foreignKey.association: '_Hierarchy'
  key   cast(_HierarchyText.UniversalHierarchy as fincs_supplierhierarchy preserving type )         as ConsolidationSupplierHierarchy,

        @Semantics.businessDate.to: true
  key   _HierarchyText.ValidityEndDate,

        @Semantics.businessDate.from: true
        _HierarchyText.ValidityStartDate,

        @Semantics.text: true
        cast(_HierarchyText.UniversalHierarchyText as fincs_supplierhierarchytext preserving type ) as CnsldtnSupplierHierarchyText,

        _Language,
        _Hierarchy
};
```
