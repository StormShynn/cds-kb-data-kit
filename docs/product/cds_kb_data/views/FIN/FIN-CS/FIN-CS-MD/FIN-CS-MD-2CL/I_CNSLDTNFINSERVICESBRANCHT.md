---
name: I_CNSLDTNFINSERVICESBRANCHT
description: "Cnsldtnfinservicesbrancht"
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
  - service
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFINSERVICESBRANCHT

**Cnsldtnfinservicesbrancht**

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
| `FinancialServicesBranch` | ✓ | |  | `cast( _Source.FinancialServicesBranch as fincs_financialservicesbranch preserving type )` |  |  |
| `FinancialServicesBranchName` |  | |  | `cast( _Source.FinancialServicesBranchName as fincs_finservicesbranchname preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Source` | `CnsldtnIsAdditionalMasterData` |  |  |
| `_Language` | | ✓ | | | | |
| `_FinancialServicesBranch` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_FinancialServicesBranch` | `I_CnsldtnFinServicesBranch` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true
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
  representativeKey: 'FinancialServicesBranch',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnFinServicesBranchText'                        
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Financial Services Branch - Text'

define view entity I_CnsldtnFinServicesBranchT
  as select distinct from P_CnsldtnFinServicesBranchT as _Source

    inner join            I_CnsldtnFinServicesBranch  as _Main on  _Main.FinancialServicesBranch       = _Source.FinancialServicesBranch
                                                               and _Main.CnsldtnIsAdditionalMasterData = _Source.CnsldtnIsAdditionalMasterData

  association [1..1] to I_Language                 as _Language                on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnFinServicesBranch as _FinancialServicesBranch on $projection.FinancialServicesBranch = _FinancialServicesBranch.FinancialServicesBranch
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast( _Source.Language as spras preserving type )                                           as Language,

      @ObjectModel.foreignKey.association: '_FinancialServicesBranch'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnFinServicesBranchVH',
          element: 'FinancialServicesBranch'
        }
      }]
  key cast( _Source.FinancialServicesBranch as fincs_financialservicesbranch preserving type )    as FinancialServicesBranch,

      @Semantics.text
      cast( _Source.FinancialServicesBranchName  as fincs_finservicesbranchname preserving type ) as FinancialServicesBranchName,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations */
      _Language,
      _FinancialServicesBranch
}
where
  _Source.Language is not null
```
