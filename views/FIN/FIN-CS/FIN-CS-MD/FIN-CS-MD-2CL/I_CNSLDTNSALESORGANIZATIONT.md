---
name: I_CNSLDTNSALESORGANIZATIONT
description: CNSLDTNSales OrganizationT
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
# I_CNSLDTNSALESORGANIZATIONT

**CNSLDTNSales OrganizationT**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_Source` | `Language` |  |  |
| `SalesOrganization` | ✓ | |  | `cast( _Source.SalesOrganization as fincs_salesorganization preserving type )` |  |  |
| `AdditionalMasterDataSource` |  | |  | `cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type )` |  |  |
| `AdditionalMasterDataText` |  | |  | `cast ( _Source.SalesOrganizationName as fincs_description_text_20 preserving type )` |  |  |
| `SalesOrganizationName` |  | |  | `cast( _Source.SalesOrganizationName as fincs_salesorganizationname preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Source` | `CnsldtnIsAdditionalMasterData` |  |  |
| `_Language` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_SalesOrganization` | `I_CnsldtnSalesOrganization` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSSALESORGT'
  }
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #MANDATORY
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #S},
  representativeKey: 'SalesOrganization',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnSalesOrganizationText'                        
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Cmbnd Sales Organization - Txt'
define view I_CnsldtnSalesOrganizationT
  as select distinct from P_CnsldtnSalesOrganizationT as _Source

    inner join            I_CnsldtnSalesOrganization  as _Main on  _Main.SalesOrganization             = _Source.SalesOrganization
                                                               and _Main.CnsldtnIsAdditionalMasterData = _Source.CnsldtnIsAdditionalMasterData

  association [1..1] to I_Language                 as _Language          on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnSalesOrganization as _SalesOrganization on $projection.SalesOrganization = _SalesOrganization.SalesOrganization
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key _Source.Language,

      @ObjectModel.foreignKey.association: '_SalesOrganization'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnSalesOrganizationVH',
          element: 'SalesOrganization'
        }
      }]
  key cast( _Source.SalesOrganization as fincs_salesorganization preserving type )         as SalesOrganization,

      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type ) as AdditionalMasterDataSource,

      @Semantics.text
      @API.element: {releaseState: #DEPRECATED, successor: 'SalesOrganizationName'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'SalesOrganizationName' }
      cast ( _Source.SalesOrganizationName as fincs_description_text_20 preserving type )  as AdditionalMasterDataText,

      @Semantics.text
      cast( _Source.SalesOrganizationName as fincs_salesorganizationname preserving type ) as SalesOrganizationName,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations */
      _Language,
      _SalesOrganization
}
where
  _Source.Language is not null
```
