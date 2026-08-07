---
name: I_CNSLDTNSALESORGANIZATION
description: "CNSLDTNSales Organization"
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
  - bo:SalesOrganization
---
# I_CNSLDTNSALESORGANIZATION

**CNSLDTNSales Organization**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrganization` | ✓ | |  | `cast( SalesOrganization as fincs_salesorganization preserving type )` |  |  |
| `AdditionalMasterDataSource` |  | |  | `cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | |  | `cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type )` |  |  |
| `_Text` | | ✓ | | | | |
| `_SalesOrgHierNode` | | ✓ | | | | |
| `_MDSource` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnSalesOrganizationT` | [0..*] |
| `_SalesOrgHierNode` | `I_CnsldtnSalesOrgHierNode` | [0..*] |
| `_MDSource` | `I_CnsldtnMDSource` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSSALESORG',
  compiler.compareFilter: true,
  viewEnhancementCategory: [ #PROJECTION_LIST, #GROUP_BY ]
  }
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #MANDATORY,
  privilegedAssociations: [ '_SalesOrgHierNode' ]
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #S },
  representativeKey: 'SalesOrganization',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnSalesOrganization'
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Cnsldtn Combined Sales Organization'

// expose only additional master data entity in case of homonymous non-additional master data entity existence

define view I_CnsldtnSalesOrganization
  as select distinct from P_CnsldtnSalesOrganization

  association [0..*] to I_CnsldtnSalesOrganizationT as _Text             on $projection.SalesOrganization = _Text.SalesOrganization

  association [0..*] to I_CnsldtnSalesOrgHierNode   as _SalesOrgHierNode on $projection.SalesOrganization = _SalesOrgHierNode.SalesOrganization

  association [1..1] to I_CnsldtnMDSource           as _MDSource         on $projection.AdditionalMasterDataSource = _MDSource.AdditionalMasterDataSource

{

      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_SalesOrgHierNode'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnSalesOrganizationVH',
          element: 'SalesOrganization'
        }
      }]
  key cast( SalesOrganization as fincs_salesorganization preserving type )                          as SalesOrganization,

      @ObjectModel.foreignKey.association: '_MDSource'
      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )          as AdditionalMasterDataSource,

      cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type ) as CnsldtnIsAdditionalMasterData,


      /* associations */
      _MDSource,
      _Text,
      _SalesOrgHierNode
}
where
  SalesOrganization is not initial //required to avoid access to corrupt database entries
group by
  SalesOrganization
```
