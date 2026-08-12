---
name: I_CNSLDTNFINSRVCSPRODUCTGROUPT
description: "Cnsldtnfinsrvcsproductgroupt"
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
  - product
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFINSRVCSPRODUCTGROUPT

**Cnsldtnfinsrvcsproductgroupt**

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
| `FinancialServicesProductGroup` | ✓ | |  | `cast( _Source.FinancialServicesProductGroup as fincs_finsrvcsproductgroup preserving type )` |  |  |
| `FinServicesProductGroupName` |  | |  | `cast( _Source.FinServicesProductGroupName as fincs_finsrvcsproductgroupname preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Source` | `CnsldtnIsAdditionalMasterData` |  |  |
| `_Language` | | ✓ | | | | |
| `_FinancialServicesProductGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_FinancialServicesProductGroup` | `I_CnsldtnFinSrvcsProductGroup` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true,
  technicalName: 'ICSFSPRDGRPT'
}
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M
  },
  representativeKey: 'FinancialServicesProductGroup',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnFinSrvcsProdGroupText'                        
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Fin Srvcs Product Group - Text'

define view entity I_CnsldtnFinSrvcsProductGroupT
  as select distinct from P_CnsldtnFinSrvcsProductGroupT as _Source

    inner join            I_CnsldtnFinSrvcsProductGroup  as _Main on  _Main.FinancialServicesProductGroup = _Source.FinancialServicesProductGroup
                                                                  and _Main.CnsldtnIsAdditionalMasterData = _Source.CnsldtnIsAdditionalMasterData

  association [1..1] to I_Language                    as _Language                      on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnFinSrvcsProductGroup as _FinancialServicesProductGroup on $projection.FinancialServicesProductGroup = _FinancialServicesProductGroup.FinancialServicesProductGroup
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast( _Source.Language as spras preserving type )                                        as Language,

      @ObjectModel.foreignKey.association: '_FinancialServicesProductGroup'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnFinSrvcsProdGroupVH',
          element: 'FinancialServicesProductGroup'
        }
      }]
  key cast( _Source.FinancialServicesProductGroup as fincs_finsrvcsproductgroup preserving type )       as FinancialServicesProductGroup,

      @Semantics.text
      cast( _Source.FinServicesProductGroupName  as fincs_finsrvcsproductgroupname preserving type ) as FinServicesProductGroupName,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations */
      _Language,
      _FinancialServicesProductGroup
}
where
  _Source.Language is not null
```
