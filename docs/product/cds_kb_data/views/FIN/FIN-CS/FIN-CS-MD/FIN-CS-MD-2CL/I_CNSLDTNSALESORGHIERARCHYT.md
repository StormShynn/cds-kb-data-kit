---
name: I_CNSLDTNSALESORGHIERARCHYT
description: "CNSLDTNSales OrganizationHIERARCHYT"
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
  - sales-organization
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNSALESORGHIERARCHYT

**CNSLDTNSales OrganizationHIERARCHYT**

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
| `CnsldtnSalesOrgHierarchy` | ✓ | |  | `cast(_HierarchyText.UniversalHierarchy as fincs_salesorghierarchy preserving type )` |  |  |
| `ValidityEndDate` | ✓ | | `_HierarchyText` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_HierarchyText` | `ValidityStartDate` |  |  |
| `CnsldtnSalesOrgHierarchyText` |  | |  | `cast(_HierarchyText.UniversalHierarchyText as fincs_salesorghierarchytext preserving type )` |  |  |
| `_Hierarchy` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_CnsldtnSalesOrgHierarchy` | [1..1] |

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
  representativeKey: 'CnsldtnSalesOrgHierarchy',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #LANGUAGE_DEPENDENT_TEXT,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE ],
  sapObjectNodeType.name: 'CnsldtnSalesOrgHierarchyText'                        
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Sales Org Hierarchy - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnSalesOrgHierarchyT
  as select from P_CnsldtnUnivHierarchyText_3(P_HierarchyType : 'CS11', P_MasterDataType : 'VKORG' ) as _HierarchyText

  association [1..1] to I_CnsldtnSalesOrgHierarchy as _Hierarchy on  $projection.CnsldtnSalesOrgHierarchy = _Hierarchy.CnsldtnSalesOrgHierarchy
                                                                 and $projection.ValidityEndDate          = _Hierarchy.ValidityEndDate
{
        @Semantics.language
        @ObjectModel.foreignKey.association: '_Language'
  key   _HierarchyText.Language,

        @ObjectModel.foreignKey.association: '_Hierarchy'
  key   cast(_HierarchyText.UniversalHierarchy as fincs_salesorghierarchy preserving type )         as CnsldtnSalesOrgHierarchy,

        @Semantics.businessDate.to: true
  key   _HierarchyText.ValidityEndDate,

        @Semantics.businessDate.from: true
        _HierarchyText.ValidityStartDate,

        @Semantics.text: true
        cast(_HierarchyText.UniversalHierarchyText as fincs_salesorghierarchytext preserving type ) as CnsldtnSalesOrgHierarchyText,

        _Language,
        _Hierarchy
};
```
