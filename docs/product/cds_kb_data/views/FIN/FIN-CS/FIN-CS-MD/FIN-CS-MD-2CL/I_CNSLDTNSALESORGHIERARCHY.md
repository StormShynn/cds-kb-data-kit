---
name: I_CNSLDTNSALESORGHIERARCHY
description: "CNSLDTNSales OrganizationHIERARCHY"
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
  - sales-organization
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNSALESORGHIERARCHY

**CNSLDTNSales OrganizationHIERARCHY**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CnsldtnSalesOrgHierarchy` | ✓ | |  | `cast(_Hierarchy.UniversalHierarchy as fincs_salesorghierarchy preserving type )` |  |  |
| `ValidityEndDate` | ✓ | | `_Hierarchy` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_Hierarchy` | `ValidityStartDate` |  |  |
| `LastChangedByUser` |  | | `_Hierarchy` | `LastChangedByUser` |  |  |
| `LastChangeDateTime` |  | | `_Hierarchy` | `LastChangeDateTime` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnSalesOrgHierarchyT` | [0..*] |

## Source Code

```abap
@Analytics: {
  dataCategory: #DIMENSION,
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
  representativeKey: 'CnsldtnSalesOrgHierarchy',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'CnsldtnSalesOrgHierarchy'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Sales Organization Hierarchy'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnSalesOrgHierarchy
  as select from P_CnsldtnUnivHierarchy_3( P_HierarchyType: 'CS11', P_MasterDataType : 'VKORG' ) as _Hierarchy

  association [0..*] to I_CnsldtnSalesOrgHierarchyT as _Text on $projection.CnsldtnSalesOrgHierarchy = _Text.CnsldtnSalesOrgHierarchy

{
      @ObjectModel.text.association: '_Text'
  key cast(_Hierarchy.UniversalHierarchy as fincs_salesorghierarchy preserving type ) as CnsldtnSalesOrgHierarchy,

      @Semantics.businessDate.to: true
  key _Hierarchy.ValidityEndDate,

      @Semantics.businessDate.from: true
      _Hierarchy.ValidityStartDate,

      @Semantics.user.lastChangedBy: true
      _Hierarchy.LastChangedByUser,

      @Semantics.systemDateTime.lastChangedAt: true
      _Hierarchy.LastChangeDateTime,

      _Text
};
```
