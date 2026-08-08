---
name: I_CNSLDTNCUSTOMERGROUPT
description: "Cnsldtncustomergroupt"
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
  - customer
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:Customer
---
# I_CNSLDTNCUSTOMERGROUPT

**Cnsldtncustomergroupt**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( _Source.Language as spras preserving type )` |  |  |
| `CustomerGroup` | ✓ | |  | `cast( _Source.CustomerGroup as fincs_customergroup preserving type )` |  |  |
| `AdditionalMasterDataSource` |  | |  | `cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type )` |  |  |
| `AdditionalMasterDataText` |  | |  | `cast( _Source.CustomerGroupName as fincs_description_text_20 preserving type )` |  |  |
| `CustomerGroupName` |  | |  | `cast( _Source.CustomerGroupName as fincs_customergroupname preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Source` | `CnsldtnIsAdditionalMasterData` |  |  |
| `_Language` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_CustomerGroup` | `I_CnsldtnCustomerGroup` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSCUSTOMERGPT',
  compiler.compareFilter: true
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
    sizeCategory: #L},
  representativeKey: 'CustomerGroup',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnCustomerGroupText'                        
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Combined Customer Group - Text'
define view I_CnsldtnCustomerGroupT
  as select distinct from P_CnsldtnCustomerGroupT as _Source

    inner join            I_CnsldtnCustomerGroup  as _Main on  _Main.CustomerGroup                 = _Source.CustomerGroup
                                                           and _Main.CnsldtnIsAdditionalMasterData = _Source.CnsldtnIsAdditionalMasterData

  association [1..1] to I_Language             as _Language      on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnCustomerGroup as _CustomerGroup on $projection.CustomerGroup = _CustomerGroup.CustomerGroup
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast( _Source.Language as spras preserving type )                                    as Language,

      @ObjectModel.foreignKey.association: '_CustomerGroup'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnCustomerGroupVH',
          element: 'CustomerGroup'
        }
      }]
  key cast( _Source.CustomerGroup as fincs_customergroup preserving type )                 as CustomerGroup,

      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type ) as AdditionalMasterDataSource,

      @Semantics.text
      @API.element: {releaseState: #DEPRECATED, successor: 'CustomerGroupName'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CustomerGroupName' }
      cast( _Source.CustomerGroupName as fincs_description_text_20 preserving type )       as AdditionalMasterDataText,

      @Semantics.text
      cast( _Source.CustomerGroupName as fincs_customergroupname preserving type )         as CustomerGroupName,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations */
      _Language,
      _CustomerGroup
}
where
  _Source.Language is not null
```
