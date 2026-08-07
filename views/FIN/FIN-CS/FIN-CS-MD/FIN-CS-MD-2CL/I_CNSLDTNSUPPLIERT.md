---
name: I_CNSLDTNSUPPLIERT
description: Cnsldtnsuppliert
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
  - supplier
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:Supplier
---
# I_CNSLDTNSUPPLIERT

**Cnsldtnsuppliert**

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
| `Supplier` | ✓ | |  | `cast( _Source.Supplier as fincs_supplier preserving type )` |  |  |
| `AdditionalMasterDataSource` |  | |  | `cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type )` |  |  |
| `AdditionalMasterDataText` |  | |  | `cast( _Source.SupplierName as fincs_description_text_80 preserving type )` |  |  |
| `SupplierName` |  | |  | `cast( _Source.SupplierName as fincs_suppliername preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Source` | `CnsldtnIsAdditionalMasterData` |  |  |
| `_Language` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_Supplier` | `I_CnsldtnSupplier` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSSUPPLIERT',
  compiler.compareFilter: true
}
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #MANDATORY,
  personalData.blocking: #NOT_REQUIRED
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #XL},
  representativeKey: 'Supplier',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnSupplierText'                         
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Combined Supplier - Text'
define view I_CnsldtnSupplierT
  as select distinct from P_CnsldtnSupplierT as _Source

    inner join            I_CnsldtnSupplier  as _Main on  _Main.Supplier                      = _Source.Supplier
                                                      and _Main.CnsldtnIsAdditionalMasterData = _Source.CnsldtnIsAdditionalMasterData

  association [1..1] to I_Language        as _Language on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnSupplier as _Supplier on $projection.Supplier = _Supplier.Supplier
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast( _Source.Language as spras preserving type )                                    as Language,

      @ObjectModel.foreignKey.association: '_Supplier'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnSupplierVH',
          element: 'Supplier'
        }
      }]
  key cast( _Source.Supplier as fincs_supplier preserving type )                           as Supplier,

      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type ) as AdditionalMasterDataSource,

      @Semantics.text
      @API.element: {releaseState: #DEPRECATED, successor: 'SupplierName'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'SupplierName' }
      cast( _Source.SupplierName as fincs_description_text_80 preserving type )            as AdditionalMasterDataText,

      @Semantics.text
      cast( _Source.SupplierName as fincs_suppliername preserving type )                   as SupplierName,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations */
      _Language,
      _Supplier
}
where
  _Source.Language is not null
```
