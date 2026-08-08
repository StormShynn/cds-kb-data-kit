---
name: I_CNSLDTNSALESORGHIERNODET
description: "CNSLDTNSales OrganizationHIERNODET"
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
  - sales-organization
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNSALESORGHIERNODET

**CNSLDTNSales OrganizationHIERNODET**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_HierarchyNodeText` | `Language` |  |  |
| `CnsldtnSalesOrgHierarchy` | ✓ | |  | `cast(_HierarchyNodeText.UniversalHierarchy as fincs_salesorghierarchy preserving type )` |  |  |
| `HierarchyNode` | ✓ | | `_HierarchyNodeText` | `HierarchyNode` |  |  |
| `ValidityEndDate` | ✓ | | `_HierarchyNodeText` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_HierarchyNodeText` | `ValidityStartDate` |  |  |
| `ParentNode` |  | | `_HierarchyNodeText` | `ParentNode` |  |  |
| `HierarchyVersion` |  | | `_HierarchyNodeText` | `HierarchyVersion` |  |  |
| `HierarchyNodeText` |  | | `_HierarchyNodeText` | `HierarchyNodeText` |  |  |
| `_Hierarchy` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_CnsldtnSalesOrgHierarchy` | [0..*] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata:{
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #L
  },
  dataCategory: #TEXT,
  representativeKey: 'HierarchyNode',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT],
  sapObjectNodeType.name: 'CnsldtnSalesOrgHierNodeText'                        
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Sales Org Hier Node - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnSalesOrgHierNodeT
  as select from P_CnsldtnUnivHierNodeText_3(P_HierarchyType : 'CS11', P_MasterDataType : 'VKORG' ) as _HierarchyNodeText

  association [0..*] to I_CnsldtnSalesOrgHierarchy as _Hierarchy on $projection.CnsldtnSalesOrgHierarchy = _Hierarchy.CnsldtnSalesOrgHierarchy
{
         @Semantics.language: true
         @ObjectModel.foreignKey.association: '_Language'
  key    _HierarchyNodeText.Language,

         @ObjectModel.foreignKey.association: '_Hierarchy'
  key    cast(_HierarchyNodeText.UniversalHierarchy as fincs_salesorghierarchy preserving type ) as CnsldtnSalesOrgHierarchy,

  key    _HierarchyNodeText.HierarchyNode,

         @Semantics.businessDate.to: true
  key    _HierarchyNodeText.ValidityEndDate,

         @Semantics.businessDate.from: true
         _HierarchyNodeText.ValidityStartDate,

         _HierarchyNodeText.ParentNode,

         _HierarchyNodeText.HierarchyVersion,

         @Semantics.text: true
         _HierarchyNodeText.HierarchyNodeText,

         _Language,
         _Hierarchy
};
```
